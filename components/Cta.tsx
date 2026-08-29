import { I18n } from '@/lib/i18n';

export function Cta() {
  return (
    <section id="contato">
      <div className="wrap">
        <div className="cta-card">
          <span className="eyebrow">
            <span className="pulse" />
            <I18n pt="Disponível para novos projetos" en="Available for new projects" />
          </span>
          <I18n
            as="h2"
            className="h-heading"
            pt="Vamos construir o próximo painel?"
            en="Let's build the next dashboard?"
          />
          <I18n
            as="p"
            pt="Me conta o que você precisa organizar, automatizar ou colocar no ar — respondo pessoalmente."
            en="Tell me what you need to organize, automate or ship — I answer personally."
          />
          <a
            className="btn btn-dark"
            href="https://wa.me/5521995124810?text=Ol%C3%A1%20Arthur!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener"
          >
            <I18n pt="Falar no WhatsApp" en="Message on WhatsApp" />
          </a>
        </div>
      </div>
    </section>
  );
}
