import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Compass, 
  Target, 
  ArrowRight,
  Sun,
  BatteryCharging,
  Layers,
  GraduationCap
} from 'lucide-react';

export default function AboutPage({ onRequestTalent, onJoinNetwork }) {
  return (
    <div className="pb-20 bg-slate-50 min-h-screen text-slate-800">
      
      {/* 1. Header / Hero Section with aboutus-bg */}
      <section className="relative isolate min-h-[500px] sm:min-h-[540px] lg:min-h-[580px] flex flex-col justify-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden">
        {/* Hero Background Image covering the entire area behind navbar and hero text */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/services/aboutus-bg.png"
            alt="About GESTSS"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay to ensure text contrast while keeping image bright and visible */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[0.5px] pointer-events-none" />
          {/* Soft bottom transition into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-36 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent pointer-events-none" />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-6">
            <Link to="/" className="hover:text-emerald-800 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-emerald-800">About Us</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-600/30 text-emerald-950 text-xs font-bold uppercase tracking-wider mb-5 backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-800" />
            Specialized Workforce Solutions
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-slate-900 leading-tight">
            About <span className="text-gradient-green">Us</span>
          </h1>

          <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white/85 border border-white/90 backdrop-blur-md shadow-xl shadow-slate-900/5">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-900 font-medium leading-relaxed">
              Green Energy &amp; Solar Tech Staffing Solution is built around a simple proposition: the clean-energy transition requires people with the right skills, at the right place, and at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core About Us Content Cards */}
      <section className="py-14 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-8 sm:p-12 space-y-8">
          
          {/* Paragraph 2 */}
          <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/70">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              From solar installer start-ups to large renewable-energy developers, EV charging-network operators, engineering organizations, and other clean-technology enterprises, businesses increasingly require specialized personnel whose capabilities match the technical realities of their projects.
            </p>
          </div>

          {/* Paragraph 3 & 4 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Paragraph 3 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-emerald-50/50 border border-emerald-100/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-md mb-3 inline-block">
                  Beyond Conventional Recruitment
                </span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-2">
                  Our approach therefore goes beyond conventional recruitment. We seek to understand the technical, operational, geographic, and project-specific requirements of an organization before identifying suitable candidates.
                </p>
              </div>
            </div>

            {/* Paragraph 4 */}
            <div className="p-6 sm:p-7 rounded-2xl bg-blue-50/50 border border-blue-100/80 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-800 bg-blue-100/80 px-2.5 py-1 rounded-md mb-3 inline-block">
                  Proposed Model
                </span>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed mt-2">
                  Our proposed model combines specialized industry networks with structured candidate screening and workforce upskilling to create a more responsive talent pipeline for the evolving green economy.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Our Vision & Our Mission Dual Section */}
      <section className="py-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Our Vision Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 mb-4">
                Our Vision
              </h2>
              <p className="text-base text-slate-800 font-semibold leading-relaxed mb-4">
                To become a trusted workforce partner for organizations and professionals shaping the global transition toward clean energy.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We envision a future in which clean-energy businesses can access specialized talent efficiently and professionals can discover sustainable, future-oriented career opportunities across solar energy, renewable power, electric mobility, EV infrastructure, and emerging green technologies.
              </p>
            </div>
          </div>

          {/* Our Mission Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900 mb-4">
                Our Mission
              </h2>
              <p className="text-base text-slate-800 font-semibold leading-relaxed mb-4">
                Our mission is to connect talent, technology, and opportunity across the green economy.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We seek to build specialized talent networks, support technical workforce development, facilitate career transitions, and provide flexible staffing solutions that respond to the changing needs of clean-energy organizations.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 max-w-lg">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Green Energy &amp; Solar Tech Staffing Solution
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Connecting people with the right skills, at the right place, and at the right time.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onRequestTalent}
              className="px-6 py-3 rounded-full text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md"
            >
              Request Talent
            </button>
            <button
              onClick={onJoinNetwork}
              className="px-6 py-3 rounded-full text-xs font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
            >
              Join Talent Network
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
