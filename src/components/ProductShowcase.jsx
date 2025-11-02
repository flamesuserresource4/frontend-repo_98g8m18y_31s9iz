import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const products = [
  {
    id: 'neo-black',
    name: 'Magic Neo – Obsidian Black',
    price: '$349',
    badge: 'Best Seller',
    accent: 'from-blue-700 to-cyan-500',
  },
  {
    id: 'ice-blue',
    name: 'Magic Air – Ice Blue',
    price: '$399',
    badge: 'New',
    accent: 'from-cyan-600 to-blue-500',
  },
  {
    id: 'graphite-pro',
    name: 'Magic Pro – Graphite',
    price: '$499',
    badge: 'Pro',
    accent: 'from-slate-700 to-blue-600',
  },
];

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-white backdrop-blur-sm"
    >
      <div className={`relative h-52 w-full overflow-hidden rounded-xl bg-gradient-to-br ${product.accent}`}>
        {/* Simulated product silhouette */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-28 w-28 rounded-full bg-black/40 backdrop-blur-sm shadow-inner" />
        </div>
        <div className="pointer-events-none absolute right-3 top-3 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-xs">
          {product.badge}
        </div>
        {/* Quick view overlay */}
        <div className="absolute inset-0 flex items-end justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
          <button className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-white/10 px-4 py-2 text-xs backdrop-blur-md transition hover:bg-white/20">
            Quick View
          </button>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-2">
        <div>
          <h3 className="text-base font-semibold">{product.name}</h3>
          <p className="mt-1 text-sm text-white/70">{product.price}</p>
        </div>
        <div className="flex items-center gap-1 text-amber-300">
          <Star className="h-4 w-4 fill-current" />
          <span className="text-xs">4.9</span>
        </div>
      </div>
    </motion.div>
  );
};

const ProductShowcase = () => {
  return (
    <section id="products" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex flex-col items-center justify-between gap-4 md:mb-14 md:flex-row">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Choose Your Magic</h2>
            <p className="mt-2 max-w-xl text-white/70">
              Three premium finishes, one uncompromising sound. Pick the personality that matches your vibe.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10">All</button>
            <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10">Wireless</button>
            <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10">Over-Ear</button>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* Parallax glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-10 mx-auto h-48 w-3/4 rounded-full bg-blue-600/10 blur-3xl" />
    </section>
  );
};

export default ProductShowcase;
