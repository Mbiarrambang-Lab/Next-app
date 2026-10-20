import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Cpu, PlaySquare } from 'lucide-react';

interface SubSection {
  title: string;
  content: string;
  codeSnippet?: string;
}

interface DocumentationData {
  id: string;
  slug: string;
  phase: string;
  title: string;
  overview: string;
  protocolFocus: string;
  youtubeId: string;
  hardwareBOM: string[];
  sections: SubSection[];
}

const docsDatabase: Record<string, DocumentationData> = {
  'phase-01': {
    id: '01',
    slug: 'phase-01',
    phase: 'PHASE 01',
    title: 'Foundations & Serial Comms (Arduino Core)',
    overview: 'Establish baseline hardware serialization, input management, and bidirectional terminal states for offline automation nodes.',
    protocolFocus: 'UART (Universal Asynchronous Receiver-Transmitter) & Bidirectional State Machines.',
    youtubeId: 'dQw4w9WgXcQ',
    hardwareBOM: ['Arduino Uno Core', '4x4 Keypad Module', 'I2C 16x2 LCD Interface', 'HC-05 / HM-10 Bluetooth Node'],
    sections: [
      {
        title: '1. Protocol Theory & Architecture',
        content: 'UART operates asynchronously without a shared clock signal. Communication relies on pre-configured baud rates (e.g., 9600) and frame formatting (start bits, data payload, parity, stop bits). In decentralized robotics, this forms the foundation for microcontrollers communicating with Bluetooth telemetry channels or GPS modules.'
      },
      {
        title: '2. Field Implementation: Pursar Offline Vending Node (v1.1)',
        content: 'Demonstrates a secure command-response handshake. A physical keypad selection sends a serialized payment request payload over Bluetooth to a phone terminal client. The terminal responds with a validated AUTH confirmation state before the actuator relay triggers.',
        codeSnippet: `// Pursar v1.1 Core Serial Handshake
#include <EEPROM.h>

void setup() {
  Serial.begin(9600);
}

void loop() {
  if (Serial.available() > 0) {
    String packet = Serial.readStringUntil('\\n');
    if (packet.startsWith("PAID:PROD_01")) {
      digitalWrite(RELAY_PIN, HIGH);
      delay(1000);
      digitalWrite(RELAY_PIN, LOW);
      Serial.println("ACK:DISPENSED");
    }
  }
}`
      },
      {
        title: '3. ROS2 & Middleware Conceptual Mapping',
        content: 'This protocol workflow directly maps to the ROS2 Service-Client communication model. The microcontroller acts as the client requesting state action, while the companion computer acts as the service server returning execution verification.'
      }
    ]
  },
  'phase-02': {
    id: '02',
    slug: 'phase-02',
    phase: 'PHASE 02',
    title: 'Local Bus Protocols & Sensor Arrays (I2C / SPI)',
    overview: 'Mastering multi-device synchronous communication protocols, address collision management, and parsing sensor telemetry streams.',
    protocolFocus: 'I2C (Inter-Integrated Circuit) 7-bit bus addressing & SPI (Serial Peripheral Interface) full-duplex lines.',
    youtubeId: 'dQw4w9WgXcQ',
    hardwareBOM: ['DS1307 RTC Module', 'MFRC522 RFID Reader', 'BMP280 Sensor', 'HC-SR04 Ultrasonic'],
    sections: [
      {
        title: '1. Protocol Analysis: I2C vs. SPI Bus Infrastructure',
        content: 'I2C uses two lines (SDA and SCL) for low-pin-count master/slave communication using unique hex addresses. SPI employs four lines enabling high-speed, full-duplex synchronous data streams.'
      }
    ]
  },
  'phase-03': {
    id: '03',
    slug: 'phase-03',
    phase: 'PHASE 03',
    title: 'Wireless IoT & Multi-Node ESP32 Cores',
    overview: 'Transitioning from basic microcontrollers to Wi-Fi enabled micro-nodes handling remote packet routing and cloud telemetry.',
    protocolFocus: 'MQTT & HTTP RESTful Webhooks over ESP32 FreeRTOS.',
    youtubeId: 'dQw4w9WgXcQ',
    hardwareBOM: ['ESP32 NodeMCU', 'Firebase Realtime DB', 'MQTT Broker'],
    sections: [
      {
        title: '1. Network Protocol & Publishing',
        content: 'MQTT operates on a lightweight publish-subscribe model, perfect for low-bandwidth or intermittent network conditions.'
      }
    ]
  },
  'phase-04': {
    id: '04',
    slug: 'phase-04',
    phase: 'PHASE 04',
    title: 'Real-Time Edge Safety & MicroPython',
    overview: 'Executing microsecond-level hardware interrupts and asynchronous sensor loops.',
    protocolFocus: 'Asynchronous IRQ and Low-Latency Peripheral Polling.',
    youtubeId: 'dQw4w9WgXcQ',
    hardwareBOM: ['Pi Pico W', 'VL53L0X ToF Sensor'],
    sections: [
      {
        title: '1. Latency Management & IRQ Theory',
        content: 'Hardware interrupts allow pins to instantly break main loop execution upon detecting a threshold event.'
      }
    ]
  }
};

// Required for static site generation in Next.js App Router
export async function generateStaticParams() {
  return Object.keys(docsDatabase).map((phaseId) => ({ phaseId }));
}

export default async function DocumentationReader({ params }: { params: Promise<{ phaseId: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.phaseId || 'phase-01';
  const doc = docsDatabase[slug] || docsDatabase['phase-01'];

  return (
    <main className="min-h-screen bg-[#0d1117] text-gray-200 font-mono relative selection:bg-amber-600 selection:text-white print:bg-white print:text-black">
      
      {/* Visual Blueprint Grid Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15 print:hidden" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #30363d 1px, transparent 1px),
            linear-gradient(to bottom, #30363d 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Online Navigation Bar */}
      <header className="border-b border-gray-800/80 bg-[#0d1117]/90 backdrop-blur sticky top-0 z-50 px-6 py-4 print:hidden">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Link 
              href="/docs" 
              className="text-xs text-gray-400 hover:text-amber-500 border border-gray-800 bg-[#161b22] px-3 py-1.5 rounded transition-colors flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> INDEX
            </Link>
            <span className="text-gray-700">|</span>
            <span className="text-xs text-[#d97706] tracking-widest">{doc.phase} ONLINE MANUAL</span>
          </div>
        </div>
      </header>

      {/* Main Documentation Viewer Canvas */}
      <div className="max-w-4xl mx-auto px-6 py-10 print:p-0 print:max-w-full">
        
        {/* Document Header Metadata Block */}
        <div className="border-b border-gray-800 pb-8 mb-8 print:border-black">
          <div className="flex justify-between items-start mb-2">
            <span className="text-xs text-[#d97706] font-bold tracking-widest uppercase print:text-black">
              CHADASH AUTOMATION // TECHNICAL SPECIFICATION
            </span>
            <span className="text-xs text-gray-500 font-mono print:text-black">DOC_REF: #{doc.id}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight my-2 print:text-black">
            {doc.title}
          </h1>

          <p className="text-sm text-gray-400 leading-relaxed mt-3 print:text-black">
            {doc.overview}
          </p>

          <div className="mt-6 bg-[#161b22] border border-amber-500/30 rounded-lg p-4 print:bg-gray-100 print:border-black">
            <span className="text-xs text-amber-500 font-bold uppercase tracking-wider block mb-1 print:text-black">
              ⚡ Protocol Focus
            </span>
            <p className="text-xs text-gray-300 print:text-black">{doc.protocolFocus}</p>
          </div>
        </div>

        {/* Embedded YouTube Video Walkthrough Section */}
        <div className="mb-12 bg-[#161b22] border border-gray-800 rounded-xl p-4 md:p-6 print:hidden">
          <div className="flex items-center gap-2 mb-4 text-xs font-bold text-amber-500 uppercase tracking-wider">
            <PlaySquare className="w-4 h-4" />
            <span>Visual Build Walkthrough & Breakdown</span>
          </div>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-gray-800 bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${doc.youtubeId}`}
              title={`${doc.title} Video Guide`}
              className="absolute top-0 left-0 w-full h-full border-0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Documentation Sections Content Body */}
        <div className="space-y-10">
          {doc.sections.map((section, idx) => (
            <article key={idx} className="space-y-3">
              <h2 className="text-lg font-bold text-white flex items-center gap-2 print:text-black">
                <span className="text-[#d97706] print:text-black">#</span> {section.title}
              </h2>
              
              <p className="text-sm text-gray-300 leading-relaxed print:text-black">
                {section.content}
              </p>

              {section.codeSnippet && (
                <div className="bg-[#161b22] border border-gray-800 rounded-lg p-4 font-mono text-xs text-emerald-400 overflow-x-auto print:bg-gray-100 print:border-black print:text-black">
                  <div className="text-[10px] text-gray-500 border-b border-gray-800 pb-2 mb-3 flex justify-between print:text-black print:border-black">
                    <span>C++ / EMBEDDED SOURCE CODE</span>
                    <span>BAUD: 9600</span>
                  </div>
                  <pre>{section.codeSnippet}</pre>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Bill of Materials Requirements */}
        <div className="border-t border-gray-800 pt-8 mt-12 print:border-black print:mt-6">
          <h3 className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-4 print:text-black">
            REQUIRED HARDWARE COMPONENTS (BOM):
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {doc.hardwareBOM.map((item, idx) => (
              <div key={idx} className="bg-[#161b22] border border-gray-800 px-3 py-2 rounded text-xs text-gray-300 flex items-center gap-2 print:bg-gray-50 print:border-black print:text-black">
                <Cpu className="w-3.5 h-3.5 text-amber-500 print:text-black" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Document Footer */}
        <footer className="border-t border-gray-800 mt-12 pt-6 text-xs text-gray-500 flex justify-between items-center print:border-black print:text-black">
          <div>© 2026 CHADASH AUTOMATION. Open-Source Manual.</div>
          <div>Printed from Online Docs Hub</div>
        </footer>

      </div>
    </main>
  );
}