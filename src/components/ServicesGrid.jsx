import React, { useState } from 'react';
import { Zap, BatteryCharging, Sun, Layers, Check, ArrowRight, Sparkles } from 'lucide-react';

export default function ServicesGrid({ onRequestTalent }) {
  const [activeTab, setActiveTab] = useState('all');

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
      badge: 'Recruitment'
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
      badge: 'EV & EVSE'
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
      badge: 'Solar & BESS'
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
      badge: 'Flexible'
    }
  ];

  const filteredServices = activeTab === 'all' ? services : services.filter(s => s.category === activeTab);

  const tabs = [
    { key: 'all', label: 'All', color: 'bg-gestss-green-900' },
    { key: 'recruitment', label: 'Recruitment', color: 'bg-gestss-green-900' },
    { key: 'ev', label: 'EV Infrastructure', color: 'bg-gestss-blue-900' },
    { key: 'solar', label: 'Solar', color: 'bg-gestss-solar-600' },
    { key: 'staffing', label: 'Flexible', color: 'bg-gestss-green-800' },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 pattern-grid opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gestss-green-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              What We Do
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
              Staffing for the <span className="text-gradient-green">Renewable Era</span>.
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {tabs.map(t => (
              <button key={t.key} onClick={() => setActiveTab(t.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${activeTab === t.key ? `${t.color} text-white shadow-md` : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
              >{t.label}</button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            const isBlue = service.accentColor === 'blue';
            const isSolar = service.accentColor === 'solar';
            const iconBg = isBlue ? 'bg-blue-50 text-gestss-blue-700 border-blue-200' : isSolar ? 'bg-amber-50 text-gestss-solar-600 border-amber-200' : 'bg-emerald-50 text-gestss-green-700 border-emerald-200';
            const checkColor = isBlue ? 'text-gestss-blue-600' : isSolar ? 'text-amber-600' : 'text-gestss-green-600';

            return (
              <div key={service.id} className="glass-card rounded-3xl p-8 border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-2xl border ${iconBg} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${isBlue ? 'bg-blue-100 text-blue-900' : isSolar ? 'bg-amber-100 text-amber-900' : 'bg-emerald-100 text-emerald-900'}`}>{service.badge}</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-gestss-green-900 transition-colors">{service.title}</h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wide">{service.tagline}</p>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{service.description}</p>
                  <ul className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                    {service.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <Check className={`w-3.5 h-3.5 flex-shrink-0 ${checkColor}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <button onClick={onRequestTalent} className="text-xs font-bold text-gestss-green-900 flex items-center gap-1.5 hover:gap-2.5 transition-all">
                    <span>Request Personnel</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
