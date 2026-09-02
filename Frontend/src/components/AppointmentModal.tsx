import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  User,
  Phone,
  CheckCircle2,
  MessageCircle,
  ShieldCheck,
  MapPin,
  Loader2,
  AlertCircle,
  Mail,
} from 'lucide-react';
import { Logo } from './Logo';
import { CLINIC_INFO, SERVICES_DATA } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { submitFormData } from '../api';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

interface ModalFormData {
  first: string;
  last: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  address: string;
  service: string;
  date: string;
  timeSlot: string;
  notes: string;
}

const DEFAULT_FORM = (service?: string): ModalFormData => ({
  first: '',
  last: '',
  email: '',
  phone: '',
  city: '',
  country: 'India',
  address: '',
  service: service || 'Orthopedic Rehabilitation',
  date: new Date().toISOString().split('T')[0],
  timeSlot: 'Morning (09:00 AM - 11:30 AM)',
  notes: '',
});

const timeSlots = [
  'Morning (09:00 AM - 11:30 AM)',
  'Midday (11:30 AM - 02:00 PM)',
  'Afternoon (04:00 PM - 06:30 PM)',
  'Evening (06:30 PM - 08:30 PM)',
];

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState<ModalFormData>(DEFAULT_FORM(preselectedService));

  // Keep service in sync with parent's preselectedService
  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Reset form each time modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmitState('idle');
      setErrorMsg('');
    }
  }, [isOpen]);

  const set =
    (field: keyof ModalFormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');
    setErrorMsg('');

    // Build message string that also carries appointment metadata
    const message =
      `Service: ${formData.service}\n` +
      `Preferred Date: ${formData.date}\n` +
      `Time Slot: ${formData.timeSlot}\n` +
      (formData.notes ? `Additional Notes: ${formData.notes}` : '');

    try {
      await submitFormData({
        first: formData.first,
        middle: '',
        last: formData.last,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        country: formData.country,
        address: formData.address,
        message,
      });
      setSubmitState('success');
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : 'Failed to submit. Please try again.');
      setSubmitState('error');
    }
  };

  const handleWhatsAppBooking = () => {
    const text =
      `Hello Advance Physio's Hub! I would like to book an appointment:\n` +
      `- Name: ${formData.first} ${formData.last}\n` +
      `- Service: ${formData.service}\n` +
      `- Preferred Date: ${formData.date}\n` +
      `- Preferred Slot: ${formData.timeSlot}\n` +
      `- Notes: ${formData.notes || 'N/A'}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const inputClass =
    'w-full px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white outline-hidden transition-all';
  const labelClass =
    'block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop dismiss */}
          <div className="fixed inset-0" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-3xl max-w-xl w-full border border-slate-200 shadow-2xl overflow-hidden relative z-10"
          >
            {/* Modal Top Header */}
            <div className="bg-slate-50/90 p-5 sm:p-6 text-slate-900 flex items-center justify-between border-b border-slate-200">
              <div className="flex items-center gap-3">
                <Logo variant="mark-only" size="sm" />
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-normal text-[#121820] tracking-tight">
                    Book an In-Person Consultation
                  </h3>
                  <p className="text-xs text-slate-500 font-mono">
                    Advance Physio's Hub • {CLINIC_INFO.city}
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 border border-slate-200 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close booking modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">

              {/* ── Success State ── */}
              {submitState === 'success' ? (
                <div className="py-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 shadow-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <h4 className="font-display text-2xl font-normal text-slate-900 tracking-tight">
                    Appointment Request Submitted!
                  </h4>

                  <p className="mt-2 text-sm text-slate-600 max-w-sm mx-auto leading-relaxed font-normal">
                    Thank you,{' '}
                    <span className="font-semibold text-slate-900">
                      {formData.first} {formData.last}
                    </span>
                    . Our clinic coordinator will contact you at{' '}
                    <span className="font-semibold text-slate-900">{formData.phone}</span> to confirm
                    your slot for{' '}
                    <span className="font-semibold text-slate-900">{formData.service}</span>.
                  </p>

                  <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 space-y-1.5 font-normal">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Service:</span>
                      <span className="font-bold text-slate-900">{formData.service}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Requested Date:</span>
                      <span className="font-bold text-slate-900">{formData.date}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Slot:</span>
                      <span className="font-bold text-slate-900">{formData.timeSlot}</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-slate-200">
                      <span className="text-slate-500">Clinic Location:</span>
                      <span className="font-bold text-slate-900">{CLINIC_INFO.city}</span>
                    </div>
                  </div>

                  {/* Instant WhatsApp Confirmation */}
                  <div className="mt-6 space-y-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleWhatsAppBooking}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm py-3.5 px-4 rounded-2xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send Request Instantly via WhatsApp</span>
                    </motion.button>

                    <button
                      onClick={onClose}
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-sm py-3 px-4 rounded-2xl border border-slate-200 transition-colors cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">

                  {/* Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>First Name *</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="modal-first-name"
                          type="text"
                          required
                          placeholder="e.g. Anand"
                          value={formData.first}
                          onChange={set('first')}
                          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white outline-hidden transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Last Name *</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="modal-last-name"
                          type="text"
                          required
                          placeholder="e.g. Shinde"
                          value={formData.last}
                          onChange={set('last')}
                          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white outline-hidden transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Phone Number *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="modal-phone"
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={set('phone')}
                          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white outline-hidden transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Email Address *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="modal-email"
                          type="email"
                          required
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={set('email')}
                          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white outline-hidden transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* City & Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>City *</label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="modal-city"
                          type="text"
                          required
                          placeholder="e.g. Aurangabad"
                          value={formData.city}
                          onChange={set('city')}
                          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white outline-hidden transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>Country *</label>
                      <input
                        id="modal-country"
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
                      id="modal-address"
                      type="text"
                      required
                      placeholder="House / Street / Locality"
                      value={formData.address}
                      onChange={set('address')}
                      className={inputClass}
                    />
                  </div>

                  {/* Service & Date */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Specialization Needed</label>
                      <select
                        id="modal-service"
                        value={formData.service}
                        onChange={set('service')}
                        className={inputClass}
                      >
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title} className="bg-white text-slate-900">
                            {srv.title}
                          </option>
                        ))}
                        <option value="Initial Biomechanical Assessment" className="bg-white text-slate-900">
                          Initial Biomechanical Assessment
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className={labelClass}>Preferred Date *</label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          id="modal-date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={set('date')}
                          className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:border-slate-900 focus:bg-white outline-hidden transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className={labelClass}>Preferred Time Slot</label>
                    <select
                      id="modal-time-slot"
                      value={formData.timeSlot}
                      onChange={set('timeSlot')}
                      className={inputClass}
                    >
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot} className="bg-white text-slate-900">
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Notes */}
                  <div>
                    <label className={labelClass}>Brief Medical / Injury Details (Optional)</label>
                    <textarea
                      id="modal-notes"
                      rows={2}
                      placeholder="e.g. Knee discomfort when running, post-surgery rehab, lower back stiffness..."
                      value={formData.notes}
                      onChange={set('notes')}
                      className="w-full px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:border-slate-900 focus:bg-white outline-hidden resize-none font-normal"
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
                      whileHover={{ scale: submitState === 'loading' ? 1 : 1.02 }}
                      whileTap={{ scale: submitState === 'loading' ? 1 : 0.98 }}
                      type="submit"
                      disabled={submitState === 'loading'}
                      className="w-full bg-[#18191B] hover:bg-[#25282C] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium text-sm sm:text-base py-3.5 px-4 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {submitState === 'loading' ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting…</span>
                        </>
                      ) : (
                        <>
                          <Calendar className="w-4 h-4 opacity-80" />
                          <span>Confirm Appointment Request</span>
                        </>
                      )}
                    </motion.button>
                  </div>

                  <div className="flex items-center justify-center gap-2 pt-1 text-[11px] text-slate-500 font-normal">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Dedicated 1-on-1 Physiotherapist Attention</span>
                  </div>

                </form>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
