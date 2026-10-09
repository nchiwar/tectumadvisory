export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate py-10 md:py-12">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        
        {/* Top row with Flexbox for a guaranteed balanced layout */}
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          
          {/* Left: Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <span className="font-serif text-xl uppercase tracking-[0.2em] text-alabaster">
                Tectum
              </span>
              <span className="h-4 w-px bg-bronze/40" />
              <span className="text-[10px] font-light uppercase tracking-[0.3em] text-alabaster/50">
                Advisory
              </span>
            </div>
            <p className="mt-4 text-sm font-light leading-relaxed text-alabaster/50">
              Shelter for what you're building.
            </p>
          </div>

          {/* Center & Right: Navigation & Contact wrappers */}
          <div className="flex flex-col gap-10 sm:flex-row sm:gap-20 lg:gap-32">
            
            {/* Filtered Navigation */}
            <div>
              <p className="mb-4 text-[10px] font-light uppercase tracking-[0.3em] text-bronze">
                Navigate
              </p>
              <ul className="space-y-2">
                {[
                  { label: 'Home', href: '#home' },
                  { label: 'About', href: '#about' },
                  { label: 'Services', href: '#at-a-glance' },
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

            {/* Clean Contact Email Block */}
            <div className="flex items-start sm:mt-8">
              <a
                href="mailto:info@tectumadvisory.com"
                className="text-sm font-light text-alabaster/60 transition-colors hover:text-alabaster"
              >
                info@tectumadvisory.com
              </a>
            </div>
            
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-alabaster/10" />

        {/* Bottom row */}
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-xs font-light text-alabaster/40">
            &copy; {year} Tectum Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}