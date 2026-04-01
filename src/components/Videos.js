const sectionPad = 'px-4 sm:px-6 lg:px-10 xl:px-14';

/** Public Facebook Reels — embedded via Facebook’s video plugin */
const facebookReels = [
  'https://www.facebook.com/reel/1479503777139584',
  'https://www.facebook.com/reel/1646645163197855',
  'https://www.facebook.com/reel/1290132326347033',
];

function reelEmbedSrc(reelUrl) {
  const href = encodeURIComponent(reelUrl);
  return `https://www.facebook.com/plugins/video.php?href=${href}&show_text=false&width=500&height=889&t=0`;
}

export default function Videos() {
  return (
    <section
      id="videos"
      className={`relative scroll-mt-24 border-t border-slate-200/90 bg-gradient-to-b from-slate-50/95 to-white py-10 dark:border-white/10 dark:from-[#060f1c] dark:to-brand-950 sm:py-12 lg:py-14 ${sectionPad}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent dark:via-secondary/25" />

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/90 px-4 py-1.5 shadow-sm dark:border-secondary/25 dark:bg-brand-900/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-primary to-secondary" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-secondary">
              Videos
            </span>
          </div>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Reels{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">in motion</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            Recent social reels — tap play to watch on Facebook.
          </p>
        </header>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
          {facebookReels.map((url, index) => (
            <div
              key={url}
              className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm ring-1 ring-slate-200/35 dark:border-white/10 dark:bg-brand-900/40 dark:ring-white/5"
            >
              <div className="relative mx-auto w-full max-w-[500px]">
                <iframe
                  title={`Facebook reel ${index + 1}`}
                  src={reelEmbedSrc(url)}
                  width="500"
                  height="889"
                  className="mx-auto block w-full max-w-[500px] border-0"
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  loading="lazy"
                />
              </div>
              <p className="border-t border-slate-200/80 px-3 py-2.5 text-center text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-primary underline-offset-2 transition hover:text-brand-700 hover:underline dark:text-secondary dark:hover:text-secondary/90"
                >
                  Open on Facebook
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
