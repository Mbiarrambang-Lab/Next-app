'use client';

import React from 'react';
import Image from 'next/image';
import facebookIcon from '@/public/facebook.jpeg';
import linkedInIcon from '@/public/LinkedIn.jpeg';
import youTubeIcon from '@/public/YouTube.jpeg';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/80 py-8 px-6 text-center text-xs text-gray-400 bg-[#0d1117]/95">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
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
              href="https://facebook.com"
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
              href="https://linkedin.com"
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
              href="https://youtube.com"
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
  );
}
