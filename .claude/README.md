# Portfolio Multi-Agent Pipeline

Sistema de produção do portfólio sênior do Pedro, orquestrado por agentes especialistas com três gates de avaliação por personas.

## Arquitetura

```
                         ┌──────────────────────┐
                         │  portfolio-pipeline  │ ← skill orquestradora
                         │  (skill / orchestr.) │   (você invoca esta)
                         └──────────┬───────────┘
                                    │
        ┌───────────────────────────┼───────────────────────────┐
        │                           │                           │
        ▼                           ▼                           ▼
┌──────────────┐          ┌──────────────────┐         ┌────────────────┐
│  STRATEGY    │          │   GATE PERSONAS  │         │   EXECUTION    │
├──────────────┤          ├──────────────────┤         ├────────────────┤
│ research-    │          │ persona-tech-    │         │ ux-ui-senior   │
│  strategist  │          │  recruiter       │         │ art-director   │
│              │          │ persona-design-  │         │ performance-   │
│ narrative-   │          │  lead            │         │  strategist    │
│  architect   │          │ persona-ceo-cto  │         │ frontend-      │
│              │          │                  │         │  engineer      │
│              │          │ (called at       │         │ security-      │
│              │          │  Gates 1, 2, 3)  │         │  reviewer      │
└──────────────┘          └──────────────────┘         │ a11y-          │
                                                       │  specialist    │
                                                       │ visual-qa      │
                                                       │ seo-analytics  │
                                                       └────────────────┘
```

## Os 13 agentes

| Fase | Agente | Função |
|------|--------|--------|
| 0 — Discovery | `research-strategist` | Positioning brief, benchmark, audience map |
| 1 — Narrative | `narrative-architect` | Estrutura de cases, voz, copy |
| Gate 1, 2, 3 | `persona-tech-recruiter` | Scan de 6s, ATS, signals |
| Gate 1, 2, 3 | `persona-design-lead` | Craft, processo, leadership |
| Gate 1, 3 | `persona-ceo-cto` | Impact, ROI, comunicação |
| 2 — Design | `ux-ui-senior` | IA, sistema, tokens, páginas |
| 2 — Design | `art-director` | Mood, tipografia, signature move |
| 3 — Tech spec | `performance-strategist` | Budget, Web Vitals 2026 |
| 4 — Build | `frontend-engineer` | Implementação (Astro recomendado) |
| 5 — Quality | `security-reviewer` | Headers, CSP, contact form |
| 5 — Quality | `a11y-specialist` | WCAG 2.2 AA, AAA quando viável |
| 5 — Quality | `visual-qa` | Playwright, screenshots, responsivo |
| 6 — Launch | `seo-analytics` | Meta, schema, OG, analytics privacy-first |

## Como usar

### Rodar o pipeline completo
```
Pedro: "Vamos criar o portfólio do zero"
→ skill portfolio-pipeline orquestra Phase 0 → 6
```

### Adicionar um case study
```
Pedro: "Adicionar case sobre o projeto X na fintech Y"
→ pipeline em escopo reduzido: narrative-architect (só esse case) →
  Gate 1 scoped → frontend-engineer (só essa rota) → Gate 3 scoped →
  seo-analytics (atualiza sitemap + metadata)
```

### Iterar em uma fase isolada
```
Pedro: "Refinar visual do hero"
→ ux-ui-senior + art-director → re-roda Gate 2
```

### Apenas avaliar
```
Pedro: "O que o recruiter persona acha do meu hero atual?"
→ persona-tech-recruiter sozinho contra o artefato
```

## Estrutura de pastas que o pipeline produz

```
portfolio/
├── briefs/
│   ├── positioning-brief.md       (research-strategist)
│   ├── narrative-spine.md         (narrative-architect)
│   └── cases/
│       └── <slug>.md              (narrative-architect, um por case)
├── design/
│   ├── design-spec.md             (ux-ui-senior)
│   ├── art-direction.md           (art-director)
│   ├── decisions.md               (ux-ui-senior, running log)
│   └── pages/
│       └── <page>.md              (ux-ui-senior)
├── tech/
│   ├── performance-budget.md      (performance-strategist)
│   └── security-review.md         (security-reviewer)
├── qa/
│   ├── a11y-design-review.md      (a11y-specialist — pre-build)
│   ├── a11y-audit.md              (a11y-specialist — post-build)
│   ├── visual-qa-report.md        (visual-qa)
│   └── screens/                   (Playwright screenshots)
├── launch/
│   └── seo-analytics.md           (seo-analytics)
├── pipeline-state.md              (orchestrator — source of truth)
└── src/...                        (frontend-engineer — actual code)
```

## Standards-base que os agentes carregam (já internalizado)

- **WCAG 2.2 AA** como piso (release outubro 2023, vigente em 2026), AAA onde viável.
  - Inclui as 9 novas success criteria de 2.2: target size mínimo 24×24px, dragging movements alternativos, consistent help, redundant entry, accessible authentication, etc.
- **Core Web Vitals 2026 (p75 em mobile)**:
  - LCP ≤ 2.5s (bom), > 4.0s (poor)
  - INP ≤ 200ms (bom) — substituiu FID em 2024
  - CLS ≤ 0.1 (bom)
- **Stack recomendada**: Astro 5+ (zero JS por default, content collections, image pipeline nativo, View Transitions). Justificar qualquer desvio.
- **Privacy-first analytics**: Plausible / Cloudflare / Vercel Analytics. Nunca GA4.
- **Security headers**: A+ no securityheaders.com via CSP estrita + HSTS preload + Permissions-Policy.

## Gates — princípios

1. **Cada gate tem ≥ 2 personas independentes.** Designers tendem a aprovar uns aos outros; recruiter + design-lead + ceo-cto têm objeções diferentes e isso é o ponto.
2. **FAIL volta pra menor unidade reparável.** Se só o hero falhou no scan do recruiter, o pipeline não re-roda a narrativa inteira — só re-trabalha o hero.
3. **Máximo 3 iterações por gate.** Depois disso, há um desacordo estratégico que precisa do Pedro (ex.: design-lead quer mais densidade, recruiter quer menos — alguém decide).
4. **Persona feedback é citado verbatim**, não parafraseado. A força do sistema está em manter cada POV intacto.

## Filosofia do sistema

- **Cada agente é um especialista, não um generalista educado.** Você só ganha valor multi-agente se cada um carrega expertise não-duplicada.
- **Personas são adversariais por design.** O recruiter quer menos; o design-lead quer mais profundidade; o ceo-cto quer mais negócio. A tensão é o produto.
- **Standards são atualizadas no agente.** WCAG 2.2, Web Vitals 2026, stack moderna 2026 estão dentro dos prompts — não dependem de busca em runtime.
- **O portfólio é a meta-prova.** A própria existência deste pipeline orquestrado é parte do que o portfólio do Pedro vai demonstrar: liderança em design + AI orchestration.

## Próximos passos sugeridos

1. **Validar os agentes** lendo cada `.claude/agents/<name>.md` e ajustando o tom/escopo onde quiser. São documentos vivos.
2. **Briefar o `research-strategist`** com:
   - Empresas/contextos-alvo (ex.: "quero trabalhar em fintechs Série B+ no Brasil ou remoto US")
   - 3–5 cases que você quer levar
   - Qualquer constraint (ex.: NDA, geografia, idioma do portfólio)
3. **Rodar Phase 0** isoladamente primeiro. Discovery sozinho. Não pular pra design antes do positioning estar firme.
4. **Decidir o stack** se discordar do Astro recomendado pelo `performance-strategist` (Next.js, SvelteKit, plain HTML são alternativas viáveis).
