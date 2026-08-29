import { I18n } from '@/lib/i18n';

export function About() {
  return (
    <section id="sobre">
      <div className="wrap about-grid">
        <div>
          <span className="eyebrow">
            <span className="pulse" />
            <I18n pt="Quem faz" en="Who's behind this" />
          </span>
          <I18n
            as="h2"
            className="h-heading"
            pt="Produto e engenharia no mesmo lugar."
            en="Product and engineering in one place."
          />
        </div>
        <div className="about-wrap">
        <div className="about-card">
          <h3 className="h-heading" style={{ fontSize: 28 }}>
            Arthur Gabriel
          </h3>
          <I18n
            as="p"
            style={{ marginTop: 16 }}
            pt="Trabalho na fronteira entre produto, desenvolvimento e dados: projeto a experiência, construo o site ou painel e implemento a automação — via 'vibe coding' aliado a fundamentos técnicos — que faz o negócio funcionar sem depender de planilha."
            en="I work at the intersection of product, development and data: I design the experience, build the site or dashboard, and implement the automation — through 'vibe coding' paired with real technical fundamentals — that makes the business run without a spreadsheet."
          />
          <I18n
            as="p"
            style={{ marginTop: 16 }}
            pt="Já entreguei sites e painéis de gestão para negócios reais (móveis planejados, storymaking de casamentos), além de pipelines de dados com IA e automações de atendimento e onboarding no dia a dia de Customer Success."
            en="I've delivered sites and management dashboards for real businesses (planned furniture, wedding storymaking), plus AI data pipelines and day-to-day support/onboarding automations in Customer Success."
          />
        </div>
        </div>
      </div>
    </section>
  );
}
