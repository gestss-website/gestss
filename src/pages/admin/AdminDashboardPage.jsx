import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAdminAuth } from '@/context/AdminAuthContext';
import { db, isFirebaseConfigured, updateSubmissionStatus, deleteSubmission } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { 
  Users, 
  Briefcase, 
  MessageSquare, 
  Search, 
  Download, 
  RefreshCw, 
  Trash2, 
  ExternalLink, 
  LogOut, 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  X, 
  ChevronDown, 
  Building2, 
  Mail, 
  Phone, 
  Calendar, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight,
  Filter,
  FileSpreadsheet
} from 'lucide-react';

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const { adminUser, logout } = useAdminAuth();

  // Active Tab: 'talent_requests' | 'talent_applications' | 'inquiries'
  const [activeTab, setActiveTab] = useState('talent_requests');
  
  // Data State
  const [talentRequests, setTalentRequests] = useState([]);
  const [talentApplications, setTalentApplications] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters & Search
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Modal States
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteConfirmItem, setDeleteConfirmItem] = useState(null);
  const [adminNoteInput, setAdminNoteInput] = useState('');
  const [savingNote, setSavingNote] = useState(false);

  // Realtime listeners for all 3 collections
  useEffect(() => {
    if (!isFirebaseConfigured() || !db) {
      setLoading(false);
      return;
    }

    setLoading(true);

    // 1. Talent Requests
    const q1 = query(collection(db, 'talent_requests'), orderBy('createdAt', 'desc'));
    const unsub1 = onSnapshot(q1, (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTalentRequests(items);
      setLoading(false);
    }, (error) => {
      console.error('Error fetching talent_requests:', error);
      setLoading(false);
    });

    // 2. Talent Applications
    const q2 = query(collection(db, 'talent_applications'), orderBy('createdAt', 'desc'));
    const unsub2 = onSnapshot(q2, (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTalentApplications(items);
    }, (error) => {
      console.error('Error fetching talent_applications:', error);
    });

    // 3. Inquiries
    const q3 = query(collection(db, 'inquiries'), orderBy('createdAt', 'desc'));
    const unsub3 = onSnapshot(q3, (snapshot) => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setInquiries(items);
    }, (error) => {
      console.error('Error fetching inquiries:', error);
    });

    return () => {
      unsub1();
      unsub2();
      unsub3();
    };
  }, []);

  // Update selected item note
  useEffect(() => {
    if (selectedItem) {
      setAdminNoteInput(selectedItem.adminNote || '');
    }
  }, [selectedItem]);

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login', { replace: true });
  };

  // Status Updater
  const handleStatusChange = async (collectionName, docId, newStatus) => {
    try {
      await updateSubmissionStatus(collectionName, docId, newStatus);
      if (selectedItem && selectedItem.id === docId) {
        setSelectedItem(prev => ({ ...prev, status: newStatus }));
      }
    } catch (err) {
      console.error('Failed to update status:', err);
      alert('Error updating status. Check permissions.');
    }
  };

  // Note Saver
  const handleSaveNote = async () => {
    if (!selectedItem) return;
    setSavingNote(true);
    try {
      await updateSubmissionStatus(activeTab, selectedItem.id, selectedItem.status || 'new', adminNoteInput);
      setSelectedItem(prev => ({ ...prev, adminNote: adminNoteInput }));
    } catch (err) {
      console.error('Failed to save note:', err);
      alert('Error saving note.');
    } finally {
      setSavingNote(false);
    }
  };

  // Delete Handler
  const handleDelete = async () => {
    if (!deleteConfirmItem) return;
    try {
      await deleteSubmission(activeTab, deleteConfirmItem.id);
      if (selectedItem && selectedItem.id === deleteConfirmItem.id) {
        setSelectedItem(null);
      }
      setDeleteConfirmItem(null);
    } catch (err) {
      console.error('Failed to delete:', err);
      alert('Error deleting submission.');
    }
  };

  // Get active dataset
  const getActiveDataset = () => {
    if (activeTab === 'talent_requests') return talentRequests;
    if (activeTab === 'talent_applications') return talentApplications;
    return inquiries;
  };

  // Filtered dataset
  const filteredData = getActiveDataset().filter(item => {
    // Status filter
    if (statusFilter !== 'all' && (item.status || 'new') !== statusFilter) {
      return false;
    }

    // Search filter
    if (!searchTerm.trim()) return true;
    const term = searchTerm.toLowerCase();
    const name = (item.contactPerson || item.fullName || item.name || '').toLowerCase();
    const email = (item.workEmail || item.email || '').toLowerCase();
    const phone = (item.phone || '').toLowerCase();
    const company = (item.companyName || '').toLowerCase();
    const role = (item.roleNeeded || item.disciplineInterest || item.subject || '').toLowerCase();
    const notes = (item.notes || item.message || '').toLowerCase();

    return (
      name.includes(term) ||
      email.includes(term) ||
      phone.includes(term) ||
      company.includes(term) ||
      role.includes(term) ||
      notes.includes(term)
    );
  });

  // CSV Export
  const exportToCSV = () => {
    const data = filteredData;
    if (data.length === 0) {
      alert('No data to export.');
      return;
    }

    let headers = [];
    let rows = [];

    if (activeTab === 'talent_requests') {
      headers = ['ID', 'Date', 'Status', 'Company', 'Contact Person', 'Email', 'Phone', 'Role Needed', 'Headcount', 'Deployment Model', 'Location', 'Timeline', 'Notes', 'Admin Note'];
      rows = data.map(item => [
        item.id,
        item.createdAtClient || (item.createdAt ? new Date(item.createdAt.seconds * 1000).toLocaleString() : ''),
        item.status || 'new',
        `"${(item.companyName || '').replace(/"/g, '""')}"`,
        `"${(item.contactPerson || '').replace(/"/g, '""')}"`,
        item.workEmail || '',
        item.phone || '',
        `"${(item.roleNeeded || '').replace(/"/g, '""')}"`,
        item.headcount || '',
        `"${(item.deploymentModel || '').replace(/"/g, '""')}"`,
        `"${(item.location || '').replace(/"/g, '""')}"`,
        `"${(item.timeline || '').replace(/"/g, '""')}"`,
        `"${(item.notes || '').replace(/"/g, '""')}"`,
        `"${(item.adminNote || '').replace(/"/g, '""')}"`
      ]);
    } else if (activeTab === 'talent_applications') {
      headers = ['ID', 'Date', 'Status', 'Full Name', 'Email', 'Phone', 'Current Role', 'Discipline Interest', 'Experience', 'Certifications', 'City/State', 'Notes', 'Admin Note'];
      rows = data.map(item => [
        item.id,
        item.createdAtClient || (item.createdAt ? new Date(item.createdAt.seconds * 1000).toLocaleString() : ''),
        item.status || 'new',
        `"${(item.fullName || '').replace(/"/g, '""')}"`,
        item.email || '',
        item.phone || '',
        `"${(item.currentRole || '').replace(/"/g, '""')}"`,
        `"${(item.disciplineInterest || '').replace(/"/g, '""')}"`,
        item.experienceYears || '',
        `"${(item.certifications || '').replace(/"/g, '""')}"`,
        `"${(item.cityState || '').replace(/"/g, '""')}"`,
        `"${(item.notes || '').replace(/"/g, '""')}"`,
        `"${(item.adminNote || '').replace(/"/g, '""')}"`
      ]);
    } else {
      headers = ['ID', 'Date', 'Status', 'Name', 'Email', 'Phone', 'Inquiry Category', 'Message', 'Admin Note'];
      rows = data.map(item => [
        item.id,
        item.createdAtClient || (item.createdAt ? new Date(item.createdAt.seconds * 1000).toLocaleString() : ''),
        item.status || 'new',
        `"${(item.name || '').replace(/"/g, '""')}"`,
        item.email || '',
        item.phone || '',
        `"${(item.subject || '').replace(/"/g, '""')}"`,
        `"${(item.message || '').replace(/"/g, '""')}"`,
        `"${(item.adminNote || '').replace(/"/g, '""')}"`
      ]);
    }

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `gestss_${activeTab}_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatTimestamp = (item) => {
    if (item.createdAtClient) {
      return new Date(item.createdAtClient).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
    }
    if (item.createdAt && item.createdAt.seconds) {
      return new Date(item.createdAt.seconds * 1000).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' });
    }
    return 'Recent';
  };

  const getStatusBadge = (status = 'new') => {
    switch (status) {
      case 'new':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">New</span>;
      case 'contacted':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 border border-blue-300">Contacted</span>;
      case 'in_review':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-300">In Review</span>;
      case 'closed':
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-300">Closed</span>;
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700">{status}</span>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Top Header Bar */}
      <header className="bg-slate-950/90 border-b border-slate-800 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & Portal Title */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 group" title="Return to Public Site">
              <div className="w-9 h-9 rounded-full bg-white p-0.5 flex items-center justify-center shadow-md">
                <img src="/LOGO.webp" alt="GESTSS" className="w-full h-full object-contain rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-white text-base tracking-tight">GESTSS</span>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-md">
                    Admin Portal
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 -mt-0.5">Central Workforce &amp; Response Hub</p>
              </div>
            </Link>
          </div>

          {/* User Email & Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-full px-3 py-1 text-xs text-slate-300">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-400">Logged in:</span>
              <span className="font-semibold text-white">{adminUser?.email}</span>
            </div>

            <Link
              to="/"
              target="_blank"
              className="hidden md:flex items-center gap-1 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <span>View Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-xs font-bold text-red-400 hover:text-white bg-red-500/10 hover:bg-red-500/80 border border-red-500/20 px-3.5 py-1.5 rounded-lg transition-all"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* KPI Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          
          {/* Card 1: Total Leads */}
          <div className="bg-slate-950/60 border border-slate-800/80 rounded-2xl p-4 sm:p-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Submissions</p>
              <h4 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {talentRequests.length + talentApplications.length + inquiries.length}
              </h4>
              <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Active Database Sync</span>
              </p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
          </div>

          {/* Card 2: Talent Requests */}
          <div 
            onClick={() => setActiveTab('talent_requests')}
            className={`cursor-pointer rounded-2xl p-4 sm:p-5 flex items-center justify-between transition-all ${
              activeTab === 'talent_requests' 
                ? 'bg-emerald-950/40 border-2 border-emerald-500/50 shadow-lg shadow-emerald-900/20' 
                : 'bg-slate-950/60 border border-slate-800/80 hover:border-slate-700'
            }`}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Talent Requests</p>
              <h4 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {talentRequests.length}
              </h4>
              <p className="text-[11px] text-slate-400 mt-1">Employer hiring leads</p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
          </div>

          {/* Card 3: Talent Network */}
          <div 
            onClick={() => setActiveTab('talent_applications')}
            className={`cursor-pointer rounded-2xl p-4 sm:p-5 flex items-center justify-between transition-all ${
              activeTab === 'talent_applications' 
                ? 'bg-blue-950/40 border-2 border-blue-500/50 shadow-lg shadow-blue-900/20' 
                : 'bg-slate-950/60 border border-slate-800/80 hover:border-slate-700'
            }`}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Talent Pool</p>
              <h4 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {talentApplications.length}
              </h4>
              <p className="text-[11px] text-slate-400 mt-1">Candidate applications</p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
          </div>

          {/* Card 4: Inquiries */}
          <div 
            onClick={() => setActiveTab('inquiries')}
            className={`cursor-pointer rounded-2xl p-4 sm:p-5 flex items-center justify-between transition-all ${
              activeTab === 'inquiries' 
                ? 'bg-amber-950/40 border-2 border-amber-500/50 shadow-lg shadow-amber-900/20' 
                : 'bg-slate-950/60 border border-slate-800/80 hover:border-slate-700'
            }`}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Instant Queries</p>
              <h4 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {inquiries.length}
              </h4>
              <p className="text-[11px] text-slate-400 mt-1">Contact page messages</p>
            </div>
            <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
          </div>

        </div>

        {/* Action / Toolbar Card */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-4 sm:p-6 shadow-xl space-y-4">
          
          {/* Top Tabs + Export Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
            
            {/* Tab Pill Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0">
              <button
                onClick={() => { setActiveTab('talent_requests'); setSelectedItem(null); }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
                  activeTab === 'talent_requests'
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Talent Requests ({talentRequests.length})</span>
              </button>

              <button
                onClick={() => { setActiveTab('talent_applications'); setSelectedItem(null); }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
                  activeTab === 'talent_applications'
                    ? 'bg-blue-500 text-slate-950 shadow-md shadow-blue-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>Talent Network ({talentApplications.length})</span>
              </button>

              <button
                onClick={() => { setActiveTab('inquiries'); setSelectedItem(null); }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
                  activeTab === 'inquiries'
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant Queries ({inquiries.length})</span>
              </button>
            </div>

            {/* Export & Utility Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={exportToCSV}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 transition-all shadow-sm"
                title="Download CSV for Excel"
              >
                <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                <span>Export CSV</span>
              </button>
            </div>

          </div>

          {/* Search Bar & Status Filter */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by name, email, company, phone, discipline..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-900/90 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-all"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Status Filter */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full sm:w-44 px-3 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs font-semibold text-slate-200 focus:outline-none focus:border-emerald-500"
              >
                <option value="all">All Statuses</option>
                <option value="new">New</option>
                <option value="contacted">Contacted</option>
                <option value="in_review">In Review</option>
                <option value="closed">Closed / Archived</option>
              </select>
            </div>

          </div>

          {/* Table / List View */}
          <div className="overflow-x-auto pt-2">
            {filteredData.length === 0 ? (
              <div className="text-center py-16 px-4 bg-slate-900/30 rounded-2xl border border-dashed border-slate-800">
                <div className="w-12 h-12 rounded-2xl bg-slate-800 text-slate-400 flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6" />
                </div>
                <h5 className="text-base font-bold text-white">No submissions found</h5>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                  {searchTerm 
                    ? 'No matching results for your query. Try clearing the search or filters.' 
                    : 'Submissions from website visitors will appear here automatically in real time.'}
                </p>
                {searchTerm && (
                  <button
                    onClick={() => { setSearchTerm(''); setStatusFilter('all'); }}
                    className="mt-4 px-4 py-1.5 text-xs font-bold rounded-lg bg-slate-800 hover:bg-slate-700 text-white"
                  >
                    Clear Search Filters
                  </button>
                )}
              </div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    <th className="py-3 px-3">Date</th>
                    <th className="py-3 px-3">Status</th>
                    {activeTab === 'talent_requests' && <th className="py-3 px-3">Company</th>}
                    <th className="py-3 px-3">Candidate / Contact</th>
                    <th className="py-3 px-3">
                      {activeTab === 'talent_requests' ? 'Role Needed' : activeTab === 'talent_applications' ? 'Discipline' : 'Category'}
                    </th>
                    <th className="py-3 px-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-sm">
                  {filteredData.map((item) => {
                    const primaryName = item.contactPerson || item.fullName || item.name || 'Unnamed';
                    const email = item.workEmail || item.email || '';
                    const phone = item.phone || '';
                    const role = item.roleNeeded || item.disciplineInterest || item.subject || 'General';

                    return (
                      <tr 
                        key={item.id}
                        className="hover:bg-slate-900/60 transition-colors group cursor-pointer"
                        onClick={() => setSelectedItem(item)}
                      >
                        {/* Date */}
                        <td className="py-3 px-3 text-xs text-slate-400 whitespace-nowrap">
                          {formatTimestamp(item)}
                        </td>

                        {/* Status */}
                        <td className="py-3 px-3 whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                          <select
                            value={item.status || 'new'}
                            onChange={(e) => handleStatusChange(activeTab, item.id, e.target.value)}
                            className="text-xs font-semibold rounded-lg bg-slate-900 border border-slate-700 text-slate-200 px-2 py-1 focus:outline-none focus:border-emerald-500 cursor-pointer"
                          >
                            <option value="new">🟢 New</option>
                            <option value="contacted">🔵 Contacted</option>
                            <option value="in_review">🟡 In Review</option>
                            <option value="closed">⚪ Closed</option>
                          </select>
                        </td>

                        {/* Company (if talent_requests) */}
                        {activeTab === 'talent_requests' && (
                          <td className="py-3 px-3 font-semibold text-white whitespace-nowrap">
                            {item.companyName || '—'}
                          </td>
                        )}

                        {/* Contact details */}
                        <td className="py-3 px-3">
                          <div className="font-bold text-white leading-tight">{primaryName}</div>
                          <div className="text-xs text-slate-400 mt-0.5 flex flex-wrap gap-x-3 gap-y-0.5">
                            {email && (
                              <a 
                                href={`mailto:${email}`} 
                                onClick={(e) => e.stopPropagation()} 
                                className="hover:text-emerald-400 transition-colors"
                              >
                                {email}
                              </a>
                            )}
                            {phone && (
                              <a 
                                href={`tel:${phone}`} 
                                onClick={(e) => e.stopPropagation()} 
                                className="hover:text-emerald-400 transition-colors"
                              >
                                {phone}
                              </a>
                            )}
                          </div>
                        </td>

                        {/* Role / Inquiry Scope */}
                        <td className="py-3 px-3 text-xs font-medium text-slate-300 max-w-xs truncate">
                          {role}
                        </td>

                        {/* Actions */}
                        <td className="py-3 px-3 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => setSelectedItem(item)}
                              className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-slate-200 transition-all"
                            >
                              Details
                            </button>
                            <button
                              onClick={() => setDeleteConfirmItem(item)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                              title="Delete entry"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>

        </div>

      </main>

      {/* ===================================================================== */}
      {/* FULL DETAILS MODAL                                                    */}
      {/* ===================================================================== */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-950 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="p-5 sm:p-6 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {activeTab === 'talent_requests' ? 'Talent Request Dossier' : activeTab === 'talent_applications' ? 'Candidate Profile' : 'Inquiry Message'}
                  </span>
                  {getStatusBadge(selectedItem.status)}
                </div>
                <h3 className="text-xl font-bold font-display text-white mt-1">
                  {selectedItem.contactPerson || selectedItem.fullName || selectedItem.name || 'Submission Details'}
                </h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-sm">
              
              {/* Quick Contact Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-900/80 border border-slate-800">
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Email:</span>
                  <a 
                    href={`mailto:${selectedItem.workEmail || selectedItem.email}`}
                    className="text-emerald-400 font-medium hover:underline break-all"
                  >
                    {selectedItem.workEmail || selectedItem.email || 'N/A'}
                  </a>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Phone:</span>
                  <a 
                    href={`tel:${selectedItem.phone}`}
                    className="text-white font-medium hover:underline"
                  >
                    {selectedItem.phone || 'N/A'}
                  </a>
                </div>
                {selectedItem.companyName && (
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold">Company / Organization:</span>
                    <span className="text-white font-medium">{selectedItem.companyName}</span>
                  </div>
                )}
                <div>
                  <span className="text-xs text-slate-400 block font-semibold">Received On:</span>
                  <span className="text-slate-300 font-medium">{formatTimestamp(selectedItem)}</span>
                </div>
              </div>

              {/* Form Specific Details */}
              {activeTab === 'talent_requests' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-400 block">Role Needed:</span>
                      <span className="font-bold text-white text-sm">{selectedItem.roleNeeded}</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-400 block">Headcount:</span>
                      <span className="font-bold text-white text-sm">{selectedItem.headcount || '1'}</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-400 block">Deployment Model:</span>
                      <span className="font-bold text-white text-sm">{selectedItem.deploymentModel || 'N/A'}</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-400 block">Location / Site:</span>
                      <span className="font-bold text-white text-sm">{selectedItem.location || 'N/A'}</span>
                    </div>
                  </div>
                  {selectedItem.notes && (
                    <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-400 block font-semibold mb-1">Project Requirements &amp; Notes:</span>
                      <p className="text-slate-200 whitespace-pre-wrap leading-relaxed">{selectedItem.notes}</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'talent_applications' && (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-400 block">Current Role:</span>
                      <span className="font-bold text-white text-sm">{selectedItem.currentRole || 'N/A'}</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-400 block">Discipline Interest:</span>
                      <span className="font-bold text-white text-sm">{selectedItem.disciplineInterest}</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-400 block">Experience:</span>
                      <span className="font-bold text-white text-sm">{selectedItem.experienceYears || 'N/A'}</span>
                    </div>
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-400 block">Location:</span>
                      <span className="font-bold text-white text-sm">{selectedItem.cityState || 'N/A'}</span>
                    </div>
                  </div>
                  {selectedItem.certifications && (
                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-400 block font-semibold mb-1">Certifications &amp; Licenses:</span>
                      <p className="text-emerald-300 font-medium">{selectedItem.certifications}</p>
                    </div>
                  )}
                  {selectedItem.notes && (
                    <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                      <span className="text-xs text-slate-400 block font-semibold mb-1">Candidate Profile Summary:</span>
                      <p className="text-slate-200 whitespace-pre-wrap leading-relaxed">{selectedItem.notes}</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'inquiries' && (
                <div className="space-y-3">
                  <div className="p-3 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-400 block">Inquiry Category:</span>
                    <span className="font-bold text-white text-sm">{selectedItem.subject}</span>
                  </div>
                  <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                    <span className="text-xs text-slate-400 block font-semibold mb-1">Full Message:</span>
                    <p className="text-slate-200 whitespace-pre-wrap leading-relaxed">{selectedItem.message}</p>
                  </div>
                </div>
              )}

              {/* Admin Note Section */}
              <div className="p-4 bg-slate-900/90 rounded-2xl border border-slate-800 space-y-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  Internal Admin Notes
                </label>
                <textarea
                  rows={2}
                  value={adminNoteInput}
                  onChange={(e) => setAdminNoteInput(e.target.value)}
                  placeholder="Add private follow-up notes, candidate feedback, interview schedule..."
                  className="w-full p-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                ></textarea>
                <div className="flex justify-end">
                  <button
                    onClick={handleSaveNote}
                    disabled={savingNote}
                    className="px-4 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all disabled:opacity-50"
                  >
                    {savingNote ? 'Saving...' : 'Save Note'}
                  </button>
                </div>
              </div>

            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => { setDeleteConfirmItem(selectedItem); }}
                className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete Submission</span>
              </button>

              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ===================================================================== */}
      {/* DELETE CONFIRMATION MODAL                                             */}
      {/* ===================================================================== */}
      {deleteConfirmItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 max-w-sm w-full space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mx-auto">
              <Trash2 className="w-6 h-6" />
            </div>
            <div className="text-center">
              <h4 className="text-lg font-bold text-white">Delete this record?</h4>
              <p className="text-xs text-slate-400 mt-1">
                This action is permanent and cannot be undone from the database.
              </p>
            </div>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => setDeleteConfirmItem(null)}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-xs font-bold text-white transition-colors"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
