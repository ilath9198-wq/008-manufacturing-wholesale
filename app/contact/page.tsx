'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  Navigation,
  Calculator,
  ArrowRight
} from 'lucide-react';
import { useRfq } from '../../components/RfqContext';

export default function ContactPage() {
  const { openRfq } = useRfq();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Commercial Supply Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      const generated = `MER-ENQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(generated);
      setLoading(false);
      setSubmitted(true);
    }, 1000);
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
            src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2000&q=85"
            alt="MERIDIAN Global Ocean Freight Container Terminal and Logistics Port"
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
              <Phone className="w-3.5 h-3.5 text-copper-400" />
              <span>FACTORY COMMUNICATIONS // COMMERCIAL RELATIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
              Connect with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 via-amber-300 to-copper-200">
                MERIDIAN Supply
              </span>{' '}
              Headquarters.
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              Whether you are scheduling an on-site factory audit, inquiring about distributor credit lines, or tracking container dispatch schedules, our commercial teams are standing by.
            </p>

            {/* Mandatory High-Contrast Solid CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#enquiry-form"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-base tracking-wider uppercase rounded-xl shadow-copper-glow border border-copper-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Send className="w-5 h-5 text-white" />
                <span>Submit Business Inquiry</span>
              </a>

              <a
                href="https://wa.me/918049127700?text=Hello%20MERIDIAN%20Supply%20Desk%2C%20I%20have%20an%20urgent%20supply%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-base tracking-wider uppercase rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 text-white" />
                <span>WhatsApp Plant Desk</span>
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
            <strong>Demonstration Platform Notice:</strong> MERIDIAN Manufacturing & Supply Co. is an industry-specific digital demonstration. Contact numbers, email addresses, and location data below are illustrative demonstration placeholders.
          </span>
        </div>
      </section>

      {/* =========================================================================
          KEY CONTACT CHANNELS (4 Institutional Cards)
          ========================================================================= */}
      <section className="py-16 -mt-8 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-industrial-200 shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-copper-100 text-copper-600 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-graphite-950 mb-1">Plant Location</h3>
            <p className="text-xs text-industrial-500 mb-3 font-mono">180,000 SQ. FT. COMPLEX</p>
            <p className="text-xs sm:text-sm text-industrial-700 leading-relaxed">
              MERIDIAN Industrial Complex, Plot 42–46, Phase II Industrial Corridor, Peenya / Electronic City, Bangalore – 560058
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-industrial-200 shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-copper-100 text-copper-600 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-graphite-950 mb-1">Direct Helplines</h3>
            <p className="text-xs text-industrial-500 mb-3 font-mono">COMMERCIAL & DISPATCH</p>
            <div className="space-y-1.5 text-xs sm:text-sm text-industrial-700 font-medium">
              <p>Plant Desk: <strong className="text-graphite-950">+91 80 4912 7700</strong></p>
              <p>RFQ Desk: <strong className="text-copper-600">+91 80 4912 7715</strong></p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-industrial-200 shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-copper-100 text-copper-600 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-graphite-950 mb-1">Official Emails</h3>
            <p className="text-xs text-industrial-500 mb-3 font-mono">REPLY IN 24 HOURS</p>
            <div className="space-y-1 text-xs sm:text-sm text-industrial-700 font-medium">
              <p className="truncate">supply.desk@meridian-mfg.com</p>
              <p className="truncate">rfqs@meridian-mfg.com</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-industrial-200 shadow-md hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-copper-100 text-copper-600 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-graphite-950 mb-1">Operational Hours</h3>
            <p className="text-xs text-industrial-500 mb-3 font-mono">CONTINUOUS ROTATION</p>
            <div className="space-y-1 text-xs sm:text-sm text-industrial-700">
              <p><strong>Factory:</strong> 24/7 Multi-Shift</p>
              <p><strong>Sales Desk:</strong> Mon–Sat 8:30 AM – 6:30 PM</p>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE GENERAL BUSINESS INQUIRY FORM
          ========================================================================= */}
      <section id="enquiry-form" className="py-16 bg-white border-y border-industrial-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column (Span 7) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-copper-100 text-copper-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <Send className="w-3.5 h-3.5 text-copper-600" />
                <span>GENERAL COMMERCIAL COMMUNICATIONS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-graphite-950 mb-3">
                Send an Inquiry to Our Commercial Desk
              </h2>
              <p className="text-industrial-600 text-sm leading-relaxed mb-8">
                For non-quote general inquiries, corporate communications, vendor registrations, or media inquiries, submit the form below.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 animate-fadeIn">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">Inquiry Successfully Transmitted!</h3>
                      <p className="text-xs text-emerald-700">Reference Docket: <strong className="font-mono text-emerald-900">{ticketId}</strong></p>
                    </div>
                  </div>
                  <p className="text-sm text-emerald-800 leading-relaxed mb-6">
                    Thank you, <strong>{formData.fullName}</strong>. Your communication regarding <em>{formData.subject}</em> has been assigned to our corporate relations officer. We will respond to <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Submit Another Communication
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                        Contact Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Vikramaditya Rao"
                        className="w-full px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="v.rao@example.com"
                        className="w-full px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                        Phone Number *
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

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                        Inquiry Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900 bg-white"
                      >
                        <option value="General Commercial Supply Inquiry">General Commercial Supply Inquiry</option>
                        <option value="Vendor / Raw Material Supplier Registration">Vendor / Raw Material Supplier Registration</option>
                        <option value="Facility Audit & Site Visit Coordination">Facility Audit & Site Visit Coordination</option>
                        <option value="Billing, Invoicing & Logistics Dispatch">Billing, Invoicing & Logistics Dispatch</option>
                        <option value="Corporate & Partnership Requisitions">Corporate & Partnership Requisitions</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-industrial-700 mb-2">
                      Message / Communication Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please summarize your commercial requirements, intended shipment schedules, or inquiry..."
                      className="w-full px-4 py-3.5 rounded-xl border border-industrial-300 focus:outline-none focus:ring-2 focus:ring-copper-500 text-sm text-graphite-900"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-sm uppercase tracking-wider shadow-copper-glow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'Transmitting Message...' : 'Transmit Business Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Map & Plant Overview (Span 5) */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="p-6 sm:p-8 rounded-3xl bg-graphite-950 text-white border border-industrial-800 mb-6 shadow-xl">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-copper-400 block mb-2">
                  PLANT ACCESS & SECURITY GATES
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white mb-3">
                  Visitor & Heavy Freight Navigation
                </h3>
                <p className="text-xs text-industrial-300 leading-relaxed mb-6">
                  Security Gate 1 is reserved for visitor registration, audits, and commercial meetings. Gate 3 & 4 provide automated weighbridge and high-clearance trailer entry for container dispatch.
                </p>

                <div className="space-y-3 text-xs font-mono text-industrial-300 border-t border-industrial-800 pt-4">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-copper-400 shrink-0" />
                    <span>GPS COORDINATES: 12.9856° N, 77.5120° E</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-copper-400 shrink-0" />
                    <span>HEAVY VEHICLE ENTRY: PHASE II SOUTH GATE</span>
                  </div>
                </div>
              </div>

              {/* Transit & Freight Corridors */}
              <div className="p-6 rounded-2xl bg-industrial-100 border border-industrial-200">
                <h4 className="font-bold text-xs font-mono uppercase text-graphite-900 mb-2">
                  Intermodal Transit Connectivity
                </h4>
                <p className="text-xs text-industrial-600 leading-relaxed">
                  Located within 12 km of National Highway 48 and direct access to Inland Container Depots (ICD). Ocean freight connects through Nhava Sheva and Chennai Port corridors within 36 hours.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
