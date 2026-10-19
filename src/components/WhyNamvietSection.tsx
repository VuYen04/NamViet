import React from 'react';
import { motion } from 'motion/react';
import { Network, Clock, DollarSign, Eye, UserCheck, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface WhyNamvietSectionProps {
  lang: Language;
}

export const WhyNamvietSection: React.FC<WhyNamvietSectionProps> = ({ lang }) => {
  const t = translations[lang].whyUs;

  const advantageIcons = [Network, Clock, DollarSign, Eye, UserCheck, HeartHandshake];
  const advantages = t.advantages || (t as any).items || [];

  return (
    <section id="why-us" className="py-20 lg:py-28 relative bg-[#050D1A]">
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

        {/* 6 Key Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((adv, index) => {
            const Icon = advantageIcons[index];

            return (
              <motion.div
                key={adv.number}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="relative rounded-2xl bg-gradient-to-b from-[#09172E] to-[#06101E] border border-cyan-500/20 hover:border-cyan-400/50 p-8 flex flex-col justify-between group shadow-xl transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black font-mono text-slate-700 group-hover:text-cyan-400/80 transition-colors">
                      {adv.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {adv.title}
                  </h3>

                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono text-cyan-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {adv.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
