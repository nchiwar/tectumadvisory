'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 w-full border-b transition-colors duration-500 ${
        scrolled
          ? 'border-[#9C6B3E]/20 bg-[var(--sand)]/95 backdrop-blur-md'
          : 'border-transparent bg-[var(--sand)]'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center px-6 py-5 md:px-10 lg:px-16">
        
        {/* Left: Brand Mark (Custom PNG Logo) */}
        <div className="flex flex-1 justify-start">
          <a href="#home" className="group flex items-center gap-3">
            <img 
              src="/tectumlogo.png" 
              alt="Tectum Advisory Logo" 
              className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105" 
            />
          </a>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex items-center justify-center gap-8 md:gap-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-sm font-medium tracking-wide text-[var(--ink)] transition-colors hover:text-[var(--brass)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Desktop CTA & Mobile Toggle Button */}
        <div className="flex flex-1 items-center justify-end">
          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-full border border-[var(--brass)]/40 px-6 py-2.5 text-xs font-medium tracking-wide text-[var(--ink)] transition-all duration-300 hover:bg-[var(--brass)] hover:text-white md:inline-block"
          >
            Get in touch
          </a>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            {/* Forced black background and slightly thicker lines for visibility */}
            <span className={`h-[2px] w-6 bg-black transition-all ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-[2px] w-6 bg-black transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-[2px] w-6 bg-black transition-all ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-[var(--sand)]/95 backdrop-blur-md border-b border-[#9C6B3E]/20"
        >
          <div className="flex flex-col gap-4 px-6 py-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium tracking-wide text-[var(--ink)] transition-colors hover:text-[var(--brass)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}