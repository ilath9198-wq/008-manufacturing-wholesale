'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Factory, 
  Boxes, 
  Cpu, 
  Truck, 
  ShieldCheck, 
  Warehouse, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Calculator, 
  Building2, 
  ChevronRight,
  TrendingUp,
  Activity,
  Layers,
  Phone
} from 'lucide-react';
import { 
  productsData, 
  manufacturingCapabilities, 
  industriesData, 
  businessMetrics, 
  infrastructureFacilities 
} from '../data/manufacturingData';
import { useRfq } from '../components/RfqContext';

export default function HomePage() {
  const { openRfq, openProductDetail } = useRfq();
  const featuredProducts = productsData.slice(0, 4);
  const featuredIndustries = industriesData.slice(0, 4);
  const primaryFacility = infrastructureFacilities[0];

  return (
    <div className="w-full bg-slate-50">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Industrial Background)
          High-contrast typography, deep graphite scrim, and solid visible CTA buttons
          ========================================================================= */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        {/* Full-bleed Industrial Photographic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=2000&q=85"
            alt="MERIDIAN Modern Automated Manufacturing Plant & Assembly Floor"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Deep Graphite/Navy Gradient Scrim for 100% Readable White Text */}
          <div className="absolute inset-0 bg-gradient-to-r from-graphite-950/95 via-graphite-900/85 to-graphite-950/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-transparent to-graphite-950/60" />
        </div>

        {/* Hero Content Layer */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center sm:text-left">
          <div className="max-w-3xl">
            {/* Technical Subsystem Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-graphite-900/90 border border-copper-500/50 text-copper-300 text-xs font-mono font-medium tracking-widest uppercase mb-6 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-copper-500 animate-pulse" />
              <span>PRECISION CONTRACT MANUFACTURING // BULK SUPPLY PIPELINE</span>
            </div>

            {/* Mandatory Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.08] mb-6 drop-shadow-md">
              Manufacturing Excellence.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 via-amber-300 to-copper-200">
                Supply You Can Depend On.
              </span>
            </h1>

            {/* Mandatory Supporting Statement */}
            <p className="text-lg sm:text-2xl text-slate-200 leading-relaxed mb-10 max-w-2xl font-normal drop-shadow">
              Engineering high-tolerance CNC machined components, structural steel systems, low-impedance electrical busways, and certified wholesale supplies for industrial contractors, OEMs, and regional distributors worldwide.
            </p>

            {/* Mandatory Solid High-Contrast CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-base sm:text-lg tracking-wider uppercase rounded-xl shadow-copper-glow border border-copper-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Boxes className="w-5 h-5 text-white" />
                <span>Explore Our Products</span>
              </Link>

              <button
                onClick={() => openRfq()}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-graphite-900 hover:bg-graphite-800 text-white border-2 border-industrial-400/80 hover:border-white font-heading font-bold text-base sm:text-lg tracking-wider uppercase rounded-xl backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-copper-400" />
                <span>Request a Quote</span>
              </button>
            </div>

            {/* Quick Plant Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-industrial-800 text-left">
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white block">180k</span>
                <span className="text-[11px] text-industrial-400 font-mono tracking-wider uppercase">Sq. Ft. Plant</span>
              </div>
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-copper-400 block">±0.005mm</span>
                <span className="text-[11px] text-industrial-400 font-mono tracking-wider uppercase">CNC Tolerance</span>
              </div>
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-white block">25,000+</span>
                <span className="text-[11px] text-industrial-400 font-mono tracking-wider uppercase">Tons / Year</span>
              </div>
              <div>
                <span className="font-mono text-2xl sm:text-3xl font-extrabold text-emerald-400 block">24/7</span>
                <span className="text-[11px] text-industrial-400 font-mono tracking-wider uppercase">Active Dispatch</span>
              </div>
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
            <strong>Demonstration Platform Notice:</strong> MERIDIAN Manufacturing & Supply Co. is an industry-specific digital demonstration. All technical specifications, capacity metrics, and certifications shown are illustrative demonstration figures.
          </span>
        </div>
      </section>

      {/* =========================================================================
          KEY INDUSTRIAL METRICS (4 Business Capacity Benchmarks)
          ========================================================================= */}
      <section className="py-16 -mt-8 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {businessMetrics.map((metric, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-industrial-200 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-baseline gap-1.5 mb-2">
                <span className="text-3xl sm:text-4xl font-black text-graphite-950 font-mono">{metric.value}</span>
                <span className="text-xs font-bold font-mono text-copper-600 uppercase">{metric.unit}</span>
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-graphite-900 uppercase tracking-wide mb-1">
                {metric.label}
              </h4>
              <p className="text-xs text-industrial-500 leading-relaxed">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          COMPANY INTRODUCTION & CORE CAPABILITIES
          ========================================================================= */}
      <section className="py-20 bg-white border-y border-industrial-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column (Span 6) */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-industrial-100 text-industrial-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <Building2 className="w-3.5 h-3.5 text-copper-600" />
                <span>B2B MANUFACTURING & WHOLESALE SUPPLY</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-graphite-950 tracking-tight mb-4 leading-tight">
                Industrial Capacity Built for Commercial Reliability.
              </h2>
              <p className="text-industrial-600 text-base leading-relaxed mb-6">
                Founded to bridge the gap between heavy precision engineering and reliable wholesale distribution, MERIDIAN supplies certified components, structural profiles, and modular power infrastructure directly to commercial contractors and industrial stockists.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2.5 text-sm text-graphite-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0" />
                  <span>Closed-Loop CNC Machining, Robotic Welding & Fiber Laser Cutting</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-graphite-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0" />
                  <span>Certified Mill Test Certificates (EN 10204 3.1) with 100% Heat Traceability</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-graphite-800 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0" />
                  <span>High-Capacity Warehousing with 12,000 Heavy Pallet Positions</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="px-6 py-3.5 rounded-xl bg-graphite-950 hover:bg-graphite-800 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
                >
                  <span>Company Profile & Philosophy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/infrastructure"
                  className="px-6 py-3.5 rounded-xl bg-industrial-100 hover:bg-industrial-200 text-graphite-900 font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Inspect Factory Floor
                </Link>
              </div>
            </div>

            {/* Right Photographic Feature Card (Span 6) */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-industrial-300 shadow-xl bg-graphite-950">
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=85"
                  alt="MERIDIAN Automated Welding & Structural Fabrication"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/85 via-transparent to-transparent flex items-end p-6 sm:p-8">
                  <div className="text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-copper-400 block mb-1">
                      PRIMARY PRODUCTION WORKCENTER
                    </span>
                    <h4 className="text-lg font-bold">Structural Fabrication & Robotic Welding Bay</h4>
                    <p className="text-xs text-industrial-300">
                      Processing up to 32 mm heavy steel plate with zero thermal distortion and radiographic weld integrity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PRODUCT CATEGORIES & CATALOGUE PREVIEW
          ========================================================================= */}
      <section className="py-20 bg-industrial-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-copper-100 text-copper-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <Boxes className="w-3.5 h-3.5 text-copper-600" />
                <span>ENGINEERED B2B PRODUCT CATALOGUE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-graphite-950 tracking-tight">
                Featured Industrial Products & Supply SKUs
              </h2>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-xs font-bold text-copper-600 hover:text-copper-700 font-mono uppercase tracking-wider"
            >
              <span>View Full 10-Category Catalogue</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-industrial-200 overflow-hidden shadow-sm hover:shadow-lg hover:border-copper-500/80 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Product Image */}
                  <div className="relative aspect-[4/3] w-full bg-graphite-950 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-graphite-950/80 backdrop-blur-md text-[10px] font-mono text-copper-400 border border-copper-500/40">
                      {product.partNumber}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <span className="text-[10px] font-mono font-bold text-industrial-500 uppercase tracking-wider block mb-1">
                      {product.categoryLabel}
                    </span>
                    <h3 className="font-bold text-base text-graphite-950 group-hover:text-copper-600 transition-colors line-clamp-2 mb-2 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-industrial-600 line-clamp-2 leading-relaxed mb-4">
                      {product.shortDesc}
                    </p>

                    <div className="p-2.5 rounded-lg bg-industrial-50 border border-industrial-100 text-[11px] font-mono text-industrial-700 mb-3 space-y-1">
                      <div className="flex justify-between">
                        <span className="text-industrial-400">TOLERANCE:</span>
                        <span className="font-semibold text-graphite-900">{product.specifications.tolerance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-industrial-400">MOQ:</span>
                        <span className="font-semibold text-graphite-900">{product.moq}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-5 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => openProductDetail(product)}
                    className="py-2.5 px-3 rounded-xl bg-industrial-100 hover:bg-industrial-200 text-graphite-900 text-xs font-bold text-center transition-all cursor-pointer"
                  >
                    Specs
                  </button>
                  <button
                    onClick={() => openRfq(product.name)}
                    className="py-2.5 px-3 rounded-xl bg-copper-600 hover:bg-copper-500 text-white text-xs font-bold text-center shadow-copper-glow transition-all cursor-pointer"
                  >
                    Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MANUFACTURING CAPABILITIES OVERVIEW (6 Production Pillars)
          ========================================================================= */}
      <section className="py-20 bg-graphite-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-graphite-900 border border-copper-500/50 text-copper-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>ADVANCED PRODUCTION WORKCENTERS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 leading-tight">
              Integrated Manufacturing Capabilities
            </h2>
            <p className="text-industrial-300 text-base sm:text-lg">
              Operating dedicated industrial cells equipped with multi-axis CNC machines, synchronized press brakes, robotic welding, and automated chemical plating.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manufacturingCapabilities.map((cap) => (
              <div
                key={cap.id}
                className="bg-graphite-900 border border-industrial-700/80 rounded-2xl overflow-hidden hover:border-copper-500 transition-all flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/9] w-full bg-black overflow-hidden">
                  <Image
                    src={cap.image}
                    alt={cap.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 text-xs font-mono text-copper-400 font-bold">
                    {cap.capacityMetric}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-heading font-extrabold text-lg text-white mb-2 group-hover:text-copper-300 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-xs text-industrial-400 leading-relaxed mb-4">
                    {cap.description}
                  </p>

                  <div className="space-y-1.5 border-t border-industrial-800 pt-3">
                    {cap.machineryEmployed.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] text-industrial-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-copper-500 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href="/manufacturing"
                    className="inline-flex items-center gap-2 text-xs font-bold text-copper-400 hover:text-copper-300 font-mono uppercase tracking-wider"
                  >
                    <span>Inspect Process Workflow</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INDUSTRIES SERVED (Application Sectors)
          ========================================================================= */}
      <section className="py-20 bg-white border-y border-industrial-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-industrial-100 text-industrial-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <Layers className="w-3.5 h-3.5 text-copper-600" />
                <span>COMMERCIAL APPLICATION SECTORS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-graphite-950 tracking-tight">
                Industries We Partner With & Supply
              </h2>
            </div>

            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-xs font-bold text-copper-600 hover:text-copper-700 font-mono uppercase tracking-wider"
            >
              <span>View All 10 Industry Applications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredIndustries.map((ind) => (
              <div 
                key={ind.id}
                className="p-6 rounded-2xl bg-industrial-50 border border-industrial-200 hover:bg-white hover:border-copper-500 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-copper-600 uppercase tracking-widest block mb-1">
                    TARGET APPLICATION
                  </span>
                  <h3 className="font-heading font-extrabold text-base text-graphite-950 mb-2">
                    {ind.name}
                  </h3>
                  <p className="text-xs text-industrial-600 leading-relaxed mb-4">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-industrial-200/80">
                  <span className="text-[10px] font-mono text-industrial-400 block mb-1">SUPPLIED ITEMS:</span>
                  <p className="text-[11px] font-semibold text-graphite-800">
                    {ind.keyProductsSupplied.slice(0, 2).join(' • ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHOLESALE, DISTRIBUTOR & ENTERPRISE RFQ BANNER
          ========================================================================= */}
      <section className="py-20 bg-graphite-900 relative overflow-hidden text-white border-t border-industrial-800">
        <div className="absolute inset-0 opacity-10 bg-industrial-dots pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-graphite-950 border border-copper-500/50 text-copper-400 text-xs font-mono font-bold uppercase tracking-widest mb-6">
            <Truck className="w-4 h-4 text-copper-400" />
            <span>GLOBAL WHOLESALE PARTNERSHIPS & TIERED REBATES</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">
            Scale Your Supply Chain with MERIDIAN.
          </h2>

          <p className="text-industrial-300 text-base sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need a one-time project consignment of 200 tons of structural steel or recurring weekly shipments of precision flanges and fasteners, our commercial desk is ready to support you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openRfq()}
              className="w-full sm:w-auto px-8 py-4 bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-base tracking-wider uppercase rounded-xl shadow-copper-glow transition-all cursor-pointer"
            >
              Request Commercial Bulk Quote
            </button>
            <Link
              href="/wholesale"
              className="w-full sm:w-auto px-8 py-4 bg-graphite-800 hover:bg-graphite-700 text-white border border-industrial-600 font-heading font-bold text-base tracking-wider uppercase rounded-xl transition-all"
            >
              Explore Distributor Partnerships
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
