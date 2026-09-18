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
      desc: 'Focused exclusively on workforce requirements across renewable energy, solar technology, electric mobility, and EV infrastructure.',
      icon: Target,
      color: 'emerald'
    },
    {
      num: '02',
      title: 'Specialized Talent Networks',
      desc: 'Building specialized talent networks around the specific workforce needs of the clean-energy industry.',
      icon: Users2,
      color: 'blue'
    },
    {
      num: '03',
      title: 'Technically Informed Screening',
      desc: 'Assessing candidates against technical competencies, qualifications, experience, and role-specific requirements.',
      icon: Binary,
      color: 'solar'
    },
    {
      num: '04',
      title: 'Flexible Staffing Models',
      desc: 'Providing flexible staffing models to respond to project-based, seasonal, and long-term workforce requirements.',
      icon: Sliders,
      color: 'emerald'
    },
    {
      num: '05',
      title: 'Workforce Development',
      desc: 'Supporting technical upskilling, career transitions, certification pathways, and employer-aligned skill development.',
      icon: GraduationCap,
      color: 'blue'
    },
    {
      num: '06',
      title: 'Inclusive Recruitment',
      desc: 'Expanding access to clean-energy opportunities through inclusive recruitment practices and broader workforce participation.',
      icon: HeartHandshake,
      color: 'solar'
    }
  ];

  return (
    <section id="why-us" className="py-12 lg:py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight">
            Why Work <span className="text-gradient-green">With Us?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Our value proposition connects specialized talent pools into a unified clean-energy delivery engine.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* MAGIC UI ANIMATED BEAM SHOWCASE (Interconnected hub on Mobile & Desktop)   */}
        {/* Fully responsive with NO horizontal scroll                                 */}
        {/* ========================================================================= */}
        <div className="w-full pb-4 pt-1">
          <div 
            ref={containerRef}
            className="relative flex h-[480px] sm:h-[580px] lg:h-[620px] w-full items-center justify-between p-0.5 sm:p-4 md:p-6 overflow-visible"
          >
            {/* Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

            {/* Left Column: 3 Pillar Cards */}
            <div className="flex flex-col justify-between h-full py-1 sm:py-4 z-10 w-[128px] xs:w-[145px] sm:w-64 md:w-80 shrink-0">
              {/* Card 1 */}
              <div 
                ref={card1Ref}
                className="w-full p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-md sm:shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex items-start gap-1.5 sm:gap-3.5 group cursor-pointer"
              >
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                  <Target className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9.5px] xs:text-[10px] sm:text-sm font-bold text-slate-900 block group-hover:text-emerald-700 transition-colors leading-tight">
                    {pillars[0].title}
                  </span>
                  <p className="text-[7.5px] xs:text-[8px] sm:text-[11px] text-slate-600 font-normal leading-snug sm:leading-relaxed mt-0.5 sm:mt-1 line-clamp-3 sm:line-clamp-none">
                    {pillars[0].desc}
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div 
                ref={card2Ref}
                className="w-full p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-md sm:shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex items-start gap-1.5 sm:gap-3.5 group cursor-pointer"
              >
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-200/60 text-blue-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                  <Users2 className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9.5px] xs:text-[10px] sm:text-sm font-bold text-slate-900 block group-hover:text-blue-700 transition-colors leading-tight">
                    {pillars[1].title}
                  </span>
                  <p className="text-[7.5px] xs:text-[8px] sm:text-[11px] text-slate-600 font-normal leading-snug sm:leading-relaxed mt-0.5 sm:mt-1 line-clamp-3 sm:line-clamp-none">
                    {pillars[1].desc}
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div 
                ref={card3Ref}
                className="w-full p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-md sm:shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex items-start gap-1.5 sm:gap-3.5 group cursor-pointer"
              >
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-50 border border-amber-200/60 text-amber-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                  <Binary className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9.5px] xs:text-[10px] sm:text-sm font-bold text-slate-900 block group-hover:text-amber-700 transition-colors leading-tight">
                    {pillars[2].title}
                  </span>
                  <p className="text-[7.5px] xs:text-[8px] sm:text-[11px] text-slate-600 font-normal leading-snug sm:leading-relaxed mt-0.5 sm:mt-1 line-clamp-3 sm:line-clamp-none">
                    {pillars[2].desc}
                  </p>
                </div>
              </div>
            </div>

            {/* Center Hub: GESTSS Core Engine */}
            <div className="flex flex-col items-center justify-center z-10 px-1 sm:px-4 shrink-0">
              <div 
                ref={centerRef}
                className="w-10 h-10 xs:w-12 xs:h-12 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-white border-2 border-emerald-500 shadow-lg sm:shadow-2xl shadow-emerald-500/30 flex items-center justify-center p-1.5 sm:p-3 hover:scale-105 transition-transform"
              >
                <img
                  src="/LOGO.webp"
                  alt="GESTSS"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="mt-1 sm:mt-3 px-1.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[7.5px] sm:text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-300/80 shadow-sm whitespace-nowrap">
                GESTSS Engine
              </span>
            </div>

            {/* Right Column: 3 Pillar Cards */}
            <div className="flex flex-col justify-between h-full py-1 sm:py-4 z-10 w-[128px] xs:w-[145px] sm:w-64 md:w-80 shrink-0">
              {/* Card 4 */}
              <div 
                ref={card4Ref}
                className="w-full p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-md sm:shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex items-start gap-1.5 sm:gap-3.5 group cursor-pointer"
              >
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 border border-emerald-200/60 text-emerald-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                  <Sliders className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9.5px] xs:text-[10px] sm:text-sm font-bold text-slate-900 block group-hover:text-emerald-700 transition-colors leading-tight">
                    {pillars[3].title}
                  </span>
                  <p className="text-[7.5px] xs:text-[8px] sm:text-[11px] text-slate-600 font-normal leading-snug sm:leading-relaxed mt-0.5 sm:mt-1 line-clamp-3 sm:line-clamp-none">
                    {pillars[3].desc}
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div 
                ref={card5Ref}
                className="w-full p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-md sm:shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex items-start gap-1.5 sm:gap-3.5 group cursor-pointer"
              >
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-50 border border-blue-200/60 text-blue-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                  <GraduationCap className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9.5px] xs:text-[10px] sm:text-sm font-bold text-slate-900 block group-hover:text-blue-700 transition-colors leading-tight">
                    {pillars[4].title}
                  </span>
                  <p className="text-[7.5px] xs:text-[8px] sm:text-[11px] text-slate-600 font-normal leading-snug sm:leading-relaxed mt-0.5 sm:mt-1 line-clamp-3 sm:line-clamp-none">
                    {pillars[4].desc}
                  </p>
                </div>
              </div>

              {/* Card 6 */}
              <div 
                ref={card6Ref}
                className="w-full p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-md sm:shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex items-start gap-1.5 sm:gap-3.5 group cursor-pointer"
              >
                <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-50 border border-amber-200/60 text-amber-700 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform mt-0.5">
                  <HeartHandshake className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9.5px] xs:text-[10px] sm:text-sm font-bold text-slate-900 block group-hover:text-amber-700 transition-colors leading-tight">
                    {pillars[5].title}
                  </span>
                  <p className="text-[7.5px] xs:text-[8px] sm:text-[11px] text-slate-600 font-normal leading-snug sm:leading-relaxed mt-0.5 sm:mt-1 line-clamp-3 sm:line-clamp-none">
                    {pillars[5].desc}
                  </p>
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

        {/* Diversity & Inclusion Section with exact content */}
        <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-emerald-50/60 border border-emerald-100/90 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-200/70 text-gestss-green-900 text-xs font-bold uppercase tracking-wider">
              <HeartHandshake className="w-3.5 h-3.5 text-gestss-green-800" />
              Workforce Equity
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
              Diversity &amp; Inclusion
            </h2>

            <div className="space-y-4 pt-2 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              <p>
                We seek to implement inclusive recruitment practices that expand access to opportunities for women, underrepresented groups, emerging technical professionals, and individuals transitioning into clean-energy careers.
              </p>
              <p className="text-slate-600">
                Our objective is to support a workforce environment where different experiences, skills, and perspectives can participate in the growth of the green economy.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
