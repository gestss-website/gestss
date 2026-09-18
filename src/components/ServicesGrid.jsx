import React from 'react';
import { Zap, BatteryCharging, Sun, Layers, ArrowRight, Sparkles } from 'lucide-react';

export default function ServicesGrid({ onRequestTalent }) {

  const services = [
    {
      id: 'specialized-recruitment',
      category: 'recruitment',
      icon: Zap,
      accentColor: 'emerald',
      title: 'Specialized Green-Energy Recruitment',
      description: 'Recruitment across technical, engineering, project-management, operational, and administrative functions within renewable energy and clean technology.',
      badge: 'Recruitment',
      image: '/services/service-recruitment.jpg'
    },
    {
      id: 'ev-infrastructure',
      category: 'ev',
      icon: BatteryCharging,
      accentColor: 'blue',
      title: 'EV Infrastructure Workforce Solutions',
      description: 'Staffing support for residential, commercial, fleet, and highway charging projects, including EVSE installation, maintenance, electrical engineering, and site surveying.',
      badge: 'EV & EVSE',
      image: '/services/service-ev-infra.jpg'
    },
    {
      id: 'solar-renewable',
      category: 'solar',
      icon: Sun,
      accentColor: 'solar',
      title: 'Solar & Renewable-Energy Staffing',
      description: 'Connecting organizations with specialized professionals for residential, commercial, and utility-scale renewable-energy projects across planning, installation, commissioning, operations, and maintenance.',
      badge: 'Solar & BESS',
      image: '/services/service-solar-bess.jpg'
    },
    {
      id: 'flexible-models',
      category: 'staffing',
      icon: Layers,
      accentColor: 'emerald',
      title: 'Flexible Staffing Models',
      description: 'Flexible workforce solutions including direct-hire permanent placements, contract-based project staffing, and temp-to-perm arrangements to support project-based and long-term workforce requirements.',
      badge: 'Flexible',
      image: '/services/service-flexible-crew.jpg'
    }
  ];

  const renderCard = (service) => {
    const Icon = service.icon;
    const isBlue = service.accentColor === 'blue';
    const isSolar = service.accentColor === 'solar';

    return (
      <div className="bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group overflow-hidden h-full">
        <div>
          {/* Thematic Illustration */}
          <div className="relative h-24 xs:h-28 sm:h-44 w-full rounded-xl sm:rounded-2xl overflow-hidden mb-2.5 sm:mb-4 bg-slate-100 shadow-inner">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none" />

            {/* Category Badge */}
            <span className={`absolute top-2 right-2 sm:top-3 sm:right-3 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-[8px] sm:text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${
              isBlue 
                ? 'bg-blue-950/80 text-blue-100 border border-blue-400/30' 
                : isSolar 
                ? 'bg-amber-950/80 text-amber-100 border border-amber-400/30' 
                : 'bg-emerald-950/80 text-emerald-100 border border-emerald-400/30'
            }`}>
              {service.badge}
            </span>

            {/* Floating Icon */}
            <div className={`absolute bottom-2 left-2 sm:bottom-3 sm:left-3 w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl backdrop-blur-md border shadow-md flex items-center justify-center ${
              isBlue 
                ? 'bg-blue-600/90 text-white border-white/30' 
                : isSolar 
                ? 'bg-amber-500/90 text-slate-950 border-white/30' 
                : 'bg-emerald-600/90 text-white border-white/30'
            }`}>
              <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
            </div>
          </div>

          <h3 className="text-xs sm:text-lg lg:text-xl font-bold font-display text-slate-900 group-hover:text-gestss-green-900 transition-colors leading-tight sm:leading-snug">
            {service.title}
          </h3>
          <p className="mt-1.5 sm:mt-2.5 text-[10px] sm:text-xs lg:text-sm text-slate-600 leading-relaxed font-normal">
            {service.description}
          </p>
        </div>

        <div className="mt-3 sm:mt-5 pt-2 sm:pt-3.5 border-t border-slate-200/60">
          <button 
            onClick={onRequestTalent} 
            className="text-[9.5px] sm:text-xs font-bold text-gestss-green-900 flex items-center gap-1 sm:gap-1.5 hover:gap-2 transition-all"
          >
            <span>Request Personnel</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mobile / Tablet Header (shown only below lg) */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 lg:hidden">
          <h2 className="text-2xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            What We Do
          </h2>
        </div>

        {/* Mobile View: 2-column Grid (Pairs side-by-side matching desktop feel) */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-6 lg:hidden items-stretch">
          <div className="h-full">{renderCard(services[0])}</div>
          <div className="h-full">{renderCard(services[1])}</div>
          <div className="h-full">{renderCard(services[2])}</div>
          <div className="h-full">{renderCard(services[3])}</div>
        </div>

        {/* Desktop View (lg and up): Amphitheater / Staggered Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 items-start">
          
          {/* Card 1 (Left): Specialized Green-Energy Recruitment - Elevated UP, snug height */}
          <div className="lg:-translate-y-8 transition-transform duration-500 self-start">
            {renderCard(services[0])}
          </div>

          {/* Center 2 Columns: Heading on top, Card 2 & 3 placed lower (downwards) */}
          <div className="sm:col-span-2 flex flex-col">
            
            {/* Desktop Center Header directly between Left and Right cards */}
            <div className="text-center px-4 mb-6">
              <h2 className="text-3xl xl:text-4xl font-bold font-display text-slate-900 tracking-tight leading-tight">
                What We Do
              </h2>
            </div>

            {/* Center Cards: Card 2 & Card 3 positioned lower (niche) */}
            <div className="grid grid-cols-2 gap-6 lg:translate-y-6 items-start">
              <div className="self-start">{renderCard(services[1])}</div>
              <div className="self-start">{renderCard(services[2])}</div>
            </div>
          </div>

          {/* Card 4 (Right): Flexible Staffing Models - Elevated UP, snug height */}
          <div className="lg:-translate-y-8 transition-transform duration-500 self-start">
            {renderCard(services[3])}
          </div>

        </div>

      </div>
    </section>
  );
}
