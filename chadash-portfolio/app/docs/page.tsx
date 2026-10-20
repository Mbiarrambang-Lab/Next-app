'use client';

import { useState } from 'react';
import Link from 'next/link';

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
    title: 'Foundations & Serial Comms (Arduino Core)',
    overview: 'Establish baseline hardware serialization, input management, and bidirectional terminal states for offline automation nodes.',
    protocolFocus: 'UART (Universal Asynchronous Receiver-Transmitter) & Command-Response State Machines.',
    hardware: ['Arduino Uno', '4x4 Membrane Keypad', 'I2C 16x2 LCD', 'HC-05 Bluetooth Module'],
    subSections: [
      {
        title: '1. Protocol Theory & Architecture',
        content: 'UART operates asynchronously, meaning there is no shared clock signal. Communication relies on agreed-upon baud rates (e.g., 9600) and frame formatting (start bits, data bits, parity, stop bits). In robotics, this is the foundational pattern for microcontrollers talking to Bluetooth modules or GPS receivers.'
      },
      {
        title: '2. Example Project: Pursar v1.1 Offline Vending System',
        content: 'Demonstrates a secure command-response handshake. A physical keypad input triggers a request payload sent over serial/Bluetooth to a terminal client, which must reply with a cryptographic or validated PAID confirmation state before the actuator relay triggers.',
        codeSnippet: `// Core Serial Listener Logic
if (Serial.available() > 0) {
  String input = Serial.readStringUntil('\\n');
  if (input.startsWith("PAID:")) {
    triggerRelay();
  }
}`
      },
      {
        title: '3. ROS2 Conceptual Mapping',
        content: 'This directly simulates the ROS2 Service-Client model. The microcontroller acts as the client requesting state action, while the terminal or companion computer acts as the service node returning execution verification.'
      }
    ],
    status: 'Completed',
  },
  {
    id: '02',
    phase: 'PHASE 02',
    title: 'Local Bus Protocols & Sensor Arrays (I2C / SPI)',
    overview: 'Mastering multi-device synchronous communication protocols, managing address collisions, and parsing sensor telemetry streams.',
    protocolFocus: 'I2C (Inter-Integrated Circuit) with 7-bit addressing & SPI (Serial Peripheral Interface) full-duplex lines.',
    hardware: ['DS1307 RTC', 'MFRC522 RFID Reader', 'BMP280 / GY-BME280', 'HC-SR04 Ultrasonic'],
    subSections: [
      {
        title: '1. Protocol Theory: I2C vs. SPI',
        content: 'I2C uses only two wires (SDA and SCL) allowing multiple master and slave devices via unique hex addresses (e.g., 0x27 for LCD, 0x68 for RTC). SPI uses four wires (MOSI, MISO, SCK, CS) and handles higher-speed, full-duplex synchronous data transfers ideal for displays and SD card storage.'
      },
      {
        title: '2. Example Project: Distributed I2C Telemetry Hub',
        content: 'Connecting multiple environmental sensors onto a single shared I2C bus line while handling bus contention, pull-up resistor constraints, and common ground stability.'
      },
      {
        title: '3. ROS2 Conceptual Mapping',
        content: 'Mirrors the Data Distribution Service (DDS) middleware architecture where multiple sensor nodes publish topics asynchronously onto shared communication buses.'
      }
    ],
    status: 'Completed',
  },
  {
    id: '03',
    phase: 'PHASE 03',
    title: 'Wireless IoT & Multi-Node ESP32 Cores',
    overview: 'Transitioning from basic microcontrollers to Wi-Fi enabled micro-nodes handling remote packet routing and cloud telemetry.',
    protocolFocus: 'MQTT (Message Queuing Telemetry Transport) & HTTP RESTful Webhooks over ESP32 FreeRTOS.',
    hardware: ['ESP32 NodeMCU', 'Firebase Realtime DB', 'MQTT Broker', 'Soil Moisture Sensor'],
    subSections: [
      {
        title: '1. Network Protocol & Publishing',
        content: 'MQTT operates on a lightweight publish-subscribe model, perfect for low-bandwidth or intermittent network conditions typical in regional infrastructure deployments across Africa.'
      },
      {
        title: '2. Example Project: RFID Authenticated Environment Monitor',
        content: 'An Arduino Uno reads an RFID security card and passes the UID data via UART serialization to an ESP32, which packages the payload and pushes it instantly to a Firebase cloud database.'
      }
    ],
    status: 'In Progress',
  },
  {
    id: '04',
    phase: 'PHASE 04',
    title: 'Real-Time Edge Safety & MicroPython (Pi Pico W)',
    overview: 'Executing microsecond-level hardware interrupts and asynchronous sensor loops for obstacle avoidance and emergency stop systems.',
    protocolFocus: 'Asynchronous IRQ (Interrupt Request Handlers) and Low-Latency Peripheral Polling.',
    hardware: ['Pi Pico W (MicroPython)', 'VL53L0X Time-of-Flight Sensor', 'Active Buzzer'],
    subSections: [
      {
        title: '1. Latency Management & IRQ Theory',
        content: 'Standard code loops run sequentially, introducing hazardous tracking delays. Hardware interrupts allow pins to instantly break the main loop execution upon detecting a threshold event (such as a collision warning within 20cm).'
      },
      {
        title: '2. Example Project: ToF "Safety Bubble" Emergency Node',
        content: 'A Python-driven script running on the dual-core Pi Pico W continuously reads laser distance metrics while instantly triggering an emergency stop override if an obstruction breaches the safety boundary.'
      },
      {
        title: '3. ROS2 Conceptual Mapping',
        content: 'Directly maps to low-level safety-critical nodes and LaserScan data pipelines utilized inside modern Nav2 stacks.'
      }
    ],
    status: 'Upcoming',
  },
];

export default function DocsHub() {
  const [activeModuleId, setActiveModuleId] = useState<string>('01');
  const activeModule = modules.find((m) => m.id === activeModuleId) || modules[0];

  return (
    <main className="min-h-screen bg-[#0d1117] text-gray-200 font-mono p-6 md:p-12 relative overflow-hidden">
      {/* Blueprint Grid Background Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, #30363d 1px, transparent 1px),
            linear-gradient(to bottom, #30363d 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Navigation Tracker Header */}
        <div className="flex justify-between items-center border-b border-gray-800 pb-6 mb-8">
          <div>
            <span className="text-xs text-[#d97706] tracking-widest uppercase">CHADASH_AUTOMATION // ENGINEERING KNOWLEDGE BASE</span>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white mt-1">OPEN-SOURCE CURRICULUM & PROTOCOL MANUAL</h1>
          </div>
          <Link
            href="/"
            className="text-xs text-[#10b981] border border-emerald-900 bg-emerald-950/30 px-4 py-2 rounded hover:bg-emerald-900/40 transition-all flex-shrink-0"
          >
            ← RETURN_HOME
          </Link>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left Sidebar: Phase Selection Directory */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold text-gray-400 tracking-wider uppercase">01 // CURRICULUM STAGES</h3>
            {[
              { id: 'phase-01', num: '01', phase: 'PHASE 01', title: 'Foundations & Serial Comms (Arduino Core)', status: 'Completed' },
              { id: 'phase-02', num: '02', phase: 'PHASE 02', title: 'Local Bus Protocols & Sensor Arrays (I2C / SPI)', status: 'Completed' },
              { id: 'phase-03', num: '03', phase: 'PHASE 03', title: 'Wireless IoT & Multi-Node ESP32 Cores', status: 'In Progress' },
              { id: 'phase-04', num: '04', phase: 'PHASE 04', title: 'Real-Time Edge Safety & MicroPython', status: 'Upcoming' },
            ].map((mod) => (
              <Link
                key={mod.id}
                href={`/docs/${mod.id}`}
                className="w-full text-left p-4 rounded-lg border transition-all block bg-[#161b22]/50 border-gray-800 hover:border-[#d97706] hover:bg-[#161b22]"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-[#d97706]">{mod.phase}</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded ${mod.status === 'Completed' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' :
                      mod.status === 'In Progress' ? 'bg-amber-950 text-amber-400 border border-amber-800' :
                        'bg-gray-900 text-gray-400 border border-gray-800'
                    }`}>
                    {mod.status}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white">{mod.title}</h4>
              </Link>
            ))}
          </div>

          {/* Right Main Panel: Comprehensive Documentation View */}
          <div className="lg:col-span-2 bg-[#161b22] border border-gray-800 rounded-xl p-6 md:p-8 relative space-y-6">
            <div className="absolute top-4 right-4 text-xs text-gray-500 font-mono">SPEC_ID: #{activeModule.id}</div>

            <div>
              <span className="text-xs text-[#d97706] uppercase tracking-widest">{activeModule.phase} TECHNICAL DIRECTORY</span>
              <h2 className="text-2xl font-bold text-white mt-1 mb-2">{activeModule.title}</h2>
              <p className="text-gray-300 text-sm leading-relaxed">{activeModule.overview}</p>
            </div>

            {/* Protocol Highlight Box */}
            <div className="bg-[#0d1117] border border-amber-600/30 rounded p-4 text-xs space-y-1">
              <span className="text-amber-500 font-bold uppercase tracking-wider block">⚡ Primary Communication Focus:</span>
              <p className="text-gray-300">{activeModule.protocolFocus}</p>
            </div>

            {/* Subsections Content Loop */}
            <div className="space-y-6 border-t border-gray-800 pt-6">
              {activeModule.subSections.map((sub, idx) => (
                <div key={idx} className="space-y-2">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="text-[#d97706]">#</span> {sub.title}
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{sub.content}</p>

                  {sub.codeSnippet && (
                    <div className="bg-[#0d1117] border border-gray-800 rounded p-3 text-[11px] font-mono text-emerald-400 overflow-x-auto mt-2">
                      <pre>{sub.codeSnippet}</pre>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Hardware BOM Requirements */}
            <div className="border-t border-gray-800 pt-6">
              <h4 className="text-xs font-semibold text-gray-400 tracking-wider uppercase mb-3">Required Hardware Components (BOM):</h4>
              <div className="flex flex-wrap gap-2">
                {activeModule.hardware.map((item, idx) => (
                  <span key={idx} className="text-xs bg-gray-900 border border-gray-800 text-gray-300 px-3 py-1 rounded">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action Bar */}
            <div className="border-t border-gray-800 pt-6 flex flex-wrap justify-between items-center gap-4">
              <span className="text-xs text-gray-500">Chadash Automation Open-Source Standards</span>
              <button
                onClick={() => alert(`Downloading complete specification markdown and code packet for ${activeModule.title}...`)}
                className="bg-[#d97706] hover:bg-amber-600 text-black font-bold text-xs px-5 py-2.5 rounded transition-all cursor-pointer"
              >
                DOWNLOAD_PHASE_BUNDLE 📦
              </button>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
