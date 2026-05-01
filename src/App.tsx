import { ArrowRight, Star, CheckCircle, Zap } from 'lucide-react';
import './App.css';

const companies = [
  { name: 'Acme Corp', logo: 'ACME' },
  { name: 'GlobalTech', logo: 'GLOBAL' },
  { name: 'Quantum', logo: 'QUANTUM' },
  { name: 'Nexus', logo: 'NEXUS' },
  { name: 'Horizon', logo: 'HORIZON' },
];

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO at TechFlow',
    content: 'JJ Web Solutions completely transformed our online presence. Our conversion rates are up 45% since the redesign.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder of RetailX',
    content: 'The team delivered an exceptional ecommerce platform. Fast, beautiful, and extremely easy to manage.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'CMO at Innovate',
    content: 'Their attention to detail and modern design aesthetic is unmatched. They exceeded our expectations in every way.',
    rating: 5,
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-white">
      {/* Background elements */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 transition-opacity duration-300"
        style={{ backgroundImage: 'url(/background.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/80 to-slate-950/95 transition-colors duration-300" />
      <div className="absolute inset-0 grid-overlay" />
      <div className="absolute -top-32 -left-32 orb orb-blue" />
      <div className="absolute -bottom-32 -right-32 orb orb-amber" />

      <div className="relative z-10">
        {/* Header */}
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur">
              <div className="text-xl font-bold text-blue-400">JJ</div>
            </div>
            <span className="text-lg font-semibold tracking-wide">JJ Web Solutions</span>
          </div>
          <div className="flex items-center gap-8">
            <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
              <a className="hover:text-white transition-colors" href="#services">Services</a>
              <a className="hover:text-white transition-colors" href="#work">Work</a>
              <a className="hover:text-white transition-colors" href="#testimonials">Reviews</a>
              <a className="hover:text-white transition-colors" href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <main className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-20 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80">
              Crafted for 2026 launches
            </div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Design and develop <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">amazing</span> web solutions.
            </h1>
            <p className="mt-6 text-lg text-white/85 md:text-xl leading-relaxed">
              JJ Web Solutions is a premium digital agency that designs and develops
              cutting-edge web experiences for modern brands. We blend strategy,
              design, and engineering to deliver fast, accessible, and high-converting websites.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a className="btn-primary" href="#contact">
                Start a project <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a className="btn-ghost" href="#services">Explore services</a>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} src="/android-chrome-192x192.png" alt="" className='w-10 h-10 rounded-full' />
                ))}
              </div>
              <div className="text-sm font-medium text-slate-400">
                Join <span className="font-bold text-white">120+</span> happy clients
              </div>
            </div>
          </div>

          <div className="glass-card relative" id="work">
            <div className="absolute -top-4 -right-4 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-3 shadow-lg">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Featured Delivery</h2>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">Case Study</span>
            </div>
            <p className="mt-4 text-white/80 leading-relaxed">
              A complete brand refresh and ecommerce build that increased conversions by 42%
              while reducing load times to under 1 second.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                <div className="text-sm font-medium text-white/70">Timeline</div>
                <div className="text-lg font-bold">6 weeks</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                <div className="text-sm font-medium text-white/70">Stack</div>
                <div className="text-lg font-bold">React + Vite</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                <div className="text-sm font-medium text-white/70">Services</div>
                <div className="text-lg font-bold">Design, Dev, SEO</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
                <div className="text-sm font-medium text-white/70">Results</div>
                <div className="text-lg font-bold text-green-400">+42% sales</div>
              </div>
            </div>
          </div>
        </main>

        {/* Trusted By Section */}
        <section className="mx-auto w-full max-w-6xl px-6 py-10 border-y border-white/10">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-slate-400 mb-8">
            Trusted by innovative companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale transition hover:grayscale-0">
            {companies.map((company, idx) => (
              <div key={idx} className="text-xl md:text-2xl font-black tracking-tighter">
                {company.logo}
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our Expertise</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              We provide end-to-end digital solutions, from conceptual design to scalable engineering and performance optimization.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="glass-card group hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-400">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Experience Design</h3>
              <p className="mt-3 text-white/80 leading-relaxed">
                Premium UI and UX systems that feel effortless across every device. We create intuitive user journeys that engage and convert.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-blue-500" /> UI/UX Design</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-blue-500" /> Wireframing</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-blue-500" /> Prototyping</li>
              </ul>
            </div>
            <div className="glass-card group hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Engineering</h3>
              <p className="mt-3 text-white/80 leading-relaxed">
                Scalable front-end and back-end builds with clean, maintainable code using the latest frameworks like React and Node.js.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-500" /> Web Applications</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-500" /> E-Commerce Systems</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-indigo-500" /> API Development</li>
              </ul>
            </div>
            <div className="glass-card group hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-400">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Optimization</h3>
              <p className="mt-3 text-white/80 leading-relaxed">
                Performance, accessibility, and SEO enhancements that drive organic traffic and ensure lightning-fast load times.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-purple-500" /> Core Web Vitals</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-purple-500" /> Technical SEO</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-purple-500" /> Accessibility Audits</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="mx-auto max-w-6xl px-6 pb-24">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Client Feedback</h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Don't just take our word for it. Here is what our clients have to say about working with us.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="glass-card flex flex-col justify-between">
                <div>
                  <div className="flex text-amber-500 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-white/90 italic mb-6">"{testimonial.content}"</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-400">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
          <div className="glass-card flex flex-col items-center gap-8 text-center p-12 lg:p-16 border-blue-500/30">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to build something exceptional?</h2>
              <p className="mt-4 text-lg text-white/80">
                Let's discuss your vision and see how our expertise can help bring it to life. We are currently accepting new projects for Q3.
              </p>
            </div>
            <div className="flex w-full flex-col gap-4 sm:flex-row justify-center md:w-auto">
              <a className="btn-primary" href="mailto:contact@jjwebsolutions.com">
                Get in touch
              </a>
              <a className="btn-ghost" href="mailto:contact@jjwebsolutions.com">
                contact@jjwebsolutions.com
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} JJ Web Solutions. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}