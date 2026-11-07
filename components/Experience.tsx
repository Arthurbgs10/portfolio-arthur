import { I18n } from '@/lib/i18n';
import { experience } from '@/lib/content';
import { Reveal } from './Reveal';

export function Experience() {
  return (
    <section id="experiencia">
      <div className="wrap about-grid">
        <Reveal>
          <span className="eyebrow">
            <span className="pulse" />
            <I18n pt="Experiência" en="Experience" />
          </span>
          <h2 className="h-heading">{experience.company}</h2>
          <I18n
            as="p"
            className="lede"
            style={{ marginTop: 16 }}
            pt={experience.description.pt}
            en={experience.description.en}
          />
          <I18n as="span" className="timeline-period" pt={experience.period.pt} en={experience.period.en} />
        </Reveal>

        <Reveal delay={120}>
          <ol className="timeline">
            {experience.roles.map((role) => (
              <li className={`timeline-item${role.current ? ' current' : ''}`} key={role.title.pt}>
                <I18n as="h3" pt={role.title.pt} en={role.title.en} />
                <I18n as="span" className="timeline-period" pt={role.period.pt} en={role.period.en} />
                <ul>
                  {role.highlights.map((highlight) => (
                    <li key={highlight.pt}>
                      <I18n pt={highlight.pt} en={highlight.en} />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
