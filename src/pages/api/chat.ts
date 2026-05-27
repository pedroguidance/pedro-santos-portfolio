/**
 * AskAI chat endpoint — streams Gemini 2.5 Flash responses about Pedro.
 *
 * Free tier on aistudio.google.com — no card required.
 * Static site + this single SSR route means Vercel deploys a serverless function
 * for /api/chat only; everything else stays static.
 */
export const prerender = false;

import type { APIRoute } from 'astro';
import { GoogleGenAI } from '@google/genai';
import { SYSTEM_PROMPT } from '~/lib/knowledge';
import { checkAndConsume, getClientIP } from '~/lib/rate-limit';

const MODEL = 'gemini-2.5-flash';
const MAX_TOKENS = 1024;
const MAX_HISTORY_TURNS = 16;
const MAX_MESSAGE_CHARS = 2000;

type ChatMessage = { role: 'user' | 'assistant'; content: string };

function isValidMessages(value: unknown): value is ChatMessage[] {
  if (!Array.isArray(value)) return false;
  if (value.length === 0 || value.length > 50) return false;
  return value.every((m) => {
    if (!m || typeof m !== 'object') return false;
    const msg = m as Record<string, unknown>;
    return (
      (msg.role === 'user' || msg.role === 'assistant') &&
      typeof msg.content === 'string' &&
      msg.content.length > 0 &&
      msg.content.length <= MAX_MESSAGE_CHARS
    );
  });
}

const apiKey =
  import.meta.env.GEMINI_API_KEY ?? process.env.GEMINI_API_KEY;

const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

function jsonError(status: number, body: Record<string, unknown>, extra: HeadersInit = {}): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json', ...extra },
  });
}

export const POST: APIRoute = async ({ request }) => {
  if (!ai) {
    return jsonError(503, { error: 'ai-unavailable', message: 'GEMINI_API_KEY não configurada.' });
  }

  const ip = getClientIP(request);
  const limit = checkAndConsume(ip);
  if (!limit.ok) {
    const msg =
      limit.reason === 'global-day'
        ? 'O chat atingiu o limite diário global. Tenta de novo amanhã ou fala direto com o Pedro.'
        : 'Muitas perguntas seguidas. Aguarda um pouco e tenta de novo.';
    return jsonError(
      429,
      { error: 'rate-limited', reason: limit.reason, message: msg },
      { 'retry-after': String(limit.retryAfterSeconds) }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonError(400, { error: 'invalid-json' });
  }

  const { messages } = (body ?? {}) as { messages?: unknown };
  if (!isValidMessages(messages)) {
    return jsonError(400, { error: 'invalid-messages' });
  }

  // Trim to recent turns, ensure conversation starts with a user message
  const trimmed = messages.slice(-MAX_HISTORY_TURNS);
  while (trimmed.length > 0 && trimmed[0].role !== 'user') trimmed.shift();
  if (trimmed.length === 0) {
    return jsonError(400, { error: 'no-user-message' });
  }

  // Gemini uses role "model" instead of "assistant" and a Content[] shape
  const contents = trimmed.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  const encoder = new TextEncoder();
  const stream = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        const geminiStream = await ai.models.generateContentStream({
          model: MODEL,
          contents,
          config: {
            systemInstruction: SYSTEM_PROMPT,
            maxOutputTokens: MAX_TOKENS,
          },
        });

        for await (const chunk of geminiStream) {
          const text = chunk.text;
          if (text) controller.enqueue(encoder.encode(text));
        }
      } catch (err) {
        console.error('[api/chat] stream error', err);
        const msg = err instanceof Error ? err.message : 'erro desconhecido';
        controller.enqueue(encoder.encode(`\n\n[erro: ${msg}]`));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
    },
  });
};

export const GET: APIRoute = () =>
  jsonError(405, { error: 'method-not-allowed', message: 'Use POST.' });
