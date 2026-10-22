'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, ChevronRight, Download } from 'lucide-react';

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
    overview: 'Learn how to set up basic microcontroller wiring, manage inputs from physical keypads or sensors, and send data reliably through serial connections.',
    protocolFocus: 'UART Serial Communication & Simple Request-Response Logic',
    hardware: ['Arduino Uno', '4x4 Membrane Keypad', 'I2C 16x2 LCD Screen', 'HC-05 Bluetooth Module'],
    subSections: [
      {
        title: '1. Understanding Serial Communication',
        content: 'Remember when legacy hardware devices, printers, and desktop peripherals used thick cables with clunky multi-pin connectors that had to be screwed into place? Those devices relied heavily on Universal Asynchronous Receiver-Transmitters (UARTs) to communicate with mainframe and personal computers.\n\nWhile USB has largely replaced those bulky cables for daily consumer electronics, UARTs are far from obsolete. Today, you will find UARTs implemented in nearly every DIY electronics project, robotics kit, and industrial prototype—used specifically to connect GPS receivers, Bluetooth modules, and RFID card readers to microcontrollers like the Arduino, ESP32, or Raspberry Pi.\n\nUART stands for Universal Asynchronous Receiver/Transmitter. It is not a communication protocol like SPI or I2C, but rather a dedicated physical circuit (or standalone integrated circuit) inside a microcontroller whose main purpose is to transmit and receive serial data.\n\nOne of the greatest benefits of UART is that it requires only two wires to transmit bidirectional data between devices. The underlying principles are straightforward to master, making it the perfect starting point for hardware communication.'
      },
      {
        title: '2. Introduction to UART Architecture',
        content: 'In UART communication, two separate UART devices communicate directly with one another.\n- The transmitting UART converts parallel data received from a controlling CPU or memory bus into serial form.\n- It transmits this data sequentially over a single wire to the receiving UART.\n- The receiving UART then converts the incoming bit stream back into parallel data for the receiving system.\n\nData flows directly from the Tx (Transmit) pin of the sender to the Rx (Receive) pin of the receiver. Because UART communication is asynchronous, there is no shared clock signal synchronizing the output of bits. Instead, the transmitting device embeds custom start bits and stop bits directly into the data packet frame so the receiver knows precisely when to begin and stop reading.'
      },
      {
        title: '3. Example Project: Secure Offline Access Node',
        content: 'This project demonstrates a secure prompt-and-response routine. Pressing keys on a physical keypad sends a request payload over serial to an automation controller, which validates the passcode and triggers a relay switch only upon verification.',
        codeSnippet: `// Core Serial Listener Logic for Access Control
void setup() {
  Serial.begin(9600);
  pinMode(LED_BUILTIN, OUTPUT);
}

void loop() {
  if (Serial.available() > 0) {
    String input = Serial.readStringUntil('\\n');
    if (input.startsWith("VERIFIED:")) {
      digitalWrite(LED_BUILTIN, HIGH);
      Serial.println("STATUS: RELAY_TRIGGERED");
    }
  }
}`
      }
    ],
    status: 'Completed',
  },
  {
    id: '02',
    phase: 'PHASE 02',
    title: 'Local Sensor Buses (I2C & SPI)',
    overview: 'Master connecting multiple sensors, real-time clocks, and display screens using shared multi-device communication lines.',
    protocolFocus: 'I2C Addressing (2-wire bus) & High-Speed SPI Data Lines.',
    hardware: ['DS1307 Real-Time Clock', 'MFRC522 RFID Reader', 'BMP280 Temperature Sensor', 'Ultrasonic Distance Sensor'],
    subSections: [
      {
        title: '1. Comparing I2C and SPI Protocols',
        content: 'When your microcontroller needs to talk to multiple sensors or display modules simultaneously, running individual wires for each device quickly becomes impractical. This is where synchronous serial buses like I2C and SPI come in.\n\n- I2C (Inter-Integrated Circuit): Uses only two shared data lines—SDA (Serial Data) and SCL (Serial Clock). Every device connected to an I2C bus is assigned a unique hex address (e.g., 0x27 for LCD screens or 0x68 for real-time clocks). This allows dozens of sensors to share the exact same two wires without signal collision.\n- SPI (Serial Peripheral Interface): Uses four dedicated lines (MOSI, MISO, SCK, and CS). SPI operates at significantly higher clock speeds in a full-duplex environment, making it ideal for high-bandwidth displays, SD card storage modules, and high-speed telemetry logging.'
      },
      {
        title: '2. Example Project: Multi-Sensor Dashboard Hub',
        content: 'This project connects environmental temperature sensors, timekeeping modules, and digital display panels onto a single shared I2C bus line while managing pull-up resistor constraints and common ground stability.'
      }
    ],
    status: 'Completed',
  },
  {
    id: '03',
    phase: 'PHASE 03',
    title: 'Wireless IoT & ESP32 Smart Cores',
    overview: 'Transition from basic wired microcontrollers to Wi-Fi enabled ESP32 chips that package and transmit sensor data directly to cloud dashboards.',
    protocolFocus: 'MQTT (Lightweight Messaging) & Secure Cloud Webhooks.',
    hardware: ['ESP32 NodeMCU', 'Cloud Database', 'MQTT Broker', 'Soil Moisture Sensor'],
    subSections: [
      {
        title: '1. Why MQTT is Ideal for IoT Infrastructure',
        content: 'MQTT (Message Queuing Telemetry Transport) operates on an efficient publish-subscribe model rather than traditional heavy HTTP requests. It is purpose-built for low-bandwidth, high-latency, or intermittent network environments commonly encountered across regional deployment sites in Africa and remote off-grid locations. By keeping packet overhead minimal, battery-powered sensor nodes can run continuously for months without network failure.'
      }
    ],
    status: 'In Progress',
  },
  {
    id: '04',
    phase: 'PHASE 04',
    title: 'Edge Safety & MicroPython (Pi Pico W)',
    overview: 'Build high-speed safety override loops and emergency stop triggers using MicroPython on the Raspberry Pi Pico W dual-core processor.',
    protocolFocus: 'Asynchronous Interrupts (IRQ) and Low-Latency Sensor Polling.',
    hardware: ['Pi Pico W', 'Time-of-Flight Distance Sensor', 'Active Buzzer Alert'],
    subSections: [
      {
        title: '1. Handling Hardware Interrupts and Safety Loops',
        content: 'Standard sequential code execution loops can introduce hazardous latency when tracking fast-moving physical obstacles. Hardware interrupts (IRQs) allow specific microcontroller pins to instantly pause main program execution the exact millisecond a critical threshold event is detected (such as an obstruction breaching a 20cm safety boundary).'
      }
    ],
    status: 'Upcoming',
  },
];

export default function DocsHub() {
  const [activeModuleId, setActiveModuleId] = useState<string>('01');
  const activeModule = modules.find((m) => m.id === activeModuleId) || modules[0];

  return (
    <main className="min-h-screen bg-[#0d1117] text-gray-200 font-sans"
      style={{
        backgroundColor: '#0d1117',
        backgroundImage: 'linear-gradient(to right, #21262d 1px, transparent 1px), linear-gradient(to bottom, #21262d 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      
      {/* Top Navbar */}
      <header className="border-b border-gray-800/80 bg-[#0d1117]/90 backdrop-blur sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] text-amber-500 font-semibold tracking-wider uppercase block">Chadash Documentation</span>
              <span className="text-white font-bold text-sm">Engineering Manual & Curriculum</span>
            </div>
          </div>
          <Link
            href="/"
            className="text-xs text-gray-300 hover:text-amber-400 border border-gray-800 bg-[#161b22] px-3.5 py-2 rounded-lg font-medium transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Documentation Layout Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Sticky Sidebar Navigation (ROS Style) */}
          <aside className="lg:col-span-1 space-y-2 lg:sticky lg:top-24 h-fit">
            <div className="text-xs font-semibold text-gray-400 tracking-wider uppercase px-2 mb-3">
              Table of Contents
            </div>
            
            <nav className="space-y-1.5">
              {modules.map((mod) => {
                const isActive = activeModuleId === mod.id;
                return (
                  <button
                    key={mod.id}
                    onClick={() => setActiveModuleId(mod.id)}
                    className={`w-full text-left px-3.5 py-3 rounded-xl transition-all flex items-center justify-between group ${
                      isActive 
                        ? 'bg-amber-600/15 border border-amber-500/40 text-white font-semibold shadow-md' 
                        : 'bg-[#161b22]/50 border border-gray-800/80 text-gray-400 hover:text-gray-200 hover:bg-[#161b22]'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <span className={`text-[10px] uppercase font-mono tracking-wider block ${isActive ? 'text-amber-400 font-bold' : 'text-gray-400'}`}>
                        {mod.phase}
                      </span>
                      <span className="text-xs leading-snug block">{mod.title}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'text-amber-400 translate-x-0.5' : 'text-gray-600 group-hover:text-gray-400'}`} />
                  </button>
                );
              })}
            </nav>

            {/* Sidebar Quick Card */}
            <div className="mt-8 bg-[#161b22]/80 border border-gray-800 rounded-2xl p-4 space-y-2 text-xs">
              <span className="text-amber-500 font-bold block">Need physical kits?</span>
              <p className="text-gray-400 leading-relaxed">All curriculum components are available for purchase in our hardware shop.</p>
              <Link href="/shop" className="inline-block text-amber-400 font-semibold hover:underline pt-1">
                Visit Hardware Shop →
              </Link>
            </div>
          </aside>

          {/* Main Content Panel (Documentation Reader) */}
          <article className="lg:col-span-3 bg-[#161b22]/95 border border-gray-800 rounded-2xl p-6 md:p-10 space-y-8 shadow-2xl">
            
            {/* Header Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-800 pb-6">
              <div>
                <span className="text-xs bg-amber-950/60 text-amber-400 border border-amber-500/30 px-3 py-1 rounded-full font-medium inline-block mb-3">
                  {activeModule.phase} Guide
                </span>
                <h1 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                  {activeModule.title}
                </h1>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                activeModule.status === 'Completed' ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800' :
                activeModule.status === 'In Progress' ? 'bg-amber-950/80 text-amber-300 border border-amber-800' :
                'bg-gray-900 text-gray-400 border border-gray-800'
              }`}>
                Status: {activeModule.status}
              </span>
            </div>

            {/* Overview Paragraph */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-amber-500 uppercase tracking-wider">Overview</h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                {activeModule.overview}
              </p>
            </div>

            {/* Core Protocol Callout */}
            <div className="bg-[#0d1117] border border-amber-500/20 rounded-xl p-4 text-xs space-y-1 shadow-inner">
              <span className="text-amber-400 font-semibold uppercase tracking-wider block">⚡ Core Focus & Standards:</span>
              <p className="text-gray-300">{activeModule.protocolFocus}</p>
            </div>

            {/* Subsections Content */}
            <div className="space-y-8 border-t border-gray-800 pt-8">
              {activeModule.subSections.map((sub, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span className="text-amber-500">#</span> {sub.title}
                  </h3>
                  <div className="text-xs md:text-sm text-gray-300 leading-relaxed whitespace-pre-line space-y-3">
                    {sub.content}
                  </div>

                  {sub.codeSnippet && (
                    <div className="bg-[#0d1117] border border-gray-800 rounded-xl p-4 text-xs font-mono text-emerald-400 overflow-x-auto shadow-inner mt-3">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-800/80 text-[10px] text-gray-500">
                        <span>EXAMPLE_CODE_SNIPPET.INO</span>
                        <span>C++ / ARDUINO</span>
                      </div>
                      <pre>{sub.codeSnippet}</pre>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Required Hardware BOM */}
            <div className="border-t border-gray-800 pt-8 space-y-3">
              <h3 className="text-xs font-semibold text-gray-400 tracking-wider uppercase">
                Required Parts & Components (BOM):
              </h3>
              <div className="flex flex-wrap gap-2">
                {activeModule.hardware.map((item, idx) => (
                  <span key={idx} className="text-xs bg-gray-900 border border-gray-800 text-gray-300 px-3.5 py-1.5 rounded-lg font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="border-t border-gray-800 pt-6 flex flex-wrap justify-between items-center gap-4">
              <span className="text-xs text-gray-400">Chadash Automation Open-Source Standards</span>
              <button
                onClick={() => alert(`Preparing complete documentation and code package for ${activeModule.title}...`)}
                className="bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all cursor-pointer shadow-md shadow-amber-900/20 flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Download Guide & Code Packet
              </button>
            </div>

          </article>

        </div>
      </div>
    </main>
  );
}