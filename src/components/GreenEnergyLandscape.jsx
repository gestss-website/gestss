import React from 'react';
import { 
  Leaf, 
  Car, 
  Users, 
  Sun, 
  Wind 
} from 'lucide-react';

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

  // Solar Capacity Growth Timeline points
  const solarGrowthPoints = [
    { cx: 15, cy: 135, val: '32.0', yr: '2019', shortYr: "'19" },
    { cx: 75, cy: 130, val: '38.3', yr: '2020', shortYr: "'20" },
    { cx: 135, cy: 124, val: '46.5', yr: '2021', shortYr: "'21" },
    { cx: 195, cy: 110, val: '62.4', yr: '2022', shortYr: "'22" },
    { cx: 255, cy: 98, val: '72.7', yr: '2023', shortYr: "'23" },
    { cx: 315, cy: 75, val: '100+', yr: '2024', shortYr: "'24" },
    { cx: 375, cy: 52, val: '130+', yr: '2025', shortYr: "'25" },
    { cx: 435, cy: 20, val: '168.0', yr: '2026', shortYr: "'26" },
  ];

  return (
    <section id="landscape" className="py-12 lg:py-16 bg-[#f5fbf8] relative overflow-hidden border-b border-emerald-100/70">
      
      {/* Decorative clean energy backdrop elements */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-gradient-to-bl from-emerald-200/25 via-emerald-100/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-100/30 via-emerald-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Subtle background Windmill & Solar silhouette watermark in the corner matching user image */}
      <div className="absolute top-8 right-6 lg:right-16 opacity-20 pointer-events-none hidden md:block">
        <svg width="240" height="140" viewBox="0 0 240 140" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Wind turbine 1 */}
          <line x1="80" y1="30" x2="80" y2="135" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="80" cy="30" r="4" fill="#059669" />
          <line x1="80" y1="30" x2="65" y2="5" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
          <line x1="80" y1="30" x2="98" y2="20" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
          <line x1="80" y1="30" x2="72" y2="52" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
          {/* Wind turbine 2 */}
          <line x1="140" y1="45" x2="140" y2="135" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
          <circle cx="140" cy="45" r="3.5" fill="#059669" />
          <line x1="140" y1="45" x2="128" y2="25" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="140" y1="45" x2="155" y2="38" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="140" y1="45" x2="135" y2="62" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
          {/* Solar ground panel */}
          <polygon points="165,115 225,100 235,130 175,135" fill="#10b981" fillOpacity="0.4" stroke="#059669" strokeWidth="1.5" />
          <line x1="195" y1="108" x2="205" y2="133" stroke="#059669" strokeWidth="1" />
          <line x1="170" y1="125" x2="230" y2="115" stroke="#059669" strokeWidth="1" />
        </svg>
      </div>

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
          <div className="col-span-1 lg:col-span-12 bg-white rounded-2xl sm:rounded-[28px] p-3.5 sm:p-8 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Card Title */}
              <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-6">
                <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-50 border border-amber-200/60 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <Sun className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-base lg:text-lg font-bold font-display text-slate-900 leading-snug">
                    Solar Capacity Growth (India)
                  </h3>
                  <span className="text-[9px] sm:text-xs text-slate-500 font-medium">
                    (GW)
                  </span>
                </div>
              </div>

              {/* Growth Curve Chart using SVG */}
              <div className="mt-2 sm:mt-4">
                <div className="flex items-end gap-1 sm:gap-2 h-36 sm:h-52">
                  
                  {/* Y-Axis scale */}
                  <div className="flex flex-col justify-between h-full text-[8px] sm:text-[10px] font-semibold text-slate-400 pr-0.5 sm:pr-1 text-right">
                    <span>200</span>
                    <span>150</span>
                    <span>100</span>
                    <span>50</span>
                    <span>0</span>
                  </div>

                  {/* SVG Plot Canvas - Bottom border is the axis line */}
                  <div className="flex-1 h-full relative border-b border-l border-slate-200">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 450 160" preserveAspectRatio="none">
                      {/* Grid Lines */}
                      <line x1="0" y1="0" x2="450" y2="0" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="40" x2="450" y2="40" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="80" x2="450" y2="80" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="120" x2="450" y2="120" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />

                      {/* Shaded Area Under Curve */}
                      <defs>
                        <linearGradient id="solarGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M 15,135 Q 75,130 135,124 T 195,110 T 255,98 T 315,75 T 375,52 T 435,20 L 435,160 L 15,160 Z"
                        fill="url(#solarGradient)"
                      />

                      {/* Growth Line */}
                      <path
                        d="M 15,135 Q 75,130 135,124 T 195,110 T 255,98 T 315,75 T 375,52 T 435,20"
                        stroke="#059669"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                      />

                      {/* Data Point Dots & Value Labels */}
                      {solarGrowthPoints.map((pt, i) => (
                        <g key={i} className="cursor-pointer group/dot">
                          <circle cx={pt.cx} cy={pt.cy} r="3.5" fill="#047857" className="transition-transform group-hover/dot:scale-125" />
                          <circle cx={pt.cx} cy={pt.cy} r="1.5" fill="#ffffff" />
                          
                          {/* Top Value */}
                          <text
                            x={pt.cx}
                            y={pt.cy - 6}
                            textAnchor="middle"
                            fill="#0f172a"
                            fontSize="9"
                            fontWeight="bold"
                            className="font-sans"
                          >
                            {pt.val}
                          </text>
                        </g>
                      ))}
                    </svg>
                  </div>
                </div>

                {/* Years Row - Strictly BELOW the bottom line! */}
                <div className="flex items-center gap-1 sm:gap-2 pt-1.5 sm:pt-2">
                  <div className="w-3.5 sm:w-5 flex-shrink-0" />
                  <div className="flex-1 flex justify-between items-center text-[7px] sm:text-[10px] text-slate-500 font-medium px-0.5 sm:px-2">
                    {solarGrowthPoints.map((pt, i) => (
                      <span key={i} className="text-center">
                        <span className="sm:hidden">{pt.shortYr}</span>
                        <span className="hidden sm:inline">{pt.yr}</span>
                      </span>
                    ))}
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
