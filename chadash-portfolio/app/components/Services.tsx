'use client';

import React from 'react';
import {
  ArrowUpRight,
  CircuitBoard,
  Factory,
  GraduationCap,
  Zap,
} from 'lucide-react';

const SERVICES = [
  {
    title: 'PCB Design & Manufacturing',
    description:
      'From schematic and PCB layout to prototyping and production-ready files, we help turn electronic ideas into reliable manufactured boards.',
    detail: 'Schematic design - PCB layout - Prototypes - China sourcing',
    icon: CircuitBoard,
  },
  {
    title: '3D Design, Prototyping, & Manufacturing',
    description:
      'We help you design, prototype, and manufacture 3D models, PCB assemblies, enclosures and custom hardware.',
    detail: 'Supplier sourcing - Quotation review - Quality coordination',
    icon: Factory,
  },
  {
    title: 'Automation Training',
    description:
      'Practical industrial automation training for beginners and technicians, covering PLCs, sensors, wiring, commissioning and control systems.',
    detail: 'Hands-on labs - PLC basics - Troubleshooting - Panels',
    icon: GraduationCap,
  },
  {
    title: 'Electrical Wiring Services',
    description:
      'Professional wiring and installation support for industrial plants, commercial buildings and residential projects.',
    detail: 'Industrial - Commercial - Residential - Maintenance',
    icon: Zap,
  },
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-4 sm:px-6 py-12 relative z-10">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold tracking-widest text-amber-500 uppercase">
            What we do
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering & Field Services
          </h2>
        </div>
        <p className="max-w-xl text-sm text-gray-400 leading-relaxed sm:text-right">
          End-to-end support from technical design and training to sourcing, manufacturing and installation.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {SERVICES.map((service) => {
          const Icon = service.icon;

          return (
            <article
              key={service.title}
              className="group rounded-2xl border border-gray-800 bg-[#161b22]/90 p-6 sm:p-7 shadow-xl transition-all hover:-translate-y-1 hover:border-amber-500/40"
            >
              <div className="flex items-start justify-between gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-950/40 text-amber-400">
                  <Icon className="h-6 w-6" />
                </div>
                <a
                  href="#contact"
                  aria-label={`Request ${service.title}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-700 text-gray-400 transition-colors group-hover:border-amber-500/60 group-hover:text-amber-400"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <h3 className="mt-5 text-xl font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                {service.description}
              </p>
              <div className="mt-5 border-t border-gray-800 pt-4 text-xs font-medium text-amber-400/90">
                {service.detail}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}