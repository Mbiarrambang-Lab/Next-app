'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Cpu, Terminal, ArrowUpRight, Shield, Clock, Radio, Wrench, ShoppingBag, CheckCircle, ExternalLink } from 'lucide-react';

const projectsList = [
  {
    id: "rtc-clock",
    title: "RTC Clock Arduino",
    description: "A standalone real-time clock node utilizing an Arduino microcontroller and a high-precision DS1307 hardware telemetry module.",
    status: "Active V1.2",
    icon: Clock,
    color: "text-amber-500",
    bom: ["Arduino UNO Core", "DS1307 RTC Module", "I2C 16x2 LCD Display Bus"],
    tools: ["Soldering Iron", "Multimeter", "Wire Strippers"],
    price: "12,500 XAF",
    shopAvailable: true
  },
  {
    id: "rfid-attendance",
    title: "RFID Based Attendance System",
    description: "Distributed access-control tracking station verifying user identity keys via SPI readers and streaming encrypted logs to Firebase cloud databases.",
    status: "Deployed Node",
    icon: Shield,
    color: "text-emerald-400",
    bom: ["MFRC522 RFID Module", "ESP8266 Wi-Fi Core", "Firebase Realtime DB Stream"],
    tools: ["Soldering Iron", "Crimping Tool", "Heat Shrink Gun"],
    price: "24,000 XAF",
    shopAvailable: true
  },
  {
    id: "radar-system",
    title: "Ultrasonic Radar System",
    description: "A localized sonic radar node executing real-time object tracking coordinates, visualized on a custom mapping telemetry dashboard.",
    status: "DIY Kit V1.0",
    icon: Radio,
    color: "text-blue-400",
    bom: ["HC-SR04 Ultrasonic Core", "SG90 Micro Servo Engine", "Processing IDE Canvas"],
    tools: ["3D Printer (Optional)", "Hot Glue Gun", "Screwdriver Set"],
    price: "18,500 XAF",
    shopAvailable: true
  }
];

export default function ProjectsDashboard() {
  const [activeTab, setActiveTab] = useState<'all' | 'shop'>('all');

  const filteredProjects = activeTab === 'all' 
    ? projectsList 
    : projectsList.filter(p => p.shopAvailable);

  return (
    <main className="min-h-screen bg-[#0d1117] bg-grid-pattern text-[#f0f6fc] font-mono">
      
      {/* Navigation Header */}
      <header className="border-b border-gray-800/60 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex justify-between items-center max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full bg-[#161b22] border border-gray-800 overflow-hidden p-1">
            <Image src="/logo.png" alt="Chadash Logo" fill className="object-contain" />
          </div>
          <span className="text-white font-bold text-xs tracking-wider">CHADASH // AUTOMATION</span>
        </div>
        <a href="/" className="text-xs text-amber-500 hover:underline">← RETURN_HOME</a>
      </header>

      <div className="max-w-5xl mx-auto px-6 pt-12 pb-20 space-y-8">
        
        {/* Title Node Context */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-l-2 border-amber-500 pl-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold text-white tracking-tight uppercase">/ Systems Deployment Bus</h1>
            <p className="text-xs text-gray-500">CHADASH_TELEMETRY_BUS // FIELD_SPECIFICATIONS_AND_HARDWARE_SHOP</p>
          </div>
          
          {/* Layout Tab Selectors */}
          <div className="flex bg-[#161b22] border border-gray-800 rounded p-1 text-xs">
            <button 
              onClick={() => setActiveTab('all')} 
              className={`px-3 py-1.5 rounded transition-all ${activeTab === 'all' ? 'bg-amber-600 text-white font-bold' : 'text-gray-400 hover:text-white'}`}>
              01 // ALL BUILDS
            </button>
            <button 
              onClick={() => setActiveTab('shop')} 
              className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${activeTab === 'shop' ? 'bg-amber-600 text-white font-bold' : 'text-gray-400 hover:text-white'}`}>
              <ShoppingBag className="w-3.5 h-3.5" /> 02 // HARDWARE SHOP
            </button>
          </div>
        </div>

        {/* Dense System Layout Grid Mapping */}
        <div className="grid md:grid-cols-3 gap-6 pt-4">
          {filteredProjects.map((project) => {
            const ProjectIcon = project.icon;
            return (
              <div key={project.id} className="bg-[#161b22]/40 border border-gray-800 rounded-xl p-5 flex flex-col justify-between hover:border-gray-700/80 transition-all relative overflow-hidden group">
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className={`p-2 rounded bg-[#0d1117] border border-gray-800 ${project.color}`}>
                      <ProjectIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] bg-gray-900 border border-gray-800 px-2 py-0.5 rounded text-gray-400">
                      {project.status}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-amber-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Hardware Core Matrix */}
                  <div className="bg-[#0d1117]/80 border border-gray-800 rounded p-3 text-[10px] space-y-2">
                    <div>
                      <span className="text-gray-500 text-[9px] block uppercase tracking-wider font-bold">🛠️ Node Hardware Core (BOM):</span>
                      {project.bom.map((item, idx) => (
                        <div key={idx} className="text-gray-300 pl-1">• {item}</div>
                      ))}
                    </div>

                    {/* Integrated Tools Specification Sub-Section */}
                    <div className="border-t border-gray-800/60 pt-2">
                      <span className="text-amber-600 text-[9px] block uppercase tracking-wider font-bold flex items-center gap-1">
                        <Wrench className="w-2.5 h-2.5" /> Bench Tools Needed:
                      </span>
                      <div className="flex flex-wrap gap-1 pt-1">
                        {project.tools.map((tool, idx) => (
                          <span key={idx} className="bg-gray-900 border border-gray-800/80 text-gray-400 text-[8px] px-1.5 py-0.5 rounded">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lower Commerce / Route Bus Bar */}
                <div className="pt-4 border-t border-gray-800/60 mt-4 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500 text-[10px]">KIT_VALUE:</span>
                    <span className="text-white font-mono font-bold bg-amber-950/40 border border-amber-500/20 px-2 py-0.5 rounded">
                      {project.price}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs pt-1">
                    <a href={`/projects/${project.id}`} className="text-gray-400 font-bold hover:text-white transition-colors flex items-center gap-1">
                      View Specs <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    
                    <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-3 py-1.5 rounded text-[10px] uppercase flex items-center gap-1 cursor-pointer transition-colors">
                      <ShoppingBag className="w-3 h-3" /> Buy Kit
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
