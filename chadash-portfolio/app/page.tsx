'use client'

import React, { useActionState, startTransition } from 'react';
import Image from 'next/image';
import { Cpu, Globe, Terminal, ArrowUpRight, AlertTriangle, CheckCircle2, Loader2, BookAIcon, RocketIcon, ShoppingBasket } from 'lucide-react';
import { transmitPacket } from './actions';

export default function Home() {
  // Use React's form action state to track terminal responses seamlessly
  const [state, formAction, isPending] = useActionState(transmitPacket, null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <main className="min-h-screen bg-[#0d1117] bg-grid-pattern relative text-[#f0f6fc] selection:bg-amber-600 selection:text-white">

      {/* Structural Header Navigation // Fixed element squishing */}
      <header className="border-b border-gray-800/60 backdrop-blur-md sticky top-0 z-50 px-6 py-3 bg-[#0d1117]/80">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
          <div className="flex items-center gap-3 font-mono tracking-wider flex-shrink-0">
            <div className="relative w-9 h-9 flex-shrink-0 bg-[#161b22] border border-gray-800 rounded-full overflow-hidden p-1 shadow-inner">
              <Image src="/logo.png" alt="Chadash Automation Logo" fill className="object-contain scale-105" priority />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-extrabold text-sm tracking-tight leading-none">CHADASH</span>
              <span className="text-amber-500 font-bold text-[9px] tracking-widest mt-0.5 leading-none">AUTOMATION</span>
            </div>
          </div>

          {/* Nav links expanded spacing */}
          <nav className="hidden lg:flex items-center gap-x-8 text-xs font-mono font-medium text-gray-400">
            <a href="#mission" className="hover:text-amber-500 transition-colors tracking-tight"> MISSION</a>
            <a href="#stack" className="hover:text-amber-500 transition-colors tracking-tight"> STACK</a>
            <a href="#systems" className="hover:text-amber-500 transition-colors tracking-tight"> SYSTEMS</a>
            <a href="/docs" className="hover:text-amber-500 transition-colors tracking-tight"> CURRICULUM</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors tracking-tight"> TERMINAL</a>
            <a href="/shop" className="hover:text-amber-500 transition-colors tracking-tight flex items-center gap-1.5">
              SHOP <ShoppingBasket className="w-3.5 h-3.5" />
            </a>
          </nav>

          <a href="#contact" className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-500/30 px-3 py-1.5 rounded font-mono uppercase tracking-tight flex-shrink-0">
            ● System Online
          </a>
        </div>
      </header>


      <div className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-20">

        {/* Core Hero Section */}
        <section id="mission" className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-amber-950/40 text-amber-500 border border-amber-500/20 px-3 py-1 text-xs font-mono rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
            Mbiarrambang Mbi Junior // Founder @ Chadash
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white">
            Building systems for <span className="text-amber-500 underline decoration-amber-600/40 decoration-wavy">Africa</span> and DIYers all over the world.
          </h1>

          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed">
            Experienced Embedded Systems & IoT Engineer developing resilient, decentralized technological infrastructure.
            Designing local hardware solutions optimized for deployment, open-sourced for makers globally.
          </p>

          <div className="pt-4 flex flex-wrap gap-4 font-mono text-xs">
            <a href="/projects" className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-5 py-3 rounded transition-colors flex items-center gap-2 group">
              Explore Active Deployments
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Added Documentation Button */}
            <a href="/docs" className="border border-amber-600/40 hover:border-amber-500 bg-amber-950/20 text-amber-400 px-5 py-3 rounded transition-colors flex items-center gap-2">
              Access Open-Source Curriculum <BookAIcon />
            </a>

            <a href="#contact" className="border border-gray-700 hover:border-gray-500 text-gray-300 px-5 py-3 rounded transition-colors">
              Request System Architecture
            </a>
          </div>
        </section>

        {/* Structured Engineering Stack Section */}
        <section id="stack" className="pt-24 space-y-8">
          <div className="border-t border-gray-800/80 pt-12">
            <h2 className="text-xs font-mono tracking-widest text-gray-500 uppercase">02 // Core Architecture Stacks</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#161b22]/50 border border-gray-800/80 p-6 rounded-lg space-y-4 hover:border-amber-600/30 transition-colors">
              <div className="w-10 h-10 rounded bg-amber-950/30 flex items-center justify-center text-amber-500 border border-amber-500/20">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">01 / Hardware & Firmware</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Designing reliable computing cores ready for deployment conditions.</p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                <span className="bg-[#21262d] px-2 py-0.5 rounded text-gray-300">Arduino C++</span>
                <span className="bg-[#21262d] px-2 py-0.5 rounded text-gray-300">ARM Cortex</span>
                <span className="bg-[#21262d] px-2 py-0.5 rounded text-gray-300">PCB Design</span>
              </div>
            </div>

            <div className="bg-[#161b22]/50 border border-gray-800/80 p-6 rounded-lg space-y-4 hover:border-emerald-600/30 transition-colors">
              <div className="w-10 h-10 rounded bg-emerald-950/30 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">02 / Distributed Web App</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Developing real-time dashboards to display telemetry cleanly.</p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                <span className="bg-[#21262d] px-2 py-0.5 rounded text-gray-300">Next.js</span>
                <span className="bg-[#21262d] px-2 py-0.5 rounded text-gray-300">React 19</span>
                <span className="bg-[#21262d] px-2 py-0.5 rounded text-gray-300">TailwindCSS</span>
              </div>
            </div>

            <div className="bg-[#161b22]/50 border border-gray-800/80 p-6 rounded-lg space-y-4 hover:border-blue-600/30 transition-colors">
              <div className="w-10 h-10 rounded bg-blue-950/30 flex items-center justify-center text-blue-400 border border-blue-500/20">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">03 / Communication Bus</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Configuring cloud paths and local databases to secure operations.</p>
              <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                <span className="bg-[#21262d] px-2 py-0.5 rounded text-gray-300">MQTT Protocol</span>
                <span className="bg-[#21262d] px-2 py-0.5 rounded text-gray-300">Firebase</span>
                <span className="bg-[#21262d] px-2 py-0.5 rounded text-gray-300">WebSockets</span>
              </div>
            </div>
          </div>
        </section>

        {/* Field-Tested Systems Section */}
        <section id="systems" className="pt-24 space-y-8">
          <div className="border-t border-gray-800/80 pt-12">
            <h2 className="text-xs font-mono tracking-widest text-gray-500 uppercase">03 // Active Deployments & Specs</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* System 1 Card: Smart Grid */}
            <div className="bg-[#161b22]/30 border border-gray-800/80 rounded-xl p-6 space-y-6 relative overflow-hidden group hover:border-amber-500/20 transition-all">
              <div className="absolute top-0 right-0 bg-amber-500/10 text-amber-500 border-b border-l border-gray-800 font-mono text-[10px] px-3 py-1 rounded-bl">
                📍 FIELD-TESTED / CAMEROON
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight">Decentralized Smart-Grid Node</h3>
                <p className="text-sm text-gray-400 leading-relaxed">A resilient telemetry routing system built to balance micro-grid loading anomalies and power surges locally.</p>
              </div>
              <div className="bg-[#0d1117] border border-gray-800/80 rounded p-4 font-mono text-xs space-y-2">
                <div className="text-[10px] text-gray-500 border-b border-gray-800 pb-1 uppercase tracking-wider">🛠️ System Bill of Materials (BOM)</div>
                <div className="grid grid-cols-2 text-gray-300 gap-y-1">
                  <div>• Core Controller:</div><div className="text-amber-500">ESP32-WROOM-32E</div>
                  <div>• Telemetry Unit:</div><div className="text-gray-400">PZEM-004T V3.0</div>
                  <div>• Local Data Bus:</div><div className="text-gray-400">RS485 / Modbus RTU</div>
                  <div>• Edge Storage:</div><div className="text-gray-400">MicroSD SPI Shield</div>
                </div>
              </div>
              <div className="flex gap-4 font-mono text-xs pt-2">
                <span className="flex items-center gap-1.5 text-emerald-400 bg-emerald-950/30 border border-emerald-500/10 px-2 py-1 rounded">Active V2.4</span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors ml-auto">
                  {/* Replace the Github icon lines inside your cards with this clean raw SVG inline element */}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  Source Specs ↗
                </a>
              </div>
            </div>

            {/* System 2 Card: NexarLink */}
            <div className="bg-[#161b22]/30 border border-gray-800/80 rounded-xl p-6 space-y-6 relative overflow-hidden group hover:border-blue-500/20 transition-all">
              <div className="absolute top-0 right-0 bg-blue-500/10 text-blue-400 border-b border-l border-gray-800 font-mono text-[10px] px-3 py-1 rounded-bl">🌐 OPEN-SOURCE PIPELINE</div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight">NexarLink DIY Gateways</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Real-time distributed network controller interface for tracking wireless mesh sensors over low-bandwidth channels.</p>
              </div>
              <div className="bg-[#0d1117] border border-gray-800/80 rounded p-4 font-mono text-xs space-y-2">
                <div className="text-[10px] text-gray-500 border-b border-gray-800 pb-1 uppercase tracking-wider">🛠️ System Bill of Materials (BOM)</div>
                <div className="grid grid-cols-2 text-gray-300 gap-y-1">
                  <div>• Radio Module:</div><div className="text-blue-400">LoRa SX1278 (433MHz)</div>
                  <div>• Local Processor:</div><div className="text-gray-400">ATMega328P Core</div>
                  <div>• Power Bus:</div><div className="text-gray-400">MP2307 DC-DC Buck</div>
                  <div>• Comms Interface:</div><div className="text-gray-400">MQTT over WebSockets</div>
                </div>
              </div>
              <div className="flex gap-4 font-mono text-xs pt-2">
                <span className="flex items-center gap-1.5 text-blue-400 bg-blue-950/30 border border-blue-500/10 px-2 py-1 rounded">DIY Stack V1.0</span>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors ml-auto">
                  {/* Replace the Github icon lines inside your cards with this clean raw SVG inline element */}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  Clone Files ↗
                </a>
              </div>{/* Replace the Github icon lines inside your cards with this clean raw SVG inline element */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>

            </div>
          </div>
        </section>
        {/* Secure Architecture Inquiries (Contact Terminal Form) */}
        <section id="contact" className="pt-24 space-y-8">
          <div className="border-t border-gray-800/80 pt-12">
            <h2 className="text-xs font-mono tracking-widest text-gray-500 uppercase">04 // Secure Terminal Node</h2>
          </div>

          <div className="bg-[#161b22]/30 border border-gray-800/80 rounded-xl p-6 max-w-2xl mx-auto space-y-6">
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div className="flex items-center gap-2 font-mono text-xs text-gray-400">
                <Terminal className="w-4 h-4 text-emerald-500" />
                <span>CHADASH_SECURE_MAIL_BUS // INBOUND</span>
              </div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></div>
            </div>

            <form className="space-y-4 text-sm font-mono" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-gray-500 text-xs uppercase block">Identity Name</label>
                  <input
                    name="identity"
                    type="text"
                    required
                    placeholder="Your Name or Call Sign"
                    className="w-full bg-[#0d1117] border border-gray-800 rounded p-2.5 focus:outline-none focus:border-amber-500 text-gray-200 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-gray-500 text-xs uppercase block">Return Communication Routing (Email)</label>
                  <input name="routing" type="email" required placeholder="name@domain.com" className="w-full bg-[#0d1117] border border-gray-800 rounded p-2.5 focus:outline-none focus:border-amber-500 text-gray-200 transition-colors" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-gray-500 text-xs uppercase block">System Architecture Requirements / Message Payload</label>
                <textarea name="payload" required rows={4} placeholder="Describe the system payload parameters or collaboration objectives..." className="w-full bg-[#0d1117] border border-gray-800 rounded p-2.5 focus:outline-none focus:border-amber-500 text-gray-200 transition-colors resize-none"></textarea>
              </div>

              <button type="submit" disabled={isPending} className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-800/50 disabled:text-gray-500 text-white font-bold p-3 rounded font-mono text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed">
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
                    Modulating Packet Frequencies...
                  </>
                ) : "Transmit Packet "}
                <RocketIcon className='w-4 h-4' /></button>

              {/* Status Display Feed */}
              {state && (
                <div className={`mt-4 p-3 rounded border text-xs font-mono flex items-start gap-2.5 ${state.success
                  ? 'bg-emerald-950/30 text-emerald-400 border-emerald-500/20'
                  : 'bg-red-950/30 text-red-400 border-red-500/20'
                  }`}>
                  {state.success ? <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" /> : <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                  <span>{state.message}</span>
                </div>
              )}
            </form>
          </div>
        </section>
      </div>

      {/* Global Engineering Footer */}
      <footer className="border-t border-gray-800/60 py-8 px-6 text-center text-xs font-mono text-gray-500">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© 2026 CHADASH AUTOMATION. ALL REFS RESERVED.</div>
          <div className="flex gap-4 text-gray-400">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition-colors">GITHUB</a>
            <span className="text-gray-700">//</span>
            <a href="#contact" className="hover:text-amber-500 transition-colors">SIGNAL</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
