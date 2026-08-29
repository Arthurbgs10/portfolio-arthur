import { I18n } from '@/lib/i18n';
import { skillCards } from '@/lib/content';
import { Reveal } from './Reveal';

export function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">
            <span className="pulse" />
            <I18n pt="Como trabalho" en="How I work" />
          </span>
          <I18n
            as="h2"
            className="h-heading"
            style={{ marginBottom: 40 }}
            pt="Três frentes, um mesmo produto."
            en="Three fronts, one product."
          />
        </Reveal>

        <div className="card-row">
          {skillCards.map((card, i) => (
            <Reveal className="feature-card" delay={i * 100} key={card.title.pt}>
              <I18n as="span" className="kicker" pt={card.kicker.pt} en={card.kicker.en} />
              <I18n as="h3" pt={card.title.pt} en={card.title.en} />
              <I18n as="p" style={{ fontSize: 14 }} pt={card.description.pt} en={card.description.en} />
              <ul>
                {card.bullets.map((bullet) => (
                  <li key={bullet.pt}>
                    <I18n pt={bullet.pt} en={bullet.en} />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
