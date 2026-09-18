import React, { useRef } from 'react';
import { Compass, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { AnimatedBeam } from '@/components/magicui/animated-beam';

export default function ProcessApproach({ onRequestTalent }) {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const cardRefs = [card1Ref, card2Ref, card3Ref];

  return (
    <section id="approach" className="py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Animated Beam Container */}
        <div ref={containerRef} className="relative">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Our Methodology
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight">
              Our Approach
            </h2>
            
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Our staffing process is designed around understanding before matching. We identify the role requirements, project environment, technical expectations, location, timeline, and workforce objectives before sourcing suitable candidates.
            </p>
            
            {/* Target Convergence Ref for Beams */}
            <div ref={headingRef} className="w-3 h-3 mx-auto mt-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
            </div>
          </div>

          {/* 3 Core Pillars matching the exact text */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 items-stretch">
            
            {/* Card 1: Understanding Before Matching */}
            <div
              className="relative p-7 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div 
                ref={cardRefs[0]} 
                className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 items-center justify-center z-20"
              >
                <div className="w-5 h-5 rounded-full bg-white border-2 border-emerald-500 shadow-md shadow-emerald-500/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 group-hover:scale-125 transition-transform" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black font-display text-gestss-green-900/40 group-hover:text-gestss-green-600 transition-colors">
                    01
                  </span>
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                </div>

                <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-gestss-green-900 transition-colors">
                  Understanding Before Matching
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                  Our staffing process is designed around understanding before matching. We identify the role requirements, project environment, technical expectations, location, timeline, and workforce objectives before sourcing suitable candidates.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-slate-200 text-slate-600">Role Requirements</span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-slate-200 text-slate-600">Project Environment</span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-slate-200 text-slate-600">Timeline &amp; Objectives</span>
              </div>
            </div>

            {/* Card 2: Comprehensive Candidate Assessment */}
            <div
              className="relative p-7 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div 
                ref={cardRefs[1]} 
                className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 items-center justify-center z-20"
              >
                <div className="w-5 h-5 rounded-full bg-white border-2 border-emerald-500 shadow-md shadow-emerald-500/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 group-hover:scale-125 transition-transform" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black font-display text-gestss-green-900/40 group-hover:text-gestss-green-600 transition-colors">
                    02
                  </span>
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                </div>

                <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-gestss-green-900 transition-colors">
                  Multi-Criteria Candidate Assessment
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                  Candidates are assessed based on their qualifications, relevant experience, technical competencies, certifications, licensing requirements, safety expectations, and other client-defined criteria.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-slate-200 text-slate-600">Technical Competencies</span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-slate-200 text-slate-600">Certifications &amp; Licenses</span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-slate-200 text-slate-600">Safety Expectations</span>
              </div>
            </div>

            {/* Card 3: Role-Specific Evaluation vs Conventional Matching */}
            <div
              className="relative p-7 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div 
                ref={cardRefs[2]} 
                className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 items-center justify-center z-20"
              >
                <div className="w-5 h-5 rounded-full bg-white border-2 border-emerald-500 shadow-md shadow-emerald-500/30 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-emerald-600 group-hover:scale-125 transition-transform" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl font-black font-display text-gestss-green-900/40 group-hover:text-gestss-green-600 transition-colors">
                    03
                  </span>
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold">
                    ✓
                  </div>
                </div>

                <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-gestss-green-900 transition-colors">
                  Role-Specific Evaluation
                </h3>

                <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                  Our objective is to provide organizations with candidates evaluated against the specific requirements of the role rather than relying solely on conventional résumé matching.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-slate-200 text-slate-600">Specific Requirements</span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-slate-200 text-slate-600">Rigorous Evaluation</span>
                <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white border border-slate-200 text-slate-600">Beyond Résumé Matching</span>
              </div>
            </div>

          </div>

          {/* Dynamic Animated Beams connecting 3 cards to the heading node */}
          <div className="hidden lg:block">
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={card1Ref}
              toRef={headingRef}
              curvature={-35}
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
              curvature={0}
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
              curvature={35}
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
