# Art Direction — Pedro Santos Portfolio
*Phase 2 output (par com Design Spec)*

> Positioning âncora: Head of Design que orquestra design, operação e IA em escala
> Voice âncora: editorial-confiante, founder personality, minimal-rich

---

## 1. Mood Vector

| Eixo | Posição | Justificativa |
|---|---|---|
| **Era** | contemporâneo (75%) ↔ futurist sutil (25%) | Não retro, não classicista, mas com 1 elemento futurist (OG image generativa, view transitions) que sinaliza maturidade técnica sem virar cyber |
| **Surface** | screen-native (predominante) com toque editorial print | Tipografia respira como página impressa; o resto é nativo de tela. Sem "papel digital" simulado, sem skeumorfismo |
| **Density** | minimal-rich | Hero respiroso e calmo; cases ricos em informação e densidade textual. A density entra onde o leitor está disposto a investir tempo, não onde só está passando |
| **Energy** | still com micro-cinético | Tudo parado por default; motion existe pra orientar leitura (scroll-driven), nunca pra impressionar. Zero parallax. Zero hover-followers |
| **Mood** | neutro com calor pontual | Base de tons frios/neutros (gray/off-white). Calor restrito a 1 cor acento — usado com extrema parcimônia. Não é "warm" geral nem "severe" total |
| **Edge** | precise com humanidade | Geometria precisa, mas voz humana. Tipografia sem stencil/brutalista. Espaçamento generoso mas não místico |

### Defesa contra o crítico mais provável
**design-lead persona**: "Não é genérico demais? Tem mil portfolios com base neutra + 1 acento."

**Resposta**: Sim, e é proposital. Pedro está se vendendo como **operador maduro**, não como criativo experimental. A neutralidade é assinatura quando combinada com (a) escrita autoral forte, (b) decisão visual disciplinada onde os outros se permitem ruído. A diferenciação não vem do visual extremo — vem do conteúdo e da consistência de execução.

---

## 2. Reference Constellation

### 2 de fora do design
1. **The New York Times Magazine (impresso)** — densidade tipográfica editorial; o jeito como texto longo é arquitetado pra leitura. *Pegar*: hierarquia tipográfica generosa, drop caps sutis, marginalia textual. *Deixar*: o serif clássico (Pedro usa sans).
2. **Aesop — packaging + tipografia institucional** — restrição extrema, cor única, gravidade. *Pegar*: a confiança de não decorar. *Deixar*: o tom precioso/luxo (Pedro é operador, não artesão).

### 2 de peer designers
3. **Rauno Freiberg (rauno.me)** — peer de senioridade equivalente em scale-up. *Pegar*: hero quietude, density nos posts, voice autoral. *Deixar*: o nível de animação custom (exige fulltime dev focus).
4. **HG/DES Portfolio 2026** (Awwwards Nominee) — agência-grade bem feito. *Pegar*: tipografia bold, grid disciplinado, transitions limpas. *Deixar*: o vibe agency-multi-cliente (Pedro é IC Head).

### 2 de produto/brand
5. **Linear (linear.app)** — voz de produto técnica + visual restrito + cor azul-frio assinatura. *Pegar*: linguagem direta, type system disciplinado. *Deixar*: o cinza-azulado SaaS genérico (Pedro precisa de mais alma).
6. **Vercel docs (vercel.com/docs)** — clareza de informação em densidade alta. *Pegar*: hierarquia em texto longo, code/quote treatment. *Deixar*: o dark mode SaaS template.

### 2 de tipografia
7. **PP Editorial New (Pangram Pangram)** — display com personalidade editorial, peso variável. Funciona em hero e em case headlines. Licença paga, ~$200 single-license.
8. **GT America (Grilli Type)** OU **Söhne (Klim)** — body sans com personalidade técnico-suíça. **Alternativa free de altíssima qualidade**: **Inter Variable** (Rasmus Andersson, open source) — não é "fácil demais", é a escolha certa quando o orçamento é restrito.

---

## 3. Typography Direction

### Decisão recomendada (escolher um dos cenários)

#### Cenário A — Paid, máxima personalidade
- **Display**: **PP Editorial New** (Pangram Pangram) — pesos: Ultralight + Regular Italic. Licença single-domain ~$200
- **Body**: **GT America** (Grilli Type) — Regular + Medium. Licença ~$300 web
- **Mono**: **JetBrains Mono** (free, open source) — apenas se cases tiverem code snippet

#### Cenário B — Free, ainda alto nível ⭐ DEFAULT
- **Display**: **Tiempos Headline** (Klim) — uma das opções gratuitas via Google Fonts é **Fraunces** (rachelandrew/CommercialType) ou **Newsreader** — variáveis, editorial-grade
- **Body**: **Inter Variable** — Rasmus Andersson; é o melhor sans gratuito disponível em 2026 e ninguém olha pra um portfólio e desclassifica por ele
- **Mono**: **JetBrains Mono** se precisar

#### Cenário C — Brave / signature
- **Display único** (sem body separado): **Söhne Mono Halbfett** ou **PP Neue Montreal** servindo H1–H6. Body em Söhne Buch. Tudo da mesma família — assinatura tipográfica unificada.

**Recomendação final**: **Cenário B** pra v1 (orçamento zero, qualidade alta, sem licença complicada). Migrar pra Cenário A em v2 se Pedro quiser investir em personalidade tipográfica distintiva.

### Modular scale
Razão **1.250** (major third) — entre o overused 1.2 e o exagerado 1.333. Steps:
- xs: 0.80 rem (12.8px)
- sm: 1.00 rem (16px) — body base
- md: 1.25 rem (20px) — large body
- lg: 1.56 rem (25px)
- xl: 1.95 rem (31px)
- 2xl: 2.44 rem (39px)
- 3xl: 3.05 rem (49px)
- display: clamp(3.5rem, 6vw + 1rem, 6rem) — fluid

### Loading strategy
1. Subset Latin Extended (Português + acentos) apenas — descarta cirílico, grego, asiáticos
2. Preload weight crítico do display + body
3. `font-display: swap`
4. Fallback chain com size-adjust: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` com `@font-face` override metric matching

---

## 4. Color Mood

### Dominante (anchor)
- **Off-white**: `oklch(98% 0.005 90)` — papel quente sutil, NÃO branco puro
- **Tinta preta**: `oklch(15% 0.01 270)` — quase preto, com hint de azul muito sutil, NÃO black puro

### Suporte (neutrals)
- **Cinza papel**: `oklch(94% 0.005 90)` — surface secondary
- **Cinza meio**: `oklch(55% 0.01 270)` — meta text, captions
- **Cinza linha**: `oklch(88% 0.005 90)` — borders, dividers

### Acento (uma única cor, usada com extrema parcimônia)
- **Tinta acento — verde tinta** ⭐ RECOMENDADO
  - `oklch(45% 0.15 155)` — verde-pinheiro, NÃO verde "tech". Lembra tinta de caneta-tinteiro. Diferenciado.
  - Uso: links inline, current state em nav, focus ring, marca pessoal (monograma)
  - Por que verde e não azul: 90% dos portfolios usam azul. Verde-tinta é editorial, vintage-confiante, raro
- **Alternativa**: **Vermelho-tinta** `oklch(50% 0.18 25)` — mais ousado, mais editorial print
- **Alternativa segura**: **Azul-noite** `oklch(35% 0.15 245)` — mais corporativo, menos diferenciado

### Dark mode
- **Background**: `oklch(13% 0.01 250)` — quase preto, hint azul-noite
- **Surface**: `oklch(17% 0.01 250)` — surface elevada
- **Text primary**: `oklch(95% 0.005 90)` — quase branco, hint papel
- **Acento adapta**: verde-tinta passa pra `oklch(65% 0.15 155)` no dark — clareia, mantém matiz

### "Não" list (3 cores banidas + justificativa)
- ❌ **Azul SaaS** (`#3B82F6` tipo) — overused, sem personalidade, lê como template Tailwind
- ❌ **Roxo gradient** — "AI startup 2023" — clichê que envelheceu mal
- ❌ **Verde Bitcoin/Cripto** — confunde Pedro com universo crypto via Liqi, não é o ângulo

### Modo primário
**Light é o primário.** Justificativa: portfolios sérios brasileiros são quase todos dark — light com tipografia editorial é diferenciado e lê como confiança (não esconde imperfeição no escuro). Toggle pra dark existe.

---

## 5. Imagery & Asset Direction

### Photography
- **Sem foto headshot do Pedro na home.** Cabe no About, lateral, ~480px wide, p&b ou sutil grade. Não centrado, não grande.
- Pedro disse ter **fotos e vídeos das apresentações no Sesc e Senac** — esses são ouro pros respectivos cases. Usar em frame contido, com legenda explicando o evento, NÃO como hero decorativo

### Case artifact treatment
- Mockups de tela: apresentados em frames sutis (subtle elevation/shadow), aspect ratio consistente (3:2 ou 16:10), NUNCA em moldura "browser fake" ou "device frame" exagerado
- Diagramas, fluxos, BPMNs: redesenhados em estilo coerente do portfolio (mesma tipografia, mesma cor de linha), nunca screenshot original do Miro/FigJam
- Antes/depois: lado a lado em mobile = empilhado; em desktop = grid 2 col
- Imagens com fundo branco no light mode: ok, mas com inset shadow sutil pra separar do paper

### Headshot
- Se incluído: 1 foto, lateral no About, 480×640px aprox, p&b ou sutil dessaturação
- Pedro NÃO sorri pra câmera tipo LinkedIn — expressão lendo algo, escrevendo, ou em campo (chácara, evento)

### Pattern / texture
- **Zero textura ou ruído por default**. Surface limpa.
- Exceção única: **page edge marker** — uma linha fina no topo de cada página (1px verde-tinta) que funciona como assinatura discreta. NÃO em todas páginas — só home + cases.

---

## 6. Motion Personality

- **Personalidade**: contida, mecânica precisa. Nunca playful, nunca dramatic.
- **Motion principal**: scroll-driven reveals (CSS `animation-timeline: scroll()` nativo em 2026) — texto sobe + fade in com 50ms stagger entre linhas
- **View transitions**: entre páginas, usar a View Transitions API nativa do Astro 5+ — pra mudança de página parecer contínua, não recarga
- **Motion banido**:
  - Parallax (qualquer)
  - Mouse-follower / custom cursor
  - Auto-play video
  - Scroll-jacking / scroll-snap heavy
  - "Magnetic" hover em botões
  - Letter-by-letter typewriter animation

### Signature motion
> **Os números de outcome aparecem com count-up animado** (de 0 até o valor final, ~800ms, ease-out), e somente quando entram no viewport. É uma referência sutil ao "outcome literacy" do positioning — os números são protagonistas, e a animação dá peso visual proporcional à importância.

Reduced-motion: count-up fica static (já mostra o final), nada quebra.

---

## 7. The Signature Move

### Opção escolhida ⭐ **A "Decisões" — um documento vivo no portfolio**

**O que é**: uma página `/decisoes` listando as decisões de design tomadas durante a construção do próprio portfolio (ex: "por que verde-tinta e não azul", "por que Astro e não Next.js", "por que matei a feature X"), com data e raciocínio.

**Por que isso e não outra coisa**:
- É 100% único — não existe portfolio assim no mercado brasileiro
- Prova o positioning ("Head que articula decisão e trade-off") sem precisar contar — mostra
- Custa pouco de produzir (Pedro JÁ tem o `design/decisions.md` que produzimos durante o pipeline — basta publicar)
- É o tipo de página que um Design Lead/Head abre, lê, e pensa "essa pessoa pensa diferente"
- Funciona como blog sem o compromisso de blog (não precisa publicar semanalmente — só quando uma decisão é tomada)

**Defesa contra críticas**:
- *Recruiter persona*: "Recruiter não vai ler isso." — correto, e tudo bem. Não é pra recruiter. É pra Design Lead persona, que importa mais na hierarquia de aprovação.
- *Design Lead persona*: "Não é navel-gazing?" — Se for bem escrito (curto, específico, com decisão real), não é. Se virar diário pessoal, é. Disciplina: cada entrada tem data, decisão, raciocínio, em ≤ 100 palavras.

**Localização**: rodapé do site, link `Decisões` no footer (não destacado em nav primary)

### Opção descartada (mas considerada)
- "Now page" tipo nownownow.com — descartada porque é commodity, todo mundo faz, baixa diferenciação
- 3D / WebGL — fora de tom (Pedro é operador, não craft-WebGL designer)
- Live cursor / multi-user pointer — gimmick

---

## 8. O que esse portfolio NUNCA vai parecer

1. **Bruno Simon** — WebGL playground. Não é Pedro. Pedro é editorial-operador, não brincalhão-craft.
2. **Read.cv / Notion template** — bom o suficiente pra mid, abaixo do bar do Pedro
3. **Framer template default** — exatamente o que Pedro tem hoje, e o motivo da diagnostic anterior
4. **Dark mode SaaS dashboard vibe** (tipo Vercel docs sem alma) — corporativo demais
5. **Awwwards extreme animation** — Pedro não vai investir 6 meses em WebGL custom, e nem precisa

---

## 9. Handoff para `ux-ui-senior`

Decisões que ux-ui-senior deve respeitar quando montar o `design-spec.md`:
- Tipografia: **Cenário B** (Fraunces/Newsreader display + Inter Variable body)
- Cor acento: **Verde-tinta** `oklch(45% 0.15 155)`
- Modo primário: **light**, com dark mode toggle
- Motion: signature = count-up de outcomes, scroll-driven reveals com 50ms stagger
- Signature page: `/decisoes`
- Sem foto na home; foto pequena lateral no About; fotos/vídeos do Pedro nos cases Sesc + Senac
