import SectionTitle from '../components/SectionTitle';
import FAQ from '../components/FAQ';
import { services } from '../data/services';

const faqs = [
  {
    question: 'What types of projects do you take on?',
    answer: 'We work with startups, service businesses, digital brands, and growing companies that need a stronger online presence or product experience.',
  },
  {
    question: 'Do you offer design and development together?',
    answer: 'Yes. Our process combines UX strategy, interface design, and front-end build execution so teams get a cohesive experience from concept to launch.',
  },
  {
    question: 'Can you support ongoing optimization after launch?',
    answer: 'Absolutely. We provide follow-up improvements, performance tuning, UX refinements, and strategic updates as your business grows.',
  },
];

export default function Services() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Services"
        title="Solutions designed to help your business scale digitally."
        description="We combine strategic thinking with implementation expertise so every project is both beautifully designed and commercially effective."
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div key={service.id} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] bg-gradient-to-br from-orange-500 via-rose-500 to-pink-500 p-8 text-white shadow-soft">
          <h3 className="text-2xl font-bold">Why clients choose CODNEXA</h3>
          <ul className="mt-6 space-y-4 text-sm text-orange-100">
            <li>• Clear communication and collaborative process</li>
            <li>• Perfect balance of design quality and technical execution</li>
            <li>• Responsive, conversion-aware product decisions</li>
            <li>• Ongoing support for performance and optimization</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Frequently asked questions</h3>
          <FAQ items={faqs} />
        </div>
      </div>
    </main>
  );
}
