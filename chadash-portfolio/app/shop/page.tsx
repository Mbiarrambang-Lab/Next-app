'use client';

import React from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { ArrowLeft, ShoppingBag, Box, CheckCircle } from 'lucide-react';

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
    tagline: 'Rugged smart controller designed to safely manage power, equipment, and sensors in demanding environments.',
    price: '15,000 XAF',
    compatibility: 'ESP32 Smart Core, Standard Relays, Terminal Blocks',
    features: ['Secure snap-fit protective plastic case', 'Easy-to-wire cable ports and antenna clearance', 'Built-in ventilation for safe, continuous daily use'],
    status: 'In Stock'
  },
  {
    id: 'Prod_02',
    name: 'I/O Expansion Cards (Arduino-Based)',
    image: expansionImage,
    tagline: 'Plug-and-play circuit boards built to easily expand the number of sensors and switches connected to your main controller.',
    price: '21,000 XAF',
    compatibility: 'Chadash PLC-X1 V1.1, Arduino Atmega Core, Power Sensors',
    features: ['Simple plug-in connection design', 'Durable screw terminals for secure wiring', 'Built-in electrical surge protection'],
    status: 'In Stock'
  },
  {
    id: 'Prod_03',
    name: 'PicoW Prototyping Shell',
    image: picowImage,
    tagline: 'Clean, protective desk-side housing built specifically for Raspberry Pi Pico W electronic testing and projects.',
    price: '11,000 XAF',
    compatibility: 'Pi Pico / Pico W, Small Display Screens, Sensor Wires',
    features: ['Clear display view window slot', 'Bottom cable routing channels', 'Compact, neat footprint for your workspace'],
    status: 'Pre-Order'
  }
];

export default function ShopCatalog() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-gray-200 font-sans relative selection:bg-amber-600 selection:text-white"
      style={{
        backgroundColor: '#0d1117',
        backgroundImage: 'linear-gradient(to right, #21262d 1px, transparent 1px), linear-gradient(to bottom, #21262d 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      
      {/* Navigation Bar */}
      <header className="border-b border-gray-800/80 bg-[#0d1117]/90 backdrop-blur sticky top-0 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
          <Link 
            href="/" 
            className="text-xs text-gray-300 hover:text-amber-400 border border-gray-800 bg-[#161b22] px-3.5 py-2 rounded-lg transition-colors flex items-center gap-2 font-medium"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <div className="text-xs text-amber-500 font-semibold tracking-wider uppercase">Chadash Automation // Hardware Shop</div>
        </div>
      </header>

      {/* Main Catalog View */}
      <div className="max-w-5xl mx-auto px-6 py-12 relative z-10 space-y-12">
        
        {/* Header Intro */}
        <div className="space-y-4 border-b border-gray-800 pb-8">
          <div className="inline-flex items-center gap-2 bg-amber-950/40 text-amber-400 border border-amber-500/20 px-3.5 py-1.5 text-xs rounded-full font-medium">
            <ShoppingBag className="w-3.5 h-3.5" /> Ready-to-Ship Hardware & Enclosures
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Devices & Protective Cases
          </h1>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl leading-relaxed">
            Durable automation controllers, expansion boards, and custom 3D-printed plastic cases built to protect electronics and deliver reliable performance.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shopInventory.map((item) => (
            <div key={item.id} className="bg-[#161b22]/95 border border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition-all">
              
              {/* Product Image Window */}
              <div className="relative w-full h-48 bg-[#0d1117] border-b border-gray-800">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-cover"
                />
                <div className="absolute top-3 right-3 bg-[#161b22]/90 border border-gray-700 text-xs text-amber-400 font-medium px-3 py-1 rounded-full shadow">
                  {item.status}
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-base text-amber-500 font-bold">{item.price}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight">{item.name}</h3>
                  <p className="text-xs text-gray-300 leading-relaxed">{item.tagline}</p>

                  <div className="bg-[#0d1117] border border-gray-800 rounded-xl p-3 text-xs space-y-1">
                    <span className="text-gray-500 uppercase text-[10px] font-semibold block">Works With:</span>
                    <span className="text-gray-300">{item.compatibility}</span>
                  </div>

                  <ul className="space-y-2 text-xs text-gray-300 pt-1">
                    {item.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-800 mt-4">
                  <a 
                    href="/#contact" 
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-amber-900/20"
                  >
                    Order This Item <Box className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Inquiry Box */}
        <div className="bg-[#161b22] border border-amber-500/20 rounded-2xl p-8 text-center space-y-4 shadow-xl">
          <h3 className="text-lg font-bold text-white">Need a custom case size or specialized setup?</h3>
          <p className="text-xs text-gray-300 max-w-xl mx-auto leading-relaxed">
            We can design custom plastic enclosures, assemble circuit boards, and build specialized automation setups tailored to your exact project requirements.
          </p>
          <div className="pt-2">
            <a 
              href="/#contact" 
              className="inline-block bg-transparent border border-amber-500 text-amber-400 hover:bg-amber-950/30 font-semibold text-xs px-6 py-3 rounded-xl transition-colors"
            >
              Request a Custom Order
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}