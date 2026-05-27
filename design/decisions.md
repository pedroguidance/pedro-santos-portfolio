# Design Decisions Log
*Running log of design decisions taken during the construction of this portfolio. Each entry: date, decision, reasoning, trade-off. Public-facing at `/decisoes`.*

---

## 2026-05-26 — Por que verde-tinta e não azul como cor acento

**Considerado**: azul SaaS padrão (`#3B82F6`); azul-noite editorial (`oklch(35% 0.15 245)`); roxo gradient AI; verde-tinta (`oklch(45% 0.15 155)`).

**Decisão**: verde-tinta.

**Reasoning**: 90% dos portfolios de designer brasileiro usam variação de azul. Azul é leitura segura mas commodity — não contribui pro positioning de diferenciação. Roxo gradient envelheceu mal e é leitura de "AI startup 2023". Verde-tinta — referência sutil a tinta de caneta-tinteiro — é editorial, raro em portfolios, e estabelece tom "operador maduro" sem custar legibilidade (contrast AA passes em ambos os modes).

**Trade-off**: alguns recruiters mais conservadores podem associar verde a sustentabilidade/ESG (não meu setor). Mitigação: usado com extrema parcimônia — apenas links inline, focus ring, e marca pessoal. Mantém leitura neutra-editorial.

---

## 2026-05-26 — Por que light primary e não dark

**Considerado**: dark primary com toggle pra light; light primary com toggle pra dark; sem toggle (forçado por preference do OS).

**Decisão**: light primary, toggle pra dark, persistência em localStorage.

**Reasoning**: portfolios de designer brasileiros tendem a default dark — pelo "look moderno" e pra esconder imperfeição visual. Light force os elementos a se sustentarem na tipografia e no espaçamento. É leitura de confiança ("não estou escondendo nada no escuro"). Dark fica disponível pra quem quer.

**Trade-off**: dark vai ser usado por ~40% da audiência (preferência crescente). Manter dark mode em paridade total exige disciplina (não pode ser afterthought).

---

## 2026-05-26 — Por que Astro e não Next.js

**Considerado**: Next.js 15, Astro 5, SvelteKit, HTML puro + Vite.

**Decisão**: Astro 5.

**Reasoning**: este é um site content-heavy (cases longos em Markdown) com pouquíssimas interações. Astro ships zero JavaScript por padrão; o framework hidrata só o que pedirmos (theme toggle, count-up). Lighthouse performance é virtualmente gratuito. Next.js entregaria as mesmas funcionalidades mas baseline maior de JS e complexidade. Markdown com Content Collections do Astro casa exatamente com o workflow "adicionar case = criar .md novo" do Pedro.

**Trade-off**: time to fix bugs e plugins é menor que ecosystem Next; alguns recursos React-specific (libraries ML cliente, dashboards complexos) exigiriam workaround.

---

## 2026-05-26 — Por que apenas 5 cases

**Considerado**: 8+ cases incluindo Workana, 1Doc, Grupo RV, Liqi; 4 cases (Neodent, Feedback, Cultura, Sesc); 5 cases incluindo Senac em andamento.

**Decisão**: 5 cases — Neodent, Feedback, Cultura Inglesa, Sesc RJ, Senac RJ.

**Reasoning**: editorial judgment > completeness. Workana, 1Doc, Grupo RV são da fase de formação — ficam no LinkedIn como histórico, não no portfólio top-level. Liqi (cripto, 8 meses) é polarizante e curto — fica no LinkedIn. Os 5 escolhidos cobrem: enterprise global premiado (Neodent), ops em escala (Feedback), métricas concretas (Cultura), institucional (Sesc), trabalho atual (Senac).

**Trade-off**: alguém querendo ver experiência cripto/web3 ou produto B2B menor não vai encontrar no portfolio — vai precisar ir no LinkedIn. Aceitável: portfólio é vitrine curatorial, não CV completo.

---

## 2026-05-26 — Por que apenas uma cor acento (verde-tinta) e não um sistema de duas

**Considerado**: acento único; sistema duo (verde-tinta + vermelho-tinta); palette de 4 (cada case com cor própria).

**Decisão**: acento único.

**Reasoning**: disciplina cromática é sinal de maturidade. Sistema duo gera tentação de aplicar diferenciação onde só ruído entraria. Palette per-case fragmenta a identidade do portfolio em vez de unificá-la.

**Trade-off**: se um case futuro pedir destaque cromático específico (ex: campanha de marca), não tenho um segundo acento "oficial". Aceitável: posso adicionar acento secundário no futuro se um case específico justificar — não preciso pré-empt agora.

---

## 2026-05-26 — Por que count-up animado nos outcomes (e não estático)

**Considerado**: outcomes estáticos (sem animação); outcomes com fade-in (genérico); count-up animado de 0 até o valor.

**Decisão**: count-up.

**Reasoning**: outcomes são o protagonistas dos cases. Count-up cria peso visual proporcional à importância — o olho do leitor é convidado a parar e absorver o número. Não é decoração — é hierarquia de atenção feita com motion. Reduced-motion fallback é o número estático.

**Trade-off**: ~1KB de JS adicional. Aceitável dentro do budget.

---

> Esta página continua sendo atualizada conforme decisões surgem.
> Última atualização: 2026-05-26.
