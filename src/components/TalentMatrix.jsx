import React, { useState } from 'react';
import { 
  Sun, 
  BatteryCharging, 
  Cpu, 
  Activity, 
  Truck, 
  MapPin, 
  Network, 
  Headphones, 
  ArrowRight, 
  CheckCircle2, 
  Filter 
} from 'lucide-react';

export default function TalentMatrix({ onSelectRole }) {
  const [filter, setFilter] = useState('all');

  const talentRoles = [
    {
      id: 'solar-pv-oandm',
      category: 'solar',
      title: 'Solar PV Installation, Operations & Maintenance',
      icon: Sun,
      color: 'solar',
      scope: 'Residential, C&I Rooftop & Utility-Scale Farms',
      capabilities: [
        'Rooftop and ground-mount PV module mechanical installation',
        'String inverter, microinverter, and DC optimizer wiring',
        'Preventative thermal imaging, IV-curve tracing & cleaning',
        'Troubleshooting ground faults, open strings, and inverter faults'
      ],
      certifications: 'NABCEP Associate/PVA, OSHA 10/30, State Electrical Apprentice',
      sla: '2 - 4 Days'
    },
    {
      id: 'renewable-engineering',
      category: 'engineering',
      title: 'Renewable-Energy Engineering & Project Management',
      icon: Cpu,
      color: 'emerald',
      scope: 'Utility Solar, Wind Integration & BESS Developments',
      capabilities: [
        'HelioScope, PVsyst production modeling and shadow analysis',
        'Single-line diagram (SLD) and electrical CAD drafting',
        'Interconnection filing, permitting coordination & utility liaison',
        'Project timeline, EPC subcontractor management & budgeting'
      ],
      certifications: 'PE License, PMP, NABCEP PV Installation Professional (PVIP)',
      sla: '3 - 5 Days'
    },
    {
      id: 'electrical-engineering',
      category: 'engineering',
      title: 'Electrical Engineering & Energy Systems',
      icon: Activity,
      color: 'blue',
      scope: 'Medium & High Voltage Substation / Power Electronics',
      capabilities: [
        'Arc flash calculations, short circuit & coordination studies',
        'Transformer specification, switchgear sizing & MV cable routing',
        'Battery Energy Storage Systems (BESS) container integration',
        'Power quality analysis, harmonics mitigation & protection relays'
      ],
      certifications: 'BSEE/MSEE, IEEE Member, NFPA 70E Certified',
      sla: '3 - 5 Days'
    },
    {
      id: 'evse-installation',
      category: 'ev',
      title: 'EVSE Installation, Commissioning & Maintenance',
      icon: BatteryCharging,
      color: 'blue',
      scope: 'Level 2 & DC Fast Chargers (50kW - 350kW+)',
      capabilities: [
        'Level 2 and DC Fast Charger hardware mounting and conduit runs',
        'Electrical panel upgrades, 480V 3-phase service tie-ins',
        'Commissioning, OCPP backend server provisioning & cellular check',
        'Preventative cable, liquid cooling, and touch-screen maintenance'
      ],
      certifications: 'EVITP Certified Electrician, State Journeyman / Master License',
      sla: '2 - 4 Days'
    },
    {
      id: 'ev-fleet-deployment',
      category: 'ev',
      title: 'EV Charging Infrastructure & Fleet Deployment',
      icon: Truck,
      color: 'emerald',
      scope: 'Transit Buses, Logistics Fleets & Highway Travel Plazas',
      capabilities: [
        'Fleet depot charging layout and smart power-sharing strategies',
        'Pantograph and overhead heavy-duty charging commissioning',
        'Load management software setup and peak shaving configuration',
        'Fleet transition feasibility assessment & turnkey pilot execution'
      ],
      certifications: 'Certified Energy Manager (CEM), Fleet Electrification Specialist',
      sla: '3 - 5 Days'
    },
    {
      id: 'site-surveying',
      category: 'field',
      title: 'Site Surveying & Technical Field Operations',
      icon: MapPin,
      color: 'solar',
      scope: 'Pre-construction Feasibility, Drone & Soil Studies',
      capabilities: [
        'Structural roof analysis, rafters inspection & load calculations',
        'Main electrical panel (MSP) rating and busbar capacity audits',
        'Drone aerial mapping, topographical scans & geotechnical survey',
        'Utility meter and right-of-way easement validation'
      ],
      certifications: 'FAA Part 107 Drone Pilot, Structural Engineering Tech',
      sla: '2 - 3 Days'
    },
    {
      id: 'grid-integration',
      category: 'engineering',
      title: 'Grid Integration & Associated Energy Systems',
      icon: Network,
      color: 'blue',
      scope: 'Substation Interconnection & ISO/RTO Compliance',
      capabilities: [
        'Distribution and transmission grid interconnection studies',
        'SCADA system integration, RTU programming & DNP3 protocols',
        'Smart inverter IEEE 1547 compliance and frequency regulation',
        'Microgrid controller tuning and islanding synchronization'
      ],
      certifications: 'Grid Interconnection Specialist, NERC Reliability Standards',
      sla: '4 - 6 Days'
    },
    {
      id: 'tech-ops-support',
      category: 'field',
      title: 'Technical, Operational & Administrative Support',
      icon: Headphones,
      color: 'emerald',
      scope: 'Permitting, Logistics, Safety Compliance & Dispatch',
      capabilities: [
        'AHJ building and electrical permit processing and expediting',
        'Renewable hardware supply chain logistics and inventory control',
        'Field technician dispatch, ticketing and customer support',
        'Incentive, IRA tax credit, and green rebate documentation'
      ],
      certifications: 'Renewable Business Operations, Logistics & Dispatching',
      sla: '2 - 3 Days'
    }
  ];

  const filteredRoles = filter === 'all' 
    ? talentRoles 
    : talentRoles.filter(r => r.category === filter);

  return (
    <section id="talent" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-slate-200">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider mb-3">
              <Filter className="w-3.5 h-3.5" />
              Specialized Disciplines
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
              Key Areas of <span className="text-gradient-green">Talent</span>
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg font-normal">
              Pre-screened, certified professionals across the entire clean-energy lifecycle. Select a discipline to request personnel.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Disciplines ({talentRoles.length})
            </button>
            <button
              onClick={() => setFilter('solar')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === 'solar'
                  ? 'bg-gestss-solar-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Solar PV &amp; Storage
            </button>
            <button
              onClick={() => setFilter('ev')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === 'ev'
                  ? 'bg-gestss-blue-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              EV Charging &amp; Fleet
            </button>
            <button
              onClick={() => setFilter('engineering')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === 'engineering'
                  ? 'bg-gestss-green-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Engineering &amp; Grid
            </button>
            <button
              onClick={() => setFilter('field')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                filter === 'field'
                  ? 'bg-slate-800 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Field Ops &amp; Support
            </button>
          </div>
        </div>

        {/* Roles Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredRoles.map((role) => {
            const Icon = role.icon;
            const isBlue = role.color === 'blue';
            const isSolar = role.color === 'solar';

            const bgIcon = isBlue ? 'bg-blue-50 text-gestss-blue-700' : isSolar ? 'bg-amber-50 text-gestss-solar-600' : 'bg-emerald-50 text-gestss-green-700';

            return (
              <div
                key={role.id}
                className="glass-card rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-card-hover hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${bgIcon} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700">
                      SLA: {role.sla}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-slate-900 leading-snug group-hover:text-gestss-green-900 transition-colors">
                    {role.title}
                  </h3>

                  <p className="text-[11px] font-semibold text-gestss-green-700 mt-1 uppercase tracking-wide">
                    {role.scope}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Core Competencies:
                    </h4>
                    <ul className="space-y-1.5">
                      {role.capabilities.map((c, i) => (
                        <li key={i} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gestss-green-600 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4 p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 text-[11px] text-slate-600">
                    <strong className="text-slate-900 block font-semibold mb-0.5">Certifications:</strong>
                    <span className="line-clamp-2">{role.certifications}</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectRole(role.title)}
                    className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-gestss-green-900 bg-emerald-50 hover:bg-gestss-green-900 hover:text-white transition-all flex items-center justify-center gap-1.5 group-hover:shadow-md"
                  >
                    <span>Request This Role</span>
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
