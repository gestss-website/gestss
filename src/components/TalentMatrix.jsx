import React from 'react';
import { 
  Sun, 
  BatteryCharging, 
  Cpu, 
  Activity, 
  Truck, 
  MapPin, 
  Network, 
  ArrowRight, 
  ArrowDown,
  CheckCircle2, 
  Filter,
  ArrowUpRight
} from 'lucide-react';

export default function TalentMatrix({ onSelectRole }) {
  // 7 sequential lifecycle disciplines with ultra-concise, punchy content
  const disciplines = [
    {
      id: 'site-surveying',
      step: '01',
      stage: 'Feasibility',
      title: 'Site Surveying & Drone Audits',
      icon: MapPin,
      theme: 'header-accent', // Phone 1 in reference: contrasting warm cream header
      bullets: [
        'FAA Part 107 aerial photogrammetry & terrain LiDAR scans',
        'Structural roof rafters & busbar capacity audits'
      ],
      cert: 'FAA Part 107 • OSHA 10',
      sla: '2-3 Days'
    },
    {
      id: 'renewable-engineering',
      step: '02',
      stage: 'Engineering',
      title: 'Renewable Project Engineering',
      icon: Cpu,
      theme: 'dark',
      bullets: [
        'HelioScope & PVsyst yield & loss production modeling',
        'CAD drafting, single-line diagrams (SLD) & utility filing'
      ],
      cert: 'PE License • NABCEP PVIP',
      sla: '3-5 Days'
    },
    {
      id: 'electrical-engineering',
      step: '03',
      stage: 'Power Systems',
      title: 'Electrical & BESS Substation',
      icon: Activity,
      theme: 'dark',
      bullets: [
        'Arc flash calculations & medium-voltage cable routing',
        'Battery Storage (BESS) container & switchgear integration'
      ],
      cert: 'BSEE • IEEE • NFPA 70E',
      sla: '3-5 Days'
    },
    {
      id: 'grid-integration',
      step: '04',
      stage: 'Interconnection',
      title: 'Grid SCADA & Automation',
      icon: Network,
      theme: 'dark',
      bullets: [
        'SCADA integration, RTU programming & DNP3 protocols',
        'IEEE 1547 smart inverter tuning & ISO/RTO compliance'
      ],
      cert: 'NERC Reliability Specialist',
      sla: '4-6 Days'
    },
    {
      id: 'solar-pv-oandm',
      step: '05',
      stage: 'Construction',
      title: 'Solar PV Array Installation',
      icon: Sun,
      theme: 'dark',
      bullets: [
        'Mechanical tracker & racking ground-mount installation',
        'String inverters, DC optimizers & 3-phase AC tie-ins'
      ],
      cert: 'NABCEP PVA • State Journeyman',
      sla: '2-4 Days'
    },
    {
      id: 'evse-installation',
      step: '06',
      stage: 'EV Fast Charging',
      title: 'DC Fast Charging (EVSE)',
      icon: BatteryCharging,
      theme: 'dark',
      bullets: [
        'Level 2 & 50kW-350kW+ DCFC dispenser wiring',
        'OCPP 1.6/2.0.1 backend commissioning & cellular provisioning'
      ],
      cert: 'EVITP Certified Electrician',
      sla: '2-4 Days'
    },
    {
      id: 'ev-fleet-deployment',
      step: '07',
      stage: 'Fleet & O&M',
      title: 'Fleet Depots & 24/7 Asset O&M',
      icon: Truck,
      theme: 'light-gold', // Phone 7 in reference: warm cream/gold finish
      bullets: [
        'Depot charging layout, pantographs & smart load sharing',
        'Preventative thermal IV-curve testing & 24/7 dispatch'
      ],
      cert: 'CEM • Fleet Specialist',
      sla: '2-3 Days'
    }
  ];

  // Render a streamlined, compact card with minimal text
  const renderCard = (role) => {
    const Icon = role.icon;
    const isHeaderAccent = role.theme === 'header-accent';
    const isLightGold = role.theme === 'light-gold';

    return (
      <div 
        key={role.id}
        className={`w-full rounded-[26px] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl border ${
          isLightGold 
            ? 'bg-[#fef9eb] text-slate-900 border-[#e6d19a] hover:border-amber-500 shadow-amber-900/10' 
            : 'bg-[#111722] text-slate-100 border-slate-800 hover:border-slate-700 shadow-2xl'
        }`}
      >
        {/* Top Header Banner */}
        {isHeaderAccent ? (
          <div className="bg-[#f6ebd4] px-5 py-3.5 border-b border-[#e8d7b3] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-800 bg-black/5 px-2 py-0.5 rounded-full">
                STAGE {role.step}
              </span>
              <span className="text-[10px] font-bold text-amber-900">
                {role.stage}
              </span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-200/80 text-amber-950">
              {role.sla}
            </span>
          </div>
        ) : isLightGold ? (
          <div className="px-5 py-3.5 border-b border-[#ebd8a7] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest bg-amber-200/90 text-amber-950 px-2 py-0.5 rounded-full">
                STAGE {role.step} • FINAL
              </span>
              <span className="text-[10px] font-bold text-amber-900">
                {role.stage}
              </span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-950 text-white">
              {role.sla}
            </span>
          </div>
        ) : (
          <div className="px-5 py-3.5 border-b border-slate-800/80 bg-slate-950/50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-full">
                STAGE {role.step}
              </span>
              <span className="text-[10px] font-bold text-emerald-400">
                {role.stage}
              </span>
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
              {role.sla}
            </span>
          </div>
        )}

        {/* Body Content */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            {/* Title with Icon */}
            <div className="flex items-start gap-3 mb-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 ${
                isLightGold 
                  ? 'bg-amber-950 text-amber-300' 
                  : isHeaderAccent 
                    ? 'bg-slate-950 text-amber-300' 
                    : 'bg-white/10 text-emerald-400 border border-white/10'
              }`}>
                <Icon className="w-4 h-4" />
              </div>
              <h4 className={`text-sm font-black font-display tracking-tight leading-snug ${
                isLightGold ? 'text-slate-950' : 'text-white'
              }`}>
                {role.title}
              </h4>
            </div>

            {/* 2 Short Bullets */}
            <ul className="space-y-1.5 mb-3">
              {role.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[11px] leading-snug">
                  <CheckCircle2 className={`w-3 h-3 flex-shrink-0 mt-0.5 ${
                    isLightGold ? 'text-amber-800' : 'text-emerald-400'
                  }`} />
                  <span className={isLightGold ? 'text-slate-700' : 'text-slate-300'}>
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer: Cert + Action */}
          <div className={`pt-3 border-t flex items-center justify-between ${
            isLightGold ? 'border-amber-200/80' : 'border-slate-800'
          }`}>
            <span className={`text-[10px] font-semibold truncate max-w-[62%] ${
              isLightGold ? 'text-slate-600' : 'text-slate-400'
            }`}>
              {role.cert}
            </span>

            <button
              onClick={() => onSelectRole(role.title)}
              className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all flex items-center gap-1 ${
                isLightGold
                  ? 'bg-slate-950 text-white hover:bg-slate-800'
                  : 'bg-[#f6ebd4] text-slate-950 hover:bg-white'
              }`}
            >
              <span>Request</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="talent" className="py-20 lg:py-28 bg-[#f6f7f9] relative overflow-hidden">
      
      {/* Background Subtle Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================================= */}
        {/* ROW 1: Card 01 (Left) + Large Header (Right)                              */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Card 01 */}
          <div className="lg:col-span-4 relative">
            {renderCard(disciplines[0])}
          </div>

          {/* Title Block */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 text-white text-xs font-bold uppercase tracking-wider mb-3">
              <Filter className="w-3.5 h-3.5 text-emerald-400" />
              Specialized Disciplines
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-slate-950 tracking-tight leading-[1.05]">
              Key Areas of <span className="text-gradient-green">Talent</span>
            </h2>

            <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal max-w-xl">
              Pre-screened, certified professionals across the clean-energy lifecycle. Follow the sequential workflow below to request personnel.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={() => onSelectRole('All Specialized Disciplines')}
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 shadow-md transition-all flex items-center gap-2"
              >
                <span>Request Talent Cohort</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <span className="text-xs font-semibold text-slate-500">
                • 2 to 4-Day Deployment SLA
              </span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* CONNECTOR 1: Vertical Line from Card 01 (Row 1) straight down to Card 02 */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-14 h-16 pointer-events-none">
          <div className="col-span-4 flex items-center justify-center relative">
            <div className="w-0.5 h-full bg-slate-900 relative">
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-[8px] border-t-slate-900" />
            </div>
          </div>
        </div>

        {/* Mobile vertical arrow between Card 01 and Card 02 */}
        <div className="flex lg:hidden justify-center my-4">
          <div className="w-0.5 h-8 bg-slate-900 relative">
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-[8px] border-t-slate-900" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ROW 2: Cards 02, 03, 04 with generous spacing & clearly visible arrows    */}
        {/* ========================================================================= */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14 items-center">
            
            {/* Card 02 */}
            <div className="relative">
              {renderCard(disciplines[1])}

              {/* Horizontal Arrow to Card 03 (Desktop) */}
              <div className="hidden lg:flex items-center absolute -right-11 top-1/2 -translate-y-1/2 w-8 z-20 pointer-events-none">
                <div className="w-full h-0.5 bg-slate-900 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-[8px] border-l-slate-900" />
                </div>
              </div>
            </div>

            {/* Mobile vertical arrow */}
            <div className="flex lg:hidden justify-center my-2">
              <div className="w-0.5 h-8 bg-slate-900 relative">
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-[8px] border-t-slate-900" />
              </div>
            </div>

            {/* Card 03 */}
            <div className="relative">
              {renderCard(disciplines[2])}

              {/* Horizontal Arrow to Card 04 (Desktop) */}
              <div className="hidden lg:flex items-center absolute -right-11 top-1/2 -translate-y-1/2 w-8 z-20 pointer-events-none">
                <div className="w-full h-0.5 bg-slate-900 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-[8px] border-l-slate-900" />
                </div>
              </div>
            </div>

            {/* Mobile vertical arrow */}
            <div className="flex lg:hidden justify-center my-2">
              <div className="w-0.5 h-8 bg-slate-900 relative">
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-[8px] border-t-slate-900" />
              </div>
            </div>

            {/* Card 04 */}
            <div className="relative">
              {renderCard(disciplines[3])}

              {/* Connector from Card 04: Exits right and drops down */}
              <div className="hidden lg:block absolute -right-7 top-1/2 w-7 h-28 pointer-events-none z-10">
                <div className="w-full h-0.5 bg-slate-900 absolute top-0 left-0" />
                <div className="w-0.5 h-full bg-slate-900 absolute top-0 right-0" />
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* CONNECTOR 2: Clean U-Turn line from Card 04 (right) down to Card 05 (left)*/}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative h-20 pointer-events-none">
          {/* Horizontal cross-line traversing back from right to left */}
          <div className="absolute top-1/2 right-[-1.75rem] left-[16.6%] h-0.5 bg-slate-900" />
          
          {/* Vertical down drop into Card 05 */}
          <div className="absolute top-1/2 left-[16.6%] w-0.5 h-1/2 bg-slate-900">
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-[8px] border-t-slate-900" />
          </div>
        </div>

        {/* Mobile vertical arrow */}
        <div className="flex lg:hidden justify-center my-4">
          <div className="w-0.5 h-8 bg-slate-900 relative">
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-[8px] border-t-slate-900" />
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ROW 3: Explanatory Step Tag + Cards 05, 06, 07 with visible arrows        */}
        {/* ========================================================================= */}
        <div>
          {/* Step Tag */}
          <div className="mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-700">
              NEXT: FIELD CONSTRUCTION, DC FAST CHARGING &amp; 24/7 ASSET O&amp;M
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-14 items-center">
            
            {/* Card 05 */}
            <div className="relative">
              {renderCard(disciplines[4])}

              {/* Horizontal Arrow to Card 06 (Desktop) */}
              <div className="hidden lg:flex items-center absolute -right-11 top-1/2 -translate-y-1/2 w-8 z-20 pointer-events-none">
                <div className="w-full h-0.5 bg-slate-900 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-[8px] border-l-slate-900" />
                </div>
              </div>
            </div>

            {/* Mobile vertical arrow */}
            <div className="flex lg:hidden justify-center my-2">
              <div className="w-0.5 h-8 bg-slate-900 relative">
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-[8px] border-t-slate-900" />
              </div>
            </div>

            {/* Card 06 */}
            <div className="relative">
              {renderCard(disciplines[5])}

              {/* Horizontal Arrow to Card 07 (Desktop) */}
              <div className="hidden lg:flex items-center absolute -right-11 top-1/2 -translate-y-1/2 w-8 z-20 pointer-events-none">
                <div className="w-full h-0.5 bg-slate-900 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-[8px] border-l-slate-900" />
                </div>
              </div>
            </div>

            {/* Mobile vertical arrow */}
            <div className="flex lg:hidden justify-center my-2">
              <div className="w-0.5 h-8 bg-slate-900 relative">
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-[8px] border-t-slate-900" />
              </div>
            </div>

            {/* Card 07 (Warm Cream / Final Stage) */}
            <div className="relative">
              {renderCard(disciplines[6])}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
