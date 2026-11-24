'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  CheckCircle2, 
  FileText, 
  Download, 
  ArrowRight, 
  Calculator, 
  Award,
  Sparkles,
  Search,
  Eye,
  Microscope,
  Cpu
} from 'lucide-react';
import { qualityStages } from '../../data/manufacturingData';
import { useRfq } from '../../components/RfqContext';

export default function QualityPage() {
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
            src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=2000&q=85"
            alt="MERIDIAN Metrology Laboratory & Zeiss 3D CMM Testing Facility"
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
              <ShieldCheck className="w-3.5 h-3.5 text-copper-400" />
              <span>QUALITY METROLOGY // ZERO-DEFECT COMPLIANCE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
              Rigorous Quality Assurance &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 via-amber-300 to-copper-200">
                Certified Testing.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              We employ automated 3D CMM metrology, optical spark spectrometry, non-destructive ultrasonic testing, and hydrostatic valve trials under an audited ISO 9001:2015 quality protocol.
            </p>

            {/* Mandatory High-Contrast Solid CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/resources"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-base tracking-wider uppercase rounded-xl shadow-copper-glow border border-copper-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <FileText className="w-5 h-5 text-white" />
                <span>Download Sample MTC Certificate</span>
              </Link>

              <button
                onClick={() => openRfq('Quality Audit / Compliance Inquiry')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-graphite-900 hover:bg-graphite-800 text-white border-2 border-industrial-400 hover:border-white font-heading font-bold text-base tracking-wider uppercase rounded-xl backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-copper-400" />
                <span>Request Quality Audit Dossier</span>
              </button>
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
            <strong>Demonstration Notice:</strong> MERIDIAN Manufacturing & Supply Co. is an industry-specific demonstration. All ISO certificates, test reports, and compliance placeholders below illustrate an audited corporate quality assurance system.
          </span>
        </div>
      </section>

      {/* =========================================================================
          5-STAGE COMPREHENSIVE QUALITY ASSURANCE PROTOCOL
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-industrial-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-copper-600 uppercase tracking-widest block mb-1">
              INSPECTION ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-graphite-950 tracking-tight mb-4">
              Multi-Stage Quality Inspection Framework
            </h2>
            <p className="text-industrial-600 text-base">
              Every production heat and machined batch passes five distinct verification gateways before release for export packing.
            </p>
          </div>

          <div className="space-y-6">
            {qualityStages.map((stage, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-2xl bg-industrial-50 border border-industrial-200 hover:border-copper-500/80 hover:shadow-lg transition-all"
              >
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-4 pb-4 border-b border-industrial-200">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-lg bg-graphite-950 text-copper-400 font-mono text-xs font-bold border border-industrial-700">
                      {stage.step}
                    </span>
                    <h3 className="font-heading font-extrabold text-xl text-graphite-950">
                      {stage.name}
                    </h3>
                  </div>

                  <span className="text-xs font-mono text-industrial-500 bg-white px-3 py-1 rounded border border-industrial-200">
                    STAGE: {stage.stage}
                  </span>
                </div>

                <p className="text-sm text-industrial-600 leading-relaxed mb-6">
                  {stage.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-white border border-industrial-200">
                    <span className="text-industrial-400 block text-[10px] mb-1">INSTRUMENTATION & APPARATUS:</span>
                    <span className="font-semibold text-graphite-900">{stage.instrumentsUsed}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white border border-industrial-200">
                    <span className="text-industrial-400 block text-[10px] mb-1">REFERENCE BENCHMARK:</span>
                    <span className="font-semibold text-copper-700">{stage.benchmarkStandard}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MILL TEST CERTIFICATE (MTC 3.1) SIMULATION CARD
          ========================================================================= */}
      <section className="py-20 bg-industrial-50 border-b border-industrial-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <span className="text-xs font-mono font-bold text-copper-600 uppercase tracking-widest block mb-2">
                TRACEABLE DOCUMENTATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-graphite-950 mb-4 leading-tight">
                Complete Traceability with Mill Test Certificates (EN 10204 3.1).
              </h2>
              <p className="text-industrial-600 text-sm leading-relaxed mb-6">
                All finished structural beams, flanges, and high-tensile fasteners shipped from MERIDIAN are supplied with an audited EN 10204 Type 3.1 inspection certificate verifying chemical heat analysis, yield/tensile strength, elongation, and impact values.
              </p>

              <div className="space-y-3 mb-8 text-xs sm:text-sm text-graphite-800 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0" />
                  <span>Optical emission spectrometer chemical chemistry breakdown</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0" />
                  <span>Certified mechanical yield, tensile, and elongation curve</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0" />
                  <span>Charpy V-notch impact absorption test at -20°C and -40°C</span>
                </div>
              </div>

              <Link
                href="/resources"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-copper-glow transition-all"
              >
                <span>Download Sample MTC Certificate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Simulated Certificate Graphic */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-industrial-300 shadow-xl font-mono text-xs">
                <div className="flex items-center justify-between pb-4 border-b-2 border-industrial-800 mb-4">
                  <div>
                    <span className="font-extrabold text-sm text-graphite-950 block">MERIDIAN INSPECTION CERTIFICATE</span>
                    <span className="text-[10px] text-industrial-500">EN 10204 : 2004 TYPE 3.1 // AUDITED SAMPLE</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                    PASSED QA
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4 text-[11px] text-industrial-600">
                  <div>HEAT NUMBER: <strong className="text-graphite-900">M-26884-A</strong></div>
                  <div>MATERIAL: <strong className="text-graphite-900">ASTM A105 / S355JR</strong></div>
                  <div>PART SPEC: <strong className="text-graphite-900">MRD-FLG-304-DN150</strong></div>
                  <div>INSPECTION DATE: <strong className="text-graphite-900">2026-11-20</strong></div>
                </div>

                <div className="border border-industrial-200 rounded-lg overflow-hidden mb-4">
                  <div className="bg-industrial-100 p-2 font-bold text-[10px] text-graphite-900">
                    CHEMICAL COMPOSITION (% WEIGHT)
                  </div>
                  <div className="grid grid-cols-5 p-2 text-center text-[10px] divide-x divide-industrial-200">
                    <div>C: 0.18%</div>
                    <div>Mn: 1.25%</div>
                    <div>Si: 0.28%</div>
                    <div>P: 0.015%</div>
                    <div>S: 0.012%</div>
                  </div>
                </div>

                <div className="border border-industrial-200 rounded-lg overflow-hidden mb-4">
                  <div className="bg-industrial-100 p-2 font-bold text-[10px] text-graphite-900">
                    MECHANICAL TENSILE TRIAL DATA
                  </div>
                  <div className="grid grid-cols-3 p-2 text-center text-[10px] divide-x divide-industrial-200">
                    <div>YIELD: 375 MPa</div>
                    <div>TENSILE: 540 MPa</div>
                    <div>ELONGATION: 28%</div>
                  </div>
                </div>

                <div className="text-[10px] text-industrial-400 italic">
                  *Demonstration Document: Represents standard Mill Test Certificate format delivered with every production heat lot.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
