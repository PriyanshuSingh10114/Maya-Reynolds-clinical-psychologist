'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled || isMenuOpen ? 'bg-[#FAF6F1]' : 'bg-transparent'}
      `}
    >
      <div className="max-w-[var(--spacing-container)] mx-auto px-6 h-[80px] lg:h-[96px] flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="font-inter text-[20px] md:text-[26px] font-[500] tracking-[0.01em] text-[#223614] z-50"
        >
          Dr. Maya Reynolds, PsyD
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12 font-inter text-[15px] font-[500] tracking-[0.06em] text-[#223614] uppercase">
          <Link href="/blog" className="hover:opacity-70 transition-opacity">
            Blog
          </Link>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden z-50 p-2 text-[#223614]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#FAF6F1] transition-transform duration-500 lg:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } flex flex-col items-center justify-center gap-8`}
        >
          <Link
            href="/blog"
            className="font-inter text-2xl font-medium text-[#223614] uppercase tracking-widest"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="font-inter text-2xl font-medium text-[#223614] uppercase tracking-widest"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}
