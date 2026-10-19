import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Globe, MapPin, Navigation, Clock, ShieldCheck, ArrowRight, Anchor } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface GlobalNetworkSectionProps {
  lang: Language;
  onOpenQuote: () => void;
}

export const GlobalNetworkSection: React.FC<GlobalNetworkSectionProps> = ({
  lang,
  onOpenQuote,
}) => {
  const t = translations[lang].globalNetwork;
  const [activeCorridor, setActiveCorridor] = useState<number>(0);

  const corridors = [
    {
      name: 'Vietnam Hubs (Origin)',
      route: 'Hai Phong • Da Nang • Ho Chi Minh City • Cai Mep',
      type: 'Core Operations & National Gateways',
      transit: 'Zero Departure Delay',
      activeLines: [0, 1, 2, 3],
    },
    {
      name: 'Intra-Asia Express Corridors',
      route: 'Vietnam ⇄ Singapore, Shanghai, Busan, Tokyo, Bangkok',
      type: 'Direct Maritime & Air Freight',
      transit: '1 – 4 Days Transit Time',
      activeLines: [0],
    },
    {
      name: 'Eurasian & European Gateway',
      route: 'Vietnam ⇄ Rotterdam, Hamburg, Antwerp, Frankfurt',
      type: 'Deep Sea Maritime & Trans-Eurasian Rail',
      transit: '18 – 25 Days Sea / 3 Days Air',
      activeLines: [1],
    },
    {
      name: 'Trans-Pacific Americas Corridor',
      route: 'Vietnam ⇄ Los Angeles, Long Beach, New York, Vancouver',
      type: 'Direct Trans-Pacific Express Sea & Air',
      transit: '14 – 21 Days Sea / 3 Days Air',
      activeLines: [2],
    },
  ];

  return (
    <section id="fleet" className="py-20 lg:py-28 relative bg-[#040A14] overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
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

          {/* Sequential Route Flow Pills (VIETNAM -> ASIA -> EUROPE -> AMERICAS -> GLOBAL) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {(t.corridorSequence || []).map((step, idx) => (
              <React.Fragment key={step}>
                <span
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all ${
                    idx === 0
                      ? 'bg-cyan-500 text-slate-950 font-black shadow-[0_0_15px_rgba(6,182,212,0.4)]'
                      : 'bg-slate-900 border border-slate-800 text-slate-300'
                  }`}
                >
                  {step}
                </span>
                {idx < (t.corridorSequence?.length || 0) - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* The World Map Interactive Stage */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#071326] to-[#040C1A] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden">
          {/* Subtle World Map SVG Geometry */}
          <div className="relative w-full h-[320px] sm:h-[420px]">
            <svg
              viewBox="0 0 1000 500"
              className="w-full h-full select-none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00E5FF" />
                  <stop offset="50%" stopColor="#0077B6" />
                  <stop offset="100%" stopColor="#00B4D8" />
                </linearGradient>

                <filter id="mapGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* World Continents Outlines (Simplified Stylized Vector Mesh) */}
              <g fill="#0E223D" opacity="0.5">
                {/* Asia / Eurasia */}
                <path d="M 600 80 Q 750 90 850 140 Q 820 220 740 280 Q 660 300 620 260 Q 570 200 560 140 Z" />
                {/* Europe */}
                <path d="M 460 90 Q 550 100 550 160 Q 480 200 450 160 Z" />
                {/* Africa */}
                <path d="M 470 190 Q 560 220 540 340 Q 490 380 460 300 Z" />
                {/* Americas (North) */}
                <path d="M 160 80 Q 300 90 280 220 Q 200 240 150 160 Z" />
                {/* Americas (South) */}
                <path d="M 270 240 Q 350 280 320 420 Q 260 410 250 300 Z" />
                {/* Oceania */}
                <path d="M 800 320 Q 890 340 860 420 Q 780 400 790 340 Z" />
              </g>

              {/* VIETNAM HUB (Coordinates approx 710, 240 on 1000x500 map) */}
              <g id="vietnam-hub">
                <circle cx="710" cy="240" r="18" fill="#00E5FF" opacity="0.2" className="animate-ping" />
                <circle cx="710" cy="240" r="8" fill="#00E5FF" filter="url(#mapGlow)" />
                <circle cx="710" cy="240" r="4" fill="#FFFFFF" />
                <text x="710" y="270" textAnchor="middle" fill="#00E5FF" fontSize="13" fontWeight="900" fontFamily="sans-serif">
                  VIETNAM (HQ & PORTS)
                </text>
              </g>

              {/* DESTINATION NODES */}
              {/* 1. East Asia (Tokyo/Shanghai) at (820, 160) */}
              <circle cx="820" cy="160" r="5" fill="#38BDF8" />
              <text x="830" y="165" fill="#94A3B8" fontSize="10" fontWeight="bold">East Asia</text>

              {/* 2. Europe (Rotterdam/Hamburg) at (500, 130) */}
              <circle cx="500" cy="130" r="6" fill="#38BDF8" />
              <text x="500" y="120" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="bold">Europe Hubs</text>

              {/* 3. North America West Coast (LA) at (210, 170) */}
              <circle cx="210" cy="170" r="6" fill="#38BDF8" />
              <text x="210" y="195" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="bold">Americas West Coast</text>

              {/* 4. North America East Coast (NY) at (300, 150) */}
              <circle cx="300" cy="150" r="5" fill="#38BDF8" />
              <text x="300" y="140" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="bold">Americas East Coast</text>

              {/* 5. Middle East Transit Hub (Dubai) at (610, 200) */}
              <circle cx="610" cy="200" r="4" fill="#38BDF8" />

              {/* TRANSPORTATION ROUTE PATHS (RADIATING FROM VIETNAM) */}
              {/* Route 1: Vietnam -> East Asia */}
              <path
                d="M 710 240 Q 770 180 820 160"
                stroke="url(#routeGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-glow-pulse"
              />
              <path
                d="M 710 240 Q 770 180 820 160"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeDasharray="8 6"
                className="animate-dash-flow"
              />

              {/* Route 2: Vietnam -> Europe (Maritime via Indian Ocean & Suez) */}
              <path
                d="M 710 240 Q 640 260 610 200 Q 560 170 500 130"
                stroke="url(#routeGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                className="animate-glow-pulse"
              />
              <path
                d="M 710 240 Q 640 260 610 200 Q 560 170 500 130"
                stroke="#FFFFFF"
                strokeWidth="1.5"
                strokeDasharray="10 8"
                className="animate-dash-flow"
              />

              {/* Route 3: Vietnam -> Trans-Pacific to Americas West Coast */}
              <path
                d="M 710 240 Q 880 200 990 190"
                stroke="url(#routeGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                d="M 10 190 Q 110 180 210 170"
                stroke="url(#routeGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                d="M 210 170 Q 260 155 300 150"
                stroke="#38BDF8"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
            </svg>
          </div>

          {/* Regional Hub Details Grid */}
          <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(t.regions || []).map((reg, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    {reg.name}
                  </h4>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded">
                    {reg.time}
                  </span>
                </div>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {reg.ports}
                </p>
              </div>
            ))}
          </div>

          {/* Gateway Information footer */}
          <div className="mt-6 p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/25 flex flex-col sm:flex-row items-center justify-between text-xs gap-3">
            <div className="text-cyan-200">
              {t.vietnamHubs}
            </div>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-1.5 text-cyan-300 font-bold hover:text-white uppercase tracking-wider flex-shrink-0 cursor-pointer"
            >
              <span>Explore Route Rates</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
