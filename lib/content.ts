export type Bi = { pt: string; en: string };

export const siteMeta = {
  title: {
    pt: 'Arthur Gabriel — Customer Success, Automação e Dados com IA',
    en: 'Arthur Gabriel — Customer Success, AI Automation & Data',
  },
  description: {
    pt: 'Customer Success Analyst em SaaS B2B, com automação, dados e IA aplicados à jornada do cliente.',
    en: 'Customer Success Analyst in B2B SaaS, applying automation, data and AI across the customer journey.',
  },
} satisfies Record<string, Bi>;

export const resume: Bi = {
  pt: '/cv/Curriculo_Arthur_Barbosa_2026.pdf',
  en: '/cv/Resume_Arthur_Barbosa_2026_EN.pdf',
};

export type Role = {
  title: Bi;
  period: Bi;
  current?: boolean;
  highlights: Bi[];
};

export const experience = {
  company: 'Nutrebem',
  description: {
    pt: 'SaaS para gestão de cantinas escolares',
    en: 'SaaS for school cafeteria management',
  },
  period: { pt: 'out/2023 – atual', en: 'Oct 2023 – Present' },
  roles: [
    {
      title: { pt: 'Customer Success Analyst', en: 'Customer Success Analyst' },
      period: { pt: 'dez/2025 – atual', en: 'Dec 2025 – Present' },
      current: true,
      highlights: [
        {
          pt: 'Ponto focal N1/N2 para 500+ clientes B2B e liderança de projetos do time de atendimento',
          en: 'Tier 1/Tier 2 point of contact for 500+ B2B customers, leading projects for the support team',
        },
        {
          pt: 'Painel com IA que monitora 485 canais e classifica urgência',
          en: 'AI dashboard monitoring 485 channels with urgency classification',
        },
        {
          pt: 'Onboarding automatizado: início de 1–2 dias para o mesmo dia',
          en: 'Automated onboarding: kickoff cut from 1–2 days to same day',
        },
        {
          pt: 'Reversão de churn, primeiras tratativas de upsell e QA em staging',
          en: 'Churn reversal, early upsell conversations and QA in staging',
        },
      ],
    },
    {
      title: { pt: 'Customer Service e Suporte Técnico', en: 'Customer Service & Technical Support' },
      period: { pt: 'fev/2024 – nov/2025', en: 'Feb 2024 – Nov 2025' },
      highlights: [
        {
          pt: 'SLAs, processos de implantação, treinamento do time e suporte a terminais de autoatendimento.',
          en: 'SLAs, implementation processes, team training and self-service kiosk support.',
        },
      ],
    },
    {
      title: { pt: 'Suporte de Sistemas de TI', en: 'IT Systems Support' },
      period: { pt: 'out/2023 – fev/2024', en: 'Oct 2023 – Feb 2024' },
      highlights: [
        {
          pt: 'Cadastro e catalogação de produtos e automação de processos para a equipe de nutrição.',
          en: 'Product cataloging and process automation for the nutrition team.',
        },
      ],
    },
  ] satisfies Role[],
};

export type SkillCard = {
  kicker: Bi;
  title: Bi;
  description: Bi;
  bullets: Bi[];
};

export const skillCards: SkillCard[] = [
  {
    kicker: { pt: 'Customer Success & Implantação', en: 'Customer Success & Implementation' },
    title: { pt: 'Da assinatura à expansão', en: 'From signed contract to expansion' },
    description: {
      pt: 'Conduzo implantação, onboarding e relacionamento para manter clientes ativos e crescendo.',
      en: 'I lead implementation, onboarding and relationship management to keep customers active and growing.',
    },
    bullets: [
      { pt: 'Onboarding e treinamento', en: 'Onboarding and training' },
      { pt: 'Retenção, churn e expansão', en: 'Retention, churn and expansion' },
      { pt: 'SLA e gestão de atendimento N1/N2', en: 'SLA and Tier 1/Tier 2 support management' },
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
      { pt: 'n8n · Gemini API · Claude', en: 'n8n · Gemini API · Claude' },
      { pt: 'SQL (PostgreSQL) · Python', en: 'SQL (PostgreSQL) · Python' },
      { pt: 'Dashboards em Looker Studio', en: 'Looker Studio dashboards' },
    ],
  },
  {
    kicker: { pt: 'Produto & Engenharia', en: 'Product & Engineering' },
    title: { pt: 'Do protótipo à produção', en: 'From prototype to production' },
    description: {
      pt: 'Construo sites e painéis com desenvolvimento assistido por IA e migro para stacks de produção quando o projeto escala.',
      en: 'I build websites and dashboards through AI-assisted development and move them to production stacks as projects scale.',
    },
    bullets: [
      { pt: 'Next.js · React · Supabase', en: 'Next.js · React · Supabase' },
      { pt: 'UI/UX e fluxos guiados', en: 'UI/UX and guided flows' },
      { pt: 'QA e testes funcionais', en: 'QA and functional testing' },
    ],
  },
];

export type Project = {
  id: string;
  group: 'work' | 'independent';
  mockup: string;
  // Compact cards drop the large mockup and render more discreetly.
  compact?: boolean;
  tags: Bi[];
  title: Bi;
  description: Bi;
  result?: Bi;
  status: { label: Bi; dot: 'live' | 'building' };
  link?: { href: string; label: Bi };
};

export const projectGroups: { id: Project['group']; label: Bi }[] = [
  { id: 'work', label: { pt: 'No trabalho — Nutrebem', en: 'At work — Nutrebem' } },
  { id: 'independent', label: { pt: 'Projetos independentes', en: 'Independent projects' } },
];

export const projects: Project[] = [
  {
    id: 'ai-support-dashboard',
    group: 'work',
    mockup: '/mockups/mockup-cs-dashboard.svg',
    tags: [
      { pt: 'Automação', en: 'Automation' },
      { pt: 'IA', en: 'AI' },
      { pt: 'Dados', en: 'Data' },
      { pt: 'Docker', en: 'Docker' },
      { pt: 'Evolution API', en: 'Evolution API' },
    ],
    title: { pt: 'Painel de Atendimento com IA', en: 'AI-Powered Support Dashboard' },
    description: {
      pt: 'Automação que coleta as conversas dos grupos de WhatsApp com clientes e as transforma em um painel de métricas de atendimento: performance por atendente, pendências, classificação automática de urgência e perfil de cada conta. Usado por todo o time para distribuir atendimentos e decidir escalonamentos.',
      en: 'Automation that collects conversations from customer WhatsApp groups and turns them into a support metrics dashboard: per-agent performance, pending items, automatic urgency classification and account profiling. Used by the whole team to assign tickets and decide escalations.',
    },
    result: {
      pt: '485 grupos monitorados · usado por todo o time',
      en: '485 groups monitored · used team-wide',
    },
    status: { label: { pt: 'Em produção', en: 'In production' }, dot: 'live' },
  },
  {
    id: 'onboarding-automation',
    group: 'work',
    mockup: '/mockups/mockup-onboarding.svg',
    tags: [
      { pt: 'Claude Cowork', en: 'Claude Cowork' },
      { pt: 'Movidesk', en: 'Movidesk' },
      { pt: 'Automação', en: 'Automation' },
      { pt: 'Processo', en: 'Process' },
    ],
    title: { pt: 'Automação de Onboarding de Clientes', en: 'Customer Onboarding Automation' },
    description: {
      pt: 'Fluxo que automatiza o onboarding de um novo cliente do zero: cadastro, abertura de registro na plataforma de tickets, criação do grupo de WhatsApp e envio das etapas de treinamento que dão início ao atendimento — orquestrado com Claude Cowork.',
      en: 'Flow that automates onboarding a new client end to end: registration, ticketing-platform record creation, WhatsApp group creation, and delivery of the training steps that kick off support — orchestrated with Claude Cowork.',
    },
    result: {
      pt: 'Início do onboarding de 1–2 dias para o mesmo dia',
      en: 'Kickoff cut from 1–2 days to same day',
    },
    status: { label: { pt: 'Em produção', en: 'In production' }, dot: 'live' },
  },
  {
    id: 'whatsapp-pipeline',
    group: 'independent',
    mockup: '/mockups/mockup-pipeline-whatsapp.svg',
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
    result: {
      pt: 'Dados operacionais não estruturados viram indicadores em tempo real',
      en: 'Unstructured operational data turned into real-time KPIs',
    },
    status: { label: { pt: 'Arquitetura documentada', en: 'Architecture documented' }, dot: 'live' },
  },
  {
    id: 'novaes',
    group: 'independent',
    mockup: '/mockups/mockup-novaes.svg',
    tags: [
      { pt: 'UI/UX', en: 'UI/UX' },
      { pt: 'Desenvolvimento com IA', en: 'AI-assisted dev' },
      { pt: 'IA Aplicada', en: 'Applied AI' },
      { pt: 'Dashboard', en: 'Dashboard' },
    ],
    title: { pt: 'Novaes Planejados', en: 'Novaes Planejados' },
    description: {
      pt: 'Landing page e painel de gestão para uma loja de móveis planejados. Assistente guiada por etapas para captar orçamento, e painel para substituir a planilha de controle de clientes e projetos.',
      en: 'Landing page and management dashboard for a planned-furniture store. Step-by-step guided assistant for capturing quotes, and a dashboard replacing the client/project tracking spreadsheet.',
    },
    result: {
      pt: 'Planilha de controle substituída por painel de gestão',
      en: 'Tracking spreadsheet replaced by a management dashboard',
    },
    status: { label: { pt: 'No ar', en: 'Live' }, dot: 'live' },
    link: { href: 'https://novaesplanejados.vercel.app/', label: { pt: 'Ver site →', en: 'Visit site →' } },
  },
  {
    id: 'boardini',
    group: 'independent',
    mockup: '/mockups/mockup-boardini.svg',
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
    result: {
      pt: 'Painel de clientes com status, anotações e agenda',
      en: 'Client dashboard with status, notes and scheduling',
    },
    status: { label: { pt: 'Em migração', en: 'Migrating' }, dot: 'building' },
    link: { href: 'https://boardini-app.vercel.app/', label: { pt: 'Ver site →', en: 'Visit site →' } },
  },
  {
    id: 'study-dashboard',
    group: 'independent',
    mockup: '/mockups/mockup-study.svg',
    compact: true,
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
