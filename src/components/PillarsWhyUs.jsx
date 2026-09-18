import React, { useRef } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Target, 
  Users2, 
  Binary, 
  Sliders, 
  GraduationCap, 
  HeartHandshake, 
  Shield, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { AnimatedBeam } from '@/components/magicui/animated-beam';

export default function PillarsWhyUs() {
  // References for Magic UI AnimatedBeam diagram
  const containerRef = useRef(null);
  const centerRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);
  const card4Ref = useRef(null);
  const card5Ref = useRef(null);
  const card6Ref = useRef(null);

  const pillars = [
    {
      num: '01',
      title: 'Industry Focus',
      desc: '100% dedicated to renewable energy, solar technology, electric mobility, and EV infrastructure. No dilution with unrelated generalist roles.',
      icon: Target,
      color: 'emerald'
    },
    {
      num: '02',
      title: 'Specialized Talent Networks',
      desc: 'Proprietary talent pools built around technical clean-energy disciplines, specialized apprenticeships, and engineering societies.',
      icon: Users2,
      color: 'blue'
    },
    {
      num: '03',
      title: 'Technically Informed Screening',
      desc: 'Technical evaluations conducted with trade-specific criteria, electrical license verifications, and OSHA/safety standards.',
      icon: Binary,
      color: 'solar'
    },
    {
      num: '04',
      title: 'Flexible Staffing Models',
      desc: 'Tailored workforce contracts comprising permanent direct-hire, turnkey project crews, and temp-to-perm evaluations.',
      icon: Sliders,
      color: 'emerald'
    },
    {
      num: '05',
      title: 'Workforce Development',
      desc: 'Active collaboration with training institutes and certification bodies to foster career transitions and upskilling.',
      icon: GraduationCap,
      color: 'blue'
    },
    {
      num: '06',
      title: 'Inclusive Recruitment',
      desc: 'Proactive initiatives to broaden representation, empowering women and underrepresented tradespeople in the green economy.',
      icon: HeartHandshake,
      color: 'solar'
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gestss-green-700" />
            The GESTSS Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
            Why Work <span className="text-gradient-green">With Us?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Our value proposition connects specialized talent pools into a unified clean-energy delivery engine. Explore how our six foundational pillars converge around project success.
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex lg:hidden items-center justify-between gap-2 px-3 py-1.5 rounded-full bg-slate-200/80 text-slate-700 text-xs font-semibold mb-3 w-fit">
          <span>↔ Swipe horizontally to view full interconnected hub</span>
        </div>

        {/* ========================================================================= */}
        {/* MAGIC UI ANIMATED BEAM SHOWCASE (Connecting 6 Cards with Bended S-Curves)  */}
        {/* ========================================================================= */}
        <div className="overflow-x-auto pb-6 pt-1 scrollbar-thin scrollbar-thumb-slate-300">
          <div className="min-w-[780px] lg:min-w-full">
            <div 
              ref={containerRef}
              className="relative flex h-[540px] sm:h-[580px] w-full items-center justify-between p-6 sm:p-8 md:p-12 rounded-3xl bg-slate-50/70 border border-slate-200/80 shadow-[0_15px_35px_-5px_rgba(15,23,42,0.05)] overflow-hidden"
            >
              {/* Ambient Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

              {/* Left Column: 3 Pillar Cards */}
              <div className="flex flex-col justify-between h-full py-4 z-10">
            {/* Card 1 */}
            <div 
              ref={card1Ref}
              className="w-52 sm:w-64 md:w-72 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Target className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold text-slate-900 block truncate group-hover:text-emerald-700 transition-colors">
                  Industry Focus
                </span>
                <span className="text-[11px] text-slate-500 font-medium block truncate">
                  100% Dedicated to Clean-Energy
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              ref={card2Ref}
              className="w-52 sm:w-64 md:w-72 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 border border-blue-200/60 text-blue-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Users2 className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold text-slate-900 block truncate group-hover:text-blue-700 transition-colors">
                  Specialized Networks
                </span>
                <span className="text-[11px] text-slate-500 font-medium block truncate">
                  Niche Engineering &amp; Trade Pools
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              ref={card3Ref}
              className="w-52 sm:w-64 md:w-72 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Binary className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold text-slate-900 block truncate group-hover:text-amber-700 transition-colors">
                  Technical Screening
                </span>
                <span className="text-[11px] text-slate-500 font-medium block truncate">
                  Trade-Specific License Vetting
                </span>
              </div>
            </div>
          </div>

          {/* Center Hub: GESTSS Core Engine */}
          <div className="flex flex-col items-center justify-center z-10 px-2 sm:px-4">
            <div 
              ref={centerRef}
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white border-2 border-emerald-500 shadow-2xl shadow-emerald-500/30 flex items-center justify-center p-2.5 sm:p-3 hover:scale-105 transition-transform"
            >
              <img
                src="/LOGO.webp"
                alt="GESTSS"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <span className="mt-3 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-emerald-100 text-emerald-900 border border-emerald-300/80 shadow-sm whitespace-nowrap">
              GESTSS Engine
            </span>
          </div>

          {/* Right Column: 3 Pillar Cards */}
          <div className="flex flex-col justify-between h-full py-4 z-10">
            {/* Card 4 */}
            <div 
              ref={card4Ref}
              className="w-52 sm:w-64 md:w-72 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Sliders className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold text-slate-900 block truncate group-hover:text-emerald-700 transition-colors">
                  Flexible Staffing
                </span>
                <span className="text-[11px] text-slate-500 font-medium block truncate">
                  Direct-Hire, Project Crews &amp; SLA
                </span>
              </div>
            </div>

            {/* Card 5 */}
            <div 
              ref={card5Ref}
              className="w-52 sm:w-64 md:w-72 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 border border-blue-200/60 text-blue-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold text-slate-900 block truncate group-hover:text-blue-700 transition-colors">
                  Workforce Upskilling
                </span>
                <span className="text-[11px] text-slate-500 font-medium block truncate">
                  Certified Green Career Pathways
                </span>
              </div>
            </div>

            {/* Card 6 */}
            <div 
              ref={card6Ref}
              className="w-52 sm:w-64 md:w-72 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex items-center gap-3.5 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-50 border border-amber-200/60 text-amber-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span className="text-xs sm:text-sm font-bold text-slate-900 block truncate group-hover:text-amber-700 transition-colors">
                  Inclusive Recruiting
                </span>
                <span className="text-[11px] text-slate-500 font-medium block truncate">
                  Equitable Energy Access &amp; Trades
                </span>
              </div>
            </div>
          </div>

          {/* Bended Animated Beams Connecting All 6 Cards into GESTSS Hub */}
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={card1Ref}
            toRef={centerRef}
            endYOffset={-24}
            curvature={30}
            duration={4}
            gradientStartColor="#10b981"
            gradientStopColor="#047857"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={card2Ref}
            toRef={centerRef}
            endYOffset={0}
            curvature={0}
            duration={4}
            delay={0.3}
            gradientStartColor="#10b981"
            gradientStopColor="#047857"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={card3Ref}
            toRef={centerRef}
            endYOffset={24}
            curvature={-30}
            duration={4}
            delay={0.6}
            gradientStartColor="#10b981"
            gradientStopColor="#047857"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={card4Ref}
            startYOffset={-24}
            curvature={30}
            duration={4}
            delay={0.15}
            gradientStartColor="#34d399"
            gradientStopColor="#0284c7"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={card5Ref}
            startYOffset={0}
            curvature={0}
            duration={4}
            delay={0.45}
            gradientStartColor="#34d399"
            gradientStopColor="#0284c7"
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={centerRef}
            toRef={card6Ref}
            startYOffset={24}
            curvature={-30}
            duration={4}
            delay={0.75}
            gradientStartColor="#34d399"
            gradientStopColor="#0284c7"
          />
        </div>
      </div>
    </div>

        {/* 6 Pillars Detailed Breakdown Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            const isBlue = p.color === 'blue';
            const isSolar = p.color === 'solar';

            const bgIcon = isBlue ? 'bg-blue-50 text-gestss-blue-700' : isSolar ? 'bg-amber-50 text-gestss-solar-600' : 'bg-emerald-50 text-gestss-green-700';

            return (
              <div
                key={p.num}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl ${bgIcon} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400 group-hover:text-gestss-green-600">
                      Pillar {p.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-gestss-green-900 transition-colors">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center gap-1.5 text-xs font-semibold text-gestss-green-800">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Institutional Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diversity & Inclusion Spotlight */}
        <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-emerald-50/60 border border-emerald-100/90 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-200/70 text-gestss-green-900 text-xs font-bold uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5 text-gestss-green-800" />
                Diversity &amp; Inclusion
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
                A Broad, Inclusive Workforce for an Equitable Energy Future
              </h3>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                A sustainable energy transition must be an inclusive one. We actively implement recruitment practices that expand access to high-paying clean-energy careers for women, underrepresented demographic groups, emerging technical talent, and tradespeople transitioning out of sunsetting industries.
              </p>

              <p className="text-slate-600 text-xs sm:text-sm">
                Our objective is to foster an industry environment where varied perspectives and lived experiences can actively shape the global expansion of clean-energy infrastructure.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-emerald-200 shadow-sm space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gestss-green-900">Our Pillars of Equity:</h4>
              <ul className="space-y-2 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gestss-green-600" />
                  <span>Expanding women in clean-tech trade careers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gestss-green-600" />
                  <span>Subsidized trade &amp; safety certification access</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gestss-green-600" />
                  <span>Fair-chance transitioning for legacy energy workers</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gestss-green-600" />
                  <span>Mentorship pairing with certified master electricians</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
