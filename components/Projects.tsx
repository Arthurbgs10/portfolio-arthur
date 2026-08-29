import { I18n } from '@/lib/i18n';
import { projects } from '@/lib/content';
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
            en="Projects already running in the real world."
          />
        </Reveal>

        <div className="project-grid">
          {projects.map((project, i) => (
            <Reveal delay={Math.min(i, 3) * 90} key={project.id}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
