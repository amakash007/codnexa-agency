import SectionTitle from '../components/SectionTitle';
import { skills } from '../data/skills';
import { FaReact, FaJs, FaNode, FaGit, FaPython } from 'react-icons/fa';
import { SiTypescript, SiMongodb } from 'react-icons/si';

const stats = [
  { value: '8+', label: 'Years Experience' },
  { value: '120+', label: 'Projects Completed' },
  { value: '24', label: 'Industry Awards' },
  { value: '95%', label: 'Retention Rate' },
];

const achievements = [
  'Built digital experiences for 30+ growing businesses',
  'Delivered award-winning brand refreshes and product websites',
  'Led design systems across multi-brand product ecosystems',
];

export default function About() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="About"
        title="Designing digital experiences with clarity, strategy, and speed."
        description="I’m a multidisciplinary developer and designer focused on products that feel premium, perform smoothly, and help businesses grow."
      />

      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white shadow-soft">
          <p className="text-lg leading-8 text-slate-200">
            CODNEXA Technology is built around the idea that brand trust, clear user journeys, and strong product thinking should work together. I help founders and teams turn ideas into polished websites and digital experiences that look exceptional and convert with purpose.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-3xl font-black">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] overflow-hidden shadow-soft h-96">
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop" 
            alt="3D Agency Illustration" 
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <section className="mt-20">
        <SectionTitle
          eyebrow="Skills"
          title="Core strengths and capabilities."
          description="My work combines modern frontend engineering with a product-first design lens."
        />
        <div className="grid gap-6 md:grid-cols-4 sm:grid-cols-2">
          {skills.map((skill) => {
            const iconMap = {
              FaReact: <FaReact className="h-12 w-12" />,
              FaJs: <FaJs className="h-12 w-12" />,
              FaNode: <FaNode className="h-12 w-12" />,
              FaGit: <FaGit className="h-12 w-12" />,
              FaPython: <FaPython className="h-12 w-12" />,
              SiTypescript: <SiTypescript className="h-12 w-12" />,
              SiMongodb: <SiMongodb className="h-12 w-12" />,
            };
            
            return (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:shadow-lg hover:border-orange-400 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-orange-500"
              >
                <div className={`${skill.color}`}>
                  {iconMap[skill.icon]}
                </div>
                <p className="mt-4 text-center font-semibold text-slate-900 dark:text-white">{skill.name}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mt-20">
        <SectionTitle
          eyebrow="Achievements"
          title="Milestones that shaped the work."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {achievements.map((item) => (
            <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900">
              <p className="text-base leading-7 text-slate-700 dark:text-slate-200">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
