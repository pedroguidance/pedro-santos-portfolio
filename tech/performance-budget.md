# Performance Budget — Pedro Santos Portfolio
*Phase 3 — contrato com o build*

> Targets do positioning: portfolio sênior, leitura pesada de prosa, audiência mobile (recruiter) e desktop (design lead, CEO). Stack Astro 5 escolhida.

---

## 1. Core Web Vitals Contract (p75 field data, mobile real)

| Metric | Target (good) | Soft fail | Hard fail | Tool de validação |
|---|---|---|---|---|
| **LCP** | ≤ 2.0s | ≤ 2.5s | > 2.5s | PageSpeed Insights (field data); Lighthouse mobile (lab secondary) |
| **INP** | ≤ 100ms | ≤ 200ms | > 200ms | PageSpeed Insights; CrUX |
| **CLS** | ≤ 0.05 | ≤ 0.1 | > 0.1 | PageSpeed Insights; Lighthouse |
| **TTFB** | ≤ 400ms | ≤ 600ms | > 600ms | WebPageTest, Vercel logs |
| **FCP** | ≤ 1.0s | ≤ 1.5s | > 1.5s | Lighthouse |
| **TBT** | ≤ 150ms | ≤ 300ms | > 300ms | Lighthouse |

> Targets são **mais ambiciosos** que os "good" do Google (≤ 2.5s / ≤ 200ms / ≤ 0.1) porque (a) é um site estático sem razão pra ficar próximo do limite, (b) é portfolio de designer — qualquer score abaixo de "muito bom" lê como mediocridade técnica.

---

## 2. Asset Budgets (per route, gzipped over the wire)

### Home (rota mais crítica — recruiter persona)
| Asset type | Budget |
|---|---|
| HTML | ≤ 20 KB |
| CSS (inline crítico no head) | ≤ 8 KB |
| CSS (external, lazy) | ≤ 20 KB |
| Fonts (preloaded) | ≤ 60 KB (2 variable fonts subsetadas) |
| JS (critical, sync) | 0 KB ideal; ≤ 5 KB se necessário (theme bootstrap) |
| JS (deferred) | ≤ 10 KB (count-up + theme toggle) |
| Imagens above-the-fold | 0 KB (hero é text-only) |
| Imagens lazy (logo strip) | ≤ 30 KB total (5 logos SVG @ ~6KB each) |
| **Total página home** | **≤ 150 KB** |

### About
| Asset type | Budget |
|---|---|
| HTML | ≤ 25 KB |
| Foto Pedro (lateral, lazy) | ≤ 50 KB (AVIF, 480×640) |
| **Total** | **≤ 200 KB** |

### Case study (Cultura, Sesc, Neodent, Feedback, Senac)
| Asset type | Budget |
|---|---|
| HTML | ≤ 40 KB (prosa longa) |
| Hero image (AVIF, eager) | ≤ 80 KB (1920×1080) |
| Imagens inline (lazy) | ≤ 150 KB cada, ≤ 6 imagens |
| Vídeo (Sesc, Senac) | ≤ 2 MB (mp4 h.264 reproduzido sob click) |
| **Total página case** | **≤ 1 MB** |

### /decisoes
| Asset type | Budget |
|---|---|
| HTML | ≤ 30 KB |
| Sem imagens | 0 KB |
| **Total** | **≤ 50 KB** |

---

## 3. Asset Strategy

### Images
- **Format priority**: AVIF → WebP → JPEG/PNG. Servido via `<picture>` + Astro `<Image>` component (Sharp pipeline)
- **Sempre declarar** `width`, `height`, `aspect-ratio` (CLS = 0)
- **Above-the-fold (hero de case)**: `fetchpriority="high"`, `<link rel="preload">` no head, `loading="eager"`
- **Lazy default**: `loading="lazy"`, `decoding="async"`
- **Responsive**: `srcset` com 640w, 1024w, 1920w, 2560w
- **Logos clientes**: SVG inline (single file, no extra request), monocromáticos via `currentColor`

### Fonts
- Self-hosted woff2 variable
- Subsetadas para Latin Extended (português + acentos)
- Preload Fraunces VF + Inter VF (2 requests)
- `font-display: swap`
- Fallback chain com size-adjust metric matching:
  ```css
  @font-face {
    font-family: 'Inter Fallback';
    src: local('Arial');
    size-adjust: 107%;
    ascent-override: 90%;
    descent-override: 22%;
  }
  ```

### JavaScript
- **Default Astro = 0 JS shipped**
- Islands (apenas onde justificado):
  - Theme toggle: inline script no head (~600 bytes) + ~1KB para toggle button
  - Count-up: 1KB de JS, carregado defer com IntersectionObserver
- **Total JS shipped ≤ 5 KB** em toda página
- View Transitions: nativo do browser, zero JS — usado via Astro

### CSS
- Critical inline no `<head>` (above-the-fold) — ~8 KB
- Resto lazy via `<link rel="stylesheet">` após FCP
- Vanilla CSS com custom properties — sem Tailwind, sem CSS-in-JS runtime
- Nesting nativo (~100% browser support em 2026)
- Bundle: 1 arquivo CSS por rota, não fragmentado por componente

---

## 4. Loading Plan (above-the-fold home)

Ordem exata de fetch/render:

1. **HTML response** (TTFB ≤ 400ms via Vercel edge)
2. Browser parse, encontra:
   - `<link rel="preload">` fonts (2 requests start)
   - `<style>` inline crítico (renders immediately)
   - `<script>` inline theme bootstrap (executes, sets `data-theme` attr)
3. **FCP**: ~600ms — hero text aparece com fallback font (Inter Fallback)
4. **Fonts swap in**: ~800–900ms (Fraunces + Inter chegam) — flicker mínimo via size-adjust
5. **LCP**: ~1.0s — hero text completo + signal row de logos (SVG inline)
6. **Defer**:
   - CSS non-critical
   - Theme toggle component JS
   - Count-up component JS
   - Analytics (Plausible, 1KB defer)

---

## 5. Per-Page Performance Budget Table

| Route | LCP target | Total weight | JS budget | Notes |
|---|---|---|---|---|
| `/` (home) | ≤ 1.0s | ≤ 150 KB | ≤ 5 KB | hero text-only, logo strip lazy |
| `/sobre` | ≤ 1.5s | ≤ 200 KB | ≤ 5 KB | foto lateral lazy |
| `/cases/[slug]` | ≤ 1.5s | ≤ 1 MB | ≤ 8 KB | hero image preload + count-up |
| `/conversar` | ≤ 1.0s | ≤ 80 KB | ≤ 8 KB | form com Turnstile |
| `/decisoes` | ≤ 1.0s | ≤ 50 KB | ≤ 5 KB | text only |

---

## 6. Performance Test Plan (Visual QA executa)

### Pre-deploy (CI)
- **Lighthouse CI** em cada PR: fail se LCP > 1.5s ou Perf score < 95 em mobile
- **Bundle size check**: `npm run build` mostra bundle; fail se JS shipped > 10 KB total
- **Image audit**: `eleventy-img` ou Sharp pipeline valida que todas imagens passaram pelo build

### Post-deploy (a cada release)
- **PageSpeed Insights** em produção para home + 1 case representativo
- **WebPageTest** mobile Moto G Power 4G Tegucigalpa (representativo de mid-tier mobile real)
- **CrUX dashboard** após 28 dias — confirmar campo real bate com lab

### Test commands
```bash
# Local lighthouse
npx unlighthouse --site http://localhost:4321

# Bundle size
npm run build && du -sh dist/

# Image weights
find dist/_astro -name "*.avif" -exec du -h {} \;
```

---

## 7. Anti-patterns — bloqueio explícito

- ❌ Google Fonts CDN (self-host obrigatório — privacy + perf)
- ❌ Hero animado heavy (auto-play video, parallax, WebGL)
- ❌ Cookie banner que bloqueia LCP (Plausible não precisa)
- ❌ Calendly/widget embedded (link out apenas)
- ❌ Framework JS pra UI estática (já decidimos Astro — não baixar SDK Material/Chakra/etc.)
- ❌ Imagens em PNG quando AVIF + WebP servem (Astro Image pipeline força isso)
- ❌ Fontes em format outro que não woff2 variable
- ❌ Scripts de terceiro não-essenciais (no GTM, no GA4, no Hotjar)
- ❌ Inline base64 imagens acima de 2KB (use file separate + cache)

---

## 8. Recommended hosting + CDN

**Recomendação**: **Vercel** (tier free é generoso pra portfolio, edge network global, deploy automático via git, Image Optimization integrado se quiser).

**Alternativas válidas**:
- **Cloudflare Pages** — equivalent, gratuito, CDN superior
- **Netlify** — mais antigo, ainda solid

**Não usar**:
- Hospedagem compartilhada tradicional (cPanel, HostGator) — TTFB ruim
- Subdomínio framer.website como agora — sem controle de headers, branding pobre

**Custom domain sugerido**: `pedrosantos.design` ou `pedrosantosd.com` ou `pedrosantosdesigner.com.br` — Pedro escolhe. **Não** ficar em framer.website.

---

## 9. Definition of Done — não publicar antes de

- [ ] PageSpeed Insights mobile: LCP < 2.0s, INP < 100ms, CLS < 0.05 nas 3 páginas críticas (home + 1 case + about)
- [ ] Lighthouse mobile Perf ≥ 98 em todas páginas
- [ ] Bundle JS shipped ≤ 10 KB total
- [ ] Imagens todas em AVIF com fallback WebP
- [ ] Sem console errors/warnings em produção
- [ ] Site totalmente legível com JS disabled
- [ ] Test em Moto G Power (proxy mid-tier) via WebPageTest passes
