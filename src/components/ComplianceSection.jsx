import React from 'react';
import { ShieldCheck, CheckCircle2, FileCheck, Zap } from 'lucide-react';

export default function ComplianceSection({ onRequestTalent }) {
  return (
    <section id="compliance" className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Quality, Safety &amp; Compliance
          </h2>
        </div>

        {/* 2 Strategic Cards side-by-side on mobile & desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Recruitment Framework */}
          <div className="p-3.5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-50 text-gestss-green-700 flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-105 transition-transform">
                <FileCheck className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              
              <span className="text-xs font-bold uppercase tracking-wider text-gestss-green-800 bg-emerald-50 px-2.5 py-1 rounded-md mb-2 sm:mb-3 inline-block">
                Recruitment Framework
              </span>

              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed font-normal mt-2">
                Our recruitment framework considers the requirements of each role and project, including technical qualifications, relevant experience, certifications, licensing where applicable, safety requirements, background verification, and client-specific compliance standards.
              </p>
            </div>

            <div className="mt-4 sm:mt-8 pt-2.5 sm:pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 sm:gap-2 text-xs text-slate-600">
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-50 border border-slate-200 font-medium">Technical Qualifications</span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-50 border border-slate-200 font-medium">Background Verification</span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-50 border border-slate-200 font-medium">Safety Standards</span>
            </div>
          </div>

          {/* Card 2: Electrical & EV Infrastructure Verification */}
          <div className="p-3.5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 text-gestss-blue-700 flex items-center justify-center mb-3 sm:mb-6 group-hover:scale-105 transition-transform">
                <Zap className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>

              <span className="text-xs font-bold uppercase tracking-wider text-gestss-blue-800 bg-blue-50 px-2.5 py-1 rounded-md mb-2 sm:mb-3 inline-block">
                Electrical &amp; EV Technologies
              </span>

              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed font-normal mt-2">
                For electrical infrastructure and specialized EV technologies, certification and licensing requirements are verified against the applicable role and local regulatory framework before deployment.
              </p>
            </div>

            <div className="mt-4 sm:mt-8 pt-2.5 sm:pt-4 border-t border-slate-100 flex flex-wrap gap-1.5 sm:gap-2 text-xs text-slate-600">
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-50 border border-slate-200 font-medium">Local Regulatory Framework</span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-50 border border-slate-200 font-medium">Verified Pre-Deployment</span>
              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-slate-50 border border-slate-200 font-medium">Licensing Compliance</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
