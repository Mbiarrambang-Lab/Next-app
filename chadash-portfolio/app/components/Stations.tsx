'use client';

import React from 'react';
import Image from 'next/image';
import { STATIONS } from '../utils/docs';
import { ArrowUpRight } from 'lucide-react';

const SPEC_ROWS = [
  { label: 'Power Input', key: 'power' as const },
  { label: 'I/O Channels', key: 'channels' as const },
  { label: 'Enclosure', key: 'enclosure' as const },
  { label: 'Application', key: 'application' as const },
];

export default function Stations() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 relative z-10">
      <section
        id="products"
        className="grid lg:grid-cols-12 border border-gray-800 rounded-2xl overflow-hidden bg-[#161b22]/90 shadow-2xl"
      >
        {/* Left Panel: Wireframe Intro Block */}
        <div className="lg:col-span-4 bg-gradient-to-b from-[#1c232d] to-[#12171f] p-8 sm:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-800 space-y-5">
          <span className="text-xs font-semibold tracking-widest text-amber-500 uppercase">
            Station Lineup
          </span>

          <div className="space-y-1.5">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Control Stations
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-amber-400 leading-snug">
              Compare Specs
            </p>
            <p className="text-base sm:text-lg text-gray-300 font-medium">
              Find the right model
            </p>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed">
            Compare pre-wired automation stations, power ratings, and custom 3D-printed enclosures built for reliable deployment.
          </p>

          <div className="pt-2">
            <a
              href="/docs"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-lg shadow-amber-900/20"
            >
              Explore All Docs <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Panel: Dynamic Station Comparison Matrix */}
        <div className="lg:col-span-8 overflow-x-auto bg-[#0d1117]/70">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="w-32 sm:w-36 p-4 border-r border-gray-800 align-bottom">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-gray-500">
                    Station Specs
                  </span>
                </th>

                {STATIONS.map((station, idx) => (
                  <th
                    key={station.slug}
                    className={`p-4 align-top text-center ${
                      idx < STATIONS.length - 1 ? 'border-r border-gray-800' : ''
                    }`}
                  >
                    <a href={`/docs/${station.slug}`} className="flex flex-col items-center space-y-2.5 group">
                      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-[#161b22] border border-gray-700/80 group-hover:border-amber-500/60 shadow-md transition-colors">
                        <Image
                          src={station.image}
                          alt={station.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors leading-tight line-clamp-2">
                          {station.name}
                        </div>
                        <div className="text-[11px] text-amber-400/90 font-medium mt-0.5">
                          {station.subtitle}
                        </div>
                      </div>
                    </a>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-800 text-xs sm:text-sm">
              {SPEC_ROWS.map((row) => (
                <tr key={row.key} className="hover:bg-[#161b22]/50 transition-colors">
                  <td className="p-3.5 sm:p-4 font-semibold text-gray-400 border-r border-gray-800 bg-[#161b22]/30">
                    {row.label}
                  </td>
                  {STATIONS.map((station, idx) => (
                    <td
                      key={station.slug + row.key}
                      className={`p-3.5 sm:p-4 text-center text-gray-200 ${
                        idx < STATIONS.length - 1 ? 'border-r border-gray-800' : ''
                      }`}
                    >
                      {station[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}