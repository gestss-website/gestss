import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Users2, 
  Binary, 
  Sliders, 
  GraduationCap, 
  HeartHandshake, 
  Shield, 
  Layers 
} from 'lucide-react';

export default function PillarsWhyUs() {
  const pillars = [
    {
      num: '01',
      title: 'Industry Focus',
      desc: '100% dedicated to renewable energy, solar technology, electric mobility, and EV infrastructure. No dilution with unrelated generalist roles.',
      icon: Target,
      color: 'emerald'
    },
    {
      num: '02',
      title: 'Specialized Talent Networks',
      desc: 'Proprietary talent pools built around technical clean-energy disciplines, specialized apprenticeships, and engineering societies.',
      icon: Users2,
      color: 'blue'
    },
    {
      num: '03',
      title: 'Technically Informed Screening',
      desc: 'Technical evaluations conducted with trade-specific criteria, electrical license verifications, and OSHA/safety standards.',
      icon: Binary,
      color: 'solar'
    },
    {
      num: '04',
      title: 'Flexible Staffing Models',
      desc: 'Tailored workforce contracts comprising permanent direct-hire, turnkey project crews, and temp-to-perm evaluations.',
      icon: Sliders,
      color: 'emerald'
    },
    {
      num: '05',
      title: 'Workforce Development',
      desc: 'Active collaboration with training institutes and certification bodies to foster career transitions and upskilling.',
      icon: GraduationCap,
      color: 'blue'
    },
    {
      num: '06',
      title: 'Inclusive Recruitment',
      desc: 'Proactive initiatives to broaden representation, empowering women and underrepresented tradespeople in the green economy.',
      icon: HeartHandshake,
      color: 'solar'
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gestss-green-700" />
            The GESTSS Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
            Why Work <span className="text-gradient-green">With Us?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Our value proposition rests on six foundational pillars designed to help organizations fulfill critical workforce requirements while helping professionals navigate new horizons.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            const isBlue = p.color === 'blue';
            const isSolar = p.color === 'solar';

            const bgIcon = isBlue ? 'bg-blue-50 text-gestss-blue-700' : isSolar ? 'bg-amber-50 text-gestss-solar-600' : 'bg-emerald-50 text-gestss-green-700';

            return (
              <div
                key={p.num}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${bgIcon} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-gestss-green-600">
                      Pillar {p.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-gestss-green-900 transition-colors">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center gap-1.5 text-xs font-semibold text-gestss-green-800">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Institutional Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diversity & Inclusion Spotlight */}
        <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-emerald-50/60 border border-emerald-100/90 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-200/70 text-gestss-green-900 text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5 text-gestss-green-800" />
                Diversity &amp; Inclusion
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
                A Broad, Inclusive Workforce for an Equitable Energy Future
              </h3>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                A sustainable energy transition must be an inclusive one. We actively implement recruitment practices that expand access to high-paying clean-energy careers for women, underrepresented demographic groups, emerging technical talent, and tradespeople transitioning out of sunsetting industries.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm">
                Our objective is to foster an industry environment where varied perspectives and lived experiences can actively shape the global expansion of clean-energy infrastructure.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-emerald-200 shadow-sm space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gestss-green-900">Our Pillars of Equity:</h4>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gestss-green-600" />
                  <span>Expanding women in clean-tech trade careers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gestss-green-600" />
                  <span>Subsidized trade &amp; safety certification access</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gestss-green-600" />
                  <span>Fair-chance transitioning for legacy energy workers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gestss-green-600" />
                  <span>Inclusive hiring guidelines for partner employers</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Our Commitment Banner */}
        <div className="mt-8 p-8 rounded-3xl bg-slate-900 text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-gestss-solar-400">Our Core Commitment</span>
            <h4 className="text-xl sm:text-2xl font-bold font-display text-white mt-1">
              "Responsiveness, Professional Standards &amp; Long-Term Relationships."
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Our goal is not simply to fill open headcount, but to understand the technical challenge behind each requirement and develop a solution that supports both organizational objectives and human professional growth.
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 text-xs font-bold text-emerald-300 text-center">
              100% Focused on Green Technology
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
