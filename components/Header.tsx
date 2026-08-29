import { I18n } from '@/lib/i18n';
import { LangToggle } from './LangToggle';

export function Header() {
  return (
    <header>
      <nav className="wrap">
        <span className="wordmark">Arthur Gabriel</span>
        <div className="nav-links">
          <a href="#sobre">
            <I18n pt="Sobre" en="About" />
          </a>
          <a href="#skills">Skills</a>
          <a href="#projetos">
            <I18n pt="Projetos" en="Projects" />
          </a>
          <a href="#contato">
            <I18n pt="Contato" en="Contact" />
          </a>
        </div>
        <div className="nav-right">
          <LangToggle />
          <a
            className="btn btn-light"
            href="https://wa.me/5521995124810?text=Ol%C3%A1%20Arthur!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto."
            target="_blank"
            rel="noopener"
          >
            WhatsApp
          </a>
        </div>
      </nav>
    </header>
  );
}
