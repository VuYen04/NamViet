import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2, ArrowRight, Clock, Shield, Globe, Award } from 'lucide-react';
import { Language, ServiceItem } from '../types';
import { translations } from '../data/translations';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  lang: Language;
  onOpenQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  lang,
  onOpenQuote,
}) => {
  if (!service) return null;
  const t = translations[lang].services;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#020B17]/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#081427] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-slate-100"
        >
          {/* Top Banner accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
                CAPABILITY {service.number}
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
                NAMVIET MULTIMODAL LOGISTICS
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {service.title}
            </h3>
            <p className="text-cyan-400 font-medium text-sm mt-1">
              {service.tagline}
            </p>

            <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
              {service.description}
            </p>

            {/* Scope of Service list */}
            <div className="mt-6 pt-5 border-t border-slate-800">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Core Service Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(service.subservices || []).map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-slate-200 bg-slate-900/50 p-2 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Advantages */}
            <div className="mt-5">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                Operational Advantages
              </h4>
              <div className="flex flex-wrap gap-2">
                {(service.highlights || []).map((highlight, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 rounded-md bg-blue-950/60 border border-blue-800/50 text-blue-200 flex items-center gap-1.5"
                  >
                    <Shield className="w-3 h-3 text-cyan-400" />
                    {highlight}
                  </span>
                ))}
              </div>
            </div>

            {/* Schedule & SLA */}
            <div className="mt-6 p-4 bg-slate-950/80 rounded-xl border border-slate-800 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>Schedule: <strong className="text-white">{service.leadTime}</strong></span>
              </div>
              <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                <Award className="w-4 h-4" />
                <span>100% Insured Transit</span>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-7 flex items-center justify-between gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={onClose}
                className="px-4 py-2.5 text-sm text-slate-400 hover:text-white transition-colors"
              >
                {t.closeModal}
              </button>
              <button
                onClick={() => {
                  onClose();
                  onOpenQuote(service.title);
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold rounded-lg text-sm transition-all shadow-lg shadow-cyan-500/20"
              >
                <span>{t.requestQuoteForThis}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
