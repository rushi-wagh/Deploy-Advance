import React, { useState } from 'react';
import { ClinicVisual } from './VisualAssets';
import { Activity, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export const ClinicExperienceSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);

  const features = [
    {
      title: "Active Functional Rehabilitation Bay",
      category: "Rehab Gym & Ergometer",
      description: "Equipped with TopPro recumbent bikes designed for low-impact joint mobilization, cardiovascular reconditioning, and lower extremity kinetic restoration.",
      equipment: ["TopPro Recumbent Ergometers", "Posture Alignment Full-Wall Mirrors", "Indirect Cove Illumination"],
    },
    {
      title: "Strength & Progressive Loading Suite",
      category: "Musculoskeletal Conditioning",
      description: "Custom multi-gym cable station and adjustable resistance benches allowing precise angle-specific loading for shoulder, spine, and lower limb rehab.",
      equipment: ["Cable Lat & Pulldown Towers", "Incline/Decline Physical Therapy Benches", "Multi-Weight Calibration"],
    },
    {
      title: "Clinical Manual Therapy & Assessment Area",
      category: "Hands-on Treatment",
      description: "Spacious, private assessment spaces dedicated to orthopedic palpation, joint mobilizations, trigger point therapy, and biomechanical screening.",
      equipment: ["High-Low Treatment Tables", "Gait & Kinetic Screen Bays", "Therapeutic Resistance Bands"],
    },
  ];

  return (
    <section id="clinic" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />

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
            <span>Dedicated Rehabilitation Infrastructure</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal text-[#121820] tracking-tight leading-tight">
            A Modern Clinical Space <br className="hidden sm:inline" />
            <span className="italic">Built for Better Recovery</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
            Designed to support focused rehabilitation, movement training and individualized patient care. Our Chhatrapati Sambhajinagar center blends modern clinical equipment with dedicated 1-on-1 therapist attention.
          </p>
        </motion.div>

        {/* Two-Column Showcase Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual Gallery of Real Clinic Interior & Patient Setup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="relative group rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-slate-200">
              <ClinicVisual type="hero-patient" badgeText="Supervised Session" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                <ClinicVisual type="interior-equipment" />
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 text-slate-900 flex flex-col justify-between border border-slate-200/80 shadow-sm">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-center mb-3.5">
                    <Activity className="w-4 h-4 text-slate-800" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">Biomechanical Mirror Array</h4>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                    Full-wall optical mirrors enable visual biofeedback during exercise re-education, posture correction, and gait retraining.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Real-time Kinematic Correction</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Infrastructure Features (Interactive Bento Cards) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
              Clinic Infrastructure Highlights
            </h3>

            {features.map((feat, idx) => (
              <motion.div
                key={feat.title}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                onClick={() => setActiveFeature(idx)}
                className={`p-5.5 rounded-3xl border transition-all duration-300 cursor-pointer ${
                  activeFeature === idx
                    ? 'bg-white border-slate-300 shadow-xl shadow-slate-200/60 ring-1 ring-slate-900/5'
                    : 'bg-slate-50/70 border-slate-200/80 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {feat.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                </div>

                <h4 className="text-base font-bold text-slate-900 mt-2 tracking-tight">
                  {feat.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-normal">
                  {feat.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {feat.equipment.map((eq) => (
                    <span
                      key={eq}
                      className="bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-medium px-2.5 py-0.5 rounded-lg"
                    >
                      {eq}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
