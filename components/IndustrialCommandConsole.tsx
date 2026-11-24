'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  X, 
  Factory, 
  Building2, 
  Cpu, 
  Boxes, 
  Layers, 
  Truck, 
  ShieldCheck, 
  Warehouse, 
  FileText, 
  Calculator, 
  Phone, 
  ArrowRight, 
  Sparkles,
  ExternalLink,
  ChevronRight,
  Terminal,
  Activity
} from 'lucide-react';
import { commandConsoleTiles } from '../data/manufacturingData';
import { useRfq } from './RfqContext';

export default function IndustrialCommandConsole() {
  const pathname = usePathname();
  const { isConsoleOpen, closeConsole, openRfq } = useRfq();
  const consoleRef = useRef<HTMLDivElement>(null);

  // Close console on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isConsoleOpen) {
        closeConsole();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isConsoleOpen, closeConsole]);

  // Close console on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (consoleRef.current && !consoleRef.current.contains(e.target as Node)) {
        closeConsole();
      }
    };
    if (isConsoleOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isConsoleOpen, closeConsole]);

  if (!isConsoleOpen) return null;

  const renderIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 shrink-0" };
    switch (iconName) {
      case 'Factory': return <Factory {...props} />;
      case 'Building2': return <Building2 {...props} />;
      case 'Cpu': return <Cpu {...props} />;
      case 'Boxes': return <Boxes {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Truck': return <Truck {...props} />;
      case 'ShieldCheck': return <ShieldCheck {...props} />;
      case 'Warehouse': return <Warehouse {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'Calculator': return <Calculator {...props} />;
      case 'Phone': return <Phone {...props} />;
      default: return <Activity {...props} />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 lg:p-10 bg-graphite-950/85 backdrop-blur-md overflow-y-auto">
      {/* Mechanical Floating Command Console */}
      <div 
        ref={consoleRef}
        className="relative w-full max-w-[calc(100vw-16px)] sm:max-w-6xl my-auto bg-graphite-900 border-2 border-industrial-600/70 rounded-2xl shadow-industrial-console overflow-hidden animate-console-unfold flex flex-col max-h-[92vh]"
      >
        {/* Top Control Bar / Telemetric Header */}
        <div className="flex items-center justify-between px-3 sm:px-8 py-3 bg-graphite-950 border-b border-industrial-700/80 text-industrial-300 font-mono text-xs select-none shrink-0 min-w-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="flex items-center gap-1.5 sm:gap-2 text-copper-400 font-bold uppercase tracking-wider text-[10px] sm:text-xs min-w-0">
              <span className="w-2 h-2 rounded-full bg-copper-500 animate-pulse shrink-0" />
              <span className="truncate">
                <span className="hidden sm:inline">MERIDIAN </span>COMMAND CONSOLE
              </span>
            </span>
            <span className="hidden md:inline-block text-industrial-600">|</span>
            <span className="hidden md:inline-block text-industrial-400 text-[11px]">
              SYS.VER.2026 // 11 ACTIVE SUB-ROUTINES
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <span className="hidden sm:inline-block text-industrial-400 text-[11px]">
              PRESS <kbd className="px-1.5 py-0.5 rounded bg-industrial-800 text-industrial-200 border border-industrial-700">ESC</kbd> TO CLOSE
            </span>
            <button
              onClick={closeConsole}
              className="p-1.5 rounded-lg bg-industrial-800/80 hover:bg-copper-600 text-industrial-300 hover:text-white border border-industrial-700 transition-colors cursor-pointer shrink-0"
              aria-label="Close Industrial Command Console"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Console Body Area */}
        <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-6 bg-gradient-to-b from-graphite-900 via-graphite-900 to-graphite-950">
          
          {/* Main Grid: 11 Modular Numbered Tiles (Span 8 or 9 on desktop) */}
          <div className="lg:col-span-8 xl:col-span-9 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-industrial-800 text-xs font-mono text-industrial-400">
                <span className="uppercase tracking-wider font-semibold">NAVIGATION MATRIX // CHOOSE SUBSYSTEM</span>
                <span className="text-copper-400 font-medium">11 DEDICATED ROUTES</span>
              </div>

              {/* Grid of Modular Tiles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {commandConsoleTiles.map((tile) => {
                  const isActive = pathname === tile.path;
                  return (
                    <Link
                      key={tile.sysCode}
                      href={tile.path}
                      onClick={closeConsole}
                      className={`group relative p-3.5 sm:p-4 rounded-xl border transition-all flex flex-col justify-between ${
                        isActive
                          ? 'bg-steel-950/80 border-copper-500 shadow-copper-glow text-white'
                          : 'bg-graphite-800/70 hover:bg-graphite-800 border-industrial-700/80 hover:border-copper-500/70 text-industrial-200'
                      }`}
                    >
                      {/* Top Line: Sys Code & Status Pill */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-[10px] font-bold text-industrial-400 group-hover:text-copper-400 tracking-wider">
                          {tile.sysCode}
                        </span>
                        <span className="font-mono text-xs font-extrabold text-industrial-500 group-hover:text-white">
                          #{tile.num}
                        </span>
                      </div>

                      {/* Middle: Icon & Title */}
                      <div className="flex items-center gap-3 mb-1.5">
                        <div className={`p-2 rounded-lg transition-colors ${
                          isActive 
                            ? 'bg-copper-600 text-white' 
                            : 'bg-graphite-900/90 text-copper-400 group-hover:text-white group-hover:bg-copper-600'
                        }`}>
                          {renderIcon(tile.iconName)}
                        </div>
                        <h4 className="font-heading font-bold text-sm sm:text-base text-white group-hover:text-copper-300 transition-colors">
                          {tile.title}
                        </h4>
                      </div>

                      {/* Bottom Description */}
                      <p className="text-[11px] text-industrial-400 line-clamp-1 leading-snug">
                        {tile.desc}
                      </p>

                      {/* Active Indicator Accent Corner */}
                      {isActive && (
                        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-copper-400 rounded-tr" />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="mt-6 pt-4 border-t border-industrial-800/80 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-industrial-400">
              <span className="flex items-center gap-1.5">
                <span className="led-indicator" />
                <span>PLANT OPERATION STATUS: ONLINE (24/7 BULK DISPATCH)</span>
              </span>
              <span className="text-industrial-500">
                HEAD OFFICE: BANGALORE / CHENNAI INDUSTRIAL CORRIDOR
              </span>
            </div>
          </div>

          {/* Right Column: Featured Manufacturing Snapshot & Bulk Quotation Highlight (Span 4 or 3) */}
          <div className="lg:col-span-4 xl:col-span-3 flex flex-col justify-between gap-4">
            {/* Highlighted Request Bulk Quotation Area */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-copper-950/70 via-graphite-900 to-graphite-950 border border-copper-500/60 shadow-lg text-left">
              <div className="flex items-center gap-2 mb-2 text-copper-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Calculator className="w-4 h-4 text-copper-400" />
                <span>DIRECT ENTERPRISE RFQ</span>
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-white mb-2 leading-tight">
                Need Bulk Pricing or Custom Fabrication?
              </h4>
              <p className="text-xs text-industrial-300 leading-relaxed mb-4">
                Receive commercial volume estimates, mill test reports, and FOB/CIF delivery schedules in under 24 hours.
              </p>
              <button
                onClick={() => {
                  closeConsole();
                  openRfq();
                }}
                className="w-full py-3 px-4 rounded-xl bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-copper-glow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Bulk Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Small Featured Manufacturing Photograph & Capacity Card */}
            <div className="relative rounded-xl overflow-hidden border border-industrial-700/80 bg-graphite-950 min-h-[180px] sm:min-h-[220px]">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=85"
                alt="MERIDIAN Automated Production Bay"
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/60 to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-copper-400 mb-1">
                  FACILITY TELEMETRY // 180,000 SQ. FT.
                </span>
                <h5 className="font-bold text-sm text-white mb-1">
                  Continuous Precision Manufacturing
                </h5>
                <p className="text-[11px] text-industrial-300">
                  ISO 9001 certified CNC turning, 15 kW laser cutting, and certified structural fabrication.
                </p>
              </div>
            </div>

            {/* Quick Contact Link */}
            <div className="p-3.5 rounded-xl bg-industrial-900/60 border border-industrial-800 text-xs text-industrial-300 flex items-center justify-between">
              <span className="font-mono text-[11px]">HOTLINE: +91 80 4912 7700</span>
              <Link 
                href="/contact" 
                onClick={closeConsole}
                className="text-copper-400 hover:text-copper-300 font-semibold flex items-center gap-1"
              >
                <span>Desk</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
