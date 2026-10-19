import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Building, Ship, Truck, Train, Plane, ShieldCheck } from 'lucide-react';
import { Language, TransportMode } from '../types';
import { translations } from '../data/translations';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = translations[lang].contact;
  const [selectedMode, setSelectedMode] = useState<TransportMode>('sea');
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormState({
      name: '',
      company: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#050D1A]">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          {/* Left Column: Corporate Information & Vietnam Logistics Hubs (Cols 1-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Headquarters Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-[#09172E] to-[#06101E] border border-cyan-500/30 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 border border-cyan-500/30">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {t.hqTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                    {t.hqAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#081427] border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center mb-3">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-xs text-slate-400">{t.phoneLabel}</div>
                <div className="text-sm font-bold text-white font-mono mt-0.5">
                  {t.phone}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#081427] border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center mb-3">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-xs text-slate-400">{t.emailLabel}</div>
                <div className="text-sm font-bold text-white font-mono mt-0.5">
                  {t.email}
                </div>
              </div>
            </div>

            {/* Working Hours & 24/7 Operations */}
            <div className="p-5 rounded-xl bg-[#081427] border border-slate-800 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-cyan-950 text-cyan-400 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-xs text-slate-300 space-y-1">
                <div className="font-bold text-white text-sm">{t.hoursTitle}</div>
                <div>{t.hoursWeekdays}</div>
                <div className="text-cyan-400 font-semibold">{t.hoursOps}</div>
              </div>
            </div>

            {/* Interactive Vietnam Key Logistics Ports & Terminals list */}
            <div className="p-5 rounded-2xl bg-gradient-to-b from-[#071325] to-[#040C18] border border-cyan-500/20">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Vietnam Multimodal Terminals
                </h4>
                <span className="text-[10px] font-mono text-emerald-400">4 STRATEGIC HUBS</span>
              </div>
              <div className="space-y-2 text-xs">
                {(t.portLocations || []).map((port, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 flex items-center justify-between"
                  >
                    <div>
                      <span className="font-bold text-white">{port.name}</span>
                      <span className="text-slate-400 text-[11px] block">{port.type}</span>
                    </div>
                    <span className="font-mono text-[10px] text-cyan-300 bg-cyan-950/70 px-2 py-0.5 rounded border border-cyan-500/30">
                      {port.region}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Quick Contact & Rate Form (Cols 6-12) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#09172E] to-[#050E1E] border border-cyan-500/30 shadow-2xl relative">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {t.formTitle}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {t.formSubtitle}
                      </p>
                    </div>
                    <div className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" /> SSL Encrypted
                    </div>
                  </div>

                  {/* Mode Selector Radio Pills */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      {t.modeLabel}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {[
                        { id: 'sea', label: 'Sea Freight', icon: Ship },
                        { id: 'road', label: 'Road Haulage', icon: Truck },
                        { id: 'rail', label: 'Rail Cargo', icon: Train },
                        { id: 'air', label: 'Air Express', icon: Plane },
                      ].map(m => {
                        const Icon = m.icon;
                        const isSelected = selectedMode === m.id;
                        return (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setSelectedMode(m.id as TransportMode)}
                            className={`flex items-center justify-center gap-2 p-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.3)]'
                                : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span>{m.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Nguyen Van A"
                        className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.companyLabel}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.company}
                        onChange={e => setFormState({ ...formState, company: e.target.value })}
                        placeholder="Global Trading Corp"
                        className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.emailLabelInput}
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                        placeholder="contact@company.com"
                        className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {t.phoneLabelInput}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={e => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+84 90 123 4567"
                        className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {t.messageLabel}
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formState.message}
                      onChange={e => setFormState({ ...formState, message: e.target.value })}
                      placeholder={t.messagePlaceholder}
                      className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="contact-form-submit-btn"
                    type="submit"
                    disabled={isSending}
                    className="w-full inline-flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
                  >
                    <span>{isSending ? 'TRANSMITTING...' : t.submitBtn}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Inquiry Received</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you {formState.name || 'valued customer'}. Our logistics coordination desk is reviewing your requirements for {selectedMode.toUpperCase()} transport and will respond within 2 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors"
                  >
                    Send Another Request
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
