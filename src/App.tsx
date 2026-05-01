import './App.css';

export default function App() {
  return (
    <div
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url(/background.jpg)' }}
    >
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute -top-32 -left-32 orb orb-blue" />
      <div className="absolute -bottom-32 -right-32 orb orb-amber" />

      <div className="relative z-10">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur" >
              <img src="/android-chrome-192x192.png" alt="JJ Web Solutions Logo" className="h-full w-full object-cover" />
            </div>
            <span className="text-lg font-semibold tracking-wide text-white">JJ Web Solutions</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a className="hover:text-white transition" href="#services">Services</a>
            <a className="hover:text-white transition" href="#work">Work</a>
            <a className="hover:text-white transition" href="#contact">Contact</a>
          </nav>
        </header>

        <main className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-14 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/80">
              Crafted for 2026 launches
            </div>
            <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl">
              Design and develop amazing web solutions.
            </h1>
            <p className="mt-6 text-lg text-white/85 md:text-xl">
              JJ Web Solutions is a system that designs and develops premium web experiences
              for modern brands. We blend strategy, design, and engineering to deliver fast,
              accessible, and high-converting websites.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a className="btn-primary" href="#contact">Start a project</a>
              <a className="btn-ghost" href="#services">Explore services</a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 text-white/80 sm:grid-cols-3 text-center">
              <div>
                <div className="text-2xl font-semibold text-white">120+</div>
                <div className="text-sm">Projects delivered</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">8 yrs</div>
                <div className="text-sm">Experience</div>
              </div>
              <div>
                <div className="text-2xl font-semibold text-white">99%</div>
                <div className="text-sm">Client retention</div>
              </div>
            </div>
          </div>

          <div className="glass-card" id="work">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">Featured delivery</h2>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/70">Case study</span>
            </div>
            <p className="mt-4 text-white/80">
              A complete brand refresh and ecommerce build that increased conversions by 42%
              while reducing load times to under 1 second.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-white/70">Timeline</div>
                <div className="text-lg font-semibold text-white">6 weeks</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-white/70">Stack</div>
                <div className="text-lg font-semibold text-white">React + Vite</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-white/70">Services</div>
                <div className="text-lg font-semibold text-white">Design, Dev, SEO</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm text-white/70">Results</div>
                <div className="text-lg font-semibold text-white">+42% sales</div>
              </div>
            </div>
          </div>
        </main>

        <section id="services" className="mx-auto grid max-w-6xl gap-6 px-6 pb-16 md:grid-cols-3">
          <div className="glass-card">
            <h3 className="text-lg font-semibold text-white">Experience Design</h3>
            <p className="mt-3 text-white/80">
              Premium UI and UX systems that feel effortless across every device.
            </p>
          </div>
          <div className="glass-card">
            <h3 className="text-lg font-semibold text-white">Engineering</h3>
            <p className="mt-3 text-white/80">
              Scalable front-end and back-end builds with clean, maintainable code.
            </p>
          </div>
          <div className="glass-card">
            <h3 className="text-lg font-semibold text-white">Optimization</h3>
            <p className="mt-3 text-white/80">
              Performance, accessibility, and SEO enhancements that drive results.
            </p>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
          <div className="glass-card flex flex-col items-start gap-4 lg:gap-6 md:flex-row md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-white">Email Us</h2>
              <p className="mt-2 text-white/80">
                Ready to build something exceptional? Tell us about your vision.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto md:items-center md:justify-end">
              <a className="btn-primary text-sm" href="mailto:contact@jjwebsolutions.com">Email Us</a>
              <a className="btn-ghost" href="mailto:contact@jjwebsolutions.com">contact@jjwebsolutions.com</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}