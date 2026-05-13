'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '@/components/Logo';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/a-propos', label: 'À propos' },
];

/* Pages dont le hero est sombre — la navbar reste blanche jusqu'au scroll */
const DARK_HERO_PAGES = ['/services', '/portfolio', '/a-propos', '/contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isDark = DARK_HERO_PAGES.some((p) => pathname === p || pathname.startsWith(p + '/'));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  /* Couleurs dynamiques — fond toujours clair */
  const textColor   = 'text-[#0C0B09]';
  const textHover   = 'hover:text-[#0C0B09]';
  const activeColor = 'text-[#7B1616]';

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 bg-[#FAFAF8]/92 backdrop-blur-xl border-b border-[#0C0B09]/[0.07] shadow-[0_1px_0_rgba(0,0,0,0.04)]"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[60px]">

            {/* ── Logo + Wordmark ── */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
              <Logo size={32} light={false} />
              <div className="hidden sm:block">
                <span className="text-[13px] font-semibold tracking-tight leading-none text-[#0C0B09]">
                  Atelier Digital
                </span>
                <span className="block text-[10px] font-medium tracking-[0.12em] uppercase leading-none mt-0.5 text-[#7B1616]">
                  Genève
                </span>
              </div>
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 ${
                      isActive ? activeColor : `${textColor} ${textHover} opacity-80 hover:opacity-100`
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0.5 left-3.5 right-3.5 h-px bg-[#7B1616] rounded-full"
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ── CTA + Mobile toggle ── */}
            <div className="flex items-center gap-3">
              {/* CTA desktop */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-1.5 text-[12.5px] font-semibold px-4 py-2 rounded-full bg-[#0C0B09] text-white hover:bg-[#1A1917] transition-all duration-200"
              >
                Devis gratuit
                <svg className="w-3 h-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden p-2 rounded-lg text-[#0C0B09] hover:bg-black/5 transition-colors duration-200"
                aria-label="Menu"
                aria-expanded={mobileOpen}
              >
                <div className="w-5 flex flex-col gap-[5px]">
                  <motion.span
                    animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="block h-[1.5px] bg-current rounded-full"
                  />
                  <motion.span
                    animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                    className="block h-[1.5px] bg-current rounded-full"
                  />
                  <motion.span
                    animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="block h-[1.5px] bg-current rounded-full"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#FAFAF8]/96 backdrop-blur-xl border-b border-[#0C0B09]/[0.07] md:hidden"
          >
            <nav className="max-w-7xl mx-auto px-5 py-5 flex flex-col gap-1">
              {[{ href: '/', label: 'Accueil' }, ...navLinks].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-3 text-[15px] font-medium rounded-xl transition-colors duration-150 ${
                    pathname === link.href
                      ? 'text-[#7B1616] bg-[#7B1616]/6'
                      : 'text-[#0C0B09] hover:bg-black/4'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-1 border-t border-[#0C0B09]/[0.07]">
                <Link
                  href="/contact"
                  className="block text-center bg-[#0C0B09] text-white text-[14px] font-semibold px-5 py-3 rounded-xl transition-colors hover:bg-[#1A1917]"
                >
                  Demander un devis gratuit
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
