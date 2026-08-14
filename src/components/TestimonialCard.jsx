export default function TestimonialCard({ testimonial }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-5 text-3xl text-orange-500">“</div>
      <p className="text-base leading-7 text-slate-600 dark:text-slate-300">{testimonial.quote}</p>
      <div className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-700">
        <p className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
        <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
      </div>
    </div>
  );
}
