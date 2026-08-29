import { I18n } from '@/lib/i18n';

const sparklines = [
  { points: '0,26 20,22 40,24 60,14 80,16 100,6 120,8', color: '#ee6018' },
  { points: '0,20 20,22 40,12 60,16 80,8 100,10 120,4', color: '#a0ca92' },
  { points: '0,24 30,24 30,10 120,10', color: '#ee6018' },
  { points: '0,16 40,16 40,16 80,16 80,16 120,16', color: '#8a8380' },
];

const metrics = [
  { pt: 'Projetos entregues', en: 'Projects delivered', value: '06' },
  { pt: 'Stacks aplicadas', en: 'Stacks applied', value: '08+' },
  { pt: 'Automações em produção', en: 'Automations in production', value: '02' },
  { pt: 'Idiomas de trabalho', en: 'Working languages', value: 'PT / EN' },
];

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="location">
            <I18n pt="Rio de Janeiro, Brasil · PT / EN" en="Rio de Janeiro, Brazil · PT / EN" />
          </span>
          <I18n as="h1" className="h-display" pt="Da ideia ao painel." en="From idea to dashboard." />
          <I18n
            as="p"
            className="lede"
            style={{ marginTop: 24 }}
            pt="Atuo entre produto, desenvolvimento e dados — construindo sites, painéis de gestão e automações com IA que substituem planilhas e dão visibilidade real a quem decide."
            en="I work across product, development and data — building sites, management dashboards and AI automations that replace spreadsheets and give real visibility to decision makers."
          />
          <div className="btn-row">
            <a href="#projetos" className="btn btn-dark">
              <I18n pt="Ver projetos" en="View projects" />
            </a>
            <a href="#contato" className="btn btn-ghost">
              <I18n pt="Falar sobre um projeto" en="Talk about a project" />
            </a>
          </div>
        </div>

        <div className="dash-frame-wrap">
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
                  <div className="metric-value">{metric.value}</div>
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
        </div>
      </div>
    </section>
  );
}
