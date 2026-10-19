import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Phone, ArrowUpRight, ChevronDown } from 'lucide-react';
import { NamvietLogo } from './NamvietLogo';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
  onOpenQuoteModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const t = translations[lang].nav;

  // Track scroll position for compact header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = ['home', 'about', 'services', 'multimodal', 'solutions', 'process', 'tracking', 'why-us', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.home, id: 'home' },
    { href: '#about', label: t.about, id: 'about' },
    { href: '#services', label: t.services, id: 'services' },
    { href: '#multimodal', label: t.multimodal, id: 'multimodal' },
    { href: '#solutions', label: t.solutions, id: 'solutions' },
    { href: '#tracking', label: t.tracking, id: 'tracking' },
    { href: '#why-us', label: t.whyUs, id: 'why-us' },
    { href: '#contact', label: t.contact, id: 'contact' },
  ];

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top micro bar for corporate info (hidden on mobile, hides on heavy scroll for ultra-clean look) */}
      <div className={`hidden lg:block bg-[#040A14] text-slate-400 text-xs border-b border-slate-800/80 transition-all duration-300 ${
        isScrolled ? 'h-0 opacity-0 overflow-hidden py-0 border-transparent' : 'py-1.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              {t.callUs}
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">
              HQ: Namviet Tower, Pham Hung, Hanoi • Port Offices: Hai Phong, Da Nang, HCMC
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1 text-cyan-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Operations 24/7 Global Dispatch Active
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050D1A]/95 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(2,11,23,0.8)] border-b border-cyan-500/20 py-2.5'
            : 'bg-[#050D1A]/80 backdrop-blur-sm border-b border-slate-800/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo on Left */}
          <a
            href="#home"
            className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg group"
            aria-label="Namviet Logistics Home"
          >
            <NamvietLogo variant="horizontal" size={isScrolled ? 'sm' : 'md'} theme="dark" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map(link => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-3 py-2 text-xs 2xl:text-sm font-semibold tracking-wide transition-all rounded-md cursor-pointer ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 shadow-[0_0_12px_rgba(6,182,212,0.15)]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-lg p-1 text-xs font-bold text-slate-400">
              <button
                id="lang-switch-vi"
                onClick={() => onLanguageChange('VI')}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  lang === 'VI'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm font-extrabold'
                    : 'hover:text-white'
                }`}
              >
                VI
              </button>
              <button
                id="lang-switch-en"
                onClick={() => onLanguageChange('EN')}
                className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
                  lang === 'EN'
                    ? 'bg-cyan-500 text-slate-950 shadow-sm font-extrabold'
                    : 'hover:text-white'
                }`}
              >
                EN
              </button>
            </div>

            {/* Primary CTA: "GET A QUOTE" */}
            <button
              id="navbar-cta-quote"
              onClick={onOpenQuoteModal}
              className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-extrabold text-slate-950 uppercase tracking-wider bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] cursor-pointer group"
            >
              <span>{t.getQuote}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            {/* Mobile Lang switcher */}
            <button
              onClick={() => onLanguageChange(lang === 'EN' ? 'VI' : 'EN')}
              className="px-2 py-1 bg-slate-900 border border-slate-700 text-cyan-400 font-bold text-xs rounded"
            >
              {lang}
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[60px] z-30 bg-[#050D1A] border-b border-cyan-500/30 sm:hidden shadow-2xl overflow-hidden"
          >
            <div className="px-5 py-6 space-y-3">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left py-2.5 px-3 text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 rounded-lg"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-4 border-t border-slate-800 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold rounded-lg text-sm uppercase tracking-wider shadow-lg"
                >
                  <span>{t.getQuote}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <div className="text-center text-xs text-slate-400 pt-2">
                  Hotline: +84 (0) 24 3888 6688
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
