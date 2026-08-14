import { useState } from 'react';

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={item.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-semibold text-slate-900 dark:text-white">{item.question}</span>
              <span className="text-xl text-orange-500">{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <p className="px-5 pb-5 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
