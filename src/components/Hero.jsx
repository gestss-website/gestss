import React from 'react';
import heroBg from '../../HERO-IMAGE.webp';

export default function Hero({ onRequestTalent, onJoinNetwork }) {
  return (
    <section className="relative isolate min-h-[80vh] lg:min-h-[90vh] flex flex-col justify-center pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-14 overflow-hidden">
      {/* Hero Background Image covering the entire area behind navbar and hero text */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroBg}
          alt="Green Energy & Solar Tech Staffing Solution"
          className="w-full h-full object-cover object-center"
        />
        {/* Very subtle overlay to ensure text contrast while keeping image bright and visible */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] pointer-events-none" />
        {/* Soft bottom transition into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-36 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Centered Text Block */}
        <div className="text-center max-w-4xl mx-auto space-y-6">

          {/* Hiring Announcement Badge (Ready for Google Form) */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#apply"
              onClick={(e) => {
                // Placeholder: Replace with your actual Google Form link whenever ready
                // window.open('https://forms.google.com/...', '_blank');
              }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/35 hover:bg-emerald-500/25 hover:border-emerald-500/50 text-emerald-900 text-xs sm:text-sm font-bold tracking-wide backdrop-blur-md shadow-sm transition-all duration-300 group cursor-pointer"
            >
              {/* Pulsing indicator dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
              </span>
              
              <span className="font-extrabold text-emerald-950">We're Hiring:</span>
              <span className="text-slate-700 font-medium">Interns, Researchers &amp; Fellows</span>
              
              <span className="ml-1 inline-flex items-center text-xs text-emerald-800 group-hover:translate-x-0.5 transition-transform font-bold">
                Apply Now →
              </span>
            </a>
          </div>

          {/* Main H1 Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] xl:text-[3.65rem] font-bold tracking-tight font-display text-slate-900 leading-[1.18]">
            Powering the Clean-Energy{' '}
            <br className="hidden sm:block" />
            Transition with the Right{' '}
            <span className="relative inline-block text-gestss-green-800 font-bold">
              Talent
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
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeOpacity="0.6"
                />
              </svg>
            </span>{' '}
            with{' '}
            <span className="text-emerald-700 font-bold">
              Green Energy and Solar Tech Staffing Solution
            </span>
          </h1>

          {/* Exact Sub-content */}
          <p className="text-base sm:text-xl text-slate-800 max-w-3xl mx-auto leading-relaxed font-medium">
            Specialized workforce solutions for renewable energy, solar technology, electric mobility, and EV infrastructure.
          </p>

          {/* Dual Action Cards for Employers & Professionals (Side by side on mobile & desktop) */}
          <div className="pt-4 flex flex-row items-stretch justify-center gap-2.5 sm:gap-4 max-w-[330px] sm:max-w-2xl mx-auto w-full">
            
            {/* For Employers — Request Talent */}
            <button
              onClick={onRequestTalent}
              className="flex-1 sm:flex-initial px-2.5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-white bg-slate-950 hover:bg-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center text-center group border border-slate-800"
            >
              <div>
                <span className="block text-[9.5px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-semibold leading-tight sm:leading-none mb-0.5 sm:mb-1">
                  For Employers
                </span>
                <span className="text-[13px] sm:text-sm font-extrabold text-white block leading-tight sm:leading-none whitespace-nowrap">
                  Request Talent
                </span>
              </div>
            </button>

            {/* For Professionals — Join Our Talent Network */}
            <button
              onClick={onJoinNetwork}
              className="flex-1 sm:flex-initial px-2.5 sm:px-8 py-2.5 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-slate-900 bg-white/95 hover:bg-white border border-slate-200/90 shadow-md hover:shadow-xl backdrop-blur-md transition-all duration-300 flex items-center justify-center text-center group"
            >
              <div>
                <span className="block text-[9.5px] sm:text-[11px] uppercase tracking-wider text-slate-500 font-semibold leading-tight sm:leading-none mb-0.5 sm:mb-1">
                  For Professionals
                </span>
                <span className="text-[13px] sm:text-sm font-extrabold text-slate-900 block leading-tight sm:leading-none whitespace-nowrap">
                  Join Talent Network
                </span>
              </div>
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}
