import { useState } from 'react';

const sectionPad = 'px-4 sm:px-6 lg:px-10 xl:px-14';

const initial = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    window.setTimeout(() => {
      setStatus('success');
      setForm(initial);
    }, 600);
  }

  return (
    <section
      id="contact"
      className={`relative scroll-mt-24 border-t border-slate-200/90 bg-gradient-to-b from-white via-slate-50/90 to-brand-50/30 py-10 dark:border-white/10 dark:from-brand-950 dark:via-[#0a1628] dark:to-brand-950 sm:py-12 lg:py-14 ${sectionPad}`}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-secondary/15 blur-3xl dark:bg-primary/10" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <header className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/90 px-4 py-1.5 shadow-sm dark:border-secondary/25 dark:bg-brand-900/70">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-primary to-secondary" aria-hidden />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-secondary">
              Contact us
            </span>
          </div>
          <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Let&apos;s build something{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">remarkable</span>
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400 sm:text-lg">
            Tell us about your project—we&apos;ll get back to you as soon as we can.
          </p>
        </header>

        <div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-12 lg:gap-10 lg:items-start">
          {/* Contact details */}
          <aside className="lg:col-span-5">
            <div className="space-y-4">
              <a
                href="mailto:info@hitdesign.net"
                className="group flex gap-3 rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm ring-1 ring-slate-200/50 transition hover:border-primary/30 hover:shadow-md dark:border-white/10 dark:bg-brand-900/50 dark:ring-white/5 dark:hover:border-secondary/30"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/15 text-primary dark:from-primary/25 dark:to-secondary/20 dark:text-secondary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Email</p>
                  <p className="mt-1 font-medium text-slate-900 transition group-hover:text-primary dark:text-white dark:group-hover:text-secondary">
                    Info@hitdesign.net
                  </p>
                </div>
              </a>

              <a
                href="tel:+252654888780"
                className="group flex gap-3 rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm ring-1 ring-slate-200/50 transition hover:border-primary/30 hover:shadow-md dark:border-white/10 dark:bg-brand-900/50 dark:ring-white/5 dark:hover:border-secondary/30"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/15 text-primary dark:from-primary/25 dark:to-secondary/20 dark:text-secondary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Phone</p>
                  <p className="mt-1 font-medium text-slate-900 transition group-hover:text-primary dark:text-white dark:group-hover:text-secondary">
                    +252 65 4888780
                  </p>
                </div>
              </a>

              <div className="flex gap-3 rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm ring-1 ring-slate-200/50 dark:border-white/10 dark:bg-brand-900/50 dark:ring-white/5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-secondary/15 text-primary dark:from-primary/25 dark:to-secondary/20 dark:text-secondary">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Location</p>
                  <p className="mt-1 font-medium text-slate-900 dark:text-white">Burco, Somaliland</p>
                </div>
              </div>
            </div>
          </aside>

          {/* Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200/90 bg-white/95 p-5 shadow-xl shadow-slate-400/10 ring-1 ring-slate-200/60 dark:border-white/10 dark:bg-brand-900/60 dark:shadow-black/40 dark:ring-white/10 sm:p-6"
            >
              {status === 'success' ? (
                <div
                  className="flex flex-col items-center justify-center py-10 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-100 text-primary dark:bg-primary/20 dark:text-secondary">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="mt-3 text-base font-semibold text-slate-900 dark:text-white">Message sent</p>
                  <p className="mt-2 max-w-sm text-sm text-slate-600 dark:text-slate-400 sm:text-base">
                    Thanks for reaching out. We&apos;ll review your note and reply soon. For a faster response, you can
                    also email us directly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-8 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 sm:text-base">
                        Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-0 transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-brand-950/80 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-secondary dark:focus:ring-secondary/20 sm:text-base"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 sm:text-base">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-brand-950/80 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-secondary dark:focus:ring-secondary/20 sm:text-base"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 sm:text-base">
                      Phone <span className="text-slate-400">(optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-brand-950/80 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-secondary dark:focus:ring-secondary/20 sm:text-base"
                      placeholder="+252 …"
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 sm:text-base">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-white/10 dark:bg-brand-950/80 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-secondary dark:focus:ring-secondary/20 sm:text-base"
                      placeholder="Tell us about your project, timeline, or questions…"
                    />
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-slate-500 dark:text-slate-500">
                      This demo doesn&apos;t send a server request yet. Connect your API or email service to go live.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="-ml-1 mr-2 h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden>
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        'Send message'
                      )}
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
