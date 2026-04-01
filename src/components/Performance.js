import { useEffect, useRef, useState } from 'react';

const performanceCards = [
  {
    key: 'projects',
    stat: '36+',
    label: 'Completed Projects',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    key: 'clients',
    stat: '24+',
    label: 'Happy Clients',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    key: 'ongoing',
    stat: '10+',
    label: 'Ongoing Projects',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
  {
    key: 'support',
    stat: '24/7',
    label: 'Support Available',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function Performance() {
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
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      id="performance"
      className="relative z-10 mx-auto w-full max-w-7xl scroll-mt-24 border-t border-slate-200/80 pb-12 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14 dark:border-white/10"
    >
      <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/95 to-brand-50/40 shadow-2xl shadow-slate-400/15 ring-1 ring-slate-200/50 backdrop-blur-sm dark:border-white/10 dark:bg-gradient-to-br dark:from-brand-900/60 dark:via-brand-950/90 dark:to-[#030a14] dark:shadow-black/50 dark:ring-white/10">
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,118,214,0.04)_0%,transparent_45%,rgba(54,169,250,0.06)_100%)] dark:bg-[linear-gradient(135deg,rgba(0,118,214,0.08)_0%,transparent_50%,rgba(54,169,250,0.05)_100%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent dark:via-secondary/30" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-secondary/25 blur-3xl dark:bg-primary/25" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl dark:bg-secondary/15" />

        <div className="relative z-10 px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="mx-auto max-w-3xl px-1 text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-tight dark:text-white">
              Your Expectations,{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Top Priority</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-300">
              We are committed to delivering high-quality digital solutions that meet your needs, exceed your expectations, and help your
              business grow with confidence.
            </p>
          </div>

          <div
            ref={gridRef}
            className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-4 lg:gap-6"
          >
            {performanceCards.map((card, index) => (
              <div
                key={card.key}
                className="motion-safe:animate-perf-float motion-reduce:animate-none"
                style={{ animationDelay: `${index * 0.35}s` }}
              >
                <article
                  tabIndex={0}
                  aria-label={`${card.stat} ${card.label}`}
                  style={cardsInView ? { animationDelay: `${index * 0.08}s` } : undefined}
                  className={`group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-primary/15 bg-white px-5 py-8 text-center shadow-md shadow-slate-400/10 outline-none ring-1 ring-slate-200/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/35 hover:shadow-xl hover:shadow-primary/15 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 dark:border-white/10 dark:bg-brand-900/50 dark:shadow-sm dark:ring-white/5 dark:hover:border-secondary/30 dark:hover:shadow-lg dark:hover:shadow-secondary/10 dark:focus-visible:ring-secondary/50 dark:focus-visible:ring-offset-2 dark:focus-visible:ring-offset-brand-950 ${
                    cardsInView
                      ? 'motion-safe:animate-perf-card-in motion-reduce:opacity-100 motion-reduce:translate-y-0'
                      : 'opacity-0 translate-y-4 motion-reduce:opacity-100 motion-reduce:translate-y-0'
                  }`}
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-secondary/[0.08] dark:from-primary/10 dark:via-transparent dark:to-secondary/5" />
                  </div>
                  <div className="relative z-[1] flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/35 transition-transform duration-300 ease-out motion-safe:group-hover:scale-110 dark:bg-primary dark:shadow-primary/40">
                    {card.icon}
                  </div>
                  <p className="stat relative z-[1] mt-4 text-4xl font-bold tabular-nums tracking-tight text-primary transition-transform duration-300 ease-out group-hover:scale-105 dark:text-white dark:group-hover:text-white sm:text-5xl lg:text-[2.75rem] lg:leading-none">
                    {card.stat}
                  </p>
                  <p className="relative z-[1] mt-3 max-w-[12rem] text-sm font-semibold leading-snug text-primary/90 transition-colors duration-300 group-hover:text-primary dark:text-slate-400 dark:group-hover:text-slate-200 sm:text-base">
                    {card.label}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
