import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Ship, Truck, Train, Plane, ArrowRight, ShieldCheck, Zap, Layers, RefreshCw } from 'lucide-react';
import { Language, TransportMode } from '../types';
import { translations } from '../data/translations';

interface MultimodalSectionProps {
  lang: Language;
  onOpenQuote: () => void;
}

export const MultimodalSection: React.FC<MultimodalSectionProps> = ({
  lang,
  onOpenQuote,
}) => {
  const t = translations[lang].multimodal;
  const [activeMode, setActiveMode] = useState<TransportMode>('sea');

  const modesData = [
    {
      id: 'sea' as TransportMode,
      title: t.seaLabel,
      sub: t.seaSub,
      icon: Ship,
      hub: 'Hai Phong / Cai Mep Deepwater Ports',
      capacity: 'Up to 24,000 TEU Ultra Large Container Vessels',
      connectsWith: ['Rail block trains at Yen Vien', 'Heavy highway haulage across Vietnam'],
      coord: { x: 120, y: 110 },
      color: '#00B4D8',
    },
    {
      id: 'rail' as TransportMode,
      title: t.railLabel,
      sub: t.railSub,
      icon: Train,
      hub: 'Yen Vien & Song Than Rail Terminals',
      capacity: 'Scheduled trans-Eurasian & domestic container blocks',
      connectsWith: ['Direct ocean feeder transfers', 'Border gates to China & Central Asia'],
      coord: { x: 300, y: 240 },
      color: '#0077B6',
    },
    {
      id: 'road' as TransportMode,
      title: t.roadLabel,
      sub: t.roadSub,
      icon: Truck,
      hub: 'Nationwide Cross-Docking & Border Corridors',
      capacity: 'Heavy container chassis, low-beds, GPS 24/7 telematics',
      connectsWith: ['Factory doorstep Just-In-Time pickups', 'Airport tarmac priority transfers'],
      coord: { x: 440, y: 170 },
      color: '#38BDF8',
    },
    {
      id: 'air' as TransportMode,
      title: t.airLabel,
      sub: t.airSub,
      icon: Plane,
      hub: 'Noi Bai (HAN) & Tan Son Nhat (SGN) Air Hubs',
      capacity: 'Scheduled widebody freighters & priority belly capacity',
      connectsWith: ['Bonded airport sprint trailers', 'Urgent pharma & high-tech supply lines'],
      coord: { x: 560, y: 80 },
      color: '#00E5FF',
    },
  ];

  const currentModeInfo = modesData.find(m => m.id === activeMode) || modesData[0];

  return (
    <section id="multimodal" className="py-20 lg:py-32 relative bg-[#040A14] overflow-hidden border-y border-cyan-500/20">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-600/10 via-cyan-500/10 to-transparent rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>{t.sectionTag}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight whitespace-pre-line">
            {t.title}
          </h2>

          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            {t.subtitle}
          </p>
        </div>

        {/* Sophisticated Multimodal Network Visualization Inspired by the Logo's "V" */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#08152B]/90 via-[#061122]/90 to-[#030914]/95 border border-cyan-500/30 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          {/* Top Control Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800/90 gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                Multimodal Dynamic Synchronizer // V-Corridor
              </span>
            </div>
            <div className="text-xs text-slate-400">
              {t.interactiveTip}
            </div>
          </div>

          {/* Network Map / SVG Stage representing the curved "V" */}
          <div className="relative my-8 py-4">
            {/* SVG Canvas with curved "V" transportation route trails */}
            <div className="w-full max-w-4xl mx-auto h-[260px] sm:h-[340px] relative">
              <svg
                viewBox="0 0 700 320"
                className="w-full h-full overflow-visible select-none"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Glowing line gradients */}
                  <linearGradient id="vRouteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0077B6" />
                    <stop offset="35%" stopColor="#00B4D8" />
                    <stop offset="70%" stopColor="#38BDF8" />
                    <stop offset="100%" stopColor="#00E5FF" />
                  </linearGradient>

                  <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* The Master Curved "V" Movement Route from Logo */}
                {/* Thick glowing route line */}
                <path
                  d="M 120 110 C 180 200 250 280 340 260 C 430 240 500 160 580 80"
                  stroke="url(#vRouteGrad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  opacity="0.8"
                  filter="url(#routeGlow)"
                />

                {/* Dashed animated flow path */}
                <path
                  d="M 120 110 C 180 200 250 280 340 260 C 430 240 500 160 580 80"
                  stroke="#FFFFFF"
                  strokeWidth="2.5"
                  strokeDasharray="14 10"
                  className="animate-dash-flow"
                />

                {/* Secondary Cross-Connectors */}
                <path
                  d="M 120 110 Q 300 130 580 80"
                  stroke="#0284C7"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                  opacity="0.4"
                />
                <path
                  d="M 340 260 L 460 170"
                  stroke="#38BDF8"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  opacity="0.6"
                />
              </svg>

              {/* Four Interactive Modal Hub Pins Positioned Mathematically on the "V" */}
              {modesData.map(mode => {
                const Icon = mode.icon;
                const isSelected = activeMode === mode.id;

                // Responsive positioning mapping
                const positionStyles = {
                  sea: 'top-[22%] left-[4%] sm:left-[12%]',
                  rail: 'bottom-[8%] left-[30%] sm:left-[42%]',
                  road: 'top-[42%] right-[22%] sm:right-[30%]',
                  air: 'top-[12%] right-[4%] sm:right-[12%]',
                }[mode.id];

                return (
                  <button
                    key={mode.id}
                    onClick={() => setActiveMode(mode.id)}
                    className={`absolute ${positionStyles} -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-none`}
                  >
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-xl ${
                          isSelected
                            ? 'bg-cyan-500 text-slate-950 scale-110 shadow-[0_0_25px_rgba(6,182,212,0.6)] border-2 border-white ring-4 ring-cyan-500/30'
                            : 'bg-[#08172E] text-cyan-400 border border-cyan-500/40 hover:border-cyan-300 hover:scale-105'
                        }`}
                      >
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Mode Badge Label */}
                      <div className="mt-2 text-center whitespace-nowrap">
                        <span
                          className={`text-xs sm:text-sm font-black uppercase tracking-wider block ${
                            isSelected ? 'text-cyan-300 font-extrabold' : 'text-slate-300 group-hover:text-white'
                          }`}
                        >
                          {mode.title}
                        </span>
                        <span className="text-[10px] text-slate-400 block -mt-0.5">
                          {mode.sub}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Mode Intelligence Card */}
          <div className="mt-8 p-6 rounded-2xl bg-[#040C1A]/90 border border-cyan-500/30 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                Active Node Architecture
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                {currentModeInfo.title} — {currentModeInfo.sub}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                <strong>Primary Gateway:</strong> {currentModeInfo.hub}
              </p>
            </div>

            <div className="lg:col-span-5 text-xs sm:text-sm text-slate-300 space-y-2 border-l border-slate-800 lg:pl-6">
              <div>
                <strong className="text-cyan-300">Carrying Capability:</strong> {currentModeInfo.capacity}
              </div>
              <div>
                <strong className="text-slate-400">Coordinated Handoffs:</strong>
                <ul className="list-disc list-inside text-slate-300 mt-1 space-y-1">
                  {(currentModeInfo.connectsWith || []).map((conn, idx) => (
                    <li key={idx}>{conn}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3 flex lg:justify-end">
              <button
                onClick={onOpenQuote}
                className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
              >
                <span>Quote {currentModeInfo.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Multimodal Efficiency Metrics */}
          <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
            <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
              <div className="text-cyan-400 font-extrabold text-lg sm:text-xl font-mono">35% Cost Savings</div>
              <div className="text-xs text-slate-400 mt-0.5">{t.b1}</div>
            </div>
            <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
              <div className="text-cyan-400 font-extrabold text-lg sm:text-xl font-mono">50% Faster Speed</div>
              <div className="text-xs text-slate-400 mt-0.5">{t.b2}</div>
            </div>
            <div className="p-3 bg-slate-900/40 rounded-xl border border-slate-800">
              <div className="text-emerald-400 font-extrabold text-lg sm:text-xl font-mono">Single BL & SLA</div>
              <div className="text-xs text-slate-400 mt-0.5">{t.b3}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
