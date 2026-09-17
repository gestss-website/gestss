import React from 'react';
import { 
  CheckCircle2, 
  Search, 
  UserCheck, 
  Clock, 
  ShieldAlert, 
  ShieldCheck, 
  FileCheck2, 
  Award, 
  Zap, 
  Layers 
} from 'lucide-react';

export default function ProcessApproach({ onRequestTalent }) {
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
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
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
        </div>

        {/* 4-Step Process Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="relative p-7 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
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

        {/* Quality, Safety & Compliance Deep Dive */}
        <div className="mt-14 rounded-3xl bg-gradient-to-br from-gestss-green-950 via-slate-900 to-gestss-blue-950 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gestss-green-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gestss-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gestss-solar-500/20 text-gestss-solar-400 border border-gestss-solar-400/30 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                Zero-Compromise Standards
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-white">
                Quality, Safety &amp; Compliance Framework
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Technical staffing for renewable-energy and EV-infrastructure projects requires strict attention to qualifications, workplace safety, and compliance.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our recruitment framework considers technical qualifications, relevant experience, certifications, licensing where applicable, safety requirements, background verification, and client-specific compliance standards.
              </p>

              <div className="pt-2 text-xs text-emerald-300 bg-emerald-950/60 p-4 rounded-xl border border-emerald-500/30">
                <strong>Jurisdiction-Specific Verification:</strong> For positions involving high-voltage electrical infrastructure or specialized EVSE hardware, licensing and certifications are actively verified against local and national statutory regulations prior to site mobilization.
              </div>
            </div>

            {/* Compliance Matrix Checklist */}
            <div className="lg:col-span-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 space-y-3.5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400 pb-2 border-b border-white/10 flex items-center gap-2">
                <FileCheck2 className="w-4 h-4" />
                Vetting Safeguards Included:
              </h4>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gestss-green-500/30 text-gestss-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-200">
                  Technical competency evaluations &amp; practical trade testing
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gestss-green-500/30 text-gestss-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-200">
                  Electrical licenses &amp; specialized EVSE certifications check
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gestss-green-500/30 text-gestss-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-200">
                  OSHA, NFPA 70E, and high-voltage site safety standards
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gestss-green-500/30 text-gestss-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-200">
                  Full background check, identity audit &amp; credential validation
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gestss-green-500/30 text-gestss-green-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs sm:text-sm text-slate-200">
                  Client-specific standard operating procedure (SOP) onboarding
                </span>
              </div>

              <div className="pt-3">
                <button
                  onClick={onRequestTalent}
                  className="w-full py-2.5 text-center text-xs font-bold text-slate-900 bg-gestss-solar-400 hover:bg-gestss-solar-300 rounded-xl transition-all shadow-md"
                >
                  Request Pre-Vetted Candidates
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
