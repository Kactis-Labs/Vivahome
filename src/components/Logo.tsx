import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'badge' | 'icon';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'light',
  size = 'md'
}) => {
  // Dimensions based on size
  const heightClass = size === 'sm' ? 'h-7' : size === 'lg' ? 'h-12' : 'h-9';

  // Primary text color: White for light variant (on dark bg), Dark Slate for dark variant (on light bg)
  const textColor = variant === 'dark' ? '#0F172A' : '#FFFFFF';
  const limeColor = '#A3D224'; // Megapolys brand lime accent
  const greenBrand = '#00873D'; // Megapolys emerald green

  if (variant === 'icon') {
    return (
      <svg 
        viewBox="0 0 120 120" 
        className={`${heightClass} aspect-square ${className}`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background rounded square with brand green */}
        <rect width="120" height="120" rx="28" fill={greenBrand} />
        {/* Stylized M + G with lime bar */}
        <path 
          d="M26 84V36L44 62L62 36V84H50V56L44 65L38 56V84H26Z" 
          fill="#FFFFFF" 
        />
        <path 
          d="M94 56V48H72V84H94V66H82V74H78V56H94Z" 
          fill="#FFFFFF" 
        />
        {/* Lime accent bar */}
        <rect x="80" y="62" width="16" height="6" rx="2" fill={limeColor} />
      </svg>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center justify-center p-3 rounded-2xl bg-[#00873D] shadow-lg shadow-[#00873D]/30 ${className}`}>
        <svg 
          viewBox="0 0 340 100" 
          className={heightClass}
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* MEGAPOLYS Main Typography */}
          <g fontWeight="900" fontFamily="Plus Jakarta Sans, Montserrat, -apple-system, sans-serif" fontSize="52" letterSpacing="0.5">
            {/* M */}
            <text x="10" y="58" fill="#FFFFFF">M</text>
            {/* E */}
            <text x="56" y="58" fill="#FFFFFF">E</text>
            {/* G Base */}
            <text x="90" y="58" fill="#FFFFFF">G</text>
            {/* Lime horizontal bar on G */}
            <rect x="110" y="41" width="16" height="7" rx="2" fill={limeColor} />
            {/* A */}
            <text x="135" y="58" fill="#FFFFFF">A</text>
            {/* P */}
            <text x="178" y="58" fill="#FFFFFF">P</text>
            {/* O */}
            <text x="216" y="58" fill="#FFFFFF">O</text>
            {/* L */}
            <text x="260" y="58" fill="#FFFFFF">L</text>
            {/* Y */}
            <text x="288" y="58" fill="#FFFFFF">Y</text>
            {/* S */}
            <text x="318" y="58" fill="#FFFFFF">S</text>
          </g>

          {/* INMOBILIARIA Subtitle */}
          <text 
            x="170" 
            y="88" 
            textAnchor="middle" 
            fill={limeColor} 
            fontFamily="Plus Jakarta Sans, Montserrat, sans-serif" 
            fontWeight="800" 
            fontSize="18" 
            letterSpacing="9"
          >
            INMOBILIARIA
          </text>
        </svg>
      </div>
    );
  }

  // Pure Wordmark logo (Light or Dark) - No square box on the left
  return (
    <div className={`flex flex-col select-none ${className}`}>
      <div className="flex items-center tracking-tight">
        <span 
          className="text-2xl sm:text-[28px] font-black tracking-[-0.02em] leading-none font-sans"
          style={{ color: textColor }}
        >
          ME
          <span className="relative inline-block">
            GA
            {/* Lime accent bar on the G */}
            <span 
              className="absolute top-[48%] left-[7.5px] w-2.5 h-[3.5px] rounded-sm -translate-y-1/2 pointer-events-none"
              style={{ backgroundColor: limeColor }}
            />
          </span>
          POLYS
        </span>
      </div>
      <span 
        className="text-[9px] sm:text-[10px] font-extrabold tracking-[0.42em] uppercase leading-tight mt-1"
        style={{ color: variant === 'dark' ? greenBrand : limeColor }}
      >
        INMOBILIARIA
      </span>
    </div>
  );
};
