import React from 'react';
import { ArrowRight, Target, Sparkles } from 'lucide-react';
import { ClinicVisual } from './VisualAssets';
import { ABOUT_PRINCIPLES } from '../data';
import { motion } from 'motion/react';

interface AboutSectionProps {
  onStartJourney: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartJourney }) => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-50/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Professional Clinic Image Bento */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative order-2 lg:order-1"
          >
            <div className="relative">
              <ClinicVisual type="interior-equipment" className="shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-3xl" />
              
              {/* Feature highlight overlay card */}
              <div className="mt-4 p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-lg shadow-black/5">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-xs uppercase tracking-wider">
                  <Target className="w-4 h-4 text-emerald-600" />
                  <span>Clinical Rehabilitation Philosophy</span>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed font-normal">
                  Integrating clinical manual therapy with progressive neuromuscular re-education in a dedicated rehabilitation center.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Heading & 3 Principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start text-left"
          >
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Our Treatment Philosophy</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121820] tracking-tight leading-tight">
              Physiotherapy That Goes <br className="hidden sm:inline" />
              <span className="italic">Beyond Temporary Pain Relief</span>
            </h2>

            <p className="mt-4 text-base text-slate-600 leading-relaxed font-normal">
              At Advance Physio's Hub, we believe real recovery is more than the temporary suppression of symptoms. Our clinical approach focuses on restoring natural movement kinematics, rebuilding neuromuscular strength, instilling movement confidence, and empowering long-term physical performance.
            </p>

            {/* 3 Principles: 01 Assess, 02 Treat, 03 Restore */}
            <div className="mt-8 space-y-3.5 w-full">
              {ABOUT_PRINCIPLES.map((principle, index) => (
                <motion.div
                  key={principle.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  className="p-4.5 sm:p-5 rounded-2xl border border-slate-200/80 bg-slate-50/70 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200 group shadow-xs"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-xl sm:text-2xl font-bold text-slate-900 font-mono tracking-tight shrink-0 mt-0.5">
                      {principle.number}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                          {principle.title}
                        </h3>
                        <span className="text-xs sm:text-sm font-medium text-slate-500">
                          — {principle.tagline}
                        </span>
                      </div>
                      <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {principle.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Action CTA */}
            <div className="mt-8">
              <motion.button
                id="about-start-journey-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onStartJourney}
                className="bg-[#18191B] hover:bg-[#25282C] text-white font-medium text-sm px-7 py-3.5 rounded-2xl shadow-lg shadow-black/10 transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <span>Start Your Recovery Journey</span>
                <ArrowRight className="w-4 h-4 text-white opacity-80" />
              </motion.button>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
