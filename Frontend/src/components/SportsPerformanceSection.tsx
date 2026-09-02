import React from 'react';
import { Trophy, Zap, Activity, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { motion } from 'motion/react';

interface SportsPerformanceSectionProps {
  onTalkToPhysio: () => void;
}

export const SportsPerformanceSection: React.FC<SportsPerformanceSectionProps> = ({ onTalkToPhysio }) => {
  return (
    <section className="py-24 lg:py-32 bg-[#F8FAFC] text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Flame className="w-3.5 h-3.5 text-slate-700" />
              <span>Athletes & Endurance Conditioning</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121820] tracking-tight leading-tight">
              From Clinical Recovery <br className="hidden sm:inline" />
              <span className="italic">to Peak Human Performance</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Whether you're returning from an injury, preparing for competition, or simply aiming to move better, rehabilitation can be structured around your performance goals.
            </p>

            {/* Credibility Point: Lokmat Maha Marathon */}
            <motion.div
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="mt-8 p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 shadow-md shadow-slate-200/50 relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                  <Trophy className="w-6 h-6 text-slate-800" />
                </div>
                <div>
                  <div className="inline-block bg-slate-900 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1.5">
                    Official Credibility
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Physio Partner for Lokmat Maha Marathon
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Supporting endurance runners and competitive athletes with on-ground biomechanical screening, acute recovery protocols, and injury mitigation strategies across high-impact race events.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <div className="mt-8">
              <motion.button
                id="sports-talk-physio-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                onClick={onTalkToPhysio}
                className="bg-[#18191B] hover:bg-[#25282C] text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-2xl shadow-md transition-all flex items-center gap-2.5 group cursor-pointer"
              >
                <span>Talk to a Physiotherapist</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 opacity-80" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Performance Highlights Bento Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            
            <div className="bg-white p-5.5 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center mb-3.5">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Kinetic Chain Screening</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                Identifying hidden muscular imbalances and joint restrictions before they manifest as injuries.
              </p>
            </div>

            <div className="bg-white p-5.5 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center mb-3.5">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Return-to-Play Testing</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                Objective criteria testing for agility, force symmetry, and cardiovascular readiness.
              </p>
            </div>

            <div className="bg-white p-5.5 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center mb-3.5">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Load Management</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                Structured progressive loading schedules that adapt to running volumes and sports seasons.
              </p>
            </div>

            <div className="bg-white p-5.5 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center mb-3.5">
                <Trophy className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-slate-900">Endurance Optimization</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                Specialized cadence, stride efficiency, and breathing mechanics for long-distance runners.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
