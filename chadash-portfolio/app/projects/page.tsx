'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Download, BookOpen, ChevronRight, Terminal, Cpu } from 'lucide-react';

interface SubSection {
  title: string;
  content: string;
  codeSnippet?: string;
}

interface CurriculumModule {
  id: string;
  phase: string;
  title: string;
  overview: string;
  protocolFocus: string;
  hardware: string[];
  subSections: SubSection[];
  status: 'Completed' | 'In Progress' | 'Upcoming';
}

const modules: CurriculumModule[] = [
  {
    id: '01',
    phase: 'PHASE 01',
    title: 'Foundations & Serial Communication',
    overview: 'Learn how to set up basic microcontroller wiring, manage inputs from physical buttons or keypads, and send data back and forth through serial connections.',
    protocolFocus: 'UART Serial Communication & Simple Request-Response Logic',
    hardware: ['Arduino Uno', '4x4 Membrane Keypad', 'I2C 16x2 LCD Screen', 'HC-05 Bluetooth Module'],
    subSections: [
      {
        title: '1. Understanding Serial Communication',
        content: 'UART allows microcontrollers to talk to computers, Bluetooth chips, or GPS units without sharing a clock signal. Communication relies on agreed speeds (baud rates like 9600) and clear message packaging.'
      },
      {
        title: '2. Example Project: Simple Offline Access Node',
        content: 'This project demonstrates a secure prompt-and-response routine. Pressing keys on a keypad sends a request over serial to an automation controller, which checks the code and triggers a relay switch only when verified.',
        codeSnippet: `// Core Serial Listener Logic
if (Serial.available() > 0) {
  String input = Serial.readStringUntil('\\n');
  if (input.startsWith("VERIFIED:")) {
    triggerRelay();
  }
}`
      },
      {
        title: '3. Real-World Application',
        content: 'This mimics standard client-server communication models used in industrial automation, where a peripheral device asks for permission before executing a physical action.'
      }
    ],
    status: 'Completed',
  },
  {
    id: '02',
    phase: 'PHASE 02',
    title: 'Local Sensor Buses (I2C & SPI)',
    overview: 'Master connecting multiple sensors and display screens using shared communication lines while preventing address conflicts.',
    protocolFocus: 'I2C Addressing (2-wire bus) & High-Speed SPI Data Lines.',
    hardware: ['DS1307 Real-Time Clock', 'MFRC522 RFID Reader', 'BMP280 Temperature Sensor', 'Ultrasonic Distance Sensor'],
    subSections: [
      {
        title: '1. Comparing I2C and SPI',
        content: 'I2C uses only two data wires (SDA and SCL) and assigns a unique hex address to each device (e.g., 0x27 for screens). SPI uses four dedicated wires and handles faster, high-bandwidth data transfers ideal for displays and memory cards.'
      },
      {
        title: '2. Example Project: Multi-Sensor Dashboard Hub',
        content: 'Connecting environmental sensors onto a single shared I2C bus line while managing pull-up resistors and stable power distribution.'
      }
    ],
    status: 'Completed',
  },
  {
    id: '03',
    phase: 'PHASE 03',
    title: 'Wireless IoT & ESP32 Smart Cores',
    overview: 'Upgrade from basic microcontrollers to Wi-Fi enabled ESP32 chips that can transmit sensor data directly to cloud dashboards.',
    protocolFocus: 'MQTT (Lightweight Messaging) & Secure Cloud Webhooks.',
    hardware: ['ESP32 NodeMCU', 'Cloud Database', 'MQTT Broker', 'Soil Moisture Sensor'],
    subSections: [
      {
        title: '1. Why MQTT for IoT?',
        content: 'MQTT operates on an efficient publish-subscribe model. It is designed to use minimal data bandwidth, making it ideal for remote or intermittent internet connections across regional sites.'
      },
      {
        title: '2. Example Project: Cloud-Connected Monitor',
        content: 'An Arduino reads a security badge and passes data over serial to an ESP32, which securely packages the record and pushes it instantly to a cloud database.'
      }
    ],
    status: 'In Progress',
  },
  {
    id: '04',
    phase: 'PHASE 04',
    title: 'Edge Safety & MicroPython (Pi Pico W)',
    overview: 'Build high-speed safety override loops and emergency stop triggers using MicroPython on the Raspberry Pi Pico W.',
    protocolFocus: 'Asynchronous Interrupts (IRQ) and Low-Latency Sensor Polling.',
    hardware: ['Pi Pico W', 'Time-of-Flight Distance Sensor', 'Active Buzzer Alert'],
    subSections: [
      {
        title: '1. Handling Interrupts and Safety',
        content: 'Standard code loops run sequentially, which can introduce dangerous delays. Hardware interrupts allow safety sensors to instantly interrupt the main program when an obstruction is detected.'
      },
      {
        title: '2. Example Project: Proximity Safety Bubble',
        content: 'A Python script continuously monitors laser distance metrics and instantly triggers an emergency stop override if an obstruction breaches the safety boundary.'
      }
    ],
    status: 'Upcoming',
  },
];

export default function DocsHub() {
  const [activeModuleId, setActiveModuleId] = useState<string>('01');
  const activeModule = modules.find((m) => m.id === activeModuleId) || modules[0];

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200 font-sans flex flex-col"
      style={{
        backgroundColor: '#0d1117',
        backgroundImage: 'linear-gradient(to right, #21262d 1px, transparent 1px), linear-gradient(to bottom, #21262d 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      
      {/* Top Header Bar */}
      <header className="border-b border-gray-800 bg-[#0d1117]/95 backdrop-blur sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-950/50 border border-amber-500/30 flex items-center justify-center text-amber-500">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-amber-500 font-semibold tracking-wider uppercase block">Chadash Documentation</span>
              <span className="text-sm font-bold text-white">Engineering Manual & Curriculum</span>
            </div>
          </div>
          <Link
            href="/"
            className="text-xs text-emerald-400 border border-emerald-500/30 bg-emerald-950/40 px-3.5 py-2 rounded-lg hover:bg-emerald-900/40 transition-all font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Documentation Main Layout with Sidebar */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row px-4 md:px-6 py-8 gap-8">
        
        {/* Sticky Left Sidebar Navigation */}
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-6">
          <div className="bg-[#161b22]/90 border border-gray-800 rounded-2xl p-4 shadow-xl sticky top-24 space-y-3">
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider px-3 pt-1">
              Curriculum Manual
            </div>
            <nav className="space-y-1">
              {modules.map((mod) => {
                const isActive = activeModuleId === mod.id;
                return (
                  <button
                    key={mod.id}
                    onClick={() => setActiveModuleId(mod.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between group ${
                      isActive 
                        ? 'bg-amber-600 text-white shadow-md font-semibold' 
                        : 'text-gray-300 hover:bg-gray-800/60 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-white' : 'bg-amber-500'}`}></span>
                      <span className="truncate">{mod.phase}: {mod.title.split(' ')[0]}...</span>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-0.5 text-white' : 'text-gray-500 group-hover:translate-x-0.5'}`} />
                  </button>
                );
              })}
            </nav>

            <div className="pt-4 border-t border-gray-800 px-3">
              <div className="text-[11px] text-gray-400 leading-relaxed">
                Need customized hardware documentation or guides for your organization?
              </div>
              <a href="/#contact" className="text-xs text-amber-400 font-semibold hover:underline block mt-2">
                Contact Engineering Team →
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content Area (Doc Viewer) */}
        <main className="flex-1 bg-[#161b22]/95 border border-gray-800 rounded-2xl p-6 md:p-10 shadow-2xl space-y-8">
          
          {/* Breadcrumb & Status */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-6">
            <div className="space-y-1">
              <span className="text-xs text-amber-500 font-semibold tracking-wider uppercase">{activeModule.phase} Documentation</span>
              <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">{activeModule.title}</h1>
            </div>
            <span className={`text-xs px-3 py-1 rounded-full font-medium ${
              activeModule.status === 'Completed' ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60' :
              activeModule.status === 'In Progress' ? 'bg-amber-950/80 text-amber-300 border border-amber-800/60' :
              'bg-gray-900 text-gray-400 border border-gray-800'
            }`}>
              Status: {activeModule.status}
            </span>
          </div>

          {/* Overview Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-amber-500" /> Module Overview
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">{activeModule.overview}</p>
          </div>

          {/* Core Focus Box */}
          <div className="bg-[#0d1117] border border-amber-500/20 rounded-xl p-4 text-xs space-y-1">
            <span className="text-amber-400 font-semibold uppercase tracking-wider block">⚡ Primary Communication Standard:</span>
            <p className="text-gray-300 font-mono text-[11px]">{activeModule.protocolFocus}</p>
          </div>

          {/* Detailed Subsections */}
          <div className="space-y-8 pt-4 border-t border-gray-800">
            {activeModule.subSections.map((sub, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span className="text-amber-500 font-mono">#</span> {sub.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">{sub.content}</p>

                {sub.codeSnippet && (
                  <div className="bg-[#0d1117] border border-gray-800 rounded-xl p-4 text-xs font-mono text-emerald-400 overflow-x-auto mt-3 shadow-inner">
                    <pre>{sub.codeSnippet}</pre>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Hardware BOM Requirements */}
          <div className="border-t border-gray-800 pt-6 space-y-3">
            <h4 className="text-xs font-semibold text-gray-400 tracking-wider uppercase">Required Parts & Components (BOM):</h4>
            <div className="flex flex-wrap gap-2">
              {activeModule.hardware.map((item, idx) => (
                <span key={idx} className="text-xs bg-gray-900 border border-gray-800 text-gray-300 px-3.5 py-1.5 rounded-lg font-medium flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Bar */}
          <div className="border-t border-gray-800 pt-6 flex flex-wrap justify-between items-center gap-4">
            <span className="text-xs text-gray-400">Chadash Automation Open-Source Standards</span>
            <button
              onClick={() => alert(`Preparing complete documentation package for ${activeModule.title}...`)}
              className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all cursor-pointer shadow-md shadow-amber-900/20 flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Guide & Code Packet
            </button>
          </div>

        </main>

      </div>
    </div>
  );
}