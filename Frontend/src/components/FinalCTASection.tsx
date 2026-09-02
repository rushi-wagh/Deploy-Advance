import React from 'react';
import { Calendar, Phone, ArrowRight, MapPin, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import { motion } from 'motion/react';

interface FinalCTAProps {
  onOpenBooking: () => void;
  onContactClinic: () => void;
}

export const FinalCTASection: React.FC<FinalCTAProps> = ({ onOpenBooking, onContactClinic }) => {
  return (
    <section className="py-24 lg:py-32 bg-white text-slate-900 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-6"
        >
          <ShieldCheck className="w-4 h-4 text-slate-700" />
          <span>Advance Physio's Hub • Chhatrapati Sambhajinagar</span>
        </motion.div>

        {/* Heading & Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#121820] tracking-tight leading-tight"
        >
          Ready to Reclaim <br className="hidden sm:inline" />
          <span className="italic">Pain-Free, Confident Movement?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-5 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Take the first step toward structured rehabilitation, athletic recovery, and measurable physical performance.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            id="final-cta-book-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenBooking}
            className="w-full sm:w-auto bg-[#18191B] hover:bg-[#25282C] text-white font-medium text-base px-9 py-4 rounded-2xl shadow-xl shadow-black/10 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <Calendar className="w-5 h-5 opacity-90" />
            <span>Book an Appointment</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 opacity-80" />
          </motion.button>

          <motion.button
            id="final-cta-contact-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContactClinic}
            className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200 font-medium text-base px-8 py-4 rounded-2xl transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-slate-600" />
            <span>Contact the Clinic</span>
          </motion.button>
        </motion.div>

        {/* Essential Clinic Details Strip */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left"
        >
          <div className="flex items-start gap-3.5 bg-slate-50 p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <MapPin className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block font-mono">Clinic Location</span>
              <span className="text-sm font-semibold text-slate-900 mt-0.5 block">{CLINIC_INFO.locationShort}</span>
            </div>
          </div>

          <div className="flex items-start gap-3.5 bg-slate-50 p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block font-mono">Direct Consultation</span>
              <span className="text-sm font-semibold text-slate-900 mt-0.5 block">Phone: {CLINIC_INFO.phone}</span>
              <span className="text-xs text-slate-600 font-normal">WhatsApp: {CLINIC_INFO.whatsapp}</span>
            </div>
          </div>

          <div className="flex items-start gap-3.5 bg-slate-50 p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <Clock className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block font-mono">Consultation Hours</span>
              <span className="text-sm font-semibold text-slate-900 mt-0.5 block">{CLINIC_INFO.hours}</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
