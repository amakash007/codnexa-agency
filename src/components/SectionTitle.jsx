export default function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  const alignClasses = {
    left: 'text-left',
    center: 'mx-auto text-center',
  };

  return (
    <div className={`mb-10 max-w-2xl ${alignClasses[align]}`}>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">{eyebrow}</p>}
      <h2 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-slate-600 dark:text-slate-300">{description}</p>}
    </div>
  );
}
