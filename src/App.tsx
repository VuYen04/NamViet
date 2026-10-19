import React, { useState } from 'react';
import { Language, TransportMode, ServiceItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { KeyMetricsSection } from './components/KeyMetricsSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { MultimodalSection } from './components/MultimodalSection';
import { ProcessSection } from './components/ProcessSection';
import { ShipmentTrackingSection } from './components/ShipmentTrackingSection';
import { SolutionsSection } from './components/SolutionsSection';
import { GlobalNetworkSection } from './components/GlobalNetworkSection';
import { WhyNamvietSection } from './components/WhyNamvietSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { Calculator, PhoneCall } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('VI');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteMode, setQuoteMode] = useState<TransportMode>('sea');
  const [quoteServiceTitle, setQuoteServiceTitle] = useState<string | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenQuote = (serviceTitle?: string, mode: TransportMode = 'sea') => {
    setQuoteMode(mode);
    setQuoteServiceTitle(serviceTitle);
    setIsQuoteOpen(true);
  };

  const handleSelectServiceModal = (service: ServiceItem) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen bg-[#040A14] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Sticky Header Navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenQuoteModal={() => handleOpenQuote()}
      />

      {/* Main Corporate Content */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <HeroSection
          lang={lang}
          onOpenQuote={() => handleOpenQuote()}
          onSelectService={(serviceId) => handleOpenQuote(serviceId)}
        />

        {/* 2. Key Trust Metrics & Statistics */}
        <KeyMetricsSection lang={lang} />

        {/* 3. About Namviet Logistics */}
        <AboutSection
          lang={lang}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 4. End-to-End Multimodal Services (6 Cards) */}
        <ServicesSection
          lang={lang}
          onSelectService={handleSelectServiceModal}
        />

        {/* 5. Signature Multimodal Logistics Network (The "V" Motif) */}
        <MultimodalSection
          lang={lang}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 6. Logistics Process: From Request to Delivery */}
        <ProcessSection
          lang={lang}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 7. Live Shipment Tracking Interface */}
        <ShipmentTrackingSection lang={lang} />

        {/* 8. Industry Logistics Solutions */}
        <SolutionsSection
          lang={lang}
          onOpenQuote={(title) => handleOpenQuote(title)}
        />

        {/* 9. Global Network & Trade Corridors */}
        <GlobalNetworkSection
          lang={lang}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 10. Why Choose Namviet Logistics */}
        <WhyNamvietSection lang={lang} />

        {/* 11. High-Impact CTA Section */}
        <CtaSection
          lang={lang}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 12. Corporate Contact & Vietnam Terminals */}
        <ContactSection lang={lang} />
      </main>

      {/* Corporate Footer */}
      <Footer
        lang={lang}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Floating Action Button for Instant Quote Calculation */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-none">
        <button
          id="floating-quote-btn"
          onClick={() => handleOpenQuote()}
          className="pointer-events-auto inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-[0_4px_25px_rgba(6,182,212,0.4)] hover:shadow-[0_6px_30px_rgba(6,182,212,0.6)] transition-all cursor-pointer transform hover:scale-105"
          aria-label="Instant Freight Quote"
        >
          <Calculator className="w-4 h-4" />
          <span>{lang === 'VI' ? 'Báo Giá Nhanh' : 'Quick Rate'}</span>
        </button>
      </div>

      {/* Global Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        lang={lang}
        preselectedMode={quoteMode}
        preselectedServiceTitle={quoteServiceTitle}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        lang={lang}
        onOpenQuote={(serviceTitle) => handleOpenQuote(serviceTitle)}
      />
    </div>
  );
}
