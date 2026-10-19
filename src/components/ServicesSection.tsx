import React from 'react';
import { motion } from 'motion/react';
import { Ship, Truck, Train, Plane, Warehouse, FileCheck, ArrowRight, Check } from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { translations } from '../data/translations';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectService,
}) => {
  const t = translations[lang].services;

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'sea':
        return Ship;
      case 'road':
        return Truck;
      case 'rail':
        return Train;
      case 'air':
        return Plane;
      case 'warehousing':
        return Warehouse;
      case 'customs':
        return FileCheck;
      default:
        return Ship;
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative bg-[#050D1A]">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />

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

        {/* 6 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {(t.items || []).map((service, index) => {
            const Icon = getServiceIcon(service.id);

            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="relative rounded-2xl bg-gradient-to-b from-[#091528] to-[#06101E] border border-cyan-500/20 hover:border-cyan-400/60 p-7 flex flex-col justify-between transition-all duration-300 group shadow-xl hover:shadow-[0_15px_35px_-10px_rgba(6,182,212,0.2)]"
              >
                {/* Top Corner Number & Icon Bar */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black font-mono text-slate-700 group-hover:text-cyan-400/80 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-black text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <div className="text-xs font-semibold text-cyan-400 mt-1 mb-3">
                    {service.tagline}
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  {/* Subservices Bulleted List */}
                  <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-2">
                    {(service.subservices || []).map((sub, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 flex-shrink-0" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action: "Learn More" link with arrow */}
                <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onSelectService(service)}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 group-hover:text-cyan-300 hover:underline cursor-pointer"
                  >
                    <span>{t.learnMore}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <span className="text-[11px] font-mono text-slate-400">
                    {service.leadTime.split(' ')[0]} SLA
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
