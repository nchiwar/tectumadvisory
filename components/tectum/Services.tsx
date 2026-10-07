'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const services = [
  {
    title: 'Regulatory Compliance Architecture',
    body: 'End-to-end compliance frameworks tailored to your operating jurisdiction — from licensing and registration to ongoing regulatory reporting and audit readiness.',
    note: 'Tectum Advisory does not provide legal advice. Regulatory filings are executed through licensed local counsel partners.',
  },
  {
    title: 'Corporate Governance Design',
    body: 'Board structures, committee charters, delegation matrices, and internal policies engineered to withstand scrutiny and scale with organisational complexity.',
    note: 'Governance recommendations are advisory in nature and subject to ratification by the client\u2019s legal counsel.',
  },
  {
    title: 'Structural Advisory & Holding Design',
    body: 'Holding company structures, cross-border entity mapping, and ownership architecture optimised for operational efficiency, succession, and regulatory alignment.',
    note: 'Structural designs are reviewed for compliance with applicable corporate laws but do not constitute tax advice.',
  },
  {
    title: 'Strategic Growth Planning',
    body: 'Market entry assessments, expansion roadmaps, and partnership strategies grounded in regional intelligence and institutional-grade diligence.',
    note: 'Strategic plans are directional frameworks, not financial guarantees or investment recommendations.',
  },
  {
    title: 'Institutional Representation',
    body: 'Acting as an independent intermediary in negotiations, regulatory dialogues, and stakeholder engagements — ensuring your position is articulated with precision.',
    note: 'Representation is limited to advisory and facilitation roles. Tectum does not act as a statutory agent or authorised signatory.',
  },
  {
    title: 'Risk & Diligence Frameworks',
    body: 'Comprehensive risk mapping, counterparty diligence, and internal control reviews that identify exposure before it becomes liability.',
    note: 'Diligence reports reflect information available at the time of engagement and do not constitute audits under ISAE standards.',
  },
  {
    title: ' succession & Continuity Structuring',
    body: 'Ownership transition planning, key-person dependency mapping, and continuity protocols that protect the institution across generational change.',
    note: 'Continuity structures should be reviewed in conjunction with the client\u2019s estate planning counsel.',
  },
  {
    title: 'Regulatory Liaison & Filing Support',
    body: 'Direct engagement with regulatory authorities on your behalf — preparing submissions, managing queries, and maintaining ongoing dialogue with supervisory bodies.',
    note: 'Filing support is administrative and advisory. Legal responsibility for submissions remains with the regulated entity.',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-alabaster py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-24">
          {/* Left: Sticky header (33%) */}
          <div className="lg:w-1/3">
            <div className="lg:sticky lg:top-32">
              <AnimatedSection>
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-px w-12 bg-bronze" />
                  <span className="text-xs font-light uppercase tracking-[0.3em] text-bronze">
                    Services
                  </span>
                </div>
                <h2 className="font-serif text-4xl leading-tight text-slate md:text-5xl lg:text-[3.5rem]">
                  Eight ways
                  <br />
                  we protect
                  <br />
                  what you
                  <br />
                  <span className="italic text-bronze">build.</span>
                </h2>
                <p className="mt-8 max-w-xs text-base font-light leading-relaxed text-slate-muted">
                  Each engagement is tailored. The framework below outlines the
                  disciplines we bring to bear — individually or in concert.
                </p>
              </AnimatedSection>
            </div>
          </div>

          {/* Right: Scrolling service blocks (66%) */}
          <div className="lg:w-2/3">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-t border-bronze/30 py-10 md:py-12 last:border-b last:border-bronze/30"
              >
                <div className="mb-5 flex items-baseline gap-4">
                  <span className="font-serif text-lg text-bronze">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-px flex-1 bg-stone-border" />
                </div>
                <h3 className="mb-5 font-serif text-2xl leading-snug text-slate md:text-3xl">
                  {service.title}
                </h3>
                <p className="mb-4 max-w-xl text-base font-light leading-relaxed text-slate-muted md:text-lg">
                  {service.body}
                </p>
                <p className="max-w-lg border-l-2 border-bronze/20 py-1 pl-4 text-sm font-light italic leading-relaxed text-slate-muted/70">
                  {service.note}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
