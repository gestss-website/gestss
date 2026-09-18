import React, { useRef, useState, useEffect } from 'react';
import { 
  Sun, 
  BatteryCharging, 
  Cpu, 
  Activity, 
  Truck, 
  MapPin, 
  Network, 
  ArrowRight, 
  CheckCircle2, 
  Filter,
  MoveRight
} from 'lucide-react';

export default function TalentMatrix({ onSelectRole }) {
  const containerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);
  const card6Ref = useRef(null);
  const card7Ref = useRef(null);

  const [paths, setPaths] = useState({
    card1To2: '',
    card2To3: '',
    card3To4: '',
    loop4To5: '',
    card5To6: '',
    card6To7: ''
  });

  // 7 sequential lifecycle disciplines with rich, tall card content
  const disciplines = [
    {
      id: 'site-surveying',
      step: '01',
      stage: 'Feasibility & Audits',
      title: 'Site Surveying & Drone Audits',
      scope: 'Pre-Construction Feasibility',
      icon: MapPin,
      theme: 'header-accent', // Phone 1 in reference: contrasting warm cream header
      accentColor: '#eab308',
      bullets: [
        'FAA Part 107 aerial photogrammetry & terrain LiDAR scans',
        'Structural roof rafters & busbar capacity audits',
        'Geotechnical soil resistivity & utility easement checks'
      ],
      cert: 'FAA Part 107 • OSHA 10',
      sla: '2-3 Days'
    },
    {
      id: 'renewable-engineering',
      step: '02',
      stage: 'Engineering & Modeling',
      title: 'Renewable Project Engineering',
      scope: 'Utility Solar & BESS Design',
      icon: Cpu,
      theme: 'dark',
      accentColor: '#10b981',
      bullets: [
        'HelioScope & PVsyst yield & loss production modeling',
        'CAD drafting, single-line diagrams (SLD) & filings',
        'AHJ permitting coordination & utility interconnection'
      ],
      cert: 'PE License • NABCEP PVIP',
      sla: '3-5 Days'
    },
    {
      id: 'electrical-engineering',
      step: '03',
      stage: 'Power Systems & MV',
      title: 'Electrical & BESS Substation',
      scope: 'Medium & High Voltage Infrastructure',
      icon: Activity,
      theme: 'dark',
      accentColor: '#38bdf8',
      bullets: [
        'Arc flash calculations & short-circuit coordination',
        'Transformer specification & MV cable routing',
        'BESS container integration & harmonics mitigation'
      ],
      cert: 'BSEE/MSEE • IEEE • NFPA 70E',
      sla: '3-5 Days'
    },
    {
      id: 'grid-integration',
      step: '04',
      stage: 'Interconnection',
      title: 'Grid SCADA & Automation',
      scope: 'Substation Interconnection & ISO',
      icon: Network,
      theme: 'dark',
      accentColor: '#a855f7',
      bullets: [
        'SCADA system integration, RTU & DNP3 protocols',
        'IEEE 1547 smart inverter tuning & frequency regulation',
        'NERC reliability compliance & islanding sync'
      ],
      cert: 'Grid Specialist • NERC Standards',
      sla: '4-6 Days'
    },
    {
      id: 'solar-pv-oandm',
      step: '05',
      stage: 'Field Construction',
      title: 'Solar PV Array Installation',
      scope: 'Commercial & Utility Solar Arrays',
      icon: Sun,
      theme: 'dark',
      accentColor: '#f59e0b',
      bullets: [
        'Mechanical tracker & racking ground-mount assembly',
        'String inverters, DC optimizers & 3-phase tie-ins',
        'Preventative thermal IV-curve testing & QA checks'
      ],
      cert: 'NABCEP PVA • State Journeyman',
      sla: '2-4 Days'
    },
    {
      id: 'evse-installation',
      step: '06',
      stage: 'EV Fast Charging',
      title: 'DC Fast Charging (EVSE)',
      scope: 'Level 2 & DCFC (50kW - 350kW+)',
      icon: BatteryCharging,
      theme: 'dark',
      accentColor: '#34d399',
      bullets: [
        'Dispenser mounting & 480V 3-phase service tie-in',
        'OCPP 1.6/2.0.1 backend commissioning & provisioning',
        'Liquid-cooled dispenser wiring & smart load sharing'
      ],
      cert: 'EVITP Certified • Master Electrician',
      sla: '2-4 Days'
    },
    {
      id: 'ev-fleet-deployment',
      step: '07',
      stage: 'Fleet & Sustained O&M',
      title: 'Fleet Depots & Asset O&M',
      scope: 'Transit Hubs & 24/7 Reliability',
      icon: Truck,
      theme: 'light-gold', // Phone 7 in reference: warm cream/gold finish
      accentColor: '#ca8a04',
      bullets: [
        'Depot charging layout & pantograph commissioning',
        'Smart power-sharing software & peak demand shaving',
        '24/7 emergency dispatch, inverter O&M & safety audits'
      ],
      cert: 'CEM • Fleet Specialist • OSHA',
      sla: '2-3 Days'
    }
  ];

  // Dynamically calculate and update connected SVG lines to prevent any gaps or drifting
  useEffect(() => {
    const updateLines = () => {
      if (
        !containerRef.current || 
        !card1Ref.current || 
        !card2Ref.current || 
        !card3Ref.current || 
        !card4Ref.current || 
        !card5Ref.current || 
        !card6Ref.current || 
        !card7Ref.current
      ) return;

      const cRect = containerRef.current.getBoundingClientRect();
      const r1 = card1Ref.current.getBoundingClientRect();
      const r2 = card2Ref.current.getBoundingClientRect();
      const r3 = card3Ref.current.getBoundingClientRect();
      const r4 = card4Ref.current.getBoundingClientRect();
      const r5 = card5Ref.current.getBoundingClientRect();
      const r6 = card6Ref.current.getBoundingClientRect();
      const r7 = card7Ref.current.getBoundingClientRect();

      // 1. Card 01 to Card 02 (Vertical drop into Card 02 top center)
      const c1CenterX = r1.left - cRect.left + r1.width / 2;
      const c1BottomY = r1.bottom - cRect.top;
      const c2TopY = r2.top - cRect.top;
      const card1To2 = `M ${c1CenterX},${c1BottomY} L ${c1CenterX},${c2TopY}`;

      // 2. Card 02 to Card 03 (Horizontal bridge with arrow into Card 03)
      const c2RightX = r2.right - cRect.left;
      const c2MidY = r2.top - cRect.top + r2.height / 2;
      const c3LeftX = r3.left - cRect.left;
      const card2To3 = `M ${c2RightX},${c2MidY} L ${c3LeftX},${c2MidY}`;

      // 3. Card 03 to Card 04 (Horizontal bridge with arrow into Card 04)
      const c3RightX = r3.right - cRect.left;
      const c3MidY = r3.top - cRect.top + r3.height / 2;
      const c4LeftX = r4.left - cRect.left;
      const card3To4 = `M ${c3RightX},${c3MidY} L ${c4LeftX},${c3MidY}`;

      // 4. Card 04 to Card 05 (Single continuous U-turn loop with smooth rounded 90° bends)
      const c4RightX = r4.right - cRect.left;
      const c4MidY = r4.top - cRect.top + r4.height / 2;
      const c5CenterX = r5.left - cRect.left + r5.width / 2;
      const c5TopY = r5.top - cRect.top;
      
      const loopRightX = c4RightX + 28; // Sleek 28px loop well within the right gutter
      const gapY = (r4.bottom + r5.top) / 2 - cRect.top;
      const R = 12; // Smooth 12px corner radius
      
      const loop4To5 = [
        `M ${c4RightX},${c4MidY}`,
        `H ${loopRightX - R}`,
        `Q ${loopRightX},${c4MidY} ${loopRightX},${c4MidY + R}`,
        `V ${gapY - R}`,
        `Q ${loopRightX},${gapY} ${loopRightX - R},${gapY}`,
        `H ${c5CenterX + R}`,
        `Q ${c5CenterX},${gapY} ${c5CenterX},${gapY + R}`,
        `V ${c5TopY}`
      ].join(' ');

      // 5. Card 05 to Card 06 (Horizontal bridge with arrow into Card 06)
      const c5RightX = r5.right - cRect.left;
      const c5MidY = r5.top - cRect.top + r5.height / 2;
      const c6LeftX = r6.left - cRect.left;
      const card5To6 = `M ${c5RightX},${c5MidY} L ${c6LeftX},${c5MidY}`;

      // 6. Card 06 to Card 07 (Horizontal bridge with arrow into Card 07)
      const c6RightX = r6.right - cRect.left;
      const c6MidY = r6.top - cRect.top + r6.height / 2;
      const c7LeftX = r7.left - cRect.left;
      const card6To7 = `M ${c6RightX},${c6MidY} L ${c7LeftX},${c6MidY}`;

      setPaths({
        card1To2,
        card2To3,
        card3To4,
        loop4To5,
        card5To6,
        card6To7
      });
    };

    const resizeObserver = new ResizeObserver(() => {
      updateLines();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    [card1Ref, card2Ref, card3Ref, card4Ref, card5Ref, card6Ref, card7Ref].forEach(ref => {
      if (ref.current) resizeObserver.observe(ref.current);
    });

    window.addEventListener('resize', updateLines);
    if (document.fonts) {
      document.fonts.ready.then(updateLines);
    }

    updateLines();
    const t1 = setTimeout(updateLines, 60);
    const t2 = setTimeout(updateLines, 200);
    const t3 = setTimeout(updateLines, 500);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateLines);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Render a tall, elegant portrait card (device-like styling matching user's reference)
  const renderTallCard = (role, cardRef) => {
    const Icon = role.icon;
    const isHeaderAccent = role.theme === 'header-accent';
    const isLightGold = role.theme === 'light-gold';

    return (
      <div 
        ref={cardRef}
        key={role.id}
        className={`w-full min-h-[420px] rounded-[30px] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl border group relative z-10 ${
          isLightGold 
            ? 'bg-[#fef9eb] text-slate-900 border-[#e6d19a] hover:border-amber-500 shadow-amber-900/10' 
            : 'bg-[#111722] text-slate-100 border-slate-800 hover:border-slate-700 shadow-2xl'
        }`}
      >
        {/* Top Header Banner */}
        {isHeaderAccent ? (
          <div className="bg-[#f6ebd4] p-5 border-b border-[#e8d7b3] text-slate-900">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-700 bg-black/5 px-2.5 py-1 rounded-full">
                STAGE {role.step}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200/80 text-amber-950">
                SLA: {role.sla}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-300 flex items-center justify-center shadow-md flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block truncate">
                  {role.stage}
                </span>
                <span className="text-xs text-slate-700 font-medium block truncate">
                  {role.scope}
                </span>
              </div>
            </div>
          </div>
        ) : isLightGold ? (
          <div className="p-5 border-b border-[#ebd8a7]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest bg-amber-200/90 text-amber-950 px-2.5 py-1 rounded-full">
                STAGE {role.step} • FINAL
              </span>
              <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-950 text-white">
                SLA: {role.sla}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-300 flex items-center justify-center shadow-md flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block truncate">
                  {role.stage}
                </span>
                <span className="text-xs text-slate-700 font-medium block truncate">
                  {role.scope}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-5 border-b border-slate-800/80 bg-slate-950/50">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                STAGE {role.step}
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                SLA: {role.sla}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 text-white flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                <Icon className="w-5 h-5" style={{ color: role.accentColor }} />
              </div>
              <div className="min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider block truncate" style={{ color: role.accentColor }}>
                  {role.stage}
                </span>
                <span className="text-xs text-slate-400 font-medium block truncate">
                  {role.scope}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tall Card Body */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h4 className={`text-base font-black font-display tracking-tight leading-snug ${
              isLightGold ? 'text-slate-950' : 'text-white'
            }`}>
              {role.title}
            </h4>

            {/* Core Capabilities */}
            <div className="mt-4 space-y-2">
              <div className={`text-[10px] font-bold uppercase tracking-wider ${
                isLightGold ? 'text-slate-500' : 'text-slate-400'
              }`}>
                Core Scope:
              </div>
              <ul className="space-y-2">
                {role.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs leading-relaxed">
                    <CheckCircle2 className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 ${
                      isLightGold ? 'text-amber-800' : 'text-emerald-400'
                    }`} />
                    <span className={isLightGold ? 'text-slate-800' : 'text-slate-300'}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Certifications Badge */}
            <div className={`mt-4 p-2.5 rounded-xl border text-[11px] ${
              isLightGold 
                ? 'bg-amber-100/60 border-amber-300 text-amber-950' 
                : 'bg-slate-950/60 border-slate-800 text-slate-300'
            }`}>
              <strong className="block text-[10px] font-bold uppercase tracking-wider mb-0.5">
                Certifications:
              </strong>
              <span className="truncate block">{role.cert}</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-5 pt-3.5 border-t border-slate-800/60">
            <button
              onClick={() => onSelectRole(role.title)}
              className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                isLightGold
                  ? 'bg-slate-950 text-white hover:bg-slate-800 shadow-md'
                  : 'bg-[#f6ebd4] text-slate-950 hover:bg-white shadow-lg'
              }`}
            >
              <span>Request Discipline</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="talent" className="py-20 lg:py-28 bg-[#f6f7f9] relative overflow-hidden">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mobile Swipe Hint */}
        <div className="flex lg:hidden items-center justify-between gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-700 text-xs font-semibold mb-4 w-fit">
          <MoveRight className="w-3.5 h-3.5" />
          <span>Scroll horizontally to view connected pipeline</span>
        </div>

        {/* ========================================================================= */}
        {/* CONNECTED DIAGRAM CANVAS (Identical 3-row layout on Laptop & Phone via scroll) */}
        {/* ========================================================================= */}
        <div className="overflow-x-auto pb-8 pt-2 scrollbar-thin scrollbar-thumb-slate-300">
          <div ref={containerRef} className="w-fit mx-auto relative pl-4 sm:pl-8 pr-28 sm:pr-32 py-4">
            
            {/* SVG OVERLAY: Perfectly connects all cards with zero gaps or floating pieces */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
              <defs>
                <marker
                  id="talent-arrow"
                  viewBox="0 0 10 10"
                  refX="7"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto"
                >
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0f172a" />
                </marker>
              </defs>

              {/* 1. Card 01 to Card 02 */}
              {paths.card1To2 && (
                <path
                  d={paths.card1To2}
                  stroke="#0f172a"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#talent-arrow)"
                />
              )}

              {/* 2. Card 02 to Card 03 */}
              {paths.card2To3 && (
                <path
                  d={paths.card2To3}
                  stroke="#0f172a"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#talent-arrow)"
                />
              )}

              {/* 3. Card 03 to Card 04 */}
              {paths.card3To4 && (
                <path
                  d={paths.card3To4}
                  stroke="#0f172a"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#talent-arrow)"
                />
              )}

              {/* 4. Continuous U-Turn Loop from Card 04 to Card 05 */}
              {paths.loop4To5 && (
                <path
                  d={paths.loop4To5}
                  stroke="#0f172a"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#talent-arrow)"
                />
              )}

              {/* 5. Card 05 to Card 06 */}
              {paths.card5To6 && (
                <path
                  d={paths.card5To6}
                  stroke="#0f172a"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#talent-arrow)"
                />
              )}

              {/* 6. Card 06 to Card 07 */}
              {paths.card6To7 && (
                <path
                  d={paths.card6To7}
                  stroke="#0f172a"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#talent-arrow)"
                />
              )}
            </svg>

            {/* --------------------------------------------------------------------- */}
            {/* ROW 1: Card 01 (Left) + Large Editorial Headline Block (Right)        */}
            {/* --------------------------------------------------------------------- */}
            <div className="flex items-center gap-8 sm:gap-12 lg:gap-14">
              
              {/* Card 01 in Column 1 */}
              <div className="w-[270px] sm:w-[290px] flex-shrink-0">
                {renderTallCard(disciplines[0], card1Ref)}
              </div>

              {/* Title Block spanning Columns 2 & 3 */}
              <div className="max-w-[620px] pl-2">
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

            {/* Space between Row 1 and Row 2 */}
            <div className="h-20" />

            {/* --------------------------------------------------------------------- */}
            {/* ROW 2: Cards 02, 03, 04 evenly spaced across columns                   */}
            {/* --------------------------------------------------------------------- */}
            <div className="flex items-center gap-8 sm:gap-12 lg:gap-14">
              
              {/* Card 02 */}
              <div className="w-[270px] sm:w-[290px] flex-shrink-0">
                {renderTallCard(disciplines[1], card2Ref)}
              </div>

              {/* Card 03 */}
              <div className="w-[270px] sm:w-[290px] flex-shrink-0">
                {renderTallCard(disciplines[2], card3Ref)}
              </div>

              {/* Card 04 */}
              <div className="w-[270px] sm:w-[290px] flex-shrink-0">
                {renderTallCard(disciplines[3], card4Ref)}
              </div>

            </div>

            {/* Space between Row 2 and Row 3 */}
            <div className="h-28" />

            {/* --------------------------------------------------------------------- */}
            {/* ROW 3: Cards 05, 06, 07 evenly spaced across columns                   */}
            {/* --------------------------------------------------------------------- */}
            <div className="flex items-center gap-8 sm:gap-12 lg:gap-14">
              
              {/* Card 05 */}
              <div className="w-[270px] sm:w-[290px] flex-shrink-0">
                {renderTallCard(disciplines[4], card5Ref)}
              </div>

              {/* Card 06 */}
              <div className="w-[270px] sm:w-[290px] flex-shrink-0">
                {renderTallCard(disciplines[5], card6Ref)}
              </div>

              {/* Card 07 (Warm Cream / Final Stage) */}
              <div className="w-[270px] sm:w-[290px] flex-shrink-0">
                {renderTallCard(disciplines[6], card7Ref)}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
