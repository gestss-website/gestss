import React, { useState } from 'react';
import { 
  GraduationCap, 
  ArrowRight, 
  ArrowUp,
  ArrowUpRight,
  TrendingUp, 
  Award, 
  Building2, 
  BookOpen, 
  Compass, 
  Users, 
  Sparkles, 
  Briefcase, 
  Cpu,
  CheckCircle2,
  Zap,
  ShieldCheck
} from 'lucide-react';

export default function UpskillingSection({ onJoinNetwork, onRequestTalent }) {
  const [activeTab, setActiveTab] = useState('all');

  const pillars = [
    {
      id: 'tech',
      num: '01',
      title: 'Technical Cross-Skilling',
      subtitle: 'Legacy to Renewable Bridge',
      desc: 'Bridging traditional electrical, mechanical, and industrial skills into high-demand photovoltaic systems, battery energy storage (BESS), and DC fast-charging (EVSE) hardware.',
      icon: Cpu,
      tag: 'BESS & Solar PV',
      metrics: '+45% Earning Potential'
    },
    {
      id: 'field',
      num: '02',
      title: 'Field-Engineered Curriculum',
      subtitle: 'Utility & Interconnection Standards',
      desc: 'Hands-on coursework engineered around actual site commissioning, utility interconnection protocols, NFPA 70E compliance, and medium-voltage safety practices.',
      icon: BookOpen,
      tag: 'Grid Compliance',
      metrics: 'Zero-Accident Record'
    },
    {
      id: 'cert',
      num: '03',
      title: 'Certified Pathway Programs',
      subtitle: 'Recognized Industry Credentials',
      desc: 'Direct sponsorship and preparation for prestigious credentials including NABCEP PV Installation Professional, EVITP Certification, and State Journeyman licenses.',
      icon: Award,
      tag: 'NABCEP & EVITP',
      metrics: '94% First-Time Pass Rate'
    },
    {
      id: 'transition',
      num: '04',
      title: 'Career Transition Advisory',
      subtitle: 'Guidance for Traditional Trades',
      desc: 'Dedicated mentorship guiding oil & gas technicians, commercial electricians, and automotive mechanics through targeted conversion pathways into clean-tech infrastructure.',
      icon: TrendingUp,
      tag: 'Trade Conversion',
      metrics: '3.2-Week Transition Time'
    },
    {
      id: 'employer',
      num: '05',
      title: 'OEM & Employer Cohorts',
      subtitle: 'Bespoke Developer Pipelines',
      desc: 'Collaborating directly with leading clean energy EPCs and OEMs to cultivate tailored talent cohorts pre-trained on specific inverters, trackers, and charging dispensers.',
      icon: Building2,
      tag: 'Custom EPC Cohorts',
      metrics: '100% Placement SLA'
    },
    {
      id: 'continuing',
      num: '06',
      title: 'Continuous Advancement',
      subtitle: 'Next-Gen Technology Training',
      desc: 'Ongoing professional upskilling ensuring field crews master emerging technologies like bidirectional V2G architecture, microgrid automation, and predictive SCADA systems.',
      icon: GraduationCap,
      tag: 'Next-Gen V2G',
      metrics: 'Annual Tech Refresher'
    }
  ];

  const partners = [
    { name: 'Renewable-Energy Companies', desc: 'Solar developers & wind IPPs', tag: 'Generation' },
    { name: 'EV Charging Operators', desc: 'CPOs & fleet charging pioneers', tag: 'Mobility' },
    { name: 'Engineering & EPC Firms', desc: 'Turnkey clean infrastructure contractors', tag: 'Infrastructure' },
    { name: 'Technical Academies', desc: 'Vocational & engineering institutions', tag: 'Education' },
    { name: 'Certification Organizations', desc: 'Accredited safety & trade bodies', tag: 'Licensing' },
    { name: 'Government & State Bodies', desc: 'Workforce grant initiatives', tag: 'Policy' },
  ];

  // Equalizer bar heights for Card 1 (smooth logarithmic taper like reference)
  const barHeights = [100, 94, 88, 81, 72, 64, 56, 48, 41, 35, 30, 26, 23, 21, 20, 20, 20, 20, 20, 20];

  return (
    <section id="upskilling" className="py-20 lg:py-28 bg-[#f8fafc] relative overflow-hidden">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* HERO METRICS SHOWCASE (Matching reference design layout & high-end agency aesthetic) */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
          
          {/* Left Column: Premium Title, Pill Badge, and Vision */}
          <div className="lg:col-span-5 flex flex-col justify-between py-2">
            <div>
              {/* Top Subtitle / Kicker */}
              <div className="text-[11px] sm:text-xs font-black tracking-[0.2em] text-slate-400 uppercase mb-5">
                Workforce Metrics &amp; Transition Benchmarks
              </div>

              {/* Glossy Dark Pill Badge with glowing icon */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 text-white shadow-lg shadow-slate-900/15 border border-slate-800 text-xs font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-200">GESTSS Clean-Tech Academy</span>
              </div>

              {/* Impactful High-Contrast Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black font-display text-slate-950 tracking-tight leading-[1.12]">
                HUMAN CAPITAL EVOLUTION FOR THE RENEWABLE ERA.
              </h2>

              {/* Supportive Explanatory Copy */}
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                The shift to clean power is fundamentally a transition in the workforce. We take the foundation of experienced electrical and mechanical trades, rapidly cross-training them into certified solar, BESS, and EV charging specialists.
              </p>
            </div>

            {/* CTA Actions */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              <button
                onClick={onRequestTalent}
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 shadow-xl shadow-slate-950/20 hover:shadow-2xl transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Partner On Workforce Cohorts</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={onJoinNetwork}
                className="px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200/90 shadow-sm transition-all duration-300"
              >
                Join Candidate Network
              </button>
            </div>
          </div>

          {/* Right Column: 3 Floating Bento Metric Cards (Matching reference screenshot) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-5">
            
            {/* Left Subcolumn: Card 1 (Top) + Card 2 (Bottom) */}
            <div className="sm:col-span-7 flex flex-col gap-5 justify-between">
              
              {/* Card 1: Technical Readiness Index with descending bar chart */}
              <div className="bg-white rounded-[32px] p-7 sm:p-8 border border-slate-200/80 shadow-[0_15px_35px_-5px_rgba(15,23,42,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-500 tracking-wide">
                    Technical Readiness Index
                  </div>
                  <div className="mt-2 text-4xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">
                    99.4%
                  </div>
                  <div className="text-xs font-medium text-slate-400 mt-1">
                    Vetted Candidates: 38,400+
                  </div>
                </div>

                {/* Minimalist descending bar chart graphic (reproduced from reference image) */}
                <div className="mt-7">
                  <div className="flex items-end gap-1.5 h-16 pt-2">
                    {barHeights.map((height, idx) => (
                      <div
                        key={idx}
                        className="flex-1 rounded-full bg-slate-900 transition-all duration-300 hover:bg-emerald-500"
                        style={{
                          height: `${height}%`,
                          opacity: Math.max(0.18, 1 - idx * 0.04)
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Card 2: 97% Placement & Retention with gradient slider */}
              <div className="bg-white rounded-[32px] p-7 sm:p-8 border border-slate-200/80 shadow-[0_15px_35px_-5px_rgba(15,23,42,0.06)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="text-4xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">
                    97%
                  </div>
                  <div className="mt-2 text-sm font-bold text-slate-900">
                    Field Retention &amp; Safety Rating
                  </div>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    Consistent performance and zero lost-time incidents recorded among transitioned trades mobilized across utility-scale projects.
                  </p>
                </div>

                {/* Sleek gradient slider / progress bar (reproduced from reference image) */}
                <div className="mt-6 pt-2">
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden flex">
                    <div className="h-full bg-gradient-to-r from-emerald-500 via-slate-900 to-slate-950 rounded-full w-[84%]" />
                  </div>
                </div>
              </div>

            </div>

            {/* Right Subcolumn: Card 3 (Tall Dark Feature Card with Arrow) */}
            <div className="sm:col-span-5 bg-gradient-to-b from-[#141b24] via-[#0d1219] to-[#06080c] rounded-[32px] p-7 sm:p-8 border border-slate-800 text-white shadow-2xl relative overflow-hidden flex flex-col justify-between group">
              
              {/* Subtle ambient light reflections */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-400/5 rounded-full blur-2xl pointer-events-none" />

              {/* Top: Large Minimalist Champagne/Gold Arrow */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#e8d5a7] group-hover:scale-110 group-hover:text-emerald-400 transition-all duration-300">
                  <ArrowUp className="w-6 h-6" strokeWidth={2.5} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2.5 py-1 rounded-full">
                  Fast-Track
                </span>
              </div>

              {/* Center / Body Metric */}
              <div className="relative z-10 my-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#dfcaa0]">
                  Career Velocity Index
                </div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
                    3.5x
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">
                    / faster placement
                  </span>
                </div>
              </div>

              {/* Bottom Description */}
              <div className="relative z-10">
                <p className="text-xs text-slate-400 leading-relaxed">
                  More specialized technicians mobilized into EVSE, Solar, and BESS roles through direct industry credential pathways.
                </p>
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 font-semibold">
                  <span>Explore Pathways</span>
                  <ArrowUpRight className="w-4 h-4 text-[#dfcaa0] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 6-PILLAR WORKFORCE TRANSITION FRAMEWORK (Bento Card Grid) */}
        {/* ========================================================================= */}
        <div className="mt-20 lg:mt-28">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Transition Curriculum
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900 tracking-tight">
                6 Pillars of Clean-Tech Workforce Enablement
              </h3>
            </div>
            <p className="mt-3 md:mt-0 text-sm text-slate-500 max-w-md">
              Engineered in sync with clean energy developers, EPC contractors, and OEM standards for immediate job readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-white rounded-[28px] p-8 border border-slate-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center group-hover:bg-emerald-600 transition-colors shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-black font-mono text-slate-400 bg-slate-50 border border-slate-200 px-2.5 py-1 rounded-full">
                        {pillar.num}
                      </span>
                    </div>

                    <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                      {pillar.tag}
                    </div>

                    <h4 className="text-xl font-black font-display text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-700">
                      {pillar.metrics}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
                      Learn Track <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* STRATEGIC ECOSYSTEM PARTNERSHIPS */}
        {/* ========================================================================= */}
        <div className="mt-16 bg-white rounded-[32px] p-8 sm:p-12 border border-slate-200/90 shadow-[0_15px_35px_-5px_rgba(15,23,42,0.05)]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-slate-200/80">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-gestss-blue-900 text-xs font-bold uppercase tracking-wider mb-3">
                <Users className="w-3.5 h-3.5" />
                Collaborative Ecosystem
              </div>
              <h3 className="text-2xl sm:text-3xl font-black font-display text-slate-900 tracking-tight">
                Strategic Partnerships Across the Green Value Chain
              </h3>
              <p className="text-slate-600 text-sm sm:text-base mt-2">
                Accelerating human capital by uniting equipment manufacturers, utility contractors, and workforce development agencies.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={onRequestTalent}
                className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-slate-950 hover:bg-slate-800 shadow-lg shadow-slate-950/20 transition-all flex items-center gap-2"
              >
                <span>Initiate Cohort Partnership</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center hover:bg-white hover:border-emerald-400 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className="inline-block text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded-full mb-2">
                    {partner.tag}
                  </span>
                  <h4 className="font-bold text-xs text-slate-900 line-clamp-2">
                    {partner.name}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 line-clamp-2">
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
