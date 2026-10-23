'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Lock, Mail, LogIn } from 'lucide-react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Grab current product query parameters from the URL if any exist
    const params = new URLSearchParams(window.location.search);
    const queryString = params.toString() ? `?${params.toString()}` : '';

    alert(`Signing in successfully! Redirecting to checkout...`);
    
    // Redirect to checkout carrying the product data
    window.location.href = `/checkout${queryString}`;
  };

  return (
    <main className="min-h-screen bg-[#0d1117] text-gray-200 font-sans flex flex-col justify-between p-6 relative"
      style={{
        backgroundColor: '#0d1117',
        backgroundImage: 'linear-gradient(to right, #21262d 1px, transparent 1px), linear-gradient(to bottom, #21262d 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      {/* Top Bar */}
      <header className="max-w-md w-mx mx-auto w-full flex justify-between items-center py-4">
        <Link
          href="/shop"
          className="text-xs text-gray-300 hover:text-amber-400 border border-gray-800 bg-[#161b22] px-3.5 py-2 rounded-lg transition-colors flex items-center gap-2 font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Shop
        </Link>
        <span className="text-xs text-amber-500 font-semibold tracking-wider uppercase">Chadash Automation</span>
      </header>

      {/* Sign In Card Box */}
      <div className="max-w-md w-full mx-auto bg-[#161b22]/95 border border-gray-800 rounded-3xl p-8 shadow-2xl space-y-6 my-auto">
        <div className="space-y-2 text-center">
          <div className="w-10 h-10 rounded-2xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-3">
            <LogIn className="w-5 h-5" />
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Welcome Back</h1>
          <p className="text-xs text-gray-400">Sign in to manage your orders, track kits, and view delivery updates.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0d1117] border border-gray-800 rounded-xl px-4 py-2.5 pl-10 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-500 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0d1117] border border-gray-800 rounded-xl px-4 py-2.5 pl-10 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-black font-extrabold text-xs py-3 rounded-xl uppercase tracking-wide transition-colors shadow-md shadow-amber-900/20 cursor-pointer mt-2"
          >
            Sign In to Account
          </button>
        </form>

        <div className="text-center pt-2 border-t border-gray-800 text-xs text-gray-400">
          Don&apos;t have an account yet?{' '}
          <Link href="/auth/signup" className="text-amber-400 font-semibold hover:underline">
            Create account
          </Link>
        </div>
      </div>

      <footer className="text-center text-[10px] text-gray-500 py-4">
        Chadash Automation Secure Portal © {new Date().getFullYear()}
      </footer>
    </main>
  );
}