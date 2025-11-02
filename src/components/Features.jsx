import React from 'react';
import { motion } from 'framer-motion';
import { Volume2, Headphones, Feather } from 'lucide-react';

const features = [
  {
    icon: Volume2,
    title: 'Immersive Sound',
    desc: 'Studio-grade clarity with adaptive noise cancellation for an enveloping soundstage.',
  },
  {
    icon: Headphones,
    title: 'Iconic Design',
    desc: 'A sculpted silhouette with premium materials engineered for durability and style.',
  },
  {
    icon: Feather,
    title: 'Featherweight Comfort',
    desc: 'Ergonomic memory foam and breathable mesh for all-day listening comfort.',
  },
];

const FeatureCard = ({ Icon, title, desc }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.02 }}
    className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors hover:bg-white/10"
  >
    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-[0_0_25px_-10px_rgba(34,211,238,0.7)]">
      <Icon className="h-6 w-6" />
    </div>
    <h3 className="text-lg font-semibold text-white">{title}</h3>
    <p className="mt-2 text-sm text-white/70">{desc}</p>
  </motion.div>
);

const Features = () => {
  return (
    <section id="features" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Engineered for Perfection</h2>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">
            Every detail of Magic is crafted for precision listening — from ultra-low distortion drivers to a whisper-soft fit.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} Icon={f.icon} title={f.title} desc={f.desc} />
          ))}
        </div>
      </div>

      {/* Subtle parallax glow */}
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 mx-auto h-48 w-3/4 rounded-full bg-cyan-500/10 blur-3xl" />
    </section>
  );
};

export default Features;
