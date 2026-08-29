# Portfólio Arthur Gabriel — Documento de Migração para Claude Code

> Este documento é a fonte única de verdade para continuar o desenvolvimento do portfólio no Claude Code. Contém perfil profissional, skills, stack, sistema de design e todos os projetos a serem apresentados. Leia por completo antes de qualquer alteração no site.

---

## 1. Visão Geral do Projeto

Landing page de portfólio profissional para Arthur Gabriel, apresentando um perfil que atua de forma equilibrada em três frentes: **Produto/UX**, **Engenharia Full-Stack** e **Dados/Automação com IA**. O objetivo é mostrar o nível de execução dos projetos (sites, painéis de gestão, automações) sem expor código-fonte real ou dados sensíveis de clientes/empresas.

Já existe uma primeira versão funcional em HTML/CSS/JS puro (`portfolio-arthur.html`), com toggle de idioma PT/EN, seguindo o sistema de design **"Factory"** (ver seção 5). A migração para Claude Code deve:
1. Continuar a partir dessa base (pode migrar para Next.js se fizer sentido para manutenção futura, mas mantendo fielmente o design system).
2. Adicionar os 2 projetos novos descritos na seção 7.4 e 7.5.
3. Manter o toggle PT/EN em todo conteúdo novo.

---

## 2. Perfil Profissional

- **Nome:** Arthur Gabriel
- **Localização:** Rio de Janeiro, Brasil
- **Cargo atual:** Analista de Customer Success
- **Atuação:** Produto/PM e desenvolvimento de produtos digitais client-facing, aliado a automação de processos e análise de dados
- **Idiomas de trabalho:** Português e Inglês
- **E-mail de contato (usado em todo o portfólio):** `arthurbgs2004@gmail.com`
- **GitHub:** [Arthurbgs10](https://github.com/Arthurbgs10)
- **LinkedIn:** [arthur-gabrielads](https://www.linkedin.com/in/arthur-gabrielads/)

### Como se posicionar
Arthur não é "só dev" nem "só PM": ele carrega o projeto do entendimento da necessidade do negócio até a automação que sustenta a operação no dia a dia. O portfólio deve refletir esse trânsito entre as três frentes sem favorecer nenhuma — cada projeto normalmente combina pelo menos duas delas.

---

## 3. Forma de Trabalho — Soft & Hard Skills

### Produto & UX
**Hard:**
- UI/UX design e prototipação
- Fluxos guiados de conversão (ex.: assistente de orçamento por etapas)
- Pesquisa e estratégia de produto para pequenos negócios

**Soft:**
- Comunicação direta com cliente final (tradução de linguagem de negócio em requisito técnico)
- Priorização e foco em substituir processos manuais (planilhas) por produtos usáveis

### Engenharia Full-Stack
**Hard:**
- Next.js, React, Supabase, PostgreSQL, Vercel
- Integração de APIs e construção de painéis administrativos
- "Vibe coding" combinado a fundamentos técnicos sólidos (não é só prompt solto — há revisão e entendimento do que é gerado)

**Soft:**
- Autonomia para tocar projeto do zero à entrega
- Aprendizado rápido de stacks novas conforme a necessidade do projeto

### Dados & Automação com IA
**Hard:**
- n8n (orquestração de fluxos), Docker (parametrização de pacotes/instâncias)
- Evolution API (integração com WhatsApp)
- Google Gemini API (extração de entidades, classificação de texto)
- Google Sheets, Looker Studio (armazenamento e BI)
- Movidesk (plataforma de tickets/atendimento)
- Consulta e modelagem de dados em PostgreSQL via MCP
- Classificação de nível de urgência em fluxos de atendimento

**Soft:**
- Pensamento sistêmico (ver a operação inteira, não só a ferramenta)
- Governança e boas práticas de dados (minimização, LGPD)
- Documentação técnica clara para handoff (este próprio documento é um exemplo)

### Ferramentas de IA no fluxo de trabalho
- **Claude** — geração de conteúdo, estruturação de documentos, apoio à decisão
- **Claude Code** — desenvolvimento e manutenção de código dos projetos (Boardini, Novaes, e este próprio portfólio)
- **Claude Cowork** — automação de processos operacionais (usado no projeto de onboarding, seção 7.5)

---

## 4. Stack & Ferramentas (lista consolidada)

| Categoria | Ferramentas |
|---|---|
| Frontend | Next.js, React, HTML/CSS/JS |
| Backend / DB | Supabase, PostgreSQL |
| Hospedagem | Vercel |
| Automação / Orquestração | n8n, Docker |
| Integração WhatsApp | Evolution API |
| IA / LLM | Google Gemini API, Claude, Claude Code, Claude Cowork |
| Dados / BI | Google Sheets, Looker Studio |
| Atendimento / Tickets | Movidesk |
| Versionamento | GitHub |

---

## 5. Sistema de Design — "Factory"

> Terminal war room à meia-noite. Um canvas de controle preto e estático onde um único card claro pousa como um flash de despacho — o único objeto na sala é o próprio trabalho.

**Tema:** dark. Depth vem de contraste figura/fundo (`#eeeeee` sobre `#101010`), nunca de sombra ou blur.

### Cores

| Nome | Valor | Papel |
|---|---|---|
| Obsidian Canvas | `#101010` | Fundo de página, base de todas as seções |
| Carbon Lift | `#1d1a18` | Superfícies elevadas, nav, botões escuros |
| Ash Stroke | `#3d3a39` | Bordas finas (1px), separadores |
| Graphite Mid | `#4d4947` | Preenchimentos de gráfico, superfícies neutras |
| Warm Granite | `#8a8380` | Texto secundário, labels inativos |
| Pale Stone | `#b8b3b0` | Texto terciário, eyebrows |
| Bone | `#eeeeee` | Texto primário, superfície dos cards claros |
| Chalk | `#fafafa` | Botão de alto destaque (ex.: CTA principal) |
| Signal Orange | `#ee6018` | Acento funcional — status "ao vivo", dados |
| Metric Green | `#a0ca92` | Acento funcional — dados, sparklines |

**Nunca introduzir cores além dessas.** Laranja e verde são "voz de dado", nunca preenchimento de botão ou superfície grande.

### Tipografia
- **Geist** (substituto: Inter) — todo texto de interface, peso 400 quase sempre; peso 500 só em ênfase pontual.
  - Tamanhos: 12, 14, 16, 36, 44, 72
  - Tracking negativo proporcional ao tamanho: -0.04em (72px/display), -0.025em (44px/heading-lg), -0.031em (36px/heading)
- **Geist Mono** (substituto: JetBrains Mono) — captions, labels, status, sempre uppercase 12px, tracking -0.02em.

### Espaçamento & Layout
- Unidade base: 8px · Densidade: confortável
- Largura máxima de página: 1200px
- Gap entre seções: 96px · Padding de card: 24px · Gap entre elementos: 24px

### Border Radius
- Nav: 3px · Cards: 10px · Botões: 3px · Painéis grandes: 20px

### Componentes-chave
- **Nav superior:** transparente sobre `#101010`, wordmark em Geist Mono uppercase à esquerda, botão claro (`#fafafa`) de alto destaque, link ghost com borda 1px.
- **Botão escuro:** fundo `#1f1d1c`, texto `#eeeeee`, radius 3px, sem borda.
- **Botão claro:** fundo `#fafafa`, texto invertido escuro, radius 3px. Único botão com contraste cromático — usar com moderação.
- **Link ghost:** transparente, borda 1px `#3d3a39`, texto muda de cor no hover (nunca ganha preenchimento).
- **Card claro (figura sobre fundo escuro):** `#eeeeee`, radius 10px, padding 24px, sem sombra — é a principal forma de hierarquia visual.
- **Dashboard Frame:** janela estilo macOS (dots), fundo quase preto (`#0d0d0d`), grid de metric tiles com divisores 1px.
- **Metric Tile:** label em Geist Mono 12px uppercase (`#b8b3b0`); valor em Geist 36px (`#eeeeee`); sparkline fina (1px) em laranja ou verde.
- **Status Pulse:** círculo de 6px preenchido em `#ee6018`, indicador "ao vivo" inline antes de um label.
- **Logo/Stack Strip:** linha única de texto monocromático (`#8a8380`) sobre `#101010`, sem cards, separada por 96px de respiro.
- **Feature Card:** borda 1px `#1d1a18`, radius 10px, sem preenchimento — a borda implica o card, não uma superfície sólida.
- **CTA Card final:** card claro ~480–560px, radius 20px, eyebrow com ponto laranja + texto escuro, botão escuro dentro do card.

### Do's
- Manter o canvas `#101010` em toda seção; só cards claros podem ser "brilhantes".
- Geist peso 400 em quase tudo; peso 500 só quando um label precisa dominar (ex.: heading de rodapé).
- Radius: 3px em botões/nav, 10px em cards, 20px nos painéis maiores — nunca mais que isso.
- Profundidade só por contraste `#eeeeee`-sobre-`#101010` e respiro de 96px+ entre seções.

### Don'ts
- Nenhuma cor de acento adicional além da paleta listada.
- Nada de peso 600+/bold em headings.
- Nunca usar laranja/verde como fundo de botão, card ou texto grande.
- Nada de sombra, glow ou blur para simular elevação.
- Nada de serifa ou fonte decorativa — só Geist e Geist Mono.
- Nunca preencher botão primário com cor de marca — só neutro escuro ou neutro claro.

---

## 6. Estrutura Atual do Site (HTML entregue)

Arquivo de referência: `portfolio-arthur.html` (versão estática, pronta para servir de base).

**Seções, na ordem:**
1. **Header/Nav** — wordmark "Arthur Gabriel" (Geist Mono), links (Sobre, Skills, Projetos, Contato), toggle de idioma PT/EN, botão claro "WhatsApp".
2. **Hero** — headline "Da ideia ao painel." + subheadline + botões (Ver projetos / Falar sobre um projeto) à esquerda; à direita, um **Dashboard Frame** com 4 metric tiles ilustrativos (Projetos entregues, Stacks aplicadas, Automações em produção, Idiomas de trabalho) com sparklines.
3. **Stack Strip** — linha com o nome das ferramentas principais (texto monocromático).
4. **Sobre** — bio curta em card claro.
5. **Skills** — 3 feature cards (Produto & UX / Engenharia Full-Stack / Dados & Automação com IA), cada um com lista de hard skills.
6. **Projetos** — grid de cards, cada um com:
   - Mockup estilizado (blocos abstratos representando layout — nunca captura de tela real ou código)
   - Tags (Geist Mono, uppercase, pequenas)
   - Título e descrição curta
   - Status (bolinha verde = no ar / laranja = em construção) + link "Ver site ↗" quando houver URL pública
7. **CTA final** — card claro com eyebrow "Disponível para novos projetos" e botão de WhatsApp.
8. **Footer** — colunas (marca, navegação, contato: WhatsApp / e-mail / LinkedIn / GitHub).

**Implementação do toggle de idioma:** todo texto traduzível tem `class="i18n"` com atributos `data-pt` e `data-en`; um script troca `textContent` de todos os elementos ao clicar em PT ou EN, e atualiza `document.documentElement.lang`.

**Ação necessária na migração:** o grid de projetos tem hoje 4 cards (Novaes, Boardini, Pipeline WhatsApp/CFTV, Dashboard de Estudos) e precisa crescer para 6, incluindo os dois projetos novos da seção 7.4 e 7.5 — repensar o grid (ex.: 3 colunas em desktop) mantendo os componentes e regras visuais da seção 5.

---

## 7. Projetos para o Portfólio

### 7.1 Novaes Planejados
- **O quê:** site + painel de gestão para loja de móveis planejados (Campo Grande, RJ)
- **Papel de Arthur:** UI/UX e desenvolvimento da landing page ("vibe coding" + fundamentos técnicos), estratégia de assistente guiada por etapas para captar orçamento, análise de dados para o painel de gestão
- **Site público:** https://novaesplanejados.vercel.app/
- **Painel:** existe, mas **nunca deve ser linkado publicamente nem ter credenciais expostas** — é acesso restrito dos donos do negócio
- **Status:** no ar

### 7.2 Boardini
- **O quê:** site + painel de clientes para dupla storymaker de casamentos (Julia & Victor)
- **Papel de Arthur:** colaborador técnico — landing page e dashboard de clientes, migração em andamento para stack de produção (Next.js + Supabase + Vercel)
- **Site público:** https://boardini-app.vercel.app/
- **Status:** em migração de stack (não concluída)
- **GitHub:** `Arthurbgs10/boardini-app`

### 7.3 Pipeline WhatsApp → IA → BI (Monitoramento CFTV/Segurança)
- **O quê:** captura mensagens não estruturadas de grupos de WhatsApp de monitoramento (CFTV, segurança, ocorrências operacionais), estrutura via IA e disponibiliza indicadores em tempo real
- **Arquitetura:** WhatsApp → Evolution API (webhook) → n8n (orquestração/ETL) → Google Gemini API (extração de entidades, JSON tipado) → Google Sheets (armazenamento) → Looker Studio (BI)
- **Papel de Arthur:** arquitetura de dados ponta a ponta, definição do schema estruturado, boas práticas de LGPD (minimização de dados, evitar dados sensíveis)
- **Status:** arquitetura documentada
- **Sem link público** (projeto interno)

### 7.4 Dashboard de Atendimento WhatsApp B2C (Customer Success)
- **Contexto:** desenvolvido na função atual de Analista de Customer Success
- **O quê:** automação de coleta de dados diretamente dos grupos de WhatsApp com clientes finais (B2C), transformando as conversas em um dashboard de métricas de performance
- **Componentes do dashboard:**
  - Mensuração de dados e métricas de performance do atendimento
  - Painéis de acompanhamento por atendente
  - Classificação automática de nível de urgência das mensagens
- **Stack:** Evolution API + Docker (parametrização/isolamento de pacotes e instâncias)
- **Status:** em produção
- **Cuidado ao publicar:** descrever em nível de arquitetura/processo — **não expor nomes de clientes reais, dados de atendimento ou informações internas da empresa**

### 7.5 Automação de Onboarding de Clientes (Claude Cowork + Movidesk)
- **Contexto:** também desenvolvido na função de Customer Success
- **O quê:** automação do processo de onboarding de um novo cliente, do cadastro à primeira interação de atendimento
- **Fluxo:**
  1. Coleta os dados de cadastro do cliente
  2. Inicia o registro do cliente na plataforma de tickets **Movidesk**
  3. Cria automaticamente o grupo de WhatsApp do cliente
  4. Envia, dentro do grupo, todas as etapas de treinamento da plataforma para dar início ao onboarding/atendimento personalizado
- **Ferramenta central:** **Claude Cowork**, junto com conhecimento de análise de dados aplicado ao processo
- **Status:** em produção
- **Cuidado ao publicar:** mesmo tratamento de confidencialidade da seção 7.4 — descrever o processo, não os dados reais

### 7.6 Dashboard de Estudos (projeto pessoal)
- **O quê:** painel pessoal para organizar estudo de trilhas técnicas de TI — checklist por módulo, barra de progresso geral, espaço de anotações
- **Papel de Arthur:** front-end e UX de aprendizado, projeto individual
- **Status:** em evolução — próxima versão deve ter sincronização real (hoje usa armazenamento local do navegador)
- **Sem link público**

---

## 8. Regras de Negócio (Business Rules)

Estas regras têm prioridade sobre qualquer decisão estética ou de conveniência durante a migração e as próximas iterações:

1. **Nunca usar, armazenar ou expor credenciais de login** de nenhum painel administrativo (ex.: painel da Novaes) — em nenhum lugar do site, do código ou da documentação.
2. **Nunca expor código-fonte real** dos projetos de clientes (Novaes, Boardini) no portfólio — apenas descrição em texto, links para os sites públicos (não para os painéis) e mockups estilizados/abstratos representando a interface.
3. **Seguir rigorosamente o sistema de design "Factory"** (seção 5) — cores, tipografia, espaçamento, componentes e, principalmente, os *Don'ts*. Nenhuma cor de acento nova, nenhuma sombra, nenhum radius fora do especificado.
4. **Idioma padrão: Português**, com toggle funcional para Inglês em 100% do conteúdo visível (nenhum texto deve ficar "esquecido" só em um idioma).
5. **Perfil equilibrado:** o portfólio deve continuar representando as três frentes (Produto/UX, Engenharia Full-Stack, Dados/Automação com IA) sem favorecer nenhuma visualmente ou em volume de conteúdo.
6. **Contatos obrigatórios no rodapé/CTA:** WhatsApp (`21995124810`), e-mail (`arthurbgs2004@gmail.com`), LinkedIn (`arthur-gabrielads`), GitHub (`Arthurbgs10`).
7. **Projetos internos da empresa atual (7.4 e 7.5):** publicar apenas em nível de arquitetura e processo — nunca nomes de clientes reais, prints de tickets, números de telefone reais ou qualquer dado que identifique pessoas/empresas atendidas.
8. **Links públicos são permitidos** para sites já publicados de clientes (Novaes e Boardini), mas **nunca para painéis autenticados**.
9. **Tom de voz:** direto, sem jargão de marketing — o site se comporta como um "instrumento", não como uma vitrine (consistente com o sistema de design).
10. **Este documento (`portfolio-arthur-handoff.md`) deve ser atualizado a cada novo projeto ou mudança relevante de escopo/skills**, servindo como changelog vivo do portfólio.

---

## 9. Contato e Redes

| Canal | Valor |
|---|---|
| WhatsApp | `21995124810` |
| E-mail (contato do site) | `arthurbgs2004@gmail.com` |
| LinkedIn | https://www.linkedin.com/in/arthur-gabrielads/ |
| GitHub | https://github.com/Arthurbgs10 |

---

## 10. Estado Atual & Próximos Passos

**Feito:**
- Primeira versão estática do site (`portfolio-arthur.html`) com hero, sobre, skills, 4 projetos, CTA, footer e toggle PT/EN, seguindo o design system Factory.
- Migração para Next.js (App Router, TypeScript, sem Tailwind — CSS com as mesmas custom properties do design Factory) em repositório dedicado `portfolio-arthur/`, separado do repositório do cliente Boardini.
- Toggle PT/EN reimplementado via React Context (`lib/i18n.tsx`) + componente `<I18n pt="" en="" />`, mantendo o mesmo padrão de conteúdo bilíngue par-a-par do HTML original.
- Projetos 7.4 (Dashboard de Atendimento WhatsApp B2C) e 7.5 (Automação de Onboarding com Claude Cowork) adicionados em `lib/content.ts`, com textos revisados para não expor nomes de clientes, números reais ou dados internos.
- Grid de projetos reorganizado para 6 cards (3 colunas em desktop, 2 em tablet, 1 em mobile), com mockups abstratos próprios para cada novo card.
- Fontes trocadas para Geist/Geist Mono reais via `next/font/google` (o HTML estático usava Inter/JetBrains Mono como substitutos por não ter acesso ao Geist via Google Fonts).
- Build, typecheck, lint e verificação visual (desktop + mobile, PT + EN) passando sem erros.

**A fazer no Claude Code:**
- [ ] Configurar deploy (Vercel, provavelmente, dado o restante da stack)
- [ ] Repositório GitHub dedicado (`Arthurbgs10/portfolio-arthur` ou nome a definir) — projeto já iniciado como repo git local, falta criar o remoto e dar push
- [ ] Seguir iterando projeto por projeto (copy, mockups, possíveis novos projetos futuros)

---

## 11. Prompt de Início para Claude Code

Copie e cole o bloco abaixo ao iniciar a sessão no Claude Code, com este arquivo (`portfolio-arthur-handoff.md`) e o `portfolio-arthur.html` anexados ao repositório/contexto:

```
Este repositório é a migração do meu portfólio profissional, hoje em uma versão estática (portfolio-arthur.html). 
Leia por completo o arquivo portfolio-arthur-handoff.md antes de qualquer alteração — ele contém meu perfil 
profissional, hard/soft skills, stack de ferramentas, o sistema de design "Factory" (cores, tipografia, 
componentes, do's e don'ts) e a descrição de todos os projetos a serem exibidos.

Regras de negócio inegociáveis (detalhadas na seção 8 do MD):
- Nunca expor código real de projetos de clientes, apenas mockups estilizados e descrições
- Nunca linkar ou referenciar painéis administrativos autenticados, nem suas credenciais
- Seguir rigorosamente o design system Factory, sem novas cores, sombras ou radius fora do especificado
- Manter toggle PT/EN funcional em 100% do conteúdo
- Não expor dados de clientes/empresa atual nos projetos internos (seções 7.4 e 7.5) — só arquitetura/processo

Tarefa inicial: 
1. Confirme comigo se seguimos em HTML/CSS/JS estático ou migramos para Next.js.
2. Adicione os dois projetos novos (Dashboard de Atendimento WhatsApp B2C e Automação de Onboarding com 
   Claude Cowork) ao grid de projetos, reorganizando o layout para 6 cards mantendo os componentes do design system.
3. Depois disso, seguimos iterando projeto por projeto.
```

---

*Documento gerado para acompanhar a migração do portfólio de Arthur Gabriel para o Claude Code. Manter atualizado a cada nova etapa.*
