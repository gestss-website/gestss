import React from 'react';
import { Zap, BatteryCharging, Sun, Layers, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function ServicesGrid({ onRequestTalent }) {

  const services = [
    {
      id: 'specialized-recruitment',
      category: 'recruitment',
      icon: Zap,
      accentColor: 'emerald',
      title: 'Green-Energy Recruitment',
      tagline: 'Technical sourcing for clean-tech',
      description: 'Recruitment across technical, engineering, project-management, and operational functions for renewable energy and clean technology.',
      highlights: [
        'Solar PV Installers & Lead Technicians',
        'Renewable-Energy & Electrical Engineers',
        'EVSE Technicians & EV Specialists',
        'Project Managers & Commissioning Leads',
        'O&M Field Professionals & Grid Specialists',
      ],
      badge: 'Recruitment',
      image: '/services/service-recruitment.jpg'
    },
    {
      id: 'ev-infrastructure',
      category: 'ev',
      icon: BatteryCharging,
      accentColor: 'blue',
      title: 'EV Infrastructure Workforce',
      tagline: 'Powering electric mobility expansion',
      description: 'Skilled personnel for installing, commissioning, and maintaining charging infrastructure across residential, commercial, and fleet domains.',
      highlights: [
        'AC Level 2 & DC Fast Charging (DCFC)',
        'Fleet Depot Electrification',
        'EVSE Installation & Maintenance',
        'Grid Interconnection & Load Analysis',
        'Firmware & OCPP Troubleshooting',
      ],
      badge: 'EV & EVSE',
      image: '/services/service-ev-infra.jpg'
    },
    {
      id: 'solar-renewable',
      category: 'solar',
      icon: Sun,
      accentColor: 'solar',
      title: 'Solar & Renewable Staffing',
      tagline: 'Utility, commercial & residential solar',
      description: 'Multidisciplinary teams for projects from feasibility and installation through commissioning and lifecycle maintenance.',
      highlights: [
        'Utility-Scale PV & Battery Storage (BESS)',
        'Commercial Rooftop & Carport Arrays',
        'Inverter Systems & SCADA Integration',
        'Quality Assurance & Grid Sign-off',
        'Preventative Solar Lifecycle Maintenance',
      ],
      badge: 'Solar & BESS',
      image: '/services/service-solar-bess.jpg'
    },
    {
      id: 'flexible-models',
      category: 'staffing',
      icon: Layers,
      accentColor: 'emerald',
      title: 'Flexible Staffing Models',
      tagline: 'Tailored to project lifecycles',
      description: 'Workforce structures that flex with your project — from permanent hires to turnkey crews and temp-to-perm evaluations.',
      highlights: [
        'Direct-Hire Permanent Placements',
        'Contract-Based Project Staffing',
        'Temp-to-Perm Arrangements',
        'Seasonal & Surge Workforce',
        'Multi-Jurisdiction Deployment',
      ],
      badge: 'Flexible',
      image: '/services/service-flexible-crew.jpg'
    }
  ];

  const renderCard = (service) => {
    const Icon = service.icon;
    const isBlue = service.accentColor === 'blue';
    const isSolar = service.accentColor === 'solar';
    const checkColor = isBlue ? 'text-gestss-blue-600' : isSolar ? 'text-amber-600' : 'text-gestss-green-600';

    return (
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-emerald-300 transition-all duration-300 flex flex-col group overflow-hidden">
        <div>
          {/* Thematic Illustration */}
          <div className="relative h-44 sm:h-48 w-full rounded-2xl overflow-hidden mb-5 bg-slate-100 shadow-inner">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent pointer-events-none" />

            {/* Category Badge */}
            <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md shadow-sm ${
              isBlue 
                ? 'bg-blue-950/80 text-blue-100 border border-blue-400/30' 
                : isSolar 
                ? 'bg-amber-950/80 text-amber-100 border border-amber-400/30' 
                : 'bg-emerald-950/80 text-emerald-100 border border-emerald-400/30'
            }`}>
              {service.badge}
            </span>

            {/* Floating Icon */}
            <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl backdrop-blur-md border shadow-md flex items-center justify-center ${
              isBlue 
                ? 'bg-blue-600/90 text-white border-white/30' 
                : isSolar 
                ? 'bg-amber-500/90 text-slate-950 border-white/30' 
                : 'bg-emerald-600/90 text-white border-white/30'
            }`}>
              <Icon className="w-5 h-5" />
            </div>
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-display text-slate-900 group-hover:text-gestss-green-900 transition-colors leading-snug">
            {service.title}
          </h3>
          <p className="text-[11px] font-semibold text-slate-500 mt-1 uppercase tracking-wide">
            {service.tagline}
          </p>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {service.description}
          </p>
          <ul className="mt-4 pt-3.5 border-t border-slate-100 space-y-2">
            {service.highlights.map((item, hIdx) => (
              <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-700">
                <Check className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${checkColor}`} />
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 pt-3.5 border-t border-slate-200/60">
          <button onClick={onRequestTalent} className="text-xs font-bold text-gestss-green-900 flex items-center gap-1.5 hover:gap-2.5 transition-all">
            <span>Request Personnel</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mobile / Tablet Header (shown only below lg) */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:hidden">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gestss-green-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            What We Do
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 tracking-tight">
            Staffing for the <span className="text-gradient-green">Renewable Era</span>.
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
            Specialized technical workforce solutions across Solar PV, EV Infrastructure, Renewable Systems, and Agile Deployments.
          </p>
        </div>

        {/* Amphitheater / Staggered Layout:
            - Left Card (1) elevated higher, fits content snug
            - Center: Heading on top, then Card 2 & Card 3 directly below it
            - Right Card (4) elevated higher, fits content snug */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start pb-4">
          
          {/* Card 1 (Left): Green-Energy Recruitment - Elevated, compact without empty bottom */}
          <div className="lg:-translate-y-10 transition-transform duration-500 self-start">
            {renderCard(services[0])}
          </div>

          {/* Center 2 Columns: Heading nestled on top, Card 2 & 3 below */}
          <div className="sm:col-span-2 flex flex-col justify-between">
            
            {/* Desktop Center Heading nestled right between Card 1 and Card 4 */}
            <div className="hidden lg:block text-center px-4 mb-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gestss-green-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider mb-2.5">
                <Sparkles className="w-3.5 h-3.5" />
                What We Do
              </div>
              <h2 className="text-3xl xl:text-4xl font-black font-display text-slate-900 tracking-tight leading-tight">
                Staffing for the <span className="text-gradient-green">Renewable Era</span>.
              </h2>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-md mx-auto">
                Specialized technical workforce solutions across Solar PV, EV Infrastructure, Renewable Systems, and Agile Deployments.
              </p>
            </div>

            {/* Center Cards: Card 2 & Card 3 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="self-start">{renderCard(services[1])}</div>
              <div className="self-start">{renderCard(services[2])}</div>
            </div>
          </div>

          {/* Card 4 (Right): Flexible Staffing Models - Elevated, compact without empty bottom */}
          <div className="lg:-translate-y-10 transition-transform duration-500 self-start">
            {renderCard(services[3])}
          </div>

        </div>

      </div>
    </section>
  );
}
