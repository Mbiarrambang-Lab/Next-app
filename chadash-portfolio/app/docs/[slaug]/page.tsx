'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ArrowLeft, Terminal, Cpu, BookOpen, ExternalLink, FileText, CheckCircle } from 'lucide-react';
import { curriculumDocs } from '@/app/utils/docs';

interface SubSection {
  title: string;
  content: string;
  codeSnippet?: string;
}

interface DocumentationData {
  slug: string;
  phase: string;
  title: string;
  overview: string;
  protocolFocus: string;
  hardwareBOM: string[];
  youtubeEmbedId?: string;
  sections: SubSection[];
}

const docsDatabase: Record<string, DocumentationData> = {
  'beginners-guide-to-automation': {
    slug: 'beginners-guide-to-automation',
    phase: 'MODULE 01',
    title: "Beginner's Guide to Automation & Open-Source Hardware",
    overview: 'Overcoming the high cost of industrial import hardware in Cameroon by leveraging open-source microcontroller ecosystems (Arduino & ESP32) for practical learning.',
    protocolFocus: 'Digital I/O states, Pull-up/Pull-down resistors, and Basic Actuator Triggering.',
    hardwareBOM: ['Arduino Uno / ESP32 Core', '4x4 Membrane Keypad', '5V Relay Module', 'Jumper Wires & Breadboard'],
    youtubeEmbedId: 'dQw4w9WgXcQ', // Replace with your actual YouTube Video ID
    sections: [
      {
        title: '1. Why Open-Source Automation?',
        content: 'Industrial PLCs often carry prohibitive import and licensing costs. By building custom nodes using open-source hardware, students and engineers across Cameroon gain direct, hands-on experience without financial barriers.'
      },
      {
        title: '2. Basic Relay Triggering Logic',
        content: 'Connecting digital output pins to relay modules allows microcontrollers to switch high-voltage AC/DC loads safely using optical isolation.',
        codeSnippet: `// Basic Digital Output Relay Control
const int RELAY_PIN = 7;

void setup() {
  pinMode(RELAY_PIN, OUTPUT);
  digitalWrite(RELAY_PIN, LOW); // Initial state: Off
}

void loop() {
  digitalWrite(RELAY_PIN, HIGH); // Trigger actuator
  delay(2000);
  digitalWrite(RELAY_PIN, LOW);  // Release actuator
  delay(2000);
}`
      }
    ]
  },
  'cassava-processing-station': {
    slug: 'cassava-processing-station',
    phase: 'INDUSTRIAL STATION 01',
    title: 'Full Cassava Processing Station Integration Manual',
    overview: 'Automated slicing, grating, and drying control panels designed for agricultural cooperatives and STEM universities in Cameroon.',
    protocolFocus: 'UART Telemetry, Temperature Feedback, and Emergency Cut-Off Relays.',
    hardwareBOM: ['Chadash PLC-X1 V1.1', '12V-24V DC Power Supply', 'DS18B20 Waterproof Temperature Sensor', 'High-Torque DC Motor Relays'],
    youtubeEmbedId: 'dQw4w9WgXcQ',
    sections: [
      {
        title: '1. System Architecture & Safety Interlocks',
        content: 'The Cassava Processing Station requires failsafe mechanical cut-offs linked directly to hardware interrupt pins. If enclosure doors open during high-speed grating, power is instantly isolated.'
      },
      {
        title: '2. Temperature Monitoring & Drying Control',
        content: 'Maintains optimal chamber heat during cassava flour dehydration using automated PID-tuned relay cycles.',
        codeSnippet: `// Cassava Dehydration Monitoring Loop
#include <OneWire.h>
#include <DallasTemperature.h>

#define ONE_WIRE_BUS 2
OneWire oneWire(ONE_WIRE_BUS);
DallasTemperature sensors(&oneWire);

void setup() {
  Serial.begin(9600);
  sensors.begin();
}

void loop() {
  sensors.requestTemperatures(); 
  float tempC = sensors.getTempCByIndex(0);
  Serial.print("Drying Chamber Temp: ");
  Serial.println(tempC);
  delay(5000);
}`
      }
    ]
  }
};

export default function DocDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const doc = docsDatabase[slug] || {
    slug: slug,
    phase: 'CURRICULUM MODULE',
    title: 'Engineering Reference Guide',
    overview: 'Detailed technical documentation and implementation steps for Chadash Automation systems.',
    protocolFocus: 'Standard Microcontroller I/O & Communication Protocols',
    hardwareBOM: ['Chadash PLC-X1 V1.1', 'Sensor Module', 'Jumper Wires'],
    sections: [
      {
        title: '1. Module Overview',
        content: 'This document provides the foundational engineering principles, wiring schematics, and operational procedures for this system.'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-gray-200 font-sans flex flex-col">
      
      {/* Top Navigation */}
      <header className="border-b border-gray-800 bg-[#161b22]/90 backdrop-blur sticky top-0 z-50 px-6 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link 
            href="/docs" 
            className="text-xs text-gray-300 hover:text-amber-400 border border-gray-800 bg-[#0d1117] px-3.5 py-2 rounded-lg transition-colors flex items-center gap-2 font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Curriculum
          </Link>
          <span className="text-xs text-amber-500 font-semibold tracking-wider uppercase">Chadash Documentation</span>
        </div>
      </header>

      {/* Article Container */}
      <main className="max-w-4xl w-full mx-auto px-6 py-10 space-y-8 flex-1">
        
        {/* Title & Overview Header */}
        <div className="space-y-3 border-b border-gray-800 pb-6">
          <span className="text-[10px] bg-amber-950/40 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full font-mono uppercase tracking-wider">
            {doc.phase}
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            {doc.title}
          </h1>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-2xl">
            {doc.overview}
          </p>
        </div>

        {/* Embedded YouTube Video Aid (Non-Autoplay) */}
        {doc.youtubeEmbedId && (
          <div className="space-y-2 bg-[#161b22] border border-gray-800 rounded-2xl p-4 shadow-xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> Video Walkthrough & Tutorial
            </span>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black border border-gray-800">
              <iframe 
                src={`https://www.youtube-nocookie.com/embed/${doc.youtubeEmbedId}`}
                title="Tutorial Video"
                className="w-full h-full border-0"
                loading="lazy"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* Hardware BOM */}
        <div className="bg-[#161b22] border border-gray-800 rounded-2xl p-5 space-y-3 shadow-xl">
          <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Cpu className="w-4 h-4 text-amber-500" /> Bill of Materials (BOM) Required
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {doc.hardwareBOM.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-[#0d1117] border border-gray-800/80 p-2.5 rounded-xl text-gray-300">
                <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sections Content */}
        <div className="space-y-6 pt-2">
          {doc.sections.map((sec, idx) => (
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

        {/* Footer Navigation */}
        <div className="pt-8 border-t border-gray-800 flex justify-between items-center">
          <Link href="/docs" className="text-xs text-gray-400 hover:text-amber-400 transition-colors">
            ← Back to Curriculum Hub
          </Link>
          <Link href="/shop" className="bg-amber-500 hover:bg-amber-600 text-black font-extrabold text-xs px-5 py-2.5 rounded-xl uppercase tracking-wide transition-colors">
            Order Required Hardware
          </Link>
        </div>

      </main>
    </div>
  );
}