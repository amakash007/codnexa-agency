import Button from './Button';

export default function ProjectCard({ project }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <img src={project.image} alt={project.title} className="h-60 w-full object-cover" />
      <div className="space-y-4 p-6">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700 dark:bg-slate-800 dark:text-orange-300">
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{project.description}</p>
        <div className="flex gap-3 pt-2">
          <a href={project.liveLink} target="_blank" rel="noreferrer">
            <Button variant="primary">Live Demo</Button>
          </a>
          <a href={project.githubLink} target="_blank" rel="noreferrer">
            <Button variant="secondary">GitHub</Button>
          </a>
        </div>
      </div>
    </article>
  );
}
