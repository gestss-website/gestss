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
import { SmartGridEcosystemArt, EcoCleanTechEcosystemArt } from './CleanEnergyVectorArt';

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
    <section id="partnerships" className="py-10 sm:py-14 lg:py-16 bg-slate-50 relative overflow-hidden border-t border-slate-200/70">
      {/* Domain-specific smart grid ecosystem vector backdrop */}
      <SmartGridEcosystemArt className="absolute top-2 right-1 sm:top-5 sm:right-8 w-40 h-24 sm:w-64 sm:h-38 opacity-40 sm:opacity-45" />
      <EcoCleanTechEcosystemArt className="absolute -bottom-2 -left-2 sm:bottom-3 sm:left-8 w-36 h-22 sm:w-56 sm:h-34 opacity-35 sm:opacity-40" />

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 lg:mb-12 px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Strategic Partnerships
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
            Building a future-ready green workforce through purposeful collaboration across industry and education ecosystems.
          </p>
        </div>

        {/* 8 Square Cards Grid: 4 per line on mobile, all 8 in 1 single line on desktop */}
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-1.5 xs:gap-2 sm:gap-3 lg:gap-3.5 max-w-7xl mx-auto">
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
                className="aspect-square min-h-[86px] sm:min-h-0 rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-400/80 transition-all duration-300 flex flex-col items-center justify-center text-center p-1.5 xs:p-2 sm:p-3 lg:p-3 group cursor-pointer"
              >
                <div className={`w-7 h-7 xs:w-8 xs:h-8 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-lg sm:rounded-xl lg:rounded-2xl ${iconBg} border flex items-center justify-center mb-1 xs:mb-1.5 sm:mb-2 group-hover:scale-110 transition-transform shadow-xs shrink-0`}>
                  <Icon className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                </div>

                <h3 className="text-[9px] xs:text-[10px] sm:text-xs lg:text-[12px] xl:text-[13px] font-bold font-display text-slate-900 group-hover:text-gestss-green-900 transition-colors leading-[1.15] sm:leading-snug px-0.5 max-w-full">
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
