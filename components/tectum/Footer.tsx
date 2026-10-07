export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate py-10 md:py-12">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="font-serif text-xl uppercase tracking-[0.2em] text-alabaster">
                Tectum
              </span>
              <span className="h-4 w-px bg-bronze/40" />
              <span className="text-[10px] font-light uppercase tracking-[0.3em] text-alabaster/50">
                Advisory
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-alabaster/50">
              Independent corporate advisory. Structured solutions for
              institutions and principals.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <p className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-bronze">
              Navigate
            </p>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '#' },
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-alabaster/60 transition-colors hover:text-alabaster"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-bronze">
              Contact
            </p>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@tectumadvisory.com"
                  className="text-sm font-light text-alabaster/60 transition-colors hover:text-alabaster"
                >
                  info@tectumadvisory.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-alabaster/10" />

        {/* Bottom row */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs font-light text-alabaster/40">
            &copy; {year} Tectum Advisory. All rights reserved.
          </p>
          <p className="text-xs font-light text-alabaster/40">
            Independent advisory. Not a law firm.
          </p>
        </div>
      </div>
    </footer>
  );
}