import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Copy, 
  Check, 
  Users, 
  Building2, 
  ShieldCheck, 
  ArrowRight,
  FileText
} from 'lucide-react';

export default function RecruitmentContactsPage() {
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const keyContacts = [
    {
      id: 'recruitment-ops',
      name: 'Recruitment Operations & Candidate Delivery',
      role: 'Candidate Delivery & Operations Desk',
      organization: 'GESTSS',
      website: 'https://gestss.com/',
      type: 'phone',
      contact: '+91 7745828168',
      telValue: '+917745828168',
      waValue: '917745828168',
      badge: 'Candidate Delivery Desk',
      description: 'Primary contact for candidate mobilization status, candidate screening, and onboarding across renewable projects.'
    },
    {
      id: 's-chaman',
      name: 'Mr. S. Chaman',
      role: 'Technical Officer',
      organization: 'GESTSS',
      website: 'https://gestss.com/',
      type: 'phone',
      contact: '+91 96952 70061',
      telValue: '+919695270061',
      waValue: '919695270061',
      badge: 'Technical Officer',
      description: 'Technical assessments, workforce calibration, and site-level technical compliance.'
    },
    {
      id: 'abhinav-k',
      name: 'Mr. Abhinav K',
      role: 'Sr. Technical Advisor – Research',
      organization: 'GESTSS',
      website: 'https://gestss.com/',
      type: 'phone',
      contact: '+91 7500024959',
      telValue: '+917500024959',
      waValue: '917500024959',
      badge: 'Research Advisory',
      description: 'Clean energy R&D, battery storage innovations (BESS), and technical research programs.'
    },
    {
      id: 'anvesha',
      name: 'Ms. Anvesha',
      role: 'Sr. Technical Advisor – Project',
      organization: 'GESTSS',
      website: 'https://gestss.com/',
      type: 'phone',
      contact: '+91 98682 86035',
      telValue: '+919868286035',
      waValue: '919868286035',
      badge: 'Project Advisory',
      description: 'Project engineering schedules, EV charging infrastructure coordination, and project deployment.'
    },
    {
      id: 'head-office',
      name: 'Corporate Head Office, Staffing GESTSS',
      role: 'Corporate Staffing Desk & Secretariat',
      organization: 'GESTSS',
      website: 'https://gestss.com/',
      type: 'email',
      contact: 'contact@gestss.com',
      mailValue: 'contact@gestss.com',
      badge: 'Corporate Secretariat',
      description: 'Official corporate correspondence, enterprise staffing inquiries, contracts, and institutional communication.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 sm:pt-32 pb-20 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-5xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
          <Link to="/" className="hover:text-emerald-800 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-emerald-800">Recruitment Operations</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="w-3.5 h-3.5 text-emerald-700" />
            <span>Official Contact Directory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-slate-900 tracking-tight">
            Recruitment Operations &amp; Candidate Delivery
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Direct contacts for our Technical Officers, Research Advisors, and Staffing Leadership at GESTSS.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {keyContacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-white rounded-3xl border border-slate-200/90 shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-[11px] font-bold">
                    {contact.badge}
                  </span>
                  <span className="text-[10px] uppercase font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Verified
                  </span>
                </div>

                <h2 className="text-lg font-bold text-slate-900 group-hover:text-emerald-800 transition-colors">
                  {contact.name}
                </h2>
                <p className="text-xs font-semibold text-emerald-700 mt-0.5">
                  {contact.role}
                </p>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-1">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{contact.organization}</span>
                  <span>•</span>
                  <a 
                    href={contact.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-emerald-700 underline underline-offset-2"
                  >
                    gestss.com
                  </a>
                </div>

                <p className="text-xs text-slate-600 mt-3 border-t border-slate-100 pt-3 leading-relaxed">
                  {contact.description}
                </p>
              </div>

              {/* Action Box */}
              <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center gap-2 overflow-hidden">
                    {contact.type === 'phone' ? (
                      <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    ) : (
                      <Mail className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    )}
                    <span className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {contact.contact}
                    </span>
                  </div>

                  <button
                    onClick={() => handleCopy(contact.contact, contact.id)}
                    className="p-1.5 rounded-lg hover:bg-white text-slate-500 hover:text-slate-900 transition-all flex items-center gap-1 text-[11px] font-semibold flex-shrink-0 cursor-pointer"
                    title="Copy to clipboard"
                  >
                    {copiedId === contact.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Direct Action Buttons */}
                <div className="grid grid-cols-2 gap-2">
                  {contact.type === 'phone' ? (
                    <>
                      <a
                        href={`tel:${contact.telValue}`}
                        className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`https://wa.me/${contact.waValue}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>
                    </>
                  ) : (
                    <a
                      href={`mailto:${contact.mailValue}`}
                      className="col-span-2 py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-400" />
                      <span>Send Official Email</span>
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Quick link to Brochure */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Looking for the Official GESTSS Brochure?</h3>
              <p className="text-xs text-slate-500">Download the detailed capabilities and workforce overview document.</p>
            </div>
          </div>
          <a
            href="/Brochure_GESTSS.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all flex items-center gap-1.5 flex-shrink-0"
          >
            <span>Download Brochure (PDF)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
