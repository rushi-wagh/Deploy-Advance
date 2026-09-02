import React from 'react';
import { Calendar, MessageCircle, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data';
import { motion } from 'motion/react';

interface QuickContactBarProps {
  onOpenBooking: () => void;
}

export const QuickContactBar: React.FC<QuickContactBarProps> = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200 p-2.5 shadow-xl">
      <div className="max-w-md mx-auto grid grid-cols-3 gap-2">
        
        {/* Call Button */}
        <motion.a
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs py-2.5 px-2 rounded-2xl flex flex-col items-center justify-center gap-1 border border-slate-200 transition-colors"
        >
          <Phone className="w-4 h-4 text-slate-600" />
          <span className="leading-none text-[10px] font-medium text-slate-700">Call</span>
        </motion.a>

        {/* WhatsApp Button */}
        <motion.a
          whileTap={{ scale: 0.95 }}
          href={`https://wa.me/?text=${encodeURIComponent("Hello Advance Physio's Hub, I would like to inquire about physiotherapy services.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs py-2.5 px-2 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-xs transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="leading-none text-[10px] font-medium">WhatsApp</span>
        </motion.a>

        {/* Book Appointment CTA */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onOpenBooking}
          className="bg-[#18191B] hover:bg-[#25282C] text-white font-medium text-xs py-2.5 px-2 rounded-2xl flex flex-col items-center justify-center gap-1 shadow-sm transition-colors cursor-pointer"
        >
          <Calendar className="w-4 h-4 opacity-90" />
          <span className="leading-none text-[10px] font-medium">Book</span>
        </motion.button>

      </div>
    </div>
  );
};
