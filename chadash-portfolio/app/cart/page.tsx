'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <main className="min-h-screen bg-[#0d1117] text-gray-200 font-sans relative pb-16"
      style={{
        backgroundColor: '#0d1117',
        backgroundImage: 'linear-gradient(to right, #21262d 1px, transparent 1px), linear-gradient(to bottom, #21262d 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      <header className="border-b border-gray-800/80 bg-[#0d1117]/90 backdrop-blur sticky top-0 z-50 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link 
            href="/shop" 
            className="text-xs text-gray-300 hover:text-amber-400 border border-gray-800 bg-[#161b22] px-3.5 py-2 rounded-lg transition-colors flex items-center gap-2 font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Continue Shopping
          </Link>
          <div className="text-xs text-amber-500 font-semibold tracking-wider uppercase">Your Shopping Basket</div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        <h1 className="text-2xl font-extrabold text-white flex items-center gap-2">
          <ShoppingCart className="w-6 h-6 text-amber-500" /> Review Basket Items
        </h1>

        {cart.length === 0 ? (
          <div className="bg-[#161b22]/95 border border-gray-800 rounded-3xl p-12 text-center space-y-4 shadow-xl">
            <p className="text-sm text-gray-400">Your basket is currently empty.</p>
            <Link 
              href="/shop" 
              className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-extrabold text-xs px-6 py-3 rounded-xl uppercase transition-colors"
            >
              Browse Hardware Shop
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Items List */}
            <div className="md:col-span-2 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="bg-[#161b22]/95 border border-gray-800 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-lg">
                  <div className="space-y-1">
                    <span className="text-[10px] text-amber-500 font-bold uppercase">{item.status}</span>
                    <h3 className="text-sm font-bold text-white">{item.name}</h3>
                    <p className="text-xs text-gray-400">Qty: {item.quantity} × {item.price}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-400 hover:text-red-300 p-2 rounded-lg hover:bg-red-950/30 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary Box */}
            <div className="bg-[#161b22]/95 border border-gray-800 rounded-2xl p-6 shadow-xl space-y-4 h-fit">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-gray-800 pb-3">Summary</h3>
              <div className="space-y-2 text-xs text-gray-300">
                <div className="flex justify-between">
                  <span className="text-gray-400">Total Items:</span>
                  <span>{cart.reduce((s, i) => s + i.quantity, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Shipping:</span>
                  <span>Calculated at checkout</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <Link 
                  href="/auth/signin"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-extrabold text-xs py-3.5 rounded-xl uppercase tracking-wide transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20"
                >
                  Proceed to Sign In & Checkout <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}