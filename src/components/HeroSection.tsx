import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Ship, Truck, Train, Plane, ShieldCheck, Activity, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Language, TransportMode } from '../types';
import { translations } from '../data/translations';
import { NamvietLogo } from './NamvietLogo';

interface HeroSectionProps {
  lang: Language;
  onOpenQuote: () => void;
  onSelectService: (serviceId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenQuote,
  onSelectService,
}) => {
  const t = translations[lang].hero;
  const [activeHighlight, setActiveHighlight] = useState<TransportMode>('sea');

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#040A14] pt-8 pb-16 lg:py-24"
    >
      {/* Dynamic Background Light Trails & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep ambient radial glow */}
        <div className="absolute -top-40 -left-40 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 left-1/3 w-[700px] h-[700px] bg-blue-900/15 rounded-full blur-[150px]" />

        {/* High-tech Subtle Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #00E5FF 1px, transparent 1px), linear-gradient(to bottom, #00E5FF 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
          }}
        />

        {/* Global Coordinates Sub-marker */}
        <div className="absolute top-24 right-10 text-[10px] font-mono text-cyan-500/30 hidden xl:block space-y-1 text-right">
          <div>LAT: 20°51&apos;38&quot;N • LON: 106°41&apos;42&quot;E (HAI PHONG HUB)</div>
          <div>LAT: 10°46&apos;36&quot;N • LON: 106°42&apos;02&quot;E (CAT LAI HUB)</div>
          <div>VIETNAM MULTIMODAL CORRIDOR // VERIFIED STATUS: ACTIVE</div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & CTAs (Cols 1-7) */}
          <div className="lg:col-span-7 z-10 text-left">
            {/* Supporting Headline Kicker Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>{t.altHeadline}</span>
            </motion.div>

            {/* Main Headline: "CONNECTING EVERY JOURNEY" */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-black text-white tracking-tight leading-[1.08] uppercase"
            >
              <span className="block">{t.headlinePart1}</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 drop-shadow-[0_0_35px_rgba(6,182,212,0.3)]">
                {t.headlinePart2}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal"
            >
              {t.subheadline}
            </motion.p>

            {/* CTAs Button Pair */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              {/* Primary CTA: "GET A QUOTE" */}
              <button
                id="hero-primary-cta"
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-extrabold text-slate-950 uppercase tracking-wider bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-xl transition-all shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:shadow-[0_0_40px_rgba(6,182,212,0.55)] cursor-pointer group"
              >
                <span>{t.primaryCta}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Secondary CTA: "EXPLORE OUR SERVICES" */}
              <button
                id="hero-secondary-cta"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-850 border border-slate-700/80 hover:border-cyan-500/50 rounded-xl transition-all backdrop-blur-md cursor-pointer group"
              >
                <span>{t.secondaryCta}</span>
                <ChevronDown className="w-4 h-4 text-cyan-400 transition-transform group-hover:translate-y-0.5" />
              </button>
            </motion.div>

            {/* Quick Mode Switcher on Hero */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 pt-8 border-t border-slate-800/80"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-3 block">
                Integrated Multimodal Fleet:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'sea', label: t.modes.sea, icon: Ship, sub: 'Ocean Vessels' },
                  { id: 'road', label: t.modes.road, icon: Truck, sub: 'Express Trucking' },
                  { id: 'rail', label: t.modes.rail, icon: Train, sub: 'Continental Trains' },
                  { id: 'air', label: t.modes.air, icon: Plane, sub: 'Direct Air Cargo' },
                ].map(mode => {
                  const Icon = mode.icon;
                  const isSelected = activeHighlight === mode.id;
                  return (
                    <button
                      key={mode.id}
                      onClick={() => setActiveHighlight(mode.id as TransportMode)}
                      className={`flex items-center gap-2.5 p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-cyan-950/60 border-cyan-400/80 text-white shadow-[0_0_15px_rgba(6,182,212,0.2)]'
                          : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <div className={`p-1.5 rounded-md ${isSelected ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-cyan-400'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">{mode.label}</div>
                        <div className="text-[10px] text-slate-400">{mode.sub}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual - Multimodal Transportation Scene (Cols 8-12) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Backing Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-cyan-500/20 to-transparent rounded-3xl filter blur-2xl transform scale-90" />

            {/* Central Master Brand Visual Stage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-lg bg-gradient-to-b from-[#09172E]/90 to-[#040A14]/90 border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl overflow-hidden"
            >
              {/* Top Bar of the Visual Stage */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-cyan-300 tracking-wider">
                    NV-MULTIMODAL-CORE
                  </span>
                </div>
                <div className="text-[11px] font-mono text-slate-400">
                  REAL-TIME NETWORK
                </div>
              </div>

              {/* Master Logo Representation with Live Transportation Scene */}
              <div className="relative py-4 flex flex-col items-center justify-center">
                {/* SVG Light Trails forming the iconic "V" shape */}
                <div className="w-full max-w-[360px] mx-auto">
                  <NamvietLogo variant="full" size="xl" theme="dark" />
                </div>

                {/* Interactive Dynamic Route Indicators */}
                <div className="w-full mt-6 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Ship className="w-3.5 h-3.5 text-cyan-400" /> Sea Corridor
                    </span>
                    <span className="font-mono text-emerald-400 text-[11px] font-bold">ACTIVE</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Train className="w-3.5 h-3.5 text-cyan-400" /> Rail Express
                    </span>
                    <span className="font-mono text-emerald-400 text-[11px] font-bold">CONNECTED</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-cyan-400" /> Highway Fleet
                    </span>
                    <span className="font-mono text-emerald-400 text-[11px] font-bold">GPS 24/7</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Plane className="w-3.5 h-3.5 text-cyan-400" /> Air Cargo
                    </span>
                    <span className="font-mono text-emerald-400 text-[11px] font-bold">SCHEDULED</span>
                  </div>
                </div>

                {/* Subtext describing the "V" concept */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 w-full text-center">
                  <p className="text-[11px] text-cyan-300/80 font-medium">
                    &ldquo;Moving goods. Connecting businesses. Driving forward.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
