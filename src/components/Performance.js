import { useEffect, useRef, useState } from 'react';

const performanceCards = [
  {
    key: 'projects',
    label: 'Completed projects',
    stat: '36+',
    body: 'End-to-end delivery tracked from kickoff through handoff.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    key: 'clients',
    label: 'Satisfied clients',
    stat: '24+',
    body: 'Long-term relationships with schools, exchanges, and growing brands.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    key: 'ongoing',
    label: 'Ongoing projects',
    stat: '10+',
    body: 'Active retainers and sustained creative capacity when priorities shift.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
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
    label: 'Support',
    stat: '24/7',
    body: 'Responsive communication so timelines and decisions stay clear.',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
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
      <div className="relative border-b border-slate-200/60 pb-0 dark:border-white/10">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-3.5 py-1.5 shadow-sm dark:border-secondary/25 dark:bg-brand-900/60">
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-primary to-secondary" aria-hidden />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-secondary">Performance</span>
        </div>
        <h2 className="mt-4 max-w-3xl text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-[2rem] lg:leading-tight dark:text-white">
          Your expectations,{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">our top priority</span>
        </h2>
        <p className="mt-4 max-w-2xl text-balance text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          We deliver high-quality digital solutions that meet your needs, exceed your expectations, and help your business grow with
          confidence.
        </p>
      </div>

      <div
        ref={gridRef}
        className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
      >
        {performanceCards.map((card, index) => (
          <article
            key={card.key}
            tabIndex={0}
            aria-labelledby={`performance-${card.key}-title`}
            style={cardsInView ? { animationDelay: `${index * 0.05}s` } : undefined}
            className={`flex flex-col rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm outline-none transition-shadow duration-200 hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:border-white/10 dark:bg-brand-900/30 dark:shadow-none dark:hover:bg-brand-900/45 dark:hover:shadow-lg dark:hover:shadow-black/20 dark:focus-visible:ring-primary/40 dark:focus-visible:ring-offset-brand-950 ${
              cardsInView
                ? 'motion-safe:animate-about-card-in motion-reduce:opacity-100 motion-reduce:translate-y-0'
                : 'opacity-0 translate-y-3 motion-reduce:opacity-100 motion-reduce:translate-y-0'
            }`}
          >
            <header className="flex items-center gap-3 border-b border-slate-100 pb-4 dark:border-white/10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:bg-primary/15 dark:text-secondary">
                {card.icon}
              </div>
              <h3
                id={`performance-${card.key}-title`}
                className="text-base font-semibold leading-snug text-slate-800 sm:text-lg dark:text-slate-100"
              >
                {card.label}
              </h3>
            </header>
            <div className="mt-4 flex flex-1 flex-col">
              <p className="text-3xl font-semibold tabular-nums tracking-tight text-slate-900 dark:text-white">{card.stat}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{card.body}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
