import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Building2, PhoneCall } from 'lucide-react';
import Hero from '../components/Hero';
import GreenEnergyLandscape from '../components/GreenEnergyLandscape';
import ServicesGrid from '../components/ServicesGrid';
import ProcessApproach from '../components/ProcessApproach';
import WorkforceUpskillingSection from '../components/WorkforceUpskillingSection';
import TalentMatrix from '../components/TalentMatrix';
import PillarsWhyUs from '../components/PillarsWhyUs';
import ComplianceSection from '../components/ComplianceSection';
import StrategicPartnershipsSection from '../components/StrategicPartnershipsSection';
import StakeholdersSection from '../components/StakeholdersSection';
import FutureCollaborationSection from '../components/FutureCollaborationSection';

export default function HomePage({ onRequestTalent, onJoinNetwork, onSelectRole }) {
  return (
    <main>
      {/* Hero Section */}
      <Hero 
        onRequestTalent={onRequestTalent} 
        onJoinNetwork={onJoinNetwork} 
      />

      {/* The Green Energy Landscape */}
      <GreenEnergyLandscape />

      {/* What We Do: Core Solutions */}
      <ServicesGrid 
        onRequestTalent={onRequestTalent} 
      />

      {/* Our Approach & Compliance Pipeline */}
      <ProcessApproach 
        onRequestTalent={onRequestTalent} 
      />

      {/* Workforce Upskilling & Career Transition */}
      <WorkforceUpskillingSection 
        onRequestTalent={onRequestTalent} 
        onJoinNetwork={onJoinNetwork} 
      />

      {/* Key Areas of Talent (Filterable Matrix) */}
      <TalentMatrix 
        onSelectRole={onSelectRole} 
      />

      {/* Strategic Partnerships */}
      <StrategicPartnershipsSection 
        onRequestTalent={onRequestTalent} 
      />

      {/* Why Work With Us: 6 Pillars & Diversity */}
      <PillarsWhyUs />

      {/* Quality, Safety & Compliance */}
      <ComplianceSection 
        onRequestTalent={onRequestTalent} 
      />

      {/* For Employers & For Professionals */}
      <StakeholdersSection 
        onRequestTalent={onRequestTalent} 
        onJoinNetwork={onJoinNetwork} 
      />

      {/* Let's Build the Future Together */}
      <FutureCollaborationSection 
        onRequestTalent={onRequestTalent} 
        onJoinNetwork={onJoinNetwork} 
      />
    </main>
  );
}
