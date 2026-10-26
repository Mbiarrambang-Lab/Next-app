'use client';

import React, { useActionState, startTransition } from 'react';
import Image from 'next/image';
import facebookIcon from '@/public/facebook.jpeg';
import linkedInIcon from '@/public/LinkedIn.jpeg';
import youTubeIcon from '@/public/YouTube.jpeg';

import {
  Cpu,
  ShieldCheck,
  Mail,
  ArrowUpRight,
  AlertTriangle,
  CheckCircle2,
  Loader2,
  BookOpen,
  ShoppingBag,
  Send,
  FlagIcon,
} from 'lucide-react';
import { transmitPacket } from './utils/actions';


export default function Home() {
  const [state, formAction, isPending] = useActionState(transmitPacket, null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <main
      className="min-h-screen text-[#f0f6fc] selection:bg-amber-600 selection:text-white relative font-sans"
      style={{
        backgroundColor: '#0d1117',
        backgroundImage: 'linear-gradient(to right, #21262d 1px, transparent 1px), linear-gradient(to bottom, #21262d 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >

      {/* Navigation Bar */}
      <header className="border-b border-gray-800/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4 bg-[#0d1117]/90">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 flex-shrink-0 bg-[#161b22] border border-gray-800 rounded-full overflow-hidden p-1 shadow-md">
              <Image src="/logo.png" alt="Chadash Automation Logo" fill className="object-contain scale-105" priority />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-bold text-base tracking-tight leading-none">CHADASH</span>
              <span className="text-amber-500 font-semibold text-[10px] tracking-wider mt-1 leading-none">AUTOMATION</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-x-8 text-sm font-medium text-gray-300">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#products" className="hover:text-amber-400 transition-colors">Products</a>
            <a href="/shop" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-amber-400">
              <ShoppingBag className="w-4 h-4" /> 3D Shop
            </a>
            <a href="/docs" className="hover:text-amber-400 transition-colors">Guides & Docs</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </nav>

          <a href="#contact" className="text-xs bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 px-3.5 py-2 rounded-lg font-medium flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Ready to Order
          </a>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 pb-20 relative z-10 space-y-24">

        {/* Hero Section */}
        <section id="about" className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-950/40 text-amber-400 border border-amber-500/20 px-3.5 py-1.5 text-xs rounded-full font-medium">
            Engineered in Buea, Cameroon <FlagIcon className="w-3.5 h-3.5" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-white">
            Smart automation controllers and custom hardware builds and wiring for <span className="text-amber-500">reliable performance</span>.
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            We design, wire and manufacture practical industrial, residential and commercial automation tools, smart power controllers, and durable 3D-printed protective enclosures tailored for local businesses and makers worldwide.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-sm">
            <a href="/shop" className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors flex items-center gap-2 shadow-lg shadow-amber-900/20">
              Browse Hardware Shop
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a href="/docs" className="border border-gray-700 hover:border-gray-500 bg-[#161b22]/80 text-gray-200 px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
              View Free Guides & Manuals <BookOpen className="w-4 h-4 text-amber-500" />
            </a>
          </div>
        </section>

        {/* What We Do / Features Section */}
        <section id="products" className="space-y-8">
          <div className="border-t border-gray-800/80 pt-12">
            <h2 className="text-xs font-semibold tracking-widest text-amber-500 uppercase">What We Build</h2>
            <p className="text-2xl font-bold text-white mt-1">Reliable hardware solutions for everyday needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#161b22]/90 border border-gray-800/80 p-6 rounded-2xl space-y-4 shadow-xl hover:border-amber-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-950/40 flex items-center justify-center text-amber-400 border border-amber-500/20">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Industrial PLCs</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Compact, programmable controllers designed to handle power monitoring, equipment control, and automation smoothly.</p>
            </div>

            <div className="bg-[#161b22]/90 border border-gray-800/80 p-6 rounded-2xl space-y-4 shadow-xl hover:border-emerald-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/40 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">3D Protective Cases</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Durable, weather-resistant plastic enclosures and wall mounts printed locally to protect electronics from dust and moisture.</p>
            </div>

            <div className="bg-[#161b22]/90 border border-gray-800/80 p-6 rounded-2xl space-y-4 shadow-xl hover:border-blue-500/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-950/40 flex items-center justify-center text-blue-400 border border-blue-500/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Open Learning Guides</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Step-by-step documentation and video walkthroughs to help students and hobbyists learn electronics and programming.</p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="pt-12 space-y-8">
          <div className="border-t border-gray-800/80 pt-12">
            <h2 className="text-xs font-semibold tracking-widest text-amber-500 uppercase">Get In Touch</h2>
            <p className="text-2xl font-bold text-white mt-1">Send us an inquiry or order request</p>
          </div>

          <div className="bg-[#161b22]/95 border border-gray-800/80 rounded-2xl p-8 max-w-2xl mx-auto space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-gray-800 pb-4">
              <div className="flex items-center gap-2.5 text-sm text-gray-300 font-medium">
                <Mail className="w-4 h-4 text-amber-500" />
                <span>Direct Message to Founder</span>
              </div>
              <span className="text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                Replies within 24 hours
              </span>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-gray-400 text-xs font-medium block">Your Name</label>
                  <input
                    name="identity"
                    type="text"
                    required
                    placeholder="e.g. John Smith"
                    className="w-full bg-[#0d1117] border border-gray-800 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500 text-gray-200 transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-gray-400 text-xs font-medium block">Your Email Address</label>
                  <input
                    name="routing"
                    type="email"
                    required
                    placeholder="name@example.com"
                    className="w-full bg-[#0d1117] border border-gray-800 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500 text-gray-200 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-gray-400 text-xs font-medium block">What would you like to build or order?</label>
                <textarea
                  name="payload"
                  required
                  rows={4}
                  placeholder="Tell us about your project or the products you want to buy..."
                  className="w-full bg-[#0d1117] border border-gray-800 rounded-lg p-3 text-sm focus:outline-none focus:border-amber-500 text-gray-200 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-amber-800/50 text-white font-bold p-3.5 rounded-lg text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed shadow-lg shadow-amber-900/20"
              >
                {isPending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-amber-200" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {state && (
                <div className={`mt-4 p-3.5 rounded-xl border text-xs flex items-start gap-2.5 ${state.success
                  ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30'
                  : 'bg-red-950/40 text-red-300 border-red-500/30'
                  }`}>
                  {state.success ? <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" /> : <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />}
                  <span>{state.message}</span>
                </div>
              )}
            </form>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800/80 py-8 px-6 text-center text-xs text-gray-400 bg-[#0d1117]/95">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>© 2026 Chadash Automation. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="/shop" className="hover:text-amber-400 transition-colors">3D Shop</a>
            <a href="/docs" className="hover:text-amber-400 transition-colors">Documentation</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>
          <div className="follow-us flex items-center gap-4">
            <span className="font-semibold text-gray-400">Follow us:</span>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/chadashautomation"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src={facebookIcon}
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="p-1 border border-gray-600 rounded-full object-contain"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/chadash-automation"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src={linkedInIcon}
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="p-1 border border-gray-600 rounded-full object-contain"
                />
              </a>

              <a
                href="https://www.youtube.com/@chadashautomation"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src={youTubeIcon}
                  alt="YouTube"
                  width={24}
                  height={24}
                  className="p-1 border border-gray-600 rounded-full object-contain"
                />
              </a>
            </div>
          </div>

        </div>
      </footer>
    </main>
  );
}