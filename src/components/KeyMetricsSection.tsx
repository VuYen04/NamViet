import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Users, Route, Clock, CheckCircle, Info } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface KeyMetricsSectionProps {
  lang: Language;
}

const CounterItem: React.FC<{
  target: number;
  suffix: string;
  label: string;
  description: string;
  icon: React.ElementType;
  inView: boolean;
}> = ({ target, suffix, label, description, icon: Icon, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1800; // ms
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#091528] to-[#050D1A] border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <span className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-widest bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-900/60">
          VERIFIED
        </span>
      </div>

      {/* Metric Number */}
      <div className="flex items-baseline gap-1">
        <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-mono">
          {count}
        </span>
        <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400">
          {suffix}
        </span>
      </div>

      {/* Label */}
      <h3 className="text-base sm:text-lg font-bold text-slate-100 mt-2 tracking-tight">
        {label}
      </h3>

      {/* Supporting description */}
      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export const KeyMetricsSection: React.FC<KeyMetricsSectionProps> = ({ lang }) => {
  const t = translations[lang]?.metrics || {
    tag: lang === 'VI' ? 'HIỆU SUẤT VƯỢT TRỘI' : 'PROVEN PERFORMANCE',
    title: lang === 'VI' ? 'Xây Dựng Trên Nền Tảng Uy Tín, Quy Mô & Tốc Độ' : 'Built on Reliability, Scale, and Velocity',
    disclaimer: lang === 'VI' ? 'Chỉ số hoạt động thực tế trên các tuyến vận tải.' : 'Core operational benchmarks verified across global trade routes.',
    stats: [],
  };
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-50px' });

  const icons = [Award, Users, Route, Clock];

  return (
    <section
      ref={sectionRef}
      className="relative z-20 -mt-8 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Background card container with subtle glassmorphism */}
      <div className="bg-[#071120]/90 backdrop-blur-xl border border-cyan-500/25 rounded-3xl p-6 sm:p-10 shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              {t.tag}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              {t.title}
            </h2>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Info className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
            <span>{t.disclaimer}</span>
          </div>
        </div>

        {/* 4 Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {(t.stats || []).map((stat, index) => (
            <CounterItem
              key={index}
              target={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.desc}
              icon={icons[index] || Award}
              inView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
