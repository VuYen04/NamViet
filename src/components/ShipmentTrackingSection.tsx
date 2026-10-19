import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Package, MapPin, Calendar, Clock, CheckCircle2, AlertCircle, ArrowRight, Ship, Truck, Train, Plane, Layers } from 'lucide-react';
import { Language, TransportMode, TrackingShipment } from '../types';
import { translations } from '../data/translations';
import { mockTrackingShipments } from '../data/trackingData';

interface ShipmentTrackingSectionProps {
  lang: Language;
}

export const ShipmentTrackingSection: React.FC<ShipmentTrackingSectionProps> = ({ lang }) => {
  const t = translations[lang].tracking;
  const [searchInput, setSearchInput] = useState('NV-88924-SEA');
  const [activeShipment, setActiveShipment] = useState<TrackingShipment | null>(
    mockTrackingShipments['NV-88924-SEA']
  );
  const [notFound, setNotFound] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const sampleCodes = ['NV-88924-SEA', 'NV-10492-AIR', 'NV-55201-RAIL', 'NV-33018-ROAD'];

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const query = searchInput.trim().toUpperCase();
    if (!query) return;

    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      if (mockTrackingShipments[query]) {
        setActiveShipment(mockTrackingShipments[query]);
        setNotFound(false);
      } else {
        // Fallback demo shipment generated for any custom entered code
        setActiveShipment({
          trackingNumber: query,
          origin: 'Hai Phong Logistics Hub, Vietnam',
          destination: 'International Transit Hub',
          mode: 'sea',
          cargoType: 'Standard General Cargo (FCL)',
          weight: '12,800 kg',
          eta: 'Scheduled in 7 Days',
          currentStatus: 'Active Shipment — In Transit Corridor',
          currentStepIndex: 1,
          history: [
            {
              title: 'Cargo Dispatched from Facility',
              location: 'Hai Phong Terminal',
              timestamp: 'Current Local Time',
              status: 'completed',
              details: 'Cargo registered and electronic waybill issued.',
            },
            {
              title: 'Departed Export Gate',
              location: 'Vietnam International Customs Port',
              timestamp: 'In Progress',
              status: 'in-progress',
              details: 'En route along designated multimodal corridor.',
            },
          ],
        });
        setNotFound(false);
      }
    }, 400);
  };

  const getModeIcon = (mode: TransportMode) => {
    switch (mode) {
      case 'sea':
        return Ship;
      case 'road':
        return Truck;
      case 'rail':
        return Train;
      case 'air':
        return Plane;
    }
  };

  return (
    <section id="tracking" className="py-20 lg:py-28 relative bg-[#040A14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
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

        {/* Tracking Query Search Bar Box */}
        <div className="max-w-3xl mx-auto mb-10">
          <form
            onSubmit={handleSearch}
            className="relative flex flex-col sm:flex-row items-center gap-3 p-2 rounded-2xl bg-gradient-to-r from-[#09172E] to-[#061122] border border-cyan-500/40 shadow-2xl shadow-cyan-950/40"
          >
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-cyan-400" />
              <input
                type="text"
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder={t.inputPlaceholder}
                className="w-full bg-transparent pl-12 pr-4 py-3.5 text-sm sm:text-base text-white placeholder-slate-400 font-mono tracking-wide focus:outline-none"
              />
            </div>

            <button
              id="track-shipment-btn"
              type="submit"
              disabled={isSearching}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-cyan-500/25 cursor-pointer flex-shrink-0"
            >
              <span>{isSearching ? 'SEARCHING...' : t.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Sample Code Chips */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span>{t.sampleTip}</span>
            {sampleCodes.map(code => (
              <button
                key={code}
                onClick={() => {
                  setSearchInput(code);
                  setActiveShipment(mockTrackingShipments[code]);
                }}
                className={`px-2.5 py-1 rounded-md font-mono transition-colors cursor-pointer border ${
                  activeShipment?.trackingNumber === code
                    ? 'bg-cyan-950 border-cyan-400 text-cyan-300 font-bold'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Live Shipment Tracking Journey Result Card */}
        {activeShipment && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl bg-gradient-to-b from-[#08152B] to-[#040C1A] border border-cyan-500/30 p-6 sm:p-10 shadow-2xl overflow-hidden"
          >
            {/* Top Bar: Tracking Number + Status Badge */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/70 border border-cyan-500/30 px-3 py-1 rounded-full">
                    Waybill #{activeShipment.trackingNumber}
                  </span>
                  <span className="text-xs text-slate-400">
                    Mode: <strong className="text-white uppercase">{activeShipment.mode} Freight</strong>
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {activeShipment.currentStatus}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-6">
                <div>
                  <div className="text-[11px] text-slate-400 font-semibold uppercase">{t.eta}</div>
                  <div className="text-sm sm:text-base font-mono font-black text-cyan-300 mt-0.5">
                    {activeShipment.eta}
                  </div>
                </div>
                <div className="border-l border-slate-800 pl-6">
                  <div className="text-[11px] text-slate-400 font-semibold uppercase">Weight / Spec</div>
                  <div className="text-sm font-mono text-white mt-0.5">
                    {activeShipment.weight}
                  </div>
                </div>
              </div>
            </div>

            {/* Route Summary Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 p-4 rounded-xl bg-[#050E1F] border border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-950/80 text-blue-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">{t.origin}</span>
                  <span className="text-sm font-bold text-white block">{activeShipment.origin}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/80 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">{t.destination}</span>
                  <span className="text-sm font-bold text-white block">{activeShipment.destination}</span>
                </div>
              </div>
            </div>

            {/* 6-Step Sample Journey Progress UI */}
            <div className="my-10">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-6">
                Shipment Transit Journey Pipeline
              </h4>

              {/* Progress Line and Nodes */}
              <div className="relative">
                {/* Horizontal Progress Bar */}
                <div className="hidden sm:block absolute top-1/2 left-[5%] right-[5%] -translate-y-1/2 h-1 bg-slate-800 z-0">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 transition-all duration-700 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
                    style={{
                      width: `${(activeShipment.currentStepIndex / Math.max((t.steps?.length || 1) - 1, 1)) * 100}%`,
                    }}
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 relative z-10">
                  {(t.steps || []).map((stepName, idx) => {
                    const isCompleted = idx < activeShipment.currentStepIndex;
                    const isCurrent = idx === activeShipment.currentStepIndex;

                    return (
                      <div key={idx} className="flex flex-col items-center text-center">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                            isCurrent
                              ? 'bg-cyan-500 text-slate-950 ring-4 ring-cyan-500/30 scale-110 shadow-[0_0_20px_rgba(6,182,212,0.6)] font-bold'
                              : isCompleted
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/50'
                              : 'bg-slate-900 text-slate-600 border border-slate-800'
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="w-6 h-6" />
                          ) : (
                            <span className="text-xs font-mono font-bold">{idx + 1}</span>
                          )}
                        </div>

                        <span
                          className={`text-xs font-bold mt-3 block ${
                            isCurrent
                              ? 'text-cyan-300'
                              : isCompleted
                              ? 'text-slate-200'
                              : 'text-slate-500'
                          }`}
                        >
                          {stepName}
                        </span>
                        <span className="text-[10px] text-slate-400">
                          {isCurrent ? 'Current Hub' : isCompleted ? 'Passed' : 'Upcoming'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Audit Log / Historical Checkpoints */}
            <div className="mt-8 pt-6 border-t border-slate-800">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                {t.auditTrail}
              </h4>
              <div className="space-y-3">
                {(activeShipment.history || []).map((item, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-2"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                        item.status === 'completed' ? 'bg-emerald-400' : item.status === 'in-progress' ? 'bg-cyan-400 animate-ping' : 'bg-slate-700'
                      }`} />
                      <div>
                        <div className="font-bold text-white text-sm">{item.title}</div>
                        <div className="text-slate-400 mt-0.5">{item.location} — {item.details}</div>
                      </div>
                    </div>
                    <div className="text-slate-400 font-mono text-right sm:flex-shrink-0">
                      {item.timestamp}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise API Notice */}
            <div className="mt-6 p-3 bg-cyan-950/30 border border-cyan-500/20 rounded-xl text-center text-xs text-cyan-300/80">
              {t.apiNote}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
