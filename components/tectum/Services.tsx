'use client';

import { motion } from 'framer-motion';
import { AnimatedSection } from './AnimatedSection';

const services = [
  {
    title: 'Entity Structuring',
    intro: 'Establishing the right legal and corporate structure in the UAE, matched to the client’s actual purpose rather than a generic template.',
    bullets: [
      'Mainland, free zone, and offshore entity selection and setup',
      'Holding structure design for multi-entity or multi-jurisdiction clients, including trusts, family offices, and special purpose vehicles',
      'Shareholder and governance structuring',
      'Coordination with legal counsel on incorporation documents',
      'Structuring for specific outcomes: asset protection, succession, operational flexibility, or a combination',
    ],
  },
  {
    title: 'Compliance',
    intro: 'Keeping a client’s UAE presence sound and current as regulation, reporting obligations, and the client’s own circumstances change.',
    bullets: [
      'UAE corporate tax registration and ongoing compliance support',
      'Regulatory and reporting obligations relevant to the client’s structure',
      'Coordination with auditors and accountants on statutory filings',
      'Ongoing monitoring so a structure that was compliant at setup remains compliant as rules or the client’s activity evolves',
    ],
  },
  {
    title: 'Insurance Advisory',
    intro: 'Independent advice on the insurance coverage a client needs to protect their wealth, their family, and their business, without being tied to a single provider’s products.',
    bullets: [
      'Life and family protection coverage review and recommendations',
      'Business and key-person insurance advisory',
      'Health and medical insurance guidance for individuals and families',
      'Property and asset insurance advisory',
      'Review of existing policies for gaps, overlaps, or better terms',
    ],
    note: 'Tectum Advisory provides independent advice on coverage. We do not underwrite or broker insurance policies directly.',
  },
  {
    title: 'Wealth Advisory',
    intro: 'Helping clients see how their wealth, structuring, and long-term goals fit together, and coordinating with the right specialists where dedicated investment expertise is needed.',
    bullets: [
      'Review of a client’s overall financial picture alongside their UAE structuring and tax position',
      'Succession and legacy planning',
      'Coordination with a client’s existing bankers, private bankers, or investment managers to keep structuring and investment decisions aligned',
      'For clients seeking discretionary investment management, referral to an independent investment manager, as a separate option clients may choose to engage directly',
      'Ongoing review as a client’s circumstances, family, or holdings change',
    ],
    note: 'Tectum Advisory provides wealth planning and coordination. We do not provide discretionary investment management or direct investment recommendations.',
  },
  {
    title: 'Entity Management',
    intro: 'Ongoing administration and oversight for entities after they are established, so structures remain active, current, and properly maintained.',
    bullets: [
      'License renewals and regulatory filings',
      'Registered agent and corporate secretarial support',
      'Ongoing bank liaison once accounts are active, including ordinary account maintenance',
      'Annual review of entity structure against the client’s current needs',
      'Point of contact for day-to-day administrative and regulatory matters',
    ],
  },
  {
    title: 'Residency, Visa, and Banking Support',
    intro: 'Hands-on support for the residency, immigration, and banking steps a UAE presence actually requires, for clients, their families, and the people who work for them.',
    bullets: [
      'UAE residency visa processing for clients and their families, including residency-by-investment routes through qualifying property, business, or deposit',
      'Visa processing for employees and domestic staff of client entities and households',
      'Corporate bank account opening, one of the most difficult steps for a new entity in the UAE, managed end to end through to approval',
      'Personal bank account opening support for individual clients',
      'Powers of attorney and related documentation, prepared and processed as needed',
    ],
  },
  {
    title: 'Mortgage and Property Finance Advisory',
    intro: 'Helping clients put their financial position in the strongest possible shape to secure property finance in the UAE, and connecting them with licensed partners for the mortgage and property transaction itself.',
    bullets: [
      'Review and structuring of income, credit lines, and cash flow to strengthen mortgage eligibility',
      'Guidance on how a client’s entity or asset structure affects their financing options',
      'Coordination with licensed mortgage consultants for lender comparison and the mortgage application itself',
      'Referral to licensed real estate partners for property sourcing, whether for personal use, rental yield, or investment purposes',
    ],
    note: 'Tectum Advisory does not hold a mortgage brokerage or real estate brokerage license. Mortgage placement and property transactions are carried out by our licensed partners, with Tectum advising on the client’s financial structuring throughout.',
  },
  {
    title: 'Citizenship-by-Investment Advisory',
    intro: 'Guidance for clients seeking another passport through established citizenship-by-investment programs across Europe, the Caribbean, and the Americas.',
    bullets: [
      'Program selection across eligible jurisdictions, matched to the client’s goals, timeline, and budget',
      'Coordination with government-authorized agents and licensed partners in the chosen jurisdiction',
      'Structuring of the qualifying investment, whether by real estate, government fund, or business investment',
      'Guidance through due diligence, application, and processing requirements',
    ],
    note: 'Tectum Advisory advises on and coordinates citizenship-by-investment programs. Applications are submitted through each program’s own government-authorized agents, in line with that jurisdiction’s requirements.',
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
                
                {/* Replaced single body text with intro and bullet points */}
                <p className="mb-5 max-w-xl text-base font-light leading-relaxed text-slate-muted md:text-lg">
                  {service.intro}
                </p>
                
                {service.bullets && (
                  <ul className="mb-6 max-w-xl list-outside list-disc space-y-3 pl-5 text-base font-light leading-relaxed text-slate-muted md:text-lg">
                    {service.bullets.map((bullet, idx) => (
                      <li key={idx} className="pl-1 marker:text-bronze">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {service.note && (
                  <p className="mt-6 max-w-lg border-l-2 border-bronze/20 py-1 pl-4 text-sm font-light italic leading-relaxed text-slate-muted/70">
                    {service.note}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}