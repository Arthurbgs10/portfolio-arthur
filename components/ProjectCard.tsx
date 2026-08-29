import { I18n } from '@/lib/i18n';
import type { Project } from '@/lib/content';

function ProjectMock({ id }: { id: string }) {
  switch (id) {
    case 'novaes':
      return (
        <div className="mock-body">
          <div className="bar mock-nav" />
          <div className="bar mock-hero" />
          <div className="bar mock-sub" />
          <div className="mock-row">
            <div className="mock-block" />
            <div className="mock-block" />
            <div className="mock-block" />
          </div>
        </div>
      );
    case 'boardini':
      return (
        <div className="mock-body">
          <div className="bar mock-nav" />
          <div className="mock-row">
            <div className="mock-block" style={{ flex: 2 }} />
            <div className="mock-block" />
          </div>
          <div className="bar mock-sub" />
        </div>
      );
    case 'whatsapp-pipeline':
      return (
        <div className="mock-body">
          <div className="mock-row">
            <div className="mock-block" />
            <div className="mock-block" />
            <div className="mock-block" />
            <div className="mock-block" />
          </div>
          <div className="bar mock-sub" style={{ width: '90%' }} />
          <div className="bar mock-sub" style={{ width: '50%' }} />
        </div>
      );
    case 'whatsapp-b2c-dashboard':
      return (
        <div className="mock-body">
          <div className="mock-row">
            <div className="mock-block" />
            <div className="mock-block" />
            <div className="mock-block" />
          </div>
          <div className="bar mock-sub" style={{ width: '70%' }} />
          <div className="bar mock-sub" style={{ width: '40%' }} />
        </div>
      );
    case 'onboarding-automation':
      return (
        <div className="mock-body">
          <div className="bar mock-nav" style={{ width: '30%' }} />
          <div className="bar mock-sub" style={{ width: '85%' }} />
          <div className="bar mock-sub" style={{ width: '65%' }} />
          <div className="bar mock-sub" style={{ width: '45%' }} />
        </div>
      );
    case 'study-dashboard':
    default:
      return (
        <div className="mock-body">
          <div className="bar mock-nav" style={{ width: '25%' }} />
          <div className="mock-row">
            <div className="mock-block" style={{ flex: 1 }} />
            <div className="mock-block" style={{ flex: 3 }} />
          </div>
        </div>
      );
  }
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <div className="mock">
        <div className="mock-bar">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <ProjectMock id={project.id} />
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
