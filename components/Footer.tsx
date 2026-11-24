'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Factory, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight,
  Terminal,
  ExternalLink,
  MessageSquare
} from 'lucide-react';
import { commandConsoleTiles } from '../data/manufacturingData';
import { useRfq } from './RfqContext';

export default function Footer() {
  const { openRfq } = useRfq();

  return (
    <footer className="w-full bg-graphite-950 text-industrial-300 border-t border-industrial-800">
      {/* Top Pre-Footer Bar: Quick RFQ CTA Strip */}
      <div className="border-b border-industrial-850 bg-gradient-to-r from-graphite-950 via-graphite-900 to-graphite-950 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-[11px] font-mono font-bold text-copper-400 uppercase tracking-widest block mb-1">
              BULK INDUSTRIAL SUPPLY & TURNKEY CONTRACT MANUFACTURING
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Scale Your Production or Wholesale Pipeline?
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => openRfq()}
              className="px-6 py-3.5 rounded-xl bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-copper-glow transition-all cursor-pointer"
            >
              Request Commercial RFQ
            </button>
            <Link
              href="/wholesale"
              className="px-6 py-3.5 rounded-xl bg-graphite-800 hover:bg-graphite-700 text-industrial-200 border border-industrial-700 font-heading font-bold text-xs uppercase tracking-wider transition-all"
            >
              Distributor Programs
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info & Address (Span 4) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-industrial-700 to-graphite-900 border border-industrial-600 flex items-center justify-center text-copper-400 shadow-sm">
                <Factory className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-black text-xl text-white tracking-wider uppercase block leading-none">
                  MERIDIAN
                </span>
                <span className="text-[10px] font-mono text-industrial-400 tracking-widest uppercase block mt-1">
                  Manufacturing & Supply Co.
                </span>
              </div>
            </Link>

            <p className="text-xs text-industrial-400 leading-relaxed mb-6">
              Precision contract manufacturing, high-yield structural steel, electrical busways, and certified wholesale supplies engineered for global commercial contractors and industrial OEMs.
            </p>

            <div className="space-y-3 text-xs text-industrial-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                <span>
                  MERIDIAN Industrial Complex, Plot 42–46, Phase II Industrial Corridor, Peenya / Electronic City, Bangalore – 560058, Karnataka, India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-copper-400 shrink-0" />
                <span>Plant Dispatch Desk: <strong className="text-white">+91 80 4912 7700</strong></span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-copper-400 shrink-0" />
                <span>Commercial Inquiries: <strong className="text-white">supply.desk@meridian-mfg.com</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Subsystems / 11 Dedicated Routes (Span 5) */}
          <div className="lg:col-span-5">
            <h4 className="text-xs font-mono font-bold text-copper-400 uppercase tracking-widest mb-4 pb-2 border-b border-industrial-800">
              INDUSTRIAL COMMAND SUBSYSTEMS (11 ROUTES)
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {commandConsoleTiles.map((tile) => (
                <Link
                  key={tile.sysCode}
                  href={tile.path}
                  className="hover:text-copper-400 transition-colors flex items-center gap-2 py-1 text-industrial-300 group"
                >
                  <span className="font-mono text-[10px] text-industrial-500 group-hover:text-copper-400">{tile.sysCode}</span>
                  <span className="truncate">{tile.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quality & Certifications Disclaimer (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-mono font-bold text-copper-400 uppercase tracking-widest mb-4 pb-2 border-b border-industrial-800">
              QUALITY & COMPLIANCE
            </h4>
            
            <div className="space-y-2.5 text-xs text-industrial-400 mb-6">
              <div className="p-2.5 rounded bg-graphite-900 border border-industrial-800">
                <span className="font-bold text-white block text-[11px]">ISO 9001:2015 Specification</span>
                <span className="text-[10px] text-industrial-500">Quality Management System Standard</span>
              </div>
              <div className="p-2.5 rounded bg-graphite-900 border border-industrial-800">
                <span className="font-bold text-white block text-[11px]">EN 10204 Type 3.1 Certified</span>
                <span className="text-[10px] text-industrial-500">Traceable Mill Test Reports on All Heats</span>
              </div>
              <div className="p-2.5 rounded bg-graphite-900 border border-industrial-800">
                <span className="font-bold text-white block text-[11px]">ASTM / ASME Pressure Rated</span>
                <span className="text-[10px] text-industrial-500">Hydrostatic and Non-Destructive Testing</span>
              </div>
            </div>

            <a
              href="https://wa.me/918049127700?text=Hello%20MERIDIAN%20Supply%20Team%2C%20I%20would%20like%20to%20enquire%20about%20bulk%20supply%20catalogues."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 font-mono"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Direct WhatsApp Concierge</span>
            </a>
          </div>

        </div>

        {/* Fictional Demonstration Notice & Legal Bar */}
        <div className="mt-12 pt-6 border-t border-industrial-850 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-industrial-500 font-mono">
          <p className="text-center md:text-left leading-relaxed">
            <strong>Demonstration Platform Notice:</strong> MERIDIAN Manufacturing & Supply Co. is an industry-specific digital demonstration created to showcase professional B2B industrial web solutions. All product specifications, certifications, company capacity metrics, and contact numbers are illustrative demonstration placeholders.
          </p>

          <p className="shrink-0">
            © {new Date().getFullYear()} MERIDIAN Manufacturing & Supply Co. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
