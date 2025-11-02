import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Headphones Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Ambient particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-16 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      {/* Gradient overlay to enhance contrast (non-blocking for interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-manrope text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl"
        >
          Magic Headphones
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-base text-white/80 md:text-lg"
        >
          Pure sound. Zero distractions. A futuristic listening experience engineered for the elite.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="mt-10"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/30 bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3 text-sm font-medium text-white shadow-[0_0_40px_-12px_rgba(34,211,238,0.5)] transition duration-300 hover:from-blue-500 hover:to-cyan-400"
          >
            Shop Now
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
