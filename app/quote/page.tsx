'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Calculator, 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  Building2, 
  ShieldCheck, 
  Clock, 
  FileText, 
  Upload,
  MessageSquare,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function QuotePage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    businessType: 'Wholesale Distributor / Stockist',
    productCategory: 'Industrial Components',
    productName: '',
    quantity: '500',
    unit: 'Units / Pieces',
    deliveryLocation: '',
    timeline: 'Standard (10–14 Business Days)',
    customization: '',
    fileName: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactPerson || !formData.email || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      const generated = `MER-RFQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(generated);
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, fileName: e.target.files[0].name });
    }
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
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2000&q=85"
            alt="MERIDIAN Industrial Machinery Drive Units and Commercial Assembly Floor"
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
              <Calculator className="w-3.5 h-3.5 text-copper-400" />
              <span>ENTERPRISE RFQ PORTAL // PRO-FORMA COMMERCIAL ESTIMATES</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
              Request Commercial Bulk Quotation &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 via-amber-300 to-copper-200">
                Supply Terms.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              Submit your project bill of materials, dimensional specifications, or wholesale volume requirements to receive formal tiered pricing, lead time forecasts, and freight terms.
            </p>

            {/* Mandatory High-Contrast Solid CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-base tracking-wider uppercase rounded-xl shadow-copper-glow border border-copper-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-white" />
                <span>Fill Commercial RFQ Form</span>
              </a>

              <a
                href="https://wa.me/918049127700?text=Hello%20MERIDIAN%20Pricing%20Desk%2C%20I%20would%20like%20to%20request%20a%20commercial%20quotation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-base tracking-wider uppercase rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>Instant WhatsApp Estimations</span>
              </a>
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
            <strong>Demonstration Platform Notice:</strong> MERIDIAN Manufacturing & Supply Co. is an industry-specific digital demonstration. In a live production system, submitted RFQs integrate with your ERP system (SAP/Oracle/Odoo) and email gateway.
          </span>
        </div>
      </section>

      {/* =========================================================================
          B2B QUOTATION REQUEST FORM
          ========================================================================= */}
      <section id="quote-form" className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-industrial-200 p-8 sm:p-12 shadow-xl">
          
          <div className="border-b border-industrial-200 pb-6 mb-8">
            <span className="text-xs font-mono font-bold text-copper-600 uppercase tracking-widest block mb-1">
              OFFICIAL B2B REQUISITION DOSSIER
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-graphite-950">
              Commercial Quotation & Supply Specification Form
            </h2>
            <p className="text-xs sm:text-sm text-industrial-500 mt-1">
              Complete the parameters below. Standard turnaround for pro-forma pricing is 1 business day.
            </p>
          </div>

          {submitted ? (
            <div className="py-8 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-300">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-black text-graphite-950 mb-2">
                RFQ Successfully Registered
              </h3>
              <p className="text-xs font-mono text-copper-600 font-bold mb-6">
                OFFICIAL REFERENCE DOSSIER: {ticketId}
              </p>

              <div className="max-w-lg mx-auto p-5 rounded-2xl bg-industrial-50 border border-industrial-200 text-left mb-8 font-mono text-xs space-y-2">
                <div className="flex justify-between border-b border-industrial-200 pb-1.5">
                  <span className="text-industrial-400">APPLICANT ENTERPRISE:</span>
                  <span className="font-bold text-graphite-900">{formData.companyName}</span>
                </div>
                <div className="flex justify-between border-b border-industrial-200 pb-1.5">
                  <span className="text-industrial-400">CONTACT PERSON:</span>
                  <span className="text-graphite-900">{formData.contactPerson}</span>
                </div>
                <div className="flex justify-between border-b border-industrial-200 pb-1.5">
                  <span className="text-industrial-400">PRODUCT CATEGORY:</span>
                  <span className="text-graphite-900">{formData.productCategory}</span>
                </div>
                <div className="flex justify-between border-b border-industrial-200 pb-1.5">
                  <span className="text-industrial-400">VOLUME ESTIMATE:</span>
                  <span className="font-bold text-copper-700">{formData.quantity} {formData.unit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-industrial-400">DESTINATION PORT:</span>
                  <span className="text-graphite-900">{formData.deliveryLocation || 'FOB Factory Warehouse'}</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl bg-copper-600 hover:bg-copper-500 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Submit Another Requisition
                </button>
                <a
                  href={`https://wa.me/918049127700?text=Hello%20MERIDIAN%20Pricing%20Desk%2C%20I%20have%20submitted%20RFQ%20ticket%20${ticketId}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-graphite-900 hover:bg-graphite-800 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Track RFQ on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Company & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                    Company / Organization Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Sterling Infrastructure Consortium"
                    className="w-full px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                    Contact Person Name & Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="e.g. Sarah Jenkins, Head of Purchasing"
                    className="w-full px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="s.jenkins@sterling-infra.com"
                    className="w-full px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                    Direct Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                  />
                </div>
              </div>

              {/* Row 3: Business Type & Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                    Business Model / Sector
                  </label>
                  <select
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900 bg-white"
                  >
                    <option value="Wholesale Distributor / Stockist">Wholesale Distributor / Stockist</option>
                    <option value="Industrial OEM Manufacturer">Industrial OEM Manufacturer</option>
                    <option value="EPC / Infrastructure Contractor">EPC / Infrastructure Contractor</option>
                    <option value="Retail Hardware & Trade Supplier">Retail Hardware & Trade Supplier</option>
                    <option value="Government / Institutional Procurement">Government / Institutional Procurement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                    Product Category
                  </label>
                  <select
                    value={formData.productCategory}
                    onChange={(e) => setFormData({ ...formData, productCategory: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900 bg-white"
                  >
                    <option value="Industrial Components">Industrial Components</option>
                    <option value="Metal Products & Building Materials">Metal Products & Building Materials</option>
                    <option value="Packaging Materials">Packaging Materials</option>
                    <option value="Electrical Products & Busways">Electrical Products & Busways</option>
                    <option value="Hardware & Structural Fasteners">Hardware & Structural Fasteners</option>
                    <option value="Machinery & Gearboxes">Machinery & Gearboxes</option>
                    <option value="Raw Materials & Metallurgy">Raw Materials & Metallurgy</option>
                    <option value="Custom-Manufactured Products">Custom-Manufactured Products</option>
                  </select>
                </div>
              </div>

              {/* Product Name or Specification */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                  Product Name or Target Specification
                </label>
                <input
                  type="text"
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  placeholder="e.g. S355JR Structural H-Beams (UB 305x165) or Class 300 Ball Valves"
                  className="w-full px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                />
              </div>

              {/* Row 4: Volume, Unit, Delivery Location */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    placeholder="e.g. 500"
                    className="w-full px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                    Unit of Measurement
                  </label>
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900 bg-white"
                  >
                    <option value="Units / Pieces">Units / Pieces</option>
                    <option value="Metric Tonnes (MT)">Metric Tonnes (MT)</option>
                    <option value="Full Pallets (Standard Euro)">Full Pallets (Standard Euro)</option>
                    <option value="Running Meters (Feeder Run)">Running Meters (Feeder Run)</option>
                    <option value="Full 20ft / 40ft Container Load">Full 20ft / 40ft Container Load</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                    Target Destination / Port
                  </label>
                  <input
                    type="text"
                    value={formData.deliveryLocation}
                    onChange={(e) => setFormData({ ...formData, deliveryLocation: e.target.value })}
                    placeholder="e.g. Nhava Sheva / Singapore Port"
                    className="w-full px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                  />
                </div>
              </div>

              {/* Delivery Timeline & File Attachment */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                    Required Delivery Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900 bg-white"
                  >
                    <option value="Urgent Dispatch (3–5 Business Days)">Urgent Dispatch (3–5 Business Days)</option>
                    <option value="Standard (10–14 Business Days)">Standard (10–14 Business Days)</option>
                    <option value="Scheduled Monthly Consignment">Scheduled Monthly Consignment</option>
                    <option value="Project Staged Over 6 Months">Project Staged Over 6 Months</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                    Attach Specification / CAD File (Optional)
                  </label>
                  <div className="relative border-2 border-dashed border-industrial-300 hover:border-copper-500 rounded-xl p-3 text-center transition-all">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="flex items-center justify-center gap-2 text-xs font-mono text-industrial-500">
                      <Upload className="w-4 h-4 text-copper-600" />
                      <span>{formData.fileName || 'Upload PDF / DWG / STP (Max 25MB)'}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customization Details */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                  Technical Details, Dimensional Tolerances or Special Requirements
                </label>
                <textarea
                  rows={4}
                  value={formData.customization}
                  onChange={(e) => setFormData({ ...formData, customization: e.target.value })}
                  placeholder="Specify material grades, surface coatings (galvanized/pickled), third-party inspection agency (TUV/SGS), or annual call-off schedules..."
                  className="w-full px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-base uppercase tracking-wider shadow-copper-glow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                <Send className="w-5 h-5" />
                <span>{loading ? 'Processing Requisition...' : 'Transmit Requisition for Commercial Review'}</span>
              </button>
            </form>
          )}

        </div>
      </section>
    </div>
  );
}
