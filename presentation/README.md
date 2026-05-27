# Apresentação Executiva — Pedro Santos
*13 slides. ~12 min de pitch + 15 min de Q&A. Aprofundamento em 2 cases, evidência rápida em 3.*

> **Princípio editorial:** prolixidade mata pitch executivo. Cinco cases superficiais não provam nada — viram inventário. Esta versão **aprofunda Neodent (3 slides) e Cultura Inglesa (2 slides)** e oferece os outros 3 como **evidência adicional num único slide compacto**, com aprofundamento sob demanda na Q&A.

---

## Como usar

### Abrir
```bash
# A partir da raiz do projeto
npx serve presentation
# ou
python -m http.server -d presentation 8080
```

Ou simplesmente duplo-clique em `index.html`.

### Atalhos de teclado

| Tecla | Ação |
|---|---|
| `→` / `↓` / `Space` / `Page Down` | Próximo slide |
| `←` / `↑` / `Page Up` | Slide anterior |
| `Home` / `End` | Primeiro / último |
| `1`–`9` | Jump direto |
| `F` | Tela cheia |
| `T` | Alterna light ↔ dark |
| `O` / `Esc` | Modo overview (grade) |

### Exportar para PDF
1. Abra `index.html` no navegador
2. `Ctrl/Cmd + P`
3. Destino: "Salvar como PDF"
4. Tamanho da página: **personalizado 1920×1080**
5. Margens: nenhuma
6. Cor de fundo: **ativado** (verde-tinta precisa aparecer)

### URL direta para slide específico
`presentation/index.html#7` abre direto no slide 7 — útil para compartilhar com o entrevistador depois.

---

## Estrutura — 13 slides

Arco narrativo segue o **Sparkline de Nancy Duarte** (alternância what is ↔ what could be), com a frase-âncora "Design liderado em escala. Operação, produto, IA." ressoando em 3 momentos (slides 2, 12, 13) para encoding mnemônico.

| # | Slide | Função narrativa | Persona alvo | Tempo |
|---|---|---|---|---|
| 01 | **Capa** | Primacy effect — Head of Design ancorado | Recruiter | 15s |
| 02 | **Big Idea** | "Design liderado em escala. Operação, produto, IA." | Todos | 20s |
| 03 | **Identidade** | Mata 3 objeções do recruiter em 30s | Recruiter | 45s |
| 04 | **A tensão** | What is ↔ what could be lado a lado | Lead + CEO | 70s |
| 05 | **Trajetória** | Timeline 2018→2026 (anti-objeção "case study club") | Recruiter + Lead | 30s |
| 06 | **Neodent · A situação** | Reframing como prova de senioridade | CEO + Lead | 90s |
| 07 | **Neodent · O sistema** | 4 decisões com trade-off explícito | Design Lead | 120s |
| 08 | **Neodent · O resultado** | Straumann Global Award + impacto operacional | Todos | 80s |
| 09 | **Cultura Inglesa · Estratégia** | Super App + 3 pilares + faseamento | CEO + Lead | 70s |
| 10 | **Cultura Inglesa · Números** | 20%→60%, 35→70+, 85%→92% (count-up) | CEO/CTO | 60s |
| 11 | **Evidência adicional** | Feedback + Sesc + Senac em 1 slide com big numbers | Todos | 60s |
| 12 | **Como lidero + Fit** | 4 princípios + frase-âncora (2ª) | Lead + CEO | 90s |
| 13 | **CTA + Fechamento** | Reverse pitch + frase-âncora (3ª) | Todos | 30s |

**Total ~12 minutos.** Resto = Q&A.

---

## O que mudou em relação à versão anterior

A versão anterior tinha **17 slides** e tentava cobrir todos os 5 cases com profundidade similar. O feedback foi: vira inventário, não argumento. Esta versão:

| Antes (17 slides) | Agora (13 slides) | Por quê |
|---|---|---|
| 4 + 5 separados (what is / could be) | 1 slide com 2 colunas | Contraste fica mais nítido lado a lado |
| 7 + 8 (Neodent) | 6, 7, 8 (situação, sistema, resultado) | Neodent ganha 3 slides — vira argumento |
| 9 + 10 (Feedback) | bloco no slide 11 | Big number "1.500 pessoas em campo" |
| 11 (Cultura) | 9 + 10 (estratégia + números) | Cultura ganha 2 slides — métrica publicável |
| 12 (Sesc + Senac) | bloco no slide 11 | Junta os 3 cases "complementares" em 1 |
| 13 + 14 (lidero + fit) | 12 combinado | "Como lidero" só funciona com "o que trago" |
| 15 (edge/honesty) | removido | Self-disclosure ao vivo é mais forte que slide |
| 16 + 17 (CTA + obrigado) | 13 combinado | Fechamento único, frase-âncora final |

**Princípio:** profundidade onde importa, síntese onde basta.

---

## Identidade visual

Toda a apresentação herda o sistema do portfólio:

- **Tipografia**: Fraunces (display, com itálico) + Inter (body)
- **Cor acento**: verde-tinta `oklch(45% 0.15 155)` — referência a tinta de caneta-tinteiro
- **Modo primário**: light (toggle pra dark via `T`)
- **Spacing**: base 4px, escala modular
- **Motion**: scroll-driven reveals + count-up nos outcomes da Cultura Inglesa
- **Linha-assinatura**: 1px verde-tinta no topo de cada slide

Respeita `prefers-reduced-motion`.

---

## Técnicas de PNL aplicadas

1. **Primacy effect (slide 1)** — "Head of Design at Guidance" + logos premium ancorados na primeira impressão.
2. **Big Idea repetido 3x** (slides 2, 12, 13) — encoding mnemônico.
3. **Sparkline de Duarte** (slide 4) — contraste palavra-a-palavra: silos/sistema, buzzword/POC.
4. **Triplets** (regra dos três) — "design, operação, IA" / "Aprender, Progredir, Resolver" / "framing, decisão, outcome".
5. **Future pacing** — convidar a audiência a imaginar você operando.
6. **Number anchoring** — 1.500 pessoas, 100+ países, 20%→60%, 10 anos.
7. **Reverse pitch** (slide 13) — "onde minha experiência te ajuda mais?" devolve poder.
8. **Pausas estratégicas** — 2s depois de frases-âncora.
9. **Power pose** (Amy Cuddy) — 2 min antes da apresentação.
10. **Anchor físico de confiança** — polegar + indicador no início de cada slide.

---

## Tratamento de objeções por persona

Cada objeção típica das 3 personas tem **resposta de gatilho** documentada no [SPEAKER-NOTES.md](SPEAKER-NOTES.md):

### Recruiter (3 objeções)
1. Localização e tax remote
2. "Por que só dois cases?" → "Editorial. Profundidade prova método; sumário não prova nada."
3. Senioridade em 5s

### Design Lead (3 objeções)
1. "Onde lidera designers?"
2. "Onde o design system real?" → slide 7 (Neodent — DS como contrato com Global)
3. "Outcomes sem fonte?" → slide 10 (Cultura — dashboard interno + janela)

### CEO/CTO (3 objeções)
1. "Custo, eng-month, budget?"
2. "Mando pro board?"
3. "Métrica do award Straumann?"

---

## Referências usadas (research)

### Estrutura narrativa
- **Nancy Duarte** — [*Resonate* / Sparkline framework](https://www.duarte.com/resources/books/resonate/)
- **Big Idea™** — [Crafting a storytelling presentation](https://www.duarte.com/blog/tips-for-crafting-a-storytelling-presentation/)
- **Steve Jobs storytelling** (contraste/escalada/revelação) — [Gong analysis](https://www.gong.io/blog/steve-jobs-iphone-keynote)

### Liderança em design
- **Helena Seo (Head of Design @ DoorDash)** — [Three tips para design leaders portfolio](https://medium.com/design-doordash/three-tips-on-design-leaders-portfolio-presentations-5afd4e412bf8) (storytelling, balance, flavor of "you")
- **Jaydev Ajit Kumar (DoorDash)** — [Storytelling in design presentations](https://medium.com/design-doordash/storytelling-in-design-presentations-13167b6de6ee) (setup → problem → solution → resolution)
- **ADPList** — [Product design interview playbook](https://adplist.substack.com/p/product-design-interview-playbook)

### PNL e psicologia
- **Indeed** — [6 NLP Techniques for Meetings and Interviews](https://www.indeed.com/career-advice/career-development/nlp-techniques)
- **Anchoring bias** — [Simply Psychology](https://www.simplypsychology.org/what-is-the-anchoring-bias.html)
- **Primacy effect** — [Hunt Club: Primacy Bias in Interviewing](https://www.huntclub.com/blog/getting-around-primacy-bias-in-interviewing-and-recruiting)
- **Robert Cialdini** — princípios de influência (autoridade, escassez, prova social, compromisso, simpatia, reciprocidade)
- **Amy Cuddy** — power pose (TED 2012)

### Trends visuais 2026
- **Presentation Design Trends 2026** — [InkPPT](https://www.inkppt.com/post/presentation-design-trends-the-complete-guide)
- **Storytelling in Presentations** — [IxDF (2026)](https://ixdf.org/literature/topics/storytelling-in-presentations)

### Cases interview format
- **Uxcel** — [Top 50 Product Designer Interview Questions 2026](https://uxcel.com/blog/top-50-product-designer-interview-questions-and-answers-for-2026)
- **Andy Polaine** — [Presenting your portfolio and yourself](https://www.polaine.com/2024/05/presenting-your-portfolio-and-yourself-for-interviews/)

---

## Arquivos

```
presentation/
├── index.html        — deck navegável (13 slides)
├── styles.css        — herda tokens do portfolio + componentes próprios
├── script.js         — navegação, count-up, overview, fullscreen, tema
├── SPEAKER-NOTES.md  — notas com PNL + objeções por slide
└── README.md         — este arquivo
```

---

## Última nota

> Esta apresentação tem 13 slides e ~12 minutos. **Não tente acelerar pra encaixar mais cases**. A virtude desta versão é que cada slide tem respiro — Neodent ganha 3 slides para uma história real (situação → sistema → resultado), Cultura Inglesa ganha 2 (estratégia → números), e os outros 3 viram big numbers no slide 11.
>
> Se sobrarem 2 minutos durante o pitch, use pra **silêncio** depois do slide 8 (award) e do slide 10 (números). Silêncio na hora certa é mais persuasivo que mais um bullet.

*Documento parte do pipeline portfolio — alinhado com [`briefs/positioning-brief.md`](../briefs/positioning-brief.md), [`briefs/narrative-spine.md`](../briefs/narrative-spine.md), [`design/art-direction.md`](../design/art-direction.md) e [`design/design-spec.md`](../design/design-spec.md).*
