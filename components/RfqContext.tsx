'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product, productsData } from '../data/manufacturingData';

interface RfqContextType {
  isRfqOpen: boolean;
  selectedProduct: string;
  openRfq: (productName?: string) => void;
  closeRfq: () => void;
  isProductDetailOpen: boolean;
  viewedProduct: Product | null;
  openProductDetail: (product: Product) => void;
  closeProductDetail: () => void;
  isConsoleOpen: boolean;
  toggleConsole: () => void;
  closeConsole: () => void;
}

const RfqContext = createContext<RfqContextType | undefined>(undefined);

export function RfqProvider({ children }: { children: ReactNode }) {
  const [isRfqOpen, setIsRfqOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('Standard Industrial Bulk Quotation');
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const [viewedProduct, setViewedProduct] = useState<Product | null>(null);
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);

  const openRfq = (productName?: string) => {
    setSelectedProduct(productName || 'Standard Industrial Bulk Quotation');
    setIsRfqOpen(true);
  };

  const closeRfq = () => {
    setIsRfqOpen(false);
  };

  const openProductDetail = (product: Product) => {
    setViewedProduct(product);
    setIsProductDetailOpen(true);
  };

  const closeProductDetail = () => {
    setIsProductDetailOpen(false);
  };

  const toggleConsole = () => {
    setIsConsoleOpen((prev) => !prev);
  };

  const closeConsole = () => {
    setIsConsoleOpen(false);
  };

  return (
    <RfqContext.Provider
      value={{
        isRfqOpen,
        selectedProduct,
        openRfq,
        closeRfq,
        isProductDetailOpen,
        viewedProduct,
        openProductDetail,
        closeProductDetail,
        isConsoleOpen,
        toggleConsole,
        closeConsole,
      }}
    >
      {children}
    </RfqContext.Provider>
  );
}

export function useRfq() {
  const context = useContext(RfqContext);
  if (!context) {
    throw new Error('useRfq must be used within an RfqProvider');
  }
  return context;
}
