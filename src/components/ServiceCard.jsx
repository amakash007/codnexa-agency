import { FiCode, FiLayers, FiTrendingUp, FiMonitor } from 'react-icons/fi';

const iconMap = {
  code: FiCode,
  design: FiLayers,
  seo: FiTrendingUp,
  responsive: FiMonitor,
};

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || FiCode;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 p-3 text-white shadow-lg shadow-orange-500/20">
        <Icon size={24} />
      </div>
      <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{service.description}</p>
    </div>
  );
}
