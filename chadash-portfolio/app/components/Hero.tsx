'use client';

import React from 'react';
import Image from 'next/image';
import heroImage from '../images/plc-x1.jpg';
import { ArrowUpRight, BookOpen, FlagIcon } from 'lucide-react';

export default function Hero() {
  return (
    <div className="max-w-6xl mx-auto px-6 pt-12 md:pt-16 pb-16 relative z-10">
      <section id="about" className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Column: Hero Text & CTAs */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-950/40 text-amber-400 border border-amber-500/20 px-3.5 py-1.5 text-xs rounded-full font-medium">
            Engineered in Buea, Cameroon <FlagIcon className="w-3.5 h-3.5" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-white">
            Smart automation controllers and custom hardware builds and wiring for{' '}
            <span className="text-amber-500">reliable performance</span>.
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            We design, wire and manufacture practical industrial, residential and commercial automation tools, smart power controllers, and durable 3D-printed protective enclosures tailored for local businesses and makers worldwide.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-sm">
            <a
              href="/shop"
              className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-amber-900/20"
            >
              Browse Hardware Shop
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="/docs"
              className="border border-gray-700 hover:border-gray-500 bg-[#161b22]/80 text-gray-200 px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              View Free Guides & Manuals <BookOpen className="w-4 h-4 text-amber-500" />
            </a>
          </div>
        </div>

        {/* Right Column: Latest Product Showcase */}
        <div className="lg:col-span-6">
          <div className="relative bg-[#161b22]/90 border border-gray-800 hover:border-amber-500/40 rounded-2xl p-4 sm:p-5 shadow-2xl transition-all group">
            <div className="absolute -inset-1 bg-gradient-to-tr from-amber-500/15 via-transparent to-emerald-500/10 rounded-2xl blur-xl -z-10 opacity-75 group-hover:opacity-100 transition-opacity" />

            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-2 bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                New Release
              </span>
              <span className="text-xs font-mono text-gray-400">IN STOCK</span>
            </div>

            <div className="relative w-full aspect-[4/3] bg-[#0d1117] border border-gray-800/80 rounded-xl overflow-hidden">
              <Image
                src={heroImage}
                alt="Chadash Latest Smart PLC Controller"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-white">
                  Chadash Smart Power & PLC Unit
                </h2>
                <p className="text-xs sm:text-sm text-gray-400">
                  DIN-rail industrial controller with custom 3D-printed IP54 enclosure
                </p>
              </div>

              <a
                href="/shop"
                className="flex-shrink-0 bg-gray-800 hover:bg-amber-600 text-white text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1.5"
              >
                Inspect <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
