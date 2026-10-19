import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Calculator, MapPin, Eye, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ProcessSectionProps {
  lang: Language;
  onOpenQuote: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  lang,
  onOpenQuote,
}) => {
  const t = translations[lang].process;
  const [activeStep, setActiveStep] = useState(0);
  const steps = t.steps || [];

  const stepIcons = [FileText, Calculator, MapPin, Eye, CheckCircle2];

  return (
    <section id="process" className="py-20 lg:py-28 relative bg-[#050D1A] overflow-hidden">
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

        {/* Desktop Horizontal Timeline (Hidden on mobile) */}
        <div className="hidden lg:block relative my-12">
          {/* Connecting Line running through all step markers */}
          <div className="absolute top-10 left-[8%] right-[8%] h-0.5 bg-slate-800 z-0">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 transition-all duration-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"
              style={{ width: `${(activeStep / Math.max(steps.length - 1, 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-5 gap-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = stepIcons[index];
              const isPassed = index <= activeStep;
              const isActive = index === activeStep;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* Step Number Circle Indicator */}
                  <div
                    className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-cyan-500 text-slate-950 scale-110 shadow-[0_0_25px_rgba(6,182,212,0.5)] border-2 border-white'
                        : isPassed
                        ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/50'
                        : 'bg-[#081324] text-slate-500 border border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Step Counter Badge */}
                  <span className="mt-4 text-xs font-mono font-black text-cyan-400">
                    STEP {step.number}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-base font-bold text-white mt-1 tracking-tight group-hover:text-cyan-300 transition-colors">
                    {step.name}
                  </h3>

                  {/* Step Desc */}
                  <p className="text-xs text-slate-400 mt-1 max-w-[180px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active Step Expansion Box */}
          <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#09172E] to-[#06101E] border border-cyan-500/30 flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-black font-mono text-cyan-400">
                {steps[activeStep]?.number}
              </span>
              <div>
                <h4 className="text-lg font-bold text-white">
                  {steps[activeStep]?.name}: {steps[activeStep]?.desc}
                </h4>
                <p className="text-sm text-slate-300 mt-0.5">
                  {steps[activeStep]?.details}
                </p>
              </div>
            </div>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all flex-shrink-0 cursor-pointer"
            >
              <span>Start Shipment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Mobile Vertical Timeline (Shown on sm/md) */}
        <div className="lg:hidden space-y-6 relative">
          {/* Vertical Connecting line */}
          <div className="absolute top-6 bottom-6 left-7 w-0.5 bg-slate-800" />

          {steps.map((step, index) => {
            const Icon = stepIcons[index];
            const isPassed = index <= activeStep;

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(index)}
                className={`relative flex items-start gap-4 p-4 rounded-xl border transition-all ${
                  index === activeStep
                    ? 'bg-[#09172E] border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                    : 'bg-slate-900/40 border-slate-800'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10 ${
                    index === activeStep
                      ? 'bg-cyan-500 text-slate-950'
                      : isPassed
                      ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                      : 'bg-slate-900 text-slate-500 border border-slate-800'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      STEP {step.number}
                    </span>
                    <h3 className="text-base font-bold text-white">
                      {step.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    {step.desc}
                  </p>
                  <p className="text-xs text-slate-400 mt-2 pt-2 border-t border-slate-800/80">
                    {step.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
