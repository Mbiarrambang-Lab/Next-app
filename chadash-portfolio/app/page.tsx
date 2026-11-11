'use client';

import React, { useActionState, startTransition } from 'react';
import Cantact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Stations from './components/Stations'
import TopNav from './components/TopNav'


export default function Home() {

  return (
    <main
      className="min-h-screen text-[#f0f6fc] selection:bg-amber-600 selection:text-white relative font-sans"
      style={{
        backgroundColor: '#0d1117',
        backgroundImage: 'linear-gradient(to right, #21262d 1px, transparent 1px), linear-gradient(to bottom, #21262d 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      <TopNav />
      <Hero />
      <Stations />
      <Cantact />
      <Footer />
    </main>
  );
}