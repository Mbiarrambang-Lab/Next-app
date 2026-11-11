'use client';

import React, { useActionState, startTransition } from 'react';
import { Mail, AlertTriangle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { transmitPacket } from '../utils/actions';

export default function Contact() {
  const [state, formAction, isPending] = useActionState(transmitPacket, null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      formAction(formData);
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
      <section id="contact" className="pt-8 space-y-8">
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
              <div
                className={`mt-4 p-3.5 rounded-xl border text-xs flex items-start gap-2.5 ${
                  state.success
                    ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30'
                    : 'bg-red-950/40 text-red-300 border-red-500/30'
                }`}
              >
                {state.success ? (
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                )}
                <span>{state.message}</span>
              </div>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
