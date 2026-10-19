import React from 'react';
import { NamvietLogo } from './NamvietLogo';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ShieldCheck, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenQuote }) => {
  const rawFooter = translations[lang]?.footer || {};
  const t = {
    companyDescription: rawFooter.companyDescription || rawFooter.mission || (lang === 'VI' ? 'Nam Việt Logistics cung cấp giải pháp vận tải đa phương thức toàn diện.' : 'Namviet Logistics provides integrated multimodal freight solutions.'),
    quickLinksTitle: rawFooter.quickLinksTitle || (lang === 'VI' ? 'LIÊN KẾT NHANH' : 'QUICK LINKS'),
    quickLinks: rawFooter.quickLinks || {
      home: lang === 'VI' ? 'Trang Chủ' : 'Home',
      about: lang === 'VI' ? 'Về Chúng Tôi' : 'About Us',
      services: lang === 'VI' ? 'Dịch Vụ' : 'Services',
      solutions: lang === 'VI' ? 'Giải Pháp' : 'Solutions',
      fleet: lang === 'VI' ? 'Đa Phương Thức' : 'Multimodal Hubs',
      contact: lang === 'VI' ? 'Liên Hệ' : 'Contact',
    },
    servicesTitle: rawFooter.servicesTitle || (lang === 'VI' ? 'DỊCH VỤ CHÍNH' : 'CORE SERVICES'),
    servicesList: rawFooter.servicesList || {
      sea: lang === 'VI' ? 'Vận Tải Đường Biển' : 'Sea Freight (FCL/LCL)',
      road: lang === 'VI' ? 'Vận Tải Đường Bộ' : 'Road Transportation',
      rail: lang === 'VI' ? 'Vận Tải Đường Sắt' : 'Rail Intermodal',
      air: lang === 'VI' ? 'Vận Tải Hàng Không' : 'Air Cargo Express',
      warehousing: lang === 'VI' ? 'Kho Bãi & CFS' : 'Warehousing & CFS',
      customs: lang === 'VI' ? 'Thủ Tục Hải Quan' : 'Customs Clearance',
    },
    multimodalTitle: rawFooter.multimodalTitle || (lang === 'VI' ? 'CHUẨN MỰC ĐA PHƯƠNG THỨC' : 'MULTIMODAL INTEGRITY'),
    multimodalDesc: rawFooter.multimodalDesc || (lang === 'VI' ? 'Doanh nghiệp logistics đạt chuẩn quốc tế FIATA & VLA.' : 'Certified international freight forwarder under FIATA & VLA standards.'),
    legalTitle: rawFooter.legalTitle || (lang === 'VI' ? 'PHÁP LÝ & TUÂN THỦ' : 'LEGAL & COMPLIANCE'),
    copyright: rawFooter.copyright || '© 2026 NAMVIET LOGISTICS. All Rights Reserved.',
    designedFor: rawFooter.designedFor || (lang === 'VI' ? 'Tiên Phong Vận Tải Đa Phương Thức Việt Nam' : 'Vietnam Multimodal Logistics Pioneer'),
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#030812] text-slate-400 border-t border-cyan-500/20 pt-16 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-cyan-600/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          {/* Brand Column (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block">
              <NamvietLogo variant="horizontal" size="md" theme="dark" />
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              {t.companyDescription}
            </p>

            <div className="pt-2 text-xs space-y-2 text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span>Namviet Logistics Building, Hanoi, Vietnam</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span className="font-mono text-slate-200">+84 (0) 24 3888 6688</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span className="font-mono text-slate-200">operations@namvietlogistics.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links (Cols 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.quickLinks.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.quickLinks.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.quickLinks.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('solutions')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.quickLinks.solutions}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('fleet')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.quickLinks.fleet}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.quickLinks.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Services (Cols 7-9) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.servicesTitle}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.servicesList.sea}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.servicesList.road}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.servicesList.rail}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.servicesList.air}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.servicesList.warehousing}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {t.servicesList.customs}
                </button>
              </li>
            </ul>
          </div>

          {/* Multimodal & Compliance (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <div>
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                {t.multimodalTitle}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.multimodalDesc}
              </p>
            </div>

            <div className="pt-2">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                {t.legalTitle}
              </h4>
              <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
                <span className="hover:text-cyan-400 cursor-pointer">Terms of Carriage</span>
                <span>•</span>
                <span className="hover:text-cyan-400 cursor-pointer">Privacy Policy</span>
                <span>•</span>
                <span className="hover:text-cyan-400 cursor-pointer">Incoterms 2020</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="w-full py-2.5 px-4 bg-cyan-950 border border-cyan-500/40 hover:bg-cyan-900/60 text-cyan-300 rounded-lg text-xs font-bold transition-colors text-center"
              >
                Instant Freight Quotation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            {t.copyright}
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-cyan-400/80">
              {t.designedFor}
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-semibold">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
