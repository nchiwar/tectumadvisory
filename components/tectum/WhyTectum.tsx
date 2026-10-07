'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

// Updated with official writeups from the HTML
const bentoCards = [
  {
    src: '/whytectum1.jpg',
    alt: 'Structural beam detail',
    title: 'Shelter, not just setup',
    text: 'Ongoing structure, compliance, and management, not a single transaction.',
  },
  {
    src: '/whytectum2.jpg',
    alt: 'UAE regional architecture',
    title: 'The UAE advantage',
    text: 'Tax efficiency, safety, lifestyle, and a strong business environment, presented plainly rather than oversold.',
  },
  {
    src: '/whytectum3.jpg',
    alt: 'Abstract interlocking geometric shapes',
    title: 'Personal, not institutional',
    text: 'A relationship-first practice, close enough to know the client, not just the file.',
  },
];

export function WhyTectum() {
  return (
    <section className="bg-cashmere py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* Section title */}
        <AnimatedSection className="mb-12 max-w-2xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-bronze" />
            <span className="text-xs font-light uppercase tracking-[0.3em] text-bronze">
              Why Tectum
            </span>
          </div>
          <h2 className="font-serif text-3xl leading-tight text-slate md:text-4xl lg:text-5xl">
            What the story
            <br />
            rests on.
          </h2>
        </AnimatedSection>

        {/* Bento Grid — asymmetric */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {bentoCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.8,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group overflow-hidden rounded-sm border border-stone-border bg-alabaster transition-shadow duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] ${
                i === 0
                  ? 'md:col-span-7'
                  : i === 1
                    ? 'md:col-span-5'
                    : 'md:col-span-12'
              }`}
            >
              {/* Image Container */}
              <div 
                className={`relative w-full overflow-hidden border-b border-stone-border bg-stone-border/20 ${
                  i === 2 
                    ? 'h-[200px] md:h-[260px] lg:h-[300px]' 
                    : 'h-[220px] md:h-[280px] lg:h-[320px]' 
                }`}
              >
                <img
                  src={card.src}
                  alt={card.alt}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-serif text-xl text-bronze md:text-2xl">
                    0{i + 1}
                  </span>
                  <span className="h-px flex-1 bg-stone-border" />
                </div>
                <h3 className="mb-3 font-serif text-xl text-slate md:text-2xl">
                  {card.title}
                </h3>
                <p className="max-w-lg text-base font-light leading-relaxed text-slate-muted md:text-lg">
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