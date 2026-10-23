'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, BookOpen, Layers, Terminal, Cpu, FileText, 
  ExternalLink, ChevronRight, ChevronDown, CheckCircle, ArrowLeft 
} from 'lucide-react';

interface SubSection {
  id: string;
  title: string;
}

interface NavGroup {
  groupTitle: string;
  items: {
    title: string;
    id: string;
    subsections?: SubSection[];
  }[];
}

const docsNavigation: NavGroup[] = [
  {
    groupTitle: 'Getting Started',
    items: [
      { 
        title: 'Introduction', 
        id: 'intro',
        subsections: [
          { id: 'overview', title: 'System Overview' },
          { id: 'architecture', title: 'Hardware Architecture' },
          { id: 'quickstart', title: 'Quick Start Guide' }
        ]
      },
      { 
        title: 'PLC-X1 Setup', 
        id: 'plc-setup',
        subsections: [
          { id: 'wiring', title: 'Wiring & Power Input' },
          { id: 'firmware', title: 'Firmware Flashing' }
        ]
      }
    ]
  },
  {
    groupTitle: 'Core Modules',
    items: [
      { 
        title: 'I/O Expansion Cards', 
        id: 'expansion-cards',
        subsections: [
          { id: 'bus-protocol', title: 'Bus Protocol Specs' },
          { id: 'relays', title: 'Relay & Sensor Triggering' }
        ]
      },
      { 
        title: 'PicoW Prototyping Shell', 
        id: 'picow-shell',
        subsections: [
          { id: 'pinout', title: 'GPIO Pinout Map' },
          { id: 'enclosure', title: 'Snap-Fit Enclosure Assembly' }
        ]
      }
    ]
  },
  {
    groupTitle: 'Industrial Systems',
    items: [
      { 
        title: 'Cassava Processing Station', 
        id: 'cassava-station',
        subsections: [
          { id: 'motor-control', title: 'Motor & Speed Controllers' },
          { id: 'safety', title: 'Safety Cut-Off Relays' }
        ]
      }
    ]
  }
];

export default function DocsHubPage() {
  const [activeTab, setActiveTab] = useState('intro');
  const [activeSub, setActiveSub] = useState('overview');
  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>({
    intro: true,
    'plc-setup': false,
    'expansion-cards': false,
    'picow-shell': false
  });

  const toggleGroup = (id: string) => {
    setExpandedGroups(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col">
      
      {/* Top Navigation Bar */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50 px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link 
              href="/" 
              className="text-xs text-slate-400 hover:text-amber-400 border border-slate-800 bg-slate-900 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
            </Link>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Chadash Docs <span className="text-xs text-amber-500 font-mono">v1.1</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/shop" className="text-xs text-slate-400 hover:text-white transition-colors">Hardware Shop</Link>
            <Link href="/checkout" className="text-xs text-amber-400 border border-amber-500/30 bg-amber-950/20 px-3 py-1.5 rounded-lg hover:bg-amber-900/30 transition-colors">Checkout</Link>
          </div>
        </div>
      </header>

      {/* Main Container - 3 Column Layout */}
      <div className="max-w-7xl w-full mx-auto px-6 flex-1 flex">
        
        {/* LEFT SIDEBAR: Main Navigation & Subsections */}
        <aside className="w-64 flex-shrink-0 border-r border-slate-800 py-8 pr-6 space-y-6 hidden md:block sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
          
          {/* Quick Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
            <input 
              type="text" 
              placeholder="Quick Search (Ctrl+K)..." 
              className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
          </div>

          {/* Navigation Links Grouped */}
          <nav className="space-y-6">
            {docsNavigation.map((group, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-2">
                  {group.groupTitle}
                </h4>

                <div className="space-y-1">
                  {group.items.map((item) => {
                    const isActive = activeTab === item.id;
                    const isExpanded = expandedGroups[item.id];

                    return (
                      <div key={item.id} className="space-y-1">
                        <button
                          onClick={() => {
                            setActiveTab(item.id);
                            toggleGroup(item.id);
                          }}
                          className={`w-full flex items-center justify-between text-xs px-2.5 py-1.5 rounded-md transition-colors ${
                            isActive 
                              ? 'bg-amber-500/10 text-amber-400 font-semibold' 
                              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <BookOpen className="w-3.5 h-3.5" />
                            {item.title}
                          </span>
                          {item.subsections && (
                            isExpanded ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />
                          )}
                        </button>

                        {/* Nested Subsections */}
                        {item.subsections && (isExpanded || isActive) && (
                          <div className="ml-4 pl-3 border-l border-slate-800 space-y-1 my-1">
                            {item.subsections.map((sub) => {
                              const isSubActive = activeSub === sub.id;
                              return (
                                <button
                                  key={sub.id}
                                  onClick={() => setActiveSub(sub.id)}
                                  className={`block w-full text-left text-[11px] py-1 transition-colors ${
                                    isSubActive 
                                      ? 'text-amber-400 font-medium' 
                                      : 'text-slate-500 hover:text-slate-300'
                                  }`}
                                >
                                  {sub.title}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* CENTER COLUMN: Main Article Documentation View */}
        <main className="flex-1 min-w-0 py-8 px-6 lg:px-12 space-y-8">
          
          {/* Breadcrumb Header */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span>Documentation</span>
              <ChevronRight className="w-3 h-3" />
              <span>Getting Started</span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-amber-400 font-medium">PLC-X1 V1.1 System</span>
            </div>

            <h1 className="text-3xl font-extrabold text-white tracking-tight">
              Chadash PLC-X1 Hardware Reference
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
              Comprehensive hardware documentation, pinout maps, relay terminal configuration, and safe operating guidelines for the Chadash PLC-X1 controller.
            </p>
          </div>

          {/* Specs Table Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight">Hardware Bus Specs</h3>
            
            <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/50">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-900 border-b border-slate-800 text-slate-400 font-semibold uppercase text-[10px]">
                  <tr>
                    <th className="px-4 py-3">Parameter</th>
                    <th className="px-4 py-3">Specification</th>
                    <th className="px-4 py-3">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr>
                    <td className="px-4 py-2.5 font-mono text-amber-400">Power Input</td>
                    <td className="px-4 py-2.5">12V–24V DC</td>
                    <td className="px-4 py-2.5 text-slate-500">Optocoupler surge protection built-in</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-mono text-amber-400">Core Controller</td>
                    <td className="px-4 py-2.5">ESP32-WROOM-32U</td>
                    <td className="px-4 py-2.5 text-slate-500">Wi-Fi & Bluetooth LE dual radio antenna clearance</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2.5 font-mono text-amber-400">Relay Channels</td>
                    <td className="px-4 py-2.5">4-Channel High Voltage</td>
                    <td className="px-4 py-2.5 text-slate-500">Rated up to 250V AC / 10A per channel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Guide Content */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h3 className="text-lg font-bold text-white tracking-tight">System Wiring & Quick Installation</h3>
            <p className="text-slate-400 text-xs leading-relaxed">
              Connect supply power to the primary terminal block on the lower edge. Ensure grounding cables are tightly secured to prevent electromagnetic interference during relay switching.
            </p>

            {/* Code / Command Block */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 font-mono text-xs text-slate-200 space-y-2">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2 text-[10px] text-slate-500">
                <span>Terminal / Firmware Flash Command</span>
                <span>Bash</span>
              </div>
              <p className="text-emerald-400"># Flash default firmware to Chadash PLC-X1 core</p>
              <p className="text-amber-300">esptool.py --chip esp32 --port /dev/ttyUSB0 write_flash -z 0x1000 firmware_v1.1.bin</p>
            </div>
          </div>

        </main>

        {/* RIGHT SIDEBAR: On This Page Table of Contents */}
        <aside className="w-56 flex-shrink-0 py-8 pl-6 border-l border-slate-800 hidden lg:block sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto">
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              On This Page
            </h4>

            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#overview" className="hover:text-amber-400 transition-colors block">System Overview</a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-amber-400 transition-colors block">Hardware Bus Specs</a>
              </li>
              <li>
                <a href="#wiring" className="hover:text-amber-400 transition-colors block">System Wiring & Installation</a>
              </li>
              <li>
                <a href="#firmware" className="hover:text-amber-400 transition-colors block">Firmware Flashing</a>
              </li>
            </ul>

            <div className="pt-6 border-t border-slate-800 space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                External Links
              </h4>
              <ul className="space-y-2 text-xs text-slate-400">
                <li>
                  <a href="https://github.com/Mbiarrambang-Lab/Next-app" target="_blank" rel="noreferrer" className="hover:text-amber-400 flex items-center gap-1.5 transition-colors">
                    GitHub Repository <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <Link href="/shop" className="hover:text-amber-400 flex items-center gap-1.5 transition-colors">
                    Order PLC Hardware <ExternalLink className="w-3 h-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside>

      </div>
    </div>
  );
}