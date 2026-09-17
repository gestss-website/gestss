import React, { useState } from 'react';
import { 
  Building2, 
  UserCheck, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Briefcase, 
  TrendingUp, 
  Sparkles, 
  CheckCircle, 
  Calculator 
} from 'lucide-react';

export default function DualPortals({ onRequestTalent, onJoinNetwork }) {
  const [activeTab, setActiveTab] = useState('employers');

  return (
    <section id="portals" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow meshes */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gestss-green-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gestss-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Navigation Switcher */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex p-1.5 rounded-full bg-slate-800/90 border border-slate-700/80 backdrop-blur-md shadow-lg">
            <button
              onClick={() => setActiveTab('employers')}
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'employers'
                  ? 'bg-gradient-to-r from-gestss-green-700 to-gestss-green-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>For Employers &amp; Developers</span>
            </button>
            <button
              onClick={() => setActiveTab('candidates')}
              className={`px-6 py-3 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'candidates'
                  ? 'bg-gradient-to-r from-gestss-blue-700 to-gestss-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>For Professionals &amp; Technicians</span>
            </button>
          </div>
        </div>

        {/* Tab 1: For Employers */}
        {activeTab === 'employers' && (
          <div id="employers" className="animate-in fade-in duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gestss-green-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                Zero Delays on Installation Schedules
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
                Your Projects Cannot Wait Indefinitely for Specialized Talent.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                Recruitment bottlenecks derail installation schedules, commissioning sign-offs, and critical commercial milestones. Our objective is to establish a responsive, agile workforce pipeline aligned with your project requirements and scalable as demand expands.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700">
                  <div className="text-2xl font-black text-gestss-solar-400">4 Business Days</div>
                  <div className="text-xs font-bold text-slate-200 mt-1">Shortlist Delivery SLA</div>
                  <p className="text-xs text-slate-400 mt-1">Rapid matching for standard technical requirements to keep site timelines on track.</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-800/70 border border-slate-700">
                  <div className="text-2xl font-black text-emerald-400">Turnkey Continuity</div>
                  <div className="text-xs font-bold text-slate-200 mt-1">Contingency Workforce</div>
                  <p className="text-xs text-slate-400 mt-1">Backup manpower reserves ready for immediate deployment during peak commissioning.</p>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-gestss-green-400 flex-shrink-0" />
                  <span>Comprehensive upfront workforce consultation and requirements scoping</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-gestss-green-400 flex-shrink-0" />
                  <span>Role-specific screening with verified licensing and electrical certifications</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle className="w-4 h-4 text-gestss-green-400 flex-shrink-0" />
                  <span>Multi-tier placement: Permanent Direct-Hire, Project Crews &amp; Temp-to-Perm</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onRequestTalent}
                  className="px-8 py-4 rounded-full font-bold text-sm sm:text-base text-slate-950 bg-gestss-solar-400 hover:bg-gestss-solar-300 shadow-xl hover:shadow-glow-solar transition-all duration-300 flex items-center gap-2"
                >
                  <span>Submit Workforce Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Card: Fast Estimator / Benefit Card */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-800/90 border border-slate-700 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-slate-700">
                <div>
                  <h3 className="text-lg font-bold font-display text-white">Employer Deployment Portal</h3>
                  <p className="text-xs text-slate-400">Structured 4-Phase Staffing Journey</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gestss-green-500/20 text-emerald-400 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <div>
                    <h4 className="text-xs font-bold text-white">Discovery Consultation</h4>
                    <p className="text-[11px] text-slate-400">We analyze technical parameters, equipment brands, site location &amp; timeline.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <div>
                    <h4 className="text-xs font-bold text-white">Screening &amp; Trade Evaluation</h4>
                    <p className="text-[11px] text-slate-400">Competency assessment against OSHA, NFPA 70E, NABCEP or EVITP benchmarks.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <div>
                    <h4 className="text-xs font-bold text-white">Target Shortlist in 4 Days</h4>
                    <p className="text-[11px] text-slate-400">Receive vetted dossiers with verified licenses, certifications &amp; availability.</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <div>
                    <h4 className="text-xs font-bold text-white">Seamless Deployment</h4>
                    <p className="text-[11px] text-slate-400">Onboarding coordination, client-specific safety sync, and ongoing support.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <button
                  onClick={onRequestTalent}
                  className="w-full py-3 text-center rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
                >
                  Initiate Workforce Request
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: For Professionals */}
        {activeTab === 'candidates' && (
          <div id="candidates" className="animate-in fade-in duration-300 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" />
                Career Evolution in Clean Energy
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
                Connect Your Capabilities with the Technologies Shaping Tomorrow.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                The green economy is creating unprecedented opportunities across engineering, installation, maintenance, project management, EV infrastructure, solar energy, and grid systems.
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Whether you are an experienced solar technician, a power systems engineer, or an experienced traditional energy worker exploring a transition into green technology, our talent network connects your current skills with meaningful, future-proof roles.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">
                  <div className="text-xs font-bold text-emerald-400">Skill Mapping</div>
                  <div className="text-[11px] text-slate-400 mt-1">Bridge existing electrical &amp; industrial trades into green tech</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">
                  <div className="text-xs font-bold text-blue-400">Top Employers</div>
                  <div className="text-[11px] text-slate-400 mt-1">Direct access to tier-1 solar developers &amp; EV charging operators</div>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-800 border border-slate-700">
                  <div className="text-xs font-bold text-amber-400">Continuous Growth</div>
                  <div className="text-[11px] text-slate-400 mt-1">Pathways for ongoing upskilling and accredited certifications</div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={onJoinNetwork}
                  className="px-8 py-4 rounded-full font-bold text-sm sm:text-base text-white bg-gradient-to-r from-gestss-blue-700 to-gestss-blue-600 hover:from-gestss-blue-600 hover:to-gestss-blue-500 shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <span>Join Our Talent Network</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Card: Candidate Fast Registration Preview */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-800/90 border border-slate-700 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-slate-700">
                <div>
                  <h3 className="text-lg font-bold font-display text-white">Professional Talent Portal</h3>
                  <p className="text-xs text-slate-400">Express Interest in 3 Easy Steps</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60">
                  <h4 className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold flex items-center justify-center">1</span>
                    Profile &amp; Technical Background
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1">Submit your field experience, years in trade, and core technical proficiencies.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60">
                  <h4 className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold flex items-center justify-center">2</span>
                    Certifications &amp; Licenses
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1">Highlight electrical journeyman credentials, NABCEP, EVITP, or engineering degrees.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-700/60">
                  <h4 className="text-xs font-bold text-white flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold flex items-center justify-center">3</span>
                    Opportunity Matching
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-1">Get matched directly to premier clean energy positions aligned with your target location.</p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <button
                  onClick={onJoinNetwork}
                  className="w-full py-3 text-center rounded-xl bg-gestss-blue-700 hover:bg-gestss-blue-600 text-white text-xs font-bold transition-all shadow-md"
                >
                  Register Profile Now
                </button>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
