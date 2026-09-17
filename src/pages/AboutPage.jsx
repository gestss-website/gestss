import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Users, 
  Building2, 
  Leaf, 
  Award,
  Clock,
  Briefcase
} from 'lucide-react';

export default function AboutPage({ onRequestTalent, onJoinNetwork }) {
  return (
    <div className="pt-24 lg:pt-28 pb-20 bg-slate-50 min-h-screen">
      
      {/* Page Header / Hero Banner */}
      <section className="relative py-16 sm:py-24 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-gestss-green-950/80 to-slate-900 pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gestss-green-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gestss-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-emerald-400">About Us</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold uppercase tracking-wider">
              <Globe className="w-3.5 h-3.5" />
              About GESTSS
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white leading-tight">
              Pioneering the <span className="text-emerald-400">Green Workforce</span> Ecosystem.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              A specialized workforce solutions firm connecting clean-energy enterprises with compliance-ready professionals across Solar PV, EV Infrastructure, Renewable Engineering, and Grid Systems.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-3xl font-black text-emerald-400 font-display">4 Days</span>
              <p className="text-xs text-slate-300 mt-1 font-medium">Candidate Shortlist SLA</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-3xl font-black text-blue-400 font-display">100%</span>
              <p className="text-xs text-slate-300 mt-1 font-medium">Credential &amp; Safety Verified</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-3xl font-black text-amber-400 font-display">8+</span>
              <p className="text-xs text-slate-300 mt-1 font-medium">Technical Disciplines</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-3xl font-black text-white font-display">MSME</span>
              <p className="text-xs text-slate-300 mt-1 font-medium">Registered Enterprise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story & Purpose Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Story Card */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/80 shadow-lg relative overflow-hidden">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider">
                <Leaf className="w-3.5 h-3.5" />
                Our Origin &amp; Philosophy
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900 leading-tight">
                Built specifically for the technical demands of clean energy.
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Conventional recruitment agencies treat clean energy as just another industrial category. At GESTSS, we recognize that solar PV arrays, high-voltage battery storage, and high-amperage DC Fast Charging networks require an entirely different standard of technical mastery and compliance.
              </p>

              <p className="text-slate-600 text-base leading-relaxed">
                We understand your project environment before sourcing candidates. From local interconnection codes and utility interconnection approvals to OSHA 30 and NFPA 70E arc flash safety, our recruiters are technical specialists who speak the language of solar engineers and project managers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Project-Aligned Matching</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Evaluating site conditions, timeline, and exact tooling requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Zero Compliance Surprises</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Licenses, OSHA, NABCEP, and EVITP credentials verified beforehand.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-sm text-slate-500 font-medium">
                Contract • Permanent • Travel Crews • Temp-to-Perm
              </span>
              <button 
                onClick={onRequestTalent} 
                className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all flex items-center gap-2 shadow-sm"
              >
                <span>Consult Our Team</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Purpose & Core Drivers */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-emerald-50/70 border border-emerald-100 shadow-sm">
            <div>
              <Sparkles className="w-9 h-9 text-gestss-green-700 mb-5" />
              <h3 className="text-2xl font-bold font-display text-slate-900">Our Purpose</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Making specialized talent accessible, recruitment responsive, and career pathways meaningful for the global clean-energy transition.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              {[
                { 
                  num: '01', 
                  title: 'Accessible Specialized Talent', 
                  desc: 'Rapid deployment of qualified solar electricians, EVSE technicians, and systems engineers.' 
                },
                { 
                  num: '02', 
                  title: 'Responsive Staffing Architecture', 
                  desc: 'Adapting to tight installation windows, commissioning milestones, and utility interconnection deadlines.' 
                },
                { 
                  num: '03', 
                  title: 'Sustainable Career Transitions', 
                  desc: 'Upskilling conventional electrical trades into high-growth solar, battery storage, and EV infrastructure roles.' 
                },
              ].map((item) => (
                <div key={item.num} className="p-4 rounded-2xl bg-white border border-emerald-100 shadow-xs flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-gestss-green-100 text-gestss-green-800 flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {item.num}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all group">
            <Compass className="w-10 h-10 text-gestss-green-700 mb-5 group-hover:scale-110 transition-transform" />
            <div className="inline-block px-3 py-1 rounded-md bg-gestss-green-100 text-gestss-green-900 font-bold text-xs uppercase tracking-wider mb-4">
              Our Vision
            </div>
            <h3 className="text-2xl font-bold font-display text-slate-900">
              The Most Trusted Clean-Energy Workforce Partner
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              We envision a future where renewable energy developers, EPC contractors, and charging point operators never suffer costly project delays due to workforce bottlenecks. A world where qualified technicians find rewarding, future-proof green careers.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all group">
            <Target className="w-10 h-10 text-gestss-blue-700 mb-5 group-hover:scale-110 transition-transform" />
            <div className="inline-block px-3 py-1 rounded-md bg-gestss-blue-100 text-gestss-blue-900 font-bold text-xs uppercase tracking-wider mb-4">
              Our Mission
            </div>
            <h3 className="text-2xl font-bold font-display text-slate-900">
              Connecting Talent, Technology &amp; Clean Opportunity
            </h3>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              To cultivate the industry's most vetted talent network, champion technical compliance and safety standards, support career transition pathways, and deliver transparent, high-velocity recruitment architectures across global clean-energy initiatives.
            </p>
          </div>

        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="py-16 bg-white border-y border-slate-200/80 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black font-display text-slate-900">
              The Standards That Set Us Apart
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Every professional we mobilize is vetted against rigorous technical and compliance benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-emerald-300 transition-all">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-4" />
              <h4 className="text-base font-bold text-slate-900">Safety-First Culture</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Mandatory verification of OSHA 10/30, NFPA 70E, and specialized fall protection for rooftop and utility installations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-emerald-300 transition-all">
              <Clock className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="text-base font-bold text-slate-900">4-Day Shortlist SLA</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Pre-screened candidates delivered within four business days for primary technical and site supervision roles.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-emerald-300 transition-all">
              <Briefcase className="w-8 h-8 text-amber-600 mb-4" />
              <h4 className="text-base font-bold text-slate-900">Flexible Deployments</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Contract crews for project peaks, temp-to-perm trial hiring, and executive permanent placements.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-emerald-300 transition-all">
              <Users className="w-8 h-8 text-purple-600 mb-4" />
              <h4 className="text-base font-bold text-slate-900">Inclusive Transitions</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Supporting veterans, diverse technicians, and traditional trade workers in entering clean tech careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="space-y-3 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Ready to Accelerate Your Clean Energy Projects?
            </h3>
            <p className="text-sm text-slate-300">
              Speak with our technical recruitment advisors today or join our nationwide network of verified solar and EV specialists.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onRequestTalent}
              className="px-7 py-3 rounded-full text-sm font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all shadow-md"
            >
              Request Talent
            </button>
            <button
              onClick={onJoinNetwork}
              className="px-7 py-3 rounded-full text-sm font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
            >
              Join Talent Network
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
