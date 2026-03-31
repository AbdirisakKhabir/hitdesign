import { useEffect, useRef, useState } from 'react';

const cards = [
  {
    key: 'vision',
    num: '01',
    label: 'Vision',
    body:
      'To become a leading creative digital agency that empowers businesses through design and strategic marketing.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    ),
    base:
      'border-brand-200/70 bg-gradient-to-br from-white via-brand-50/90 to-brand-100/50 shadow-md shadow-primary/[0.07] ring-1 ring-brand-100/80 dark:border-primary/25 dark:bg-gradient-to-br dark:from-brand-900/90 dark:via-brand-950/80 dark:to-[#0a1628] dark:shadow-lg dark:shadow-primary/15 dark:ring-white/5',
    focus:
      'focus-visible:border-primary focus-visible:bg-gradient-to-br focus-visible:from-brand-50 focus-visible:via-white focus-visible:to-brand-100 focus-visible:shadow-xl focus-visible:shadow-primary/25 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:border-secondary/50 dark:focus-visible:from-brand-800 dark:focus-visible:via-brand-900 dark:focus-visible:to-[#0d2844] dark:focus-visible:shadow-secondary/20 dark:focus-visible:ring-secondary/30 dark:focus-visible:ring-offset-brand-950',
    accent: 'from-primary/80 to-primary',
  },
  {
    key: 'mission',
    num: '02',
    label: 'Mission',
    body:
      'Help brands reach their full potential with creative design and digital strategies that deliver real results.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    base:
      'border-secondary/40 bg-gradient-to-br from-white via-sky-50/80 to-secondary/15 shadow-md shadow-secondary/[0.12] ring-1 ring-sky-100/90 dark:border-secondary/30 dark:bg-gradient-to-br dark:from-brand-900/85 dark:via-[#0c1e35] dark:to-brand-950 dark:shadow-lg dark:shadow-secondary/10 dark:ring-secondary/10',
    focus:
      'focus-visible:border-secondary focus-visible:bg-gradient-to-br focus-visible:from-sky-50 focus-visible:via-white focus-visible:to-secondary/25 focus-visible:shadow-xl focus-visible:shadow-secondary/30 focus-visible:ring-2 focus-visible:ring-secondary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:border-secondary/60 dark:focus-visible:from-[#0f2847] dark:focus-visible:via-brand-900 dark:focus-visible:to-brand-950 dark:focus-visible:shadow-primary/15 dark:focus-visible:ring-primary/35 dark:focus-visible:ring-offset-brand-950',
    accent: 'from-secondary to-sky-400',
  },
  {
    key: 'what',
    num: '03',
    label: 'What we do',
    body:
      'Campaigns, visual identity, content, and social presence—built to engage audiences and support your goals.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    base:
      'border-slate-200/80 bg-gradient-to-br from-slate-50/95 via-white to-brand-50/40 shadow-md shadow-slate-400/10 ring-1 ring-slate-200/60 dark:border-white/10 dark:bg-gradient-to-br dark:from-brand-800/40 dark:via-brand-900/70 dark:to-brand-950 dark:shadow-lg dark:shadow-black/20 dark:ring-white/10',
    focus:
      'focus-visible:border-primary/60 focus-visible:bg-gradient-to-br focus-visible:from-white focus-visible:via-brand-50/80 focus-visible:to-secondary/20 focus-visible:shadow-xl focus-visible:shadow-primary/20 focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:border-primary/40 dark:focus-visible:from-brand-800 dark:focus-visible:via-brand-900 dark:focus-visible:to-[#071222] dark:focus-visible:shadow-primary/25 dark:focus-visible:ring-primary/25 dark:focus-visible:ring-offset-brand-950',
    accent: 'from-primary via-sky-500 to-secondary',
  },
];

export default function About() {
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
    <div
      id="about"
      className="relative z-10 mx-auto w-full max-w-7xl border-t border-slate-200/90 pb-12 pt-8 sm:pb-14 sm:pt-10 lg:pb-16 lg:pt-12 dark:border-white/10"
    >
      <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/90 bg-gradient-to-br from-white via-slate-50/95 to-brand-50/40 shadow-2xl shadow-slate-400/15 ring-1 ring-slate-200/50 backdrop-blur-sm dark:border-white/10 dark:from-brand-900/60 dark:via-brand-950/90 dark:to-[#030a14] dark:shadow-black/50 dark:ring-white/10">
        {/* Decorative frame */}
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(0,118,214,0.04)_0%,transparent_45%,rgba(54,169,250,0.06)_100%)] dark:bg-[linear-gradient(135deg,rgba(0,118,214,0.08)_0%,transparent_50%,rgba(54,169,250,0.05)_100%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent dark:via-secondary/30" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-secondary/25 blur-3xl dark:bg-primary/25" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/15 blur-3xl dark:bg-secondary/15" />

        <div className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-3.5 py-1.5 shadow-sm dark:border-secondary/25 dark:bg-brand-900/60">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-primary to-secondary" aria-hidden />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-secondary">About us</span>
            </div>
            <h2 className="mt-4 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-2xl font-extrabold tracking-tight text-transparent sm:text-3xl lg:text-[2rem] lg:leading-tight dark:from-white dark:via-slate-100 dark:to-white">
              Creative strategy for the digital world
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-balance text-lg leading-relaxed text-slate-600 lg:mx-0 dark:text-slate-300">
              Hitdesigns is a creative digital agency focused on helping businesses build strong brands and grow online.
              We specialize in digital marketing, graphic design, branding, and social media management.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-balance text-base leading-relaxed text-slate-500 lg:mx-0 dark:text-slate-400">
              Our mission is to transform ideas into powerful digital brands through creativity, strategy, and innovative
              solutions—so you can reach the right people with clarity and impact.
            </p>
          </div>

          {/* Cards */}
          <dl
            ref={gridRef}
            className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-6"
          >
            {cards.map((card, index) => (
              <div
                key={card.key}
                tabIndex={0}
                role="article"
                aria-label={card.label}
                style={
                  cardsInView
                    ? { animationDelay: `${index * 0.075}s` }
                    : undefined
                }
                className={`group relative overflow-hidden rounded-2xl border p-6 outline-none transition-all duration-300 ease-out will-change-transform motion-reduce:will-change-auto hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,118,214,0.15)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,118,214,0.25)] sm:p-7 lg:p-8 ${card.base} ${card.focus} focus-visible:-translate-y-1 focus-visible:outline-none ${
                  cardsInView
                    ? 'motion-safe:animate-about-card-in motion-reduce:opacity-100 motion-reduce:translate-y-0'
                    : 'opacity-0 translate-y-5 motion-reduce:opacity-100 motion-reduce:translate-y-0'
                }`}
              >
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 ${card.accent}`}
                  aria-hidden
                />
                <div className="flex items-start justify-between gap-4">
                  <span
                    className="font-mono text-[11px] font-bold tabular-nums text-slate-400 transition-transform duration-300 motion-safe:group-hover:translate-x-0.5 dark:text-slate-500"
                    aria-hidden
                  >
                    {card.num}
                  </span>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/15 text-primary shadow-inner ring-1 ring-white/60 transition-transform duration-300 ease-out motion-safe:group-hover:scale-110 motion-safe:group-hover:rotate-3 motion-safe:group-focus-visible:scale-110 dark:from-primary/20 dark:to-secondary/20 dark:text-secondary dark:ring-white/10">
                    {card.icon}
                  </div>
                </div>
                <dt className="relative mt-4 text-base font-bold uppercase tracking-[0.12em] text-primary dark:text-secondary">
                  {card.label}
                </dt>
                <dd className="relative mt-3 m-0 text-base leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-800 group-focus-visible:text-slate-800 sm:text-lg dark:text-slate-300 dark:group-hover:text-slate-100 dark:group-focus-visible:text-white">
                  {card.stat ? (
                    <p className="mb-3 text-3xl font-extrabold tabular-nums tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                      {card.stat}
                    </p>
                  ) : null}
                  {card.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
