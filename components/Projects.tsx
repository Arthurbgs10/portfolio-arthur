import { I18n } from '@/lib/i18n';
import { projects } from '@/lib/content';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  return (
    <section id="projetos">
      <div className="wrap">
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

        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
