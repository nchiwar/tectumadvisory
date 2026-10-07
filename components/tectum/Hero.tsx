'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[85vh] bg-alabaster pt-32 md:pt-40">
      {/* Subtle grain texture overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      />

      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 md:px-10 lg:px-16">
        {/* Left: Columns 1-7 */}
        <div className="col-span-12 flex flex-col justify-center lg:col-span-7">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-bronze" />
            <span className="text-xs font-light uppercase tracking-[0.3em] text-bronze">
              Independent Corporate Advisory
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl leading-[1.05] tracking-tight text-slate md:text-6xl lg:text-7xl xl:text-[5.5rem]"
          >
            Shelter for what
            <br />
            you're{' '}
            <span className="italic text-bronze">building.</span>
          </motion.h1>

          {/* Intro copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 max-w-xl text-lg font-light leading-relaxed text-slate-muted md:text-xl"
          >
            Tectum Advisory provides structured, independent guidance to
            institutions and principals navigating complexity across regulatory,
            governance, and strategic horizons.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-sm bg-slate px-8 py-4 text-sm font-light tracking-wide text-alabaster transition-all duration-300 hover:bg-slate/90"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 rounded-sm border border-slate/30 px-8 py-4 text-sm font-light tracking-wide text-slate transition-all duration-300 hover:border-slate hover:bg-slate/5"
            >
              Our services
            </a>
          </motion.div>
        </div>

        {/* Right: Columns 8-12 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="col-span-12 flex items-end lg:col-span-5 mt-12 lg:mt-0"
        >
          {/* Image Container with precise 3:4 aspect ratio */}
          <div className="w-full aspect-[3/4] overflow-hidden rounded-sm border border-stone-border bg-stone-border/20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]">
            <img
              src="/hero.jpg"
              alt="Abstract modern architecture meeting desert dunes"
              className="h-full w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[10px] font-light uppercase tracking-[0.3em] text-slate-muted">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="h-8 w-px bg-gradient-to-b from-bronze to-transparent"
        />
      </motion.div>
    </section>
  );
}