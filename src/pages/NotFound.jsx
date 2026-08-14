import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-3xl items-center justify-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600">404</p>
        <h1 className="mt-4 text-5xl font-black text-slate-900 dark:text-white md:text-6xl">Page not found</h1>
        <p className="mt-5 text-lg text-slate-600 dark:text-slate-300">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <div className="mt-8 flex justify-center">
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
