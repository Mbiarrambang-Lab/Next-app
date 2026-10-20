'use client';

import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { ArrowLeft, ShoppingBag, Box } from 'lucide-react';

import plcImage from '@/app/images/plc-x1.jpg';
import expansionImage from '@/app/images/expansion-card.jpg';
import picowImage from '@/app/images/picow-shell.jpg';

interface ShopItem {
  id: string;
  name: string;
  image: StaticImageData | string;
  tagline: string;
  price: string;
  compatibility: string;
  features: string[];
  status: 'In Stock' | 'Pre-Order' | 'Custom Run';
}

const shopInventory: ShopItem[] = [
  {
    id: 'Prod_01',
    name: 'Chadash PLC-X1 V1.1',
    image: plcImage,
    tagline: 'Ruggedized DIN-rail and Compact Form Factor with additional modbus outlet for more modbus I/O cards.',
    price: '15,000 XAF',
    compatibility: 'ESP32 WROOM/NodeMCU Core, Relay Shields, Terminal Blocks',
    features: ['Snap-fit modular lid with secure screw anchors', 'Optimized cable glands and antenna port clearance', 'Thermal ventilation grilles for continuous operation'],
    status: 'In Stock'
  },
  {
    id: 'Prod_02',
    name: 'Chadash I/O Expansion Cards (Arduino-Based)',
    image: expansionImage,
    tagline: 'Modular expansion cards designed specifically to plug into the Chadash PLC-X1 V1.1 Modbus bus line.',
    price: '21,000 XAF',
    compatibility: 'Chadash PLC-X1 V1.1, Arduino Atmega Core, PZEM-004T Module',
    features: ['Modular bus pin alignment', 'Robust industrial screw terminal blocks', 'Onboard voltage regulation & surge protection'],
    status: 'In Stock'
  },
  {
    id: 'Prod_03',
    name: 'Chadash PicoW Prototyping Shell',
    image: picowImage,
    tagline: 'Sleek desk-side prototyping enclosure and 3D industrial grade case for Raspberry Pi Pico W micro-Python units.',
    price: '11,000 XAF',
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
            <ShoppingBag className="w-3.5 h-3.5" /> Production-Ready Hardware Enclosures & PLCs
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineered 3D Cases & Industrial PLCs
          </h1>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
            Durable, field-tested ESP32 PLCs, modular expansion cards, and 3D printed enclosures engineered specifically for rigorous off-grid deployment across Africa and worldwide.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopInventory.map((item) => (
            <div key={item.id} className="bg-[#161b22]/90 border border-gray-800 rounded-xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-amber-500/30 transition-all">
              
              {/* Product Image Window */}
              <div className="relative w-full h-48 bg-[#0d1117] border-b border-gray-800">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-[#161b22]/90 border border-gray-700 text-[10px] text-amber-400 px-2.5 py-1 rounded shadow">
                  {item.status}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-xs text-amber-500 font-bold">{item.price}</span>
                    <span className="text-[10px] text-gray-500">REF: #{item.id}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">{item.name}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.tagline}</p>

                  <div className="bg-[#0d1117] border border-gray-800 rounded p-2.5 text-[11px] space-y-1">
                    <span className="text-gray-500 uppercase text-[9px] block">Compatibility Specs:</span>
                    <span className="text-gray-300">{item.compatibility}</span>
                  </div>

                  <ul className="space-y-1.5 text-xs text-gray-300">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0"></span>
                        <span className="text-[11px]">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-800 mt-4">
                  <a 
                    href="/#contact" 
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs py-2.5 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    ORDER HARDWARE <Box className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Print & Industrial Order Inquiry Box */}
        <div className="bg-[#161b22] border border-amber-500/20 rounded-xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-lg font-bold text-white">Need Custom PLC Assembly or Enclosure Specs?</h3>
          <p className="text-xs text-gray-400 max-w-xl mx-auto leading-relaxed">
            We provide custom firmware solutions, DIN-rail PCB assembly, and custom 3D printing runs for industrial automated deployments across Africa and globally.
          </p>
          <div>
            <a 
              href="/#contact" 
              className="inline-block bg-transparent border border-amber-500 text-amber-400 hover:bg-amber-950/30 font-bold text-xs px-6 py-3 rounded transition-colors"
            >
              REQUEST CUSTOM HARDWARE ARCHITECTURE
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}