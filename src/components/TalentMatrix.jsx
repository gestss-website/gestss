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
  Sparkles
} from 'lucide-react';

export default function TalentMatrix({ onSelectRole }) {
  // Desktop refs
  const desktopContainerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);
  const card6Ref = useRef(null);
  const card7Ref = useRef(null);
  const card8Ref = useRef(null);

  // Mobile refs
  const mobileContainerRef = useRef(null);
  const mCard1Ref = useRef(null);
  const mCard2Ref = useRef(null);
  const mCard3Ref = useRef(null);
  const mCard4Ref = useRef(null);
  const mCard5Ref = useRef(null);
  const mCard6Ref = useRef(null);
  const mCard7Ref = useRef(null);
  const mCard8Ref = useRef(null);

  const [desktopPaths, setDesktopPaths] = useState({
    card1To2: '',
    card2To3: '',
    card3To4: '',
    loop4To5: '',
    card5To6: '',
    card6To7: '',
    card7To8: ''
  });

  const [mobilePaths, setMobilePaths] = useState({
    p1To2: '',
    p2To3: '',
    p3To4: '',
    p4To5: '',
    p5To6: '',
    p6To7: '',
    p7To8: '',
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
      // 1. Desktop Lines Calculation (Card 8 directly underneath Card 7)
      if (
        desktopContainerRef.current &&
        card1Ref.current && 
        card2Ref.current && 
        card3Ref.current && 
        card4Ref.current && 
        card5Ref.current && 
        card6Ref.current && 
        card7Ref.current &&
        card8Ref.current
      ) {
        const cRect = desktopContainerRef.current.getBoundingClientRect();
        const r1 = card1Ref.current.getBoundingClientRect();
        const r2 = card2Ref.current.getBoundingClientRect();
        const r3 = card3Ref.current.getBoundingClientRect();
        const r4 = card4Ref.current.getBoundingClientRect();
        const r5 = card5Ref.current.getBoundingClientRect();
        const r6 = card6Ref.current.getBoundingClientRect();
        const r7 = card7Ref.current.getBoundingClientRect();
        const r8 = card8Ref.current.getBoundingClientRect();

        // 1 -> 2 (Vertical drop)
        const c1CenterX = r1.left - cRect.left + r1.width / 2;
        const c1BottomY = r1.bottom - cRect.top;
        const c2TopY = r2.top - cRect.top;
        const card1To2 = `M ${c1CenterX},${c1BottomY} L ${c1CenterX},${c2TopY}`;

        // 2 -> 3 (Horizontal bridge)
        const c2RightX = r2.right - cRect.left;
        const c2MidY = r2.top - cRect.top + r2.height / 2;
        const c3LeftX = r3.left - cRect.left;
        const card2To3 = `M ${c2RightX},${c2MidY} L ${c3LeftX},${c2MidY}`;

        // 3 -> 4 (Horizontal bridge)
        const c3RightX = r3.right - cRect.left;
        const c3MidY = r3.top - cRect.top + r3.height / 2;
        const c4LeftX = r4.left - cRect.left;
        const card3To4 = `M ${c3RightX},${c3MidY} L ${c4LeftX},${c3MidY}`;

        // 4 -> 5 (U-turn loop to Row 3)
        const c4RightX = r4.right - cRect.left;
        const c4MidY = r4.top - cRect.top + r4.height / 2;
        const c5CenterX = r5.left - cRect.left + r5.width / 2;
        const c5TopY = r5.top - cRect.top;
        const loopRightX = c4RightX + 24;
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

        // 5 -> 6 (Horizontal bridge)
        const c5RightX = r5.right - cRect.left;
        const c5MidY = r5.top - cRect.top + r5.height / 2;
        const c6LeftX = r6.left - cRect.left;
        const card5To6 = `M ${c5RightX},${c5MidY} L ${c6LeftX},${c5MidY}`;

        // 6 -> 7 (Horizontal bridge)
        const c6RightX = r6.right - cRect.left;
        const c6MidY = r6.top - cRect.top + r6.height / 2;
        const c7LeftX = r7.left - cRect.left;
        const card6To7 = `M ${c6RightX},${c6MidY} L ${c7LeftX},${c6MidY}`;

        // 7 -> 8 (Direct Vertical drop from Card 7 to Card 8 directly below it!)
        const c7CenterX = r7.left - cRect.left + r7.width / 2;
        const c7BottomY = r7.bottom - cRect.top;
        const c8TopY = r8.top - cRect.top;
        const card7To8 = `M ${c7CenterX},${c7BottomY} L ${c7CenterX},${c8TopY}`;

        setDesktopPaths({
          card1To2,
          card2To3,
          card3To4,
          loop4To5,
          card5To6,
          card6To7,
          card7To8
        });
      }

      // 2. Mobile Lines Calculation (Snake / S-Curve Pipeline)
      if (
        mobileContainerRef.current &&
        mCard1Ref.current &&
        mCard2Ref.current &&
        mCard3Ref.current &&
        mCard4Ref.current &&
        mCard5Ref.current &&
        mCard6Ref.current &&
        mCard7Ref.current &&
        mCard8Ref.current
      ) {
        const mc = mobileContainerRef.current.getBoundingClientRect();
        const mr1 = mCard1Ref.current.getBoundingClientRect();
        const mr2 = mCard2Ref.current.getBoundingClientRect();
        const mr3 = mCard3Ref.current.getBoundingClientRect();
        const mr4 = mCard4Ref.current.getBoundingClientRect();
        const mr5 = mCard5Ref.current.getBoundingClientRect();
        const mr6 = mCard6Ref.current.getBoundingClientRect();
        const mr7 = mCard7Ref.current.getBoundingClientRect();
        const mr8 = mCard8Ref.current.getBoundingClientRect();

        // 1 -> 2 (Vertical drop down in Col 1)
        const c1X_12 = mr1.left - mc.left + mr1.width / 2;
        const p1To2 = `M ${c1X_12},${mr1.bottom - mc.top} L ${c1X_12},${mr2.top - mc.top}`;

        // 2 -> 3 (Horizontal bridge right from Col 1 to Col 2)
        const midY23 = (mr2.top - mc.top + mr2.height / 2 + mr3.top - mc.top + mr3.height / 2) / 2;
        const p2To3 = `M ${mr2.right - mc.left},${midY23} L ${mr3.left - mc.left},${midY23}`;

        // 3 -> 4 (Vertical drop down in Col 2)
        const c2X_34 = mr3.left - mc.left + mr3.width / 2;
        const p3To4 = `M ${c2X_34},${mr3.bottom - mc.top} L ${c2X_34},${mr4.top - mc.top}`;

        // 4 -> 5 (Horizontal bridge left from Col 2 to Col 1)
        const midY45 = (mr4.top - mc.top + mr4.height / 2 + mr5.top - mc.top + mr5.height / 2) / 2;
        const p4To5 = `M ${mr4.left - mc.left},${midY45} L ${mr5.right - mc.left},${midY45}`;

        // 5 -> 6 (Vertical drop down in Col 1)
        const c1X_56 = mr5.left - mc.left + mr5.width / 2;
        const p5To6 = `M ${c1X_56},${mr5.bottom - mc.top} L ${c1X_56},${mr6.top - mc.top}`;

        // 6 -> 7 (Horizontal bridge right from Col 1 to Col 2)
        const midY67 = (mr6.top - mc.top + mr6.height / 2 + mr7.top - mc.top + mr7.height / 2) / 2;
        const p6To7 = `M ${mr6.right - mc.left},${midY67} L ${mr7.left - mc.left},${midY67}`;

        // 7 -> 8 (Vertical drop down in Col 2)
        const c2X_78 = mr7.left - mc.left + mr7.width / 2;
        const p7To8 = `M ${c2X_78},${mr7.bottom - mc.top} L ${c2X_78},${mr8.top - mc.top}`;

        setMobilePaths({ p1To2, p2To3, p3To4, p4To5, p5To6, p6To7, p7To8 });
      }
    };

    const resizeObserver = new ResizeObserver(updateLines);
    if (desktopContainerRef.current) resizeObserver.observe(desktopContainerRef.current);
    if (mobileContainerRef.current) resizeObserver.observe(mobileContainerRef.current);

    window.addEventListener('resize', updateLines);
    if (document.fonts) document.fonts.ready.then(updateLines);

    updateLines();
    const t1 = setTimeout(updateLines, 80);
    const t2 = setTimeout(updateLines, 250);
    const t3 = setTimeout(updateLines, 600);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateLines);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  // Desktop Card Renderer
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

        {/* Tall Card Body */}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <h4 className={`text-base font-bold font-display tracking-tight leading-snug ${
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

  // Mobile Compact Card Renderer
  const renderMobileCard = (role, cardRef) => {
    const Icon = role.icon;
    const isLightGold = role.theme === 'light-gold';

    return (
      <div
        ref={cardRef}
        key={role.id}
        className={`w-full rounded-2xl p-2.5 sm:p-3 transition-all duration-300 flex flex-col justify-between border group relative z-10 shadow-md min-h-[175px] sm:min-h-[185px] ${
          isLightGold
            ? 'bg-[#fef9eb] text-slate-900 border-[#e6d19a]'
            : 'bg-[#111722] text-slate-100 border-slate-800'
        }`}
      >
        <div>
          {/* Top row: Badge + Icon */}
          <div className="flex items-center justify-between gap-1 mb-1.5">
            <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${
              isLightGold ? 'bg-amber-200/90 text-amber-950' : 'bg-white/10 text-slate-400'
            }`}>
              {role.step}
            </span>
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 ${
              isLightGold ? 'bg-amber-950 text-amber-300' : 'bg-white/10 text-white'
            }`}>
              <Icon className="w-3 h-3" style={{ color: role.accentColor }} />
            </div>
          </div>

          {/* Title */}
          <h4 className={`text-[10px] sm:text-[11px] font-bold font-display tracking-tight leading-snug line-clamp-2 ${
            isLightGold ? 'text-slate-950' : 'text-white'
          }`}>
            {role.title}
          </h4>

          {/* Description */}
          <p className={`mt-1 text-[8px] sm:text-[8.5px] leading-snug font-normal line-clamp-2 ${
            isLightGold ? 'text-slate-700' : 'text-slate-400'
          }`}>
            {role.desc}
          </p>
        </div>

        {/* Action button */}
        <button
          onClick={() => onSelectRole(role.title)}
          className={`w-full py-1.5 px-2 mt-2 rounded-lg text-[8.5px] font-bold transition-all flex items-center justify-center gap-1 shrink-0 ${
            isLightGold
              ? 'bg-slate-950 text-white'
              : 'bg-[#f6ebd4] text-slate-950'
          }`}
        >
          <span>Request Talent</span>
          <ArrowRight className="w-2.5 h-2.5" />
        </button>
      </div>
    );
  };

  return (
    <section id="talent" className="py-12 lg:py-20 bg-[#f6f7f9] relative overflow-hidden">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (lg and up): 3 Columns per row, No Horizontal Scrollbar       */}
        {/* Card 8 placed directly under Card 7 and connected straight downwards       */}
        {/* ========================================================================= */}
        <div className="hidden lg:block">
          <div ref={desktopContainerRef} className="max-w-6xl mx-auto relative py-4">
            
            {/* SVG OVERLAY for Desktop */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
              <defs>
                <marker
                  id="talent-arrow-desktop"
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

              {/* 1 -> 2 */}
              {desktopPaths.card1To2 && (
                <path d={desktopPaths.card1To2} stroke="#0f172a" strokeWidth="2.2" fill="none" markerEnd="url(#talent-arrow-desktop)" />
              )}
              {/* 2 -> 3 */}
              {desktopPaths.card2To3 && (
                <path d={desktopPaths.card2To3} stroke="#0f172a" strokeWidth="2.2" fill="none" markerEnd="url(#talent-arrow-desktop)" />
              )}
              {/* 3 -> 4 */}
              {desktopPaths.card3To4 && (
                <path d={desktopPaths.card3To4} stroke="#0f172a" strokeWidth="2.2" fill="none" markerEnd="url(#talent-arrow-desktop)" />
              )}
              {/* 4 -> 5 */}
              {desktopPaths.loop4To5 && (
                <path d={desktopPaths.loop4To5} stroke="#0f172a" strokeWidth="2.2" fill="none" markerEnd="url(#talent-arrow-desktop)" />
              )}
              {/* 5 -> 6 */}
              {desktopPaths.card5To6 && (
                <path d={desktopPaths.card5To6} stroke="#0f172a" strokeWidth="2.2" fill="none" markerEnd="url(#talent-arrow-desktop)" />
              )}
              {/* 6 -> 7 */}
              {desktopPaths.card6To7 && (
                <path d={desktopPaths.card6To7} stroke="#0f172a" strokeWidth="2.2" fill="none" markerEnd="url(#talent-arrow-desktop)" />
              )}
              {/* 7 -> 8 (Direct Vertical drop into Card 8) */}
              {desktopPaths.card7To8 && (
                <path d={desktopPaths.card7To8} stroke="#0f172a" strokeWidth="2.2" fill="none" markerEnd="url(#talent-arrow-desktop)" />
              )}
            </svg>

            {/* ROW 1: Card 01 (Col 1) + Headline Block (Cols 2 & 3) */}
            <div className="flex items-center gap-10 xl:gap-14">
              <div className="w-[280px] xl:w-[300px] shrink-0">
                {renderTallCard(disciplines[0], card1Ref)}
              </div>

              <div className="flex-1 max-w-[640px] pl-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-950 text-white text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  Specialized Disciplines
                </div>

                <h2 className="text-4xl xl:text-5xl font-bold font-display text-slate-950 tracking-tight leading-[1.08]">
                  Key Areas of <span className="text-gradient-green">Talent</span>
                </h2>

                <p className="mt-3 text-sm xl:text-base text-slate-600 font-normal max-w-xl">
                  Connecting clean-energy organizations with specialized technical, engineering, field operations, and operational talent.
                </p>

                <div className="mt-5">
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

            {/* Gap between Row 1 and Row 2 */}
            <div className="h-16 xl:h-20" />

            {/* ROW 2: Card 02, 03, 04 (3 Cards across 3 Columns) */}
            <div className="flex items-center gap-10 xl:gap-14">
              <div className="w-[280px] xl:w-[300px] shrink-0">
                {renderTallCard(disciplines[1], card2Ref)}
              </div>
              <div className="w-[280px] xl:w-[300px] shrink-0">
                {renderTallCard(disciplines[2], card3Ref)}
              </div>
              <div className="w-[280px] xl:w-[300px] shrink-0">
                {renderTallCard(disciplines[3], card4Ref)}
              </div>
            </div>

            {/* Gap between Row 2 and Row 3 */}
            <div className="h-20 xl:h-24" />

            {/* ROW 3: Card 05, 06, 07 (3 Cards across 3 Columns) */}
            <div className="flex items-center gap-10 xl:gap-14">
              <div className="w-[280px] xl:w-[300px] shrink-0">
                {renderTallCard(disciplines[4], card5Ref)}
              </div>
              <div className="w-[280px] xl:w-[300px] shrink-0">
                {renderTallCard(disciplines[5], card6Ref)}
              </div>
              <div className="w-[280px] xl:w-[300px] shrink-0">
                {renderTallCard(disciplines[6], card7Ref)}
              </div>
            </div>

            {/* Gap between Row 3 and Row 4 */}
            <div className="h-16 xl:h-20" />

            {/* ROW 4: "More to come" (Cols 1 & 2) + Card 08 directly under Card 07 (Col 3) */}
            <div className="flex items-center gap-10 xl:gap-14">
              {/* Expansion Banner spanning Cols 1 & 2 */}
              <div className="w-[600px] xl:w-[654px] shrink-0 rounded-[28px] border-2 border-dashed border-slate-300 bg-white/70 p-7 xl:p-8 flex items-center justify-between shadow-sm">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                    Continuous Expansion
                  </div>
                  <h4 className="text-xl font-bold font-display text-slate-900">
                    More Disciplines To Come
                  </h4>
                  <p className="mt-1 text-xs text-slate-600 max-w-md">
                    Expanding specialized talent pipelines as clean-energy technologies and infrastructure requirements evolve.
                  </p>
                </div>
                <button
                  onClick={() => onSelectRole('All Key Areas of Talent')}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 transition-all shrink-0 ml-4"
                >
                  Request Custom Roles →
                </button>
              </div>

              {/* Card 08 in Col 3 (aligned directly underneath Card 07) */}
              <div className="w-[280px] xl:w-[300px] shrink-0">
                {renderTallCard(disciplines[7], card8Ref)}
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (< lg): 2-Column Snake / S-Curve Pipeline (NO HORIZONTAL SCROLL) */}
        {/* Layout requested by user:                                                 */}
        {/* 1 (Col 1)    | Heading & Sub-headings (Col 2)                             */}
        {/* 2 (Col 1)    | 3 (Col 2)                                                  */}
        {/* 5 (Col 1)    | 4 (Col 2)                                                  */}
        {/* 6 (Col 1)    | 7 (Col 2)                                                  */}
        {/* More to come | 8 (Col 2)                                                  */}
        {/* Path: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8                                */}
        {/* ========================================================================= */}
        <div className="lg:hidden">
          <div ref={mobileContainerRef} className="max-w-[340px] xs:max-w-[360px] sm:max-w-[380px] mx-auto relative py-3 px-1">
            
            {/* SVG OVERLAY for Mobile Snake Pipeline (z-20 so lines and arrows are crisp and unobstructed) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-20">
              <defs>
                <marker
                  id="talent-arrow-mobile"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto"
                >
                  <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#0f172a" />
                </marker>
                <marker
                  id="talent-dot-mobile"
                  viewBox="0 0 10 10"
                  refX="5"
                  refY="5"
                  markerWidth="5"
                  markerHeight="5"
                >
                  <circle cx="5" cy="5" r="3.5" fill="#10b981" />
                </marker>
              </defs>

              {/* 1 -> 2 (Down) */}
              {mobilePaths.p1To2 && (
                <>
                  <path d={mobilePaths.p1To2} stroke="#10b981" strokeWidth="4" strokeDasharray="3 3" fill="none" className="opacity-40" />
                  <path d={mobilePaths.p1To2} stroke="#0f172a" strokeWidth="2.5" fill="none" markerStart="url(#talent-dot-mobile)" markerEnd="url(#talent-arrow-mobile)" />
                </>
              )}
              {/* 2 -> 3 (Right) */}
              {mobilePaths.p2To3 && (
                <>
                  <path d={mobilePaths.p2To3} stroke="#10b981" strokeWidth="4" strokeDasharray="3 3" fill="none" className="opacity-40" />
                  <path d={mobilePaths.p2To3} stroke="#0f172a" strokeWidth="2.5" fill="none" markerStart="url(#talent-dot-mobile)" markerEnd="url(#talent-arrow-mobile)" />
                </>
              )}
              {/* 3 -> 4 (Down) */}
              {mobilePaths.p3To4 && (
                <>
                  <path d={mobilePaths.p3To4} stroke="#10b981" strokeWidth="4" strokeDasharray="3 3" fill="none" className="opacity-40" />
                  <path d={mobilePaths.p3To4} stroke="#0f172a" strokeWidth="2.5" fill="none" markerStart="url(#talent-dot-mobile)" markerEnd="url(#talent-arrow-mobile)" />
                </>
              )}
              {/* 4 -> 5 (Left) */}
              {mobilePaths.p4To5 && (
                <>
                  <path d={mobilePaths.p4To5} stroke="#10b981" strokeWidth="4" strokeDasharray="3 3" fill="none" className="opacity-40" />
                  <path d={mobilePaths.p4To5} stroke="#0f172a" strokeWidth="2.5" fill="none" markerStart="url(#talent-dot-mobile)" markerEnd="url(#talent-arrow-mobile)" />
                </>
              )}
              {/* 5 -> 6 (Down) */}
              {mobilePaths.p5To6 && (
                <>
                  <path d={mobilePaths.p5To6} stroke="#10b981" strokeWidth="4" strokeDasharray="3 3" fill="none" className="opacity-40" />
                  <path d={mobilePaths.p5To6} stroke="#0f172a" strokeWidth="2.5" fill="none" markerStart="url(#talent-dot-mobile)" markerEnd="url(#talent-arrow-mobile)" />
                </>
              )}
              {/* 6 -> 7 (Right) */}
              {mobilePaths.p6To7 && (
                <>
                  <path d={mobilePaths.p6To7} stroke="#10b981" strokeWidth="4" strokeDasharray="3 3" fill="none" className="opacity-40" />
                  <path d={mobilePaths.p6To7} stroke="#0f172a" strokeWidth="2.5" fill="none" markerStart="url(#talent-dot-mobile)" markerEnd="url(#talent-arrow-mobile)" />
                </>
              )}
              {/* 7 -> 8 (Down) */}
              {mobilePaths.p7To8 && (
                <>
                  <path d={mobilePaths.p7To8} stroke="#10b981" strokeWidth="4" strokeDasharray="3 3" fill="none" className="opacity-40" />
                  <path d={mobilePaths.p7To8} stroke="#0f172a" strokeWidth="2.5" fill="none" markerStart="url(#talent-dot-mobile)" markerEnd="url(#talent-arrow-mobile)" />
                </>
              )}
            </svg>

            {/* Mobile 2-Column Grid with generous horizontal gap (gap-x-8 = 32px) and bottom gap (gap-y-12 = 48px) */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 relative z-10">
              
              {/* ROW 1: Card 01 (Col 1) | Heading & Subheading (Col 2) */}
              <div>
                {renderMobileCard(disciplines[0], mCard1Ref)}
              </div>
              <div className="p-1 sm:p-2 flex flex-col justify-center">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-slate-950 text-white text-[8px] font-bold uppercase tracking-wider mb-2 w-fit">
                  <Sparkles className="w-2.5 h-2.5 text-emerald-400" />
                  Key Talent
                </div>
                <h2 className="text-base sm:text-lg font-bold font-display text-slate-950 tracking-tight leading-tight">
                  Key Areas of <span className="text-emerald-700">Talent</span>
                </h2>
                <p className="mt-1 text-[8.5px] text-slate-600 leading-tight font-normal">
                  Specialized engineering, operations, and technical talent across renewable infrastructure.
                </p>
              </div>

              {/* ROW 2: Card 02 (Col 1) | Card 03 (Col 2) */}
              <div>
                {renderMobileCard(disciplines[1], mCard2Ref)}
              </div>
              <div>
                {renderMobileCard(disciplines[2], mCard3Ref)}
              </div>

              {/* ROW 3: Card 05 (Col 1) | Card 04 (Col 2) */}
              <div>
                {renderMobileCard(disciplines[4], mCard5Ref)}
              </div>
              <div>
                {renderMobileCard(disciplines[3], mCard4Ref)}
              </div>

              {/* ROW 4: Card 06 (Col 1) | Card 07 (Col 2) */}
              <div>
                {renderMobileCard(disciplines[5], mCard6Ref)}
              </div>
              <div>
                {renderMobileCard(disciplines[6], mCard7Ref)}
              </div>

              {/* ROW 5: "More to come" (Col 1) | Card 08 (Col 2) */}
              <div className="w-full rounded-2xl border-2 border-dashed border-slate-300/90 bg-white/80 p-2.5 flex flex-col items-center justify-center text-center min-h-[175px] sm:min-h-[185px]">
                <Sparkles className="w-4 h-4 text-emerald-600 mb-1.5 animate-pulse" />
                <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                  More to come
                </span>
                <p className="text-[8px] text-slate-500 mt-1 leading-snug">
                  Expanding clean-tech disciplines &amp; custom roles
                </p>
              </div>
              <div>
                {renderMobileCard(disciplines[7], mCard8Ref)}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
