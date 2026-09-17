import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onRequestTalent, onJoinNetwork }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', href: '#services' },
    { label: 'Approach', href: '#approach' },
    { label: 'Talent', href: '#talent' },
    { label: 'Employers', href: '#employers' },
    { label: 'Why GESTSS', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      {/* Floating Pill Navbar */}
      <nav
        className={`flex items-center gap-1 px-3 py-2 rounded-full transition-all duration-500 ${
          scrolled
            ? 'bg-white/70 backdrop-blur-2xl shadow-lg shadow-black/10 border border-slate-200/60'
            : 'bg-slate-950 shadow-xl border border-slate-800'
        }`}
      >
        {/* Brand: Logo emblem + Wordmark */}
        <a href="#" className="flex items-center gap-2.5 pl-1.5 pr-3 group">
          <div className="w-9 h-9 rounded-xl overflow-hidden bg-white/10 p-0.5 flex-shrink-0 group-hover:scale-105 transition-transform">
            <img
              src="/LOGO.webp"
              alt="GESTSS Logo"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <div className="hidden sm:block bg-white rounded-lg px-2 py-1">
            <img
              src="/LOGISIDE-NAME.webp"
              alt="GESTSS"
              className="h-5 sm:h-6 object-contain"
            />
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-0.5 px-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-all duration-300 ${scrolled ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onRequestTalent}
          className={`hidden sm:flex items-center gap-1.5 ml-1 px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300 shadow-sm ${scrolled ? 'bg-slate-950 text-white hover:bg-slate-800' : 'bg-white text-slate-950 hover:bg-slate-100'}`}
        >
          <span>Get Started</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 ml-1 rounded-full transition-colors ${scrolled ? 'text-slate-700 hover:text-slate-950 hover:bg-slate-100' : 'text-slate-300 hover:text-white hover:bg-white/10'}`}
          aria-label="Toggle Navigation"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-x-0 top-[72px] z-40 mx-4 mt-1 rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-white/10 shadow-2xl p-5 space-y-2 lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              <span>{link.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-500" />
            </a>
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
