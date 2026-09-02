import React from 'react';
import { 
  Activity, 
  Zap, 
  HeartPulse, 
  Hand, 
  Stethoscope, 
  Flame, 
  TrendingUp, 
  Shield, 
  ArrowRight, 
  Check, 
  Calendar,
  Sparkles
} from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bone':
        return <Activity className="w-5 h-5 text-slate-800" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-slate-800" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-slate-800" />;
      case 'HandMetal':
        return <Hand className="w-5 h-5 text-slate-800" />;
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5 text-slate-800" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-slate-800" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-slate-800" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-slate-800" />;
      default:
        return <Activity className="w-5 h-5 text-slate-800" />;
    }
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.02),transparent_70%)] pointer-events-none" />

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
            <span>Clinical Specializations</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121820] tracking-tight leading-tight">
            Comprehensive Physiotherapy & Rehabilitation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Evidence-based therapeutic modalities tailored to resolve musculoskeletal pain, accelerate athletic recovery, and restore full functional movement.
          </p>
        </motion.div>

        {/* 8 Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES_DATA.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: idx * 0.06, duration: 0.4 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header with minimal line icon & index */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-slate-100 group-hover:bg-slate-900 group-hover:text-white border border-slate-200/70 flex items-center justify-center transition-all duration-200">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-slate-900 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-black transition-colors tracking-tight leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Ideal for tag */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Commonly For:</span>
                  <p className="text-xs text-slate-700 font-medium mt-1 line-clamp-2">
                    {service.idealFor}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-2">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full text-xs font-semibold text-slate-700 hover:text-white py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-[#18191B] border border-slate-200 flex items-center justify-center gap-1.5 transition-all duration-200 cursor-pointer group/btn shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5 text-slate-500 group-hover/btn:text-white" />
                  <span>Book for {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Assurance Note Bento Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-lg shadow-black/5 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0 font-bold">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Unsure which treatment is right for your condition?</h4>
              <p className="text-xs text-slate-600 mt-0.5 font-normal">Our initial clinical assessment evaluates your kinetic chain and outlines the optimal recovery roadmap.</p>
            </div>
          </div>
          <button
            onClick={() => onSelectService('General Clinical Assessment')}
            className="shrink-0 bg-[#18191B] hover:bg-[#25282C] text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-2xl transition-all shadow-md cursor-pointer"
          >
            Book Initial Assessment
          </button>
        </motion.div>

      </div>
    </section>
  );
};
