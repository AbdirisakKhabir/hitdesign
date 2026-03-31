import { useEffect, useRef, useState } from 'react';

const sectionPad = 'px-4 sm:px-6 lg:px-10 xl:px-14';

const values = [
  {
    key: 'creativity',
    title: 'Creativity',
    body: 'Bold ideas and distinctive design that help your brand cut through noise and stay memorable.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    key: 'integrity',
    title: 'Integrity',
    body: 'Honest timelines, clear communication, and work we stand behind—every step of the way.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    key: 'collaboration',
    title: 'Collaboration',
    body: 'We treat your goals as our own—listening closely, iterating together, and sharing ownership of outcomes.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    key: 'excellence',
    title: 'Excellence',
    body: 'High standards in craft and strategy—refining details until deliverables are ready for the real world.',
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
];

export default function CoreValues() {
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
      { threshold: 0.1, rootMargin: '0px 0px -28px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="core-values"
      className={`relative scroll-mt-24 border-t border-slate-200/90 bg-gradient-to-b from-slate-50/95 to-white py-10 dark:border-white/10 dark:from-brand-950 dark:to-[#050d18] sm:py-12 lg:py-14 ${sectionPad}`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-48 w-48 rounded-full bg-secondary/10 blur-3xl dark:bg-primary/10" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/90 px-4 py-1.5 shadow-sm dark:border-secondary/25 dark:bg-brand-900/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-primary to-secondary" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-secondary">Core values</span>
          </div>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            What guides{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">every project</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            Principles we live by when we strategize, design, and deliver—so your brand gets work that lasts.
          </p>
        </header>

        <ul
          ref={gridRef}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-5"
        >
          {values.map((item, index) => (
            <li key={item.key}>
              <article
                style={cardsInView ? { animationDelay: `${index * 0.08}s` } : undefined}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm ring-1 ring-slate-200/50 transition-all duration-300 will-change-transform motion-reduce:will-change-auto hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10 dark:border-white/10 dark:bg-brand-900/45 dark:ring-white/5 dark:hover:border-secondary/35 dark:hover:shadow-secondary/10 sm:p-6 ${
                  cardsInView
                    ? 'motion-safe:animate-about-card-in motion-reduce:opacity-100 motion-reduce:translate-y-0'
                    : 'opacity-0 translate-y-5 motion-reduce:opacity-100 motion-reduce:translate-y-0'
                }`}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary via-brand-500 to-secondary transition-transform duration-500 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/12 to-secondary/20 text-primary shadow-inner ring-1 ring-primary/10 transition-transform duration-300 ease-out motion-safe:group-hover:scale-110 motion-safe:group-hover:rotate-3 dark:from-primary/25 dark:to-secondary/25 dark:text-secondary dark:ring-white/10">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-tight text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-slate-200 sm:text-base">
                  {item.body}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
