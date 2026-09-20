import React, { useState } from 'react';
import { X, CheckCircle2, Send, Briefcase, Award, FileText, Loader2 } from 'lucide-react';
import { submitTalentApplication } from '@/lib/firebase';

export default function CareerApplyModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentRole: '',
    disciplineInterest: 'Solar PV Installation & O&M',
    experienceYears: '3-5 years',
    certifications: '',
    cityState: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      await submitTalentApplication(formData);
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting application:', err);
      setError('Submission failed. Please try again or check connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setError('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 sm:p-7 bg-gradient-to-r from-gestss-blue-950 via-slate-900 to-gestss-green-950 text-white flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider mb-1 border border-blue-500/30">
              <Award className="w-3 h-3 text-gestss-solar-400" />
              Green Talent Network
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Join Our Clean Energy Talent Pool
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Connect your capabilities with leading solar developers, EV networks &amp; engineering firms.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 text-gestss-blue-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-display text-slate-900">
                Application Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Welcome to the GESTSS Network, <strong>{formData.fullName}</strong>. Your profile has been queued for review by our clean-energy recruitment team for roles in <strong>{formData.disciplineInterest}</strong>.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-left text-xs space-y-1">
                <div><span className="text-slate-500">Target Area:</span> <strong className="text-slate-800">{formData.disciplineInterest}</strong></div>
                <div><span className="text-slate-500">Experience:</span> <strong className="text-slate-800">{formData.experienceYears}</strong></div>
                <div><span className="text-slate-500">Status:</span> <strong className="text-emerald-700 font-semibold">Active in Matching Pipeline</strong></div>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gestss-blue-900 hover:bg-gestss-blue-800"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gestss-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex.rivera@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gestss-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 349-8821"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gestss-blue-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Current Location (City, State/Country) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Austin, TX or Berlin, Germany"
                    value={formData.cityState}
                    onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gestss-blue-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Primary Area of Expertise / Interest *
                </label>
                <select
                  value={formData.disciplineInterest}
                  onChange={(e) => setFormData({ ...formData, disciplineInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gestss-blue-600 bg-white"
                >
                  <option value="Solar PV Installation & O&M">Solar PV Installation &amp; O&amp;M</option>
                  <option value="EVSE Installation & DC Fast Charging">EVSE Installation &amp; DC Fast Charging</option>
                  <option value="Electrical Engineering & Power Systems">Electrical Engineering &amp; Power Systems</option>
                  <option value="Renewable Project Management & EPC">Renewable Project Management &amp; EPC</option>
                  <option value="Site Surveying & Technical Field Ops">Site Surveying &amp; Technical Field Ops</option>
                  <option value="Grid Integration & Substation">Grid Integration &amp; Substation</option>
                  <option value="Career Transition from Conventional Utility/Trades">Career Transition from Conventional Utility/Trades</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Years of Relevant Experience
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-gestss-blue-600 bg-white"
                  >
                    <option value="Entry / Career Transition">Entry / Career Transition</option>
                    <option value="1-2 years">1 - 2 years</option>
                    <option value="3-5 years">3 - 5 years</option>
                    <option value="6-10 years">6 - 10 years</option>
                    <option value="10+ years Lead/Principal">10+ years Lead/Principal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Certifications / Trade Licenses
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Journeyman Wireman, NABCEP, EVITP, OSHA 30"
                    value={formData.certifications}
                    onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-gestss-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Summary of Experience &amp; Career Aspirations
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about the equipment you've worked on, current employer or preferred work model (Full-time direct, contract, fly-in fly-out)..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gestss-blue-600"
                ></textarea>
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                  {error}
                </div>
              )}

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-gestss-blue-900 to-gestss-blue-700 hover:from-gestss-blue-800 hover:to-gestss-blue-950 shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Profile...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Profile to Talent Network</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
