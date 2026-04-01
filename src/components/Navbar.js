import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { to: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#packages', label: 'Packages' },
  { to: '/portfolio', label: 'Portfolio' },
  { href: '/#clients', label: 'Clients' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/#team', label: 'Team' },
  { href: '/#contact', label: 'Contact' },
];

const logoFullLight = `${process.env.PUBLIC_URL}/branding/logo-full.png`;
const logoFullDark = `${process.env.PUBLIC_URL}/branding/logo-full-dark.png`;

const navPad = 'px-4 sm:px-6 lg:px-10 xl:px-14';

const linkClass =
  'rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-primary dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-secondary';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/90 bg-white/95 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-brand-950/90">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 py-3 sm:gap-4 sm:py-4 ${navPad}`}
      >
        <Link to="/" className="flex min-w-0 shrink items-center">
          <img
            src={logoFullLight}
            alt="Hitdesigns, Branding &amp; Advertising"
            className="h-10 w-auto max-w-[min(100%,280px)] object-contain object-left sm:h-12 dark:hidden"
            width={280}
            height={48}
          />
          <img
            src={logoFullDark}
            alt="Hitdesigns, Branding &amp; Advertising"
            className="hidden h-10 w-auto max-w-[min(100%,280px)] object-contain object-left sm:h-12 dark:block"
            width={280}
            height={48}
          />
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.to ? (
                <Link to={link.to} className={linkClass}>
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 sm:gap-3 md:flex">
          <ThemeToggle />
          <a
            href="/#contact"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition hover:bg-brand-700"
          >
            Get in touch
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 dark:text-slate-300"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div
          className={`border-t border-slate-200 bg-white px-4 py-5 shadow-lg dark:border-white/10 dark:bg-brand-900 md:hidden ${navPad}`}
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                {link.to ? (
                  <Link
                    to={link.to}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-white/10"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
            <li className="pt-3">
              <a
                href="/#contact"
                className="block rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
