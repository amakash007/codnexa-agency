import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Work"
        title="Project highlights built for performance and clarity."
        description="Our portfolio spans web development, mobile apps, and modern front-end implementation across diverse industries."
      />

      <div className="grid gap-8 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft transition hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="relative h-72 overflow-hidden bg-slate-200 dark:bg-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <span className="inline-block rounded-full bg-orange-500 px-4 py-2 text-sm font-bold uppercase tracking-wider text-white">
                    {project.category}
                  </span>
                  <h3 className="mt-3 text-2xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
            <div className="p-7">
              <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-orange-500/20 px-3 py-1.5 text-sm font-semibold text-orange-600 dark:text-orange-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex gap-4">
                <a
                  href={project.liveLink}
                  className="flex-1 rounded-lg border border-orange-500 bg-transparent px-5 py-2.5 text-center text-sm font-semibold text-orange-600 transition hover:bg-orange-500 hover:text-white dark:text-orange-400 dark:hover:text-white"
                >
                  View Live
                </a>
                <a
                  href={project.githubLink}
                  className="flex-1 rounded-lg bg-orange-500 px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
