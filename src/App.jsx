import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutVision from './components/AboutVision';
import ServicesGrid from './components/ServicesGrid';
import ProcessApproach from './components/ProcessApproach';
import UpskillingSection from './components/UpskillingSection';
import TalentMatrix from './components/TalentMatrix';
import DualPortals from './components/DualPortals';
import PillarsWhyUs from './components/PillarsWhyUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TalentRequestModal from './components/TalentRequestModal';
import CareerApplyModal from './components/CareerApplyModal';

export default function App() {
  const [talentModalOpen, setTalentModalOpen] = useState(false);
  const [networkModalOpen, setNetworkModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const handleOpenTalentModal = (role = '') => {
    setSelectedRole(role);
    setTalentModalOpen(true);
  };

  const handleOpenNetworkModal = () => {
    setNetworkModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-gestss-green-700 selection:text-white relative">
      {/* Navigation */}
      <Navbar 
        onRequestTalent={() => handleOpenTalentModal()} 
        onJoinNetwork={handleOpenNetworkModal} 
      />

      {/* Hero Section */}
      <Hero 
        onRequestTalent={() => handleOpenTalentModal()} 
        onJoinNetwork={handleOpenNetworkModal} 
      />

      {/* About Us, Purpose, Vision, Mission */}
      <AboutVision 
        onRequestTalent={() => handleOpenTalentModal()} 
      />

      {/* What We Do: Core Solutions */}
      <ServicesGrid 
        onRequestTalent={() => handleOpenTalentModal()} 
      />

      {/* Our Approach & Compliance Pipeline */}
      <ProcessApproach 
        onRequestTalent={() => handleOpenTalentModal()} 
      />

      {/* Workforce Upskilling & Partnerships */}
      <UpskillingSection 
        onRequestTalent={() => handleOpenTalentModal()} 
        onJoinNetwork={handleOpenNetworkModal} 
      />

      {/* Key Areas of Talent (Filterable Matrix) */}
      <TalentMatrix 
        onSelectRole={(role) => handleOpenTalentModal(role)} 
      />

      {/* Portals: For Employers & For Professionals */}
      <DualPortals 
        onRequestTalent={() => handleOpenTalentModal()} 
        onJoinNetwork={handleOpenNetworkModal} 
      />

      {/* Why Work With Us: 6 Pillars & Diversity */}
      <PillarsWhyUs />

      {/* Contact Hub, MSME Desk & FAQs */}
      <ContactSection 
        onRequestTalent={() => handleOpenTalentModal()} 
        onJoinNetwork={handleOpenNetworkModal} 
      />

      {/* Global Brand Footer */}
      <Footer 
        onRequestTalent={() => handleOpenTalentModal()} 
        onJoinNetwork={handleOpenNetworkModal} 
      />

      {/* Interactive Modals */}
      <TalentRequestModal 
        isOpen={talentModalOpen} 
        onClose={() => setTalentModalOpen(false)} 
        initialRole={selectedRole} 
      />

      <CareerApplyModal 
        isOpen={networkModalOpen} 
        onClose={() => setNetworkModalOpen(false)} 
      />
    </div>
  );
}
