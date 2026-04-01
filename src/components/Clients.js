const sectionPad = 'px-4 sm:px-6 lg:px-10 xl:px-14';

const publicClients = `${process.env.PUBLIC_URL}/clients`;

/** Logos in public/clients/ - alt text for accessibility */
const clientsRowA = [
  {
    id: 'c1',
    file: 'client-01.png',
    alt: 'Dalsan Farming and Poultry logo',
  },
  {
    id: 'c2',
    file: 'client-02.png',
    alt: 'Client logo, blue circular AE monogram',
  },
  {
    id: 'c3',
    file: 'client-03.png',
    alt: 'Burco Rehabilitation Physiotherapy logo',
  },
  {
    id: 'c4',
    file: 'client-04.png',
    alt: 'Dalsan Group Technical Service Company logo',
  },
  {
    id: 'c5',
    file: 'client-05.png',
    alt: 'Dalsan Engineering and Real Estate logo',
  },
];

const clientsRowB = [
  {
    id: 'c6',
    file: 'client-06.png',
    alt: 'Hope Academy logo',
  },
  {
    id: 'c7',
    file: 'client-07.png',
    alt: 'Taaj Pre-University College logo',
  },
  {
    id: 'c8',
    file: 'client-08.png',
    alt: 'Client logo, stylized letter mark',
  },
  {
    id: 'c9',
    file: 'client-09.png',
    alt: 'Ogaansho Research and Consultancy Center logo',
  },
  {
    id: 'c10',
    file: 'client-10.png',
    alt: 'Client logo, geometric mark',
  },
];

function LogoCard({ logo }) {
  return (
    <div className="flex h-24 min-w-[10.5rem] shrink-0 items-center justify-center rounded-xl border border-slate-200/80 bg-white/95 px-4 py-3 shadow-sm ring-1 ring-slate-200/35 backdrop-blur-sm dark:border-white/10 dark:bg-brand-900/45 dark:ring-white/5 sm:h-28 sm:min-w-[12rem]">
      <img
        src={`${publicClients}/${logo.file}`}
        alt={logo.alt}
        width={200}
        height={120}
        loading="lazy"
        decoding="async"
        className="max-h-[4.5rem] w-auto max-w-[min(100%,10rem)] object-contain object-center drop-shadow-sm dark:drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] sm:max-h-20"
      />
    </div>
  );
}

function MarqueeRow({ items, reverse }) {
  const loop = [...items, ...items];
  return (
    <div className="relative flex overflow-hidden py-3">
      <div
        className={`flex w-max gap-5 sm:gap-6 md:gap-8 motion-reduce:animate-none ${
          reverse ? 'animate-marquee-rev' : 'animate-marquee'
        }`}
      >
        {loop.map((c, i) => (
          <LogoCard key={`${c.id}-${i}`} logo={c} />
        ))}
      </div>
    </div>
  );
}

export default function Clients() {
  return (
    <section
      id="clients"
      className={`relative scroll-mt-24 border-t border-slate-200/90 bg-gradient-to-b from-white to-slate-50/95 py-10 dark:border-white/10 dark:from-brand-950 dark:to-[#060f1c] sm:py-12 lg:py-14 ${sectionPad}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent dark:via-secondary/25" />

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/90 px-4 py-1.5 shadow-sm dark:border-secondary/25 dark:bg-brand-900/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-primary to-secondary" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-secondary">
              Our clients
            </span>
          </div>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Brands that{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">trust us</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            A snapshot of organizations we&apos;ve supported across campaigns, design, and digital growth.
          </p>
        </header>

        <div className="relative mt-8 lg:mt-10">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent dark:from-brand-950 sm:w-20"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent dark:from-brand-950 sm:w-20"
            aria-hidden
          />
          <div className="rounded-2xl border border-slate-200/60 bg-slate-50/40 py-1 dark:border-white/5 dark:bg-brand-900/20">
            <MarqueeRow items={clientsRowA} reverse={false} />
            <div className="mx-auto h-px max-w-[90%] bg-gradient-to-r from-transparent via-slate-200/80 to-transparent dark:via-white/10" />
            <MarqueeRow items={clientsRowB} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
