'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#at-a-glance' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Line of focus: 200px below the fixed header
      const scrollPosition = window.scrollY + 200;

      // Grab elements
      const homeEl = document.getElementById('home');
      const aboutEl = document.getElementById('about');
      const atAGlanceEl = document.getElementById('at-a-glance');
      const servicesEl = document.getElementById('services');
      const contactEl = document.getElementById('contact');

      // Check contact first (near page bottom)
      if (contactEl) {
        const contactTop = contactEl.offsetTop;
        const windowBottom = window.scrollY + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // If at the very bottom or inside contact section
        if (windowBottom >= documentHeight - 50 || scrollPosition >= contactTop) {
          setActiveSection('contact');
          return;
        }
      }

      // Check if inside ANY part of Services (either 'at-a-glance' or the detailed 'services' block)
      if (servicesEl) {
        const servicesTop = servicesEl.offsetTop;
        const servicesBottom = servicesTop + servicesEl.offsetHeight;

        const previewTop = atAGlanceEl ? atAGlanceEl.offsetTop : servicesTop;
        const previewBottom = atAGlanceEl ? previewTop + atAGlanceEl.offsetHeight : servicesTop;

        if (
          (scrollPosition >= previewTop && scrollPosition < previewBottom) ||
          (scrollPosition >= servicesTop && scrollPosition < servicesBottom)
        ) {
          setActiveSection('services');
          return;
        }
      }

      // Check about
      if (aboutEl) {
        const aboutTop = aboutEl.offsetTop;
        const aboutBottom = aboutTop + aboutEl.offsetHeight;
        if (scrollPosition >= aboutTop && scrollPosition < aboutBottom) {
          setActiveSection('about');
          return;
        }
      }

      // Default back to home
      setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler for mobile & desktop that prevents collapse interruption
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);

    const targetId = href.replace('#', '');
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 z-50 w-full bg-white border-b border-[#9C6B3E]/20"
    >
      <div className="mx-auto flex max-w-[1400px] items-center px-6 py-5 md:px-10 lg:px-16">
        {/* Left: Brand Mark */}
        <div className="flex flex-1 justify-start">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3"
          >
            <img
              src="/tectumlogo.png"
              alt="Tectum Advisory Logo"
              className="h-14 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
        </div>

        {/* Center: Dynamic Desktop Nav Links */}
        <nav className="hidden md:flex items-center justify-center gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {navLinks
              .filter((link) => link.id !== activeSection)
              .map((link) => (
                <motion.a
                  layout="position"
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                    layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="nav-link text-sm font-medium tracking-wide text-[var(--ink)] transition-colors hover:text-[var(--brass)] cursor-pointer"
                >
                  {link.label}
                </motion.a>
              ))}
          </AnimatePresence>
        </nav>

        {/* Right: Desktop CTA & Mobile Toggle Button */}
        <div className="flex flex-1 items-center justify-end">
          <AnimatePresence>
            {activeSection !== 'contact' && (
              <motion.a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="hidden rounded-full border border-[var(--brass)]/40 px-6 py-2.5 text-xs font-medium tracking-wide text-[var(--ink)] transition-all duration-300 hover:bg-[var(--brass)] hover:text-white md:inline-block cursor-pointer"
              >
                Tell Us What You're Building
              </motion.a>
            )}
          </AnimatePresence>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`h-[2px] w-6 bg-black transition-all ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-black transition-all ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-[2px] w-6 bg-black transition-all ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Dynamic Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-[#9C6B3E]/20 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6 text-center">
              <AnimatePresence mode="popLayout">
                {navLinks
                  .filter((link) => link.id !== activeSection)
                  .map((link) => (
                    <motion.a
                      layout="position"
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        opacity: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                        layout: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                      }}
                      className="text-base font-medium tracking-wide text-[var(--ink)] transition-colors hover:text-[var(--brass)] py-2 cursor-pointer"
                    >
                      {link.label}
                    </motion.a>
                  ))}
              </AnimatePresence>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}