import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onRequestTalent, onJoinNetwork }) {
  const [visitorCount, setVisitorCount] = useState(() => {
    return parseInt(localStorage.getItem('gestss_visitor_count') || '1', 10);
  });

  useEffect(() => {
    const trackVisitor = async () => {
      try {
        const hasVisited = sessionStorage.getItem('gestss_visited_session');
        const endpoint = hasVisited
          ? 'https://countapi.mileshilliard.com/api/v1/get/gestss_platform_official_visitors'
          : 'https://countapi.mileshilliard.com/api/v1/hit/gestss_platform_official_visitors';

        const res = await fetch(endpoint);
        if (res.ok) {
          const data = await res.json();
          if (typeof data.value === 'number') {
            setVisitorCount(data.value);
            localStorage.setItem('gestss_visitor_count', String(data.value));
            sessionStorage.setItem('gestss_visited_session', 'true');
          }
        }
      } catch (err) {
        // Fallback gracefully without breaking UI
        console.warn('Visitor counter offline, using cached value', err);
      }
    };

    trackVisitor();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800 relative overflow-hidden">
      {/* Glow subtle footer elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gestss-green-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gestss-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Section with Brand & Direct Newsletter / CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full p-0.5 bg-white shadow-md flex-shrink-0">
                <img 
                  src="/LOGO.webp" 
                  alt="GESTSS Emblem" 
                  className="w-full h-full object-contain rounded-full" 
                />
              </div>
              <div className="p-1.5 bg-white rounded-lg shadow-sm">
                <img 
                  src="/LOGISIDE-NAME.webp" 
                  alt="GESTSS - Green Energy and Solar Tech Staffing Solution" 
                  className="h-7 object-contain" 
                />
              </div>
            </div>

            <p className="text-sm text-slate-300 max-w-md leading-relaxed">
              Powering the clean-energy transition with evaluated, safety-certified, and project-aligned workforce solutions across Solar PV, EV Infrastructure, Renewable Engineering, and Grid Systems.
            </p>

            {/* MSME Registered Enterprise Official Credential */}
            <div className="pt-1">
              <div className="inline-flex flex-col items-start p-3 sm:p-3.5 bg-white rounded-2xl border border-slate-200/90 shadow-md">
                <img 
                  src="/MSME.jpg" 
                  alt="Ministry of Micro, Small & Medium Enterprises, Government of India" 
                  className="h-11 sm:h-14 w-auto object-contain" 
                />
                <span className="mt-2 text-sm font-bold text-slate-900 tracking-tight">
                  MSME Reg. No. Udyam-UP-04-0055135
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/60 font-semibold">
                MSME Registered
              </span>
              <span className="px-2.5 py-1 rounded-full bg-blue-950 text-blue-300 border border-blue-800/60 font-semibold">
                Technical Screening Standards
              </span>
              <span className="px-2.5 py-1 rounded-full bg-amber-950 text-amber-300 border border-amber-800/60 font-semibold">
                4-Day Shortlist SLA
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col sm:flex-row justify-between gap-6 p-6 rounded-3xl bg-slate-900 border border-slate-800">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-gestss-solar-400">Ready to Mobilize?</span>
              <h4 className="text-lg font-bold text-white">Accelerate Your Project Timelines</h4>
              <p className="text-xs text-slate-400">Request specialized crews or submit your candidate credentials today.</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                onClick={onRequestTalent}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-gestss-solar-400 hover:bg-gestss-solar-300 transition-all shadow-md"
              >
                Request Talent
              </button>
              <button
                onClick={onJoinNetwork}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                Join Network
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span>© {new Date().getFullYear()} Green Energy &amp; Solar Tech Staffing Solution (GESTSS). All Rights Reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {/* Live Visitor Counter Badge */}
            <div 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs shadow-inner"
              title="Real-Time Unique Visitors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-slate-400 font-medium">Visitors:</span>
              <span className="font-mono font-bold text-emerald-400 bg-slate-950 px-2 py-0.5 rounded border border-emerald-500/20 tracking-widest text-[11px]">
                {String(visitorCount).padStart(5, '0')}
              </span>
            </div>

            <span className="text-slate-700 hidden sm:inline">•</span>

            <span className="text-slate-400">MSME Reg. No. Udyam-UP-04-0055135</span>

            <span className="text-slate-700 hidden sm:inline">•</span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
