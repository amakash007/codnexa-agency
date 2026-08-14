    
    export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 text-white hover:shadow-lg hover:scale-[1.02] focus:ring-orange-400',
    secondary: 'border border-orange-200 bg-white text-slate-900 hover:bg-orange-50 focus:ring-orange-400 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700',
    ghost: 'bg-orange-50 text-slate-800 hover:bg-orange-100 focus:ring-orange-400 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
  };

  return (
    <button className={`${baseClasses} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
