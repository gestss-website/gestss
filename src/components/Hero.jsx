import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroBg from '../../HERO-IMAGE.webp';

export default function Hero({ onRequestTalent, onJoinNetwork }) {
  return (
    <section className="relative isolate min-h-[85vh] lg:min-h-screen flex flex-col justify-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 overflow-hidden">
      {/* Hero Background Image covering the entire area behind navbar and hero text */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Clean Energy Horizon — Solar PV, Wind Turbines, EV Charging, and Modern Transit"
          className="w-full h-full object-cover object-center"
        />
        {/* Very subtle overlay to ensure text contrast while keeping image bright and visible */}
        <div className="absolute inset-0 bg-white/25 pointer-events-none" />
        {/* Soft bottom transition into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-36 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Centered Text Block */}
        <div className="text-center max-w-3xl mx-auto space-y-6">

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black tracking-tight font-display text-slate-900 leading-[1.08] drop-shadow-sm">
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

          <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed font-medium">
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
              className="px-7 py-3.5 rounded-full font-bold text-sm text-slate-800 bg-white/90 hover:bg-white border border-slate-200/80 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 backdrop-blur-sm transition-all duration-300"
            >
              Learn more
            </button>
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
