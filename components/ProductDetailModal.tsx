'use client';

import React from 'react';
import Image from 'next/image';
import { 
  X, 
  ShieldCheck, 
  Boxes, 
  Calculator, 
  ArrowRight, 
  Download, 
  CheckCircle2, 
  Clock, 
  Layers, 
  FileText,
  Truck
} from 'lucide-react';
import { useRfq } from './RfqContext';

export default function ProductDetailModal() {
  const { isProductDetailOpen, viewedProduct, closeProductDetail, openRfq } = useRfq();

  if (!isProductDetailOpen || !viewedProduct) return null;

  const handleRequestQuote = () => {
    const prodName = viewedProduct.name;
    closeProductDetail();
    openRfq(prodName);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-graphite-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl my-auto bg-graphite-900 border-2 border-industrial-600 rounded-2xl shadow-2xl overflow-hidden animate-console-unfold text-white">
        
        {/* Titlebar */}
        <div className="flex items-center justify-between px-6 py-4 bg-graphite-950 border-b border-industrial-700 select-none">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-copper-950 text-copper-400 border border-copper-800">
              {viewedProduct.partNumber}
            </span>
            <span className="text-xs font-mono text-industrial-400 uppercase tracking-wider">
              {viewedProduct.categoryLabel}
            </span>
          </div>

          <button
            onClick={closeProductDetail}
            className="p-1.5 rounded-lg bg-industrial-800 hover:bg-copper-600 text-industrial-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Technical View"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 max-h-[82vh] overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Product Image & Quick Badges (Span 5) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-industrial-700 bg-graphite-950 mb-4 shadow-lg">
                <Image
                  src={viewedProduct.image}
                  alt={viewedProduct.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Compliance Pills */}
              <div className="space-y-1.5">
                <span className="block text-[10px] font-mono font-bold uppercase tracking-widest text-industrial-400 mb-1">
                  MANUFACTURING STANDARDS & AUDIT
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {viewedProduct.compliance.map((item, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded bg-graphite-950 border border-industrial-700 text-[11px] font-mono text-industrial-300 flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-copper-400" />
                      <span>{item}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Technical Specs & Commercial Parameters (Span 7) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h2 className="text-xl sm:text-2xl font-extrabold text-white mb-2 leading-tight">
                  {viewedProduct.name}
                </h2>
                <p className="text-xs sm:text-sm text-industrial-300 leading-relaxed mb-6">
                  {viewedProduct.fullDesc}
                </p>

                {/* Technical Specifications Matrix */}
                <div className="rounded-xl border border-industrial-700 bg-graphite-950 p-4 mb-6 text-xs font-mono space-y-2.5">
                  <span className="block text-[11px] font-bold text-copper-400 tracking-wider border-b border-industrial-800 pb-1.5">
                    TECHNICAL SPECIFICATION MATRIX
                  </span>
                  
                  <div className="grid grid-cols-2 gap-2 text-industrial-300">
                    <div>
                      <span className="text-industrial-500 block text-[10px]">MATERIAL GRADE:</span>
                      <span className="font-semibold text-white">{viewedProduct.specifications.material}</span>
                    </div>
                    <div>
                      <span className="text-industrial-500 block text-[10px]">MACHINING TOLERANCE:</span>
                      <span className="font-semibold text-white">{viewedProduct.specifications.tolerance}</span>
                    </div>
                    <div>
                      <span className="text-industrial-500 block text-[10px]">DESIGN STANDARDS:</span>
                      <span className="font-semibold text-white">{viewedProduct.specifications.standards}</span>
                    </div>
                    <div>
                      <span className="text-industrial-500 block text-[10px]">SURFACE TREATMENT:</span>
                      <span className="font-semibold text-white">{viewedProduct.specifications.surfaceFinish}</span>
                    </div>
                    {viewedProduct.specifications.operatingTemp && (
                      <div>
                        <span className="text-industrial-500 block text-[10px]">OPERATING RANGE:</span>
                        <span className="font-semibold text-white">{viewedProduct.specifications.operatingTemp}</span>
                      </div>
                    )}
                    {viewedProduct.specifications.loadCapacity && (
                      <div>
                        <span className="text-industrial-500 block text-[10px]">LOAD / PRESSURE:</span>
                        <span className="font-semibold text-white">{viewedProduct.specifications.loadCapacity}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Logistics & Commercial Terms */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 text-xs text-industrial-300">
                  <div className="p-3 rounded-lg bg-graphite-800 border border-industrial-700">
                    <span className="text-industrial-400 block text-[10px] font-mono">MINIMUM ORDER QUANTITY:</span>
                    <span className="font-bold text-white text-xs">{viewedProduct.moq}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-graphite-800 border border-industrial-700">
                    <span className="text-industrial-400 block text-[10px] font-mono">PRODUCTION LEAD TIME:</span>
                    <span className="font-bold text-white text-xs">{viewedProduct.leadTime}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-industrial-800">
                <button
                  onClick={handleRequestQuote}
                  className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-copper-600 hover:bg-copper-500 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-copper-glow transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Request Bulk Price for this SKU</span>
                </button>

                <button
                  onClick={closeProductDetail}
                  className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-graphite-800 hover:bg-graphite-700 text-industrial-200 border border-industrial-700 font-heading font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Return to Catalogue
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
