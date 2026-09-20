import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Send, 
  CheckCircle2, 
  Building, 
  ChevronDown, 
  HelpCircle, 
  Award, 
  MessageSquare 
} from 'lucide-react';

export default function ContactSection({ onRequestTalent, onJoinNetwork }) {
  const [formSent, setFormSent] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    subject: 'General Workforce Inquiry',
    message: ''
  });

  const faqs = [
    {
      q: 'How does the 4-day shortlist SLA work?',
      a: 'For standard technical roles (such as Solar PV Lead Installers, Level 2 / DC Fast Charging EVSE Technicians, and Electrical Project Coordinators), our specialized recruiters deliver a curated dossier of pre-screened, credential-verified candidates within 4 business days.'
    },
    {
      q: 'What certifications and safety qualifications are verified prior to deployment?',
      a: 'Depending on jurisdiction and role specifications, we verify state Journeyman/Master electrical licenses, NABCEP PV Associate/Installation Professional certifications, EVITP (Electric Vehicle Infrastructure Training Program), NFPA 70E electrical safety, and OSHA 10/30 site safety compliance.'
    },
    {
      q: 'Can GESTSS support multi-site or regional rollouts?',
      a: 'Yes. Whether you are executing a regional solar rooftop rollout or installing a multi-state highway DC Fast Charging corridor, our flexible models support scalable travel crews, temp-to-perm teams, and localized permanent hires.'
    },
    {
      q: 'How do you assist traditional tradespeople transitioning into clean energy?',
      a: 'Through our Workforce Upskilling initiative, we partner with technical academies and certification bodies to map industrial and utility electricians into high-growth solar and EVSE roles, bridging the skills gap efficiently.'
    }
  ];

  const handleSend = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-gestss-green-900 text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            Let's Build the Future Together
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
            Connect with <span className="text-gradient-green">GESTSS</span> Today
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you are an enterprise seeking specialized talent, a professional exploring clean-energy careers, or an institution interested in collaboration, we provide the platform connecting people with tomorrow's energy landscape.
          </p>
        </div>

        {/* Contact Info Cards & Dispatch Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Details & Direct Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold font-display text-slate-900">
                  Green Energy &amp; Solar Tech Staffing Solution
                </h3>
                <p className="text-xs text-gestss-green-700 font-semibold mt-0.5">
                  Official Workforce &amp; Staffing Operations
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-gestss-green-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-5 h-5 text-gestss-green-700" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Enterprise Credential
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      MSME Registration (Govt. of India Recognized)
                    </span>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-gestss-solar-100 text-gestss-solar-800">
                      Active Enterprise Portal
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-gestss-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-gestss-blue-700" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Direct Inquiries
                    </span>
                    <a href="mailto:contact.gestss@gmail.com" className="text-sm font-semibold text-slate-800 hover:text-gestss-green-800 transition-colors">
                      contact.gestss@gmail.com
                    </a>
                    <span className="block text-xs text-slate-500">Dedicated recruitment response desk</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-gestss-green-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-gestss-green-700" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Staffing Hotline
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      +91 (Staffing Desk - Direct)
                    </span>
                    <span className="block text-xs text-slate-500">Monday – Saturday: 9:00 AM – 7:00 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-gestss-solar-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-gestss-solar-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Corporate Headquarters
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      National Operations Center &amp; Regional Hubs
                    </span>
                    <span className="block text-xs text-slate-500">Serving Solar &amp; EV Projects Nationwide &amp; Globally</span>
                  </div>
                </div>
              </div>

              {/* Fast action trigger pills */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={onRequestTalent}
                  className="flex-1 py-2.5 rounded-xl bg-gestss-green-900 text-white text-xs font-bold hover:bg-gestss-green-800 transition-all text-center"
                >
                  Request Talent Now
                </button>
                <button
                  onClick={onJoinNetwork}
                  className="flex-1 py-2.5 rounded-xl border border-gestss-blue-300 text-gestss-blue-900 text-xs font-bold hover:bg-blue-50 transition-all text-center"
                >
                  Join Talent Network
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Fast Message Dispatch Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-sm">
            <h3 className="text-2xl font-bold font-display text-slate-900">
              Send an Instant Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-6">
              Our workforce consultation specialists respond to all verified inquiries promptly.
            </p>

            {formSent ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-gestss-green-800 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-display text-slate-900">Message Dispatched!</h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you for reaching out. A GESTSS staffing advisor will be in touch with you shortly.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="mt-4 px-5 py-2 text-xs font-bold rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Miller"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gestss-green-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="david@energycorp.com"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gestss-green-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Inquiry Category
                  </label>
                  <select
                    value={contactData.subject}
                    onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gestss-green-600 bg-white"
                  >
                    <option value="Hiring / Workforce Consultation">Hiring / Workforce Consultation</option>
                    <option value="Solar Project Crew Requirement">Solar Project Crew Requirement</option>
                    <option value="EV Infrastructure Specialist Deployment">EV Infrastructure Specialist Deployment</option>
                    <option value="Candidate Career Representation">Candidate Career Representation</option>
                    <option value="University / Training Institution Partnership">University / Training Institution Partnership</option>
                    <option value="General Information">General Information</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Project Scope or Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details about your project timelines, number of personnel, target certifications or career aspirations..."
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gestss-green-600"
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-gestss-green-900 to-gestss-green-700 hover:from-gestss-green-800 hover:to-gestss-green-900 shadow-md flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to GESTSS Team</span>
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

        {/* Interactive FAQ Accordion */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Clear Answers for Project Leaders &amp; Candidates
            </h3>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-gestss-green-900"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transform transition-transform duration-200 flex-shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-gestss-green-700' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
