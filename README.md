# Pedro Santos — Portfolio

Portfolio site de Pedro Santos, Head of Design at Guidance.
Produzido via pipeline multi-agente, documentado em [`.claude/README.md`](.claude/README.md).

---

## Stack

- **Astro 5+** (zero JS por default, content collections nativas)
- **Vanilla CSS** com design tokens em custom properties (OKLCH)
- **Fraunces + Inter Variable** (self-hosted woff2 variable fonts)
- **Markdown** para case studies (`src/content/cases/`)
- **Plausible** (privacy-first analytics — sem cookies, sem banner)
- **Vercel** ou Cloudflare Pages para hosting

## Rodar localmente

Pré-requisitos: Node.js ≥ 20.

```bash
# 1. Instalar dependências
npm install

# 2. Baixar fonts (one-time setup)
#    Fraunces: https://fonts.google.com/specimen/Fraunces (download zip, variable)
#    Inter:    https://rsms.me/inter/
#    Coloque os arquivos .woff2 em /public/fonts/:
#      Fraunces-VariableFont.woff2
#      InterVariable.woff2

# 3. Configurar variáveis de ambiente
cp .env.example .env
# Editar .env com email/whatsapp/CV corretos

# 4. Dev server
npm run dev
# Abrir http://localhost:4321

# 5. Build de produção
npm run build
npm run preview
```

## Estrutura

```
.
├── briefs/                  # Outputs do pipeline (positioning, narrative, cases)
├── design/                  # Specs de design (art-direction, design-spec, decisions)
├── tech/                    # Specs técnicas (performance-budget, security)
├── qa/                      # (futuro) Reports de QA
├── launch/                  # (futuro) SEO + analytics specs
├── .claude/                 # Pipeline de agentes
│   ├── agents/              # 13 agentes especialistas
│   ├── skills/              # Skill orquestradora
│   └── README.md            # Documentação do sistema
├── public/
│   ├── fonts/               # woff2 self-hosted (Pedro: baixar)
│   ├── logos/               # SVGs de clientes (Pedro: adicionar)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/          # Header, Footer, CaseCard, ThemeToggle, CountUp, LogoStrip
│   ├── content/
│   │   └── cases/           # 5 .md por case — single source of truth do site
│   ├── layouts/             # Base, Case
│   ├── lib/                 # site-meta.ts
│   ├── pages/               # index, sobre, conversar, decisoes, cases/[slug], 404
│   ├── styles/              # tokens.css, global.css
│   └── content.config.ts    # Schema das collections
├── pipeline-state.md        # Estado atual da produção
└── README.md
```

## Adicionar um novo case

1. Criar `src/content/cases/<slug>.md` com frontmatter conforme schema em `src/content.config.ts`
2. Atualizar campo `order` para posicionar entre os cases existentes
3. (Opcional) Adicionar hero image em `/public/cases/<slug>-hero.avif` e referenciar via `coverImage`
4. Build local: `npm run dev`
5. Para gate review: invocar `portfolio-pipeline` skill (vide `.claude/README.md`)

## Editar conteúdo existente

Conteúdo dos cases vive em `src/content/cases/<slug>.md`. Editar markdown direto. Frontmatter define metadados estruturais (slug, order, metrics, role, etc.) — corpo é prose livre.

Conteúdo das outras páginas (home, sobre, conversar) está embutido nas próprias páginas `.astro` em `src/pages/`. Editar direto no JSX-like.

## Sistema de design

Tokens em [`src/styles/tokens.css`](src/styles/tokens.css). Spec em [`design/design-spec.md`](design/design-spec.md). Decisões documentadas em [`design/decisions.md`](design/decisions.md) — publicadas em `/decisoes`.

## Deploy

Recomendado: **Vercel** (free tier, edge global, deploy automático via git).

```bash
# Via Vercel CLI
npx vercel

# Ou conectar repositório no dashboard Vercel
```

Adicionar variáveis de ambiente do `.env` no dashboard Vercel.

## Pipeline de produção

Este portfólio foi produzido por um pipeline de 13 agentes especialistas + 1 skill orquestradora, documentado em [`.claude/README.md`](.claude/README.md). Para adicionar cases ou iterar:

- **Adicionar case study**: invoque o `narrative-architect` agent com o brief do case
- **Iterar design**: invoque `ux-ui-senior` + `art-director`
- **Auditar QA**: invoque `a11y-specialist` + `visual-qa` + `security-reviewer`

## Estado atual

Ver [`pipeline-state.md`](pipeline-state.md) para o status completo (artifacts produzidos, decisões pendentes, próximos passos).

## Licença

Conteúdo (textos, imagens dos cases) © Pedro Santos. Código MIT.
