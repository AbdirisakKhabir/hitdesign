const sectionPad = 'px-4 sm:px-6 lg:px-10 xl:px-14';

const teamPhoto = (file) => `${process.env.PUBLIC_URL}/team/${file}`;

const members = [
  {
    key: 'daud',
    photo: 'daud.png',
    name: 'Daud Abdikarim Jama',
    role: 'Co-Founder & CEO',
    description:
      'Sets strategic direction and partnerships, ensuring every client engagement aligns with long-term brand growth.',
  },
  {
    key: 'hudeifi',
    photo: 'hudeifi.png',
    name: 'Hudeifi Adid Bile',
    role: 'General Manager',
    description:
      'Oversees day-to-day operations and delivery, keeping projects on schedule and teams aligned across departments.',
  },
  {
    key: 'abdilahi',
    photo: 'abdalla.png',
    name: 'Abdilahi Ali Mohamed',
    role: 'HR Manager',
    description:
      'Builds a strong team culture and talent pipeline so creative and marketing work is supported by the right people.',
  },
  {
    key: 'farah',
    photo: 'farah.png',
    name: 'Farah Jama Mohamed',
    role: 'Brand Marketer',
    description:
      'Shapes messaging and go-to-market narratives that connect brands with audiences across channels.',
  },
  {
    key: 'roda',
    photo: 'roda.png',
    name: 'Roda Saed Ahmed',
    role: 'Admin & Finance',
    description:
      'Keeps finances and administration clear and predictable so creatives can focus on client outcomes.',
  },
  {
    key: 'suhaib',
    photo: 'suhaib.png',
    name: 'Suhaib Saed Mohamed',
    role: 'Co-Founder & Graphic Designer',
    description:
      'Turns concepts into striking visuals, from identity systems to campaign assets, with attention to detail.',
  },
  {
    key: 'mohamed',
    photo: 'mohamed.png',
    name: 'Mohamed Ismail Mohamud',
    role: 'Videographer',
    description:
      'Produces video and motion content that tells stories with clarity, pace, and brand consistency.',
  },
  {
    key: 'hafsa',
    photo: 'hafsa.png',
    name: 'Hafsa Abdilahi Ali',
    role: 'Content Creator',
    description:
      'Creates and shapes content across channels so brand voice stays consistent, engaging, and on-strategy.',
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className={`relative scroll-mt-24 border-t border-slate-200/90 bg-gradient-to-b from-slate-50/90 to-white py-10 dark:border-white/10 dark:from-brand-950 dark:to-[#050d18] sm:py-12 lg:py-14 ${sectionPad}`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-secondary/10" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/90 px-4 py-1.5 shadow-sm dark:border-secondary/25 dark:bg-brand-900/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-primary to-secondary" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-secondary">Our team</span>
          </div>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            The Team Behind{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Our Success</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            Strategists, creatives, and operators working together to grow brands with clarity and care.
          </p>
        </header>

        <ul className="mt-6 grid max-w-5xl grid-cols-2 gap-2.5 sm:mx-auto sm:gap-3 md:grid-cols-3 lg:mt-8 lg:max-w-none lg:grid-cols-4 lg:gap-3">
          {members.map((member) => (
            <li key={member.key}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-200/50 transition duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md hover:shadow-primary/10 dark:border-white/10 dark:bg-brand-900/45 dark:ring-white/5 dark:hover:border-secondary/35 dark:hover:shadow-secondary/10">
                <div className="flex justify-center bg-slate-100 px-2 pt-3 pb-1 dark:bg-brand-950 sm:pt-4 sm:pb-2">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-slate-200/90 ring-offset-2 ring-offset-white dark:ring-white/15 dark:ring-offset-brand-900/80 sm:h-24 sm:w-24">
                    <img
                      src={teamPhoto(member.photo)}
                      alt={member.name}
                      width={160}
                      height={160}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent opacity-70 dark:from-brand-950/70"
                      aria-hidden
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-3 sm:p-3.5">
                  <h3 className="text-sm font-bold leading-snug tracking-tight text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="mt-0.5 text-xs font-semibold text-primary dark:text-secondary">{member.role}</p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400 sm:text-[13px]">{member.description}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
