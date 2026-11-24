'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  Boxes, 
  Search, 
  Filter, 
  ArrowRight, 
  Calculator, 
  ShieldCheck, 
  CheckCircle2, 
  SlidersHorizontal,
  Layers,
  Sparkles,
  Download,
  Info
} from 'lucide-react';
import { productsData, Product } from '../../data/manufacturingData';
import { useRfq } from '../../components/RfqContext';

export default function ProductsPage() {
  const { openRfq, openProductDetail } = useRfq();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'leadTime'>('featured');

  const categories = [
    { id: 'all', label: 'All Categories (10 SKUs)' },
    { id: 'components', label: 'Industrial Components' },
    { id: 'metals', label: 'Metal & Building Materials' },
    { id: 'packaging', label: 'Packaging & Logistics' },
    { id: 'electrical', label: 'Electrical Products' },
    { id: 'hardware', label: 'Hardware & Fittings' },
    { id: 'machinery', label: 'Machinery & Equipment' },
    { id: 'raw-materials', label: 'Raw Materials & Coils' },
    { id: 'custom', label: 'Custom-Manufactured' },
  ];

  const filteredProducts = useMemo(() => {
    let result = productsData.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.partNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.specifications.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'leadTime') {
      result.sort((a, b) => a.leadTime.localeCompare(b.leadTime));
    }

    return result;
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Industrial Background)
          ========================================================================= */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        {/* Full-bleed Industrial Photographic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=2000&q=85"
            alt="MERIDIAN Industrial Hardware, Precision Fasteners and Component Racks"
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
              <Boxes className="w-3.5 h-3.5 text-copper-400" />
              <span>B2B PRODUCT MASTER CATALOGUE // 2026 EDITION</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
              Certified Industrial Supplies &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 via-amber-300 to-copper-200">
                Precision Hardware.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              Browse our comprehensive catalogue of forged flanges, structural universal beams, heavy corrugated packaging, high-amperage busways, and precision fasteners engineered to strict international standards.
            </p>

            {/* Mandatory High-Contrast Solid CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#catalogue-browser"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-base tracking-wider uppercase rounded-xl shadow-copper-glow border border-copper-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Search className="w-5 h-5 text-white" />
                <span>Search Products & Specifications</span>
              </a>

              <button
                onClick={() => openRfq()}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-graphite-900 hover:bg-graphite-800 text-white border-2 border-industrial-400 hover:border-white font-heading font-bold text-base tracking-wider uppercase rounded-xl backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-copper-400" />
                <span>Request Custom Bulk Pricing</span>
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
            <strong>Demonstration Catalogue:</strong> All products, minimum order quantities (MOQ), and tolerances below are illustrative B2B demonstration items. Click &ldquo;Specs&rdquo; or &ldquo;Request Price&rdquo; to test our interactive RFQ workflows.
          </span>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE SEARCH, CATEGORY FILTER & CATALOGUE GRID
          ========================================================================= */}
      <section id="catalogue-browser" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-industrial-200 shadow-md mb-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-industrial-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by part number (e.g. MRD-FLG), material (e.g. A105, Copper), or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 focus:border-copper-500 text-sm text-graphite-900 placeholder-industrial-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-industrial-400 hover:text-industrial-600 px-1.5 py-0.5 rounded bg-industrial-100"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3 shrink-0">
              <span className="text-xs font-mono font-bold text-industrial-500 uppercase">SORT:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-xs font-mono text-graphite-900 bg-white"
              >
                <option value="featured">Featured Order</option>
                <option value="name">Product Name (A–Z)</option>
                <option value="leadTime">Lead Time (Fastest First)</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-copper-600 text-white shadow-copper-glow'
                    : 'bg-industrial-100 text-industrial-600 hover:bg-industrial-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Active Results Summary */}
        <div className="flex items-center justify-between text-xs font-mono text-industrial-500 mb-6">
          <span>DISPLAYING <strong>{filteredProducts.length}</strong> OF {productsData.length} VERIFIED INDUSTRIAL SKUS</span>
          <span className="hidden sm:inline-block">PRICING TIERS: WHOLESALE CONTRACTOR & DISTRIBUTOR RATES</span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-industrial-200">
            <Boxes className="w-12 h-12 text-industrial-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-graphite-950 mb-2">No Matching Products Found</h3>
            <p className="text-industrial-500 text-sm max-w-md mx-auto mb-6">
              No industrial items matched &ldquo;{searchQuery}&rdquo;. Try another material grade, part specification, or reset your filters.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-6 py-2.5 rounded-xl bg-copper-600 text-white text-xs font-bold hover:bg-copper-500 transition-all cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-industrial-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-copper-500/80 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Image with Part Number Tag */}
                  <div className="relative aspect-[16/10] w-full bg-graphite-950 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-graphite-950/85 backdrop-blur-md text-[11px] font-mono font-bold text-copper-400 border border-copper-500/50">
                      {product.partNumber}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <span className="text-[10px] font-mono font-bold text-industrial-500 uppercase tracking-widest block mb-1">
                      {product.categoryLabel}
                    </span>
                    <h3 className="font-heading font-extrabold text-lg text-graphite-950 group-hover:text-copper-600 transition-colors line-clamp-2 mb-2 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-industrial-600 line-clamp-2 leading-relaxed mb-4">
                      {product.shortDesc}
                    </p>

                    {/* Technical Matrix Snapshot */}
                    <div className="p-3 rounded-xl bg-industrial-50 border border-industrial-100 text-[11px] font-mono text-industrial-700 mb-4 space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-industrial-400">MATERIAL:</span>
                        <span className="font-semibold text-graphite-900 truncate max-w-[160px]">{product.specifications.material}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-industrial-400">TOLERANCE:</span>
                        <span className="font-semibold text-graphite-900">{product.specifications.tolerance}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-industrial-400">STANDARDS:</span>
                        <span className="font-semibold text-graphite-900 truncate max-w-[160px]">{product.specifications.standards}</span>
                      </div>
                      <div className="flex justify-between pt-1 border-t border-industrial-200/60">
                        <span className="text-industrial-400">MOQ:</span>
                        <span className="font-bold text-copper-700">{product.moq}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-2">
                  <button
                    onClick={() => openProductDetail(product)}
                    className="py-3 px-3 rounded-xl bg-industrial-100 hover:bg-industrial-200 text-graphite-900 text-xs font-heading font-bold text-center transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Info className="w-3.5 h-3.5 text-industrial-500" />
                    <span>Specs</span>
                  </button>
                  <button
                    onClick={() => openRfq(product.name)}
                    className="py-3 px-3 rounded-xl bg-copper-600 hover:bg-copper-500 text-white text-xs font-heading font-bold text-center shadow-copper-glow transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Calculator className="w-3.5 h-3.5" />
                    <span>Enquire / Quote</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* =========================================================================
          CUSTOM SPECIFICATIONS & DRAWING UPLOAD BANNER
          ========================================================================= */}
      <section className="py-16 bg-graphite-950 text-white text-center border-t border-industrial-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Looking for Custom Diameters, Special Alloys or Pre-Cut Beam Lengths?
          </h2>
          <p className="text-industrial-300 text-sm max-w-xl mx-auto mb-8">
            Our toolroom engineers and application specialists evaluate custom 2D/3D technical drawings with fast turnaround times.
          </p>
          <button
            onClick={() => openRfq('Custom Dimension / Special Alloy Inquiry')}
            className="px-8 py-3.5 rounded-xl bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-copper-glow transition-all cursor-pointer"
          >
            Submit Custom Specification for Review
          </button>
        </div>
      </section>
    </div>
  );
}
