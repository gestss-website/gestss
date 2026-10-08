import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  HelpCircle, 
  Award, 
  MessageSquare,
  Clock,
  ArrowRight,
  Loader2,
  Copy,
  Check,
  Users,
  Building2,
  MessageCircle,
  FileText
} from 'lucide-react';
import { submitInquiry } from '@/lib/firebase';

export default function ContactPage({ onRequestTalent, onJoinNetwork }) {
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [openFaq, setOpenFaq] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const recruitmentTeam = [
    {
      id: 'contact-rec-ops',
      name: 'Recruitment Operations & Candidate Delivery',
      role: 'Operations & Candidate Delivery Desk',
      contact: '+91 7745828168',
      type: 'phone',
      tel: '+917745828168',
      wa: '917745828168'
    },
    {
      id: 'contact-chaman',
      name: 'Mr. S. Chaman',
      role: 'Technical Officer, GESTSS',
      contact: '+91 96952 70061',
      type: 'phone',
      tel: '+919695270061',
      wa: '919695270061'
    },
    {
      id: 'contact-abhinav',
      name: 'Mr. Abhinav K',
      role: 'Sr. Technical Advisor – Research, GESTSS',
      contact: '+91 7500024959',
      type: 'phone',
      tel: '+917500024959',
      wa: '917500024959'
    },
    {
      id: 'contact-anvesha',
      name: 'Ms. Anvesha',
      role: 'Sr. Technical Advisor – Project, GESTSS',
      contact: '+91 98682 86035',
      type: 'phone',
      tel: '+919868286035',
      wa: '919868286035'
    },
    {
      id: 'contact-ho',
      name: 'Corporate Head Office, Staffing GESTSS',
      role: 'Staffing Secretariat & Official Desk',
      contact: 'contact@gestss.com',
      type: 'email',
      mail: 'contact@gestss.com'
    }
  ];

  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Hiring / Workforce Consultation',
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
    },
    {
      q: 'What is the MSME Desk and how can small and medium clean-energy enterprises benefit?',
      a: 'As a recognized MSME enterprise, GESTSS offers agile contracting, tailored payment terms, and rapid workforce mobilization for growing solar installers, subcontractors, and EV charging service providers.'
    }
  ];

  const handleSend = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      await submitInquiry(contactData);
      setFormSent(true);
    } catch (err) {
      console.error('Error submitting inquiry:', err);
      setError('Failed to dispatch inquiry. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-20 bg-slate-50 min-h-screen">
      
      {/* Page Header / Hero Banner with contactus-bg */}
      <section className="relative isolate min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 overflow-hidden">
        {/* Background Image covering the entire area behind navbar and hero text */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src="/services/contactus-bg.png"
            alt="Contact GESTSS"
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle overlay to ensure text contrast while keeping image bright and visible */}
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[0.5px] pointer-events-none" />
          {/* Soft bottom transition into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-36 bg-gradient-to-t from-slate-50 via-slate-50/50 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-700 mb-6">
            <Link to="/" className="hover:text-emerald-800 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-emerald-800">Contact Us</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-600/30 text-emerald-950 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
              <MessageSquare className="w-3.5 h-3.5 text-emerald-800" />
              Contact Hub &amp; MSME Desk
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-slate-900 leading-tight">
              Let's Build the Clean Future <span className="text-gradient-green">Together</span>.
            </h1>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              Whether you are mobilizing specialized project crews, seeking technical green-energy talent, or exploring career pathways, our team is ready to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details & Dispatch Form */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-lg space-y-6">
              <div>
                <h2 className="text-3xl font-bold font-display text-slate-900">
                  Green Energy &amp; Solar Tech Staffing Solution
                </h2>
                <p className="text-xs text-gestss-green-700 font-semibold mt-1">
                  Official Workforce &amp; Staffing Operations
                </p>
              </div>

              <div className="space-y-5 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-gestss-green-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Award className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Enterprise Credential
                    </span>
                    <span className="text-sm font-bold text-slate-900 block mt-0.5">
                      MSME Registered Enterprise
                    </span>
                    <span className="inline-block mt-1 px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800">
                      Govt. of India Recognized
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-gestss-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Direct Email Inquiries
                    </span>
                    <a href="mailto:contact@gestss.com" className="text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors block mt-0.5">
                      contact@gestss.com
                    </a>
                    <span className="block text-xs text-slate-500 mt-0.5">Dedicated staffing &amp; recruiter response desk</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-gestss-green-800 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      Recruitment Operations &amp; Candidate Delivery
                    </span>
                    <a href="tel:+917745828168" className="text-sm font-bold text-slate-900 hover:text-emerald-600 transition-colors block mt-0.5">
                      +91 7745828168
                    </a>
                    <span className="block text-xs text-slate-500 mt-0.5">Direct candidate delivery desk • Mon–Sat 9AM–7PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 text-gestss-solar-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                      National Operations &amp; Regional Hubs
                    </span>
                    <span className="text-sm font-bold text-slate-900 block mt-0.5">
                      National Workforce Coordination Center
                    </span>
                    <span className="block text-xs text-slate-500 mt-0.5">Serving Solar PV, EV Charging, &amp; Grid Sites Nationwide</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onRequestTalent}
                  className="flex-1 py-3 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all text-center shadow-sm"
                >
                  Request Talent Now
                </button>
                <button
                  onClick={onJoinNetwork}
                  className="flex-1 py-3 rounded-xl border border-slate-200 text-slate-800 text-xs font-bold hover:bg-slate-50 transition-all text-center"
                >
                  Join Talent Network
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Direct Fast Message Dispatch Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-lg">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
              Send an Instant Inquiry
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-8">
              Fill out the form below and our technical workforce consultants will get in touch with you within 24 hours.
            </p>

            {formSent ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold font-display text-slate-900">Inquiry Dispatched Successfully!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you for contacting GESTSS. A dedicated technical staffing advisor will review your requirements and reach out to you shortly.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="mt-4 px-6 py-2.5 text-xs font-bold rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSend} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David Miller"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="david@energycorp.com"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={contactData.subject}
                      onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all bg-white"
                    >
                      <option value="Hiring / Workforce Consultation">Hiring / Workforce Consultation</option>
                      <option value="Solar Project Crew Requirement">Solar Project Crew Requirement</option>
                      <option value="EV Infrastructure Specialist Deployment">EV Infrastructure Specialist Deployment</option>
                      <option value="Candidate Career Representation">Candidate Career Representation</option>
                      <option value="University / Training Institution Partnership">University / Training Institution Partnership</option>
                      <option value="MSME Collaboration">MSME Collaboration</option>
                      <option value="General Information">General Information</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Project Scope or Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Provide details about your project timelines, number of personnel needed, target certifications (NABCEP, EVITP, OSHA), or career goals..."
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600 transition-all"
                  ></textarea>
                </div>

                {error && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                    {error}
                  </div>
                )}

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Dispatching Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to GESTSS Team</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

        {/* Recruitment Operations & Candidate Delivery Directory */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-3.5 h-3.5 text-blue-700" />
              <span>Direct Team Access</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-slate-900">
              Recruitment Operations &amp; Candidate Delivery
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Reach out directly to our Technical Officers, Research Advisors, and Staffing Leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {recruitmentTeam.map((member) => (
              <div 
                key={member.id}
                className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      Official GESTSS
                    </span>
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      Active
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{member.name}</h3>
                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">{member.role}</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">GESTSS (https://gestss.com/)</p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex items-center gap-2 truncate">
                      {member.type === 'phone' ? (
                        <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <Mail className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                      )}
                      <span className="text-xs font-bold text-slate-900 truncate">{member.contact}</span>
                    </div>

                    <button
                      onClick={() => handleCopy(member.contact, member.id)}
                      className="p-1 rounded hover:bg-white text-slate-500 hover:text-slate-900 text-[11px] font-semibold flex items-center gap-1 cursor-pointer transition-all"
                      title="Copy to clipboard"
                    >
                      {copiedId === member.id ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {member.type === 'phone' ? (
                      <>
                        <a
                          href={`tel:${member.tel}`}
                          className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                        >
                          <Phone className="w-3 h-3 text-emerald-400" />
                          <span>Call</span>
                        </a>
                        <a
                          href={`https://wa.me/${member.wa}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>WhatsApp</span>
                        </a>
                      </>
                    ) : (
                      <a
                        href={`mailto:${member.mail}`}
                        className="col-span-2 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                      >
                        <Mail className="w-3 h-3 text-blue-400" />
                        <span>Send Email</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive FAQ Accordion */}
        <div id="faq" className="mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-slate-900">
              Clear Answers for Project Leaders &amp; Candidates
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Everything you need to know about our sourcing SLA, verification processes, and flexible staffing models.
            </p>
          </div>

          <div className="space-y-3.5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/90 overflow-hidden shadow-xs hover:border-emerald-200 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base hover:text-emerald-700"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transform transition-transform duration-200 flex-shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-emerald-600' : ''
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

      </section>

    </div>
  );
}
