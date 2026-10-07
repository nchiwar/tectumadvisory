'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';

export function Contact() {
  return (
    <section id="contact" className="bg-alabaster py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        {/* Header */}
        <AnimatedSection className="mb-12 max-w-3xl">
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-bronze" />
            <span className="text-xs font-light uppercase tracking-[0.3em] text-bronze">
              Contact
            </span>
          </div>
          <h2 className="font-serif text-4xl leading-tight text-slate md:text-5xl lg:text-6xl xl:text-[4.5rem]">
            Let's talk about
            <br />
            what you're{' '}
            <span className="italic text-bronze">building.</span>
          </h2>
          
          {/* Added introductory text to prevent the section from looking bland */}
          <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-slate-muted">
            Every engagement starts with a conversation, not a sales pitch. Tell us what you’re working on, whether you have a specific service in mind or you’re still exploring, and we’ll tell you plainly whether, and how, we can help.
          </p>
        </AnimatedSection>

        {/* Card */}
        <AnimatedSection delay={0.15}>
          <div className="overflow-hidden rounded-sm border border-stone-border bg-cashmere/40">
            {/* Direct Channel */}
            <div className="p-8 md:p-12 lg:p-16">
              <p className="mb-8 text-xs font-light uppercase tracking-[0.3em] text-slate-muted">
                Direct Channel
              </p>

              <div className="flex">
                <a
                  href="mailto:info@tectumadvisory.com"
                  className="group flex items-start gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm border border-stone-border bg-alabaster transition-colors duration-300 group-hover:border-bronze">
                    <Mail className="h-5 w-5 text-bronze" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-light uppercase tracking-[0.2em] text-slate-muted">
                      Email
                    </p>
                    <p className="font-serif text-lg text-slate transition-colors group-hover:text-bronze md:text-xl">
                      info@tectumadvisory.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}