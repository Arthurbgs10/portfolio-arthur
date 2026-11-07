import { I18n } from '@/lib/i18n';
import { resume } from '@/lib/content';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="col">
            <h4>Arthur Gabriel</h4>
            <I18n
              as="p"
              style={{ maxWidth: 320 }}
              pt="Customer Success, automação e dados para negócios reais."
              en="Customer Success, automation and data for real businesses."
            />
          </div>
          <div className="col">
            <h4>
              <I18n pt="Navegação" en="Navigation" />
            </h4>
            <a href="#sobre">
              <I18n pt="Sobre" en="About" />
            </a>
            <a href="#experiencia">
              <I18n pt="Experiência" en="Experience" />
            </a>
            <a href="#skills">Skills</a>
            <a href="#projetos">
              <I18n pt="Projetos" en="Projects" />
            </a>
            <a href="#contato">
              <I18n pt="Contato" en="Contact" />
            </a>
          </div>
          <div className="col">
            <h4>
              <I18n pt="Contato" en="Contact" />
            </h4>
            <a href="https://wa.me/5521995124810" target="_blank" rel="noopener">
              WhatsApp
            </a>
            <a href="mailto:arthurbgs2004@gmail.com">arthurbgs2004@gmail.com</a>
            <a href="https://www.linkedin.com/in/arthur-gabrielads/" target="_blank" rel="noopener">
              LinkedIn
            </a>
            <a href="https://github.com/Arthurbgs10" target="_blank" rel="noopener">
              GitHub
            </a>
            <a href={resume.pt} download target="_blank" rel="noopener">
              Currículo (PT)
            </a>
            <a href={resume.en} download target="_blank" rel="noopener">
              Resume (EN)
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {year} Arthur Gabriel</span>
          <I18n pt="Feito com Next.js" en="Built with Next.js" />
        </div>
      </div>
    </footer>
  );
}
