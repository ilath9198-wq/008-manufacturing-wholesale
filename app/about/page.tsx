'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Target, 
  Compass, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Factory,
  Sparkles,
  Calculator,
  ChevronRight
} from 'lucide-react';
import { useRfq } from '../../components/RfqContext';

export default function AboutPage() {
  const { openRfq } = useRfq();

  const leadershipTeam = [
    {
      name: 'Vikramaditya Singhania',
      role: 'Chief Executive Officer & Managing Director',
      background: '28+ years leading precision heavy engineering, automotive component fabrication, and international B2B export supply chains across Asia and Europe.',
      spec: 'B.Tech (Mechanical Engineering), MBA (Operations)',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=85'
    },
    {
      name: 'Dr. Aris Thorne',
      role: 'Chief Technology Officer & Head of R&D',
      background: 'Former senior metallurgy consultant specializing in finite element analysis, high-strength alloy heat treatment, and multi-axis CNC CAM simulation.',
      spec: 'Ph.D. in Materials Science & Metallurgy',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85'
    },
    {
      name: 'Meera Nambiar',
      role: 'Vice President of Global Quality Assurance',
      background: 'Certified Six Sigma Master Black Belt overseeing ISO 9001, IATF 16949, and ASME pressure vessel compliance audits across all 6 production bays.',
      spec: 'M.S. in Quality Management & Metrology',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85'
    },
    {
      name: 'David Chen',
      role: 'Vice President of Supply Chain & Global Logistics',
      background: 'Directs international container logistics, multimodal freight corridors, bonded inventory buffers, and just-in-time delivery for tier-1 industrial clients.',
      spec: 'Chartered Fellow (CILT), B.S. Industrial Logistics',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=85'
    }
  ];

  const coreValues = [
    {
      title: 'Precision Without Compromise',
      desc: 'We engineer with dimensional tolerances down to ±0.005 mm. In heavy engineering and high-pressure fluid systems, true precision is a matter of safety and operational continuity.'
    },
    {
      title: 'End-to-End Metallurgy Integrity',
      desc: 'Every heat lot is accompanied by certified 100% optical emission chemical spectrometry and tensile verification. We guarantee absolute material authenticity from raw ingot to finished part.'
    },
    {
      title: 'Reliable Wholesale Scale',
      desc: 'Our 180,000 sq. ft. continuous-shift facility ensures industrial buyers and contractors receive their consignments on time, backed by automated pallet warehousing.'
    },
    {
      title: 'Responsible Industrial Stewardship',
      desc: 'We implement underground coolant recycling, chip briquetting, closed-loop electroplating effluent treatment, and energy-efficient servo-electric machinery.'
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
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85"
            alt="MERIDIAN Precision CNC Milling Bay and Machinists"
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
              <Building2 className="w-3.5 h-3.5 text-copper-400" />
              <span>CORPORATE PROFILE // FOUNDED ON ENGINEERING INTEGRITY</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md">
              Built with Precision.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-copper-400 via-amber-300 to-copper-200">
                Delivered with Confidence.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 max-w-2xl font-normal drop-shadow">
              Learn about MERIDIAN Manufacturing & Supply Co., our multi-decade engineering heritage, certified production facilities, and commitment to powering global industrial infrastructure.
            </p>

            {/* Mandatory High-Contrast Solid CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/infrastructure"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-base tracking-wider uppercase rounded-xl shadow-copper-glow border border-copper-400 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Factory className="w-5 h-5 text-white" />
                <span>Tour Our Manufacturing Plant</span>
              </Link>

              <button
                onClick={() => openRfq()}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-graphite-900 hover:bg-graphite-800 text-white border-2 border-industrial-400 hover:border-white font-heading font-bold text-base tracking-wider uppercase rounded-xl backdrop-blur-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-copper-400" />
                <span>Request Corporate RFQ</span>
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
            <strong>Demonstration Profile:</strong> MERIDIAN Manufacturing & Supply Co. is an industry-specific digital demonstration. The company history, leadership profiles, and operational metrics below illustrate a turnkey enterprise industrial website.
          </span>
        </div>
      </section>

      {/* =========================================================================
          HERITAGE STORY & OPERATIONAL APPROACH
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-industrial-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold text-copper-600 uppercase tracking-widest block mb-2">
                COMPANY HERITAGE & ORIGIN
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-graphite-950 mb-6 leading-tight">
                Engineering Industrial Strength for Over Three Decades.
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-industrial-600 leading-relaxed">
                <p>
                  MERIDIAN was established as a high-precision turning shop dedicated to heavy hydraulic manifolds and forged pipe components. Recognizing that contractors and OEMs frequently suffered from fragmented supply chains, volatile material chemistry, and unpredictable shipment delays, we systematically expanded into an integrated contract manufacturing and wholesale powerhouse.
                </p>
                <p>
                  Today, our 180,000 sq. ft. continuous-production campus houses 24 CNC machining centers, 15 kW fiber laser cutting systems, automated copper busway extrusion lines, and heavy-duty structural steel fabrication bays. We combine deep engineering metallurgy with high-throughput automated warehousing, ensuring our clients receive certified components exactly when scheduled.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-industrial-200">
                <div>
                  <span className="font-mono text-3xl font-black text-graphite-950 block">1996</span>
                  <span className="text-xs text-industrial-500 font-mono uppercase">Year Established</span>
                </div>
                <div>
                  <span className="font-mono text-3xl font-black text-copper-600 block">450+</span>
                  <span className="text-xs text-industrial-500 font-mono uppercase">Skilled Engineers</span>
                </div>
                <div>
                  <span className="font-mono text-3xl font-black text-graphite-950 block">28</span>
                  <span className="text-xs text-industrial-500 font-mono uppercase">Global Export Ports</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-industrial-300 shadow-xl bg-graphite-950">
                <Image
                  src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=85"
                  alt="MERIDIAN Senior Quality Engineer Reviewing Precision Dimensions"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/80 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-copper-400 block mb-1">
                      OPERATIONAL EXCELLENCE
                    </span>
                    <h4 className="text-base font-bold">In-Line Quality Metrology</h4>
                    <p className="text-xs text-industrial-300">
                      Temperature-controlled 20°C inspection suites equipped with Zeiss 3D Coordinate Measuring Machines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          VISION, MISSION & BUSINESS VALUES
          ========================================================================= */}
      <section className="py-20 bg-industrial-50 border-b border-industrial-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-2xl bg-white border border-industrial-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-copper-100 text-copper-600 flex items-center justify-center mb-5">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-graphite-950 mb-3">Our Corporate Vision</h3>
              <p className="text-sm text-industrial-600 leading-relaxed">
                To be the world&apos;s most dependable industrial manufacturing and wholesale supply partner—recognized for unyielding metallurgical integrity, automated production efficiency, and seamless B2B fulfillment across mission-critical infrastructure projects.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-industrial-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-industrial-100 text-graphite-900 flex items-center justify-center mb-5">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-graphite-950 mb-3">Our Operational Mission</h3>
              <p className="text-sm text-industrial-600 leading-relaxed">
                To provide commercial contractors, industrial OEMs, and wholesale distributors with certified, high-tolerance components and bulk materials manufactured under rigid quality standards, backed by real-time telemetry and 24/7 logistics responsiveness.
              </p>
            </div>
          </div>

          {/* Core Business Values Grid */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-copper-600 uppercase tracking-widest block mb-1">
              THE MERIDIAN STANDARD
            </span>
            <h2 className="text-3xl font-black text-graphite-950">
              Four Pillars of Our Industrial Philosophy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-industrial-200 shadow-sm hover:border-copper-500/80 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-copper-600 block mb-2">
                    PILLAR 0{idx + 1}
                  </span>
                  <h4 className="font-bold text-base text-graphite-950 mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-industrial-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          LEADERSHIP & MANAGEMENT TEAM (Demonstration Profiles)
          ========================================================================= */}
      <section className="py-20 bg-white border-b border-industrial-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-industrial-100 text-industrial-700 text-xs font-mono font-bold uppercase tracking-wider mb-3">
              <Users className="w-3.5 h-3.5 text-copper-600" />
              <span>EXECUTIVE LEADERSHIP TEAM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-graphite-950 tracking-tight mb-4">
              Decades of Precision Engineering Expertise
            </h2>
            <p className="text-industrial-600 text-base">
              Our executive board brings together senior industrial leadership across mechanical fabrication, metallurgical sciences, Six Sigma quality control, and global supply chain logistics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((member, idx) => (
              <div 
                key={idx}
                className="bg-industrial-50 rounded-2xl border border-industrial-200 overflow-hidden hover:border-copper-500 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[3/4] w-full bg-graphite-950 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-base text-graphite-950 mb-1 leading-snug">
                      {member.name}
                    </h3>
                    <span className="text-xs font-mono text-copper-600 font-semibold block mb-2 leading-tight">
                      {member.role}
                    </span>
                    <p className="text-xs text-industrial-600 leading-relaxed mb-3">
                      {member.background}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-industrial-200/80">
                  <span className="text-[10px] font-mono text-industrial-400 block mb-0.5">ACADEMIC & CREDENTIALS:</span>
                  <span className="text-[11px] font-semibold text-graphite-800 block">{member.spec}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CTA STRIP
          ========================================================================= */}
      <section className="py-16 bg-graphite-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-4">
            Partner with an Established Manufacturing Leader.
          </h2>
          <p className="text-industrial-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Contact our engineering sales team to request corporate capability brochures, audit plant documentation, or initiate a pilot component run.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openRfq()}
              className="px-8 py-3.5 rounded-xl bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-copper-glow transition-all cursor-pointer"
            >
              Start Commercial Consultation
            </button>
            <Link
              href="/manufacturing"
              className="px-8 py-3.5 rounded-xl bg-graphite-800 hover:bg-graphite-700 text-white border border-industrial-600 font-heading font-bold text-xs uppercase tracking-wider transition-all"
            >
              Review Production Capabilities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
