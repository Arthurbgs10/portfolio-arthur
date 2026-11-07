import { I18n } from '@/lib/i18n';
import { Reveal } from './Reveal';

export function About() {
  return (
    <section id="sobre">
      <div className="wrap about-grid">
        <Reveal>
          <span className="eyebrow">
            <span className="pulse" />
            <I18n pt="Quem faz" en="Who's behind this" />
          </span>
          <I18n
            as="h2"
            className="h-heading"
            pt="CS com mentalidade de produto e engenharia."
            en="Customer Success with a product and engineering mindset."
          />
        </Reveal>
        <Reveal className="about-wrap" delay={120}>
          <div className="about-card">
            <h3 className="h-heading" style={{ fontSize: 28 }}>
              Arthur Gabriel
            </h3>
            <I18n
              as="p"
              style={{ marginTop: 16 }}
              pt="Há 3 anos atuo na Nutrebem, SaaS de gestão de cantinas escolares, cuidando da jornada de mais de 500 clientes B2B pelo Brasil, entre eles redes como Avenues, Colégio Santa Cruz e Maple Bear. Faço implantação, onboarding, suporte N1/N2, retenção e as primeiras frentes de expansão, e sou ponto focal do time em picos de até 2.000 atendimentos por mês."
              en="For the past 3 years I've worked at Nutrebem, a SaaS for school cafeteria management, owning the journey of 500+ B2B customers across Brazil, including school networks such as Avenues, Colégio Santa Cruz and Maple Bear. I handle implementation, onboarding, Tier 1/Tier 2 support, retention and early expansion, and I'm the team's point of contact in peak months of up to 2,000 tickets."
            />
            <I18n
              as="p"
              style={{ marginTop: 16 }}
              pt="Meu diferencial é usar IA para resolver problemas reais de CS: construí o painel que monitora 485 canais de atendimento com classificação automática de urgência e automatizei o onboarding para começar no mesmo dia da assinatura. Fora do trabalho, desenvolvo sites, painéis e pipelines de dados com desenvolvimento assistido por IA e fundamentos técnicos sólidos."
              en="What sets me apart is using AI to solve real CS problems: I built the dashboard that monitors 485 support channels with automatic urgency classification and automated onboarding so it starts the same day the contract is signed. Outside work, I build websites, dashboards and data pipelines through AI-assisted development grounded in solid technical fundamentals."
            />
            <I18n
              as="p"
              style={{ marginTop: 16 }}
              pt="Formado em Análise e Desenvolvimento de Sistemas, pós-graduado em Análise de Dados e graduando em Engenharia de Software."
              en="Degree in Systems Analysis and Development, postgraduate specialization in Data Analytics, currently pursuing a Bachelor's in Software Engineering."
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
