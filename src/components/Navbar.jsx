import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onRequestTalent, onJoinNetwork }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ease-out ${
        scrolled
          ? 'pt-3 sm:pt-4 px-4'
          : 'pt-3 sm:pt-5 px-4 sm:px-8'
      }`}
    >
      {/* Animated Navbar: Expanded full-width at top, compressed pill with border on scroll */}
      <nav
        className={`flex items-center justify-between transition-all duration-500 ease-out ${
          scrolled
            ? 'w-full max-w-4xl bg-white/90 backdrop-blur-2xl shadow-xl shadow-slate-900/10 border border-slate-200/80 rounded-full py-1.5 px-3 sm:px-5 gap-3'
            : 'w-full max-w-7xl bg-transparent border border-transparent shadow-none rounded-2xl py-1.5 sm:py-2 px-3 sm:px-6'
        }`}
      >
        {/* Brand: Logo emblem with circular boundary + Wordmark with boundary box + MSME Registration badge */}
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 group">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-white shadow-sm p-0.5 flex-shrink-0 group-hover:scale-105 transition-transform border border-slate-200/60 flex items-center justify-center">
            <img
              src="/LOGO.webp"
              alt="GESTSS Logo"
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <div className="bg-white/95 rounded-lg px-2 sm:px-2.5 py-1 shadow-sm border border-slate-200/50 flex-shrink-0">
            <img
              src="/LOGISIDE-NAME.webp"
              alt="GESTSS"
              className="h-5 sm:h-7 object-contain"
            />
          </div>
          <div className="bg-white/95 rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 shadow-sm border border-slate-200/50 flex-shrink-0 flex items-center" title="MSME Registered Enterprise">
            <img
              src="/MSME.jpg"
              alt="MSME Registered"
              className="h-5 sm:h-7 object-contain"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-shrink-0">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`px-3 py-1.5 text-sm font-semibold rounded-full whitespace-nowrap flex-shrink-0 transition-all duration-300 ${
                  scrolled
                    ? isActive
                      ? 'text-emerald-700 bg-emerald-50 text-[13px]'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 text-[13px]'
                    : isActive
                    ? 'text-emerald-800 bg-white/60 font-bold'
                    : 'text-slate-800 hover:text-gestss-green-800 hover:bg-white/40'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onRequestTalent}
            className={`hidden sm:flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap flex-shrink-0 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 ${
              scrolled
                ? 'bg-slate-950 text-white hover:bg-slate-800'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-full transition-colors ${
              scrolled
                ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100'
                : 'text-slate-900 hover:bg-white/40'
            }`}
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[76px] z-40 mx-4 rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-white/10 shadow-2xl p-5 space-y-2 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </Link>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => { setIsOpen(false); onRequestTalent(); }}
              className="w-full py-3 text-center text-sm font-bold text-slate-950 bg-white rounded-xl"
            >
              Request Talent
            </button>
            <button
              onClick={() => { setIsOpen(false); onJoinNetwork(); }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white border border-white/20 rounded-xl hover:bg-white/5"
            >
              Join Talent Network
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
