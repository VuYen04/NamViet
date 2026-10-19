import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, PhoneCall, ShieldCheck, Mail, Clock } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface CtaSectionProps {
  lang: Language;
  onOpenQuote: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  lang,
  onOpenQuote,
}) => {
  const ctaSource = (translations[lang] as any)?.ctaSection || translations[lang]?.cta || {};
  const t = {
    tag: ctaSource.tag || (lang === 'VI' ? 'BẮT ĐẦU NGAY HÔM NAY' : 'GET STARTED TODAY'),
    headline: ctaSource.headline || (lang === 'VI' ? 'SẴN SÀNG TĂNG TỐC DOANH NGHIỆP CÙNG NAM VIỆT?' : 'READY TO MOVE YOUR BUSINESS FORWARD?'),
    subtitle: ctaSource.subtitle || ctaSource.subheadline || (lang === 'VI' ? 'Để Nam Việt Logistics đồng hành xây dựng giải pháp vận tải thông minh.' : 'Let Namviet Logistics build a smarter transportation solution.'),
    primaryBtn: ctaSource.primaryBtn || ctaSource.primaryButton || (lang === 'VI' ? 'NHẬN BÁO GIÁ' : 'GET A QUOTE'),
    secondaryBtn: ctaSource.secondaryBtn || ctaSource.secondaryButton || (lang === 'VI' ? 'LIÊN HỆ ĐIỀU VẬN' : 'SPEAK WITH DISPATCHER'),
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-24 relative bg-[#040A14] overflow-hidden">
      {/* Dynamic Glowing Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-blue-600/15 via-cyan-500/15 to-blue-700/15 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#08152B] via-[#051020] to-[#030914] border border-cyan-500/40 p-8 sm:p-14 lg:p-16 text-center shadow-2xl overflow-hidden">
          {/* Subtle "V" light curve accent in background of the CTA box */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>{t.tag}</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase max-w-4xl mx-auto leading-tight">
            {t.headline}
          </h2>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="cta-section-get-quote"
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-black text-sm sm:text-base uppercase tracking-wider rounded-xl transition-all shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] cursor-pointer group"
            >
              <span>{t.primaryBtn}</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              id="cta-section-contact-team"
              onClick={scrollToContact}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-sm sm:text-base tracking-wider uppercase rounded-xl border border-slate-700/80 hover:border-cyan-500/50 transition-all cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-cyan-400" />
              <span>{t.secondaryBtn}</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>2-Hour Rapid Quote Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Licensed Multimodal Operator</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Direct Key Account Manager Assigned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
