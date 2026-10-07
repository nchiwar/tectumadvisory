'use client';

import { motion } from 'framer-motion';

export function Mission() {
  return (
    <section className="relative bg-alabaster py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* Wide horizontal image container */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Image Wrapper */}
          <div className="h-[450px] w-full overflow-hidden rounded-sm border border-stone-border bg-stone-border/20 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] md:h-[500px] lg:h-[600px]">
            <img
              src="/mission.jpg"
              alt="Travertine and marble architectural texture"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Solid White Content Box - Guarantees text visibility */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-4 left-4 z-10 w-[calc(100%-2rem)] max-w-md rounded-sm border border-stone-border bg-alabaster p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] sm:bottom-6 sm:left-6 sm:p-8 md:bottom-0 md:left-0 md:w-full md:rounded-bl-sm md:rounded-br-none md:rounded-tl-none md:p-10 lg:max-w-lg lg:p-12"
          >
            <div className="mb-5 flex items-center gap-3 lg:mb-6">
              <span className="h-px w-8 bg-bronze" />
              <span className="text-[10px] font-light uppercase tracking-[0.3em] text-bronze">
                Our Philosophy
              </span>
            </div>
            
            {/* Dark text on solid light card */}
            <p className="font-serif text-lg leading-relaxed text-slate md:text-xl lg:text-2xl">
              Tectum Advisory exists to build and hold that structure — the
              institutional framework that shelters ambition from uncertainty,
              and gives lasting form to what you are constructing.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}