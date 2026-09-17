import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
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
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-gestss-green-700 selection:text-white relative flex flex-col justify-between">
        
        {/* Global Responsive Navigation */}
        <Navbar 
          onRequestTalent={() => handleOpenTalentModal()} 
          onJoinNetwork={handleOpenNetworkModal} 
        />

        {/* Multi-Page Routes */}
        <div className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onRequestTalent={() => handleOpenTalentModal()} 
                  onJoinNetwork={handleOpenNetworkModal} 
                  onSelectRole={(role) => handleOpenTalentModal(role)} 
                />
              } 
            />
            <Route 
              path="/about" 
              element={
                <AboutPage 
                  onRequestTalent={() => handleOpenTalentModal()} 
                  onJoinNetwork={handleOpenNetworkModal} 
                />
              } 
            />
            <Route 
              path="/contact" 
              element={
                <ContactPage 
                  onRequestTalent={() => handleOpenTalentModal()} 
                  onJoinNetwork={handleOpenNetworkModal} 
                />
              } 
            />
            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Global Brand Footer */}
        <Footer 
          onRequestTalent={() => handleOpenTalentModal()} 
          onJoinNetwork={handleOpenNetworkModal} 
        />

        {/* Global Interactive Modals */}
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
    </BrowserRouter>
  );
}
