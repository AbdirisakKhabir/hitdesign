import About from './About';
import Performance from './Performance';

const logoMark = `${process.env.PUBLIC_URL}/branding/logo-mark.png`;
const techBase = `${process.env.PUBLIC_URL}/tech`;

const sectionPad = 'px-4 sm:px-6 lg:px-10 xl:px-14';

/** Simple Icons (MIT) — https://simpleicons.org — assets in /public/tech */
const cornerTechStack = [
  { id: 'premiere', file: 'adobe-premiere-pro.svg', label: 'Adobe Premiere Pro', corner: 'tl' },
  { id: 'illustrator', file: 'adobe-illustrator.svg', label: 'Adobe Illustrator', corner: 'tr' },
  { id: 'photoshop', file: 'adobe-photoshop.svg', label: 'Adobe Photoshop', corner: 'bl' },
  { id: 'indesign', file: 'adobe-indesign.svg', label: 'Adobe InDesign', corner: 'br' },
];

const cornerPositionClass = {
  tl: 'left-0 top-0 -translate-x-1/2 -translate-y-1/2',
  tr: 'right-0 top-0 translate-x-1/2 -translate-y-1/2',
  bl: 'left-0 bottom-0 -translate-x-1/2 translate-y-1/2',
  br: 'right-0 bottom-0 translate-x-1/2 translate-y-1/2',
};

export default function Hero() {
  return (
    <section
      className={`relative overflow-x-hidden bg-slate-100 pt-[5.25rem] dark:bg-brand-950 sm:pt-[6.25rem] ${sectionPad}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-hero-mesh-light dark:hidden"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 hidden bg-hero-mesh dark:block" aria-hidden />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] dark:opacity-[0.28]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230076d6' fill-opacity='0.07'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-primary/12 blur-3xl dark:bg-primary/20" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl dark:bg-secondary/12" />

      {/* Fills viewport below navbar; About stays outside this height — svh on small viewports helps mobile browser UI; dvh from sm+ */}
      <div className="relative flex min-h-[calc(100svh-5.25rem)] flex-col justify-center sm:min-h-[calc(100dvh-6.25rem)]">
        <div className="relative mx-auto flex w-full min-w-0 max-w-7xl flex-col gap-10 pb-12 pt-4 sm:gap-12 sm:pb-14 sm:pt-6 lg:flex-row lg:items-center lg:gap-14 lg:pb-16 lg:pt-2">
        {/* Copy — min-w-0 avoids flex overflow on narrow / zoomed / wide-mobile viewports */}
        <div className="min-w-0 flex-1 text-center lg:max-w-2xl lg:text-left">
          <h1 className="text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-4xl sm:leading-[1.08] lg:text-[2.65rem] lg:leading-[1.06] xl:text-[3rem] xl:leading-[1.05] dark:text-white">
            Transforming ideas into{' '}
            <span className="bg-gradient-to-r from-primary via-brand-600 to-secondary bg-clip-text text-transparent dark:from-secondary dark:via-white dark:to-brand-200">
              powerful digital brands
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0 dark:text-slate-400">
          We help businesses grow through creative design, strategic digital marketing, and innovative branding solutions.
          </p>
          <div className="mt-7 flex justify-start">
            <a
              href="/#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-300/80 bg-white/90 px-7 py-3.5 text-base font-semibold text-slate-800 shadow-sm backdrop-blur transition hover:border-primary/40 hover:bg-white dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:border-secondary/40 dark:hover:bg-white/10"
            >
              Explore services
            </a>
          </div>
          <dl className="mt-9 grid grid-cols-3 gap-4 border-t border-slate-200/90 pt-6 sm:gap-6 sm:pt-7 lg:max-w-lg dark:border-white/10">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">Focus</dt>
              <dd className="mt-1 text-lg font-bold text-slate-900 sm:text-xl dark:text-white">Strategy</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">Craft</dt>
              <dd className="mt-1 text-lg font-bold text-slate-900 sm:text-xl dark:text-white">Design</dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-500">Growth</dt>
              <dd className="mt-1 text-lg font-bold text-slate-900 sm:text-xl dark:text-white">Results</dd>
            </div>
          </dl>
        </div>

        {/* Glass card + tech stack badges — max-w never exceeds parent (works on all widths, including “desktop” mode on mobile) */}
        <div className="relative mx-auto w-full min-w-0 max-w-[min(100%,360px)] shrink-0 sm:max-w-[min(100%,400px)] lg:max-w-[min(100%,440px)]">
            <div className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-primary/25 via-transparent to-secondary/20 opacity-80 blur-xl dark:from-primary/20 dark:to-secondary/15" aria-hidden />
            {cornerTechStack.map((tool) => (
              <div
                key={tool.id}
                className={`absolute z-20 ${cornerPositionClass[tool.corner]}`}
                title={tool.label}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white p-2 shadow-lg shadow-slate-900/10 ring-2 ring-white dark:border-white/10 dark:bg-brand-900 dark:ring-brand-950 sm:h-12 sm:w-12 sm:p-2.5">
                  <img
                    src={`${techBase}/${tool.file}`}
                    alt=""
                    width={32}
                    height={32}
                    className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                    loading="lazy"
                    decoding="async"
                    aria-hidden
                  />
                </span>
              </div>
            ))}
            <p className="sr-only">Design tools: {cornerTechStack.map((t) => t.label).join(', ')}</p>
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/90 p-6 shadow-xl shadow-slate-900/10 ring-1 ring-slate-200/80 backdrop-blur-md dark:border-white/10 dark:bg-brand-900/70 dark:shadow-black/40 dark:ring-white/10 sm:p-7">
              <div className="flex items-start gap-3">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-100 dark:bg-white sm:h-[4.5rem] sm:w-[4.5rem]">
                  <img src={logoMark} alt="" className="h-full w-full object-cover" width={72} height={72} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-base font-semibold text-slate-900 dark:text-white">Hitdesigns</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Campaign-ready creative &amp; strategy</p>
                </div>
                <span className="shrink-0 rounded-full bg-primary/12 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-primary dark:bg-secondary/15 dark:text-secondary">
                  Live
                </span>
              </div>
              <div className="mt-5 space-y-3">
                {[78, 92, 68].map((w, i) => (
                  <div key={i} className="h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-secondary to-primary"
                      style={{ width: `${w}%` }}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">Engagement &amp; reach — illustrative snapshot</p>
              <div className="mt-5 rounded-2xl border border-primary/15 bg-gradient-to-r from-primary/95 via-brand-600 to-secondary/95 px-4 py-3 text-center dark:border-secondary/20 dark:from-secondary/80 dark:via-primary/90 dark:to-brand-700/90">
                <p className="text-xs font-medium tracking-wide text-white/95 sm:text-sm">
                  Creativity · Innovation · Quality · Client focus
                </p>
              </div>
            </div>
        </div>
        </div>
      </div>

      <About />

      <Performance />

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-100 to-transparent dark:from-brand-950" />
    </section>
  );
}
