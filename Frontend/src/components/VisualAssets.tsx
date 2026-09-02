import React from 'react';
import { Activity, Shield, CheckCircle2, Award, Dumbbell, HeartPulse, Sparkles, MapPin } from 'lucide-react';

interface ClinicVisualProps {
  type: 'hero-patient' | 'interior-equipment' | 'mirror-station' | 'director-portrait';
  className?: string;
  badgeText?: string;
}

export const ClinicVisual: React.FC<ClinicVisualProps> = ({
  type,
  className = '',
  badgeText,
}) => {
  if (type === 'hero-patient') {
    return (
      <div className={`relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200/80 bg-slate-900 shadow-2xl ${className}`}>
        {/* SVG/Vector Rendered Faithful Reconstruction of the Real Clinic Patient Photo */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] bg-gradient-to-br from-slate-900 via-slate-800 to-stone-900 overflow-hidden">
          <svg
            viewBox="0 0 800 600"
            className="w-full h-full object-cover select-none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="warmPerimeterLight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.45" />
                <stop offset="30%" stopColor="#FDE68A" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="mirrorReflect" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#334155" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#1E293B" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="machineMetal" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#CBD5E1" />
                <stop offset="50%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#475569" />
              </linearGradient>
              <linearGradient id="cushionBlack" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#27272A" />
                <stop offset="100%" stopColor="#09090B" />
              </linearGradient>
            </defs>

            {/* Clinic Wall & Mirror Background */}
            <rect width="800" height="600" fill="#1E293B" />
            
            {/* Ceiling indirect warm architectural cove lighting (as seen in clinic) */}
            <rect x="0" y="0" width="800" height="70" fill="#0F172A" />
            <rect x="0" y="65" width="800" height="12" fill="#FBBF24" opacity="0.85" filter="blur(4px)" />
            <rect x="0" y="70" width="800" height="4" fill="#FEF08A" opacity="0.95" />
            
            {/* Full-length mirror bays & structural columns */}
            <rect x="20" y="80" width="460" height="420" fill="url(#mirrorReflect)" stroke="#475569" strokeWidth="2" />
            <rect x="500" y="80" width="280" height="420" fill="#1E293B" stroke="#334155" strokeWidth="2" />
            
            {/* Clinic Floor with clean clinic matting */}
            <polygon points="0,480 800,480 800,600 0,600" fill="#334155" />
            <line x1="0" y1="480" x2="800" y2="480" stroke="#64748B" strokeWidth="2" />
            
            {/* Reflected rehabilitation bike & clinic equipment in mirror background */}
            <g opacity="0.45" transform="translate(140, 180) scale(0.65)">
              <path d="M60 260 L140 120 L240 180 L290 260 Z" fill="url(#machineMetal)" />
              <circle cx="150" cy="220" r="45" fill="#475569" />
              <rect x="80" y="100" width="40" height="60" rx="6" fill="#09090B" />
            </g>

            {/* Cable Station & Multi-gym in background right */}
            <g transform="translate(530, 90)">
              <rect x="40" y="0" width="12" height="400" fill="url(#machineMetal)" />
              <rect x="180" y="0" width="12" height="400" fill="url(#machineMetal)" />
              <rect x="20" y="0" width="190" height="15" fill="#334155" />
              <rect x="30" y="180" width="170" height="180" rx="4" fill="#0F172A" stroke="#475569" />
              {/* Stack weights */}
              {[...Array(12)].map((_, i) => (
                <rect key={i} x="45" y={200 + i * 12} width="140" height="8" rx="2" fill="#1E293B" stroke="#334155" strokeWidth="1" />
              ))}
            </g>

            {/* Foreground Real TopPro Recumbent Rehabilitation Bike */}
            <g transform="translate(240, 180)">
              {/* Main Machine Chassis & Flywheel Housing */}
              <path
                d="M120 320 C180 320, 260 280, 280 200 C300 130, 240 80, 180 80 C120 80, 70 140, 60 220 C50 280, 80 320, 120 320 Z"
                fill="url(#machineMetal)"
                stroke="#64748B"
                strokeWidth="3"
              />
              {/* TopPro Brand Accent Badge on Bike (as in real photo) */}
              <rect x="110" y="220" width="60" height="22" rx="4" fill="#DC2626" />
              <text x="140" y="235" fill="#FFFFFF" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">TOPPRO</text>
              <circle cx="150" cy="180" r="55" fill="#1E293B" stroke="#64748B" strokeWidth="4" />
              
              {/* Pedal Crank and Foot Rest */}
              <line x1="150" y1="180" x2="100" y2="240" stroke="#E2E8F0" strokeWidth="8" strokeLinecap="round" />
              <rect x="80" y="235" width="40" height="18" rx="4" fill="#09090B" />
              <path d="M75 235 Q100 215 125 235" stroke="#334155" strokeWidth="3" fill="none" />

              {/* Recumbent Ergometer Console and Handlebars */}
              <path d="M190 90 L240 -10 L270 10" stroke="url(#machineMetal)" strokeWidth="14" strokeLinecap="round" />
              <rect x="240" y="-45" width="70" height="55" rx="6" fill="#09090B" stroke="#64748B" strokeWidth="2" />
              <rect x="250" y="-35" width="50" height="35" rx="3" fill="#047857" />
              <text x="275" y="-14" fill="#A7F3D0" fontSize="10" fontFamily="monospace" textAnchor="middle">REHAB 42W</text>
              <line x1="220" y1="20" x2="310" y2="20" stroke="#0F172A" strokeWidth="10" strokeLinecap="round" />

              {/* Ergonomic Patient Recumbent Seat Support */}
              <path d="M30 200 L-40 280 L-100 290" stroke="url(#machineMetal)" strokeWidth="16" strokeLinecap="round" />
              <rect x="-90" y="150" width="70" height="120" rx="12" fill="url(#cushionBlack)" stroke="#3F3F46" strokeWidth="3" transform="rotate(18, -60, 200)" />
              <rect x="-60" y="240" width="100" height="55" rx="10" fill="url(#cushionBlack)" stroke="#3F3F46" strokeWidth="3" />
            </g>

            {/* Active Patient Silhouette / Illustrated Real Subject */}
            <g transform="translate(190, 110)">
              {/* Patient in red athletic polo active movement */}
              {/* Head & focus */}
              <circle cx="340" cy="50" r="28" fill="#D97706" />
              <path d="M330 35 Q348 25 365 38 Q355 60 330 35 Z" fill="#18181B" />
              
              {/* Upper Torso - Vibrant Red Shirt (as in real patient photo) */}
              <path
                d="M320 75 L380 95 L340 220 L270 200 L285 105 Z"
                fill="#E52320"
                stroke="#B91C1C"
                strokeWidth="2"
              />
              {/* Collar detail */}
              <path d="M325 75 L345 95 L360 85" stroke="#991B1B" strokeWidth="3" fill="none" />
              
              {/* Arm reaching forward to bike handle */}
              <path d="M350 100 L395 140 L440 115" stroke="#D97706" strokeWidth="18" strokeLinecap="round" strokeLinejoin="round" />
              
              {/* Lower Body - Camouflage/Grey shorts & leg actively driving pedal */}
              <path d="M265 200 L345 220 L300 290 L230 270 Z" fill="#64748B" stroke="#475569" strokeWidth="2" />
              
              {/* Active Leg (Thigh to knee to foot on pedal) */}
              <path
                d="M280 260 L230 330 L150 360"
                stroke="#D97706"
                strokeWidth="22"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Foot driving the ergonomic recumbent pedal */}
              <path d="M150 360 L125 385 L165 395 Z" fill="#D97706" />
            </g>
          </svg>

          {/* Authentic Real Clinic Tag Overlays */}
          <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-white text-xs font-semibold tracking-wide uppercase">Real Clinic Session</span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 sm:p-5 rounded-xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <p className="text-white font-bold text-sm sm:text-base flex items-center gap-2">
                <Activity className="w-4 h-4 text-red-500" />
                Active Functional Rehabilitation Bay
              </p>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                TopPro Medical Recumbent Ergometer & Biomechanical Posture Mirrors
              </p>
            </div>
            <div className="shrink-0 bg-red-600/90 text-white text-[11px] font-bold px-3 py-1.5 rounded-md uppercase tracking-wider">
              {badgeText || 'Personalized Care'}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'interior-equipment') {
    return (
      <div className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl ${className}`}>
        <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-slate-950 via-slate-900 to-stone-900 overflow-hidden">
          <svg viewBox="0 0 800 500" className="w-full h-full object-cover select-none">
            <defs>
              <linearGradient id="gymGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
                <stop offset="40%" stopColor="#D97706" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#0F172A" stopOpacity="0.9" />
              </linearGradient>
            </defs>

            {/* Clinic Mirror Wall Array */}
            <rect width="800" height="500" fill="#1E293B" />
            <rect x="0" y="40" width="800" height="6" fill="#FBBF24" opacity="0.9" filter="blur(3px)" />
            
            {/* Mirror bays reflecting rehabilitation gym */}
            <rect x="30" y="60" width="740" height="340" fill="#0F172A" stroke="#475569" strokeWidth="2" opacity="0.9" />
            
            {/* Floor surface */}
            <polygon points="0,400 800,400 800,500 0,500" fill="#334155" />
            
            {/* Recumbent Bikes, Benches & Cable Tower Alignment */}
            <g transform="translate(100, 160)">
              {/* Bike 1 */}
              <circle cx="80" cy="180" r="45" fill="#475569" stroke="#64748B" strokeWidth="3" />
              <path d="M80 180 L140 100 L180 120" stroke="#94A3B8" strokeWidth="12" strokeLinecap="round" />
              <rect x="140" y="70" width="45" height="35" rx="4" fill="#09090B" />
              {/* Bench */}
              <rect x="220" y="210" width="130" height="24" rx="4" fill="#09090B" stroke="#3F3F46" />
              <rect x="240" y="234" width="8" height="40" fill="#64748B" />
              <rect x="320" y="234" width="8" height="40" fill="#64748B" />
              {/* Cable Pulldown Tower */}
              <rect x="420" y="0" width="140" height="260" rx="4" fill="#09090B" stroke="#475569" />
              <rect x="440" y="20" width="100" height="220" fill="#1E293B" />
              <line x1="390" y1="40" x2="590" y2="40" stroke="#CBD5E1" strokeWidth="6" />
            </g>
          </svg>

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 p-5 flex flex-col justify-between">
            <div className="self-start bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-white text-xs font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Equipped for Kinetic Recovery
            </div>
            <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700/80 p-3.5 rounded-xl">
              <h4 className="text-white font-bold text-sm">Advanced Rehabilitation Suite</h4>
              <p className="text-slate-300 text-xs mt-0.5">
                Specialized medical ergometers, cable towers, and posture mirrors at Chhatrapati Sambhajinagar clinic.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'director-portrait') {
    return (
      <div className={`relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 shadow-2xl flex flex-col items-center justify-between text-center ${className}`}>
        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-bl-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-600/10 rounded-tr-full pointer-events-none"></div>

        {/* Clinical Director Avatar Graphic */}
        <div className="relative my-4">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 border-4 border-white/20 p-1.5 shadow-2xl flex items-center justify-center relative overflow-hidden">
            {/* Stylized Clinical Professional Icon */}
            <div className="w-full h-full rounded-full bg-gradient-to-b from-slate-700 to-slate-900 flex flex-col items-center justify-center text-slate-200">
              <div className="w-16 h-16 rounded-full bg-slate-600/80 border-2 border-slate-400/30 flex items-center justify-center mb-1">
                <HeartPulse className="w-8 h-8 text-red-500" />
              </div>
              <div className="w-24 h-12 rounded-t-full bg-slate-600/60 border-t border-slate-400/30"></div>
            </div>

            {/* Verification Badge */}
            <div className="absolute bottom-2 right-2 bg-red-600 text-white p-2 rounded-full shadow-lg border-2 border-slate-900">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="mt-3 inline-block bg-white/10 backdrop-blur-md border border-white/20 text-slate-200 text-xs font-semibold px-3 py-1 rounded-full">
            Clinical Leader & Founder
          </div>
        </div>

        {/* Identity & Credentials Summary */}
        <div className="mt-2 w-full">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            [Director Name]
          </h3>
          <p className="text-red-400 font-semibold text-sm mt-1">
            Director & Head Physiotherapist
          </p>
          <p className="text-slate-400 text-xs mt-1 flex items-center justify-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-slate-400" />
            Advance Physio's Hub, Chhatrapati Sambhajinagar
          </p>

          <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-2 gap-3 text-left">
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Association</span>
              <span className="text-white text-xs font-bold block mt-0.5">Secretary</span>
              <span className="text-slate-300 text-[11px] block truncate">CSN Physio Association</span>
            </div>
            <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Athletics</span>
              <span className="text-white text-xs font-bold block mt-0.5">Physio Partner</span>
              <span className="text-slate-300 text-[11px] block truncate">Lokmat Maha Marathon</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default fallback
  return <div className={`bg-slate-100 rounded-2xl ${className}`} />;
};
