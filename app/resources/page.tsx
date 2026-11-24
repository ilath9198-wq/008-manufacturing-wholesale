'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight, 
  Calculator, 
  HelpCircle, 
  ChevronDown,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { technicalDocuments, TechnicalDocument } from '../../data/manufacturingData';
import { useRfq } from '../../components/RfqContext';

export default function ResourcesPage() {
  const { openRfq } = useRfq();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const categories = [
    { id: 'all', label: 'All Documents (8 Items)' },
    { id: 'catalogue', label: 'Product Catalogues' },
    { id: 'tds', label: 'Technical Data Sheets (TDS)' },
    { id: 'quality', label: 'Quality & Compliance' },
    { id: 'wholesale', label: 'Wholesale & Procurement' },
  ];

  const faqs = [
    {
      q: 'What is the standard production lead time for bulk orders?',
      a: 'For standard stock components (flanges, structural fasteners, corrugated export cartons), typical dispatch occurs within 3 to 7 business days. For custom rolling mill runs or high-tonnage structural steel, production lead time averages 10 to 18 business days.'
    },
    {
      q: 'Do you provide certified Mill Test Certificates (MTC) with shipments?',
      a: 'Yes. Every production heat lot is issued an authentic EN 10204 Type 3.1 inspection certificate confirming optical emission spectrometry chemical analysis, tensile yield/elongation, and ultrasonic flaw testing.'
    },
    {
      q: 'Can MERIDIAN accommodate custom OEM tooling and proprietary CAD files?',
      a: 'Yes. Our toolroom utilizes 5-axis CNC machining, wire EDM, and integrated FEA simulation to build custom injection molds, progressive stamping dies, and specialized casting tooling under strict Non-Disclosure Agreements (NDA).'
    },
    {
      q: 'What are your export shipping and Incoterms capabilities?',
      a: 'We ship regularly under FOB (Free On Board), CIF (Cost, Insurance & Freight), and DDP (Delivered Duty Paid) terms through primary container terminals in Nhava Sheva and Chennai, with full customs clearance support.'
    },
    {
      q: 'How does MERIDIAN handle minimum order quantities (MOQs)?',
      a: 'We operate as a genuine B2B industrial manufacturer and wholesale distributor. Standard MOQs are tiered per product category (e.g. 50 units for forged flanges, 10 metric tonnes for structural steel beams, and 1,000 units for fasteners). Pilot sample runs are available for qualified OEM contracts.'
    }
  ];

  const filteredDocs = useMemo(() => {
    return technicalDocuments.filter((doc) => {
      const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
      const matchesSearch = 
        doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.docCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleDownload = (doc: TechnicalDocument) => {
    setDownloadingId(doc.id);
    setToastMessage(`Initiating verified technical download: ${doc.title}...`);

    setTimeout(() => {
      setDownloadingId(null);
      setToastMessage(`Download simulated! In a production deployment, this delivers the official ${doc.fileSize} ${doc.fileFormat} (${doc.pages} Pages).`);
      setTimeout(() => setToastMessage(null), 4500);
    }, 1100);
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Industrial Background)
          ========================================================================= */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        {/* Full-bleed Industrial Photographic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=2000&q=85"
            alt="MERIDIAN Senior Quality Engineer Reviewing Technical Blueprints and Data Sheets"
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
              <FileText className="w-3.5 h-3.5 text-copper-400" />
              <span>TECHNICAL KNOWLEDGE REPOSITORY // OPEN B2B ACCESS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
              Technical Data Sheets,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 via-amber-300 to-copper-200">
                Catalogues
              </span>{' '}
              & Standards.
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              Download audited engineering specifications, pressure ratings, chemical composition charts, and bulk wholesale procurement terms direct from our technical library.
            </p>

            {/* Mandatory High-Contrast Solid CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#document-library"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-base tracking-wider uppercase rounded-xl shadow-copper-glow border border-copper-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Search className="w-5 h-5 text-white" />
                <span>Search Document Repository</span>
              </a>

              <button
                onClick={() => openRfq('Custom Specification Documentation Request')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-graphite-900 hover:bg-graphite-800 text-white border-2 border-industrial-400 hover:border-white font-heading font-bold text-base tracking-wider uppercase rounded-xl backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-copper-400" />
                <span>Request Custom Technical Dossier</span>
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
            <strong>Demonstration Document Center:</strong> All downloadable brochures and technical data sheets below are interactive simulated resource files designed to demonstrate enterprise repository delivery.
          </span>
        </div>
      </section>

      {/* =========================================================================
          DOCUMENT SEARCH & REPOSITORY SECTION
          ========================================================================= */}
      <section id="document-library" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Category Filter Toolbar */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-industrial-200 shadow-md mb-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-industrial-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search technical documents (e.g. Master Catalogue, Flanges, Fasteners, MTC)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900 placeholder-industrial-400"
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

            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-industrial-500 shrink-0">
              <Filter className="w-4 h-4 text-copper-600" />
              <span>SHOWING <strong>{filteredDocs.length}</strong> DOCUMENTS</span>
            </div>
          </div>

          {/* Category Tabs */}
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

        {/* Global Toast Notification */}
        {toastMessage && (
          <div className="mb-8 p-4 rounded-xl bg-graphite-950 border border-copper-500/60 text-copper-300 text-xs sm:text-sm font-medium flex items-center justify-between shadow-lg animate-fadeIn">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-copper-400 shrink-0" />
              <span>{toastMessage}</span>
            </div>
            <button 
              onClick={() => setToastMessage(null)} 
              className="text-xs text-copper-200/80 hover:text-white px-2 py-1 rounded bg-graphite-800"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {filteredDocs.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-2xl border border-industrial-200 p-6 sm:p-7 hover:border-copper-500/80 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded bg-industrial-100 text-industrial-700 text-[10px] font-mono font-bold uppercase tracking-wider">
                    {doc.docCode}
                  </span>
                  <span className="text-xs font-mono text-industrial-400 font-semibold">
                    {doc.fileSize} • {doc.pages} Pages
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-base sm:text-lg text-graphite-950 mb-2 leading-snug">
                  {doc.title}
                </h3>

                <p className="text-xs text-industrial-600 leading-relaxed mb-6">
                  {doc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-industrial-100 flex items-center justify-between gap-4">
                <span className="text-xs font-mono text-industrial-500">
                  {doc.categoryLabel}
                </span>

                <button
                  onClick={() => handleDownload(doc)}
                  disabled={downloadingId === doc.id}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-graphite-950 hover:bg-copper-600 text-white text-xs font-mono font-bold transition-all shadow-sm cursor-pointer disabled:opacity-50"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{downloadingId === doc.id ? 'Preparing...' : 'Download PDF'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* =========================================================================
            FREQUENTLY ASKED QUESTIONS (FAQ Accordion)
            ========================================================================= */}
        <div className="max-w-4xl mx-auto pt-10 border-t border-industrial-200">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold text-copper-600 uppercase tracking-widest block mb-1">
              B2B BUYER KNOWLEDGE BASE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-graphite-950">
              Frequently Asked Commercial & Technical Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-2xl border border-industrial-200 bg-white overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-sm sm:text-base text-graphite-950 hover:text-copper-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-industrial-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-copper-600' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-industrial-600 leading-relaxed border-t border-industrial-100 pt-4 bg-industrial-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </section>
    </div>
  );
}
