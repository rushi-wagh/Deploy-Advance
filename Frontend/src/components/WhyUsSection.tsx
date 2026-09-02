import React from 'react';
import { ScanFace, FileCheck, Target, Compass, Medal, LineChart, Sparkles } from 'lucide-react';
import { WHY_US_ITEMS } from '../data';
import { motion } from 'motion/react';

export const WhyUsSection: React.FC = () => {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'ScanFace':
        return <ScanFace className="w-5 h-5 text-slate-800" />;
      case 'FileCheck':
        return <FileCheck className="w-5 h-5 text-slate-800" />;
      case 'Target':
        return <Target className="w-5 h-5 text-slate-800" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-slate-800" />;
      case 'Medal':
        return <Medal className="w-5 h-5 text-slate-800" />;
      case 'LineChart':
        return <LineChart className="w-5 h-5 text-slate-800" />;
      default:
        return <Sparkles className="w-5 h-5 text-slate-800" />;
    }
  };

  return (
    <section id="why-us" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

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
            <span>The Advance Physio Advantage</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121820] tracking-tight leading-tight">
            Why Patients Choose a <br className="hidden sm:inline" />
            <span className="italic">Measurably Different Approach</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We reject passive, repetitive routines in favor of precision biomechanical assessments, individualized manual interventions, and structured strength restoration.
          </p>
        </motion.div>

        {/* 6 Benefit Blocks Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_US_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="p-6 sm:p-7 rounded-3xl border border-slate-200/80 bg-slate-50/70 hover:bg-white hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center transition-colors mb-5">
                  {getBenefitIcon(item.icon)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-black transition-colors tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-medium text-slate-500">
                <span>Core Standard</span>
                <span className="font-mono text-slate-900 font-bold">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
