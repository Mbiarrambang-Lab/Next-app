'use client';

import React, { useActionState, startTransition } from 'react';
import Cantact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Services from './components/Services'
import Stations from './components/Stations'
import TopNav from './components/TopNav'


export default function Home() {

  return (
    <main
      className="min-h-screen bg-[#0d1117] text-[#f0f6fc] selection:bg-amber-600 selection:text-white relative font-sans"
    >
      <TopNav />
      <Hero />
      <Services />
      <Stations />
      <Cantact />
      <Footer />
    </main>
  );
}