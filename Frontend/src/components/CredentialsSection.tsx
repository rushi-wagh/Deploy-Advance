import React from 'react';
import { Award, Users, Trophy, BookOpen, CheckCircle } from 'lucide-react';
import { CREDENTIALS_DATA } from '../data';
import { motion } from 'motion/react';

export const CredentialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-3.5">
            <Award className="w-3.5 h-3.5 text-slate-700" />
            <span>Professional Associations & Affiliations</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-normal text-[#121820] tracking-tight leading-tight">
            Recognized Clinical Leadership & Ecosystem Involvements
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-normal">
            Committed to advancing the regional physiotherapy community and supporting high-impact athletic endurance events.
          </p>
        </motion.div>

        {/* 3 Credibility Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CREDENTIALS_DATA.map((item, idx) => {
            const iconMap: Record<number, React.ReactNode> = {
              0: <Users className="w-6 h-6 text-slate-800" />,
              1: <Trophy className="w-6 h-6 text-slate-800" />,
              2: <BookOpen className="w-6 h-6 text-slate-800" />,
            };

            return (
              <motion.div
                key={item.organization}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center transition-colors">
                      {iconMap[idx]}
                    </div>
                    <span className="text-[11px] font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 uppercase tracking-wide">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-black transition-colors tracking-tight">
                    {item.organization}
                  </h3>
                  <div className="mt-1 text-xs font-semibold text-slate-600 uppercase tracking-wider">
                    {item.role}
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-medium text-slate-600">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{item.subtitle}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
