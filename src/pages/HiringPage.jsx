import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function HiringPage() {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdzJDptlgx40QVm878sZTiaWcze_ygvXuW-W2qVn2eVbD_0UA/viewform?usp=publish-editor";

  return (
    <div className="min-h-screen bg-slate-50 pt-24 sm:pt-28 pb-16 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl flex flex-col items-center">
        
        {/* The Internship Hiring Image */}
        <div className="w-full bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
          <img
            src="/Advertizing_Intern.jpeg"
            alt="GESTSS We're Hiring Interns"
            className="w-full h-auto object-contain block"
          />
        </div>

        {/* Apply Button Directly Below */}
        <div className="mt-6 sm:mt-8 w-full max-w-sm">
          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 sm:py-4 px-8 rounded-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-extrabold text-base sm:text-lg shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            id="hiring-apply-btn"
          >
            <span>Apply</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>
  );
}
