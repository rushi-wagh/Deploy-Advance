import React from 'react';
import { MessageSquareQuote, HeartHandshake, MapPin } from 'lucide-react';
import { TESTIMONIALS_PLACEHOLDERS } from '../data';
import { motion } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <HeartHandshake className="w-3.5 h-3.5 text-slate-700" />
            <span>Patient Recovery Experiences</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121820] tracking-tight leading-tight">
            Patient Stories & <br className="hidden sm:inline" />
            <span className="italic">Documented Recovery Outcomes</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
            Real patient feedback and verified recovery outcomes from our Chhatrapati Sambhajinagar clinic.
          </p>
        </motion.div>

        {/* 3 Visually Polished Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_PLACEHOLDERS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-slate-200/80 hover:border-slate-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full uppercase tracking-wider">
                    {item.tag}
                  </span>
                  <MessageSquareQuote className="w-5 h-5 text-slate-400 group-hover:text-slate-800 transition-colors" />
                </div>

                <div className="text-sm font-bold text-slate-900 mb-3 tracking-tight">
                  {item.condition}
                </div>

                {/* Quote text */}
                <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed bg-white p-4 rounded-2xl border border-slate-200/60 font-normal shadow-xs">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-slate-900">
                    {item.patientTitle}
                  </div>
                  <div className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5 font-normal">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clinical Feedback Note */}
        <div className="mt-10 text-center text-xs text-slate-500 max-w-xl mx-auto font-normal">
          Patient feedback records can be continuously updated with verified clinic reviews and rehabilitation milestones.
        </div>

      </div>
    </section>
  );
};
