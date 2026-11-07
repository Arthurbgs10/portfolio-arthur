import { I18n } from '@/lib/i18n';
import { Reveal } from './Reveal';
import { ResumeLink } from './ResumeLink';

const sparklines = [
  { points: '0,26 20,22 40,24 60,14 80,16 100,6 120,8', color: '#ee6018' },
  { points: '0,20 20,22 40,12 60,16 80,8 100,10 120,4', color: '#a0ca92' },
  { points: '0,24 30,24 30,10 120,10', color: '#ee6018' },
  { points: '0,16 40,16 40,16 80,16 80,16 120,16', color: '#8a8380' },
];

const metrics = [
  { pt: 'clientes B2B atendidos', en: 'B2B customers supported', value: { pt: '500+', en: '500+' } },
  { pt: 'canais monitorados com IA', en: 'channels monitored with AI', value: { pt: '485', en: '485' } },
  { pt: 'atendimentos/mês no pico', en: 'tickets/month at peak', value: { pt: '2.000', en: '2,000' } },
  {
    pt: 'início do onboarding após automação',
    en: 'onboarding kickoff after automation',
    value: { pt: '1–2d → 0', en: '1–2d → 0' },
  },
];

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <Reveal className="hero-copy">
          <span className="location">
            <I18n pt="Rio de Janeiro, Brasil · PT / EN" en="Rio de Janeiro, Brazil · PT / EN" />
          </span>
          <span className="eyebrow">
            <span className="pulse" />
            <I18n
              pt="Customer Success Analyst · Implantação & Onboarding · Automação e Dados com IA"
              en="Customer Success Analyst · Implementation & Onboarding · AI Automation & Data"
            />
          </span>
          <I18n
            as="h1"
            className="h-display"
            pt="Customer Success com automação e dados."
            en="Customer Success, powered by automation and data."
          />
          <I18n
            as="p"
            className="lede"
            style={{ marginTop: 24 }}
            pt="Cuido da jornada de mais de 500 clientes B2B, da implantação à expansão, e uso IA para transformar atendimento em processo, métrica e decisão."
            en="I manage the journey of 500+ B2B customers, from implementation to expansion, and use AI to turn support into process, metrics and decisions."
          />
          <div className="btn-row">
            <ResumeLink className="btn btn-dark">
              <I18n pt="Baixar currículo" en="Download resume" />
            </ResumeLink>
            <a href="#projetos" className="btn btn-ghost">
              <I18n pt="Ver projetos" en="See projects" />
            </a>
          </div>
        </Reveal>

        <Reveal className="dash-frame-wrap" delay={150}>
          <div className="dash-frame">
            <div className="dash-titlebar">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="label">
                <span className="pulse" />
                <I18n pt="perfil.dashboard" en="profile.dashboard" />
              </span>
            </div>
            <div className="dash-grid">
              {metrics.map((metric, i) => (
                <div className="metric-tile" key={metric.pt}>
                  <div className="metric-label">
                    <I18n pt={metric.pt} en={metric.en} />
                  </div>
                  <I18n as="div" className="metric-value" pt={metric.value.pt} en={metric.value.en} />
                  <svg viewBox="0 0 120 32" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id={`metric-glow-${i}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={sparklines[i].color} stopOpacity="0.35" />
                        <stop offset="100%" stopColor={sparklines[i].color} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points={`${sparklines[i].points} 120,32 0,32`}
                      fill={`url(#metric-glow-${i})`}
                    />
                    <polyline
                      points={sparklines[i].points}
                      fill="none"
                      stroke={sparklines[i].color}
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
