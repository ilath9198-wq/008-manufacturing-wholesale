'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Cpu, 
  Settings, 
  Workflow, 
  CheckCircle2, 
  Factory, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles, 
  Calculator,
  Layers,
  Wrench,
  Boxes,
  Truck
} from 'lucide-react';
import { 
  manufacturingCapabilities, 
  manufacturingWorkflow 
} from '../../data/manufacturingData';
import { useRfq } from '../../components/RfqContext';

export default function ManufacturingPage() {
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
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=85"
            alt="MERIDIAN Industrial Steel Fabrication & Robotic Welding Bay"
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
              <Cpu className="w-3.5 h-3.5 text-copper-400" />
              <span>ADVANCED PRODUCTION WORKCENTERS // ISO 9001:2015</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
              High-Precision Machining &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 via-amber-300 to-copper-200">
                Heavy Industrial
              </span>{' '}
              Fabrication.
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              Explore our 6 integrated production workcenters, advanced multi-axis CNC machines, 15 kW robotic fiber lasers, and rigorous 7-stage manufacturing workflow.
            </p>

            {/* Mandatory High-Contrast Solid CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openRfq()}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-base tracking-wider uppercase rounded-xl shadow-copper-glow border border-copper-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-white" />
                <span>Submit Technical Drawings for RFQ</span>
              </button>

              <Link
                href="/quality"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-graphite-900 hover:bg-graphite-800 text-white border-2 border-industrial-400 hover:border-white font-heading font-bold text-base tracking-wider uppercase rounded-xl backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <ShieldCheck className="w-5 h-5 text-copper-400" />
                <span>Quality Metrology & CMM</span>
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
            <strong>Demonstration Platform Notice:</strong> MERIDIAN Manufacturing & Supply Co. is an industry-specific digital demonstration. All technical specifications, machinery lists, and operational capacities shown are illustrative demonstration figures.
          </span>
        </div>
      </section>

      {/* =========================================================================
          MANDATORY 7-STAGE MANUFACTURING PROCESS WORKFLOW
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-industrial-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-industrial-100 text-industrial-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Workflow className="w-3.5 h-3.5 text-copper-600" />
              <span>STANDARDIZED OPERATIONAL PROTOCOL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-graphite-950 tracking-tight mb-4">
              Our 7-Stage End-to-End Production Workflow
            </h2>
            <p className="text-industrial-600 text-base">
              Every production order follows our closed-loop quality gateway, ensuring that raw material metallurgy, CAD simulation, machining tolerances, and dispatch logistics adhere to exact customer specifications.
            </p>
          </div>

          <div className="space-y-4">
            {manufacturingWorkflow.map((stage, idx) => (
              <div 
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-industrial-50 border border-industrial-200 hover:bg-white hover:border-copper-500 hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center gap-6"
              >
                {/* Step Number Pill */}
                <div className="w-16 h-16 rounded-2xl bg-graphite-950 border border-industrial-700 text-copper-400 font-mono text-2xl font-black flex items-center justify-center shrink-0 shadow-sm">
                  {stage.step}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-heading font-extrabold text-lg sm:text-xl text-graphite-950 mb-1.5">
                    {stage.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-industrial-600 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>

                {/* Right Badge */}
                <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-industrial-200 text-xs font-mono text-industrial-500 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-copper-500" />
                  <span>GATEWAY 0{idx + 1} AUDITED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          DETAILED 6 MANUFACTURING WORKCENTERS
          ========================================================================= */}
      <section className="py-20 bg-industrial-50 border-b border-industrial-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-copper-600 uppercase tracking-widest block mb-1">
              FACILITY EQUIPMENT & CAPACITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-graphite-950 tracking-tight mb-4">
              Integrated Production Capabilities
            </h2>
            <p className="text-industrial-600 text-base">
              Detailed breakdown of our machinery, monthly output capacity, and engineering workcenters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {manufacturingCapabilities.map((pillar) => (
              <div 
                key={pillar.id}
                className="bg-white rounded-2xl border border-industrial-200 overflow-hidden shadow-sm hover:border-copper-500/80 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/9] w-full bg-graphite-950 overflow-hidden">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded bg-graphite-950/90 text-copper-400 font-mono text-xs font-bold border border-copper-500/40">
                      {pillar.capacityMetric}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <span className="text-xs font-mono font-bold text-copper-600 uppercase tracking-widest block mb-1">
                      {pillar.subtitle}
                    </span>
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-graphite-950 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-industrial-600 leading-relaxed mb-6">
                      {pillar.description}
                    </p>

                    <div className="p-4 rounded-xl bg-industrial-50 border border-industrial-200 text-xs font-mono">
                      <span className="text-industrial-500 block font-bold mb-2 uppercase">
                        PRIMARY INDUSTRIAL MACHINERY EMPLOYED:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-graphite-900 font-medium">
                        {pillar.machineryEmployed.map((mach, idx) => (
                          <div key={idx} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-copper-500 shrink-0" />
                            <span className="truncate">{mach}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-industrial-100">
                  <button
                    onClick={() => openRfq(pillar.title)}
                    className="text-xs font-bold text-copper-600 hover:text-copper-700 font-mono uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Request Capacity Reservation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] font-mono text-industrial-400">
                    24/7 Multi-Shift Ready
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CUSTOM ENGINEERING & OEM PRODUCT DEVELOPMENT
          ========================================================================= */}
      <section className="py-20 bg-graphite-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-bold text-copper-400 uppercase tracking-widest block mb-2">
                RAPID TOOLING & PILOT FABRICATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
                Custom Component Development & Tooling Engineering.
              </h2>
              <p className="text-industrial-300 text-sm sm:text-base leading-relaxed mb-6">
                Beyond catalog products, MERIDIAN partners with industrial clients on proprietary OEM sub-assemblies. From 3D CAD modeling and finite element analysis (FEA) to progressive stamping dies and injection mold making, we bring custom industrial products to mass production in record time.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-industrial-200">
                  <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0" />
                  <span>In-House Toolroom with Charmilles Wire-Cut & Sinker EDM</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-industrial-200">
                  <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0" />
                  <span>Complete PPAP Level 3 Documentation & First Article Inspection (FAI)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-industrial-200">
                  <CheckCircle2 className="w-4 h-4 text-copper-400 shrink-0" />
                  <span>Non-Disclosure Agreements (NDA) Signed Prior to CAD Sharing</span>
                </div>
              </div>

              <button
                onClick={() => openRfq('Custom OEM Tooling & Fabrication')}
                className="px-6 py-3.5 rounded-xl bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-copper-glow transition-all cursor-pointer"
              >
                Submit Custom Engineering Inquiry
              </button>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-industrial-700 bg-graphite-900 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1200&q=85"
                  alt="MERIDIAN Tooling & CAD/CAM Design Center"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
