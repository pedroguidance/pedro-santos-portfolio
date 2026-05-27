# Pipeline State
*Source of truth para o estado de produção do portfólio.*
*Last updated: 2026-05-26*

## Phase atual: 4 (Build) — entregue parcialmente

## Gates completos
- ❌ Gate 1 (narrative review) — pendente: rodar personas contra a narrative-spine
- ❌ Gate 2 (design review) — pendente: rodar personas contra o design construído
- ❌ Gate 3 (live site review) — pendente: rodar personas contra o site em preview

## Artifact ledger

### Phase 0 — Discovery ✅
- `briefs/positioning-brief.md` — produzido em 2026-05-26
- Ângulo escolhido: **AI-augmented Design Leader** (com fallback A — Head enterprise — em SEO/SERP)

### Phase 1 — Narrative ✅
- `briefs/narrative-spine.md` — copy completo de home, about, contact, CTAs
- `briefs/cases/neodent.md` — completo
- `briefs/cases/programa-feedback.md` — completo
- `briefs/cases/cultura-inglesa.md` — completo (depende confirmação fonte/janela das métricas)
- `briefs/cases/sesc-rj.md` — completo (falta uma métrica de outcome)
- `briefs/cases/senac-rj.md` — stub (Pedro fornece conteúdo)

### Phase 2 — Design ✅
- `design/art-direction.md` — mood vector, typography (Fraunces + Inter), color (verde-tinta), signature move (/decisoes)
- `design/design-spec.md` — system completo: tokens, components, page specs, a11y rules
- `design/decisions.md` — 6 decisões iniciais documentadas

### Phase 3 — Performance ✅
- `tech/performance-budget.md` — targets, budgets per route, test plan, hosting recommendation

### Phase 4 — Build ✅ (scaffold runnable)
Código produzido:
- `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`, `.env.example`
- `src/styles/tokens.css`, `src/styles/global.css`
- `src/lib/site-meta.ts`
- `src/layouts/Base.astro`, `src/layouts/Case.astro`
- `src/components/Header.astro`, `Footer.astro`, `ThemeToggle.astro`, `CaseCard.astro`, `CountUp.astro`, `LogoStrip.astro`
- `src/pages/index.astro`, `sobre.astro`, `conversar.astro`, `decisoes.astro`, `cases/[slug].astro`, `404.astro`
- `src/content.config.ts` (schema Astro Content Collections)
- `src/content/cases/*.md` × 5 (Neodent, Programa Feedback, Cultura Inglesa, Sesc RJ, Senac RJ stub)
- `public/robots.txt`, `public/favicon.svg`

## Pendente

### Bloqueando publicação (Pedro)
1. **Confirmar email primário** — usar `pedrosantosdesigner@outlook.com` ou outro? Atualizar em `src/lib/site-meta.ts` se diferente
2. **Confirmar domínio** — sugerido `pedrosantos.design`. Comprar e configurar DNS
3. **Métricas Cultura Inglesa** — confirmar fonte e janela temporal (recruiter persona vai sinalizar gap se não estiver explícito)
4. **Métricas Programa Feedback** — ao menos uma métrica de outcome quantificada
5. **Métricas Sesc RJ** — ao menos uma métrica ou indicador qualitativo-específico
6. **Senac RJ** — conteúdo completo do case
7. **NDA Straumann/Neodent** — confirmar o que pode ser publicado vs precisa adaptar
8. **Fotos e vídeos** das apresentações no Sesc e Senac — Pedro mencionou que tem; integrar nos respectivos cases
9. **Foto pessoal pro About** — 480×640, p&b ou sutil dessaturação
10. **Logos dos clientes** — SVGs em `/public/logos/`

### Assets do framework (não-bloqueio, baixar antes de buildar)
- `public/fonts/Fraunces-VariableFont.woff2` — baixar em https://fonts.google.com/specimen/Fraunces (download static, file weight variable)
- `public/fonts/Fraunces-Italic-VariableFont.woff2` — opcional, se quiser usar italic
- `public/fonts/InterVariable.woff2` — baixar em https://rsms.me/inter/ (single variable file)

### Phase 5 — Quality (não iniciada)
- Security review (CSP, headers, contact form)
- A11y audit (live site, axe-core, manual SR)
- Visual QA (Playwright cross-browser + breakpoints)

### Phase 6 — Launch (não iniciada)
- SEO metadata final + OG images generativas
- Schema.org Person + CreativeWork per case
- sitemap.xml + llms.txt
- Analytics setup (Plausible recomendado)
- DNS + custom domain
- Submit GSC + Bing Webmaster

## Próximas decisões de Pedro

1. **Comprar domínio** (sugiro `pedrosantos.design`) e configurar Vercel/Cloudflare Pages
2. **Decidir sobre Senac RJ**: aguardar conteúdo completo antes de publicar OU publicar com stub e atualizar depois
3. **Decidir tom de NDA Straumann**: revisão jurídica do conteúdo do case Neodent antes de publicar
4. **Confirmar paleta**: verde-tinta é uma decisão visual de risco moderado. Quer testar 1-2 alternativas antes de fechar?
5. **Confirmar tipografia**: Fraunces + Inter (free, alto nível) OU investir em PP Editorial New + GT America (~$500 total)?
