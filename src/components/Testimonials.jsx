import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ava R.',
    text: 'The soundstage is unreal. I rediscovered my favorite albums — there’s detail I’ve never heard before.',
  },
  {
    name: 'Noah K.',
    text: 'Comfort for days. I wear them for hours while coding — zero fatigue, just pure focus.',
  },
  {
    name: 'Liam S.',
    text: 'Premium all the way through. The build, the fit, the sound — Magic is exactly that.',
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Trusted by Creators</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">
            Hear from people who use Magic every day — in studios, at offices, and on the move.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="mb-3 flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-white/80">{t.text}</p>
              <div className="mt-4 text-sm font-medium text-white">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-40 w-2/3 rounded-full bg-cyan-500/10 blur-3xl" />
    </section>
  );
};

export default Testimonials;
