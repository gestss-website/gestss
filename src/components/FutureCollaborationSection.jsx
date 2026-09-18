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
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tight text-white leading-tight">
            Let's Build the Future Together
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal">
            The future of clean energy will be built by people with the skills, commitment, and expertise to turn technology into infrastructure.
          </p>

          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-slate-400 leading-relaxed font-normal">
            Whether you are an organization, a professional, or an institution, connect with opportunities shaping tomorrow.
          </p>
        </div>

        {/* 3 Interactive Cards - Single Row on Mobile & Compact on Desktop */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-6 max-w-4xl mx-auto">
          
          {/* Card 1: Request Talent */}
          <div 
            onClick={onRequestTalent}
            className="p-2.5 xs:p-3 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-emerald-400/60 hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-lg"
          >
            <div>
              <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2 sm:mb-3.5 group-hover:scale-105 transition-transform border border-emerald-500/30">
                <Building2 className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
              </div>

              <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold font-display text-white group-hover:text-emerald-300 transition-colors leading-tight">
                Request Talent
              </h3>

              <p className="text-[10px] xs:text-[11px] sm:text-xs text-slate-300 mt-1 leading-snug">
                Workforce requirement?
              </p>
            </div>

            <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs font-bold text-emerald-400 group-hover:text-emerald-300">
              <span className="hidden sm:inline">Connect</span>
              <span className="sm:hidden text-[10px]">Open</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Join Our Talent Network */}
          <div 
            onClick={onJoinNetwork}
            className="p-2.5 xs:p-3 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/60 hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-lg"
          >
            <div>
              <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-2 sm:mb-3.5 group-hover:scale-105 transition-transform border border-blue-500/30">
                <UserCheck className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
              </div>

              <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold font-display text-white group-hover:text-blue-300 transition-colors leading-tight">
                Join Network
              </h3>

              <p className="text-[10px] xs:text-[11px] sm:text-xs text-slate-300 mt-1 leading-snug">
                Next career move?
              </p>
            </div>

            <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs font-bold text-blue-400 group-hover:text-blue-300">
              <span className="hidden sm:inline">Join</span>
              <span className="sm:hidden text-[10px]">Join</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Partner With Us */}
          <div 
            onClick={onRequestTalent}
            className="p-2.5 xs:p-3 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/60 hover:bg-white/10 backdrop-blur-md transition-all duration-300 flex flex-col justify-between cursor-pointer group shadow-lg"
          >
            <div>
              <div className="w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-2 sm:mb-3.5 group-hover:scale-105 transition-transform border border-amber-500/30">
                <Handshake className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
              </div>

              <h3 className="text-xs xs:text-sm sm:text-base lg:text-lg font-bold font-display text-white group-hover:text-amber-300 transition-colors leading-tight">
                Partner With Us
              </h3>

              <p className="text-[10px] xs:text-[11px] sm:text-xs text-slate-300 mt-1 leading-snug">
                Workforce collaboration?
              </p>
            </div>

            <div className="mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t border-white/10 flex items-center justify-between text-[11px] sm:text-xs font-bold text-amber-400 group-hover:text-amber-300">
              <span className="hidden sm:inline">Partner</span>
              <span className="sm:hidden text-[10px]">Team</span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
