import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AdminAuthProvider } from './context/AdminAuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminProtectedRoute from './components/admin/AdminProtectedRoute';
import TalentRequestModal from './components/TalentRequestModal';
import CareerApplyModal from './components/CareerApplyModal';

function MainLayout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

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
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-gestss-green-700 selection:text-white relative flex flex-col justify-between">
      {/* Global Public Navigation (hidden on admin pages) */}
      {!isAdminRoute && (
        <Navbar 
          onRequestTalent={() => handleOpenTalentModal()} 
          onJoinNetwork={handleOpenNetworkModal} 
        />
      )}

      {/* Multi-Page Routes */}
      <div className="flex-grow">
        <Routes>
          {/* Public Pages */}
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

          {/* Admin Routes */}
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <AdminProtectedRoute>
                <AdminDashboardPage />
              </AdminProtectedRoute>
            } 
          />

          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {/* Global Brand Footer (hidden on admin pages) */}
      {!isAdminRoute && (
        <Footer 
          onRequestTalent={() => handleOpenTalentModal()} 
          onJoinNetwork={handleOpenNetworkModal} 
        />
      )}

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
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AdminAuthProvider>
        <ScrollToTop />
        <MainLayout />
      </AdminAuthProvider>
    </BrowserRouter>
  );
}
