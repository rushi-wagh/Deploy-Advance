import React, { useState, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Calendar, 
  ArrowRight, 
  Activity, 
  ShieldCheck, 
  UserCheck, 
  RotateCw, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  ChevronDown, 
  Check, 
  TrendingUp,
  Award
} from 'lucide-react';
import { CLINIC_INFO, VALUE_STRIP_ITEMS } from '../data';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(38);

  // Video scrubber animation effect
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.4));
    }, 100);
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 sm:pt-36 pb-20 overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#E7EEF5] via-[#DEE8F0] to-[#CFDEE9]"
    >
      {/* Scenic Atmosphere: Sky, Soft Horizon Clouds & Daylight Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Sky Ambient Light */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-white/80 via-blue-50/50 to-transparent rounded-full blur-3xl opacity-70" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-50/40 rounded-full blur-3xl" />
        
        {/* Soft Horizon Silhouette */}
        <svg 
          className="absolute bottom-24 sm:bottom-32 left-0 right-0 w-full h-48 opacity-25 text-slate-400/40" 
          viewBox="0 0 1440 280" 
          fill="currentColor" 
          preserveAspectRatio="none"
        >
          <path d="M0,160L80,149.3C160,139,320,117,480,128C640,139,800,181,960,186.7C1120,192,1280,160,1360,144L1440,128L1440,280L1360,280C1280,280,1120,280,960,280C800,280,640,280,480,280C320,280,160,280,80,280L0,280Z" />
        </svg>

        {/* Rolling Green Grassy Hill (Exact Match to the Uploaded Template) */}
        <div className="absolute bottom-0 left-0 right-0 h-44 sm:h-56 md:h-64 pointer-events-none z-20">
          <svg 
            className="absolute bottom-0 w-full h-full text-[#4E763B]" 
            viewBox="0 0 1440 260" 
            fill="currentColor" 
            preserveAspectRatio="none"
          >
            {/* Background Hill Layer */}
            <path 
              opacity="0.85" 
              d="M0,96L60,112C120,128,240,160,360,165.3C480,171,600,149,720,133.3C840,117,960,107,1080,117.3C1200,128,1320,160,1380,176L1440,192L1440,260L1380,260C1280,260,1200,260,1080,260C960,260,840,260,720,260C600,260,480,260,360,260C240,260,120,260,60,260L0,260Z" 
            />
            {/* Foreground Lush Grass Hill Layer */}
            <path 
              d="M0,160L80,144C160,128,320,96,480,106.7C640,117,800,171,960,181.3C1120,192,1280,160,1360,144L1440,128L1440,260L1360,260C1280,260,1120,260,960,260C800,260,640,260,480,260C320,260,160,260,80,260L0,260Z" 
            />
          </svg>
          
          {/* Subtle realistic grass texture gradient */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#365627] via-[#486D36]/80 to-transparent" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center mt-2 sm:mt-6">
        
        {/* Eyebrow Pill (Template: "Baked to Y Combinator") */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-800 mb-6 sm:mb-8"
        >
          <span className="text-[11px] font-medium text-slate-500">Verified by</span>
          <span className="inline-flex items-center gap-1 bg-[#1A1D20] text-white px-2 py-0.5 rounded-md font-bold text-[10px] tracking-wide">
            <span className="text-emerald-400">⚡</span> OTPT Council
          </span>
          <span className="text-slate-300">•</span>
          <span className="text-slate-600 font-medium text-[11px]">Sports & Spine Care</span>
        </motion.div>

        {/* Massive Serif Display Headline (From Template: "Autopilot for your Customer Support. Scale effortlessly") */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#121820] tracking-tight max-w-4xl leading-[1.08] sm:leading-[1.06]"
        >
          Autopilot for <br className="hidden sm:inline" />
          your Movement & Spine. <br />
          <span className="italic font-light">Recover effortlessly</span>
        </motion.h1>

        {/* Subtitle Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-sm sm:text-base md:text-lg text-slate-600 max-w-xl font-normal leading-relaxed"
        >
          Evidence-based physiotherapy, sports rehabilitation, and orthopedic restoration tailored to your body.
        </motion.p>

        {/* Dark Pill CTA (From Template: "Join to Waitlist") */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-7 sm:mt-8"
        >
          <motion.button
            id="template-hero-main-cta"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenBooking}
            className="bg-[#18191B] hover:bg-[#25282C] active:bg-black text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-2xl shadow-xl shadow-black/15 transition-all flex items-center gap-2.5 cursor-pointer"
          >
            <span>Book Assessment</span>
            <ArrowRight className="w-4 h-4 opacity-80" />
          </motion.button>
        </motion.div>

        {/* Emerging Dashboard / CRM Board Card from the Grass (From Template) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 sm:mt-16 w-full max-w-3xl relative z-30"
        >
          {/* Outer Card Mockup */}
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-5 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.18)] border border-white/80 text-left">
            
            {/* Top Bar inside Card */}
            <div className="flex items-center justify-between pb-5 border-b border-slate-100">
              
              {/* Workspace Pill */}
              <div className="inline-flex items-center gap-2.5 bg-slate-50 border border-slate-200/70 px-3.5 py-1.5 rounded-full">
                <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[10px]">
                  AP
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-slate-900 leading-tight">Advance Physio Care</span>
                  <span className="text-[10px] text-slate-400 leading-tight">Clinical Recovery Space</span>
                </div>
              </div>

              {/* Board CRM Dropdown indicator */}
              <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold">
                <span>Board:</span>
                <span className="text-slate-900 font-bold ml-1">RECOVERY CLINIC</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 ml-0.5" />
              </div>

            </div>

            {/* Inner Grid: Stats, Avatars, and Live Clinical Chat */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5 items-center">
              
              {/* Left Column: Metrics (From Template) */}
              <div className="md:col-span-4 space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Active Rehab</span>
                    <span className="font-semibold text-slate-600">23</span>
                  </div>
                  
                  {/* Big Number Counters */}
                  <div className="flex items-baseline gap-4 mt-2">
                    <div>
                      <span className="text-2xl sm:text-3xl font-bold text-[#65A30D]">12</span>
                      <p className="text-[10px] text-slate-400 mt-0.5 font-medium">intake plan</p>
                    </div>
                    <div>
                      <span className="text-2xl sm:text-3xl font-bold text-slate-900">10</span>
                      <p className="text-[10px] text-slate-400 mt-0.5 font-medium">in therapy</p>
                    </div>
                    <div>
                      <span className="text-2xl sm:text-3xl font-bold text-[#DC2626]">1</span>
                      <p className="text-[10px] text-slate-400 mt-0.5 font-medium">discharged</p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-xs text-slate-400 font-medium">Patients Recovered</span>
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900 mt-0.5 tracking-tight font-sans">
                    2,450+
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold mt-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>98.6% pain relief & mobility success</span>
                  </div>
                </div>
              </div>

              {/* Middle Column: Avatar Stack */}
              <div className="hidden md:flex md:col-span-1 flex-col items-center justify-center gap-2 border-x border-slate-100 py-2">
                <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] font-bold shadow-xs">
                  AP
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center text-[10px] font-bold">
                  RK
                </div>
                <div className="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center text-[10px] font-bold">
                  SJ
                </div>
                <div className="w-8 h-8 rounded-full bg-rose-700 text-white flex items-center justify-center text-[10px] font-bold">
                  MT
                </div>
              </div>

              {/* Right Column: Interactive Chat & Lookup Widget (From Template) */}
              <div className="md:col-span-7 bg-slate-50/80 rounded-2xl p-4 border border-slate-200/60">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-900">Dr. Anand Patil</span>
                    <span className="text-[10px] text-slate-400">#PHYSIO-2024</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                <div className="mt-3 space-y-2.5">
                  <div className="bg-white p-3 rounded-xl border border-slate-200/80 text-xs text-slate-700 shadow-xs">
                    "Hey! How is your lumbar spine mobility and knee flexion after yesterday's therapy?"
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                      <span>⚡</span> ROM Check
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">Automated biofeedback</span>
                  </div>

                  <div className="bg-emerald-50/90 border border-emerald-200/80 p-3 rounded-xl text-xs text-emerald-950 flex items-center justify-between">
                    <div>
                      <span className="font-bold flex items-center gap-1 text-emerald-800">
                        Result: Full Flexion <Check className="w-3.5 h-3.5 text-emerald-600 inline" />
                      </span>
                      <p className="text-[11px] text-emerald-700 mt-0.5">Joint ROM restored +18° without pain triggers</p>
                    </div>
                    <button 
                      onClick={onOpenBooking}
                      className="text-[10px] bg-emerald-700 text-white font-bold px-2.5 py-1 rounded-lg hover:bg-emerald-800 transition-colors shrink-0 ml-2 cursor-pointer"
                    >
                      Book Session
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

      </div>

      {/* Floating Bottom Video Player Bar with Rose/Pink Scrubber (From Template) */}
      <div className="relative z-40 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10">
        <div className="flex items-center gap-3 sm:gap-4 bg-white/40 backdrop-blur-xl p-2 sm:p-2.5 rounded-full border border-white/60 shadow-lg shadow-black/5">
          
          {/* Circular Play / Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-slate-900 shadow-md flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer shrink-0"
            title={isPlaying ? "Pause Tour" : "Play Clinic Video Tour"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-slate-900 text-slate-900" />
            ) : (
              <Play className="w-4 h-4 fill-slate-900 text-slate-900 ml-0.5" />
            )}
          </button>

          {/* Timeline Bar with Pink/Rose Gradient Scrubber */}
          <div 
            className="flex-1 h-2 bg-white/70 rounded-full overflow-hidden cursor-pointer relative"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const newProgress = Math.max(0, Math.min(100, (clickX / rect.width) * 100));
              setProgress(newProgress);
            }}
          >
            <div 
              className="h-full bg-gradient-to-r from-[#FF5C8A] via-[#E11D48] to-[#F43F5E] rounded-full transition-all duration-150"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Timecode indicator */}
          <span className="text-[11px] font-mono text-slate-700 font-semibold px-2 shrink-0 hidden sm:inline">
            0:{Math.floor(progress / 3.3).toString().padStart(2, '0')} / 0:30
          </span>
        </div>
      </div>

    </section>
  );
};
