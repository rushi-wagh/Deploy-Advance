import React from 'react';
import { Quote, CheckCircle2, ArrowRight } from 'lucide-react';
import { ClinicVisual } from './VisualAssets';
import { DIRECTOR_DATA } from '../data';
import { motion } from 'motion/react';

interface DirectorSectionProps {
  onConsultDirector: () => void;
}

export const DirectorSection: React.FC<DirectorSectionProps> = ({ onConsultDirector }) => {
  return (
    <section id="director" className="py-24 lg:py-32 bg-white text-slate-900 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Clinical Leadership</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121820] tracking-tight leading-tight">
            Led by Clinical Expertise. <br className="hidden sm:inline" />
            <span className="italic">Driven by Proven Results.</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Advancing evidence-based physiotherapy, athletic conditioning, and patient-centered rehabilitation in Chhatrapati Sambhajinagar.
          </p>
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Professional Portrait / Identity Card Bento */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <ClinicVisual type="director-portrait" className="w-full shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-3xl" />
          </motion.div>

          {/* Right: Biography, Focus Areas, Quote */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            
            {/* Biography Paragraphs */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              {DIRECTOR_DATA.paragraphs.map((para, i) => (
                <p key={i} className="text-slate-600 font-normal">
                  {para}
                </p>
              ))}
            </div>

            {/* Quote Card */}
            <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/80 relative shadow-sm overflow-hidden group">
              <Quote className="w-8 h-8 text-slate-300 absolute top-4 right-4" />
              <p className="text-slate-800 font-medium text-sm sm:text-base italic leading-relaxed relative z-10">
                "{DIRECTOR_DATA.quote}"
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  — {DIRECTOR_DATA.name}, Director
                </span>
              </div>
            </div>

            {/* Core Focus Areas */}
            <div className="mt-8">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
                Core Clinical & Leadership Focus Areas
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {DIRECTOR_DATA.focusAreas.map((area) => (
                  <div
                    key={area}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200/80 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all duration-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Action */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.button
                id="director-consult-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onConsultDirector}
                className="bg-[#18191B] hover:bg-[#25282C] text-white font-medium text-sm px-7 py-3.5 rounded-2xl shadow-lg shadow-black/10 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Book Consultation with Clinical Team</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 opacity-80" />
              </motion.button>
              <span className="text-xs text-slate-500 text-center sm:text-left font-normal">
                Available for 1-on-1 assessment by prior appointment.
              </span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
