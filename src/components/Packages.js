const sectionPad = 'px-4 sm:px-6 lg:px-10 xl:px-14';

/** Digits only — same number as Contact / Footer (+252 65 4888780) */
const WHATSAPP_E164 = '252654888780';

function whatsappOrderUrl(packageTitle, isCustom) {
  const text = isCustom
    ? `Hi Hitdesigns, I'd like to discuss a custom package and pricing.`
    : `Hi Hitdesigns, I'd like to order the "${packageTitle}" package.`;
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(text)}`;
}

const packages = [
  {
    id: 'essential',
    title: 'Essential',
    price: '$199',
    priceNote: 'per project',
    description: 'A focused start for brands that need core creative support.',
    features: [
      'Social media setup & 2 campaign graphics',
      'Logo refresh or simple brand mark',
      'Up to 3 marketing design pieces (flyers / posts)',
      '1 round of revisions',
    ],
    highlighted: false,
    isCustom: false,
  },
  {
    id: 'professional',
    title: 'Professional',
    price: '$499',
    priceNote: 'per project',
    description: 'Our most popular tier for growing businesses and campaigns.',
    features: [
      'Social marketing plan + 6 creative assets',
      'Graphic design & brand guidelines (light)',
      'Marketing design pack (posters, banners, digital)',
      'Video marketing — 1 short promo or reel cut',
      '2 rounds of revisions',
    ],
    highlighted: true,
    isCustom: false,
  },
  {
    id: 'complete',
    title: 'Complete',
    price: '$999',
    priceNote: 'per project',
    description: 'Full creative coverage for launches and sustained visibility.',
    features: [
      'Social media marketing + management (1 channel)',
      'Full branding suite (logo, palette, typography)',
      'Marketing & event-ready design bundle',
      'Video marketing — 2 deliverables',
      'Priority turnaround & 3 revision rounds',
    ],
    highlighted: false,
    isCustom: false,
  },
  {
    id: 'custom',
    title: 'Custom package',
    price: 'Negotiation',
    priceNote: 'tailored scope',
    description: 'Pick only what you need—scope and pricing agreed together.',
    features: [
      'Mix services: SMM, management, branding, design, video, events',
      'Flexible timelines and deliverables',
      'Dedicated consultation before we quote',
      'Ideal for retainers, agencies, and large campaigns',
    ],
    highlighted: false,
    isCustom: true,
  },
];

export default function Packages() {
  return (
    <section
      id="packages"
      className={`scroll-mt-24 border-t border-slate-200/90 bg-white py-9 dark:border-white/10 dark:bg-[#050d18] sm:py-11 lg:py-12 ${sectionPad}`}
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-secondary">Packages</p>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
            Pricing &amp; services
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            Clear tiers for common needs—plus a custom option when your scope is unique. Tap Order now to chat on WhatsApp.
          </p>
        </header>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-5 xl:grid-cols-4">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`flex flex-col rounded-2xl border p-5 shadow-sm transition ${
                pkg.highlighted
                  ? 'border-primary/40 bg-gradient-to-b from-primary/[0.06] to-transparent ring-2 ring-primary/25 dark:border-secondary/35 dark:from-secondary/10 dark:ring-secondary/25'
                  : 'border-slate-200/90 bg-slate-50/80 dark:border-white/10 dark:bg-brand-900/35'
              }`}
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{pkg.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">{pkg.description}</p>

              <div className="mt-4 border-t border-slate-200/80 pt-4 dark:border-white/10">
                <p className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                  <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">{pkg.price}</span>
                  {pkg.priceNote && (
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-500">{pkg.priceNote}</span>
                  )}
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
                href={whatsappOrderUrl(pkg.title, pkg.isCustom)}
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
