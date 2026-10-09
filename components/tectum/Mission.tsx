'use client';

import { motion } from 'framer-motion';

export function Mission() {
  return (
    <section className="relative bg-alabaster py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto w-full rounded-sm border border-stone-border bg-alabaster p-8 text-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] md:p-12 lg:p-16"
        >
          {/* Label */}
          <div className="mb-8 flex items-center justify-center gap-3 md:mb-10">
            <span className="h-px w-8 bg-bronze" />
            <span className="text-[10px] font-light uppercase tracking-[0.3em] text-bronze">
              What we do
            </span>
            <span className="h-px w-8 bg-bronze" />
          </div>

          {/* Paragraphs stacked, centered */}
          <div className="mx-auto max-w-4xl space-y-6 font-serif text-base leading-relaxed text-slate md:space-y-8 md:text-lg lg:text-xl">
            <p>
              Tectum Advisory exists to build and hold that structure. We work with individuals, families, and entities, from a first venture in the UAE to an established presence being expanded or restructured. We provide the structuring, compliance, insurance and wealth advisory, and the residency, banking, and financing work that a UAE presence actually requires, so that what a client establishes here stands on its own, without carrying the weight of getting it wrong.
            </p>
            <p>
              We are not a firm that sets things up and disappears. A roof is not a one-time purchase. It is maintained, checked, and reinforced for as long as the people and entities beneath it depend on it. That is the relationship we intend to have with every client: personal, attentive, and built to last well beyond the first year.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}