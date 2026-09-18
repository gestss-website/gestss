import React from 'react';
import { Building2, UserCheck, ArrowRight, Clock, Users, Sparkles } from 'lucide-react';

export default function StakeholdersSection({ onRequestTalent, onJoinNetwork }) {
  return (
    <section id="stakeholders" className="py-12 lg:py-16 bg-white relative overflow-hidden border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gestss-green-700" />
            Tailored Engagement
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Built for <span className="text-gradient-green">Employers &amp; Professionals</span>
          </h2>
        </div>

        {/* Dual Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* 1. For Employers Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white shadow-2xl flex flex-col justify-between relative overflow-hidden border border-slate-800 group">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-400 flex items-center justify-center border border-white/10">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  4-Day Shortlist SLA
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                For Employers
              </h3>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                Your projects require specialized talent when it is needed. We help employers build a responsive workforce pipeline aligned with project requirements and changing demand.
              </p>

              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                From workforce consultation and sourcing to screening, matching, and deployment, we provide a structured staffing experience. Our proposed service framework targets a shortlist of qualified candidates within <strong className="text-emerald-400 font-semibold">four business days</strong> for standard job requirements, subject to role complexity, candidate availability, and market conditions.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 relative z-10">
              <button
                onClick={onRequestTalent}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Request Talent</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 2. For Professionals Card */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-gestss-green-100 text-gestss-green-800 flex items-center justify-center">
                  <UserCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gestss-green-900 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  Talent Network
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900">
                For Professionals
              </h3>

              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal">
                The green economy is creating opportunities across engineering, installation, maintenance, project management, EV infrastructure, solar energy, renewable power, and technical operations.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our talent network connects professionals with organizations working on the infrastructure and technologies shaping the future of energy. Candidates can share their career interests, technical background, experience, certifications, and preferred areas of work for consideration against suitable opportunities.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80">
              <button
                onClick={onJoinNetwork}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Join Our Talent Network</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
