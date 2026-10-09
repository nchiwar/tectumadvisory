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
                Raymond Amang founded Tectum Advisory after more than a decade spent advising clients through complex financial, regulatory, and personal decisions.
              </p>
              <p>
                His work has consistently centered on the same principle: helping clients protect what they have built while navigating increasingly complex circumstances and planning for what comes next.
              </p>
              <p>
                Over that time, he worked closely with individuals, families, and businesses seeking stability, protection, opportunity, and long-term certainty in an increasingly uncertain world.
              </p>
            </div>

            <div className="mt-10 border-t border-stone-border pt-8">
              <p className="font-serif text-xl italic leading-relaxed text-slate">
                Tectum Advisory is built on that foundation: the conviction that structuring and protecting what a client has built requires the same rigor, and the same relationship, as winning their trust in the first place.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}