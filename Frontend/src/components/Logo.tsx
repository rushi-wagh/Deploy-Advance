import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'stacked' | 'horizontal' | 'mark-only';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  inverted?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  size = 'md',
  inverted = true,
}) => {
  // Brand Colors
  const redColor = '#E11D48';
  const darkColor = inverted ? '#FFFFFF' : '#0F172A';

  // Mark SVG
  const LogoMark = (
    <div className="relative group">
      <div className="absolute inset-0 bg-red-500/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(225,29,72,0.4)]"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Red Background Circle with subtle gradient */}
        <defs>
          <linearGradient id="logoRedGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F43F5E" />
            <stop offset="100%" stopColor="#BE123C" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="46" fill="url(#logoRedGrad)" />

        {/* Stylized Dynamic Human Figure (White) */}
        <g fill="#FFFFFF">
          {/* Head */}
          <circle cx="68" cy="27" r="7" />
          
          {/* Dynamic Torso & Upper Arm/Leg Curve */}
          <path
            d="M66 38 C56 36, 47 38, 41 43 C35 48, 30 52, 23 54 C31 52, 38 49, 44 47 C50 45, 56 46, 62 50 C67 54, 70 61, 71 69 C68 64, 64 57, 57 56 C50 55, 43 59, 39 67 C44 60, 52 57, 60 60 C65 62, 69 68, 70 76 C71 63, 67 52, 59 47 C65 48, 70 45, 71 39 Z"
            fill="#FFFFFF"
          />
          <path
            d="M48 37 C42 40, 34 44, 25 45 C34 43, 44 40, 50 37 Z"
            fill="#FFFFFF"
          />
        </g>

        {/* Dynamic Green Recovery Arc 1 */}
        <path
          d="M12 73 C26 58, 54 53, 86 64 C60 56, 32 61, 12 73 Z"
          fill="#10B981"
        />
        {/* Dynamic Green Recovery Arc 2 - lighter highlight */}
        <path
          d="M17 71 C32 57, 57 53, 83 62 C61 55, 36 60, 17 71 Z"
          fill="#34D399"
        />
      </svg>
    </div>
  );

  if (variant === 'mark-only') {
    const sizeMap = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-14 h-14',
      xl: 'w-20 h-20',
    };
    return <div className={`${sizeMap[size]} ${className}`}>{LogoMark}</div>;
  }

  if (variant === 'stacked') {
    const markSize = {
      sm: 'w-10 h-10',
      md: 'w-14 h-14',
      lg: 'w-20 h-20',
      xl: 'w-28 h-28',
    };

    return (
      <div className={`flex flex-col items-center select-none text-center ${className}`}>
        <div className={markSize[size]}>{LogoMark}</div>
        <div className="mt-2 flex flex-col items-center">
          <span
            className="font-extrabold tracking-[0.14em] text-lg sm:text-xl uppercase leading-tight"
            style={{ color: darkColor, fontFamily: "'Outfit', sans-serif" }}
          >
            ADVANCE
          </span>
          <div
            className="mt-0.5 px-3 py-0.5 rounded-xs"
            style={{ backgroundColor: redColor }}
          >
            <span
              className="text-white text-xs sm:text-sm font-bold tracking-widest uppercase block"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              PHYSIO'S HUB
            </span>
          </div>
        </div>
      </div>
    );
  }

  // Default: Horizontal brand presentation for Navigation & Headers
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none group cursor-pointer ${className}`}>
      <div className="w-10 h-10 sm:w-11 sm:h-11 shrink-0">
        {LogoMark}
      </div>
      <div className="flex flex-col justify-center">
        <span
          className="font-extrabold tracking-[0.12em] text-base sm:text-lg uppercase leading-none"
          style={{ color: darkColor, fontFamily: "'Outfit', sans-serif" }}
        >
          ADVANCE
        </span>
        <div
          className="mt-1 px-1.5 py-0.5 rounded-[2px] inline-block self-start shadow-xs"
          style={{ backgroundColor: redColor }}
        >
          <span
            className="text-white text-[10px] sm:text-[11px] font-bold tracking-wider uppercase leading-none block"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            PHYSIO'S HUB
          </span>
        </div>
      </div>
    </div>
  );
};
