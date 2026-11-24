'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Calculator, 
  Boxes,
  Factory,
  Building,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { industriesData } from '../../data/manufacturingData';
import { useRfq } from '../../components/RfqContext';

export default function IndustriesPage() {
  const { openRfq } = useRfq();

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Industrial Background)
          ========================================================================= */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        {/* Full-bleed Industrial Photographic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=2000&q=85"
            alt="MERIDIAN Structural Steel Framework & Civil Infrastructure Project"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Deep Navy/Graphite Scrim */}
          <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/95 via-graphite-900/85 to-graphite-950/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-graphite-950/60" />
        </div>

        {/* Hero Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-3xl">
            {/* Subsystem Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-graphite-900/90 border border-copper-500/50 text-copper-300 text-xs font-mono font-medium tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg">
              <Layers className="w-3.5 h-3.5 text-copper-400" />
              <span>MARKET APPLICATION MATRIX // 10 B2B SECTORS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
              Engineering Solutions for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 via-amber-300 to-copper-200">
                Diverse Global Industries.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              From high-tonnage structural beams for mega-infrastructure to sanitary stainless valves for food processors and precision bushings for automotive OEMs, explore our industry supply capabilities.
            </p>

            {/* Mandatory High-Contrast Solid CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openRfq('Industry Specific Supply Agreement')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-base tracking-wider uppercase rounded-xl shadow-copper-glow border border-copper-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-white" />
                <span>Discuss Sector Supply Agreement</span>
              </button>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-graphite-900 hover:bg-graphite-800 text-white border-2 border-industrial-400 hover:border-white font-heading font-bold text-base tracking-wider uppercase rounded-xl backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Boxes className="w-5 h-5 text-copper-400" />
                <span>Explore Products by Sector</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DEMONSTRATION NOTICE BANNER (Transparency & Industry Standards)
          ========================================================================= */}
      <section className="bg-amber-50 border-y border-amber-200/80 py-3.5 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm text-amber-900 font-medium">
          <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
          <span>
            <strong>Demonstration Platform Notice:</strong> MERIDIAN Manufacturing & Supply Co. is an industry-specific digital demonstration. The sector applications and partner benefits below demonstrate a high-capacity B2B enterprise platform.
          </span>
        </div>
      </section>

      {/* =========================================================================
          DETAILED 10 INDUSTRY SECTORS BREAKDOWN
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {industriesData.map((ind, idx) => (
            <div
              key={ind.id}
              className={`p-8 sm:p-10 rounded-3xl border border-industrial-200 bg-white shadow-sm hover:shadow-xl hover:border-copper-500/80 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Information Column (Span 7) */}
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="font-mono text-xs font-bold text-copper-600 uppercase">
                    SECTOR {idx < 9 ? `0${idx + 1}` : idx + 1} //
                  </span>
                  <span className="text-xs font-mono text-industrial-500 font-medium">
                    {ind.tagline}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-graphite-950 mb-4 leading-tight">
                  {ind.name}
                </h3>

                <p className="text-sm sm:text-base text-industrial-600 leading-relaxed mb-6">
                  {ind.description}
                </p>

                {/* Key Products Supplied */}
                <div className="mb-6">
                  <span className="block text-[11px] font-mono font-bold uppercase tracking-wider text-industrial-400 mb-2">
                    CORE SUPPLIED COMPONENTS & SYSTEMS:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {ind.keyProductsSupplied.map((prod, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-3 py-1 rounded-lg bg-industrial-100 border border-industrial-200 text-xs font-mono text-graphite-900 font-semibold"
                      >
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Operational Benefits */}
                <div className="space-y-2 mb-8">
                  {ind.operationalBenefits.map((ben, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs sm:text-sm text-graphite-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => openRfq(`${ind.name} Supply Inquiry`)}
                  className="px-6 py-3 rounded-xl bg-graphite-950 hover:bg-copper-600 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Request Sector Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Image Column (Span 5) */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-industrial-200 shadow-md bg-graphite-950">
                  <Image
                    src={ind.image}
                    alt={ind.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/80 via-transparent to-transparent flex items-end p-6 text-white">
                    <span className="text-xs font-mono text-copper-300 font-bold uppercase">
                      {ind.name} Application
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          CROSS-INDUSTRY PROCUREMENT BANNER
          ========================================================================= */}
      <section className="py-16 bg-graphite-950 text-white text-center border-t border-industrial-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Operating in a Specialized Industrial Niche?
          </h2>
          <p className="text-industrial-300 text-sm max-w-xl mx-auto mb-8">
            Our metallurgists and manufacturing engineers evaluate unique chemical atmospheres, extreme temperature bounds, and non-standard thread profiles.
          </p>
          <button
            onClick={() => openRfq('Custom Industry Application')}
            className="px-8 py-3.5 rounded-xl bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-copper-glow transition-all cursor-pointer"
          >
            Connect with an Application Engineer
          </button>
        </div>
      </section>
    </div>
  );
}
