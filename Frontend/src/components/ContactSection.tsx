import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Calendar,
  Building,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { CLINIC_INFO } from '../data';
import { motion } from 'motion/react';
import { submitFormData, type OrderFormData } from '../api';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

const EMPTY_FORM: OrderFormData = {
  first: '',
  middle: '',
  last: '',
  email: '',
  phone: '',
  city: '',
  country: '',
  address: '',
  message: '',
};

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState<OrderFormData>(EMPTY_FORM);

  const set = (field: keyof OrderFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');
    setErrorMsg('');
    try {
      await submitFormData(formData);
      setSubmitState('success');
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send inquiry.');
      setSubmitState('error');
    }
  };

  const handleReset = () => {
    setFormData(EMPTY_FORM);
    setSubmitState('idle');
    setErrorMsg('');
  };

  const inputClass =
    'w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white outline-hidden transition-all';
  const labelClass =
    'block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 font-mono';

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5 text-slate-700" />
            <span>Clinic &amp; Appointment Information</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121820] tracking-tight leading-tight">
            Connect with <br className="hidden sm:inline" />
            <span className="italic">Advance Physio's Hub</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Schedule an in-person assessment at our modern physiotherapy center in
            Chhatrapati Sambhajinagar (Aurangabad).
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Left Column: Contact Cards & Clinic Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-6"
          >

            {/* Primary Details Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 space-y-5 shadow-sm">

              <div className="border-b border-slate-100 pb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500 font-mono">
                  Clinic Name
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  {CLINIC_INFO.name}
                </h3>
                <p className="text-xs text-slate-600 mt-0.5 font-normal">
                  {CLINIC_INFO.tagline}
                </p>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 text-slate-800 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block font-mono">Address</span>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    {CLINIC_INFO.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">
                    Location: {CLINIC_INFO.locationShort}
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 text-emerald-600 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block font-mono">Direct Contact</span>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    Phone: <span className="text-slate-600 font-normal">{CLINIC_INFO.phone}</span>
                  </p>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    WhatsApp: <span className="text-slate-600 font-normal">{CLINIC_INFO.whatsapp}</span>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 text-slate-700 shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block font-mono">Email</span>
                  <p className="text-sm font-semibold text-slate-900 mt-0.5">
                    {CLINIC_INFO.email}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 mt-0.5 text-slate-700 shadow-xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block font-mono">Opening Hours</span>
                  <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5 leading-relaxed font-normal">
                    {CLINIC_INFO.hours}
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/?text=${encodeURIComponent("Hello Advance Physio's Hub, I would like to book a physiotherapy consultation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-xs transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Clinic</span>
              </motion.a>

              <motion.button
                id="contact-book-modal-trigger"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                className="bg-[#18191B] hover:bg-[#25282C] text-white font-medium text-xs sm:text-sm py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </motion.button>
            </div>

            {/* Google Maps Visual Locator Card */}
            <div className="rounded-3xl border border-slate-200/80 overflow-hidden bg-white relative group shadow-sm">
              <div className="p-4 bg-slate-50 border-b border-slate-200/80 text-slate-900 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold">
                  <Building className="w-4 h-4 text-slate-700" />
                  <span>Google Maps Clinic Location</span>
                </div>
                <span className="text-[11px] text-slate-500 font-mono">Maharashtra, India</span>
              </div>
              <div className="h-44 bg-slate-100 relative flex items-center justify-center overflow-hidden">
                <svg viewBox="0 0 400 200" className="w-full h-full object-cover opacity-30">
                  <path d="M0 50 L400 50 M0 100 L400 100 M0 150 L400 150" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M100 0 L100 200 M200 0 L200 200 M300 0 L300 200" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" />
                  <path d="M50 200 Q200 80 350 200" stroke="#0F172A" strokeWidth="5" fill="none" opacity="0.6" />
                  <path d="M10 30 Q180 140 390 100" stroke="#3B82F6" strokeWidth="5" fill="none" opacity="0.4" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 backdrop-blur-[1px] p-4 text-center">
                  <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg animate-bounce border border-slate-700">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="mt-2 text-xs font-bold text-slate-900 bg-white/95 px-3 py-1 rounded-full shadow-md border border-slate-200">
                    Advance Physio's Hub
                  </span>
                  <span className="text-[10px] text-slate-600 font-medium mt-0.5">
                    Chhatrapati Sambhajinagar (Aurangabad)
                  </span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Contact & Inquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-md relative">

              <div className="mb-7">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Send an Inquiry or Request a Call Back
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1.5 font-normal">
                  Fill in your contact information and our clinical coordinator will reach out to confirm appointment availability.
                </p>
              </div>

              {/* ── Success State ── */}
              {submitState === 'success' ? (
                <div className="py-12 px-6 text-center bg-emerald-50 rounded-2xl border border-emerald-200">
                  <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900">Inquiry Received!</h4>
                  <p className="text-sm text-emerald-700 mt-2 max-w-md mx-auto font-normal">
                    Thank you, <span className="font-semibold">{formData.first}</span>! Our physiotherapy
                    coordinator at Advance Physio's Hub will review your details and contact you promptly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-6 text-xs font-bold text-emerald-800 bg-white border border-emerald-300 px-5 py-2.5 rounded-full hover:bg-emerald-100 transition-colors cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className={labelClass}>First Name *</label>
                      <input
                        id="contact-first-name"
                        type="text"
                        required
                        placeholder="e.g. Rajesh"
                        value={formData.first}
                        onChange={set('first')}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Middle Name</label>
                      <input
                        id="contact-middle-name"
                        type="text"
                        placeholder="Optional"
                        value={formData.middle}
                        onChange={set('middle')}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Last Name *</label>
                      <input
                        id="contact-last-name"
                        type="text"
                        required
                        placeholder="e.g. Patil"
                        value={formData.last}
                        onChange={set('last')}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={set('email')}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Phone / WhatsApp *</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={set('phone')}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* City & Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>City *</label>
                      <input
                        id="contact-city"
                        type="text"
                        required
                        placeholder="e.g. Aurangabad"
                        value={formData.city}
                        onChange={set('city')}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Country *</label>
                      <input
                        id="contact-country"
                        type="text"
                        required
                        placeholder="e.g. India"
                        value={formData.country}
                        onChange={set('country')}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className={labelClass}>Full Address *</label>
                    <input
                      id="contact-address"
                      type="text"
                      required
                      placeholder="House / Street / Locality"
                      value={formData.address}
                      onChange={set('address')}
                      className={inputClass}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className={labelClass}>Describe Your Pain / Movement Goal *</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      placeholder="Please share any relevant details regarding pain location, injury history, or mobility limitations..."
                      value={formData.message}
                      onChange={set('message')}
                      className={`${inputClass} resize-none font-normal`}
                    />
                  </div>

                  {/* Error Banner */}
                  {submitState === 'error' && (
                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-2xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Submit */}
                  <div className="pt-2">
                    <motion.button
                      id="contact-form-submit-btn"
                      whileHover={{ scale: submitState === 'loading' ? 1 : 1.02 }}
                      whileTap={{ scale: submitState === 'loading' ? 1 : 0.98 }}
                      type="submit"
                      disabled={submitState === 'loading'}
                      className="w-full bg-[#18191B] hover:bg-[#25282C] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium text-sm sm:text-base py-4 px-6 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {submitState === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Inquiry…</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 opacity-80" />
                          <span>Submit Inquiry to Advance Physio's Hub</span>
                        </>
                      )}
                    </motion.button>
                    <p className="text-[11px] text-slate-500 text-center mt-3 font-normal">
                      Patient confidentiality is strictly maintained. We never share your health details.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
