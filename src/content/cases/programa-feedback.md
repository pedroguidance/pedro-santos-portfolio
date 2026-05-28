---
slug: programa-feedback
order: 2
featured: true
title: Engenharia organizacional. Programa Feedback
client: Programa Feedback × Guidance
role: Head of Design (Guidance)
period: 2024
status: shipped
heroOneLiner: "Reestruturação operacional para uma empresa bilionária do varejo. 1.500 colaboradores impactados. Engenharia organizacional usando design como método."
pullQuote: "Este não foi um projeto de design. Foi um projeto de engenharia organizacional, onde design foi a ferramenta para transformar realidade em sistema."
metrics:
  - value: "1.500"
    label: "Colaboradores impactados"
  - value: "12"
    label: "Mercados visitados em campo"
  - value: "25h+"
    label: "De pesquisa direta com promotores"
publishedAt: 2026-05-26
---

## A situação

Programa Feedback é uma empresa de field sales que opera com cerca de 1.500 promotores em ponto-de-venda, atendendo uma indústria bilionária do varejo brasileiro. O modelo operacional vigente até 2024 não escalava, gerava dados pouco confiáveis para a indústria cliente (que tomava decisões bilionárias baseadas neles), e dependia de vínculos tradicionais de trabalho, limitando flexibilidade num mercado de gig economy.

A pergunta inicial que recebemos: "como podemos digitalizar o que o promotor faz no PDV?"

## O framing

Repropus a pergunta para a liderança da Feedback e Guidance: **"como redesenhamos a forma como 1.500 pessoas trabalham todos os dias em ambientes físicos altamente variáveis, e como esse trabalho gera dados confiáveis o suficiente pra justificar decisões bilionárias da indústria?"**

A diferença: a pergunta original era sobre app. A reframing era sobre operação. Design não era a entrega; era o método.

Trade-offs nomeados:

- **Padronização vs. realidade de campo.** Padronizar demais perde aderência; flexibilizar demais perde dado confiável.
- **Velocidade vs. profundidade.** A indústria queria resultado em meses, não em ano.
- **Promotor vs. gerente vs. indústria.** Três usuários com incentivos parcialmente conflitantes.

## O trabalho

### Fase 1. AS IS

Imersão em Belo Horizonte: uma semana, cerca de 25 horas de pesquisa de campo. 12 visitas a mercados (atacado, varejo, farmácias). Observação direta de promotores durante turnos, shadowing de treinamentos, 25+ entrevistas qualitativas.

Mapeamos a operação real (não a documentada) em notação BPMN, ponta a ponta. O diagnóstico identificou 11 pontos de fricção, desde onboarding até reporte para a indústria. Cada fricção foi caracterizada por tipo (operacional, política, técnica, de dado), gravidade e dependência.

![Mapa AS IS da operação atual em BPMN, com pontos de fricção identificados ao longo do fluxo de trabalho dos promotores](/cases/feedback-as-is.webp)

*Acima: mapa AS IS completo da operação atual. Cada raia representa um ator do sistema (promotor, supervisor, gestor, indústria). As anotações em vermelho marcam pontos de fricção. A largura do diagrama (~29.000 pixels no original) reflete a complexidade ramificada do fluxo real, antes da reestruturação.*

### Fase 2. Síntese e estratégia

Tabulação de dados de pesquisa, clusterização de fricções, análise de dependências. Benchmark com 6 operações comparáveis de field sales LATAM e global. Produzimos três cenários TO BE com trade-offs explícitos:

1. **Cenário 1, incremental.** Resolve fricções pontuais sem mexer no modelo. Baixo risco político, baixo retorno operacional.
2. **Cenário 2, intermediário.** Reestrutura o fluxo principal e introduz IA em pontos críticos. Mantém o modelo trabalhista. Risco e retorno moderados.
3. **Cenário 3, ruptura.** Redesenha o modelo do zero, com flexibilização contratual e IA pervasiva. Alto risco político, máximo retorno.

A liderança escolheu o **cenário 2**, intermediário, não o mais ambicioso. Documentamos o porquê em ata formal, para revisitar a decisão depois quando o mercado e a tolerância política mudassem.

### Fase 3. TO BE com IA

Definição do novo modelo operacional, com IA da Guidance integrada em quatro pontos:

1. **Onboarding:** geração assistida de roteiros para o promotor por contexto de PDV.
2. **Validação de presença e tarefa:** visão computacional integrada à captura de evidência.
3. **Síntese de relato:** IA gera relatório padronizado a partir de notas livres do promotor.
4. **Inteligência pra indústria:** flywheel de dados com qualidade auditável.

POCs validadas progressivamente. Reports semanais para liderança e investidores.

![Mapa TO BE do novo modelo operacional com IA integrada em quatro pontos do fluxo](/cases/feedback-to-be.webp)

*Acima: mapa TO BE do novo modelo operacional. Os blocos azuis destacam os pontos onde a IA da Guidance entra como camada de apoio. O fluxo do promotor continua sendo protagonista, com a IA aumentando capacidade, não substituindo.*

### Decisão 1. Não automatizar tudo

A primeira proposta interna era automatizar 80% do trabalho do promotor com IA. Recusamos. Manter o promotor como agente principal era necessário para (a) qualidade do dado e (b) viabilidade trabalhista. O design final aumenta poder do promotor com IA, não o substitui.

### Decisão 2. Três usuários, três interfaces

Promotor, supervisor e indústria têm necessidades diferentes. Recusamos fazer "um app pra todos". Três interfaces, mesmo design system, governança comum.

### Decisão 3. Padrões de evidência auditáveis desde o dia 1

A indústria cliente paga pela confiabilidade do dado, não pelo volume. Definimos padrões de evidência (foto, geolocalização, timestamp, checksum) antes de qualquer UI, para evitar comprometer o flywheel depois.

## A entrega

Cinco entregáveis principais, articulados como um sistema operacional:

- Processo operacional TO BE completo (BPMN, role definitions, fluxos de exceção).
- Flywheel de inteligência de dados (arquitetura conceitual e protocolos de evidência).
- Arquitetura do app operacional (promotor).
- Sistema de gestão e supervisão (supervisor).
- Painel de inteligência (indústria).

![Visão consolidada da entrega: processos, sistemas e jornadas integrados num único mapa](/cases/feedback-entrega.webp)

*Acima: visão consolidada do escopo entregue. Cada coluna representa um sistema ou camada de processo. As setas mapeiam dependências entre sistemas e protocolos de troca de dados.*

### A arquitetura nova dos sistemas

A entrega tangível foi o sistema. A entrega menos visível, e mais importante, foi a arquitetura que viabiliza o sistema rodar em escala e evoluir sem retrabalho. Três interfaces sob o mesmo design system, três usuários conectados por um flywheel de dados auditáveis, e IA como camada de apoio operacional, não como substituto.

![Arquitetura nova dos sistemas: três interfaces conectadas por flywheel de dados e camada de IA](/cases/feedback-arquitetura.webp)

*Acima: arquitetura técnica e de serviço resultante. As três interfaces (promotor, supervisor, indústria) operam sobre o mesmo design system e compartilham um repositório central de evidência. A camada de IA é modular e auditável por design.*

## Reflection

**Subestimei a complexidade política de mudar modelo trabalhista.** Parte do plano original envolvia mais flexibilidade contratual, encontrou resistência interna que não tinha sido mapeada na imersão. Em projeto futuro nesse setor, eu adicionaria uma etapa de mapeamento de stakeholders políticos junto à imersão de campo.

**Documentei BPMN e flywheel, mas não documentei o raciocínio por trás de cada decisão de IA-vs-humano.** Quando o time entrou em manutenção, algumas decisões foram revertidas porque o "porquê" não tinha sobrevivido o handoff. Lição: a decisão precisa vir com o raciocínio mesmo em handoffs internos.

## Créditos

Guidance, time de tecnologia e IA, lideranças. Programa Feedback, diretoria e equipe operacional. Promotores que abriram seu trabalho à observação. Indústria cliente (sob confidencialidade).
