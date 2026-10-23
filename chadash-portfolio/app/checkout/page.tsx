'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, Phone, User, CheckCircle, Truck, MapPin } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();

  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    phone: '',
    city: 'Buea',
    quarter: '',
    notes: ''
  });

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    clearCart(); // Clear the basket upon successful order placement
  };

  if (orderPlaced) {
    return (
      <main className="min-h-screen bg-[#0d1117] text-gray-200 font-sans flex items-center justify-center p-6"
        style={{
          backgroundColor: '#0d1117',
          backgroundImage: 'linear-gradient(to right, #21262d 1px, transparent 1px), linear-gradient(to bottom, #21262d 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      >
        <div className="max-w-md w-full bg-[#161b22]/95 border border-gray-800 rounded-3xl p-8 text-center space-y-4 shadow-2xl">
          <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
            <CheckCircle className="w-6 h-6" />
          </div>
          <h1 className="text-xl font-extrabold text-white">Order Received Successfully!</h1>
          <p className="text-xs text-gray-400 leading-relaxed">
            Thank you for ordering with Chadash Automation. Our dispatch team in Buea will contact you via phone to coordinate delivery and Mobile Money payment.
          </p>
          <div className="pt-4">
            <Link 
              href="/shop" 
              className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-extrabold text-xs px-6 py-3 rounded-xl uppercase transition-colors"
            >
              Return to Hardware Shop
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d1117] text-gray-200 font-sans relative pb-16"
      style={{
        backgroundColor: '#0d1117',
        backgroundImage: 'linear-gradient(to right, #21262d 1px, transparent 1px), linear-gradient(to bottom, #21262d 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}
    >
      {/* Top Header */}
      <header className="border-b border-gray-800/80 bg-[#0d1117]/90 backdrop-blur sticky top-0 z-50 px-6 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link 
            href="/cart" 
            className="text-xs text-gray-300 hover:text-amber-400 border border-gray-800 bg-[#161b22] px-3.5 py-2 rounded-lg transition-colors flex items-center gap-2 font-medium"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Basket
          </Link>
          <div className="text-xs text-amber-500 font-semibold tracking-wider uppercase">Chadash Checkout Gateway</div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
        
        {/* Left Side: Dynamic Basket Summary */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-xl font-extrabold text-white flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-amber-500" /> Order Summary
            </h1>
            <p className="text-xs text-gray-400">Review your selected items before confirming shipment.</p>
          </div>

          <div className="bg-[#161b22]/95 border border-gray-800 rounded-2xl p-5 space-y-4 shadow-xl">
            {cart.length === 0 ? (
              <p className="text-xs text-gray-400 py-4 text-center">Your basket is empty. <Link href="/shop" className="text-amber-400 underline">Go to shop</Link></p>
            ) : (
              <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between items-center pb-3 border-b border-gray-800 text-xs">
                    <div>
                      <span className="text-white font-bold block">{item.name}</span>
                      <span className="text-gray-400 text-[10px]">Qty: {item.quantity}</span>
                    </div>
                    <span className="text-amber-400 font-extrabold">{item.price}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-2 border-t border-gray-800 space-y-2 text-xs text-gray-300">
              <div className="flex justify-between">
                <span className="text-gray-400">Shipping Estimate:</span>
                <span>Calculated by location</span>
              </div>
              <div className="pt-2 border-t border-gray-800 flex justify-between text-sm font-bold text-amber-400">
                <span>Fulfillment Hub:</span>
                <span>Buea, Cameroon</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Shipping & Location Form */}
        <div className="bg-[#161b22]/95 border border-gray-800 rounded-2xl p-6 shadow-xl space-y-6">
          <div className="space-y-1">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Truck className="w-4 h-4 text-amber-500" /> Shipping & Delivery Details
            </h2>
            <p className="text-xs text-gray-400">Where should we deliver your hardware kit in Cameroon?</p>
          </div>

          <form onSubmit={handleCheckoutSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">Full Name</label>
              <div className="relative">
                <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-3" />
                <input 
                  type="text" 
                  required
                  placeholder="Mbiarrambang Junior"
                  value={shippingInfo.fullName}
                  onChange={(e) => setShippingInfo({...shippingInfo, fullName: e.target.value})}
                  className="w-full bg-[#0d1117] border border-gray-800 rounded-xl px-4 py-2.5 pl-10 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">Phone Number (Mobile Money)</label>
              <div className="relative">
                <Phone className="w-4 h-4 text-gray-500 absolute left-3.5 top-3" />
                <input 
                  type="tel" 
                  required
                  placeholder="+237 6..."
                  value={shippingInfo.phone}
                  onChange={(e) => setShippingInfo({...shippingInfo, phone: e.target.value})}
                  className="w-full bg-[#0d1117] border border-gray-800 rounded-xl px-4 py-2.5 pl-10 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">City / Town</label>
                <select 
                  value={shippingInfo.city}
                  onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                  className="w-full bg-[#0d1117] border border-gray-800 rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none focus:border-amber-500 transition-colors"
                >
                  <option value="Buea">Buea</option>
                  <option value="Douala">Douala</option>
                  <option value="Yaounde">Yaoundé</option>
                  <option value="Bamenda">Bamenda</option>
                  <option value="Limbe">Limbé</option>
                  <option value="Other">Other Region</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-300 uppercase tracking-wider block">Quarter / Neighborhood</label>
                <input 
                  type="text" 
                  required
                  placeholder="Molyko, Check Point..."
                  value={shippingInfo.quarter}
                  onChange={(e) => setShippingInfo({...shippingInfo, quarter: e.target.value})}
                  className="w-full bg-[#0d1117] border border-gray-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                disabled={cart.length === 0}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-black font-extrabold text-xs py-3.5 rounded-xl uppercase tracking-wide transition-colors shadow-lg shadow-amber-900/20 cursor-pointer"
              >
                Confirm Order & Request Payment
              </button>
            </div>
          </form>
        </div>

      </div>
    </main>
  );
}