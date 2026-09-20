import React, { useState } from 'react';
import { X, CheckCircle2, Send, Building2, Zap, ShieldCheck, Loader2 } from 'lucide-react';
import { submitTalentRequest } from '@/lib/firebase';

export default function TalentRequestModal({ isOpen, onClose, initialRole = '' }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    workEmail: '',
    phone: '',
    roleNeeded: initialRole || 'Solar PV Installation, Operations & Maintenance',
    deploymentModel: 'Direct-Hire Permanent',
    headcount: '1-3',
    location: '',
    timeline: 'Immediate (within 1-2 weeks)',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      await submitTalentRequest(formData);
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting talent request:', err);
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
        <div className="p-6 sm:p-7 bg-gradient-to-r from-gestss-green-950 via-slate-900 to-gestss-blue-950 text-white flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider mb-1 border border-emerald-500/30">
              <Zap className="w-3 h-3 text-gestss-solar-400" />
              4-Day Shortlist SLA
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Request Specialized Green Talent
            </h3>
            <p className="text-xs text-slate-300 mt-0.5">
              Submit your project specifications and receive verified candidate dossiers.
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
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-gestss-green-700 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold font-display text-slate-900">
                Workforce Request Submitted!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong>{formData.contactPerson || 'valued client'}</strong>. Our specialized technical staffing lead will review your requirements for <strong>{formData.roleNeeded}</strong> and contact you within 4 hours.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-sm mx-auto text-left text-xs space-y-1">
                <div><span className="text-slate-500">Target SLA:</span> <strong className="text-slate-800">4 Business Days Shortlist</strong></div>
                <div><span className="text-slate-500">Deployment Model:</span> <strong className="text-slate-800">{formData.deploymentModel}</strong></div>
                <div><span className="text-slate-500">Headcount:</span> <strong className="text-slate-800">{formData.headcount} Professional(s)</strong></div>
              </div>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-gestss-green-900 hover:bg-gestss-green-800"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Clean Energy Corp"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gestss-green-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins, Project Director"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gestss-green-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="s.jenkins@apexclean.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gestss-green-600 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gestss-green-600 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Specialized Role Required *
                </label>
                <select
                  value={formData.roleNeeded}
                  onChange={(e) => setFormData({ ...formData, roleNeeded: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gestss-green-600 bg-white"
                >
                  <option value="Solar PV Installation, Operations & Maintenance">Solar PV Installation, Operations &amp; Maintenance</option>
                  <option value="Renewable-Energy Engineering & Project Management">Renewable-Energy Engineering &amp; Project Management</option>
                  <option value="Electrical Engineering & Energy Systems">Electrical Engineering &amp; Energy Systems</option>
                  <option value="EVSE Installation, Commissioning & Maintenance">EVSE Installation, Commissioning &amp; Maintenance</option>
                  <option value="EV Charging Infrastructure & Fleet Deployment">EV Charging Infrastructure &amp; Fleet Deployment</option>
                  <option value="Site Surveying & Technical Field Operations">Site Surveying &amp; Technical Field Operations</option>
                  <option value="Grid Integration & Associated Energy Systems">Grid Integration &amp; Associated Energy Systems</option>
                  <option value="Technical, Operational & Administrative Support">Technical, Operational &amp; Administrative Support</option>
                  <option value="Custom / Multidisciplinary Project Crew">Custom / Multidisciplinary Project Crew</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Deployment Model
                  </label>
                  <select
                    value={formData.deploymentModel}
                    onChange={(e) => setFormData({ ...formData, deploymentModel: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-gestss-green-600 bg-white"
                  >
                    <option value="Direct-Hire Permanent">Direct-Hire Permanent</option>
                    <option value="Contract Project Staffing">Contract Project Staffing</option>
                    <option value="Temp-to-Perm">Temp-to-Perm</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Headcount
                  </label>
                  <select
                    value={formData.headcount}
                    onChange={(e) => setFormData({ ...formData, headcount: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-gestss-green-600 bg-white"
                  >
                    <option value="1">1 Person</option>
                    <option value="2-5">2 - 5 Crew</option>
                    <option value="6-15">6 - 15 Team</option>
                    <option value="16+">16+ Turnkey Team</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Target Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-gestss-green-600 bg-white"
                  >
                    <option value="Immediate (4-Day SLA)">Immediate (4-Day SLA)</option>
                    <option value="1 - 2 Weeks">1 - 2 Weeks</option>
                    <option value="1 Month Ahead">1 Month Ahead</option>
                    <option value="Planning Phase">Planning Phase</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Project Location &amp; Technical Scope Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention site location, voltage level, equipment brands (e.g., ABB, Enphase, Tesla Supercharger, SMA) or licensing prerequisites..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-gestss-green-600"
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
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-gestss-green-900 to-gestss-green-700 hover:from-gestss-green-800 hover:to-gestss-green-950 shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Request (Activate 4-Day SLA)</span>
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
