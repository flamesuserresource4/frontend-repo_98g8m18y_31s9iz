import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductShowcase from './components/ProductShowcase';
import Testimonials from './components/Testimonials';
import { Twitter, Instagram, Mail } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-black font-manrope text-white">
      {/* Hero with interactive Spline scene */}
      <Hero />

      {/* Features */}
      <Features />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Testimonials */}
      <Testimonials />

      {/* Footer */}
      <footer className="relative w-full border-t border-white/10 bg-black/80 py-12 backdrop-blur">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold">Magic</h3>
              <p className="mt-2 max-w-sm text-sm text-white/70">
                High-fidelity audio gear designed for creators and connoisseurs. Experience sound — elevated.
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="group inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-cyan-400/40 hover:bg-white/10 hover:text-cyan-300"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="group inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-cyan-400/40 hover:bg-white/10 hover:text-cyan-300"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Email"
                  className="group inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white transition hover:border-cyan-400/40 hover:bg-white/10 hover:text-cyan-300"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-white/80">Contact</h4>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    <li>Support: support@magic.audio</li>
                    <li>Press: press@magic.audio</li>
                    <li>Careers: talent@magic.audio</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold tracking-wide text-white/80">Newsletter</h4>
                  <p className="mt-3 text-sm text-white/70">Join for product drops and exclusive listening sessions.</p>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-4 flex items-center gap-3"
                  >
                    <input
                      type="email"
                      required
                      placeholder="you@domain.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition focus:border-cyan-400/40 focus:bg-white/10"
                    />
                    <button
                      type="submit"
                      className="rounded-xl border border-cyan-400/30 bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_35px_-12px_rgba(34,211,238,0.6)] transition hover:from-blue-500 hover:to-cyan-400"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">
            © {new Date().getFullYear()} Magic Audio. All rights reserved.
          </div>
        </div>

        {/* footer glow */}
        <div className="pointer-events-none absolute inset-x-0 -top-6 mx-auto h-24 w-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </footer>
    </div>
  );
}

export default App;
