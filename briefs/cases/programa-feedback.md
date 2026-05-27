---
slug: programa-feedback
title: Engenharia organizacional — Programa Feedback × Guidance
client: Programa Feedback (com Guidance como parceira tech/AI)
role: Head of Design (Guidance) — lead estratégico e operacional
period: 2024
team: Múltiplos setores Feedback + time de tecnologia e IA da Guidance + promotores em campo
status: entregue
---

# Engenharia organizacional para 1.500 pessoas em campo

## Hero one-liner
> Reestruturação operacional para uma empresa bilionária do varejo. 1.500 colaboradores impactados. *Head of Design · Guidance · 2024*

## Pull quote (thesis)
> Este não foi um projeto de design. Foi um projeto de engenharia organizacional — onde design foi a ferramenta para transformar realidade em sistema.

---

## A situação

Programa Feedback é uma empresa de field sales que opera com ~1.500 promotores em ponto-de-venda, atendendo uma indústria bilionária do varejo brasileiro. O modelo operacional vigente até 2024:

- Não escalava — a operação dependia de relacionamento entre supervisor e promotor, com pouca padronização
- Gerava dados pouco confiáveis para a indústria cliente (que tomava decisões bilionárias baseadas neles)
- Dependia de vínculos tradicionais de trabalho — limitando flexibilidade num mercado de gig economy

A pergunta inicial que recebemos: "como podemos digitalizar o que o promotor faz no PDV?"

---

## O framing

Repropus a pergunta para a liderança da Feedback e Guidance: **"como redesenhamos a forma como 1.500 pessoas trabalham todos os dias em ambientes físicos altamente variáveis — e como esse trabalho gera dados confiáveis o suficiente pra justificar decisões bilionárias da indústria?"**

A diferença: a pergunta original era sobre app. A reframing era sobre operação. Design não era a entrega; era o método.

Trade-offs nomeados:
- **Padronização vs. realidade de campo**: padronizar demais perde aderência; flexibilizar demais perde dado confiável. Onde fica a linha?
- **Velocidade vs. profundidade**: a indústria queria resultado em meses, não em ano. Investidores observavam.
- **Promotor vs. gerente vs. indústria**: três usuários com incentivos parcialmente conflitantes. Quem manda na decisão de UI?

---

## O trabalho

### Fase 1 — AS IS (~3 semanas)

**Imersão em Belo Horizonte**: uma semana, ~25 horas de pesquisa de campo. 12 visitas a mercados (atacado, varejo, farmácias). Observação direta de promotores durante turnos, shadowing de treinamentos, 25+ entrevistas qualitativas.

**Saída**: mapeamento BPMN da operação real (não a documentada). Diagnóstico de 11 pontos de fricção — desde onboarding até reporte pra indústria.

### Fase 2 — Síntese e estratégia (~2 semanas)

Tabulação de dados de pesquisa, clusterização de fricções, análise de dependências. Benchmark com 6 operações comparáveis de field sales LATAM e global.

Saída: três cenários TO BE com trade-offs explícitos. A liderança escolheu o cenário 2 (intermediário — não o mais ambicioso). Documentação do porquê — para revisitar a decisão depois.

### Fase 3 — TO BE com IA (~6 semanas)

Definição do novo modelo operacional, com IA da Guidance integrada em quatro pontos:
1. **Onboarding** — geração assistida de roteiros para o promotor por contexto de PDV
2. **Validação de presença e tarefa** — visão computacional integrada à captura de evidência
3. **Síntese de relato** — IA gera relatório padronizado a partir de notas livres do promotor
4. **Inteligência pra indústria** — flywheel de dados com qualidade auditável

POCs validadas progressivamente. Reports semanais para liderança e investidores. Reviews finais com parceiros técnicos.

---

## Decisões críticas

### Decisão #1: NÃO automatizar tudo
A primeira proposta interna era automatizar 80% do trabalho do promotor com IA. Recusamos. Manter o promotor como agente principal era necessário para (a) qualidade do dado e (b) viabilidade trabalhista. O design final aumenta poder do promotor com IA, não o substitui.

### Decisão #2: separar três usuários em três interfaces
Promotor, supervisor e indústria têm necessidades diferentes. Recusamos fazer "um app pra todos". Três interfaces, mesmo design system, governança comum.

### Decisão #3: padrões de evidência auditáveis desde o dia 1
A indústria cliente paga pela CONFIABILIDADE do dado, não pelo volume. Definimos padrões de evidência (foto + geolocalização + timestamp + checksum) antes de qualquer UI — pra evitar comprometer o flywheel depois.

---

## A entrega

- Processo operacional TO BE completo (BPMN, role definitions, fluxos de exceção)
- Flywheel de inteligência de dados (arquitetura conceitual + protocolos de evidência)
- Arquitetura do app operacional (promotor)
- Sistema de gestão e supervisão (supervisor)
- Painel de inteligência (indústria)

---

## Impacto

**Escala impactada (público):**
- **1.500 colaboradores** afetados diretamente
- Decisões de uma empresa **bilionária** do varejo passaram a se basear nesse novo sistema

*(Pedro: este case é onde a falta de outcome quantificado mais machuca. Quando puder, complete com:*
- *Redução observada em retrabalho de promotor*
- *Aumento de confiabilidade de dado em % medível*
- *Tempo de ciclo de coleta-síntese-entrega antes/depois*
- *Adoção do app entre promotores nos primeiros 90 dias)*

---

## Reflection — o que eu faria diferente

**1.** Subestimei a complexidade política de mudar modelo trabalhista. Parte do plano original envolvia mais flexibilidade contratual — encontrou resistência interna que não tinha sido mapeada na imersão. Em projeto futuro nesse setor, eu adicionaria uma etapa de mapeamento de stakeholders políticos junto à imersão de campo.

**2.** Documentei BPMN e flywheel, mas não documentei **o raciocínio** por trás de cada decisão de IA-vs-humano. Quando o time entrou em manutenção, algumas decisões foram revertidas porque o "porquê" não tinha sobrevivido o handoff. Lição: a decisão precisa vir com o raciocínio mesmo (ou especialmente) em handoffs internos.

---

## Créditos

Guidance — time de tecnologia e IA, lideranças. Programa Feedback — diretoria e equipe operacional. Promotores que abriram seu trabalho à observação. Indústria cliente (sob confidencialidade).

---

**STATUS DESTE CASE**:
- ✅ Estrutura, framing, decisões: prontos
- ⚠️ **Falta Pedro fornecer**: ao menos uma métrica de outcome quantificada. Sem isso, o ceo-cto persona vai sinalizar gap.
- ⚠️ Confirmar permissão de citar nome "Programa Feedback" ou usar codinome
- ⚠️ Imagens: fotos da imersão em BH (se Pedro tiver, são ouro pra esse case), BPMN simplificado pra publicação
