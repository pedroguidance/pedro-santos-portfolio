# Design Spec — Pedro Santos Portfolio
*Phase 2 output — sistema executável*

> Cita o positioning: Head of Design que orquestra design, operação e IA em escala
> Cita art direction: light primary, verde-tinta acento, Fraunces/Newsreader display + Inter Variable body, motion contida

---

## 1. Layout System

### Grid
- **Desktop (≥1024)**: 12 colunas, 80px gutter externo, 32px gutter interno, max-page 1280px
- **Tablet (768–1023)**: 8 colunas, 40px gutter externo, 24px interno
- **Mobile (320–767)**: 4 colunas, 20px gutter externo, 16px interno

### Container widths
```
--max-page: 80rem    /* 1280px - container principal */
--max-prose: 38rem   /* 608px - leitura confortável (≈70ch) */
--max-wide: 64rem    /* 1024px - imagens largas / mockups */
```

### Spacing scale (base 4)
```
--space-3xs: 0.25rem  /* 4px  */
--space-2xs: 0.5rem   /* 8px  */
--space-xs:  0.75rem  /* 12px */
--space-sm:  1rem     /* 16px */
--space-md:  1.5rem   /* 24px */
--space-lg:  2rem     /* 32px */
--space-xl:  3rem     /* 48px */
--space-2xl: 4rem     /* 64px */
--space-3xl: 6rem     /* 96px */
--space-4xl: 9rem     /* 144px */
--space-5xl: 12rem    /* 192px - vertical entre seções major */
```

### Vertical rhythm
- Body line-height: **1.55** (entre o 1.5 conservador e o 1.6 confortável)
- Display line-height: **1.05** (cabeçalhos respiram com letter-spacing, não com leading)
- Bottom margin parágrafo: `1.25em` (relativo ao próprio font-size)

---

## 2. Type System

### Faces
```
--font-display: 'Fraunces', 'Newsreader', Georgia, serif;
--font-body: 'Inter Variable', system-ui, -apple-system, sans-serif;
--font-mono: 'JetBrains Mono', ui-monospace, monospace;
```

### Loading
```html
<link rel="preload" as="font" type="font/woff2"
      href="/fonts/Fraunces-VariableFont.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2"
      href="/fonts/InterVariable.woff2" crossorigin>
```

```css
@font-face {
  font-family: 'Fraunces';
  src: url('/fonts/Fraunces-VariableFont.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-display: swap;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
                 U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191,
                 U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Inter Variable';
  src: url('/fonts/InterVariable.woff2') format('woff2-variations');
  font-weight: 100 900;
  font-display: swap;
  /* same unicode-range */
}
```

### Modular scale (1.250 / major third)
```
--text-2xs: 0.64rem   /* 10.24px - meta, fine print */
--text-xs:  0.8rem    /* 12.8px - captions */
--text-sm:  0.9rem    /* 14.4px - small body, meta */
--text-base: 1rem     /* 16px - body */
--text-md:  1.125rem  /* 18px - large body / lead paragraph */
--text-lg:  1.4rem    /* 22.4px - h4 */
--text-xl:  1.75rem   /* 28px - h3 */
--text-2xl: 2.2rem    /* 35.2px - h2 */
--text-3xl: 2.75rem   /* 44px - h1 case */
--text-display: clamp(3rem, 6vw + 1rem, 5.5rem); /* home hero */
```

### Type roles
| Role | Family | Size | Weight | Line-height | Letter-spacing | Max-width |
|---|---|---|---|---|---|---|
| Display (home hero) | Fraunces | --text-display | 400 | 1.0 | -0.02em | none |
| H1 (case title) | Fraunces | --text-3xl | 500 | 1.1 | -0.015em | 18ch |
| H2 (section) | Fraunces | --text-2xl | 400 | 1.15 | -0.01em | 22ch |
| H3 | Inter | --text-xl | 600 | 1.2 | -0.005em | 30ch |
| H4 | Inter | --text-lg | 600 | 1.3 | 0 | 30ch |
| Body large (lead) | Inter | --text-md | 400 | 1.55 | 0 | 38rem |
| Body | Inter | --text-base | 400 | 1.55 | 0 | 38rem |
| Caption | Inter | --text-sm | 400 | 1.45 | 0.005em | 38rem |
| Meta | Inter | --text-xs | 500 | 1.4 | 0.04em uppercase | none |
| Quote (pull) | Fraunces | --text-xl | 400 italic | 1.35 | 0 | 32rem |

### Fluid typography rules
- Display único: clamp() conforme acima
- Headlines de case: clamp(2.5rem, 4vw + 0.5rem, 3.5rem)
- Body NÃO é fluido — fica 16px sempre (legibilidade > sofisticação)

---

## 3. Color System

### Tokens light (default)
```
--bg-canvas:       oklch(98% 0.005 90);   /* paper warm */
--bg-surface:      oklch(94% 0.005 90);   /* card surface */
--bg-surface-2:    oklch(90% 0.005 90);   /* deeper surface */
--fg-primary:      oklch(15% 0.01 270);   /* ink */
--fg-secondary:    oklch(35% 0.01 270);   /* secondary text */
--fg-muted:        oklch(55% 0.01 270);   /* meta */
--border:          oklch(88% 0.005 90);   /* divider */
--border-strong:   oklch(75% 0.005 90);   /* emphasis divider */
--accent:          oklch(45% 0.15 155);   /* verde-tinta */
--accent-hover:    oklch(38% 0.16 155);
--accent-soft:     oklch(93% 0.04 155);   /* accent bg tint */
--focus-ring:      oklch(45% 0.15 155);
--danger:          oklch(50% 0.18 25);    /* red-ink */
--on-accent:       oklch(98% 0.005 90);
```

### Tokens dark
```
--bg-canvas:       oklch(13% 0.01 250);
--bg-surface:      oklch(17% 0.01 250);
--bg-surface-2:    oklch(21% 0.01 250);
--fg-primary:      oklch(95% 0.005 90);
--fg-secondary:    oklch(78% 0.005 90);
--fg-muted:        oklch(58% 0.01 270);
--border:          oklch(28% 0.01 250);
--border-strong:   oklch(38% 0.01 250);
--accent:          oklch(65% 0.15 155);   /* clareia no dark */
--accent-hover:    oklch(72% 0.14 155);
--accent-soft:     oklch(22% 0.04 155);
--focus-ring:      oklch(65% 0.15 155);
--danger:          oklch(65% 0.18 25);
--on-accent:       oklch(13% 0.01 250);
```

### Contrast matrix (WCAG 2.2 AA = 4.5:1 body / 3:1 large)
Verificações chave (light):
- `fg-primary` em `bg-canvas`: **~16.5:1** ✅ AAA
- `fg-secondary` em `bg-canvas`: **~9.2:1** ✅ AAA
- `fg-muted` em `bg-canvas`: **~4.8:1** ✅ AA
- `accent` em `bg-canvas`: **~4.6:1** ✅ AA (links inline)
- `on-accent` em `accent`: **~5.5:1** ✅ AA (botão primary)

Verificações dark:
- `fg-primary` em `bg-canvas`: **~15.2:1** ✅ AAA
- `accent` em `bg-canvas`: **~5.8:1** ✅ AA

### Mode switching
```css
:root { /* light = default */ }

@media (prefers-color-scheme: dark) {
  :root:not([data-theme='light']) { /* dark tokens */ }
}

:root[data-theme='dark'] { /* dark tokens */ }
```

Theme toggle persiste em localStorage; aplicado via inline script no `<head>` ANTES do first paint (evita FOUC).

---

## 4. Motion System

### Easing curves
```
--ease-out-quad: cubic-bezier(0.25, 0.46, 0.45, 0.94);
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out-quart: cubic-bezier(0.77, 0, 0.175, 1);
```

### Durations
```
--dur-fast: 150ms     /* micro interactions */
--dur-base: 250ms     /* default UI */
--dur-slow: 450ms     /* page section reveals */
--dur-page: 600ms     /* view transitions */
```

### Scroll-driven (native CSS 2026)
```css
@supports (animation-timeline: view()) {
  .reveal {
    animation: reveal-up linear both;
    animation-timeline: view();
    animation-range: entry 10% cover 30%;
  }
}

@keyframes reveal-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Signature: count-up
JS opcional, ~1KB, ativa apenas com IntersectionObserver. Fallback: número renderizado static.

### Reduced motion
```css
@media (prefers-reduced-motion: reduce) {
  *, ::before, ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

E para count-up: o componente verifica `matchMedia('(prefers-reduced-motion: reduce)')` e renderiza o número final direto.

---

## 5. Iconography

- **Set**: **Lucide** (lucide.dev) — single stroke, 24×24 base, MIT license
- Como inline SVG embutido (não icon font)
- Stroke width: 1.5 (default Lucide) — não 2 (pesa visualmente demais)
- Cor: herda `currentColor`
- Icons usados (poucos): `ArrowUpRight` (links externos), `Sun` / `Moon` (theme toggle), `Mail`, `MessageCircle` (WhatsApp), opcional

---

## 6. Interactive Components — todos os estados

### Button — Primary
| State | Background | Text | Border | Outline |
|---|---|---|---|---|
| idle | accent | on-accent | none | none |
| hover | accent-hover | on-accent | none | none |
| focus-visible | accent | on-accent | none | 2px solid focus-ring + offset 2px |
| active | accent-hover | on-accent | inset 0 0 0 1px on-accent | none |
| disabled | fg-muted/50% | on-accent/50% | none | none |
| loading | accent | on-accent (with spinner) | none | none |

Padding: `0.75rem 1.5rem` (12px 24px). Min height: `2.75rem` (44px) — atende WCAG 2.5.5 enhanced target size.

### Button — Secondary (outline)
| State | Background | Text | Border |
|---|---|---|---|
| idle | transparent | fg-primary | 1px solid border-strong |
| hover | bg-surface | fg-primary | 1px solid fg-primary |
| focus-visible | transparent | fg-primary | 2px solid focus-ring |

### Link — inline
- Color: `accent`
- Text-decoration: underline, decoration-thickness: 1px, offset: 2px
- hover: `accent-hover`, decoration-thickness: 2px
- focus-visible: 2px outline focus-ring + offset

### Link — external
- Mesmo que inline + ícone `ArrowUpRight` 12×12, baseline-aligned, ml: 2px

### Card (case card)
| State | Background | Border | Translate |
|---|---|---|---|
| idle | transparent | 1px solid border | 0 |
| hover | bg-surface | 1px solid border-strong | -2px (subtle lift) |
| focus-visible (entire card focusable) | transparent | 2px focus-ring | 0 |

Inner link clickable area = card todo (use `<a>` envolvendo, NÃO onclick em div)

### Form input (contact)
| State | Background | Border | Text |
|---|---|---|---|
| idle | bg-canvas | 1px solid border-strong | fg-primary |
| focus | bg-canvas | 2px solid accent | fg-primary |
| error | bg-canvas | 2px solid danger | fg-primary |
| disabled | bg-surface | 1px solid border | fg-muted |

Label always above, never placeholder-as-label.

### Theme toggle
- Botão icon-only 40×40 (target size ok)
- Ícone: Sun ↔ Moon, com crossfade 200ms
- Stored em localStorage, applied via inline `<script>` no `<head>` antes do paint

---

## 7. Design Tokens (export formato JSON-friendly)

Ver `/src/styles/tokens.css` (gerado a partir deste spec) — formato CSS custom properties direto, sem build step.

---

## 8. Page Specs — referências para `design/pages/*.md`

### Home

```
┌────────────────────────────────────────────────┐
│   Logo / Mark (esq)        Theme toggle (dir)  │
│                                                │
│                                                │
│   Pedro Santos                                 │
│   ────────────                                 │
│                                                │
│   Design liderado em escala.                   │
│   Operação, produto, IA.                       │
│                                                │
│   Head of Design at Guidance —                 │
│   quase 10 anos liderando produto              │
│   e design em Itaú, Arezzo,                    │
│   Cultura Inglesa, Sesc, Straumann             │
│   (Neodent — app premiado em 2024).            │
│                                                │
│   [Ver cases ↓]   [Conversar →]                │
│                                                │
│   ──────────────────────────────────────       │
│   GUIDANCE · STRAUMANN · CULTURA INGLESA       │
│   · SESC RJ · AREZZO & CO                      │
│   ──────────────────────────────────────       │
│                                                │
│                                                │
│   ## O que eu faço                             │
│                                                │
│   [bloco de 4 parágrafos curtos]               │
│                                                │
│                                                │
│   ## Cases                                     │
│                                                │
│   ┌──────────────┐  ┌──────────────┐           │
│   │ Neodent      │  │ Programa     │           │
│   │ Lead UX      │  │ Feedback     │           │
│   │ 2023-presente│  │ Head Design  │           │
│   │              │  │ 2024         │           │
│   └──────────────┘  └──────────────┘           │
│   ┌──────────────┐  ┌──────────────┐           │
│   │ Cultura Ingl.│  │ Sesc RJ      │           │
│   │ Product Des. │  │ Product Des. │           │
│   │ 2025         │  │ 2025-pres.   │           │
│   └──────────────┘  └──────────────┘           │
│   ┌──────────────┐                             │
│   │ Senac RJ     │                             │
│   │ Lead         │                             │
│   │ 2026-pres.   │                             │
│   └──────────────┘                             │
│                                                │
│                                                │
│   ## Conversar?                                │
│   [bloco de contato 4 vias]                    │
│                                                │
│   ───────                                      │
│   © 2026 · Pedro Santos · Decisões             │
└────────────────────────────────────────────────┘
```

**Mobile**: cards empilham em 1 coluna. Logo strip vira list 2 colunas.

**A11y**:
- Skip-to-content link first
- Landmarks: `<header>`, `<main>`, `<footer>`
- Heading order: h1 (Pedro Santos), h2 (O que eu faço, Cases, Conversar)
- Logo strip: imagens com `alt` descritivo OU se for texto, `aria-label`

**Performance**:
- LCP = primeiro parágrafo do hero (text-only)
- Sem imagem hero acima da fold → LCP ≤ 1s alcançável

### About

Single column, `max-prose`. Lateral foto (480×640, lazy) à direita em desktop, abaixo do parágrafo elevator em mobile.

Estrutura:
1. Elevator paragraph (lead text)
2. Long-form (5 sub-sections)
3. Contact block (links inline texto)

### Case study (template)

```
┌────────────────────────────────────────────────┐
│   ← Voltar para cases                          │
│                                                │
│   Lead UX Consultant · 2023-presente · Neodent │
│                                                │
│   App Neodent LATAM                            │
│                                                │
│   ─────────────────────────                    │
│                                                │
│   [HERO IMAGE 16:10]                           │
│                                                │
│   > Pull quote (italic, Fraunces, large)       │
│                                                │
│                                                │
│   ## A situação                                │
│   [body text, max-prose]                       │
│                                                │
│   ## O framing                                 │
│   [...]                                        │
│                                                │
│   ## O trabalho                                │
│   ### Decisão #1                               │
│   ### Decisão #2                               │
│   [...]                                        │
│                                                │
│   ## O resultado                               │
│   ┌─────────┬─────────┬─────────┐              │
│   │  60%    │  70+    │  92%    │  ← count-up │
│   │ uso     │  NPS    │ retenç. │              │
│   └─────────┴─────────┴─────────┘              │
│                                                │
│   ## Reflection                                │
│   [...]                                        │
│                                                │
│   ## Créditos                                  │
│                                                │
│   ─────────────────                            │
│                                                │
│   Próximo case →                               │
│   [card do próximo case]                       │
│                                                │
└────────────────────────────────────────────────┘
```

### Contact

Página minimal. Single column. Lista de 4 contact options em texto direto + um pull quote sobre o que Pedro está procurando agora.

### /decisoes (signature page)

Lista de entradas tipo:
```
2026-05-26 — Por que verde-tinta e não azul
[parágrafo de ~80 palavras]

2026-05-25 — Por que Astro e não Next.js
[parágrafo]

…
```

Cada entrada com âncora `#YYYY-MM-DD-slug` pra deep-link.

---

## 9. Empty / Error / Loading states

- **Form contact loading**: botão muda label pra "Enviando…" + spinner inline
- **Form contact success**: substitui form por mensagem inline confirmando
- **Form contact error**: mensagem inline acima do campo problemático, `role="alert"`
- **No-JS**: site totalmente legível, theme fica no preference do OS, form usa fallback action server-side
- **No image / image broken**: alt text é visível, container reserva o espaço (aspect-ratio)
- **404**: página própria com link "Voltar para a home" + lista dos 5 cases

---

## 10. A11y — não-negociáveis

- [ ] Heading order respeitada em todas as páginas
- [ ] Skip-to-content visível ao focar Tab
- [ ] Focus-visible com 2px outline + offset em todo focusable
- [ ] Color contrast: AA mínimo, AAA em body text quando possível (esse design hits AAA na maioria dos pares)
- [ ] Target size ≥ 24px (WCAG 2.2 SC 2.5.8) — atinge 44px na maioria dos casos
- [ ] Todos os links com texto descritivo (nunca "Saiba mais")
- [ ] Imagens com alt significativo OR `alt=""` decorativo (nunca "image of")
- [ ] Site reflows a 400% zoom sem horizontal scroll
- [ ] `prefers-reduced-motion` honrado em toda animação
- [ ] `<html lang="pt-BR">`
