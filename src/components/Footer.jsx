import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const socials = [
  { Icon: FaFacebookF, label: 'Facebook', href: '/' },
  { Icon: FaTwitter, label: 'Twitter', href: '#' },
  { Icon: FaGithub, label: 'GitHub', href: '#' },
  { Icon: FaLinkedinIn, label: 'LinkedIn', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link to="/" className="flex items-center gap-2 text-2xl font-black tracking-tight text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 text-sm text-white shadow-lg shadow-orange-500/30">
                C
              </span>
              CODNEXA
            </Link>
            <p className="mt-4 max-w-sm text-sm text-slate-400">
              Building bold digital experiences for ambitious brands, startups, and modern businesses.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Phone</p>
                <a href="tel:+918378877496" className="mt-1 block font-medium text-white transition hover:text-orange-300">
                  +91 8378877496
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Location</p>
                <p className="mt-1 text-slate-300">123 Digital Avenue, Tech City, TC 12345</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
              <li><Link to="/services" className="hover:text-white">Services</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="mt-4 flex gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-orange-400 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</p>
              <a href="mailto:akashdhage0917@gmail.com" className="mt-2 block text-sm font-medium text-white transition hover:text-orange-300">
                akashdhage0917@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl border border-orange-500/30 bg-gradient-to-r from-orange-500/10 via-rose-500/10 to-pink-500/10 p-8 text-center backdrop-blur-sm">
          <h3 className="text-2xl font-black text-white">Ready to Transform Your Digital Presence?</h3>
          <p className="mt-2 text-slate-300">
            Let's work together to create something extraordinary for your brand.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 px-8 py-3 font-bold text-white transition hover:shadow-lg hover:shadow-orange-500/50"
          >
            Get Started Today
          </Link>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          © 2026 CODNEXA Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
