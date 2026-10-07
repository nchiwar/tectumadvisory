'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const bentoCards = [
  {
    src: '/whytectum1.jpg',
    alt: 'Structural beam detail',
    title: 'Structural Integrity',
    text: 'Every engagement begins with a rigorous assessment of the foundational elements — governance, compliance, and operational architecture — ensuring the structure can bear the weight of ambition.',
  },
  {
    src: '/whytectum2.jpg',
    alt: 'UAE regional architecture',
    title: 'Regional Fluency',
    text: 'Deep operational knowledge of the UAE regulatory landscape and broader Gulf markets, translating jurisdictional complexity into clear, actionable pathways for principals and institutions.',
  },
  {
    src: '/whytectum3.jpg',
    alt: 'Abstract interlocking geometric shapes',
    title: 'Interlocking Disciplines',
    text: 'Corporate advisory is not a single discipline. We integrate legal, financial, and strategic frameworks into a cohesive whole — each element reinforcing the next.',
  },
];

export function WhyTectum() {
  return (
    <section className="bg-cashmere py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* Section title */}
        <AnimatedSection className="mb-12 max-w-2xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-bronze" />
            <span className="text-xs font-light uppercase tracking-[0.3em] text-bronze">
              Why Tectum
            </span>
          </div>
          <h2 className="font-serif text-4xl leading-tight text-slate md:text-5xl">
            What the story
            <br />
            rests on.
          </h2>
        </AnimatedSection>

        {/* Bento Grid — compact asymmetric */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12">
          {bentoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group overflow-hidden rounded-sm border border-stone-border bg-alabaster transition-shadow duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] flex flex-col ${
                i === 0
                  ? 'md:col-span-7'
                  : i === 1
                    ? 'md:col-span-5'
                    : 'md:col-span-12 md:flex-row' // Forces side-by-side layout on the 3rd card
              }`}
            >
              {/* Image Container */}
              <div 
                className={`relative w-full overflow-hidden border-stone-border bg-stone-border/20 ${
                  i === 2 
                    ? 'border-b md:border-b-0 md:border-r md:w-[50%] lg:w-[55%] aspect-[21/9] md:aspect-auto' 
                    : 'border-b aspect-video'
                }`}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content Container */}
              <div className={`p-6 sm:p-8 flex flex-col justify-center ${i === 2 ? 'md:w-[50%] lg:w-[45%] lg:p-10' : ''}`}>
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-serif text-xl md:text-2xl text-bronze">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-stone-border" />
                </div>
                <h3 className="mb-3 font-serif text-xl md:text-2xl text-slate">
                  {card.title}
                </h3>
                <p className="max-w-lg text-sm md:text-base font-light leading-relaxed text-slate-muted">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}