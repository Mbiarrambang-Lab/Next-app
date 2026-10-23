'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ShoppingBag, Box, CheckCircle, ShoppingCart } from 'lucide-react';
import { shopInventory, ShopItem } from '@/app/products';
import { useCart } from '@/app/context/CartContext';

export default function ShopCatalog() {
  const { cart, addToCart, totalItems } = useCart();
  const [addedId, setAddedId] = useState<string | null>(null);

  const handleAdd = (item: ShopItem) => {
    addToCart(item);
    setAddedId(item.id);
    setTimeout(() => setAddedId(null), 1500);
  };

  return (
    <main
      className="min-h-screen bg-[#0d1117] text-gray-200 font-sans relative selection:bg-amber-600 selection:text-white pb-20"
      style={{
        backgroundColor: '#0d1117',
        backgroundImage: 'linear-gradient(to right, #21262d 1px, transparent 1px), linear-gradient(to bottom, #21262d 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >

      {/* Navigation Bar with Cart Badge */}
      <header className="border-b border-gray-800/80 bg-[#0d1117]/90 backdrop-blur sticky top-0 z-50 px-6 py-3">
        <div className="max-w-5xl mx-auto flex justify-between items-center gap-4">
          <Link
            href="/"
            className="text-xs text-gray-300 hover:text-amber-400 border border-gray-800 bg-[#161b22] px-3.5 py-2 rounded-lg transition-colors flex items-center gap-2 font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>

          <div className="flex items-center gap-4">
            <div className="text-xs text-amber-500 font-semibold tracking-wider uppercase hidden sm:block">Chadash Automation // Shop</div>

            {/* Cart Button */}
            <Link
              href="/cart"
              className="relative bg-[#161b22] border border-gray-800 hover:border-amber-500/50 px-3.5 py-2 rounded-xl flex items-center gap-2 text-xs font-semibold text-white transition-colors"
            >
              <ShoppingCart className="w-4 h-4 text-amber-500" />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-black text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Catalog View */}
      <div className="max-w-5xl mx-auto px-6 py-10 relative z-10 space-y-10">

        {/* Header Intro */}
        <div className="space-y-2 border-b border-gray-800 pb-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-amber-950/40 text-amber-400 border border-amber-500/20 px-3 py-1 text-xs rounded-full font-medium">
            <ShoppingBag className="w-3.5 h-3.5" /> Ready-to-Ship Hardware & Enclosures
          </div>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
            Devices & Protective Cases
          </h1>
          <p className="text-gray-300 text-xs md:text-sm max-w-xl leading-relaxed">
            Select multiple controllers, expansion cards, or prototyping shells and add them to your basket before checkout.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {shopInventory.map((item) => {
            const isJustAdded = addedId === item.id;
            return (
              <div
                key={item.id}
                className="w-full max-w-[210px] bg-[#161b22]/95 border border-gray-800 rounded-3xl overflow-hidden shadow-xl flex flex-col justify-between hover:border-amber-500/40 transition-all group"
              >

                {/* Card Header Section */}
                <div className="pt-4 px-3 text-center border-t-4 border-amber-500 bg-[#161b22]">
                  <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider block">
                    {item.status}
                  </span>
                  <h3 className="text-xs font-extrabold text-white tracking-tight mt-0.5 line-clamp-1">
                    {item.name}
                  </h3>
                </div>

                {/* Inset Image Box */}
                <div className="px-3 pt-2">
                  <div className="relative w-full h-28 bg-[#0d1117] rounded-2xl border border-gray-800/80 overflow-hidden shadow-inner">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-3.5 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-center">
                      <span className="text-base font-extrabold text-white tracking-tight block">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-[10px] text-gray-400 text-center leading-snug line-clamp-2">
                      {item.tagline}
                    </p>

                    <div className="bg-[#0d1117] border border-gray-800 rounded-lg p-1.5 text-[9px] space-y-0.5">
                      <span className="text-gray-500 uppercase text-[8px] font-semibold block">Compatibility:</span>
                      <span className="text-gray-300 block truncate">{item.compatibility}</span>
                    </div>

                    <ul className="space-y-1 text-[9px] text-gray-300">
                      {item.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle className="w-2.5 h-2.5 text-amber-500 flex-shrink-0" />
                          <span className="truncate">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleAdd(item);
                    }}
                    onTouchStart={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleAdd(item);
                    }}
                    className={`w-full font-extrabold text-[11px] py-3 tracking-wide transition-all flex items-center justify-center gap-1.5 cursor-pointer uppercase shadow-inner select-none touch-manipulation relative z-20 ${isJustAdded
                        ? 'bg-emerald-500 text-black'
                        : 'bg-amber-500 hover:bg-amber-600 text-black'
                      }`}
                  >
                    {isJustAdded ? 'ADDED! ✓' : 'ADD TO CART'} <Box className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </main>
  );
}