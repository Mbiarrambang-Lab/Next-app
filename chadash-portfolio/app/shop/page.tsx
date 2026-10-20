'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ShoppingBag, ShieldCheck, Box, ExternalLink } from 'lucide-react';

interface ShopItem {
  id: string;
  name: string;
  tagline: string;
  price: string;
  compatibility: string;
  features: string[];
  status: 'In Stock' | 'Pre-Order' | 'Custom Run';
}

const shopInventory: ShopItem[] = [
  {
    id: 'case-01',
    name: 'PulseBox V1.1 Industrial Enclosure',
    tagline: 'Ruggedized DIN-rail and wall-mountable ABS/PETG case designed for ESP32 & Relay node setups.',
    price: '$24.00',
    compatibility: 'ESP32 NodeMCU, Relay Shields, Terminal Blocks',
    features: ['Snap-fit modular lid with secure screw anchors', 'Optimized cable glands and antenna port clearance', 'Thermal ventilation grilles for continuous operation'],
    status: 'In Stock'
  },
  {
    id: 'case-02',
    name: 'Smart-Grid Field Node Shell',
    tagline: 'Weather-resistant protective housing built for remote off-grid sensor arrays across African infrastructural sites.',
    price: '$35.00',
    compatibility: 'Arduino Uno / Mega, PZEM-004T Module, Screw Terminals',
    features: ['IP54 dust and moisture-resistant design', 'External mounting brackets for utility poles or walls', 'Heavy-duty impact-resistant polymer print profile'],
    status: 'In Stock'
  },
  {
    id: 'case-03',
    name: 'PicoW Compact Breadboard Shell',
    tagline: 'Sleek desk-side prototyping enclosure for Raspberry Pi Pico W micro-Python development blocks.',
    price: '$18.00',
    compatibility: 'Pi Pico / Pico W, OLED Display Modules, Sensor Leads',
    features: ['Transparent OLED viewport window slot', 'Bottom cable breakout channels', 'Compact minimalist terminal footprint'],
    status: 'Pre-Order'
  }
];

export default function ShopCatalog() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-gray-200 font-mono relative selection:bg-amber-600 selection:text-white">
      
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #30363d 1px, transparent 1px),
            linear-gradient(to bottom, #30363d 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Navigation Bar */}
      <header className="border-b border-gray-800/80 bg-[#0d1117]/90 backdrop-blur sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
          <Link 
            href="/" 
            className="text-xs text-gray-400 hover:text-amber-500 border border-gray-800 bg-[#161b22] px-3 py-1.5 rounded transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> RETURN_HOME
          </Link>
          <div className="text-xs text-[#d97706] tracking-widest uppercase">CHADASH_AUTOMATION // HARDWARE & 3D CASE SHOP</div>
        </div>
      </header>

      {/* Main Catalog View */}
      <div className="max-w-5xl mx-auto px-6 py-12 relative z-10 space-y-12">
        
        {/* Header Intro */}
        <div className="space-y-4 border-b border-gray-800 pb-8">
          <div className="inline-flex items-center gap-2 bg-amber-950/40 text-amber-500 border border-amber-500/20 px-3 py-1 text-xs rounded-full">
            <ShoppingBag className="w-3.5 h-3.5" /> Production-Ready Hardware Enclosures
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineered 3D Cases & Maker Enclosures
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
            Durable, field-tested 3D printed enclosures engineered specifically to house custom IoT nodes, smart-grid controllers, and maker electronics globally.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {shopInventory.map((item) => (
            <div key={item.id} className="bg-[#161b22]/70 border border-gray-800 rounded-xl p-6 space-y-6 flex flex-col justify-between hover:border-amber-500/30 transition-all">
              <div className="space-y-4">
                <div className="flex justify-between items-start gap-4">
                  <span className="text-xs text-amber-500 font-bold">{item.price}</span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2.5 py-1 rounded">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white">{item.name}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.tagline}</p>

                <div className="bg-[#0d1117] border border-gray-800 rounded p-3 text-xs space-y-1">
                  <span className="text-gray-500 uppercase text-[10px] block">Compatibility Specs:</span>
                  <span className="text-gray-300">{item.compatibility}</span>
                </div>

                <ul className="space-y-2 text-xs text-gray-300">
                  {item.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-gray-800 flex items-center justify-between">
                <span className="text-[10px] text-gray-500">REF_ID: #{item.id}</span>
                <a 
                  href="#contact" 
                  className="bg-amber-600 hover:bg-amber-700 text-black font-bold text-xs px-4 py-2.5 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  ORDER ENCLOSURE <Box className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Print Inquiry Box */}
        <div className="bg-[#161b22] border border-amber-500/20 rounded-xl p-8 text-center space-y-4">
          <h3 className="text-lg font-bold text-white">Need a Custom Enclosure Design?</h3>
          <p className="text-xs text-gray-400 max-w-xl mx-auto leading-relaxed">
            We provide custom 3D modeling and prototyping services for embedded systems and industrial hardware deployments across Africa and worldwide.
          </p>
          <div>
            <a 
              href="/#contact" 
              className="inline-block bg-transparent border border-amber-500 text-amber-400 hover:bg-amber-950/30 font-bold text-xs px-6 py-3 rounded transition-colors"
            >
              REQUEST CUSTOM PRINT SPECIFICATION
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}