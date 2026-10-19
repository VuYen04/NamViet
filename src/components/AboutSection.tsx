import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, Anchor, Award } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutSectionProps {
  lang: Language;
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  onOpenQuote,
}) => {
  const t = translations[lang].about;

  const scrollToWhy = () => {
    const el = document.getElementById('why-us');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#040A14] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: High-Quality Logistics Image Showcase (Cols 1-6) */}
          <div className="lg:col-span-6 relative">
            {/* Image Frame with Double Border Accent */}
            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl group">
              {/* Premium logistics image: Modern seaport container terminal & logistics hub */}
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80"
                alt="Namviet Logistics Seaport & Multimodal Terminal"
                referrerPolicy="no-referrer"
                className="w-full h-[420px] sm:h-[500px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-90"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050D1A] via-transparent to-transparent opacity-80" />

              {/* Floating Badge: Decade of Logistics Excellence */}
              <div className="absolute bottom-6 left-6 right-6 p-4 sm:p-5 rounded-2xl bg-[#081426]/90 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Anchor className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {t.experienceBadge}
                    </h3>
                    <p className="text-xs text-cyan-300">
                      Hai Phong • Da Nang • Cat Lai • Noi Bai
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-500/30">
                    ISO 9001:2015
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Corner Element referencing the "V" */}
            <div className="absolute -bottom-4 -right-4 w-28 h-28 border-r-2 border-b-2 border-cyan-400/40 rounded-br-3xl pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Headline + Description + Benefits + CTA (Cols 7-12) */}
          <div className="lg:col-span-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>{t.sectionTag}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase">
              {t.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-200 mt-6 leading-relaxed font-medium">
              {t.p1}
            </p>

            <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
              {t.p2}
            </p>

            {/* 6 Key Benefits Checklist */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {(t.benefits || []).map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                >
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-semibold text-slate-200">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-10 flex items-center gap-4">
              <button
                id="about-cta-learn-more"
                onClick={scrollToWhy}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm tracking-wider uppercase rounded-xl transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 cursor-pointer group"
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 rounded-xl text-sm font-semibold transition-colors cursor-pointer"
              >
                Get Rate Estimate
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
