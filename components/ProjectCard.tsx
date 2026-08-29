import { I18n } from '@/lib/i18n';
import type { Project } from '@/lib/content';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <div className="mock">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={project.mockup} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="project-body">
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span className="tag" key={tag.pt}>
              <I18n pt={tag.pt} en={tag.en} />
            </span>
          ))}
        </div>
        <I18n as="h3" pt={project.title.pt} en={project.title.en} />
        <I18n as="p" pt={project.description.pt} en={project.description.en} />
        <div className="project-footer">
          <span className="project-status">
            <span className={`status-dot${project.status.dot === 'building' ? ' building' : ''}`} />
            <I18n pt={project.status.label.pt} en={project.status.label.en} />
          </span>
          {project.link && (
            <a className="link-arrow" href={project.link.href} target="_blank" rel="noopener">
              <I18n pt={project.link.label.pt} en={project.link.label.en} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
