import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Building2, PhoneCall } from 'lucide-react';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import ProcessApproach from '../components/ProcessApproach';
import UpskillingSection from '../components/UpskillingSection';
import TalentMatrix from '../components/TalentMatrix';
import PillarsWhyUs from '../components/PillarsWhyUs';

export default function HomePage({ onRequestTalent, onJoinNetwork, onSelectRole }) {
  return (
    <main>
      {/* Hero Section */}
      <Hero 
        onRequestTalent={onRequestTalent} 
        onJoinNetwork={onJoinNetwork} 
      />

      {/* What We Do: Core Solutions */}
      <ServicesGrid 
        onRequestTalent={onRequestTalent} 
      />

      {/* Our Approach & Compliance Pipeline */}
      <ProcessApproach 
        onRequestTalent={onRequestTalent} 
      />

      {/* Workforce Upskilling & Partnerships */}
      <UpskillingSection 
        onRequestTalent={onRequestTalent} 
        onJoinNetwork={onJoinNetwork} 
      />

      {/* Key Areas of Talent (Filterable Matrix) */}
      <TalentMatrix 
        onSelectRole={onSelectRole} 
      />

      {/* Why Work With Us: 6 Pillars & Diversity */}
      <PillarsWhyUs />

      {/* Streamlined Bottom Teaser for Dedicated About & Contact */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* About Us Card */}
            <div className="relative p-8 rounded-3xl bg-white border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-gestss-green-700 flex items-center justify-center font-bold text-xl">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-slate-900">
                  Discover Our Mission &amp; Story
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Learn how GESTSS is bridging the green-energy skills gap through rigorous compliance, technical vetting, and workforce upskilling.
                </p>
              </div>
              <div className="pt-6">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-gestss-green-800 hover:text-gestss-green-900 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore About GESTSS</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Contact Us Card */}
            <div className="relative p-8 rounded-3xl bg-slate-900 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gestss-green-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-3 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-white/10 text-emerald-300 flex items-center justify-center font-bold text-xl">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-white">
                  Have a Project or Inquiry?
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Connect with our technical talent advisors, access our MSME desk, or browse our comprehensive staffing FAQs.
                </p>
              </div>
              <div className="pt-6 relative z-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-emerald-300 hover:text-white group-hover:translate-x-1 transition-all"
                >
                  <span>Visit Contact Hub &amp; FAQs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
