import React from 'react';
import { Building2, UserCheck, ArrowRight, Clock, Users, Sparkles } from 'lucide-react';

export default function StakeholdersSection({ onRequestTalent, onJoinNetwork }) {
  return (
    <section id="stakeholders" className="py-12 lg:py-16 bg-white relative overflow-hidden border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Built for <span className="text-gradient-green">Employers &amp; Professionals</span>
          </h2>
        </div>

        {/* Dual Cards Grid side-by-side on mobile & desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 items-stretch">
          
          {/* 1. For Employers Card */}
          <div className="p-3.5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-slate-950 text-white shadow-2xl flex flex-col justify-between relative overflow-hidden border border-slate-800 group">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 sm:space-y-6 relative z-10">
              <div className="flex items-center justify-between gap-1">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center border border-white/10 shrink-0">
                  <Building2 className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <span className="text-xs sm:text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-emerald-500/30 flex items-center gap-1 shrink-0">
                  <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>4-Day SLA</span>
                </span>
              </div>

              <h3 className="text-base sm:text-2xl lg:text-3xl font-black font-display text-white">
                For Employers
              </h3>

              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-normal">
                Your projects require specialized talent when it is needed. We help employers build a responsive workforce pipeline aligned with project requirements and changing demand.
              </p>

              <p className="text-sm sm:text-sm lg:text-base text-slate-400 leading-relaxed font-normal">
                From workforce consultation and sourcing to screening, matching, and deployment, we provide a structured staffing experience. Our proposed service framework targets a shortlist of qualified candidates within <strong className="text-emerald-400 font-semibold">four business days</strong> for standard job requirements, subject to role complexity, candidate availability, and market conditions.
              </p>
            </div>

            <div className="mt-4 sm:mt-8 pt-3 sm:pt-6 border-t border-slate-800 relative z-10">
              <button
                onClick={onRequestTalent}
                className="w-full py-2.5 sm:py-3.5 px-3 sm:px-8 rounded-xl sm:rounded-full font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-1.5 shadow-lg"
              >
                <span>Request Talent</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          {/* 2. For Professionals Card */}
          <div className="p-3.5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/90 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-3 sm:space-y-6">
              <div className="flex items-center justify-between gap-1">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gestss-green-100 text-gestss-green-800 flex items-center justify-center shrink-0">
                  <UserCheck className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <span className="text-xs sm:text-[11px] font-bold uppercase tracking-wider text-gestss-green-900 bg-emerald-100 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-emerald-200 flex items-center gap-1 shrink-0">
                  <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Talent Network</span>
                </span>
              </div>

              <h3 className="text-base sm:text-2xl lg:text-3xl font-black font-display text-slate-900">
                For Professionals
              </h3>

              <p className="text-sm sm:text-base lg:text-lg text-slate-800 leading-relaxed font-normal">
                The green economy is creating opportunities across engineering, installation, maintenance, project management, EV infrastructure, solar energy, renewable power, and technical operations.
              </p>

              <p className="text-sm sm:text-sm lg:text-base text-slate-600 leading-relaxed font-normal">
                Our talent network connects professionals with organizations working on the infrastructure and technologies shaping the future of energy. Candidates can share their career interests, technical background, experience, certifications, and preferred areas of work for consideration against suitable opportunities.
              </p>
            </div>

            <div className="mt-4 sm:mt-8 pt-3 sm:pt-6 border-t border-slate-200/80">
              <button
                onClick={onJoinNetwork}
                className="w-full py-2.5 sm:py-3.5 px-3 sm:px-8 rounded-xl sm:rounded-full font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5 shadow-md"
              >
                <span className="hidden sm:inline">Join Our Talent Network</span>
                <span className="sm:hidden">Join Network</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
