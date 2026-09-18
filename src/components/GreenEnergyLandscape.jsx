import React, { useState } from 'react';
import { 
  Leaf, 
  Car, 
  Users, 
  Sun, 
  Wind, 
  BarChart3, 
  Globe2, 
  Zap,
  TrendingUp,
  Sparkles
} from 'lucide-react';

export default function GreenEnergyLandscape() {
  const [activeTab, setActiveTab] = useState('renewable');

  // EV Bar data exactly from image
  const evBarData = [
    { year: 'FY 2019–20', value: 1.74, heightPct: 9 },
    { year: 'FY 2020–21', value: 1.43, heightPct: 7 },
    { year: 'FY 2021–22', value: 4.59, heightPct: 23 },
    { year: 'FY 2022–23', value: 11.83, heightPct: 60 },
    { year: 'FY 2023–24', value: 16.81, heightPct: 85 },
    { year: 'FY 2024–25', value: 19.68, heightPct: 100 },
  ];

  // Tabbed Highlight data
  const highlightTabs = {
    renewable: [
      { label: 'Total Non-Fossil Capacity (India)', value: '304 GW', period: '(Aug 2026)', icon: Leaf, color: 'text-emerald-600', bg: 'bg-emerald-50' },
      { label: 'Solar Capacity (India)', value: '168 GW', period: '(Aug 2026)', icon: Sun, color: 'text-amber-500', bg: 'bg-amber-50' },
      { label: 'Wind Capacity (India)', value: '58 GW', period: '(Aug 2026)', icon: Wind, color: 'text-cyan-600', bg: 'bg-cyan-50' },
      { label: 'EV Registrations (India)', value: '19.68 Lakh', period: '(FY 2024–25)', icon: Car, color: 'text-blue-600', bg: 'bg-blue-50' },
      { label: 'Renewable Energy Jobs (India)', value: '1.28 Million', period: '(2024)', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
      { label: 'Renewable Energy Jobs (Global)', value: '16.6 Million', period: '(2024)', icon: Globe2, color: 'text-teal-600', bg: 'bg-teal-50' },
    ],
    solar: [
      { label: 'Current Solar Grid Capacity', value: '168 GW', period: '(Aug 2026)', icon: Sun, color: 'text-amber-500', bg: 'bg-amber-50' },
      { label: 'Historical Baseline (2019)', value: '32.0 GW', period: '(2019)', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
      { label: '5-Year Capacity Addition', value: '+136 GW', period: '(2019-2026)', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
      { label: 'Solar Workforce Share (Global)', value: '43% (7.2M)', period: '(2024)', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    ],
    ev: [
      { label: 'Annual EV Sales Volume', value: '19.68 Lakh', period: '(FY 2024–25)', icon: Car, color: 'text-blue-600', bg: 'bg-blue-50' },
      { label: 'Growth over FY 2019-20', value: '11.3x Growth', period: '(5 Years)', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
      { label: 'Fast Charging Deployment Pace', value: 'Surging', period: '(National Highways)', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-50' },
    ],
    jobs: [
      { label: 'Global Clean-Tech Workforce', value: '16.6 Million', period: '(2024 IRENA)', icon: Globe2, color: 'text-teal-600', bg: 'bg-teal-50' },
      { label: 'Solar PV Specialized Jobs', value: '7.2 Million', period: '(43% Global Share)', icon: Sun, color: 'text-amber-500', bg: 'bg-amber-50' },
      { label: 'Indian Green Energy Workforce', value: '1.28 Million', period: '(Rapid Expansion)', icon: Users, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    ],
  };

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
          
          <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100/80 px-3.5 py-1 rounded-full border border-emerald-200 inline-block mb-3">
            The Green Energy Landscape
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight leading-[1.15]">
            The Numbers Behind <br />
            <span className="text-emerald-700">a Greener Tomorrow</span>
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* ROW 1: 3 CARDS (Donut Capacity, Bar EV Registrations, Pie Global Jobs)     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          
          {/* Card 1: Renewable Energy Capacity (India, Aug 2026) */}
          <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Card Title */}
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 leading-snug">
                    Renewable Energy Capacity
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    (India, Aug 2026)
                  </span>
                </div>
              </div>

              {/* Donut Chart Visual & Legend */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 my-4">
                
                {/* Donut Circle SVG */}
                <div className="relative w-44 h-44 flex-shrink-0">
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
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                    <span className="text-2xl sm:text-[26px] font-black font-display text-slate-900 leading-tight">
                      304 GW
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                      Total Non-Fossil<br />Capacity
                    </span>
                  </div>
                </div>

                {/* Legend Items exactly as image */}
                <div className="space-y-3.5 min-w-[130px]">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-emerald-600 flex-shrink-0" />
                    <div>
                      <span className="text-[11px] text-slate-500 block leading-tight font-medium">Solar</span>
                      <span className="text-sm font-bold text-slate-900">168 GW</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-cyan-500 flex-shrink-0" />
                    <div>
                      <span className="text-[11px] text-slate-500 block leading-tight font-medium">Wind</span>
                      <span className="text-sm font-bold text-slate-900">58 GW</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-green-300 flex-shrink-0" />
                    <div>
                      <span className="text-[11px] text-slate-500 block leading-tight font-medium">Other RE</span>
                      <span className="text-sm font-bold text-slate-900">243 GW</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-1 border-t border-slate-100">
                    <span className="w-3 h-3 rounded-full bg-slate-400 flex-shrink-0" />
                    <div>
                      <span className="text-[11px] text-slate-500 block leading-tight font-medium">Total (Non-Fossil)</span>
                      <span className="text-sm font-extrabold text-slate-900">304 GW</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Card 2: EV Registrations in India (Lakh) */}
          <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Card Title */}
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200/60 text-blue-700 flex items-center justify-center flex-shrink-0">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 leading-snug">
                    EV Registrations in India
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    (Lakh)
                  </span>
                </div>
              </div>

              {/* Bar Chart Canvas with Y-Axis */}
              <div className="mt-4 flex items-end gap-2 h-52 pt-6">
                
                {/* Y-Axis Labels */}
                <div className="flex flex-col justify-between h-full text-[10px] font-semibold text-slate-400 pr-1 pb-6 text-right">
                  <span>25</span>
                  <span>20</span>
                  <span>15</span>
                  <span>10</span>
                  <span>5</span>
                  <span>0</span>
                </div>

                {/* Bars Container */}
                <div className="flex-1 grid grid-cols-6 gap-2 sm:gap-3 items-end h-full border-b border-l border-slate-200 pl-2 pb-1">
                  {evBarData.map((bar, i) => (
                    <div key={i} className="flex flex-col items-center justify-end h-full group/bar">
                      
                      {/* Value label on top of bar */}
                      <span className="text-[10px] font-bold text-slate-700 mb-1 opacity-90">
                        {bar.value}
                      </span>

                      {/* Bar Pillar */}
                      <div className="w-full max-w-[34px] rounded-t-lg bg-gradient-to-t from-emerald-600 via-teal-500 to-emerald-400 group-hover/bar:brightness-110 transition-all duration-300 shadow-sm"
                        style={{ height: `${bar.heightPct * 0.78}%` }}
                      />

                      {/* X-Axis Year label */}
                      <span className="text-[8.5px] sm:text-[9.5px] text-slate-500 font-medium mt-2 whitespace-nowrap text-center">
                        {bar.year}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>

          {/* Card 3: Global Renewable Energy Jobs (2024) */}
          <div className="bg-white rounded-[28px] p-6 sm:p-7 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Card Title */}
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 leading-snug">
                    Global Renewable Energy Jobs
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    (2024)
                  </span>
                </div>
              </div>

              {/* Pie Chart Visual & Legend */}
              <div className="flex flex-col items-center justify-center my-4">
                
                {/* 2-Color Pie Chart SVG matching user reference: 43% Solar PV (Blue), 57% Other (Green) */}
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    {/* Full Green Circle (Other 57%) */}
                    <circle cx="50" cy="50" r="45" fill="#22c55e" />
                    
                    {/* Blue Wedge (Solar PV 43%) */}
                    <circle
                      cx="50"
                      cy="50"
                      r="22.5"
                      fill="transparent"
                      stroke="#2563eb"
                      strokeWidth="45"
                      strokeDasharray="60.7 141.3" // 43% of perimeter (pi*45 ≈ 141.37)
                      strokeDashoffset="0"
                    />
                  </svg>

                  {/* Overlay labels inside the pie slices like in the reference image */}
                  <div className="absolute top-8 right-6 text-white text-center pointer-events-none">
                    <span className="block text-[11px] font-bold leading-tight">Solar PV</span>
                    <span className="block text-xs font-black">7.2M</span>
                    <span className="block text-[9px] opacity-90">(43%)</span>
                  </div>

                  <div className="absolute bottom-10 left-8 text-white text-center pointer-events-none">
                    <span className="block text-[11px] font-bold leading-tight">Other</span>
                    <span className="block text-xs font-black">9.4M</span>
                    <span className="block text-[9px] opacity-90">(57%)</span>
                  </div>
                </div>

                {/* Bottom Stats Footer */}
                <div className="flex items-center justify-center gap-10 mt-6 pt-3 border-t border-slate-100 w-full">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-600 flex-shrink-0" />
                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Solar PV</span>
                      <span className="text-base font-black text-slate-900">7.2M</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
                    <div>
                      <span className="text-[11px] text-slate-500 font-medium block">Other Renewables</span>
                      <span className="text-base font-black text-slate-900">9.4M</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* ROW 2: 2 WIDE CARDS (Solar Growth Curve + Interactive Key Highlights)      */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 mt-6 sm:mt-7 items-stretch">
          
          {/* Card 4 (Left 6 Cols): Solar Capacity Growth (India) (GW) with Line/Area Chart */}
          <div className="lg:col-span-6 bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* Card Title */}
              <div className="flex items-start gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-600 flex items-center justify-center flex-shrink-0">
                  <Sun className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 leading-snug">
                    Solar Capacity Growth (India)
                  </h3>
                  <span className="text-xs text-slate-500 font-medium">
                    (GW)
                  </span>
                </div>
              </div>

              {/* Growth Curve Chart using SVG */}
              <div className="relative mt-4 pt-2">
                <div className="flex items-end gap-2 h-56">
                  
                  {/* Y-Axis scale */}
                  <div className="flex flex-col justify-between h-full text-[10px] font-semibold text-slate-400 pr-1 pb-6 text-right">
                    <span>200</span>
                    <span>150</span>
                    <span>100</span>
                    <span>50</span>
                    <span>0</span>
                  </div>

                  {/* SVG Line & Dots Canvas */}
                  <div className="flex-1 h-full relative border-b border-l border-slate-200 pb-6">
                    
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 450 180" preserveAspectRatio="none">
                      {/* Grid Lines */}
                      <line x1="0" y1="0" x2="450" y2="0" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="45" x2="450" y2="45" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="90" x2="450" y2="90" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />
                      <line x1="0" y1="135" x2="450" y2="135" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="3 3" />

                      {/* Shaded Area Under Curve */}
                      <defs>
                        <linearGradient id="solarGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      <path
                        d="M 15,150 Q 75,145 135,138 T 195,123 T 255,110 T 315,85 T 375,60 T 435,25 L 435,180 L 15,180 Z"
                        fill="url(#solarGradient)"
                      />

                      {/* Growth Line */}
                      <path
                        d="M 15,150 Q 75,145 135,138 T 195,123 T 255,110 T 315,85 T 375,60 T 435,25"
                        stroke="#059669"
                        strokeWidth="3.5"
                        fill="none"
                        strokeLinecap="round"
                      />

                      {/* Data Point Dots & Labels */}
                      {[
                        { cx: 15, cy: 150, val: '32.0', yr: '2019' },
                        { cx: 75, cy: 145, val: '38.3', yr: '2020' },
                        { cx: 135, cy: 138, val: '46.5', yr: '2021' },
                        { cx: 195, cy: 123, val: '62.4', yr: '2022' },
                        { cx: 255, cy: 110, val: '72.7', yr: '2023' },
                        { cx: 315, cy: 85, val: '100+', yr: '2024' },
                        { cx: 375, cy: 60, val: '130+', yr: '2025' },
                        { cx: 435, cy: 25, val: '168.0', yr: '2026' },
                      ].map((pt, i) => (
                        <g key={i} className="cursor-pointer group/dot">
                          <circle cx={pt.cx} cy={pt.cy} r="5" fill="#047857" className="transition-transform group-hover/dot:scale-125" />
                          <circle cx={pt.cx} cy={pt.cy} r="2" fill="#ffffff" />
                          
                          {/* Top Value */}
                          <text
                            x={pt.cx}
                            y={pt.cy - 10}
                            textAnchor="middle"
                            fill="#0f172a"
                            fontSize="11"
                            fontWeight="bold"
                            className="font-sans"
                          >
                            {pt.val}
                          </text>

                          {/* Year on X-axis */}
                          <text
                            x={pt.cx}
                            y="196"
                            textAnchor="middle"
                            fill="#64748b"
                            fontSize="10"
                            fontWeight="500"
                            className="font-sans"
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

          {/* Card 5 (Right 6 Cols): Key Highlights Table with interactive Filter Tabs */}
          <div className="lg:col-span-6 bg-white rounded-[28px] p-6 sm:p-8 border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              
              {/* Header with Title & Tab Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-display text-slate-900 leading-snug">
                    Key Highlights
                  </h3>
                </div>

                {/* Filter Tabs matching reference UI */}
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/80 self-start sm:self-auto overflow-x-auto max-w-full">
                  {[
                    { id: 'renewable', label: 'Renewable Energy' },
                    { id: 'solar', label: 'Solar' },
                    { id: 'ev', label: 'EV Infrastructure' },
                    { id: 'jobs', label: 'Jobs' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Data Rows matching reference screenshot */}
              <div className="divide-y divide-slate-100">
                {highlightTabs[activeTab].map((row, idx) => {
                  const RowIcon = row.icon;
                  return (
                    <div 
                      key={idx} 
                      className="py-3.5 flex items-center justify-between gap-3 hover:bg-slate-50/70 px-2 rounded-xl transition-colors"
                    >
                      {/* Left: Icon + Label */}
                      <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-8 h-8 rounded-lg ${row.bg} ${row.color} flex items-center justify-center flex-shrink-0`}>
                          <RowIcon className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-800 truncate">
                          {row.label}
                        </span>
                      </div>

                      {/* Right: Metric Value + Period Badge */}
                      <div className="flex items-center gap-3 flex-shrink-0 text-right">
                        <span className="text-sm sm:text-base font-black font-display text-slate-900">
                          {row.value}
                        </span>
                        <span className="text-[11px] text-slate-400 font-medium hidden sm:inline-block w-20 text-right">
                          {row.period}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
