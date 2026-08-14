import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaRocket, FaShieldAlt } from 'react-icons/fa';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';

const featurePoints = [
  { icon: FaCode, title: 'Custom builds', text: 'Tailored interfaces and product experiences built for growth.' },
  { icon: FaRocket, title: 'Fast execution', text: 'Rapid launches with a lean and strategic workflow.' },
  { icon: FaShieldAlt, title: 'Reliable delivery', text: 'Thoughtful QA, support, and performance-focused execution.' },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.18),_transparent_30%),linear-gradient(180deg,#fff7ed_0%,#fff1f2_100%)] py-20 dark:bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.14),_transparent_30%),linear-gradient(180deg,#111827_0%,#1f2937_100%)]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-orange-700 dark:border-orange-900 dark:bg-orange-950/30 dark:text-orange-300">
              Digital Agency • Growth Partner
            </span>
            <h1 className="mt-6 text-4xl font-black tracking-tight text-slate-900 dark:text-white md:text-6xl">
              We build ambitious digital products that move brands forward.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
              CODNEXA Technology helps startups and established brands create standout web experiences through strategy, design, and development.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/projects">
                <Button>View Projects</Button>
              </Link>
              <Link to="/contact">
                <Button variant="secondary">Book a Call</Button>
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
              <div><span className="block text-2xl font-black text-slate-900 dark:text-white">70+</span> Launches</div>
              <div><span className="block text-2xl font-black text-slate-900 dark:text-white">4+</span> Years Experience</div>
              <div><span className="block text-2xl font-black text-slate-900 dark:text-white">75%</span> Client Retention</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-8 h-32 w-32 rounded-full bg-orange-500/20 blur-3xl"></div>
            <div className="absolute -right-10 bottom-10 h-36 w-36 rounded-full bg-rose-500/20 blur-3xl"></div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white/20 shadow-soft backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
                alt="Creative agency team working"
                className="h-[520px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/75 via-slate-900/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-200">Creative Growth</p>
                <h3 className="mt-3 text-2xl font-black">Brand systems + digital experiences</h3>
                <p className="mt-2 text-sm text-slate-200">
                  Strategy, design, and engineering built to help brands scale with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why us"
          title="A strategic partner for design, development, and growth."
          description="We blend technology, storytelling, and performance thinking to help brands become more visible, compelling, and profitable."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featurePoints.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <div className="mb-4 inline-flex rounded-2xl bg-orange-50 p-3 text-orange-600 dark:bg-slate-800 dark:text-orange-400">
                <Icon size={24} />
              </div>
              <h3 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Services"
            title="What we do best"
            description="Focused solutions that help businesses turn ideas into polished digital experiences."
            align="center"
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.slice(0, 4).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Projects"
          title="Selected work that delivers real business impact."
          description="From product launches to marketing experiences, our portfolio focuses on outcomes that matter."
        />
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="bg-slate-100 py-20 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle
            eyebrow="Testimonials"
            title="Clients trust us to turn vision into momentum."
            description="We build strong partnerships by delivering clarity, speed, and authentic digital value."
            align="center"
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 p-8 text-white shadow-soft md:p-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-100">Let’s build something standout</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">Ready to bring your next digital idea to life?</h2>
            </div>
            <Link to="/contact">
              <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100">
                Start a Project
                <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
