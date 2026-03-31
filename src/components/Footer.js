import { PHONE_PRIMARY, PHONE_SECONDARY } from '../constants/contact';

const sectionPad = 'px-4 sm:px-6 lg:px-10 xl:px-14';

const quickLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#packages', label: 'Packages' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/#clients', label: 'Clients' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/#team', label: 'Team' },
  { href: '/#contact', label: 'Contact' },
];

const logoMark = `${process.env.PUBLIC_URL}/branding/logo-mark.png`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`relative mt-auto border-t border-white/10 bg-gradient-to-b from-brand-950 via-[#071525] to-[#030a12] ${sectionPad}`}
      role="contentinfo"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="pointer-events-none absolute left-1/4 top-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-32 w-32 rounded-full bg-secondary/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl pt-10 pb-8 sm:pt-12 sm:pb-10 lg:pt-12 lg:pb-11">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="/" className="inline-flex items-center gap-3 rounded-2xl outline-none ring-offset-2 ring-offset-[#030a12] transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-secondary">
              <img
                src={logoMark}
                alt="Hitdesigns"
                width={72}
                height={72}
                className="h-16 w-16 rounded-xl object-cover shadow-lg shadow-black/30 ring-1 ring-white/10 sm:h-[4.5rem] sm:w-[4.5rem]"
              />
              <div>
                <p className="text-base font-bold tracking-tight text-white">Hitdesigns</p>
                <p className="text-xs font-medium text-secondary sm:text-sm">Branding &amp; Advertising</p>
              </div>
            </a>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
              Creative digital marketing, design, and branding—helping businesses grow with strategy, craft, and clarity.
            </p>
          </div>

          {/* Links */}
          <div className="sm:grid sm:grid-cols-2 sm:gap-8 lg:col-span-4 lg:gap-6">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Explore</h2>
              <ul className="mt-4 space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-slate-300 transition hover:text-white hover:underline decoration-primary/60 underline-offset-4 sm:text-base"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Contact</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-300 sm:text-base">
                <li>
                  <a href="mailto:info@hitdesign.net" className="transition hover:text-secondary">
                    Info@hitdesign.net
                  </a>
                </li>
                <li>
                  <a href={`tel:${PHONE_PRIMARY.tel}`} className="transition hover:text-secondary">
                    {PHONE_PRIMARY.display}
                  </a>
                </li>
                <li>
                  <a href={`tel:${PHONE_SECONDARY.tel}`} className="transition hover:text-secondary">
                    {PHONE_SECONDARY.display}
                  </a>
                </li>
                <li className="leading-relaxed text-slate-400">Burco, Somaliland</li>
              </ul>
            </div>
          </div>

          {/* Accent column */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">Why Hitdesigns</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
              Strategy-led creative, responsive collaboration, and measurable outcomes for brands that want to stand out.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Strategy', 'Design', 'Growth'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between sm:gap-5">
          <p className="text-center text-sm text-slate-500 sm:text-left">
            © {year} Hitdesigns. All rights reserved.
          </p>
          <p className="text-center text-sm text-slate-500">
            Developed by{' '}
            <a
              href="https://taamsolutions.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-slate-400 underline decoration-slate-600 underline-offset-2 transition hover:text-secondary hover:decoration-secondary"
            >
              Taam Solutions
            </a>
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:border-secondary/40 hover:bg-white/10 hover:text-white"
          >
            Back to top
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
