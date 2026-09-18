import React from 'react';
import { 
  GraduationCap, 
  Cpu, 
  BookOpen, 
  Award, 
  Compass, 
  Briefcase, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function WorkforceUpskillingSection({ onRequestTalent, onJoinNetwork }) {
  const pathways = [
    {
      title: 'Technical Upskilling',
      desc: 'Building additional technical capabilities for emerging green-technology roles.',
      icon: Cpu,
      color: 'emerald'
    },
    {
      title: 'Industry-Oriented Training',
      desc: 'Supporting practical training aligned with the requirements of the green economy.',
      icon: BookOpen,
      color: 'blue'
    },
    {
      title: 'Certification Pathways',
      desc: 'Developing pathways for relevant industry knowledge, training, and certification.',
      icon: Award,
      color: 'amber'
    },
    {
      title: 'Career Transition Support',
      desc: 'Helping professionals connect their existing skills with emerging clean-energy opportunities.',
      icon: Compass,
      color: 'indigo'
    },
    {
      title: 'Employer-Aligned Skill Development',
      desc: 'Strengthening the connection between workforce skills and employer requirements.',
      icon: Briefcase,
      color: 'emerald'
    },
    {
      title: 'Continuing Professional Development',
      desc: 'Supporting ongoing development as clean-energy technologies and workforce requirements evolve.',
      icon: TrendingUp,
      color: 'blue'
    }
  ];

  return (
    <section id="upskilling" className="py-12 lg:py-16 bg-white relative overflow-hidden border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-gestss-green-700" />
            Workforce Transformation
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
            Workforce Upskilling &amp; Career Transition
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Professionals with existing technical and electrical experience may require additional industry-specific knowledge, training, or certification pathways to move into emerging green-technology roles.
          </p>
        </div>

        {/* 6 Precise Pathways Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((item, idx) => {
            const Icon = item.icon;
            const isBlue = item.color === 'blue';
            const isAmber = item.color === 'amber';
            const isIndigo = item.color === 'indigo';

            const iconBg = isBlue 
              ? 'bg-blue-50 text-gestss-blue-700' 
              : isAmber 
              ? 'bg-amber-50 text-amber-700' 
              : isIndigo 
              ? 'bg-indigo-50 text-indigo-700' 
              : 'bg-emerald-50 text-gestss-green-700';

            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black text-slate-300 group-hover:text-emerald-600 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-slate-900 group-hover:text-gestss-green-900 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-gestss-green-800">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Practical Pathway</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Our Focus Banner */}
        <div className="mt-12 p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded-full border border-emerald-500/30">
              Our Focus
            </span>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed pt-1">
              We aim to collaborate with technical institutions, universities, training organizations, and relevant certification bodies to develop practical pathways for workforce transition and upskilling.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onJoinNetwork}
              className="px-6 py-3 rounded-full text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md flex items-center gap-2"
            >
              <span>Explore Pathways</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
