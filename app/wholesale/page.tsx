'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Truck, 
  Boxes, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Calculator, 
  Building2, 
  Users, 
  Sparkles, 
  Send,
  MessageSquare,
  PackageCheck,
  BadgePercent
} from 'lucide-react';
import { useRfq } from '../../components/RfqContext';

export default function WholesalePage() {
  const { openRfq } = useRfq();

  const [distributorData, setDistributorData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    territory: '',
    annualVolume: '100 – 500 Metric Tonnes / $250k – $1M',
    experienceYears: '5+ Years Active Distribution',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!distributorData.businessName || !distributorData.contactPerson || !distributorData.email) return;

    setLoading(true);
    setTimeout(() => {
      const generatedTicket = `MER-DIS-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(generatedTicket);
      setLoading(false);
      setSubmitted(true);
    }, 1100);
  };

  const partnerBenefits = [
    {
      title: 'Tiered Factory Wholesale Pricing',
      desc: 'Significant volume-based cost breaks direct from our production plant, eliminating middleman broker markups and maximizing margin for our regional stockists.'
    },
    {
      title: 'Protected Territorial Distribution',
      desc: 'Exclusive regional distributor agreements for authorized partners who commit to regional inventory buffers and active contractor fulfillment.'
    },
    {
      title: 'Priority Manufacturing Allocation',
      desc: 'Reserved rolling mill and CNC turning capacity during peak construction seasons, ensuring our distributors never face stock-out penalties.'
    },
    {
      title: 'Comprehensive Technical Collateral',
      desc: 'Complete white-label and co-branded technical data sheets, mill test certificates (MTC 3.1), and digital catalogue embeds to accelerate sales.'
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* =========================================================================
          HERO SECTION (MANDATORY: Atmospheric Photographic Industrial Background)
          ========================================================================= */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden py-24 sm:py-32">
        {/* Full-bleed Industrial Photographic Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=85"
            alt="MERIDIAN High-Bay Automated Pallet Warehouse & Freight Logistics"
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
              <Truck className="w-3.5 h-3.5 text-copper-400" />
              <span>GLOBAL WHOLESALE SUPPLY // BULK PROCUREMENT PORTAL</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
              Reliable Bulk Supply &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 via-amber-300 to-copper-200">
                Distributor Partnerships.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              We empower trade stockists, commercial contractors, and regional wholesalers with factory-direct bulk pricing, 12,000 pallet inventory buffers, and global container dispatch.
            </p>

            {/* Mandatory High-Contrast Solid CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#distributor-form"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-base tracking-wider uppercase rounded-xl shadow-copper-glow border border-copper-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Users className="w-5 h-5 text-white" />
                <span>Become an Authorized Distributor</span>
              </a>

              <button
                onClick={() => openRfq('Bulk Wholesale Supply Agreement')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-graphite-900 hover:bg-graphite-800 text-white border-2 border-industrial-400 hover:border-white font-heading font-bold text-base tracking-wider uppercase rounded-xl backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-copper-400" />
                <span>Request Bulk Wholesale Pricing</span>
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
            <strong>Demonstration Platform Notice:</strong> MERIDIAN Manufacturing & Supply Co. is an industry-specific digital demonstration. All wholesale discounts, distributor terms, and logistics benchmarks shown are illustrative demonstration figures.
          </span>
        </div>
      </section>

      {/* =========================================================================
          WHOLESALE ADVANTAGES & LOGISTICS CAPABILITIES
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-industrial-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold text-copper-600 uppercase tracking-widest block mb-1">
              B2B CHANNEL VALUE PROPOSITION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-graphite-950 tracking-tight mb-4">
              Why Global Stockists Choose MERIDIAN
            </h2>
            <p className="text-industrial-600 text-base">
              We understand that wholesale businesses live and die by shipment punctuality, uniform metallurgy, and reliable commercial pricing structures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBenefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="p-7 rounded-2xl bg-industrial-50 border border-industrial-200 hover:bg-white hover:border-copper-500 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-copper-100 text-copper-600 font-mono font-black text-sm flex items-center justify-center mb-5">
                    0{idx + 1}
                  </div>
                  <h4 className="font-heading font-extrabold text-base text-graphite-950 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-industrial-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE DISTRIBUTOR ENQUIRY APPLICATION FORM
          ========================================================================= */}
      <section id="distributor-form" className="py-20 bg-industrial-50 border-b border-industrial-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Info Column (Span 5) */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-copper-100 text-copper-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <Users className="w-3.5 h-3.5 text-copper-600" />
                <span>EXPAND YOUR DISTRIBUTION REACH</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-graphite-950 mb-4 leading-tight">
                Apply for an Authorized Regional Dealership.
              </h2>
              <p className="text-industrial-600 text-sm leading-relaxed mb-6">
                We are actively evaluating qualified wholesale stockists, regional industrial supply houses, and commercial trade distributors for non-exclusive and exclusive territories.
              </p>

              <div className="space-y-3 mb-8 text-xs sm:text-sm text-graphite-800 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0" />
                  <span>Direct Factory Credit Lines (30/60 Days for Qualified Partners)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0" />
                  <span>Co-Op Marketing & Trade Show Exhibition Support</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0" />
                  <span>Quarterly Volume Rebates Paid Direct via Wire</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-industrial-200 text-xs text-industrial-600 font-mono">
                <span className="font-bold text-copper-600 block mb-1">DISTRIBUTOR HOTLINE:</span>
                <p>Call our Channel Development VP at <strong>+91 80 4912 7715</strong> for immediate territory verification.</p>
              </div>
            </div>

            {/* Right Form Column (Span 7) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-industrial-200 p-8 sm:p-10 shadow-lg">
                <h3 className="font-heading font-extrabold text-2xl text-graphite-950 mb-2">
                  Distributor Partnership Application
                </h3>
                <p className="text-xs text-industrial-500 mb-8">
                  Submit your corporate credentials to receive our commercial dealer kit and price index.
                </p>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 animate-fadeIn">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
                      <div>
                        <h4 className="text-xl font-bold">Application Successfully Logged!</h4>
                        <p className="text-xs text-emerald-700">Dossier Ticket ID: <strong className="font-mono text-emerald-900">{ticketId}</strong></p>
                      </div>
                    </div>
                    <p className="text-sm text-emerald-800 leading-relaxed mb-6">
                      Thank you, <strong>{distributorData.contactPerson}</strong>. Your dealership application for <strong>{distributorData.businessName}</strong> covering territory <em>{distributorData.territory}</em> has been transmitted to our channel development council.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase text-industrial-600 mb-1">
                          Company / Trading Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={distributorData.businessName}
                          onChange={(e) => setDistributorData({ ...distributorData, businessName: e.target.value })}
                          placeholder="e.g. Apex Industrial Hardware Ltd."
                          className="w-full px-4 py-3 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold uppercase text-industrial-600 mb-1">
                          Key Contact Person *
                        </label>
                        <input
                          type="text"
                          required
                          value={distributorData.contactPerson}
                          onChange={(e) => setDistributorData({ ...distributorData, contactPerson: e.target.value })}
                          placeholder="e.g. Manoj Sharma"
                          className="w-full px-4 py-3 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase text-industrial-600 mb-1">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={distributorData.email}
                          onChange={(e) => setDistributorData({ ...distributorData, email: e.target.value })}
                          placeholder="procurement@apex.com"
                          className="w-full px-4 py-3 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold uppercase text-industrial-600 mb-1">
                          Mobile / Phone *
                        </label>
                        <input
                          type="tel"
                          required
                          value={distributorData.phone}
                          onChange={(e) => setDistributorData({ ...distributorData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono font-bold uppercase text-industrial-600 mb-1">
                          Proposed Target Territory / State
                        </label>
                        <input
                          type="text"
                          required
                          value={distributorData.territory}
                          onChange={(e) => setDistributorData({ ...distributorData, territory: e.target.value })}
                          placeholder="e.g. Western Maharashtra & Gujarat"
                          className="w-full px-4 py-3 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-mono font-bold uppercase text-industrial-600 mb-1">
                          Estimated Annual Procurement Volume
                        </label>
                        <select
                          value={distributorData.annualVolume}
                          onChange={(e) => setDistributorData({ ...distributorData, annualVolume: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900 bg-white"
                        >
                          <option value="50 – 100 Metric Tonnes / $100k – $250k">50 – 100 Metric Tonnes / $100k – $250k</option>
                          <option value="100 – 500 Metric Tonnes / $250k – $1M">100 – 500 Metric Tonnes / $250k – $1M</option>
                          <option value="500+ Metric Tonnes / $1M+ Multi-Year">500+ Metric Tonnes / $1M+ Multi-Year</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-industrial-600 mb-1">
                        Current Distribution Channels / Existing Client Base
                      </label>
                      <textarea
                        rows={3}
                        value={distributorData.message}
                        onChange={(e) => setDistributorData({ ...distributorData, message: e.target.value })}
                        placeholder="Mention your current product lines, warehouse square footage, or key industrial client accounts..."
                        className="w-full px-4 py-3 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 rounded-xl bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-sm uppercase tracking-wider shadow-copper-glow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                    >
                      <Send className="w-4 h-4" />
                      <span>{loading ? 'Submitting Application...' : 'Submit Dealership Application'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
