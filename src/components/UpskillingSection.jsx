import React from 'react';
import { 
  GraduationCap, 
  ArrowRight, 
  TrendingUp, 
  Award, 
  Building2, 
  BookOpen, 
  Compass, 
  Users, 
  Sparkles, 
  Briefcase, 
  Cpu 
} from 'lucide-react';

export default function UpskillingSection({ onJoinNetwork, onRequestTalent }) {
  const pillars = [
    {
      title: 'Technical Upskilling',
      desc: 'Bridging traditional electrical and mechanical skills into modern photovoltaic systems, battery storage (BESS), and EVSE hardware.',
      icon: Cpu,
      color: 'emerald'
    },
    {
      title: 'Industry-Oriented Training',
      desc: 'Curricula engineered around actual field conditions, utility interconnection guidelines, commissioning protocols, and safety standards.',
      icon: BookOpen,
      color: 'blue'
    },
    {
      title: 'Certification Pathways',
      desc: 'Assisting candidates in securing recognized credentials (such as NABCEP, EVITP, state journeyman verifications, and OSHA-30).',
      icon: Award,
      color: 'solar'
    },
    {
      title: 'Career-Transition Support',
      desc: 'Guiding oil & gas, conventional utility, and commercial tradespeople through customized pathways into high-growth clean-tech sectors.',
      icon: TrendingUp,
      color: 'emerald'
    },
    {
      title: 'Employer-Aligned Skill Development',
      desc: 'Collaborating directly with clean energy developers to build bespoke talent cohorts trained on specific proprietary equipment.',
      icon: Building2,
      color: 'blue'
    },
    {
      title: 'Continuing Professional Development',
      desc: 'Ensuring existing field personnel stay up-to-date with emerging DC fast-charging standards, bidirectional V2G, and microgrid controls.',
      icon: GraduationCap,
      color: 'solar'
    }
  ];

  const partners = [
    { name: 'Renewable-Energy Companies', desc: 'Solar developers & wind IPPs' },
    { name: 'EV Charging Operators', desc: 'CPOs & fleet charging pioneers' },
    { name: 'Engineering & EPC Firms', desc: 'Turnkey clean infrastructure contractors' },
    { name: 'Technical Institutions & Universities', desc: 'Academic & technical research academies' },
    { name: 'Certification Organizations', desc: 'Accredited safety & trade bodies' },
    { name: 'Government & Industry Bodies', desc: 'Workforce development initiatives' },
  ];

  return (
    <section id="upskilling" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Human Capital Evolution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
            Workforce Upskilling &amp; <span className="text-gradient-green">Career Transition</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            The transition to clean energy is fundamentally a transition in the workforce. Professionals with existing technical and electrical backgrounds possess valuable foundations that can be rapidly accelerated into high-demand green-technology roles.
          </p>
        </div>

        {/* 6-Pillar Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const isBlue = pillar.color === 'blue';
            const isSolar = pillar.color === 'solar';

            const bgIcon = isBlue ? 'bg-blue-50 text-gestss-blue-700 border-blue-200' : isSolar ? 'bg-amber-50 text-gestss-solar-600 border-amber-200' : 'bg-emerald-50 text-gestss-green-700 border-emerald-200';
            const numBg = isBlue ? 'text-blue-200' : isSolar ? 'text-amber-200' : 'text-emerald-200';

            return (
              <div
                key={pillar.title}
                className="glass-card p-8 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl border ${bgIcon} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-2xl font-black font-display ${numBg}`}>
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-gestss-green-900 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-gestss-green-800">
                  <span>Structured Pipeline</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Strategic Partnerships Section */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-slate-200">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-gestss-blue-900 text-xs font-bold uppercase tracking-wider mb-2">
                <Users className="w-3.5 h-3.5" />
                Ecosystem Collaboration
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
                Strategic Partnerships Across the Green Ecosystem
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Building a future-ready green workforce requires collaboration across industry, academia, training, and workforce development ecosystems.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={onRequestTalent}
                className="px-6 py-3 rounded-full text-xs font-bold text-white bg-gestss-blue-900 hover:bg-gestss-blue-800 shadow-md transition-all flex items-center gap-2"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center hover:bg-emerald-50/50 hover:border-emerald-300 transition-all flex flex-col justify-center"
              >
                <h4 className="font-bold text-xs text-slate-800 line-clamp-2">
                  {partner.name}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1">
                  {partner.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
