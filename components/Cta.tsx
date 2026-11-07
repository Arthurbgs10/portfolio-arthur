import { I18n } from '@/lib/i18n';
import { Reveal } from './Reveal';
import { ResumeLink } from './ResumeLink';

export function Cta() {
  return (
    <section id="contato">
      <div className="wrap">
        <Reveal className="cta-wrap">
          <div className="cta-card">
            <span className="eyebrow">
              <span className="pulse" />
              <I18n pt="Aberto a oportunidades" en="Open to opportunities" />
            </span>
            <I18n as="h2" className="h-heading" pt="Vamos conversar?" en="Let's talk." />
            <I18n
              as="p"
              pt="Estou aberto a oportunidades em Customer Success, Implantação e Account Management, inclusive remotas e internacionais. Também topo projetos de automação e painéis sob medida."
              en="I'm open to Customer Success, Implementation and Account Management roles, including remote and international positions. I also take on automation and custom dashboard projects."
            />
            <div className="btn-row">
              <a className="btn btn-dark" href="mailto:arthurbgs2004@gmail.com">
                E-mail
              </a>
              <ResumeLink className="btn btn-ghost">
                <I18n pt="Baixar currículo" en="Download resume" />
              </ResumeLink>
              <a
                className="btn btn-ghost"
                href="https://www.linkedin.com/in/arthur-gabrielads/"
                target="_blank"
                rel="noopener"
              >
                LinkedIn
              </a>
              <a
                className="btn btn-ghost"
                href="https://wa.me/5521995124810?text=Ol%C3%A1%20Arthur!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar."
                target="_blank"
                rel="noopener"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
