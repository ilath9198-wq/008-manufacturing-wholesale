'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Calculator, 
  Terminal, 
  Activity, 
  Layers, 
  Menu, 
  X,
  Shield,
  ChevronRight,
  Factory
} from 'lucide-react';
import { useRfq } from './RfqContext';

export default function Header() {
  const pathname = usePathname();
  const { toggleConsole, isConsoleOpen, openRfq } = useRfq();

  // Active section name indicator
  const getActiveTitle = () => {
    switch (pathname) {
      case '/': return 'SYS-01 // HOME';
      case '/about': return 'SYS-02 // ABOUT US';
      case '/manufacturing': return 'SYS-03 // MANUFACTURING';
      case '/products': return 'SYS-04 // PRODUCTS';
      case '/industries': return 'SYS-05 // INDUSTRIES';
      case '/wholesale': return 'SYS-06 // WHOLESALE & SUPPLY';
      case '/quality': return 'SYS-07 // QUALITY ASSURANCE';
      case '/infrastructure': return 'SYS-08 // INFRASTRUCTURE';
      case '/resources': return 'SYS-09 // TECHNICAL RESOURCES';
      case '/quote': return 'SYS-10 // REQUEST A QUOTE';
      case '/contact': return 'SYS-11 // CONTACT DESK';
      default: return 'SYSTEM // ACTIVE';
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-graphite-950/95 backdrop-blur-md border-b border-industrial-700/80 shadow-md transition-all">
        {/* Top Industrial Telemetry Strip (Desktop & Tablet) */}
        <div className="hidden md:flex items-center justify-between px-6 lg:px-12 py-1.5 bg-graphite-950 text-industrial-400 text-[11px] font-mono border-b border-industrial-800/80">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2 text-emerald-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>FACILITY TELEMETRY: ALL 6 MANUFACTURING WORKCENTERS ONLINE</span>
            </span>
            <span className="text-industrial-700">|</span>
            <span className="text-industrial-300">
              ISO 9001:2015 Spec • ASTM / ASME Compliant • Global Bulk Logistics
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="tel:+918049127700" 
              className="hover:text-copper-400 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3 text-copper-500" />
              <span>Plant Dispatch Desk: <strong className="text-white">+91 80 4912 7700</strong></span>
            </a>
            <span className="text-industrial-700">|</span>
            <span className="text-copper-400 font-semibold tracking-wider">
              RFQ RESPONSE WITHIN 24 HOURS
            </span>
          </div>
        </div>

        {/* Main Industrial Header Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo & Corporate Lockup */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none min-w-0"
            aria-label="MERIDIAN Manufacturing & Supply Co. Home"
          >
            {/* Geometric Industrial Crest */}
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-industrial-700 via-graphite-900 to-graphite-950 border border-industrial-500/80 flex items-center justify-center shadow-md group-hover:border-copper-500 transition-all shrink-0">
              <Factory className="w-6 h-6 text-copper-400 group-hover:scale-105 transition-transform" />
              <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-industrial-400" />
            </div>

            <div className="flex flex-col min-w-0">
              <span className="font-heading font-black text-xl sm:text-2xl text-white tracking-wider uppercase group-hover:text-copper-300 transition-colors leading-none truncate">
                MERIDIAN
              </span>
              <span className="hidden sm:block text-[10px] sm:text-[11px] font-mono font-medium text-industrial-400 tracking-widest uppercase mt-1 truncate">
                Manufacturing & Supply Co.
              </span>
              <span className="block sm:hidden text-[9px] font-mono font-semibold text-industrial-400 tracking-wider uppercase mt-0.5 truncate">
                Manufacturing & Supply
              </span>
            </div>
          </Link>

          {/* Active Route Telemetry Pill (Desktop Only) */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-graphite-900 border border-industrial-700/80 text-xs font-mono text-industrial-300">
            <span className="w-2 h-2 rounded-full bg-copper-500" />
            <span className="font-semibold text-white tracking-wider">{getActiveTitle()}</span>
          </div>

          {/* Right Action Controls: Phone, Request Quote, and Metallic Geometric Hamburger Control */}
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            
            {/* Phone Hotline Link (Hidden on small mobile) */}
            <a
              href="tel:+918049127700"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold text-industrial-200 hover:text-white bg-graphite-900 hover:bg-graphite-800 border border-industrial-700 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-copper-400" />
              <span>+91 80 4912 7700</span>
            </a>

            {/* Prominent High-Contrast Solid "Request a Quote" Button */}
            <button
              onClick={() => openRfq()}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-copper-glow border border-copper-400/80 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shrink-0"
            >
              <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white shrink-0" />
              <span className="whitespace-nowrap">
                <span className="hidden sm:inline">Request a </span>Quote
              </span>
            </button>

            {/* Unique Metallic Geometric Control for Hamburger */}
            <button
              onClick={toggleConsole}
              className={`relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl transition-all cursor-pointer border ${
                isConsoleOpen
                  ? 'bg-copper-600 border-copper-400 text-white shadow-copper-glow'
                  : 'bg-graphite-900 hover:bg-graphite-800 border-industrial-600 hover:border-copper-500 text-industrial-200 shadow-md'
              }`}
              aria-label="Toggle Industrial Command Console Navigation"
              title="Open Industrial Command Console"
            >
              {isConsoleOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <div className="flex flex-col items-center justify-center gap-1.5 w-6">
                  {/* Three Bold Horizontal Lines with Industrial Detailing */}
                  <span className="w-6 h-0.5 bg-copper-400 rounded-full transition-all group-hover:bg-white" />
                  <span className="w-4 h-0.5 bg-industrial-200 rounded-full transition-all self-start ml-0.5" />
                  <span className="w-6 h-0.5 bg-copper-400 rounded-full transition-all group-hover:bg-white" />
                </div>
              )}
            </button>

          </div>
        </div>
      </header>
    </>
  );
}
