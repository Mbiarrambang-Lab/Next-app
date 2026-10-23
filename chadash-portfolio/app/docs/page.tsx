'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, Plus, Filter, MoreHorizontal, FileText, LayoutDashboard, 
  Settings, HelpCircle, LifeBuoy, Users, Layers, ChevronDown, 
  ChevronLeft, ChevronRight, Eye, ArrowLeft
} from 'lucide-react';

interface DocItem {
  id: string;
  title: string;
  createdDate: string;
  lastActivity: string;
  recipients: string[];
  status: 'Draft' | 'Completed' | 'Sent' | 'Expired';
}

const documentList: DocItem[] = [
  {
    id: 'doc_0',
    title: 'Beginners Guide to Automation',
    createdDate: 'Jan 17, 2026, 9:18 AM',
    lastActivity: 'Jan 25, 2026, 9:18 AM',
    recipients: ['MJ', 'CA', 'UB'],
    status: 'Sent'
  },
  {
    id: 'doc_1',
    title: 'Chadash PLC-X1 V1.1 Technical Specification',
    createdDate: 'Jan 16, 2026, 9:18 AM',
    lastActivity: 'Jan 24, 2026, 9:18 AM',
    recipients: ['MJ', 'CA'],
    status: 'Draft'
  },
  {
    id: 'doc_2',
    title: 'I/O Expansion Board Pinout Guide',
    createdDate: 'Jan 15, 2026, 9:18 AM',
    lastActivity: 'Jan 23, 2026, 9:18 AM',
    recipients: ['MJ'],
    status: 'Completed'
  },
  {
    id: 'doc_3',
    title: 'PicoW Prototyping Shell Assembly Guide',
    createdDate: 'Jan 14, 2026, 9:18 AM',
    lastActivity: 'Jan 23, 2026, 9:18 AM',
    recipients: ['CA'],
    status: 'Completed'
  },
  {
    id: 'doc_4',
    title: 'Full Cassava Processing Station Integration Manual',
    createdDate: 'Jan 13, 2026, 9:20 AM',
    lastActivity: 'Jan 22, 2026, 9:18 AM',
    recipients: ['MJ', 'UB'],
    status: 'Sent'
  },
  {
    id: 'doc_5',
    title: 'Hardware Procurement & Safety Policy',
    createdDate: 'Jan 12, 2026, 10:24 AM',
    lastActivity: 'Jan 21, 2026, 10:24 AM',
    recipients: ['CA'],
    status: 'Draft'
  },
  {
    id: 'doc_6',
    title: 'Firmware Flashing Protocol v1.1',
    createdDate: 'Jan 10, 2026, 11:18 AM',
    lastActivity: 'Jan 21, 2026, 10:22 AM',
    recipients: ['MJ', 'CA'],
    status: 'Completed'
  },
  {
    id: 'doc_7',
    title: 'Optocoupler & Relay Circuit Schematics',
    createdDate: 'Jan 10, 2026, 11:18 AM',
    lastActivity: 'Jan 21, 2026, 10:20 AM',
    recipients: ['UB'],
    status: 'Expired'
  }
];

export default function DocsHubPage() {
  const [activeTab, setActiveTab] = useState('All Documents');
  const [searchTerm, setSearchTerm] = useState('');

  const statusStyles = {
    Draft: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Completed: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    Sent: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    Expired: 'bg-rose-500/10 text-rose-400 border-rose-500/20'
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200 font-sans flex text-xs">
      
      {/* Left Sidebar */}
      <aside className="w-56 bg-[#161b22] border-r border-gray-800 p-4 flex flex-col justify-between flex-shrink-0">
        <div className="space-y-6">
          
          {/* Logo Brand Header */}
          <div className="flex items-center justify-between px-2 pt-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-black text-xs">
                C
              </div>
              <span className="font-extrabold text-white text-sm tracking-tight">Chadash Docs</span>
            </div>
            <Link href="/" className="text-gray-400 hover:text-amber-400">
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>

          {/* Action Button */}
          <button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-extrabold py-2.5 px-3 rounded-xl flex items-center justify-center gap-2 transition-colors uppercase tracking-wide">
            <Plus className="w-4 h-4" /> Create New
          </button>

          {/* Search & Main Nav */}
          <div className="space-y-4">
            <div className="relative px-2">
              <Search className="w-3.5 h-3.5 text-gray-500 absolute left-4 top-2.5" />
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#0d1117] border border-gray-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-bold text-gray-500 uppercase px-2 tracking-wider">Main Menu</span>
              <nav className="space-y-0.5">
                <Link href="#" className="flex items-center gap-2.5 px-2.5 py-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800/50">
                  <LayoutDashboard className="w-4 h-4 text-gray-400" /> Dashboard
                </Link>
                <Link href="#" className="flex items-center gap-2.5 px-2.5 py-2 text-amber-400 bg-amber-950/30 font-semibold rounded-lg border border-amber-500/20">
                  <FileText className="w-4 h-4 text-amber-500" /> My Documents
                </Link>
                <Link href="#" className="flex items-center gap-2.5 px-2.5 py-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800/50">
                  <Layers className="w-4 h-4 text-gray-400" /> Templates
                </Link>
                <Link href="#" className="flex items-center gap-2.5 px-2.5 py-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800/50">
                  <Users className="w-4 h-4 text-gray-400" /> Team Workspace
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Sidebar Settings */}
        <div className="space-y-2 border-t border-gray-800 pt-4">
          <Link href="#" className="flex items-center gap-2.5 px-2.5 py-2 text-gray-400 hover:text-white rounded-lg">
            <HelpCircle className="w-4 h-4" /> Help & Manuals
          </Link>
          <Link href="#" className="flex items-center gap-2.5 px-2.5 py-2 text-gray-400 hover:text-white rounded-lg">
            <Settings className="w-4 h-4" /> Settings
          </Link>
        </div>
      </aside>

      {/* Main Content View */}
      <main className="flex-1 flex flex-col bg-[#0d1117] overflow-x-auto">
        
        {/* Top Header Controls */}
        <header className="border-b border-gray-800 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-xl font-extrabold text-white">My Documents</h1>
          <div className="flex items-center gap-3">
            <Link href="/shop" className="bg-[#161b22] border border-gray-800 hover:border-amber-500 text-gray-300 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors">
              Hardware Shop
            </Link>
            <Link href="/checkout" className="bg-amber-500 hover:bg-amber-600 text-black font-extrabold px-4 py-2 rounded-xl text-xs uppercase tracking-wide transition-colors">
              Checkout Basket
            </Link>
          </div>
        </header>

        <div className="p-6 space-y-6 flex-1">
          
          {/* Navigation Filter Tabs */}
          <div className="flex items-center gap-2 border-b border-gray-800 pb-3 overflow-x-auto text-xs">
            {['All Documents', 'Draft', 'For Approval', 'Sent', 'Completed'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap font-medium ${
                  activeTab === tab
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-[#161b22]/90 border border-gray-800 rounded-xl p-3">
            <div className="flex items-center gap-3 text-xs text-gray-400">
              <span className="font-semibold text-gray-300">Sort By:</span>
              <button className="bg-[#0d1117] border border-gray-800 px-3 py-1 rounded-lg text-white flex items-center gap-1.5">
                Last Updated Des <ChevronDown className="w-3 h-3" />
              </button>
              <button className="bg-[#0d1117] border border-gray-800 px-3 py-1 rounded-lg text-white flex items-center gap-1.5">
                Name <ChevronDown className="w-3 h-3" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button className="bg-[#0d1117] border border-gray-800 px-3 py-1 rounded-lg text-gray-300 flex items-center gap-1.5 text-xs">
                <Filter className="w-3 h-3 text-amber-500" /> More Filters
              </button>
            </div>
          </div>

          {/* Document Table */}
          <div className="bg-[#161b22]/95 border border-gray-800 rounded-2xl overflow-hidden shadow-xl">
            <table className="w-full text-left text-xs text-gray-300">
              <thead className="bg-[#0d1117] border-b border-gray-800 text-gray-400 font-semibold uppercase text-[10px]">
                <tr>
                  <th className="p-4 w-10">
                    <input type="checkbox" className="rounded border-gray-800 bg-[#0d1117]" />
                  </th>
                  <th className="py-4 px-2">Document Name</th>
                  <th className="py-4 px-4">Last Activity</th>
                  <th className="py-4 px-4">Recipients</th>
                  <th className="py-4 px-4">Status</th>
                  <th className="py-4 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/80">
                {documentList.map((doc) => (
                  <tr key={doc.id} className="hover:bg-gray-800/30 transition-colors">
                    <td className="p-4">
                      <input type="checkbox" className="rounded border-gray-800 bg-[#0d1117]" />
                    </td>
                    <td className="py-4 px-2">
                      <div className="flex items-start gap-3">
                        <FileText className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="font-bold text-white block">{doc.title}</span>
                          <span className="text-[10px] text-gray-500">Created: {doc.createdDate}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-gray-400 text-[11px] whitespace-nowrap">
                      {doc.lastActivity}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center -space-x-1.5">
                        {doc.recipients.map((rec, i) => (
                          <div 
                            key={i} 
                            className="w-6 h-6 rounded-full bg-gray-800 border border-gray-700 text-[9px] font-bold text-amber-400 flex items-center justify-center uppercase shadow"
                          >
                            {rec}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-2.5 py-1 rounded-full border text-[10px] font-semibold inline-block ${statusStyles[doc.status]}`}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="text-xs bg-[#0d1117] border border-gray-800 hover:border-amber-500/50 text-gray-300 px-3 py-1 rounded-lg flex items-center gap-1 transition-colors">
                          <Eye className="w-3 h-3 text-amber-500" /> View
                        </button>
                        <button className="text-gray-500 hover:text-gray-300 p-1">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Pagination */}
          <div className="flex items-center justify-between text-xs text-gray-400 pt-2">
            <span>Showing 7 Documents</span>
            <div className="flex items-center gap-2">
              <button className="p-1 border border-gray-800 rounded-lg hover:border-amber-500 text-gray-300">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 font-semibold text-white">Page 1 of 1</span>
              <button className="p-1 border border-gray-800 rounded-lg hover:border-amber-500 text-gray-300">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}