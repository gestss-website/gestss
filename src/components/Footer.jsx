import React from 'react';
import { ArrowUp, Heart, ShieldCheck, Zap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onRequestTalent, onJoinNetwork }) {
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

        {/* Multi-column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-slate-800 text-xs">
          
          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-4">Core Solutions</h5>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Specialized Green-Energy Recruitment</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">EV Infrastructure Workforce Solutions</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Solar &amp; Renewable-Energy Staffing</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Flexible Staffing Models</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Turnkey Commissioning Crews</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-4">Talent Disciplines</h5>
            <ul className="space-y-2.5">
              <li><a href="#talent" className="hover:text-emerald-400 transition-colors">Solar PV Installation &amp; O&amp;M</a></li>
              <li><a href="#talent" className="hover:text-emerald-400 transition-colors">EVSE Level 2 &amp; DCFC Technicians</a></li>
              <li><a href="#talent" className="hover:text-emerald-400 transition-colors">Renewable &amp; Electrical Engineering</a></li>
              <li><a href="#talent" className="hover:text-emerald-400 transition-colors">Grid Integration &amp; Substation</a></li>
              <li><a href="#talent" className="hover:text-emerald-400 transition-colors">Site Surveyors &amp; Drone Mapping</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-4">Workforce Ecosystem</h5>
            <ul className="space-y-2.5">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us &amp; Our Vision</a></li>
              <li><a href="#approach" className="hover:text-emerald-400 transition-colors">Understanding Before Matching</a></li>
              <li><a href="#approach" className="hover:text-emerald-400 transition-colors">Quality, Safety &amp; Compliance</a></li>
              <li><a href="#upskilling" className="hover:text-emerald-400 transition-colors">Career Transitions &amp; Upskilling</a></li>
              <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Diversity &amp; Inclusive Hiring</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-white uppercase tracking-wider mb-4">Direct Portals</h5>
            <ul className="space-y-2.5">
              <li><a href="#employers" className="hover:text-emerald-400 transition-colors">For Clean Energy Employers</a></li>
              <li><a href="#candidates" className="hover:text-emerald-400 transition-colors">For Professionals &amp; Technicians</a></li>
              <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">The 6 Value Pillars</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact &amp; MSME Desk</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Staffing FAQs</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Green Energy &amp; Solar Tech Staffing Solution (GESTSS). All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">MSME Registered Enterprise</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
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
