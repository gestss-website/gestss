import React from 'react';
import { BatteryStorageBESSArt, WindTurbinesClusterArt } from './CleanEnergyVectorArt';

// Bold, crisp corner crosshairs / star markers
const CornerCross = ({ position }) => {
  const positionClasses = {
    'tl': '-top-2 -left-2 sm:-top-2.5 sm:-left-2.5',
    'tr': '-top-2 -right-2 sm:-top-2.5 sm:-right-2.5',
    'bl': '-bottom-2 -left-2 sm:-bottom-2.5 sm:-left-2.5',
    'br': '-bottom-2 -right-2 sm:-bottom-2.5 sm:-right-2.5',
  };

  return (
    <svg 
      viewBox="0 0 16 16" 
      className={`absolute ${positionClasses[position]} w-4 h-4 sm:w-5 sm:h-5 text-slate-600 pointer-events-none select-none z-10`} 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.2" 
      strokeLinecap="round"
    >
      <line x1="8" y1="1" x2="8" y2="15" />
      <line x1="1" y1="8" x2="15" y2="8" />
    </svg>
  );
};

function DashedCard({ title, description, className = '' }) {
  return (
    <div className={`relative bg-white border-2 border-dashed border-slate-300 p-3.5 sm:p-7 hover:border-slate-400 hover:bg-slate-50/40 transition-colors duration-200 flex flex-col justify-start ${className}`}>
      {/* 4 Prominent Corner Crosshair Stars (+) */}
      <CornerCross position="tl" />
      <CornerCross position="tr" />
      <CornerCross position="bl" />
      <CornerCross position="br" />

      {/* Card Content */}
      <h3 className="text-sm sm:text-base lg:text-lg font-bold font-display text-slate-950 tracking-tight leading-tight sm:leading-snug">
        {title}
      </h3>
      <p className="mt-1.5 sm:mt-2.5 text-sm sm:text-xs lg:text-sm text-slate-600 leading-relaxed font-normal">
        {description}
      </p>
    </div>
  );
}

export default function WorkforceUpskillingSection() {
  const pathways = [
    {
      title: 'Technical Upskilling',
      desc: 'Building additional technical capabilities for emerging green-technology roles.',
    },
    {
      title: 'Industry-Oriented Training',
      desc: 'Supporting practical training aligned with the requirements of the green economy.',
    },
    {
      title: 'Certification Pathways',
      desc: 'Developing pathways for relevant industry knowledge, training, and certification.',
    },
    {
      title: 'Career Transition Support',
      desc: 'Helping professionals connect their existing skills with emerging clean-energy opportunities.',
    },
    {
      title: 'Employer-Aligned Skill Development',
      desc: 'Strengthening the connection between workforce skills and employer requirements.',
    },
    {
      title: 'Continuing Professional Development',
      desc: 'Supporting ongoing development as clean-energy technologies and workforce requirements evolve.',
    }
  ];

  return (
    <section id="upskilling" className="py-12 lg:py-16 bg-white relative overflow-hidden border-t border-slate-200/70">
      {/* Domain-specific battery storage (BESS) & wind cluster vector backdrop */}
      <BatteryStorageBESSArt className="absolute top-2 right-1 sm:top-6 sm:right-10 w-38 h-24 sm:w-60 sm:h-36 opacity-40 sm:opacity-45" />
      <WindTurbinesClusterArt className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-10 w-32 h-24 sm:w-52 sm:h-38 opacity-35 sm:opacity-40" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="w-12 h-1.5 bg-emerald-500 rounded-full mb-4" />

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
            Workforce Upskilling &amp; Career Transition
          </h2>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
            Professionals with existing technical and electrical experience may require additional industry-specific knowledge, training, or certification pathways to move into emerging green-technology roles.
          </p>
        </div>

        {/* 2-Column Side-by-Side Layout on both Mobile & Desktop with Bold Dashes and Corner Crosshairs */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-6 items-stretch">
          
          {/* Row 1: Side by side on mobile & desktop */}
          <div className="col-span-1 lg:col-span-6">
            <DashedCard 
              title={pathways[0].title} 
              description={pathways[0].desc} 
              className="h-full"
            />
          </div>
          <div className="col-span-1 lg:col-span-6">
            <DashedCard 
              title={pathways[1].title} 
              description={pathways[1].desc} 
              className="h-full"
            />
          </div>

          {/* Row 2: Side by side on mobile & asymmetric on desktop */}
          <div className="col-span-1 lg:col-span-7">
            <DashedCard 
              title={pathways[2].title} 
              description={pathways[2].desc} 
              className="h-full"
            />
          </div>
          <div className="col-span-1 lg:col-span-5">
            <DashedCard 
              title={pathways[3].title} 
              description={pathways[3].desc} 
              className="h-full"
            />
          </div>

          {/* Row 3: Side by side on mobile & asymmetric on desktop */}
          <div className="col-span-1 lg:col-span-5">
            <DashedCard 
              title={pathways[4].title} 
              description={pathways[4].desc} 
              className="h-full"
            />
          </div>
          <div className="col-span-1 lg:col-span-7">
            <DashedCard 
              title={pathways[5].title} 
              description={pathways[5].desc} 
              className="h-full"
            />
          </div>

          {/* Row 4: Our Focus - Full-width spanning both columns */}
          <div className="col-span-2 lg:col-span-12">
            <DashedCard 
              title="Our Focus" 
              description="We aim to collaborate with technical institutions, universities, training organizations, and relevant certification bodies to develop practical pathways for workforce transition and upskilling." 
              className="h-full bg-slate-50/40"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
