const sectionPad = 'px-4 sm:px-6 lg:px-10 xl:px-14';

const imgBase = `${process.env.PUBLIC_URL}/testimonials`;

const testimonials = [
  {
    id: 't1',
    image: 'testimonial-01.jpg',
    quote:
      'HitDesigns has greatly improved our business visibility on social media. Their Social Media Marketing services helped us reach a wider audience and gain many new customers. It is truly a reliable service with clear, visible results.',
    name: 'Hasan Abdi Omar',
    role: 'Principal of Hope Academy',
    lang: 'en',
  },
  {
    id: 't2',
    image: 'testimonial-02.jpg',
    quote:
      'HitDesigns waa laf-dhabarta kobaca Xoogsade Money Exchange ee baraha bulshada. Hal-abuurkooda iyo fahamkooda qotoda dheer ee suuq-geynta ayaa noo suurtageliyay inaan si degdeg ah u gaadhno macaamiil cusub, isla markaana aan kor u qaadno sumcadda iyo kalsoonida ganacsigeenna.',
    name: 'Abdiqani Mohamed Muse',
    role: 'Owner of Xoogsade Money Exchange',
    lang: 'so',
  },
  {
    id: 't3',
    image: 'testimonial-03.jpg',
    quote:
      'HitDesigns waxay si weyn u xoojisay kobaca ganacsigeenna dhanka baraha bulshada (social media), taas oo noo sahashay inaan si wax ku ool ah ugu gaadhsiino bulshada adeegyadeenna iyo hawlaha ay shirkaddu qabato.',
    name: 'Jimcale Ali Warsame',
    role: 'General director of Dalsan Group company',
    lang: 'so',
  },
  {
    id: 't4',
    image: 'testimonial-04.jpg',
    quote:
      'Magacaygu waa Saleeban Siciid Jaamac, waxaan ahay mulkiilaha Sariflaha Xaaji Sallo Money Exchange. HitDesigns waxay si weyn iiga caawisay gaadhista macaamiil cusub si fudud oo hufan. Waxay bixiyaan adeeg la hubo oo lagu kalsoonaan karo, taas oo ii suurta gelisay in ganacsigaygu noqdo mid xooggan oo si muuqata u kobca.',
    name: 'Saleban Saed Jama',
    role: 'Owner of Xaaji Sallo Money Exchange',
    lang: 'so',
  },
  {
    id: 't5',
    image: 'testimonial-05.jpg',
    quote:
      'Anagoo ah Taaj Pre-University College - Burao, waxaanu aad ugu faraxsanahay inaan ka mid noqono macaamiisha HitDesigns. HitDesigns waxay si weyn kor ugu qaadday sumcaddayada, isla markaana waxay naga caawisay inaan helno arday tiro badan.',
    name: 'Mohamed Farah Mohamed',
    role: 'Principal of Taaj Pre-University College',
    lang: 'so',
  },
  {
    id: 't6',
    image: 'testimonial-06.jpg',
    quote:
      'As the General Manager of Ashkir Money Exchange, I would like to express my sincere gratitude to Hitdesigns, the company that provides modern digital marketing services, for the excellent work they have done in serving us and promoting our exchange to the community.',
    name: 'Sakariye Farah Ali',
    role: 'Manager of Ashkir Money Exchange',
    lang: 'en',
  },
];

function QuoteIcon() {
  return (
    <svg className="h-6 w-6 shrink-0 text-primary/30 dark:text-secondary/35" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className={`scroll-mt-24 border-t border-slate-200/90 bg-gradient-to-b from-white to-slate-50/90 py-10 dark:border-white/10 dark:from-brand-950 dark:to-[#050d18] sm:py-12 lg:py-14 ${sectionPad}`}
    >
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-secondary">Testimonials</p>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
            What our clients say
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400 sm:text-base">
            Feedback from schools, exchanges, and partners we&apos;ve worked with—pulled from client submissions.
          </p>
        </header>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:mt-10 lg:grid-cols-3 lg:gap-5">
          {testimonials.map((item) => (
            <li key={item.id}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-200/40 dark:border-white/10 dark:bg-brand-900/40 dark:ring-white/5">
                <div className="flex justify-center px-3 pt-4 pb-1 sm:pt-5 sm:pb-2">
                  <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full bg-slate-100 shadow-md ring-2 ring-slate-200/90 ring-offset-2 ring-offset-white dark:bg-brand-950 dark:ring-white/15 dark:ring-offset-brand-900/50 sm:h-32 sm:w-32">
                    <img
                      src={`${imgBase}/${item.image}`}
                      alt={`${item.name}, ${item.role}`}
                      width={320}
                      height={320}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="flex gap-3">
                    <QuoteIcon />
                    <blockquote
                      className="flex-1 text-base leading-relaxed text-slate-700 dark:text-slate-300"
                      lang={item.lang === 'so' ? 'so' : 'en'}
                    >
                      <p>{item.quote}</p>
                    </blockquote>
                  </div>
                  <footer className="mt-4 border-t border-slate-200/80 pt-3 dark:border-white/10">
                    <p className="font-semibold text-slate-900 dark:text-white">{item.name}</p>
                    <p className="mt-1 text-sm text-primary dark:text-secondary">{item.role}</p>
                  </footer>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
