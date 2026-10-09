'use client';

import { AnimatedSection } from './AnimatedSection';

export const serviceSlugs = [
  { id: 'svc-entity-structuring', label: 'Entity Structuring' },
  { id: 'svc-compliance', label: 'Compliance' },
  { id: 'svc-insurance-advisory', label: 'Insurance Advisory' },
  { id: 'svc-wealth-advisory', label: 'Wealth Advisory' },
  { id: 'svc-entity-management', label: 'Entity Management' },
  { id: 'svc-residency-visa-banking', label: 'Residency, Visa, and Banking Support' },
  { id: 'svc-mortgage-property', label: 'Mortgage and Property Finance Advisory' },
  { id: 'svc-citizenship-investment', label: 'Citizenship-by-Investment Advisory' },
];

export function ServicesPreview() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    // Dispatch custom event to notify Services component that a chip was clicked
    window.dispatchEvent(new CustomEvent('service-chip-clicked', { detail: { id } }));

    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="at-a-glance" className="bg-alabaster py-20 md:py-28 border-t border-stone-border/40">
      <div className="mx-auto max-w-[1040px] px-6 md:px-10">
        <AnimatedSection className="text-center mb-12">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-bronze" />
            <span className="text-xs font-light uppercase tracking-[0.3em] text-bronze">
              Our Services
            </span>
            <span className="h-px w-8 bg-bronze" />
          </div>
          <h2 className="font-serif text-3xl leading-tight text-slate md:text-4xl">
            Eight ways we protect what you build
          </h2>
        </AnimatedSection>

        {/* 2-column preview grid matching HTML chip specification */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {serviceSlugs.map((svc) => (
            <a
              key={svc.id}
              href={`#${svc.id}`}
              onClick={(e) => handleClick(e, svc.id)}
              className="group block border border-stone-border bg-white p-4 md:p-5 transition-all duration-200 hover:border-bronze hover:bg-cashmere/20"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-base text-slate transition-colors group-hover:text-bronze">
                  {svc.label}
                </span>
                <span className="text-bronze text-sm transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#services"
            className="inline-block rounded-sm border border-slate/30 px-8 py-3 text-sm font-light tracking-wide text-slate transition-all duration-300 hover:border-slate hover:bg-slate/5"
          >
            See full details
          </a>
        </div>
      </div>
    </section>
  );
}