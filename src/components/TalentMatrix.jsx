import React, { useRef, useState, useEffect } from 'react';
import { 
  Sun, 
  Cpu, 
  Activity, 
  BatteryCharging, 
  Truck, 
  MapPin, 
  Network, 
  Headphones,
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
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
  const card8Ref = useRef(null);

  const cardRefs = [
    card1Ref, card2Ref, card3Ref, card4Ref,
    card5Ref, card6Ref, card7Ref, card8Ref
  ];

  const [paths, setPaths] = useState({
    card1To2: '',
    card2To3: '',
    card3To4: '',
    loop4To5: '',
    card5To6: '',
    card6To7: '',
    card7To8: ''
  });

  // 8 Key Areas of Talent exactly as provided by user
  const disciplines = [
    {
      id: 'solar-pv-oandm',
      step: '01',
      title: 'Solar PV Installation, Operations & Maintenance',
      desc: 'Supporting solar projects with professionals across installation, operations, and maintenance requirements.',
      icon: Sun,
      theme: 'header-accent',
      accentColor: '#eab308'
    },
    {
      id: 'renewable-engineering',
      step: '02',
      title: 'Renewable-Energy Engineering & Project Management',
      desc: 'Connecting renewable-energy projects with engineering and project-management professionals aligned with project needs.',
      icon: Cpu,
      theme: 'dark',
      accentColor: '#10b981'
    },
    {
      id: 'electrical-engineering',
      step: '03',
      title: 'Electrical Engineering & Energy Systems',
      desc: 'Specialized talent for electrical engineering and energy-system requirements across clean-energy projects.',
      icon: Activity,
      theme: 'dark',
      accentColor: '#38bdf8'
    },
    {
      id: 'evse-installation',
      step: '04',
      title: 'EVSE Installation, Commissioning & Maintenance',
      desc: 'Workforce support for EVSE installation, commissioning, troubleshooting, and maintenance requirements.',
      icon: BatteryCharging,
      theme: 'dark',
      accentColor: '#a855f7'
    },
    {
      id: 'ev-charging-fleet',
      step: '05',
      title: 'EV Charging Infrastructure & Fleet Deployment',
      desc: 'Supporting charging infrastructure and fleet deployment projects with relevant technical professionals.',
      icon: Truck,
      theme: 'dark',
      accentColor: '#f59e0b'
    },
    {
      id: 'site-surveying',
      step: '06',
      title: 'Site Surveying & Technical Field Operations',
      desc: 'Providing specialized personnel for site surveying and technical field operations across project environments.',
      icon: MapPin,
      theme: 'dark',
      accentColor: '#34d399'
    },
    {
      id: 'grid-integration',
      step: '07',
      title: 'Grid Integration & Associated Energy Systems',
      desc: 'Connecting organizations with professionals experienced in grid integration and associated energy-system requirements.',
      icon: Network,
      theme: 'dark',
      accentColor: '#60a5fa'
    },
    {
      id: 'support-admin',
      step: '08',
      title: 'Technical, Operational & Administrative Support',
      desc: 'Supporting clean-energy organizations with specialized technical, operational, and administrative personnel.',
      icon: Headphones,
      theme: 'light-gold',
      accentColor: '#ca8a04'
    }
  ];

  // Dynamically calculate and update connected SVG lines
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
        !card7Ref.current ||
        !card8Ref.current
      ) return;

      const cRect = containerRef.current.getBoundingClientRect();
      const r1 = card1Ref.current.getBoundingClientRect();
      const r2 = card2Ref.current.getBoundingClientRect();
      const r3 = card3Ref.current.getBoundingClientRect();
      const r4 = card4Ref.current.getBoundingClientRect();
      const r5 = card5Ref.current.getBoundingClientRect();
      const r6 = card6Ref.current.getBoundingClientRect();
      const r7 = card7Ref.current.getBoundingClientRect();
      const r8 = card8Ref.current.getBoundingClientRect();

      // 1. Card 01 to Card 02 (Vertical drop)
      const c1CenterX = r1.left - cRect.left + r1.width / 2;
      const c1BottomY = r1.bottom - cRect.top;
      const c2TopY = r2.top - cRect.top;
      const card1To2 = `M ${c1CenterX},${c1BottomY} L ${c1CenterX},${c2TopY}`;

      // 2. Card 02 to Card 03 (Horizontal bridge)
      const c2RightX = r2.right - cRect.left;
      const c2MidY = r2.top - cRect.top + r2.height / 2;
      const c3LeftX = r3.left - cRect.left;
      const card2To3 = `M ${c2RightX},${c2MidY} L ${c3LeftX},${c2MidY}`;

      // 3. Card 03 to Card 04 (Horizontal bridge)
      const c3RightX = r3.right - cRect.left;
      const c3MidY = r3.top - cRect.top + r3.height / 2;
      const c4LeftX = r4.left - cRect.left;
      const card3To4 = `M ${c3RightX},${c3MidY} L ${c4LeftX},${c3MidY}`;

      // 4. Card 04 to Card 05 (U-turn loop)
      const c4RightX = r4.right - cRect.left;
      const c4MidY = r4.top - cRect.top + r4.height / 2;
      const c5CenterX = r5.left - cRect.left + r5.width / 2;
      const c5TopY = r5.top - cRect.top;
      
      const loopRightX = c4RightX + 28;
      const gapY = (r4.bottom + r5.top) / 2 - cRect.top;
      const R = 12;
      
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

      // 5. Card 05 to Card 06 (Horizontal bridge)
      const c5RightX = r5.right - cRect.left;
      const c5MidY = r5.top - cRect.top + r5.height / 2;
      const c6LeftX = r6.left - cRect.left;
      const card5To6 = `M ${c5RightX},${c5MidY} L ${c6LeftX},${c5MidY}`;

      // 6. Card 06 to Card 07 (Horizontal bridge)
      const c6RightX = r6.right - cRect.left;
      const c6MidY = r6.top - cRect.top + r6.height / 2;
      const c7LeftX = r7.left - cRect.left;
      const card6To7 = `M ${c6RightX},${c6MidY} L ${c7LeftX},${c6MidY}`;

      // 7. Card 07 to Card 08 (Horizontal bridge)
      const c7RightX = r7.right - cRect.left;
      const c7MidY = r7.top - cRect.top + r7.height / 2;
      const c8LeftX = r8.left - cRect.left;
      const card7To8 = `M ${c7RightX},${c7MidY} L ${c8LeftX},${c7MidY}`;

      setPaths({
        card1To2,
        card2To3,
        card3To4,
        loop4To5,
        card5To6,
        card6To7,
        card7To8
      });
    };

    const resizeObserver = new ResizeObserver(() => {
      updateLines();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    cardRefs.forEach(ref => {
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

  // Render tall portrait card with exact user content
  const renderTallCard = (role, cardRef) => {
    const Icon = role.icon;
    const isHeaderAccent = role.theme === 'header-accent';
    const isLightGold = role.theme === 'light-gold';

    return (
      <div 
        ref={cardRef}
        key={role.id}
        className={`w-full min-h-[380px] rounded-[28px] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl border group relative z-10 ${
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
                DISCIPLINE {role.step}
              </span>
              <div className="w-2 h-2 rounded-full bg-emerald-600" />
            </div>
            <div className="mt-3 flex items-center">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-amber-300 flex items-center justify-center shadow-md flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
            </div>
          </div>
        ) : isLightGold ? (
          <div className="p-5 border-b border-[#ebd8a7]">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest bg-amber-200/90 text-amber-950 px-2.5 py-1 rounded-full">
                DISCIPLINE {role.step}
              </span>
              <div className="w-2 h-2 rounded-full bg-amber-700" />
            </div>
            <div className="mt-3 flex items-center">
              <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-300 flex items-center justify-center shadow-md flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
            </div>
          </div>
        ) : (
          <div className="p-5 border-b border-slate-800/80 bg-slate-950/50">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                DISCIPLINE {role.step}
              </span>
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
            </div>
            <div className="mt-3 flex items-center">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 text-white flex items-center justify-center group-hover:scale-105 transition-transform flex-shrink-0">
                <Icon className="w-5 h-5" style={{ color: role.accentColor }} />
              </div>
            </div>
          </div>
        )}

        {/* Tall Card Body with Exact Content */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h4 className={`text-base font-black font-display tracking-tight leading-snug ${
              isLightGold ? 'text-slate-950' : 'text-white'
            }`}>
              {role.title}
            </h4>

            <p className={`mt-3.5 text-xs sm:text-sm leading-relaxed font-normal ${
              isLightGold ? 'text-slate-700' : 'text-slate-300'
            }`}>
              {role.desc}
            </p>
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
              <span>Request Talent</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="talent" className="py-12 lg:py-16 bg-[#f6f7f9] relative overflow-hidden">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mobile Swipe Hint */}
        <div className="flex lg:hidden items-center justify-between gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/80 text-slate-700 text-xs font-semibold mb-4 w-fit">
          <MoveRight className="w-3.5 h-3.5" />
          <span>Scroll horizontally to view connected pipeline</span>
        </div>

        {/* ========================================================================= */}
        {/* CONNECTED DIAGRAM CANVAS */}
        {/* ========================================================================= */}
        <div className="overflow-x-auto pb-8 pt-2 scrollbar-thin scrollbar-thumb-slate-300">
          <div ref={containerRef} className="w-fit mx-auto relative pl-4 sm:pl-8 pr-28 sm:pr-32 py-4">
            
            {/* SVG OVERLAY: Perfectly connects cards with lines */}
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

              {/* 7. Card 07 to Card 08 */}
              {paths.card7To8 && (
                <path
                  d={paths.card7To8}
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
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-950 text-white text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Specialized Disciplines
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-display text-slate-950 tracking-tight leading-[1.08]">
                  Key Areas of <span className="text-gradient-green">Talent</span>
                </h2>

                <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal max-w-xl">
                  Connecting clean-energy organizations with specialized technical, engineering, field operations, and operational talent.
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <button
                    onClick={() => onSelectRole('All Key Areas of Talent')}
                    className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 shadow-md transition-all flex items-center gap-2"
                  >
                    <span>Request Talent</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
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
            {/* ROW 3: Cards 05, 06, 07, 08 evenly spaced across columns               */}
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

              {/* Card 07 */}
              <div className="w-[270px] sm:w-[290px] flex-shrink-0">
                {renderTallCard(disciplines[6], card7Ref)}
              </div>

              {/* Card 08 (Warm Cream / Final Stage) */}
              <div className="w-[270px] sm:w-[290px] flex-shrink-0">
                {renderTallCard(disciplines[7], card8Ref)}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
