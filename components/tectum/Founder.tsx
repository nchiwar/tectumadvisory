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
                Raymond Amang founded Tectum Advisory after a decade spent building the kind of high-trust, high-stakes relationships this firm exists to protect. He has a background in biochemistry and business management, an analytical, evidence-first foundation he has carried into a career built on relationships ever since.
              </p>
              <p>
                At Bayzat in Dubai, he spent four years across the full client relationship lifecycle: qualifying and closing new business, shaping and heading a new Sales Development Analyst function, and later, as an Account Manager, renewing policies, cross-selling insurance lines, assisting with claims, and helping clients contest denied coverage. Beyond that core scope, on his own initiative, he took an insurance authority escalation all the way to a significant win against a multinational insurer, arranged specialist appointments and coverage for clients both within the UAE and abroad, built out multi-year insurance planning that protected clients from ever losing coverage or being forced onto a worse plan due to underwriting on a condition that emerged after the fact, and trained incoming account managers, benefits analysts, and sales development analysts beyond what his role required.
              </p>
              <p>
                That foundation carried him to Digicore in Lagos, where he was brought in to rebuild a rapidly degrading relationship with UBA, a major Tier-1 bank client, at a point where Digicore risked losing its standing as a vendor to the bank entirely. The relationship recovered, and Raymond was assigned responsibility for Digicore&rsquo;s relationships with other Tier-1 banks as well, including Access Bank, FCMB, Fidelity Bank, and Zenith Bank.
              </p>
              <p>
                Most recently, as Head of Client Relations at a Dubai-based corporate advisory firm, his scope spanned licensing, residency services, banking and compliance coordination, real estate and mortgage support, company formation and structuring, trust and wealth structuring, and residency-by-investment, much of the exact terrain Tectum now operates in.
              </p>
            </div>

            <div className="mt-10 border-t border-stone-border pt-8">
              {/* Added 'italic' class to the final paragraph */}
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