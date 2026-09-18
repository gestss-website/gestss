import React from 'react';
import { Sparkles } from 'lucide-react';

export default function ProcessApproach() {
  const approachData = [
    {
      step: '01',
      title: 'Understanding Before Matching',
      desc: 'Our staffing process is designed around understanding before matching. We identify role requirements, project environment, technical expectations, location, timeline, and workforce objectives before sourcing suitable candidates.',
      mobileDesc: 'Identifying role requirements, project environment, technical expectations, timeline, and workforce objectives before sourcing candidates.',
      tags: ['Role Requirements', 'Project Environment', 'Timeline & Objectives'],
    },
    {
      step: '02',
      title: 'Multi-Criteria Candidate Assessment',
      desc: 'Candidates are assessed based on qualifications, relevant experience, technical competencies, certifications, licensing requirements, safety expectations, and other client-defined criteria.',
      mobileDesc: 'Assessing candidates on qualifications, experience, technical competencies, certifications, and client-defined safety standards.',
      tags: ['Technical Competencies', 'Certifications & Licenses', 'Safety Expectations'],
    },
    {
      step: '03',
      title: 'Role-Specific Evaluation',
      desc: 'Our objective is to provide organizations with candidates evaluated against the specific requirements of the role rather than relying solely on conventional résumé matching.',
      mobileDesc: 'Evaluating candidates against specific role requirements rather than relying solely on conventional résumé matching.',
      tags: ['Specific Requirements', 'Rigorous Evaluation', 'Beyond Résumé Matching'],
    },
  ];

  const renderCircle = (item, isCenter = false, isMobile = false) => {
    return (
      <div 
        className={`relative rounded-full aspect-square flex flex-col items-center justify-center text-center bg-white border-2 sm:border-[2.5px] border-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 group z-10 ${
          isMobile
            ? isCenter
              ? 'w-[164px] h-[164px] p-3 border-emerald-700 shadow-emerald-900/15'
              : 'w-[152px] h-[152px] p-2.5 shadow-slate-900/10'
            : isCenter
              ? 'w-[280px] h-[280px] lg:w-[340px] lg:h-[340px] p-6 lg:p-8 border-emerald-600 shadow-emerald-900/15'
              : 'w-[250px] h-[250px] lg:w-[310px] lg:h-[310px] p-5 lg:p-7 shadow-slate-900/10'
        }`}
      >
        {/* Subtle inner dashed ring */}
        <div className="absolute inset-1.5 sm:inset-3 rounded-full border border-dashed border-slate-200 pointer-events-none group-hover:border-emerald-300 transition-colors" />

        {/* Step Number Badge */}
        <div className={`relative z-10 inline-flex items-center justify-center rounded-full font-mono font-bold shadow-sm transition-colors ${
          isMobile
            ? 'w-5 h-5 text-[9px] mb-1 ' + (isCenter ? 'bg-emerald-600 text-white' : 'bg-slate-950 text-white')
            : 'w-8 h-8 sm:w-9 sm:h-9 text-xs mb-2 sm:mb-3 ' + (isCenter ? 'bg-emerald-600 text-white' : 'bg-slate-950 text-white')
        }`}>
          {item.step}
        </div>

        {/* Title */}
        <h3 className={`relative z-10 font-bold font-display text-slate-950 tracking-tight leading-tight ${
          isMobile
            ? 'text-[10px] max-w-[86%]'
            : 'text-base lg:text-lg max-w-[85%] sm:leading-snug'
        }`}>
          {item.title}
        </h3>

        {/* Description (concise on mobile so it stays 100% inside circle without any ellipsis) */}
        <p className={`relative z-10 text-slate-600 font-normal leading-tight sm:leading-relaxed ${
          isMobile
            ? 'mt-0.5 text-[8.5px] max-w-[90%] leading-[1.25]'
            : 'mt-2 sm:mt-2.5 text-xs lg:text-[13px] max-w-[88%]'
        }`}>
          {isMobile ? item.mobileDesc : item.desc}
        </p>

        {/* Tags (visible on desktop) */}
        {!isMobile && (
          <div className="relative z-10 hidden sm:flex flex-wrap justify-center gap-1 sm:gap-1.5 mt-3 lg:mt-4 max-w-[85%]">
            {item.tags.map((tag, i) => (
              <span key={i} className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="approach" className="py-12 lg:py-20 bg-white relative overflow-hidden border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        
        {/* Section Header (matching the top box in user's sketch) */}
        <div className="text-center max-w-3xl mx-auto relative z-10 mb-8 sm:mb-12 px-2 sm:px-0">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            Our Methodology
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Our Approach
          </h2>
          
          <p className="mt-3 sm:mt-4 text-xs sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
            Our staffing process is designed around understanding before matching. We identify the role requirements, project environment, technical expectations, location, timeline, and workforce objectives before sourcing suitable candidates.
          </p>
        </div>

        {/* The 3 Connected Circles (Exact Layout from user drawing) */}
        <div className="relative max-w-6xl mx-auto pb-8 sm:pb-20">
          
          {/* ========================================================================= */}
          {/* DESKTOP VIEW (md and up): 3 Circles with center circle dipped lower down  */}
          {/* ========================================================================= */}
          <div className="hidden md:block relative">
            
            {/* SVG Connecting Curved Hammock Line */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" 
              viewBox="0 0 1000 450" 
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="approachCurveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0f172a" />
                  <stop offset="50%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
              </defs>

              {/* Shadow stroke */}
              <path
                d="M 220,160 Q 360,330 500,340 Q 640,330 780,160"
                stroke="#10b981"
                strokeWidth="4"
                strokeDasharray="8 6"
                fill="none"
                strokeLinecap="round"
                className="opacity-70"
              />
              {/* Solid dark connecting curve matching the hand-drawn sketch */}
              <path
                d="M 220,160 Q 360,330 500,340 Q 640,330 780,160"
                stroke="url(#approachCurveGrad)"
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* 3 Circular Nodes in Grid */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8 items-start relative z-10">
              {/* Circle 1: Top Left (elevated) */}
              <div className="flex justify-center -translate-y-4 lg:-translate-y-6">
                {renderCircle(approachData[0], false, false)}
              </div>

              {/* Circle 2: Center (dipped down lower) */}
              <div className="flex justify-center translate-y-12 lg:translate-y-20">
                {renderCircle(approachData[1], true, false)}
              </div>

              {/* Circle 3: Top Right (elevated) */}
              <div className="flex justify-center -translate-y-4 lg:-translate-y-6">
                {renderCircle(approachData[2], false, false)}
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* MOBILE VIEW (< md): Clean visible connecting lines with 35px diagonal gap  */}
          {/* ========================================================================= */}
          <div className="md:hidden relative w-full max-w-[360px] mx-auto h-[350px] z-10">
            
            {/* Mobile SVG Connecting Curved Arc (clearly visible across the 35px gap) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible" 
              viewBox="0 0 360 350" 
              preserveAspectRatio="none"
            >
              {/* Emerald dashed glow line */}
              <path
                d="M 95,110 Q 130,225 180,240 Q 230,225 265,110"
                stroke="#10b981"
                strokeWidth="4"
                strokeDasharray="6 4"
                fill="none"
                strokeLinecap="round"
                className="opacity-75"
              />
              {/* Solid dark prominent connecting line */}
              <path
                d="M 95,110 Q 130,225 180,240 Q 230,225 265,110"
                stroke="#0f172a"
                strokeWidth="2.8"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Circle 1: Shifted to Left Edge */}
            <div className="absolute left-0 top-0">
              {renderCircle(approachData[0], false, true)}
            </div>

            {/* Circle 3: Shifted to Right Edge */}
            <div className="absolute right-0 top-0">
              {renderCircle(approachData[2], false, true)}
            </div>

            {/* Circle 2: Center Bottom (Positioned at top-[170px] leaving visible 35px gap for connecting lines) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[170px]">
              {renderCircle(approachData[1], true, true)}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
