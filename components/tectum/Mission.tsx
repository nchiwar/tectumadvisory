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
            className="absolute bottom-4 left-4 z-10 w-[calc(100%-2rem)] max-w-md rounded-sm border border-stone-border bg-alabaster p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] sm:bottom-6 sm:left-6 sm:p-8 md:bottom-0 md:left-0 md:w-full md:rounded-bl-sm md:rounded-br-none md:rounded-tl-none md:p-10 lg:max-w-xl lg:p-12"
          >
            <div className="mb-5 flex items-center gap-3 lg:mb-6">
              <span className="h-px w-8 bg-bronze" />
              <span className="text-[10px] font-light uppercase tracking-[0.3em] text-bronze">
                What we do
              </span>
            </div>
            
            {/* Dark text on solid light card (Updated with official writeup) */}
            <div className="space-y-4 font-serif text-base leading-relaxed text-slate md:text-lg">
              <p>
                Tectum Advisory exists to build and hold that structure. We work with individuals, families, and entities, from a first venture in the UAE to an established presence being expanded or restructured. We provide the structuring, compliance, insurance and wealth advisory, and the residency, banking, and financing work that a UAE presence actually requires, so that what a client establishes here stands on its own, without carrying the weight of getting it wrong.
              </p>
              <p>
                We are not a firm that sets things up and disappears. A roof is not a one-time purchase. It is maintained, checked, and reinforced for as long as the people and entities beneath it depend on it. That is the relationship we intend to have with every client: personal, attentive, and built to last well beyond the first year.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}