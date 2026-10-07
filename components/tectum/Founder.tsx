'use client';

import { AnimatedSection } from './AnimatedSection';

export function Founder() {
  return (
    <section id="about" className="bg-cashmere py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="mx-auto max-w-4xl">
          {/* Content side */}
          <AnimatedSection delay={0.2}>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-bronze" />
              <span className="text-xs font-light uppercase tracking-[0.3em] text-bronze">
                The Founder
              </span>
            </div>

            <h2 className="font-serif text-4xl leading-tight text-slate md:text-5xl lg:text-6xl">
              Raymond Amang
            </h2>

            <div className="mt-8 space-y-6 text-base font-light leading-relaxed text-slate-muted md:text-lg">
              <p>
                Raymond Amang founded Tectum Advisory after more than a decade
                navigating the intersection of regulatory frameworks,
                institutional governance, and entrepreneurial ambition across
                the Gulf and West African corridors.
              </p>
              <p>
                His approach is structural rather than transactional — treating
                each client relationship as an architecture to be maintained,
                not a deal to be closed. This philosophy shapes every
                engagement the firm undertakes.
              </p>
              <p>
                Before establishing Tectum, Raymond held advisory roles within
                regulatory-adjacent institutions, where he developed a deep
                fluency in the operational realities of compliance, corporate
                structuring, and cross-border governance.
              </p>
            </div>

            <div className="mt-10 border-t border-stone-border pt-6">
              <p className="font-serif text-lg italic text-slate">
                &ldquo;The structure is the strategy. Everything else follows.&rdquo;
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}