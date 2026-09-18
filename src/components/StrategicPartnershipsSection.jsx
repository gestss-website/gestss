import React from 'react';
import { 
  Zap, 
  Sun, 
  BatteryCharging, 
  Building2, 
  GraduationCap, 
  Award, 
  Landmark, 
  Users2 
} from 'lucide-react';

export default function StrategicPartnershipsSection({ onRequestTalent }) {
  const partners = [
    {
      title: 'Renewable-Energy Companies',
      icon: Zap,
      color: 'emerald'
    },
    {
      title: 'Solar Developers',
      icon: Sun,
      color: 'amber'
    },
    {
      title: 'EV Charging Networks',
      icon: BatteryCharging,
      color: 'blue'
    },
    {
      title: 'Engineering Firms',
      icon: Building2,
      color: 'indigo'
    },
    {
      title: 'Universities & Institutions',
      icon: GraduationCap,
      color: 'emerald'
    },
    {
      title: 'Training & Certification',
      icon: Award,
      color: 'amber'
    },
    {
      title: 'Government & Industry Bodies',
      icon: Landmark,
      color: 'blue'
    },
    {
      title: 'Workforce Organizations',
      icon: Users2,
      color: 'indigo'
    }
  ];

  return (
    <section id="partnerships" className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Strategic Partnerships
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
            Building a future-ready green workforce through purposeful collaboration across industry and education ecosystems.
          </p>
        </div>

        {/* Small Square Cards Grid (8 Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-5xl mx-auto">
          {partners.map((partner, idx) => {
            const Icon = partner.icon;
            const isEmerald = partner.color === 'emerald';
            const isBlue = partner.color === 'blue';
            const isAmber = partner.color === 'amber';

            const iconBg = isEmerald 
              ? 'bg-emerald-50 text-gestss-green-700 border-emerald-200/60' 
              : isBlue 
              ? 'bg-blue-50 text-gestss-blue-700 border-blue-200/60' 
              : isAmber 
              ? 'bg-amber-50 text-amber-700 border-amber-200/60' 
              : 'bg-indigo-50 text-indigo-700 border-indigo-200/60';

            return (
              <div
                key={idx}
                className="aspect-square rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-400/80 transition-all duration-300 flex flex-col items-center justify-center text-center p-3.5 sm:p-5 group cursor-pointer"
              >
                <div className={`w-11 h-11 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl ${iconBg} border flex items-center justify-center mb-2.5 sm:mb-3.5 group-hover:scale-110 transition-transform shadow-xs`}>
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <h3 className="text-xs sm:text-sm md:text-base font-bold font-display text-slate-900 group-hover:text-gestss-green-900 transition-colors leading-snug px-1 max-w-[95%]">
                  {partner.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
