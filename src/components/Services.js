import { useEffect, useRef, useState } from 'react';

const sectionPad = 'px-4 sm:px-6 lg:px-10 xl:px-14';

const services = [
  {
    key: 'smm',
    title: 'Social media marketing',
    description:
      'Strategic campaigns across social platforms to grow visibility, engagement, and conversions for your brand.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.018c4.25.001 6.5 5.75 3.5 9.122M7 6c0-1.657 1.343-3 3-3s3 1.343 3 3v.5"
        />
      </svg>
    ),
  },
  {
    key: 'smgmt',
    title: 'Social media management',
    description:
      'Content creation, scheduling, community interaction, and steady growth of your social presence.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
  },
  {
    key: 'brand',
    title: 'Graphic design & branding',
    description:
      'Logos, brand guidelines, and marketing materials that express who you are with clarity and consistency.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    key: 'mkt',
    title: 'Marketing design',
    description:
      'Posters, flyers, banners, and digital creatives tailored for launches, promos, and campaigns.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    key: 'video',
    title: 'Video marketing',
    description:
      'Promotional and social-first video that tells your story, holds attention, and supports your message.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    key: 'event',
    title: 'Event branding design',
    description:
      'Cohesive visuals for events: banners, stages, backdrops, and collateral that feel on-brand on site.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
];

export default function Services() {
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
      id="services"
      className={`relative scroll-mt-24 border-t border-slate-200/90 bg-gradient-to-b from-slate-50/80 to-white py-10 dark:border-white/10 dark:from-brand-950 dark:to-[#050d18] sm:py-12 lg:py-14 ${sectionPad}`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl dark:bg-primary/15" />
        <div className="absolute -right-24 bottom-40 h-64 w-64 rounded-full bg-secondary/10 blur-3xl dark:bg-secondary/10" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/90 px-4 py-1.5 shadow-sm dark:border-secondary/25 dark:bg-brand-900/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-primary to-secondary" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-secondary">
              Our services
            </span>
          </div>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Everything your brand needs to{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">stand out</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            From social and content to identity and events, we deliver cohesive creative work aligned with your goals.
          </p>
        </header>

        <ul
          ref={gridRef}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5"
        >
          {services.map((item, index) => (
            <li key={item.key}>
              <article
                style={cardsInView ? { animationDelay: `${index * 0.075}s` } : undefined}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-sm ring-1 ring-slate-200/50 transition-all duration-300 will-change-transform motion-reduce:will-change-auto hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10 dark:border-white/10 dark:bg-brand-900/50 dark:ring-white/5 dark:hover:border-secondary/30 dark:hover:shadow-secondary/10 ${
                  cardsInView
                    ? 'motion-safe:animate-about-card-in motion-reduce:opacity-100 motion-reduce:translate-y-0'
                    : 'opacity-0 translate-y-5 motion-reduce:opacity-100 motion-reduce:translate-y-0'
                }`}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary via-brand-500 to-secondary transition-transform duration-500 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/35 transition-transform duration-300 ease-out motion-safe:group-hover:scale-110 dark:bg-primary dark:shadow-primary/40">
                  {item.icon}
                </div>
                <h3 className="mt-5 text-base font-bold tracking-tight text-slate-900 sm:text-lg dark:text-white">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-800 dark:text-slate-400 dark:group-hover:text-slate-200 sm:text-base">
                  {item.description}
                </p>
                <a
                  href="/#contact"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-primary/90 transition-colors hover:text-primary group-hover:text-primary dark:text-secondary/90 dark:hover:text-secondary dark:group-hover:text-secondary"
                >
                  Get started
                  <svg
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
