'use client';

import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calculator, 
  CheckCircle2, 
  Send, 
  Phone, 
  Building2, 
  Mail, 
  User, 
  Package, 
  MapPin, 
  Calendar, 
  FileText, 
  ShieldCheck,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { useRfq } from './RfqContext';

export default function RfqModal() {
  const { isRfqOpen, closeRfq, selectedProduct } = useRfq();

  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [businessType, setBusinessType] = useState('Wholesale Distributor / Stockist');
  const [productCategory, setProductCategory] = useState('Industrial Components');
  const [productSpec, setProductSpec] = useState(selectedProduct || '');
  const [quantity, setQuantity] = useState('500');
  const [unit, setUnit] = useState('Units / Pieces');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [timeline, setTimeline] = useState('Standard (10–14 Business Days)');
  const [notes, setNotes] = useState('');

  const [loading, setLoading] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync selected product
  useEffect(() => {
    if (selectedProduct) {
      setProductSpec(selectedProduct);
    }
  }, [selectedProduct]);

  if (!isRfqOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !contactName || !email || !phone) return;

    setLoading(true);
    setTimeout(() => {
      const generatedTicket = `MER-RFQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(generatedTicket);
      setLoading(false);
      setSubmitted(true);
    }, 1100);
  };

  const handleReset = () => {
    setSubmitted(false);
    setTicketId('');
    closeRfq();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-graphite-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl my-auto bg-graphite-900 border-2 border-industrial-600 rounded-2xl shadow-2xl overflow-hidden animate-console-unfold text-white">
        
        {/* Top Metallic Titlebar */}
        <div className="flex items-center justify-between px-6 py-4 bg-graphite-950 border-b border-industrial-700 select-none">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-copper-600/30 border border-copper-500/50 flex items-center justify-center text-copper-400">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-sm sm:text-base text-white leading-tight">
                MERIDIAN Bulk Quotation & RFQ Portal
              </h3>
              <p className="text-[10px] font-mono text-industrial-400">
                OFFICIAL B2B COMMERCIAL SPECIFICATION TRANSMISSION
              </p>
            </div>
          </div>

          <button
            onClick={closeRfq}
            className="p-1.5 rounded-lg bg-industrial-800 hover:bg-copper-600 text-industrial-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Quotation Form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form or Confirmation View */}
        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto mb-5 shadow-lg">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="inline-block px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 text-xs font-mono font-bold uppercase tracking-wider mb-2 border border-emerald-800">
                TRANSMISSION VERIFIED // RFQ LOGGED
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Bulk Quotation Request Registered
              </h3>

              <div className="max-w-md mx-auto p-4 rounded-xl bg-graphite-950 border border-industrial-700 text-left mb-6 font-mono text-xs">
                <div className="flex justify-between py-1 border-b border-industrial-800">
                  <span className="text-industrial-400">RFQ TICKET ID:</span>
                  <span className="text-copper-400 font-bold">{ticketId}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-industrial-800">
                  <span className="text-industrial-400">COMPANY:</span>
                  <span className="text-white">{companyName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-industrial-800">
                  <span className="text-industrial-400">PRODUCT / SPEC:</span>
                  <span className="text-white truncate max-w-[200px]">{productSpec}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-industrial-400">ESTIMATED VOLUME:</span>
                  <span className="text-white">{quantity} {unit}</span>
                </div>
              </div>

              <p className="text-sm text-industrial-300 max-w-lg mx-auto mb-8 leading-relaxed">
                Thank you, <strong>{contactName}</strong>. Our commercial pricing council and application engineers will review your tolerances and provide formal pro-forma figures to <strong>{email}</strong> within 1 business day.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-copper-600 hover:bg-copper-500 text-white font-bold text-xs uppercase tracking-wider shadow-copper-glow transition-all cursor-pointer"
                >
                  Close & Return
                </button>
                <a
                  href={`https://wa.me/918049127700?text=Hello%20MERIDIAN%20Supply%20Desk%2C%20I%20have%20submitted%20bulk%20RFQ%20ticket%20${ticketId}%20for%20${encodeURIComponent(productSpec)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-graphite-800 hover:bg-graphite-700 text-white border border-industrial-600 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Fast-Track on WhatsApp</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Top Banner Notice */}
              <div className="p-3.5 rounded-xl bg-industrial-950/70 border border-industrial-800 text-xs text-industrial-300 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Enterprise Tier Pricing:</strong> Quotations include tiered volume discounts, certified mill test reports (MTC 3.1), and scheduled freight delivery terms (FOB/CIF/DDP).
                </span>
              </div>

              {/* Company & Contact Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-300 mb-1.5">
                    Company / Enterprise Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Apex Industrial Infrastructure Ltd."
                    className="w-full px-4 py-3 rounded-xl bg-graphite-950 border border-industrial-700 focus:outline-none focus:border-copper-500 text-sm text-white placeholder-industrial-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-300 mb-1.5">
                    Contact Person & Designation *
                  </label>
                  <input
                    type="text"
                    required
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Rajesh Nair, Procurement Lead"
                    className="w-full px-4 py-3 rounded-xl bg-graphite-950 border border-industrial-700 focus:outline-none focus:border-copper-500 text-sm text-white placeholder-industrial-500"
                  />
                </div>
              </div>

              {/* Email & Phone Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-300 mb-1.5">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. procurement@apex-industrial.com"
                    className="w-full px-4 py-3 rounded-xl bg-graphite-950 border border-industrial-700 focus:outline-none focus:border-copper-500 text-sm text-white placeholder-industrial-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-300 mb-1.5">
                    Direct Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-graphite-950 border border-industrial-700 focus:outline-none focus:border-copper-500 text-sm text-white placeholder-industrial-500"
                  />
                </div>
              </div>

              {/* Business Type & Category Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-300 mb-1.5">
                    Business Type / Operational Model
                  </label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-graphite-950 border border-industrial-700 focus:outline-none focus:border-copper-500 text-sm text-white"
                  >
                    <option value="Wholesale Distributor / Stockist">Wholesale Distributor / Stockist</option>
                    <option value="Industrial OEM Manufacturer">Industrial OEM Manufacturer</option>
                    <option value="EPC / Infrastructure Contractor">EPC / Infrastructure Contractor</option>
                    <option value="Retail Hardware & Trade Supplier">Retail Hardware & Trade Supplier</option>
                    <option value="Government / Institutional Procurement">Government / Institutional Procurement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-300 mb-1.5">
                    Primary Product Category
                  </label>
                  <select
                    value={productCategory}
                    onChange={(e) => setProductCategory(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-graphite-950 border border-industrial-700 focus:outline-none focus:border-copper-500 text-sm text-white"
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

              {/* Product Name / Specific Specification */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-industrial-300 mb-1.5">
                  Product Name / Technical Part Specification
                </label>
                <input
                  type="text"
                  value={productSpec}
                  onChange={(e) => setProductSpec(e.target.value)}
                  placeholder="e.g. Heavy-Duty Forged Steel Weld-Neck Pipe Flange (DN150 / Class 300)"
                  className="w-full px-4 py-3 rounded-xl bg-graphite-950 border border-industrial-700 focus:outline-none focus:border-copper-500 text-sm text-white placeholder-industrial-500"
                />
              </div>

              {/* Volume, Unit & Location Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-300 mb-1.5">
                    Required Quantity
                  </label>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="e.g. 500"
                    className="w-full px-4 py-3 rounded-xl bg-graphite-950 border border-industrial-700 focus:outline-none focus:border-copper-500 text-sm text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-300 mb-1.5">
                    Unit of Measure
                  </label>
                  <select
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-graphite-950 border border-industrial-700 focus:outline-none focus:border-copper-500 text-sm text-white"
                  >
                    <option value="Units / Pieces">Units / Pieces</option>
                    <option value="Metric Tonnes (MT)">Metric Tonnes (MT)</option>
                    <option value="Full Pallets (Standard Euro)">Full Pallets (Standard Euro)</option>
                    <option value="Running Meters (Feeder Run)">Running Meters (Feeder Run)</option>
                    <option value="Full 20ft / 40ft Container Load">Full 20ft / 40ft Container Load</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-industrial-300 mb-1.5">
                    Destination Port / City
                  </label>
                  <input
                    type="text"
                    value={deliveryLocation}
                    onChange={(e) => setDeliveryLocation(e.target.value)}
                    placeholder="e.g. Nhava Sheva Port / Chennai"
                    className="w-full px-4 py-3 rounded-xl bg-graphite-950 border border-industrial-700 focus:outline-none focus:border-copper-500 text-sm text-white"
                  />
                </div>
              </div>

              {/* Customization Details / Drawing Notes */}
              <div>
                <label className="block text-xs font-mono font-bold uppercase text-industrial-300 mb-1.5">
                  Technical Tolerances, Surface Finish or Custom CAD Requirements
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Include specific alloy chemistry, dimensional tolerances, third-party inspection (TUV/SGS) preferences, or recurring shipment schedules..."
                  className="w-full px-4 py-3 rounded-xl bg-graphite-950 border border-industrial-700 focus:outline-none focus:border-copper-500 text-sm text-white placeholder-industrial-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-sm uppercase tracking-wider shadow-copper-glow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Transmitting Specification...' : 'Transmit RFQ to Pricing Desk'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
