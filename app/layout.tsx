import type { Metadata } from 'next';
import './globals.css';
import { RfqProvider } from '../components/RfqContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import IndustrialCommandConsole from '../components/IndustrialCommandConsole';
import RfqModal from '../components/RfqModal';
import ProductDetailModal from '../components/ProductDetailModal';

export const metadata: Metadata = {
  title: 'MERIDIAN Manufacturing & Supply Co. | Precision Industrial Supply',
  description: 'Built with Precision. Delivered with Confidence. Certified B2B contract manufacturing, structural steel, electrical busways, hardware, and global wholesale supply distribution.',
  keywords: 'manufacturing, industrial supply, wholesale distribution, CNC machining, structural steel, busway, fasteners, B2B procurement, MERIDIAN',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased flex flex-col justify-between selection:bg-copper-600 selection:text-white">
        <RfqProvider>
          {/* Main Industrial Header */}
          <Header />

          {/* Floating Industrial Command Console Navigation */}
          <IndustrialCommandConsole />

          {/* Interactive Modals */}
          <RfqModal />
          <ProductDetailModal />

          {/* Page Body */}
          <main className="flex-1 w-full">
            {children}
          </main>

          {/* Corporate Industrial Footer */}
          <Footer />
        </RfqProvider>
      </body>
    </html>
  );
}
