import React from 'react';
import { Building2, UserCheck, Handshake, ArrowRight, Sparkles } from 'lucide-react';

export default function FutureCollaborationSection({ onRequestTalent, onJoinNetwork }) {
  return (
    <section id="collaborate" className="py-14 lg:py-18 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Get Started
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-tight">
            Let's Build the Future Together
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            The future of clean energy will be built by people with the skills, commitment, and expertise to turn technology into infrastructure.
          </p>

          <p className="mt-2 text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
            Whether you are an organization, a professional, or an institution, connect with opportunities shaping tomorrow.
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          
          {/* Card 1: Request Talent */}
          <div 
            onClick={onRequestTalent}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-emerald-500/30">
                <Building2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2 group-hover:text-emerald-300 transition-colors">
                Request Talent
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Have a workforce requirement?
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-emerald-400 group-hover:text-emerald-300 group-hover:translate-x-1 transition-all">
                <span>Request Talent</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 2: Join Our Talent Network */}
          <div 
            onClick={onJoinNetwork}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-blue-500/30">
                <UserCheck className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2 group-hover:text-blue-300 transition-colors">
                Join Our Talent Network
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Looking for your next opportunity?
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all">
                <span>Join Our Talent Network</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

          {/* Card 3: Partner With Us */}
          <div 
            onClick={onRequestTalent}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-amber-400/50 hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-xl"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-amber-500/30">
                <Handshake className="w-6 h-6" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-2 group-hover:text-amber-300 transition-colors">
                Partner With Us
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Interested in workforce collaboration?
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/10">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 group-hover:text-amber-300 group-hover:translate-x-1 transition-all">
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
