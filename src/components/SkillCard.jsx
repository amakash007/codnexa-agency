export default function SkillCard({ skill }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h3 className="font-semibold text-slate-800 dark:text-slate-100">{skill.name}</h3>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">{skill.level}</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500"
          style={{ width: skill.level === 'Advanced' ? '90%' : '70%' }}
        ></div>
      </div>
    </div>
  );
}
