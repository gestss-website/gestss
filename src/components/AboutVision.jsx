import React from 'react';
import { Target, Compass, Sparkles, CheckCircle, ArrowRight, Globe } from 'lucide-react';

export default function AboutVision({ onRequestTalent }) {
  return (
    <section id="about" className="py-20 lg:py-28 relative bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50/50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            About GESTSS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 tracking-tight leading-tight">
            Built for the <span className="text-gradient-green">Green Economy</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            <strong className="text-slate-900">The right skills, the right place, the right time.</strong> We go beyond conventional recruitment to match technical realities with qualified professionals.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Dark Story Card */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-gestss-green-950 to-slate-900 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -right-16 -bottom-16 w-80 h-80 opacity-10 pointer-events-none">
              <img src="/LOGO.webp" alt="" className="w-full h-full object-contain filter invert" />
            </div>

            <div className="space-y-5 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-semibold">
                Understanding Before Matching
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white leading-snug">
                We understand your project before sourcing candidates.
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Technical requirements, project environment, location, timeline — we analyze it all before tapping our specialized clean-energy networks.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-emerald-800/60">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-emerald-100 font-medium">Role-Specific Screening</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-emerald-100 font-medium">Safety &amp; Compliance Verified</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between relative z-10">
              <span className="text-xs text-slate-400">
                <strong className="text-white">Direct, Contract &amp; Temp-to-Perm</strong>
              </span>
              <button onClick={onRequestTalent} className="text-xs font-bold text-gestss-solar-400 hover:text-gestss-solar-300 flex items-center gap-1.5">
                <span>Consult Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Purpose Card */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-emerald-50/60 border border-emerald-100/90 shadow-sm">
            <div>
              <Sparkles className="w-8 h-8 text-gestss-green-700 mb-5" />
              <h3 className="text-2xl font-bold font-display text-slate-900">Our Purpose</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Making specialized talent accessible, recruitment responsive, and career pathways meaningful for the green economy.
              </p>
            </div>

            <div className="mt-6 space-y-3 pt-5 border-t border-emerald-200/60">
              {[
                { num: '01', title: 'Accessible Talent', sub: 'Fast sourcing across niche solar & EV roles' },
                { num: '02', title: 'Responsive Deployment', sub: 'Aligned with rigorous project schedules' },
                { num: '03', title: 'Career Transitions', sub: 'Pathways for workers entering green tech' },
              ].map((item) => (
                <div key={item.num} className="p-3 rounded-2xl bg-white border border-emerald-100/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-gestss-green-100 text-gestss-green-800 flex items-center justify-center font-bold text-xs">{item.num}</div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                    <p className="text-[11px] text-slate-500">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-card-hover transition-all group">
            <Compass className="w-8 h-8 text-gestss-green-700 mb-4 group-hover:scale-110 transition-transform" />
            <div className="inline-block px-3 py-1 rounded-md bg-gestss-green-100/80 text-gestss-green-900 font-bold text-xs uppercase tracking-wider mb-3">Our Vision</div>
            <h3 className="text-xl font-bold font-display text-slate-900">Trusted Global Green Workforce Partner</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              A future where clean-energy businesses access specialized talent efficiently and professionals discover sustainable career opportunities across solar, EV, and renewable sectors.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-card-hover transition-all group">
            <Target className="w-8 h-8 text-gestss-blue-700 mb-4 group-hover:scale-110 transition-transform" />
            <div className="inline-block px-3 py-1 rounded-md bg-gestss-blue-100/80 text-gestss-blue-900 font-bold text-xs uppercase tracking-wider mb-3">Our Mission</div>
            <h3 className="text-xl font-bold font-display text-slate-900">Talent, Technology &amp; Opportunity</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Building specialized networks, supporting workforce development, facilitating career transitions, and delivering flexible staffing for clean-energy organizations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
