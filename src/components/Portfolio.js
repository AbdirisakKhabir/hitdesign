import { useMemo, useState } from 'react';

const sectionPad = 'px-4 sm:px-6 lg:px-10 xl:px-14';

const tabs = [
  { id: 'all', label: 'All Work' },
  { id: 'poster', label: 'Posters' },
  { id: 'brand', label: 'Logofolio' },
  { id: 'identity', label: 'Visual Identity' },
  { id: 'video', label: 'Commercial Videos' },
];

const portfolioBase = `${process.env.PUBLIC_URL}/portfolio`;
/** Visual identity assets - public/visualIdentity/01.jpeg … 15.jpeg */
const visualIdentityBase = `${process.env.PUBLIC_URL}/visualIdentity`;

/** Brand work - files: brands/brand-01…18.jpg (from Hitdesigns 02/Brand, web-sized) */
const brandItems = [
  { id: 'b01', title: 'Client logo, mark 10', type: 'Brand / logo' },
  { id: 'b02', title: 'Client logo, mark 11', type: 'Brand / logo' },
  { id: 'b03', title: 'Client logo, mark 12', type: 'Brand / logo' },
  { id: 'b04', title: 'Client logo, mark 13', type: 'Brand / logo' },
  { id: 'b05', title: 'Client logo, mark 14', type: 'Brand / logo' },
  { id: 'b06', title: 'Client logo, mark 15', type: 'Brand / logo' },
  { id: 'b07', title: 'Client logo, mark 16', type: 'Brand / logo' },
  { id: 'b08', title: 'Client logo, mark 17', type: 'Brand / logo' },
  { id: 'b09', title: 'Client logo, mark 18', type: 'Brand / logo' },
  { id: 'b10', title: 'Client logo, mark 2', type: 'Brand / logo' },
  { id: 'b11', title: 'Client logo, mark 3', type: 'Brand / logo' },
  { id: 'b12', title: 'Client logo, mark 4', type: 'Brand / logo' },
  { id: 'b13', title: 'Client logo, mark 5', type: 'Brand / logo' },
  { id: 'b14', title: 'Client logo, mark 6', type: 'Brand / logo' },
  { id: 'b15', title: 'Client logo, mark 7', type: 'Brand / logo' },
  { id: 'b16', title: 'Client logo, mark 8', type: 'Brand / logo' },
  { id: 'b17', title: 'Client logo, mark 9', type: 'Brand / logo' },
  { id: 'b18', title: 'Logo design, custom mark', type: 'Brand / identity' },
].map((item, i) => ({
  ...item,
  category: 'brand',
  image: `${portfolioBase}/brands/brand-${String(i + 1).padStart(2, '0')}.jpg`,
}));

/** Posters - files: posters/poster-01…12.jpg (from Hitdesigns 02/Posters) */
const posterItems = [
  { id: 'p01', title: 'Hope Academy', type: 'Campaign poster' },
  { id: 'p02', title: 'Hope Academy, series', type: 'Campaign poster' },
  { id: 'p03', title: 'Hope Academy, February', type: 'Event poster' },
  { id: 'p04', title: 'Jumca Mubarak', type: 'Social / occasion' },
  { id: 'p05', title: 'Jummah Mubarak', type: 'Social / occasion' },
  { id: 'p06', title: 'Ka Sarifo', type: 'Campaign poster' },
  { id: 'p07', title: 'March, series 02', type: 'Seasonal poster' },
  { id: 'p08', title: 'March, series 03', type: 'Seasonal poster' },
  { id: 'p09', title: 'March, series 04', type: 'Seasonal poster' },
  { id: 'p10', title: 'Xoogsade, social 04', type: 'Brand poster' },
  { id: 'p11', title: 'Xoogsade, social 07', type: 'Brand poster' },
  { id: 'p12', title: 'February, series 01', type: 'Seasonal poster' },
].map((item, i) => ({
  ...item,
  category: 'poster',
  image: `${portfolioBase}/posters/poster-${String(i + 1).padStart(2, '0')}.jpg`,
}));

/** Visual identity - all files from public/visualIdentity/ (01.jpeg to 15.jpeg) */
const identityItems = Array.from({ length: 15 }, (_, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    id: `vi${n}`,
    title: `Visual identity ${n}`,
    type: 'Visual identity',
    category: 'identity',
    image: `${visualIdentityBase}/${n}.jpeg`,
  };
});

/** Commercial videos - MP4 under public/portfolio/commercial-videos/cv-01…04.mp4; optional matching JPG poster cv-01…04.jpg */
const videoItems = [
  { id: 'v01', title: 'Brand spot, launch', type: 'Commercial video' },
  { id: 'v02', title: 'Product showcase', type: 'Commercial video' },
  { id: 'v03', title: 'Social campaign cut', type: 'Commercial video' },
  { id: 'v04', title: 'Event recap', type: 'Commercial video' },
].map((item, i) => {
  const n = String(i + 1).padStart(2, '0');
  return {
    ...item,
    category: 'video',
    image: `${portfolioBase}/commercial-videos/cv-${n}.jpg`,
    videoSrc: `${portfolioBase}/commercial-videos/cv-${n}.mp4`,
  };
});

const projects = [...posterItems, ...brandItems, ...identityItems, ...videoItems];

export default function Portfolio() {
  const [active, setActive] = useState('all');

  const visible = useMemo(() => {
    if (active === 'all') return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section
      id="portfolio"
      className={`scroll-mt-24 border-t border-slate-200/90 bg-white py-8 dark:border-white/10 dark:bg-brand-950 sm:py-10 ${sectionPad}`}
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl">
          Portfolio
        </h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
          Posters, logofolio, visual identity, commercial video, and brand work produced by Hitdesigns.
        </p>

        <div
          className="mt-4 flex flex-wrap gap-1 border-b border-slate-200 dark:border-white/10"
          role="tablist"
          aria-label="Portfolio categories"
        >
          {tabs.map((t) => {
            const isOn = active === t.id;
            return (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={isOn}
                onClick={() => setActive(t.id)}
                className={`relative -mb-px px-2.5 py-1.5 text-xs font-medium transition sm:px-3 sm:py-2 sm:text-sm ${
                  isOn
                    ? 'text-primary dark:text-secondary'
                    : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {t.label}
                {isOn && (
                  <span
                    className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary dark:bg-secondary"
                    aria-hidden
                  />
                )}
              </button>
            );
          })}
        </div>

        <ul className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-3">
          {visible.map((item) => (
            <li key={item.id}>
              <figure className="overflow-hidden rounded-lg border border-slate-200/90 bg-slate-50 dark:border-white/10 dark:bg-brand-900/30">
                <div className="aspect-[4/5] overflow-hidden bg-slate-200/80 dark:bg-brand-950/50">
                  {item.videoSrc ? (
                    <video
                      className="h-full w-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                      poster={item.image}
                      aria-label={`${item.title}, ${item.type}`}
                    >
                      <source src={item.videoSrc} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      src={item.image}
                      alt={`${item.title}, ${item.type}`}
                      width={800}
                      height={1000}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  )}
                </div>
                <figcaption className="border-t border-slate-200/80 px-2.5 py-2 dark:border-white/10">
                  <p className="truncate text-sm font-medium text-slate-900 dark:text-white">{item.title}</p>
                  <p className="truncate text-xs text-slate-500 dark:text-slate-400">{item.type}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>

        {visible.length === 0 && (
          <p className="mt-6 text-base text-slate-500 dark:text-slate-400">Nothing in this category yet.</p>
        )}
      </div>
    </section>
  );
}
