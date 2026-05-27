# CV — Pedro Santos

**Arquivo para enviar: [`pedro-santos-cv.pdf`](pedro-santos-cv.pdf)**

2 páginas A4, 412 KB, formato executivo (Head-level), texto-real (não imagem). Tipografia: Fraunces (nome, único uso) + Inter (todo o resto).

**Estrutura executiva** — não enumera tarefa, demonstra autoridade:
- **Hero** com nome em Fraunces 48pt + tagline em Inter italic
- **Pitch** de ~50 palavras — quem você é em uma única respiração
- **Selected Engagements** — 5 clientes top com outcome em linha de destaque (Neodent, Programa Feedback, Cultura Inglesa, Sesc RJ, Senac RJ). Cliente é o protagonista, não a tarefa.
- **Experience** compacto — cada cargo em 3 colunas (título / empresa / data), sem bullets
- **Formação + Reconhecimento + Competências** em grid de duas colunas
- **Aberto a:** no rodapé — declaração executiva de disponibilidade

---

## Por que PDF e não DOCX

Em 2026 o equilíbrio venceu pra PDF, mesmo no Brasil:

- **ATS modernos** (Gupy, Greenhouse, Lever, Workday, SAP SuccessFactors, Compleo) lêem PDF de texto sem problema. A regra antiga "ATS só lê DOCX" é de antes de 2020.
- **DOCX renderiza inconsistente** entre Word/Mac, Word/Windows, LibreOffice, Google Docs. A vaga pode ser revisada por um recrutador no celular onde o DOCX abre quebrado.
- **PDF preserva tipografia** — não-negociável quando você está aplicando pra vaga de **designer**. Um DOCX com Fraunces vira Times New Roman na máquina do recrutador.
- **PDF de texto é parseável.** Validei extração: 28/29 keywords críticas (cargos, datas, números, empresas, ferramentas) são detectáveis por parser de texto. Único item que extrai degradado: o `+` do `+55` (sai como espaço) — irrelevante porque os 11 dígitos restantes ficam intactos.

**Quando enviar DOCX em vez disso:**
- Vaga que pede explicitamente `.doc` ou `.docx` no formulário (raro em 2026, mas existe em órgãos públicos).
- Recrutador pede editavel.
- Nesse caso, exporte a partir do [`pedro-santos-cv-pt.md`](pedro-santos-cv-pt.md) usando Google Docs (Arquivo → Download → `.docx`).

---

## Arquivos do diretório

| Arquivo | Quando usar |
|---|---|
| **`pedro-santos-cv.pdf`** | ⭐ Versão oficial. Envie em qualquer aplicação. |
| `pedro-santos-cv.html` | Fonte do PDF. Edite e regere quando quiser ajustar (ver "Como regenerar" abaixo). |
| `pedro-santos-cv-pt.md` | Fonte editável simples. Use pra exportar DOCX via Google Docs quando pedirem. |
| `pedro-santos-cv-pt.txt` | Plain ASCII. Use quando o formulário tem "paste your resume" em campo de texto. |

---

## Como regenerar o PDF depois de editar o HTML

```powershell
& "C:\Program Files\Google\Chrome\Application\chrome.exe" `
  --headless=new --disable-gpu --no-sandbox `
  --no-pdf-header-footer `
  --print-to-pdf="cv\pedro-santos-cv.pdf" `
  "file:///C:/Users/pedro/Documents/Portfólio - IA/cv/pedro-santos-cv.html"
```

Validar a extração de texto depois:
```powershell
python -c "from pypdf import PdfReader; print(PdfReader('cv/pedro-santos-cv.pdf').pages[0].extract_text())"
```

Se a extração tiver números faltando ou bullets fora de ordem, alguma mudança no CSS quebrou. Veja os pontos sensíveis abaixo.

### CSS sensível pra ATS (NÃO mexer sem testar)

- **NÃO use Fraunces em texto de corpo** (sub-15pt). Funciona em 40pt+ mas quebra em tamanhos de corpo — perde letras s/n/m na extração ("design" vira "de ig"). Inter italic substitui bem.
- **NÃO ative `font-feature-settings: 'ss01', 'cv11', 'tnum'`** na Inter — substitui dígitos por glifos alternados sem mapeamento Unicode no PDF embedded.
- **NÃO use `position: absolute` em `::before` para bullets** — confunde a ordem de leitura do extrator.
- **NÃO use `page-break-inside: avoid` em `.role` ou `.engagement`** — pode empurrar conteúdo pra página seguinte deixando a anterior vazia.
- **Se precisar adicionar imagens (logos): NÃO faça.** Logos quebram ATS sem ganho de leitura — recrutadores leem os nomes das marcas em texto.
- **Validação obrigatória após qualquer edição:** rode `python -c "from pypdf import PdfReader; print(PdfReader('cv/pedro-santos-cv.pdf').pages[0].extract_text())"` e confira se nomes próprios, números e empresas extraem inteiros.

---

## Como customizar por vaga (passo que gera entrevista, não o CV genérico)

CV genérico passa pelo ATS mas não ranqueia alto. Para entrar no topo da pilha:

1. **Cole o JD da vaga num arquivo de texto.**
2. **Liste 15–20 keywords** — termos repetidos no JD, especialmente em "responsabilidades" e "requisitos".
3. **Vá no [`pedro-santos-cv.html`](pedro-santos-cv.html), no `.pitch` e nas `.cap-block`** (COMPETÊNCIAS). Toda keyword da vaga que descreve algo que você de fato fez deve aparecer ali, **com a mesma grafia do JD**.
   - JD pede "design ops" → CV já tem. ✓
   - JD pede "B2B SaaS enterprise" → CV tem "B2B SaaS" e "Enterprise" separados. Junte: "B2B SaaS Enterprise".
   - JD pede "research quantitativo" → CV tem "Discovery". Adicione "research quantitativo" SE você fez.
4. **Reordene os `.engagement` blocks** — coloque primeiro o cliente mais relevante pro setor da vaga.
5. **Regere o PDF**. Submeta.
6. **Mire 80% de match.** Acima de 90% soa over-otimizado; abaixo de 60% o ATS te ranqueia mal.
7. **NÃO invente palavras-chave** que não correspondem ao trabalho real — queima o contato na primeira entrevista.

---

## Versão LinkedIn (cole na seção "Sobre")

O LinkedIn não é ATS — é vitrine. Mas o **search interno do LinkedIn** funciona como mini-ATS pra recrutadores que buscam talento. Use as mesmas keywords:

> Head of Design at Guidance. Lead UX Consultant na Neodent (Straumann Group). Quase 10 anos liderando produto digital em escala enterprise — Itaú, Arezzo, Cultura Inglesa, Sesc, Senac, Straumann.
>
> Trabalho no ponto onde design encontra produto, operação e IA. Lidero discovery rigoroso, design system, design ops e a aplicação prática de GenAI em fluxos de design. App Neodent LATAM premiado pelo Straumann Group em 2024.
>
> MBA em Digital Business na USP. Rio de Janeiro, remoto. Aberto a Head/Director of Design, Design Lead, ou consultoria.

---

## Pontos sensíveis a validar antes do primeiro envio

1. **Email** — usei `pedrosantosdesigner@outlook.com` (o do site). Você tem 3 emails em uso e precisa unificar. Decidir antes de aplicar.
2. **Inglês "Avançado"** — confirme se está confortável em entrevista técnica em inglês com recrutadores americanos. Se não, baixe para "Intermediário" pra não criar expectativa frustrada.
3. **Resultados Cultura Inglesa** — confirmar fonte e janela ("dashboard interno Q3 2025") antes de mandar pra recrutador que pode cobrar.
4. **NDA Straumann/Neodent** — o award é público, mas se houver cláusula específica de confidencialidade sobre o app, valide a redação.
5. **Programa Feedback** — falta uma métrica de outcome forte (tempo de ciclo, custo evitado, erro reduzido). Vale perguntar ao cliente se libera.
