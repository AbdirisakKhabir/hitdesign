import { useEffect, useRef, useState } from 'react';

import { PHONE_PRIMARY } from '../constants/contact';

const sectionPad = 'px-4 sm:px-6 lg:px-10 xl:px-14';

function whatsappOrderUrl(packageTitle) {
  const text = `Hi Hitdesigns, I'd like to order the "${packageTitle}" package.`;
  return `https://wa.me/${PHONE_PRIMARY.whatsappDigits}?text=${encodeURIComponent(text)}`;
}

const packages = [
  {
    id: 'essential-business',
    emphasis: 'Essential',
    subtitle: 'Business Package',
    title: 'Essential Business Package',
    description:
      'A solid starting point for brands that want consistent social presence and on-brand creative without the overhead.',
    features: [
      'Core social setup and posting rhythm',
      'Campaign graphics and essential marketing pieces',
      'Great for new and lean teams testing the waters',
    ],
    highlighted: false,
    icon: (
      <svg className="h-9 w-9 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: 'small-business',
    emphasis: 'Small',
    subtitle: 'Business Package',
    title: 'Small Business Package',
    description:
      'Built for growing businesses that need steady content, clearer branding on feeds, and room to scale campaigns.',
    features: [
      'Multi-format creatives for posts and promos',
      'Stronger alignment between visuals and your brand story',
      'Room to test campaigns and grow engagement',
    ],
    highlighted: false,
    icon: (
      <svg className="h-9 w-9 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    id: 'medium-business',
    emphasis: 'Medium',
    subtitle: 'Business Package',
    title: 'Medium Business Package',
    description:
      'Our balanced tier for brands ready for structured social strategy, richer creative output, and ongoing momentum.',
    features: [
      'Campaign-led planning across your priority channels',
      'Heavier design and content volume for sustained visibility',
      'Ideal when marketing is a core growth lever',
    ],
    highlighted: true,
    icon: (
      <svg className="h-9 w-9 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    id: 'enterprise-business',
    emphasis: 'Enterprise',
    subtitle: 'Business Package',
    title: 'Enterprise Business Package',
    description:
      'Full-scale social and creative support for organizations that need priority execution, depth, and coordination.',
    features: [
      'High-volume creative and campaign coverage',
      'Priority workflows for launches and seasonal pushes',
      'Suited to teams with complex goals and multiple touchpoints',
    ],
    highlighted: false,
    icon: (
      <svg className="h-9 w-9 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M10 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: 'academic-project',
    emphasis: 'Academic',
    subtitle: 'Project Package',
    title: 'Academic Project Package',
    description:
      'Tailored for schools, programs, and education-focused initiatives—clear messaging parents and students can trust.',
    features: [
      'Tone and visuals suited to learning communities',
      'Enrollment, events, and awareness campaigns',
      'Steady presence that reflects your institution’s values',
    ],
    highlighted: false,
    icon: (
      <svg className="h-9 w-9 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
  {
    id: 'health-project',
    emphasis: 'Health',
    subtitle: 'Project Package',
    title: 'Health Project Package',
    description:
      'For clinics, wellness brands, and health initiatives—trust-first creative that respects your audience and sector.',
    features: [
      'Calm, credible visuals aligned with care and professionalism',
      'Campaigns for awareness, services, and community trust',
      'Messaging that stays clear and responsible on social',
    ],
    highlighted: false,
    icon: (
      <svg className="h-9 w-9 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function Packages() {
  const gridRef = useRef(null);
  const [cardsInView, setCardsInView] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setCardsInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="packages"
      className={`scroll-mt-24 border-t border-slate-200/90 bg-white py-9 dark:border-white/10 dark:bg-[#050d18] sm:py-11 lg:py-12 ${sectionPad}`}
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-secondary">Social media packages</p>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
            Six packages to match your{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">goals &amp; scale</span>
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            From essential through enterprise—plus academic and health-focused projects. Tap Order now to chat on WhatsApp and get a tailored quote.
          </p>
        </header>

        <div
          ref={gridRef}
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-3 lg:gap-6"
        >
          {packages.map((pkg, index) => (
            <article
              key={pkg.id}
              style={cardsInView ? { animationDelay: `${index * 0.07}s` } : undefined}
              className={`flex flex-col rounded-2xl border p-5 shadow-sm transition will-change-transform motion-reduce:will-change-auto sm:p-6 ${
                cardsInView
                  ? 'motion-safe:animate-about-card-in motion-reduce:opacity-100 motion-reduce:translate-y-0'
                  : 'opacity-0 translate-y-5 motion-reduce:opacity-100 motion-reduce:translate-y-0'
              } ${
                pkg.highlighted
                  ? 'border-primary/40 bg-gradient-to-b from-primary/[0.06] to-transparent ring-2 ring-primary/25 dark:border-secondary/35 dark:from-secondary/10 dark:ring-secondary/25'
                  : 'border-slate-200/90 bg-slate-50/80 dark:border-white/10 dark:bg-brand-900/35'
              }`}
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/12 to-secondary/20 text-primary shadow-inner ring-1 ring-primary/10 dark:from-primary/25 dark:to-secondary/25 dark:text-secondary dark:ring-white/10 sm:h-[4.5rem] sm:w-[4.5rem]">
                {pkg.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                <span className="text-primary dark:text-secondary">{pkg.emphasis}</span>{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-100">{pkg.subtitle}</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">{pkg.description}</p>

              <div className="mt-4 border-t border-slate-200/80 pt-4 dark:border-white/10">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Pricing on request — we&apos;ll match scope to your tier.
                </p>
              </div>

              <ul className="mt-3 flex-1 space-y-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">
                {pkg.features.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary dark:bg-secondary" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappOrderUrl(pkg.title)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-3 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-secondary dark:focus-visible:ring-offset-[#050d18] ${
                  pkg.highlighted
                    ? 'bg-primary text-white shadow-lg shadow-primary/30 hover:bg-brand-700 dark:bg-secondary dark:text-brand-950 dark:shadow-secondary/25 dark:hover:bg-brand-300'
                    : 'border border-slate-200 bg-white text-slate-900 hover:border-primary/40 hover:bg-slate-50 dark:border-white/15 dark:bg-brand-950/50 dark:text-white dark:hover:border-secondary/40 dark:hover:bg-brand-900/80'
                }`}
              >
                <svg className="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Order now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
