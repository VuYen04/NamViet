import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, Ship, Truck, Train, Plane, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { Language, TransportMode, QuoteFormData } from '../types';
import { translations } from '../data/translations';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preselectedMode?: TransportMode;
  preselectedServiceTitle?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  lang,
  preselectedMode = 'sea',
  preselectedServiceTitle,
}) => {
  const t = translations[lang].quoteModal;
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    origin: 'Hai Phong Port, Vietnam',
    destination: 'Hamburg / Rotterdam Port, Europe',
    mode: preselectedMode,
    cargoDescription: preselectedServiceTitle ? `Inquiry for ${preselectedServiceTitle}` : 'Commercial Industrial Goods',
    weightKg: '5000',
    volumeCbm: '15',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Update mode if preselectedMode changes
  React.useEffect(() => {
    if (preselectedMode) {
      setFormData(prev => ({ ...prev, mode: preselectedMode }));
    }
  }, [preselectedMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#020B17]/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#091528] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 text-slate-100"
        >
          {/* Header Accent Glow */}
          <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600" />

          {/* Close Button */}
          <button
            id="quote-modal-close"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-8">
            {!submitted ? (
              <>
                <div className="mb-6">
                  <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 rounded-full">
                    Namviet Logistics Instant Rate Engine
                  </span>
                  <h3 className="text-2xl font-bold mt-3 text-white tracking-tight">
                    {t.title}
                  </h3>
                  <p className="text-sm text-slate-300 mt-1">
                    {t.subtitle}
                  </p>
                </div>

                {/* Step Indicators */}
                <div className="grid grid-cols-3 gap-2 mb-6 border-b border-slate-800 pb-4 text-xs font-semibold text-center">
                  <button
                    onClick={() => setStep(1)}
                    className={`py-2 px-1 rounded-md transition-all ${
                      step === 1 ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {t.step1}
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    className={`py-2 px-1 rounded-md transition-all ${
                      step === 2 ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {t.step2}
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className={`py-2 px-1 rounded-md transition-all ${
                      step === 3 ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {t.step3}
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {step === 1 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-2">
                          {t.modeSelect}
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {[
                            { id: 'sea', label: 'Sea Freight', icon: Ship },
                            { id: 'road', label: 'Road Haulage', icon: Truck },
                            { id: 'rail', label: 'Rail Cargo', icon: Train },
                            { id: 'air', label: 'Air Express', icon: Plane },
                          ].map(mode => {
                            const Icon = mode.icon;
                            const isSelected = formData.mode === mode.id;
                            return (
                              <button
                                type="button"
                                key={mode.id}
                                onClick={() => setFormData({ ...formData, mode: mode.id as TransportMode })}
                                className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                                  isSelected
                                    ? 'bg-cyan-950/70 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                                }`}
                              >
                                <Icon className="w-5 h-5 mb-1.5" />
                                <span className="text-xs font-bold">{mode.label}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            {t.origin}
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.origin}
                            onChange={e => setFormData({ ...formData, origin: e.target.value })}
                            className="w-full bg-slate-950/80 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                            placeholder="e.g. Hai Phong Port, Vietnam"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            {t.destination}
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.destination}
                            onChange={e => setFormData({ ...formData, destination: e.target.value })}
                            className="w-full bg-slate-950/80 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                            placeholder="e.g. Los Angeles Port, USA"
                          />
                        </div>
                      </div>

                      <div className="flex justify-end pt-3">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-[#050D1A] font-bold rounded-lg text-sm transition-colors"
                        >
                          Next: Cargo Details
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {t.cargoType}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.cargoDescription}
                          onChange={e => setFormData({ ...formData, cargoDescription: e.target.value })}
                          className="w-full bg-slate-950/80 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="e.g. Electronics, Garments, Machine Parts"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            {t.weight}
                          </label>
                          <input
                            type="number"
                            required
                            value={formData.weightKg}
                            onChange={e => setFormData({ ...formData, weightKg: e.target.value })}
                            className="w-full bg-slate-950/80 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                            placeholder="e.g. 2500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            {t.volume}
                          </label>
                          <input
                            type="number"
                            required
                            value={formData.volumeCbm}
                            onChange={e => setFormData({ ...formData, volumeCbm: e.target.value })}
                            className="w-full bg-slate-950/80 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                            placeholder="e.g. 12"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {t.incoterms}
                        </label>
                        <select
                          className="w-full bg-slate-950/80 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                          defaultValue="FOB"
                        >
                          <option value="FOB">FOB - Free on Board</option>
                          <option value="CIF">CIF - Cost, Insurance and Freight</option>
                          <option value="EXW">EXW - Ex Works (Door Pickup)</option>
                          <option value="DDP">DDP - Delivered Duty Paid (Door-to-Door)</option>
                          <option value="CFR">CFR - Cost and Freight</option>
                        </select>
                      </div>

                      <div className="flex justify-between pt-3">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="px-4 py-2 text-sm text-slate-400 hover:text-white"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={() => setStep(3)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-[#050D1A] font-bold rounded-lg text-sm transition-colors"
                        >
                          Next: Contact Info
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            Full Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full bg-slate-950/80 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                            placeholder="e.g. Tran Minh Tuan"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            Company Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.companyName}
                            onChange={e => setFormData({ ...formData, companyName: e.target.value })}
                            className="w-full bg-slate-950/80 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                            placeholder="e.g. Global Tech Manufacturing"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            Business Email
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-slate-950/80 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                            placeholder="tuan.tran@company.com"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                            Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-slate-950/80 border border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                            placeholder="+84 90 999 8888"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          {t.notes}
                        </label>
                        <textarea
                          rows={2}
                          value={formData.notes}
                          onChange={e => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full bg-slate-950/80 border border-slate-700 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                          placeholder="e.g. Requires reefer temperature at -18C, customs clearance support in Hai Phong..."
                        />
                      </div>

                      <div className="p-3 bg-cyan-950/40 border border-cyan-500/20 rounded-lg flex items-center gap-3 text-xs text-cyan-200">
                        <ShieldCheck className="w-4 h-4 flex-shrink-0 text-cyan-400" />
                        <span>Quotes are calculated using live spot & contract rates with 2-hour SLA response.</span>
                      </div>

                      <div className="flex justify-between pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="px-4 py-2 text-sm text-slate-400 hover:text-white"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={loading}
                          className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold rounded-lg text-sm transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
                        >
                          {loading ? 'Processing Route...' : t.submit}
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-400/40 rounded-full flex items-center justify-center mx-auto text-cyan-400">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-white">Quotation Request Submitted</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  {t.successMessage}
                </p>
                <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-xl text-left max-w-md mx-auto text-xs space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Route:</span>
                    <span className="font-semibold text-white">{formData.origin} → {formData.destination}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Mode:</span>
                    <span className="font-semibold text-cyan-400 uppercase">{formData.mode} Freight</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Estimated Response:</span>
                    <span className="font-semibold text-emerald-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> Within 2 Business Hours
                    </span>
                  </div>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
