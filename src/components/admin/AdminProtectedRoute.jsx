import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { Loader2, ShieldAlert } from 'lucide-react';

export default function AdminProtectedRoute({ children }) {
  const { adminUser, loading, authError } = useAdminAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
          <div>
            <p className="text-white font-bold text-sm tracking-wide">Verifying Admin Privileges...</p>
            <p className="text-slate-400 text-xs mt-1">Connecting to secure GESTSS database</p>
          </div>
        </div>
      </div>
    );
  }

  if (!adminUser) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
