import { I18n } from '@/lib/i18n';
import { projectGroups, projects } from '@/lib/content';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';

export function Projects() {
  return (
    <section id="projetos">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">
            <span className="pulse" />
            <I18n pt="Trabalho recente" en="Recent work" />
          </span>
          <I18n
            as="h2"
            className="h-heading"
            style={{ marginBottom: 40 }}
            pt="Projetos que já rodam de verdade."
            en="Projects running in the real world."
          />
        </Reveal>

        {projectGroups.map((group) => (
          <div className="project-group" key={group.id}>
            <Reveal>
              <I18n as="h3" className="project-group-label" pt={group.label.pt} en={group.label.en} />
            </Reveal>
            <div className={`project-grid${group.id === 'work' ? ' two-up' : ''}`}>
              {projects
                .filter((project) => project.group === group.id)
                .map((project, i) => (
                  <Reveal delay={Math.min(i, 3) * 90} key={project.id}>
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
