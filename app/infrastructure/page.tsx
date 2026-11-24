'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Warehouse, 
  Factory, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  Building2, 
  Cpu, 
  Truck,
  Sparkles,
  Calendar,
  Layers
} from 'lucide-react';
import { infrastructureFacilities } from '../../data/manufacturingData';
import { useRfq } from '../../components/RfqContext';

export default function InfrastructurePage() {
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
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=85"
            alt="MERIDIAN 180,000 Sq. Ft. Integrated Manufacturing Floor and Clean Production Bays"
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
              <Warehouse className="w-3.5 h-3.5 text-copper-400" />
              <span>FACILITY INFRASTRUCTURE // 180,000 SQ. FT. CAMPUS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
              Heavy Production Bays &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 via-amber-300 to-copper-200">
                Automated Logistics Hubs.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              Inspect our multi-bay industrial manufacturing plant, 24 CNC turning centers, robotic fiber lasers, temperature-controlled CMM metrology suites, and 12,000-pallet high-bay distribution warehouse.
            </p>

            {/* Mandatory High-Contrast Solid CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openRfq('Plant Audit / Facility Walkthrough Booking')}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-base tracking-wider uppercase rounded-xl shadow-copper-glow border border-copper-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-white" />
                <span>Schedule In-Person Plant Audit</span>
              </button>

              <Link
                href="/manufacturing"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-graphite-900 hover:bg-graphite-800 text-white border-2 border-industrial-400 hover:border-white font-heading font-bold text-base tracking-wider uppercase rounded-xl backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Cpu className="w-5 h-5 text-copper-400" />
                <span>Explore Production Capabilities</span>
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
            <strong>Demonstration Platform Notice:</strong> MERIDIAN Manufacturing & Supply Co. is an industry-specific digital demonstration. The plant square footage, crane capacities, and warehouse positions shown are illustrative demonstration figures.
          </span>
        </div>
      </section>

      {/* =========================================================================
          PRODUCTION BAYS & WORKCENTER SHOWCASE
          ========================================================================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-copper-600 uppercase tracking-widest block mb-1">
            INTEGRATED CAMPUS ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-graphite-950 tracking-tight mb-4">
            Four Specialized Infrastructure Facilities
          </h2>
          <p className="text-industrial-600 text-base">
            Engineered for high-volume continuous manufacturing, strict geometric inspection, and high-speed multi-modal container loading.
          </p>
        </div>

        <div className="space-y-12">
          {infrastructureFacilities.map((fac, idx) => (
            <div
              key={fac.id}
              className={`p-8 sm:p-10 rounded-3xl border border-industrial-200 bg-white shadow-sm hover:shadow-xl hover:border-copper-500/80 transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text Column (Span 7) */}
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 rounded bg-graphite-950 text-copper-400 font-mono text-xs font-bold border border-industrial-700">
                    BAY 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono font-semibold text-industrial-500 uppercase">
                    {fac.category} • {fac.floorArea}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-graphite-950 mb-3">
                  {fac.name}
                </h3>

                <p className="text-sm text-industrial-600 leading-relaxed mb-6">
                  {fac.description}
                </p>

                {/* Technical Specifications Matrix */}
                <div className="p-4 rounded-xl bg-industrial-50 border border-industrial-200 text-xs font-mono mb-6">
                  <span className="text-industrial-400 block font-bold mb-2 uppercase">
                    ENGINEERING & FACILITY HIGHLIGHTS:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-graphite-900 font-medium">
                    {fac.specifications.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-copper-600 shrink-0" />
                        <span className="truncate">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => openRfq(`${fac.name} Capacity Inquiry`)}
                  className="px-6 py-3 rounded-xl bg-graphite-950 hover:bg-copper-600 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Inquire Regarding Bay Capacity</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Photo Column (Span 5) */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-industrial-200 shadow-md bg-graphite-950">
                  <Image
                    src={fac.image}
                    alt={fac.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/80 via-transparent to-transparent flex items-end p-6 text-white">
                    <span className="text-xs font-mono text-copper-300 font-bold uppercase">
                      {fac.floorArea} Active Footprint
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          PLANT VISIT & AUDIT SCHEDULER BANNER
          ========================================================================= */}
      <section className="py-16 bg-graphite-950 text-white text-center border-t border-industrial-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Conduct an On-Site Factory or Quality Audit
          </h2>
          <p className="text-industrial-300 text-sm max-w-xl mx-auto mb-8">
            We welcome engineering delegates, procurement officers, and third-party inspection agencies (TUV, SGS, Bureau Veritas) for scheduled facility inspections.
          </p>
          <button
            onClick={() => openRfq('On-Site Plant Walkthrough Request')}
            className="px-8 py-3.5 rounded-xl bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-copper-glow transition-all cursor-pointer"
          >
            Schedule Facility Inspection Date
          </button>
        </div>
      </section>
    </div>
  );
}
