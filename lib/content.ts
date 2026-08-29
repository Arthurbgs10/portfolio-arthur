export type Bi = { pt: string; en: string };

export type SkillCard = {
  kicker: Bi;
  title: Bi;
  description: Bi;
  bullets: Bi[];
};

export const skillCards: SkillCard[] = [
  {
    kicker: { pt: 'Produto & UX', en: 'Product & UX' },
    title: { pt: 'Da necessidade ao fluxo', en: 'From need to flow' },
    description: {
      pt: 'Traduzo o pedido do cliente final em interface e jornada de conversão.',
      en: "I translate the end client's request into interface and conversion journey.",
    },
    bullets: [
      { pt: 'UI/UX e prototipação', en: 'UI/UX and prototyping' },
      { pt: 'Fluxos guiados de orçamento/contato', en: 'Guided quote/contact flows' },
      { pt: 'Comunicação direta com o cliente final', en: 'Direct communication with end clients' },
    ],
  },
  {
    kicker: { pt: 'Engenharia Full-Stack', en: 'Full-Stack Engineering' },
    title: { pt: 'Do protótipo à produção', en: 'From prototype to production' },
    description: {
      pt: 'Construo com agilidade e migro para stacks de produção quando o projeto escala.',
      en: 'I build fast and migrate to production stacks as the project scales.',
    },
    bullets: [
      { pt: 'Next.js · React · Supabase', en: 'Next.js · React · Supabase' },
      { pt: 'PostgreSQL · Vercel', en: 'PostgreSQL · Vercel' },
      { pt: 'Integração de APIs e painéis de gestão', en: 'API integration and management dashboards' },
    ],
  },
  {
    kicker: { pt: 'Dados & Automação com IA', en: 'Data & AI Automation' },
    title: { pt: 'Da mensagem à decisão', en: 'From message to decision' },
    description: {
      pt: 'Estruturo dados não organizados em indicadores acionáveis.',
      en: 'I structure unorganized data into actionable metrics.',
    },
    bullets: [
      { pt: 'n8n · Google Gemini API', en: 'n8n · Google Gemini API' },
      { pt: 'Modelagem de schema e ETL', en: 'Schema modeling and ETL' },
      { pt: 'Dashboards em Looker Studio', en: 'Looker Studio dashboards' },
    ],
  },
];

export type ProjectStatus = 'live' | 'building' | 'documented' | 'evolving';

export type Project = {
  id: string;
  tags: Bi[];
  title: Bi;
  description: Bi;
  status: { label: Bi; dot: 'live' | 'building' };
  link?: { href: string; label: Bi };
};

export const projects: Project[] = [
  {
    id: 'novaes',
    tags: [
      { pt: 'UI/UX', en: 'UI/UX' },
      { pt: 'Vibe Coding', en: 'Vibe Coding' },
      { pt: 'IA Aplicada', en: 'Applied AI' },
      { pt: 'Dashboard', en: 'Dashboard' },
    ],
    title: { pt: 'Novaes Planejados', en: 'Novaes Planejados' },
    description: {
      pt: 'Landing page e painel de gestão para uma loja de móveis planejados. Assistente guiada por etapas para captar orçamento, e painel para substituir a planilha de controle de clientes e projetos.',
      en: 'Landing page and management dashboard for a planned-furniture store. Step-by-step guided assistant for capturing quotes, and a dashboard replacing the client/project tracking spreadsheet.',
    },
    status: { label: { pt: 'No ar', en: 'Live' }, dot: 'live' },
    link: { href: 'https://novaesplanejados.vercel.app/', label: { pt: 'Ver site →', en: 'Visit site →' } },
  },
  {
    id: 'boardini',
    tags: [
      { pt: 'Front-end', en: 'Front-end' },
      { pt: 'Painel de Clientes', en: 'Client Dashboard' },
      { pt: 'Migração de Stack', en: 'Stack Migration' },
    ],
    title: { pt: 'Boardini', en: 'Boardini' },
    description: {
      pt: 'Site e painel de clientes para uma dupla storymaker de casamentos. Em migração da versão inicial para uma stack de produção (Next.js + Supabase), permitindo acesso multi-dispositivo ao painel.',
      en: 'Site and client dashboard for a wedding storymaking duo. Currently migrating from the first version to a production stack (Next.js + Supabase) for multi-device dashboard access.',
    },
    status: { label: { pt: 'Em migração', en: 'Migrating' }, dot: 'building' },
    link: { href: 'https://boardini-app.vercel.app/', label: { pt: 'Ver site →', en: 'Visit site →' } },
  },
  {
    id: 'whatsapp-pipeline',
    tags: [
      { pt: 'Automação', en: 'Automation' },
      { pt: 'LLM', en: 'LLM' },
      { pt: 'ETL', en: 'ETL' },
      { pt: 'BI', en: 'BI' },
    ],
    title: { pt: 'Pipeline WhatsApp → IA → BI', en: 'WhatsApp → AI → BI Pipeline' },
    description: {
      pt: 'Arquitetura de dados ponta a ponta: mensagens de grupos operacionais de WhatsApp são capturadas via Evolution API, orquestradas no n8n, estruturadas pela API Gemini e organizadas em Google Sheets, com indicadores em tempo real no Looker Studio.',
      en: 'End-to-end data architecture: messages from operational WhatsApp groups are captured via Evolution API, orchestrated in n8n, structured by the Gemini API and organized in Google Sheets, with real-time metrics in Looker Studio.',
    },
    status: { label: { pt: 'Arquitetura documentada', en: 'Architecture documented' }, dot: 'live' },
  },
  {
    id: 'whatsapp-b2c-dashboard',
    tags: [
      { pt: 'Automação', en: 'Automation' },
      { pt: 'Dados', en: 'Data' },
      { pt: 'Docker', en: 'Docker' },
      { pt: 'Evolution API', en: 'Evolution API' },
    ],
    title: { pt: 'Dashboard de Atendimento WhatsApp B2C', en: 'B2C WhatsApp Support Dashboard' },
    description: {
      pt: 'Automação que coleta dados diretamente dos grupos de WhatsApp com clientes finais e transforma as conversas em um painel de métricas de atendimento: acompanhamento de performance por atendente e classificação automática de nível de urgência das mensagens. Instâncias isoladas via Docker.',
      en: 'Automation that collects data directly from customer-facing WhatsApp groups and turns conversations into a support metrics dashboard: per-agent performance tracking and automatic urgency classification for incoming messages. Instances isolated via Docker.',
    },
    status: { label: { pt: 'Em produção', en: 'In production' }, dot: 'live' },
  },
  {
    id: 'onboarding-automation',
    tags: [
      { pt: 'Claude Cowork', en: 'Claude Cowork' },
      { pt: 'Movidesk', en: 'Movidesk' },
      { pt: 'Automação', en: 'Automation' },
      { pt: 'Processo', en: 'Process' },
    ],
    title: { pt: 'Automação de Onboarding de Clientes', en: 'Client Onboarding Automation' },
    description: {
      pt: 'Fluxo que automatiza o onboarding de um novo cliente do zero: cadastro, abertura de registro na plataforma de tickets, criação do grupo de WhatsApp e envio das etapas de treinamento que dão início ao atendimento — orquestrado com Claude Cowork.',
      en: 'Flow that automates onboarding a new client end to end: registration, ticketing-platform record creation, WhatsApp group creation, and delivery of the training steps that kick off support — orchestrated with Claude Cowork.',
    },
    status: { label: { pt: 'Em produção', en: 'In production' }, dot: 'live' },
  },
  {
    id: 'study-dashboard',
    tags: [
      { pt: 'Projeto Pessoal', en: 'Personal Project' },
      { pt: 'Front-end', en: 'Front-end' },
      { pt: 'UX de Aprendizado', en: 'Learning UX' },
    ],
    title: { pt: 'Dashboard de Estudos', en: 'Study Dashboard' },
    description: {
      pt: 'Painel pessoal para organizar o estudo de trilhas técnicas de TI: checklist por módulo, barra de progresso geral e espaço de anotações. Em evolução para uma versão com sincronização real.',
      en: 'Personal dashboard to organize studying across technical IT tracks: per-module checklist, overall progress bar and a notes area. Evolving toward a version with real sync.',
    },
    status: { label: { pt: 'Em evolução', en: 'In progress' }, dot: 'building' },
  },
];
