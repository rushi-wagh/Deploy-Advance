import React from 'react';
import { Calendar, ArrowRight, CheckCircle2, ChevronRight, Activity, Target } from 'lucide-react';
import { PATIENT_JOURNEY_STEPS } from '../data';
import { motion } from 'motion/react';

interface PatientJourneySectionProps {
  onBookAssessment: () => void;
}

export const PatientJourneySection: React.FC<PatientJourneySectionProps> = ({ onBookAssessment }) => {
  return (
    <section id="journey" className="py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">
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
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Structured Clinical Pathway</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121820] tracking-tight leading-tight">
            Your Recovery, <br className="hidden sm:inline" />
            <span className="italic">Step by Clear Step</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Recovery is a progressive continuum. We design your therapy around measurable physical stages that evolve as your strength, mobility, and tolerance improve.
          </p>
        </motion.div>

        {/* 4 Steps Horizontal / Responsive Flow Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PATIENT_JOURNEY_STEPS.map((step, idx) => (
            <motion.div
              key={step.stepNumber}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between relative group shadow-sm"
            >
              <div>
                {/* Step Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl sm:text-3xl font-black text-slate-900 font-mono tracking-tight">
                    {step.stepNumber}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>

                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  {step.subtitle}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-black transition-colors mt-1 tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>

                {/* Highlights */}
                <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                  {step.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs font-normal text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium font-mono">
                Phase 0{idx + 1} of 04
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Evolution Note & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-14 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200/80 text-center max-w-2xl mx-auto shadow-lg shadow-black/5 relative overflow-hidden"
        >
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Every recovery plan is dynamic and calibrated to your milestones.
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal">
            We continuously re-evaluate joint range, strength metrics, and movement quality to ensure seamless progression.
          </p>
          <div className="mt-6">
            <motion.button
              id="journey-book-assessment-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onBookAssessment}
              className="bg-[#18191B] hover:bg-[#25282C] text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2.5 mx-auto cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Assessment</span>
              <ArrowRight className="w-4 h-4 opacity-80" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
