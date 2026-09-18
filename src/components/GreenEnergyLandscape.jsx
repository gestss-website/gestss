import React from 'react';
import { 
  Leaf, 
  Car, 
  Users, 
  Sun, 
  Wind 
} from 'lucide-react';
import { WindAndSolarArt, SolarArrayArt } from './CleanEnergyVectorArt';

export default function GreenEnergyLandscape() {
  // EV Bar data
  const evBarData = [
    { year: 'FY 2019–20', value: 1.74, heightPct: 9 },
    { year: 'FY 2020–21', value: 1.43, heightPct: 7 },
    { year: 'FY 2021–22', value: 4.59, heightPct: 23 },
    { year: 'FY 2022–23', value: 11.83, heightPct: 60 },
    { year: 'FY 2023–24', value: 16.81, heightPct: 85 },
    { year: 'FY 2024–25', value: 19.68, heightPct: 100 },
  ];

  return (
    <section id="landscape" className="py-12 lg:py-16 bg-[#f5fbf8] relative overflow-hidden border-b border-emerald-100/70">
      
      {/* Decorative clean energy backdrop elements */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-emerald-200/25 via-emerald-100/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-100/30 via-emerald-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Clean energy vector backdrop: adjusted for mobile to prevent clipping and content overlap */}
      <WindAndSolarArt className="absolute top-2 right-2 sm:top-6 sm:right-10 w-24 h-16 sm:w-60 sm:h-36 opacity-35 sm:opacity-45" />
      <SolarArrayArt className="hidden sm:block absolute sm:bottom-2 sm:left-6 w-52 h-28 opacity-30 sm:opacity-35" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          {/* Green accent line */}
          <div className="w-12 h-1.5 bg-emerald-500 rounded-full mb-4" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight leading-[1.15]">
            The Numbers Behind <br />
            <span className="text-emerald-700">a Greener Tomorrow</span>
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* CARDS GRID: 2 COLUMNS ON MOBILE (PAIRS SIDE-BY-SIDE) / 12 COLS ON DESKTOP */}
        {/* Pair 1 on mobile: Renewable Capacity & EV Registrations                   */}
        {/* Pair 2 on mobile: Global Renewable Jobs & Solar Growth                    */}
        {/* Full width on mobile: Key Highlights Table                                */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-6 lg:gap-7 items-stretch">
          
          {/* Card 1: Renewable Energy Capacity (India, Aug 2026) */}
          <div className="col-span-1 lg:col-span-4 bg-white rounded-2xl sm:rounded-[28px] p-3.5 sm:p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Card Title */}
              <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-6">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold font-display text-slate-900 leading-tight sm:leading-snug">
                    Renewable Energy Capacity
                  </h3>
                  <span className="text-[9px] sm:text-xs text-slate-500 font-medium">
                    (India, Aug 2026)
                  </span>
                </div>
              </div>

              {/* Donut Chart Visual & Legend */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 my-2 sm:my-4">
                
                {/* Donut Circle SVG */}
                <div className="relative w-28 h-28 sm:w-44 sm:h-44 flex-shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
                    {/* Background Ring */}
                    <circle cx="80" cy="80" r="62" stroke="#e2e8f0" strokeWidth="18" fill="none" />
                    
                    {/* Other RE Segment: 243 GW (Approx 80% arc, cyan-green) */}
                    <circle
                      cx="80"
                      cy="80"
                      r="62"
                      stroke="#86efac"
                      strokeWidth="18"
                      strokeDasharray={`${(243 / 304) * 390} 390`}
                      strokeDashoffset="0"
                      fill="none"
                      className="transition-all duration-700"
                    />

                    {/* Wind Segment: 58 GW (teal-cyan) */}
                    <circle
                      cx="80"
                      cy="80"
                      r="62"
                      stroke="#06b6d4"
                      strokeWidth="18"
                      strokeDasharray={`${(58 / 304) * 390} 390`}
                      strokeDashoffset={`-${(168 / 304) * 390}`}
                      fill="none"
                      className="transition-all duration-700"
                    />

                    {/* Solar Segment: 168 GW (55% arc, emerald) */}
                    <circle
                      cx="80"
                      cy="80"
                      r="62"
                      stroke="#059669"
                      strokeWidth="18"
                      strokeDasharray={`${(168 / 304) * 390} 390`}
                      strokeDashoffset="0"
                      fill="none"
                      className="transition-all duration-700"
                    />
                  </svg>

                  {/* Center Text inside Donut */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-1 sm:p-2">
                    <span className="text-base sm:text-2xl lg:text-[26px] font-black font-display text-slate-900 leading-tight">
                      304 GW
                    </span>
                    <span className="text-[8px] sm:text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                      Total Non-Fossil<br />Capacity
                    </span>
                  </div>
                </div>

                {/* Legend Items */}
                <div className="space-y-1.5 sm:space-y-3.5 w-full sm:min-w-[130px]">
                  <div className="flex items-center gap-1.5 sm:gap-2.5">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-600 flex-shrink-0" />
                    <div className="flex sm:block justify-between w-full items-center">
                      <span className="text-[9px] sm:text-[11px] text-slate-500 block leading-tight font-medium">Solar</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">168 GW</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2.5">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyan-500 flex-shrink-0" />
                    <div className="flex sm:block justify-between w-full items-center">
                      <span className="text-[9px] sm:text-[11px] text-slate-500 block leading-tight font-medium">Wind</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">58 GW</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2.5">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-300 flex-shrink-0" />
                    <div className="flex sm:block justify-between w-full items-center">
                      <span className="text-[9px] sm:text-[11px] text-slate-500 block leading-tight font-medium">Other RE</span>
                      <span className="text-xs sm:text-sm font-bold text-slate-900">243 GW</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2.5 pt-1 border-t border-slate-100">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-slate-400 flex-shrink-0" />
                    <div className="flex sm:block justify-between w-full items-center">
                      <span className="text-[9px] sm:text-[11px] text-slate-500 block leading-tight font-medium">Total</span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900">304 GW</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Card 2: EV Registrations in India (Lakh) */}
          <div className="col-span-1 lg:col-span-4 bg-white rounded-2xl sm:rounded-[28px] p-3.5 sm:p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Card Title */}
              <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-6">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-200/60 text-blue-700 flex items-center justify-center flex-shrink-0">
                  <Car className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold font-display text-slate-900 leading-snug">
                    EV Registrations in India
                  </h3>
                  <span className="text-[9px] sm:text-xs text-slate-500 font-medium">
                    (Lakh)
                  </span>
                </div>
              </div>

              {/* Bar Chart Canvas with Y-Axis */}
              <div className="mt-2 sm:mt-4">
                <div className="flex items-end gap-1 sm:gap-2 h-36 sm:h-48">
                  {/* Y-Axis Labels */}
                  <div className="flex flex-col justify-between h-full text-[8px] sm:text-[10px] font-semibold text-slate-400 pr-0.5 sm:pr-1 text-right">
                    <span>25</span>
                    <span>20</span>
                    <span>15</span>
                    <span>10</span>
                    <span>5</span>
                    <span>0</span>
                  </div>

                  {/* Bars Container - bottom border is the axis line on which bars sit */}
                  <div className="flex-1 grid grid-cols-6 gap-1 sm:gap-3 items-end h-full border-b border-l border-slate-200 pl-1 sm:pl-2">
                    {evBarData.map((bar, i) => (
                      <div key={i} className="flex flex-col items-center justify-end h-full group/bar">
                        {/* Value label on top of bar */}
                        <span className="text-[7.5px] sm:text-[10px] font-bold text-slate-700 mb-0.5 sm:mb-1 opacity-90">
                          {bar.value}
                        </span>

                        {/* Bar Pillar */}
                        <div
                          className="w-full max-w-[12px] sm:max-w-[34px] rounded-t sm:rounded-t-lg bg-gradient-to-t from-emerald-600 via-teal-500 to-emerald-400 group-hover/bar:brightness-110 transition-all duration-300 shadow-sm"
                          style={{ height: `${bar.heightPct * 0.85}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Years Row - strictly BELOW the bottom line! */}
                <div className="flex items-center gap-1 sm:gap-2 pt-1.5 sm:pt-2">
                  <div className="w-3.5 sm:w-5 flex-shrink-0" />
                  <div className="flex-1 grid grid-cols-6 gap-1 sm:gap-3 pl-1 sm:pl-2">
                    {evBarData.map((bar, i) => (
                      <span key={i} className="text-[7.5px] sm:text-[10px] text-slate-500 font-medium text-center truncate block w-full">
                        <span className="sm:hidden">{bar.year.slice(-2)}</span>
                        <span className="hidden sm:inline">{bar.year}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Global Renewable Energy Jobs (2024) */}
          <div className="col-span-1 lg:col-span-4 bg-white rounded-2xl sm:rounded-[28px] p-3.5 sm:p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Card Title */}
              <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-6">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold font-display text-slate-900 leading-snug">
                    Global Renewable Energy Jobs
                  </h3>
                  <span className="text-[9px] sm:text-xs text-slate-500 font-medium">
                    (2024)
                  </span>
                </div>
              </div>

              {/* Pie Chart Visual & Legend */}
              <div className="flex flex-col items-center justify-center my-2 sm:my-4">
                
                {/* 2-Color Pie Chart SVG */}
                <div className="relative w-32 h-32 sm:w-44 sm:h-44 flex items-center justify-center">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 100">
                    {/* Full Green Circle (Other 57%) */}
                    <circle cx="50" cy="50" r="46" fill="#16a34a" />
                    
                    {/* Blue Wedge (Solar PV 43%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="23"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="46"
                      strokeDasharray="62.14 144.51"
                      transform="rotate(-90 50 50)"
                    />

                    {/* Solar PV slice labels inside SVG so they never cut off */}
                    <g className="select-none pointer-events-none">
                      <text x="71" y="42" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="bold" className="font-sans">
                        Solar PV
                      </text>
                      <text x="71" y="50" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="900" className="font-sans">
                        7.2M
                      </text>
                      <text x="71" y="57" textAnchor="middle" fill="#ffffff" fontSize="5.5" opacity="0.95" className="font-sans">
                        (43%)
                      </text>
                    </g>

                    {/* Other RE slice labels inside SVG */}
                    <g className="select-none pointer-events-none">
                      <text x="29" y="46" textAnchor="middle" fill="#ffffff" fontSize="6.5" fontWeight="bold" className="font-sans">
                        Other RE
                      </text>
                      <text x="29" y="54" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="900" className="font-sans">
                        9.4M
                      </text>
                      <text x="29" y="61" textAnchor="middle" fill="#ffffff" fontSize="5.5" opacity="0.95" className="font-sans">
                        (57%)
                      </text>
                    </g>
                  </svg>
                </div>

                {/* Bottom Stats Footer - Solar PV & Other RE side by side on mobile & desktop */}
                <div className="flex flex-row items-center justify-center gap-3 sm:gap-8 mt-3 sm:mt-5 pt-2 sm:pt-3 border-t border-slate-100 w-full">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-600 flex-shrink-0" />
                    <div>
                      <span className="text-[9px] sm:text-[11px] text-slate-500 font-medium block leading-tight">Solar PV</span>
                      <span className="text-xs sm:text-base font-black text-slate-900 leading-tight">7.2M</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-600 flex-shrink-0" />
                    <div>
                      <span className="text-[9px] sm:text-[11px] text-slate-500 font-medium block leading-tight">Other RE</span>
                      <span className="text-xs sm:text-base font-black text-slate-900 leading-tight">9.4M</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Card 4: Solar Capacity Growth (India) (GW) with Line/Area Chart */}
          <div className="col-span-2 lg:col-span-12 bg-white rounded-2xl sm:rounded-[28px] p-4 sm:p-7 lg:p-8 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Card Title & Milestone Badge */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 sm:mb-6">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-50 border border-amber-200/60 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold font-display text-slate-900 leading-snug">
                      Solar Capacity Growth in India
                    </h3>
                    <span className="text-[10px] sm:text-xs text-slate-500 font-medium">
                      Cumulative Installed Capacity (Gigawatts - GW)
                    </span>
                  </div>
                </div>

                {/* Growth Metric Badge */}
                <div className="flex items-center gap-2 self-start sm:self-auto bg-emerald-50 border border-emerald-200/70 px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] sm:text-xs font-bold text-emerald-800">
                    5.2x Growth (2019 → 2026)
                  </span>
                </div>
              </div>

              {/* Natural Proportion Graph (Never Stretched) */}
              <div className="w-full mt-2 sm:mt-4">
                <div className="flex items-stretch gap-2 sm:gap-3">
                  
                  {/* Y-Axis scale */}
                  <div className="flex flex-col justify-between text-[9px] sm:text-[11px] font-semibold text-slate-400 pr-1 text-right select-none pb-5 pt-1">
                    <span>200</span>
                    <span>150</span>
                    <span>100</span>
                    <span>50</span>
                    <span>0</span>
                  </div>

                  {/* SVG Plot Canvas - Proportional 880x200 */}
                  <div className="flex-1 relative">
                    <svg 
                      className="w-full h-auto overflow-visible" 
                      viewBox="0 0 880 200" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        {/* Smooth Green Gradient Fill */}
                        <linearGradient id="solarGreenGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#059669" stopOpacity="0.32" />
                          <stop offset="50%" stopColor="#10b981" stopOpacity="0.12" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                        </linearGradient>

                        {/* Drop shadow for line curve */}
                        <filter id="solarLineGlow" x="-5%" y="-10%" width="110%" height="130%">
                          <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#059669" floodOpacity="0.25" />
                        </filter>
                      </defs>

                      {/* Horizontal Grid Lines */}
                      <line x1="20" y1="15" x2="860" y2="15" stroke="#f1f5f9" strokeWidth="1.2" strokeDasharray="4 4" />
                      <line x1="20" y1="55" x2="860" y2="55" stroke="#f1f5f9" strokeWidth="1.2" strokeDasharray="4 4" />
                      <line x1="20" y1="95" x2="860" y2="95" stroke="#f1f5f9" strokeWidth="1.2" strokeDasharray="4 4" />
                      <line x1="20" y1="135" x2="860" y2="135" stroke="#f1f5f9" strokeWidth="1.2" strokeDasharray="4 4" />
                      
                      {/* Baseline Axis */}
                      <line x1="20" y1="175" x2="860" y2="175" stroke="#e2e8f0" strokeWidth="1.5" />

                      {/* Shaded Area Under Curve */}
                      <path
                        d="M 40,150 C 90,147 115,145 154,144 C 200,142 225,140 268,138 C 315,134 345,129 382,125 C 430,121 455,118 496,117 C 545,110 575,100 610,95 C 655,83 685,73 724,71 C 770,55 800,45 838,41 L 838,175 L 40,175 Z"
                        fill="url(#solarGreenGradient)"
                      />

                      {/* Main Smooth Growth Curve */}
                      <path
                        d="M 40,150 C 90,147 115,145 154,144 C 200,142 225,140 268,138 C 315,134 345,129 382,125 C 430,121 455,118 496,117 C 545,110 575,100 610,95 C 655,83 685,73 724,71 C 770,55 800,45 838,41"
                        stroke="#059669"
                        strokeWidth="3.5"
                        fill="none"
                        strokeLinecap="round"
                        filter="url(#solarLineGlow)"
                      />

                      {/* Data Points and Value Callouts */}
                      {[
                        { cx: 40, cy: 150, val: '32.0', yr: '2019', isPeak: false },
                        { cx: 154, cy: 144, val: '38.3', yr: '2020', isPeak: false },
                        { cx: 268, cy: 138, val: '46.5', yr: '2021', isPeak: false },
                        { cx: 382, cy: 125, val: '62.4', yr: '2022', isPeak: false },
                        { cx: 496, cy: 117, val: '72.7', yr: '2023', isPeak: false },
                        { cx: 610, cy: 95, val: '100+', yr: '2024', isPeak: false },
                        { cx: 724, cy: 71, val: '130+', yr: '2025', isPeak: false },
                        { cx: 838, cy: 41, val: '168.0 GW', yr: '2026', isPeak: true },
                      ].map((pt, i) => (
                        <g key={i} className="cursor-pointer">
                          {/* Vertical guide line down to axis */}
                          <line 
                            x1={pt.cx} 
                            y1={pt.cy} 
                            x2={pt.cx} 
                            y2={175} 
                            stroke="#10b981" 
                            strokeWidth="1" 
                            strokeDasharray="2 2" 
                            opacity="0.35" 
                          />

                          {/* Outer Dot Ring */}
                          <circle 
                            cx={pt.cx} 
                            cy={pt.cy} 
                            r={pt.isPeak ? "6.5" : "4.5"} 
                            fill={pt.isPeak ? "#047857" : "#059669"} 
                          />
                          {/* Inner Dot Center */}
                          <circle 
                            cx={pt.cx} 
                            cy={pt.cy} 
                            r={pt.isPeak ? "2.5" : "2"} 
                            fill="#ffffff" 
                          />

                          {/* Value Pill on Top of Peak (2026) */}
                          {pt.isPeak ? (
                            <g>
                              <rect 
                                x={pt.cx - 36} 
                                y={pt.cy - 28} 
                                width="72" 
                                height="20" 
                                rx="10" 
                                fill="#047857" 
                                className="shadow-md"
                              />
                              <text
                                x={pt.cx}
                                y={pt.cy - 14}
                                textAnchor="middle"
                                fill="#ffffff"
                                fontSize="11"
                                fontWeight="bold"
                                className="font-sans select-none"
                              >
                                {pt.val}
                              </text>
                            </g>
                          ) : (
                            <text
                              x={pt.cx}
                              y={pt.cy - 8}
                              textAnchor="middle"
                              fill="#1e293b"
                              fontSize="11"
                              fontWeight="700"
                              className="font-sans select-none"
                            >
                              {pt.val}
                            </text>
                          )}

                          {/* Year label below baseline inside SVG */}
                          <text
                            x={pt.cx}
                            y={193}
                            textAnchor="middle"
                            fill={pt.isPeak ? "#047857" : "#64748b"}
                            fontSize="11"
                            fontWeight={pt.isPeak ? "800" : "600"}
                            className="font-sans select-none"
                          >
                            {pt.yr}
                          </text>
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
