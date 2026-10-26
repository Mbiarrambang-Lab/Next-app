'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, FileText, BookOpen, Settings, Layers, Wrench,
  ArrowLeft, Cpu, Radio, Factory, CheckCircle, Eye, ChevronDown, ChevronRight 
} from 'lucide-react';
import { curriculumDocs } from '@/app/utils/docs';

export default function DocsHubPage() {
  const [activeTab, setActiveTab] = useState('All Modules');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [expandedSlugs, setExpandedSlugs] = useState<Record<string, boolean>>({});
  const [stationsOpen, setStationsOpen] = useState(true);

  const toggleExpand = (slug: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedSlugs(prev => ({ ...prev, [slug]: !prev[slug] }));
  };

  const selectedDoc = curriculumDocs.find(doc => doc.slug === selectedSlug);

  const filteredDocs = curriculumDocs.filter(doc => 
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const levelStyles = {
    Beginner: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    Intermediate: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Advanced: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
  };

  return (
    <div className="h-screen bg-[#0d1117] text-gray-200 font-sans flex overflow-hidden text-xs">
      
      {/* Left Curriculum Sidebar (Fixed & Non-Scrolling) */}
      <aside className="w-64 bg-[#161b22] border-r border-gray-800 p-4 flex flex-col justify-between flex-shrink-0 h-full hidden md:flex">
        <div className="space-y-6">
          <div className="flex items-center justify-between px-2 pt-1">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-black text-xs">C</div>
              <span className="font-extrabold text-white text-sm tracking-tight">Chadash Curriculum</span>
            </div>
          </div>

          <div className="relative px-2">
            <Search className="w-3.5 h-3.5 text-gray-500 absolute left-4 top-2.5" />
            <input 
              type="text" 
              placeholder="Search curriculum..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#0d1117] border border-gray-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-gray-500 uppercase px-2 tracking-wider">Core Modules</span>
              <nav className="space-y-0.5">
                <button onClick={() => { setSelectedSlug(null); setActiveTab('All Modules'); }} className={`w-full text-left flex items-center gap-2.5 px-2.5 py-2 rounded-lg border transition-colors cursor-pointer ${activeTab === 'All Modules' ? 'text-amber-400 bg-amber-950/30 font-semibold border-amber-500/20' : 'text-gray-400 border-transparent hover:text-white hover:bg-gray-800/50'}`}>
                  <BookOpen className="w-4 h-4 text-amber-500" /> All Guides & Docs
                </button>
                <button onClick={() => { setSelectedSlug(null); setActiveTab('Automation Basics'); }} className={`w-full text-left flex items-center gap-2.5 px-2.5 py-2 rounded-lg border transition-colors cursor-pointer ${activeTab === 'Automation Basics' ? 'text-amber-400 bg-amber-950/30 font-semibold border-amber-500/20' : 'text-gray-400 border-transparent hover:text-white hover:bg-gray-800/50'}`}>
                  <Cpu className="w-4 h-4 text-gray-400" /> Beginner's Automation
                </button>
                <button onClick={() => { setSelectedSlug(null); setActiveTab('Communication'); }} className={`w-full text-left flex items-center gap-2.5 px-2.5 py-2 rounded-lg border transition-colors cursor-pointer ${activeTab === 'Communication' ? 'text-amber-400 bg-amber-950/30 font-semibold border-amber-500/20' : 'text-gray-400 border-transparent hover:text-white hover:bg-gray-800/50'}`}>
                  <Radio className="w-4 h-4 text-gray-400" /> Comm Protocols
                </button>
                <button onClick={() => { setSelectedSlug(null); setActiveTab('Hardware & Specs'); }} className={`w-full text-left flex items-center gap-2.5 px-2.5 py-2 rounded-lg border transition-colors cursor-pointer ${activeTab === 'Hardware & Specs' ? 'text-amber-400 bg-amber-950/30 font-semibold border-amber-500/20' : 'text-gray-400 border-transparent hover:text-white hover:bg-gray-800/50'}`}>
                  <Wrench className="w-4 h-4 text-gray-400" /> Hardware & Specs
                </button>
              </nav>
            </div>

            {/* Stations Group with Expandable Sub-Tabs */}
            <div className="space-y-1 pt-2">
              <div className="flex items-center justify-between px-2">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Industrial Stations</span>
                <button onClick={() => setStationsOpen(!stationsOpen)} className="text-gray-400 hover:text-white cursor-pointer">
                  {stationsOpen ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                </button>
              </div>
              
              <nav className="space-y-0.5 pt-1">
                <button onClick={() => { setSelectedSlug(null); setActiveTab('Station'); }} className={`w-full text-left flex items-center gap-2.5 px-2.5 py-2 rounded-lg border transition-colors cursor-pointer ${activeTab === 'Station' ? 'text-amber-400 bg-amber-950/30 font-semibold border-amber-500/20' : 'text-gray-400 border-transparent hover:text-white hover:bg-gray-800/50'}`}>
                  <Factory className="w-4 h-4 text-amber-500" /> All Stations Overview
                </button>

                {stationsOpen && (
                  <div className="pl-6 space-y-1 border-l border-gray-800 ml-3 my-1">
                    {curriculumDocs
                      .filter(d => d.category === 'Station')
                      .map(stationDoc => (
                        <button
                          key={stationDoc.slug}
                          onClick={() => setSelectedSlug(stationDoc.slug)}
                          className={`w-full text-left px-2 py-1.5 rounded-md text-[11px] truncate transition-colors cursor-pointer ${selectedSlug === stationDoc.slug ? 'text-amber-400 font-semibold bg-amber-500/10' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/30'}`}
                        >
                          • {stationDoc.title}
                        </button>
                      ))}
                  </div>
                )}
              </nav>
            </div>
          </div>
        </div>

        <div className="space-y-2 border-t border-gray-800 pt-4">
          <Link href="/shop" className="flex items-center gap-2.5 px-2.5 py-2 text-gray-400 hover:text-white rounded-lg">
            <Layers className="w-4 h-4" /> Hardware Shop
          </Link>
          <Link href="/checkout" className="flex items-center gap-2.5 px-2.5 py-2 text-amber-400 hover:text-white rounded-lg">
            <Settings className="w-4 h-4" /> Checkout Basket
          </Link>
        </div>
      </aside>

      {/* Main Content Area (Scrollable Only) */}
      <main className="flex-1 flex flex-col bg-[#0d1117] h-full overflow-hidden">
        
        {/* Top Header (Fixed) */}
        <header className="border-b border-gray-800 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 flex-shrink-0 bg-[#0d1117]/90 backdrop-blur z-10">
          <div>
            <h1 className="text-xl font-extrabold text-white">Engineering Curriculum & Documentation</h1>
            <p className="text-gray-400 text-xs mt-1">Open-access manuals, automation guides, and industrial station workflows for learners and engineers.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/" className="items-center gap-1.5 text-gray-400 hover:text-amber-400">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <Link href="/shop" className="bg-[#161b22] border border-gray-800 hover:border-amber-500 text-gray-300 px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors">
              Hardware Shop
            </Link>
            <Link href="/checkout" className="bg-amber-500 hover:bg-amber-600 text-black font-extrabold px-4 py-2 rounded-xl text-xs uppercase tracking-wide transition-colors">
              View Checkout
            </Link>
          </div>
        </header>

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto p-6">
          {selectedDoc ? (
            /* ================= ACTIVE DOCUMENT VIEW ================= */
            <div className="p-2 md:p-4 space-y-8 max-w-4xl mx-auto w-full">
              <button 
                onClick={() => setSelectedSlug(null)}
                className="text-xs text-amber-400 hover:underline flex items-center gap-1.5 font-semibold bg-[#161b22] border border-gray-800 px-3.5 py-2 rounded-xl w-fit cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Curriculum Table
              </button>

              <div className="space-y-3 border-b border-gray-800 pb-6">
                <span className="text-[10px] bg-amber-950/40 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full font-mono uppercase tracking-wider">
                  {selectedDoc.category}
                </span>
                <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  {selectedDoc.title}
                </h1>
                <p className="text-gray-300 text-xs leading-relaxed max-w-2xl">
                  {selectedDoc.overview}
                </p>
              </div>

              {selectedDoc.youtubeEmbedId && (
                <div className="space-y-2 bg-[#161b22] border border-gray-800 rounded-2xl p-4 shadow-xl">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                    <BookOpen className="w-4 h-4" /> Video Walkthrough & Tutorial
                  </span>
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-gray-800">
                    <iframe 
                      src={`https://www.youtube-nocookie.com/embed/${selectedDoc.youtubeEmbedId}`}
                      title="Tutorial Video"
                      className="w-full h-full border-0"
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

              <div className="bg-[#161b22] border border-gray-800 rounded-2xl p-5 space-y-3 shadow-xl">
                <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-amber-500" /> Bill of Materials (BOM) Required
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedDoc.hardwareBOM.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-[#0d1117] border border-gray-800/80 p-2.5 rounded-xl text-gray-300">
                      <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6 pb-12">
                {selectedDoc.sections.map((sec, idx) => (
                  <div key={idx} className="space-y-3 bg-[#161b22]/70 border border-gray-800/80 rounded-2xl p-6 shadow-md">
                    <h3 className="text-sm font-bold text-white">{sec.title}</h3>
                    <p className="text-xs text-gray-300 leading-relaxed">{sec.content}</p>

                    {sec.codeSnippet && (
                      <div className="bg-[#0d1117] border border-gray-800 rounded-xl p-4 font-mono text-[11px] text-gray-200 overflow-x-auto space-y-1 mt-3">
                        <div className="flex justify-between items-center border-b border-gray-800 pb-2 text-[10px] text-gray-500">
                          <span>Source Implementation</span>
                          <span>C++ / Python</span>
                        </div>
                        <pre className="text-amber-300 pt-2 leading-relaxed"><code>{sec.codeSnippet}</code></pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* ================= TABLE LIST VIEW WITH EXPANDABLE SUBSECTIONS ================= */
            <div className="space-y-6 max-w-5xl mx-auto pb-12">
              <div className="flex items-center gap-2 border-b border-gray-800 pb-3 overflow-x-auto text-xs">
                {['All Modules', 'Automation Basics', 'Communication', 'Hardware & Specs', 'Station'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3.5 py-1.5 rounded-lg transition-colors whitespace-nowrap font-medium cursor-pointer ${
                      activeTab === tab
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {tab === 'Station' ? 'Industrial Stations' : tab}
                  </button>
                ))}
              </div>

              <div className="space-y-3">
                {filteredDocs
                  .filter(doc => activeTab === 'All Modules' || doc.category === activeTab)
                  .map((doc) => {
                    const isExpanded = expandedSlugs[doc.slug];
                    return (
                      <div key={doc.slug} className="bg-[#161b22]/95 border border-gray-800 rounded-2xl overflow-hidden shadow-xl transition-all">
                        
                        {/* Main Table Row Header */}
                        <div className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-gray-800/20 transition-colors">
                          <div className="flex items-start gap-3">
                            <FileText className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <span className="font-bold text-white block text-sm">{doc.title}</span>
                              <span className="text-[10px] text-gray-500">Updated: {doc.lastUpdated}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                            <span className="bg-[#0d1117] border border-gray-800 px-2.5 py-1 rounded-md text-gray-300 font-mono text-[10px]">
                              {doc.category === 'Station' ? 'Industrial Station' : doc.category}
                            </span>
                            <span className={`px-2.5 py-1 rounded-full border text-[10px] font-semibold ${levelStyles[doc.level]}`}>
                              {doc.level}
                            </span>

                            <div className="flex items-center gap-2">
                              {/* Expand Subsections Toggle Button */}
                              <button 
                                onClick={(e) => toggleExpand(doc.slug, e)}
                                className="text-xs bg-[#0d1117] border border-gray-800 hover:border-amber-500/50 text-gray-300 px-3 py-1.5 rounded-lg flex items-center gap-1 transition-colors cursor-pointer"
                              >
                                {isExpanded ? 'Hide Chapters' : 'Chapters'}
                                {isExpanded ? <ChevronDown className="w-3.5 h-3.5 text-amber-500" /> : <ChevronRight className="w-3.5 h-3.5 text-amber-500" />}
                              </button>

                              {/* Read Full Guide Button */}
                              <button 
                                onClick={() => setSelectedSlug(doc.slug)}
                                className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-black px-3.5 py-1.5 rounded-lg font-bold transition-colors cursor-pointer"
                              >
                                <Eye className="w-3.5 h-3.5" /> Read
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Expandable Subsections Accordion View */}
                        {isExpanded && (
                          <div className="bg-[#0d1117]/80 border-t border-gray-800 p-4 space-y-3 pl-11">
                            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-wider block">Included Chapters:</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {doc.subsections.map((sub) => (
                                <div key={sub.id} className="bg-[#161b22] border border-gray-800 p-3 rounded-xl space-y-1">
                                  <h4 className="text-xs font-bold text-white">{sub.title}</h4>
                                  <p className="text-[11px] text-gray-400 leading-relaxed">{sub.summary}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}