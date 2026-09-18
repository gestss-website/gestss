import React from 'react';
import { 
  Sun, 
  BatteryCharging, 
  Building2, 
  GraduationCap, 
  Award, 
  Landmark, 
  Users2, 
  Handshake,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function StrategicPartnershipsSection({ onRequestTalent }) {
  const partners = [
    {
      title: 'Renewable-Energy Companies',
      desc: 'Collaboration with organizations supporting the clean-energy transition.',
      icon: Sun,
      color: 'emerald'
    },
    {
      title: 'Solar Developers',
      desc: 'Connecting workforce needs with solar-energy development.',
      icon: Sun,
      color: 'amber'
    },
    {
      title: 'EV Charging Networks',
      desc: 'Supporting workforce development across EV charging infrastructure.',
      icon: BatteryCharging,
      color: 'blue'
    },
    {
      title: 'Engineering Firms',
      desc: 'Building connections between technical expertise and industry requirements.',
      icon: Building2,
      color: 'indigo'
    },
    {
      title: 'Universities & Institutions',
      desc: 'Strengthening pathways between education, skills, and employment.',
      icon: GraduationCap,
      color: 'emerald'
    },
    {
      title: 'Training & Certification',
      desc: 'Supporting industry-oriented training and certification pathways.',
      icon: Award,
      color: 'amber'
    },
    {
      title: 'Government & Industry Bodies',
      desc: 'Collaborating to support workforce and clean-energy development.',
      icon: Landmark,
      color: 'blue'
    },
    {
      title: 'Workforce Organizations',
      desc: 'Working together to strengthen access to green-economy opportunities.',
      icon: Users2,
      color: 'indigo'
    }
  ];

  return (
    <section id="partnerships" className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Handshake className="w-3.5 h-3.5 text-gestss-green-700" />
            Ecosystem Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Strategic Partnerships
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
            Building a future-ready green workforce through purposeful collaboration across industry and education ecosystems.
          </p>
        </div>

        {/* Compact, Small Cards Grid (8 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            const isEmerald = partner.color === 'emerald';
            const isBlue = partner.color === 'blue';
            const isAmber = partner.color === 'amber';

            const iconBg = isEmerald 
              ? 'bg-emerald-50 text-gestss-green-700' 
              : isBlue 
              ? 'bg-blue-50 text-gestss-blue-700' 
              : isAmber 
              ? 'bg-amber-50 text-amber-700' 
              : 'bg-indigo-50 text-indigo-700';

            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold font-display text-slate-900 group-hover:text-gestss-green-900 transition-colors leading-snug">
                    {partner.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {partner.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400 group-hover:text-gestss-green-800 transition-colors">
                  <span>Collaborate</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
