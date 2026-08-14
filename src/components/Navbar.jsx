import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },//about
  { name: 'Projects', path: '/projects' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 pt-4 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/50 bg-white/75 px-4 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/75 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/codnexa-logo.svg" 
            alt="CODNEXA" 
            className="h-16 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-2 rounded-full bg-slate-100/80 p-1.5 dark:bg-slate-800/80 md:flex">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md shadow-orange-500/20'
                    : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-orange-100 bg-orange-50 p-2 text-orange-600 transition hover:border-orange-200 hover:bg-orange-100 dark:border-slate-700 dark:bg-slate-800 dark:text-orange-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>
          <Link to="/contact" className="rounded-full bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 hover:shadow-xl">
            Let’s Talk
          </Link>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-orange-100 bg-orange-50 p-2 text-orange-600 dark:border-slate-700 dark:bg-slate-800 dark:text-orange-300"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <FiMoon size={18} /> : <FiSun size={18} />}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full border border-orange-100 bg-orange-50 p-2 text-orange-600 dark:border-slate-700 dark:bg-slate-800 dark:text-orange-300"
            aria-label="Open menu"
          >
            {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-[1.5rem] border border-white/50 bg-white/80 px-4 py-4 shadow-[0_12px_24px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-700/70 dark:bg-slate-900/80 md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 text-base font-medium ${
                    isActive ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white' : 'text-slate-700 dark:text-slate-200'
                  }`
                }
              >
                {name}
              </NavLink>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-2 rounded-full bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 px-4 py-2.5 text-center font-semibold text-white">
              Let’s Talk
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
