'use client';

import React from 'react';
import Image from 'next/image';
import { Search, ShoppingBag, CircleUserRound } from 'lucide-react';

export default function TopNav() {
  return (
    <header className="border-b border-gray-800/80 backdrop-blur-md sticky top-0 z-50 px-4 sm:px-6 py-3 bg-[#0d1117]/90">
      <div className="max-w-6xl mx-auto flex flex-col gap-3">
        
        {/* Top Row: Logo, Search Bar, Action Icons */}
        <div className="flex items-center justify-between gap-4">
          <a href="#about" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-10 h-10 bg-[#161b22] border border-gray-800 rounded-full overflow-hidden p-1 shadow-md">
              <Image
                src="/logo.png"
                alt="Chadash Automation Logo"
                fill
                className="object-contain scale-105"
                priority
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-white font-bold text-base tracking-tight leading-none">
                CHADASH
              </span>
              <span className="text-amber-500 font-semibold text-[10px] tracking-wider mt-1 leading-none">
                AUTOMATION
              </span>
            </div>
          </a>

          {/* Search Bar (Desktop & Tablet) */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="hidden md:flex items-center flex-1 max-w-xl bg-[#161b22] border border-gray-800 rounded-full px-4 py-1.5 text-sm focus-within:border-amber-500 transition-colors"
          >
            <select
              defaultValue="cat"
              aria-label="Product Category"
              className="bg-[#161b22] text-gray-200 pr-3 py-1 text-sm border-r border-gray-700 focus:outline-none cursor-pointer"
            >
              <option value="" className="bg-[#161b22] text-white">All category</option>
              <option value="dog" className="bg-[#161b22] text-white">PLC</option>
              <option value="cat" className="bg-[#161b22] text-white">Stations</option>
              <option value="hamster" disabled className="bg-[#161b22] text-gray-500">
                I/O cards
              </option>
            </select>

            <input
              type="text"
              placeholder="Search PLCs, enclosures, guides..."
              className="bg-transparent px-3 py-1 w-full text-sm focus:outline-none text-gray-200 placeholder-gray-500"
            />

            <button
              type="submit"
              aria-label="Search"
              className="text-gray-400 hover:text-amber-400 transition-colors p-1"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Right Action Icons */}
          <div className="flex items-center gap-3">
            <a
              href="/shop"
              aria-label="Shopping Bag"
              className="relative p-2 rounded-full text-emerald-400 hover:bg-[#161b22] border border-transparent hover:border-gray-800 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-400" />
            </a>

            <a
              href="#contact"
              aria-label="Account"
              className="p-2 rounded-full text-gray-300 hover:text-white hover:bg-[#161b22] border border-transparent hover:border-gray-800 transition-colors"
            >
              <CircleUserRound className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom Row: Centered Navigation Links */}
        <nav className="flex items-center justify-center gap-x-6 sm:gap-x-10 text-sm font-medium text-gray-300 overflow-x-auto border-t border-gray-800/60 pt-2.5">
          <a href="#about" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            Home
          </a>
          <a href="#products" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            Products
          </a>
          <a href="#contact" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            Support
          </a>
          <a href="/docs" className="hover:text-amber-400 transition-colors whitespace-nowrap">
            Academy
          </a>
          <a
            href="/shop"
            className="hover:text-amber-300 transition-colors flex items-center gap-1.5 text-amber-400 font-semibold whitespace-nowrap"
          >
            Shop
          </a>
        </nav>

      </div>
    </header>
  );
}
