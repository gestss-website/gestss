import React, { useRef } from 'react';
import { Zap } from 'lucide-react';
import { AnimatedBeam } from '@/components/magicui/animated-beam';

export default function ProcessApproach({ onRequestTalent }) {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const cardRefs = [card1Ref, card2Ref, card3Ref, card4Ref];

  const steps = [
    {
      num: '01',
      title: 'Project & Technical Discovery',
      subtitle: 'Understanding Before Matching',
      desc: 'We begin by identifying role requirements, project environment, technical expectations, location, timeline, and workforce objectives. No generic templates.',
      tags: ['Scope Analysis', 'Site Logistics', 'Technical Criteria']
    },
    {
      num: '02',
      title: 'Specialized Network Sourcing',
      subtitle: 'Niche Clean-Energy Channels',
      desc: 'We tap dedicated renewable energy, EVSE, and electrical engineering networks rather than relying on broad generalist databases or cold job boards.',
      tags: ['Solar PV Engineers', 'EVSE Techs', 'Grid Specialists']
    },
    {
      num: '03',
      title: 'Role-Specific Technical Screening',
      subtitle: 'Competency & Compliance Vetting',
      desc: 'Screening includes assessment of technical competencies, certifications, state licensing, safety expectations, and client-defined operational criteria.',
      tags: ['License Verification', 'OSHA/Safety Check', 'Hands-on Testing']
    },
    {
      num: '04',
      title: 'Rapid Deployment & Continuity',
      subtitle: '4-Day Standard Shortlist SLA',
      desc: 'Targeted delivery of qualified shortlists within 4 business days. Workforce continuity and contingency planning incorporated for critical projects.',
      tags: ['4-Day Shortlist SLA', 'Deployment Support', 'Continuity Planning']
    }
  ];

  return (
    <section id="approach" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Beam Container */}
        <div ref={containerRef} className="relative">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-3.5 h-3.5" />
              Our Structured Framework
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
              Our Approach: <span className="text-gradient-green">Understanding Before Matching</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              The objective is to provide organizations with candidates evaluated against the true technical requirements of the role rather than relying solely on conventional résumé matching.
            </p>
            
            {/* Target Convergence Ref for Beams */}
            <div ref={headingRef} className="w-3 h-3 mx-auto mt-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            </div>
          </div>

          {/* 4-Step Process Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className="relative p-7 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Center Connection Pin where beam originates */}
                <div 
                  ref={cardRefs[idx]} 
                  className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 items-center justify-center z-20"
                >
                  <div className="w-5 h-5 rounded-full bg-white border-2 border-emerald-500 shadow-md shadow-emerald-500/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-600 group-hover:scale-125 transition-transform" />
                  </div>
                </div>

              {/* Number indicator */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black font-display text-gestss-green-900/40 group-hover:text-gestss-green-600 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-gestss-green-700 group-hover:border-gestss-green-300 transition-colors">
                    ✓
                  </div>
                </div>

                <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-gestss-green-900 transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs font-semibold text-gestss-green-700 mt-1 uppercase tracking-wider">
                  {step.subtitle}
                </p>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                {step.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-white border border-slate-200 text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Animated Beams from Magic UI connecting 4 cards to the heading node */}
        <div className="hidden lg:block">
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={card1Ref}
            toRef={headingRef}
            curvature={-50}
            pathColor="#cbd5e1"
            pathOpacity={0.4}
            gradientStartColor="#34d399"
            gradientStopColor="#059669"
            duration={3}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={card2Ref}
            toRef={headingRef}
            curvature={-20}
            pathColor="#cbd5e1"
            pathOpacity={0.4}
            gradientStartColor="#34d399"
            gradientStopColor="#059669"
            duration={3}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={card3Ref}
            toRef={headingRef}
            curvature={20}
            pathColor="#cbd5e1"
            pathOpacity={0.4}
            gradientStartColor="#34d399"
            gradientStopColor="#059669"
            duration={3}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={card4Ref}
            toRef={headingRef}
            curvature={50}
            pathColor="#cbd5e1"
            pathOpacity={0.4}
            gradientStartColor="#34d399"
            gradientStopColor="#059669"
            duration={3}
          />
        </div>

        </div>
      </div>
    </section>
  );
}
