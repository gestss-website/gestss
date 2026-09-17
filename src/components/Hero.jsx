import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Users, Sparkles, Building2, BatteryCharging, SunMedium } from 'lucide-react';

export default function Hero({ onRequestTalent, onJoinNetwork }) {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40 overflow-hidden bg-[#f8fafc]">
      {/* Subtle ambient glows behind content */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] pointer-events-none -z-10">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gestss-green-400/10 rounded-full blur-[100px]" />
        <div className="absolute top-10 right-1/4 w-72 h-72 bg-gestss-blue-400/10 rounded-full blur-[100px]" />
        <div className="absolute top-32 left-1/2 w-56 h-56 bg-gestss-solar-400/8 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Centered Text Block */}
        <div className="text-center max-w-3xl mx-auto space-y-6">

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black tracking-tight font-display text-slate-900 leading-[1.08]">
            Powering the Clean-Energy{' '}
            <br className="hidden sm:block" />
            Transition with the Right{' '}
            <span className="relative inline-block italic text-gestss-green-800">
              Talent.
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8C30 3 70 2 100 5C130 8 170 4 198 7"
                  stroke="#f59e0b"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeOpacity="0.5"
                />
              </svg>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-normal">
            A specialized workforce solutions firm connecting clean-energy enterprises
            with compliance-ready professionals across Solar PV, EV Infrastructure,
            Renewable Engineering, and Grid Systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-1">
            <button
              onClick={onRequestTalent}
              className="px-7 py-3.5 rounded-full font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              <span>Get started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onJoinNetwork}
              className="px-7 py-3.5 rounded-full font-bold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Learn more
            </button>
          </div>

        </div>

        {/* Hero Image — seamlessly integrated, no card border */}
        <div className="mt-12 lg:mt-16 relative mx-auto max-w-6xl">
          {/* Soft vignette glow behind the image */}
          <div className="absolute inset-0 -bottom-20 bg-gradient-to-b from-transparent via-transparent to-[#f8fafc] z-10 pointer-events-none" />

          <div className="relative rounded-t-[2rem] sm:rounded-t-[2.5rem] overflow-hidden">
            <img
              src="/HERO-IMAGE.webp"
              alt="Clean Energy Horizon — Solar PV, Wind Turbines, EV Charging, and Modern Transit"
              className="w-full h-auto object-cover object-center"
            />
            {/* Bottom fade to blend into page */}
            <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-t from-[#f8fafc] via-[#f8fafc]/80 to-transparent pointer-events-none" />
          </div>
        </div>

      </div>

      {/* Trusted-by / Metrics strip at the bottom of the hero */}
      {/* <div className="relative z-20 -mt-10 sm:-mt-16 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Trusted by innovators in clean energy
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">

            <div className="flex flex-col items-center gap-1.5 px-4 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md hover:border-emerald-300/60 transition-all duration-300 group">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gestss-green-600 group-hover:text-gestss-green-700" />
                <span className="text-2xl sm:text-3xl font-black font-display text-gestss-green-900">4 Days</span>
              </div>
              <span className="text-xs font-semibold text-slate-600">Candidate Shortlist SLA</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 px-4 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md hover:border-blue-300/60 transition-all duration-300 group">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-gestss-blue-600 group-hover:text-gestss-blue-700" />
                <span className="text-2xl sm:text-3xl font-black font-display text-gestss-blue-900">100%</span>
              </div>
              <span className="text-xs font-semibold text-slate-600">Vetted &amp; Compliant</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 px-4 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md hover:border-amber-300/60 transition-all duration-300 group">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-gestss-solar-600 group-hover:text-gestss-solar-700" />
                <span className="text-2xl sm:text-3xl font-black font-display text-gestss-solar-600">8+</span>
              </div>
              <span className="text-xs font-semibold text-slate-600">Specialized Disciplines</span>
            </div>

            <div className="flex flex-col items-center gap-1.5 px-4 py-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-slate-200/60 shadow-sm hover:shadow-md hover:border-emerald-300/60 transition-all duration-300 group">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gestss-green-700 group-hover:text-gestss-green-800" />
                <span className="text-xl sm:text-2xl font-black font-display text-gestss-green-800">Flexible</span>
              </div>
              <span className="text-xs font-semibold text-slate-600">Staffing Architecture</span>
            </div>

          </div>
        </div>
      </div> */}

    </section>
  );
}
