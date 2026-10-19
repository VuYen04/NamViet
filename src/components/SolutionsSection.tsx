import React from 'react';
import { motion } from 'motion/react';
import { Factory, Globe2, ShoppingBag, ShieldAlert, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface SolutionsSectionProps {
  lang: Language;
  onOpenQuote: (solutionTitle?: string) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  lang,
  onOpenQuote,
}) => {
  const t = translations[lang].solutions;

  const categoryIcons = [Globe2, Factory, ShoppingBag, ShieldAlert];

  return (
    <section id="solutions" className="py-20 lg:py-28 relative bg-[#050D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>{t.sectionTag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight uppercase">
            {t.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Large Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {(t.categories || []).map((cat, index) => {
            const Icon = categoryIcons[index];

            return (
              <motion.div
                key={cat.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#09172E] to-[#040C1A] border border-cyan-500/25 hover:border-cyan-400/60 shadow-2xl flex flex-col justify-between group"
              >
                {/* Image Banner Header */}
                <div className="relative h-60 w-full overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                  />
                  {/* Dark vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09172E] via-[#09172E]/40 to-transparent" />

                  {/* Top Bar on Image */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-cyan-300 bg-[#050D1A]/90 px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-sm">
                      VERTICAL {cat.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#050D1A]/90 text-cyan-400 flex items-center justify-center border border-cyan-500/30 backdrop-blur-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between -mt-4 relative z-10">
                  <div>
                    <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-bold text-cyan-400 uppercase tracking-wider mt-1 mb-3">
                      {cat.summary}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Features checklist */}
                    <div className="mt-5 space-y-2 pt-4 border-t border-slate-800">
                      {(cat.features || []).map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between">
                    <div className="text-[11px] text-slate-400">
                      <span className="font-semibold text-slate-300">Target:</span> {cat.suitableFor}
                    </div>

                    <button
                      onClick={() => onOpenQuote(cat.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 cursor-pointer flex-shrink-0 ml-3"
                    >
                      <span>Inquire Rate</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
