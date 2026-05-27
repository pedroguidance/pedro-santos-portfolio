/**
 * In-memory rate limiter for the AskAI chat endpoint.
 *
 * Two layers:
 *  1. Per-IP — protects against a single visitor spamming
 *  2. Global daily — caps total cost exposure to the Anthropic API
 *
 * In serverless (Vercel), state is per warm instance. With low traffic that's
 * a conservative enough proxy; for higher scale, swap for Vercel KV / Upstash.
 */

const HOUR_MS = 60 * 60 * 1000;
const DAY_MS = 24 * HOUR_MS;

// Per-IP limits
const IP_HOURLY_MAX = 15;
const IP_DAILY_MAX = 40;

// Global daily cap — tuned to stay under Gemini 2.5 Flash free tier (~250 RPD).
// Hitting this returns a friendly 429 instead of letting Gemini itself reject.
const GLOBAL_DAILY_MAX = 220;

type IPRecord = {
  hourCount: number;
  hourResetAt: number;
  dayCount: number;
  dayResetAt: number;
};

const ipBuckets = new Map<string, IPRecord>();
let globalDayCount = 0;
let globalDayResetAt = Date.now() + DAY_MS;

export type RateLimitResult =
  | { ok: true }
  | { ok: false; reason: 'ip-hour' | 'ip-day' | 'global-day'; retryAfterSeconds: number };

export function checkAndConsume(ip: string): RateLimitResult {
  const now = Date.now();

  // Global daily cap
  if (now >= globalDayResetAt) {
    globalDayCount = 0;
    globalDayResetAt = now + DAY_MS;
  }
  if (globalDayCount >= GLOBAL_DAILY_MAX) {
    return {
      ok: false,
      reason: 'global-day',
      retryAfterSeconds: Math.ceil((globalDayResetAt - now) / 1000),
    };
  }

  // Per-IP
  let rec = ipBuckets.get(ip);
  if (!rec) {
    rec = {
      hourCount: 0,
      hourResetAt: now + HOUR_MS,
      dayCount: 0,
      dayResetAt: now + DAY_MS,
    };
    ipBuckets.set(ip, rec);
  }

  if (now >= rec.hourResetAt) {
    rec.hourCount = 0;
    rec.hourResetAt = now + HOUR_MS;
  }
  if (now >= rec.dayResetAt) {
    rec.dayCount = 0;
    rec.dayResetAt = now + DAY_MS;
  }

  if (rec.hourCount >= IP_HOURLY_MAX) {
    return {
      ok: false,
      reason: 'ip-hour',
      retryAfterSeconds: Math.ceil((rec.hourResetAt - now) / 1000),
    };
  }
  if (rec.dayCount >= IP_DAILY_MAX) {
    return {
      ok: false,
      reason: 'ip-day',
      retryAfterSeconds: Math.ceil((rec.dayResetAt - now) / 1000),
    };
  }

  rec.hourCount += 1;
  rec.dayCount += 1;
  globalDayCount += 1;

  // Opportunistic cleanup — drop records whose day window already expired
  if (ipBuckets.size > 5000) {
    for (const [key, r] of ipBuckets) {
      if (now >= r.dayResetAt) ipBuckets.delete(key);
    }
  }

  return { ok: true };
}

export function getClientIP(request: Request): string {
  const fwd = request.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  const real = request.headers.get('x-real-ip');
  if (real) return real.trim();
  return 'unknown';
}
