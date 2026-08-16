import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'light', 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12',
    lg: 'h-14 sm:h-16',
  };

  const isLight = variant === 'light';
  const mainColor = isLight ? '#FFFFFF' : '#111827';
  const frameColor = isLight ? '#84CC16' : '#65A30D';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg 
        viewBox="0 0 280 110" 
        className={`${sizeClasses[size]} w-auto transition-transform duration-300 group-hover:scale-105`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="gysGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A3E635" />
            <stop offset="100%" stopColor="#65A30D" />
          </linearGradient>
        </defs>

        {/* Modern Framed Plaque / Badge */}
        <rect 
          x="30" 
          y="10" 
          width="220" 
          height="62" 
          rx="14" 
          stroke={frameColor} 
          strokeWidth="2.5" 
          fill={isLight ? 'rgba(132, 204, 22, 0.08)' : 'rgba(101, 163, 13, 0.06)'} 
        />
        
        {/* Inner subtle frame line */}
        <rect 
          x="34" 
          y="14" 
          width="212" 
          height="54" 
          rx="10" 
          stroke={isLight ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.1)'} 
          strokeWidth="1" 
        />

        {/* Letter G */}
        <text 
          x="82" 
          y="56" 
          textAnchor="middle" 
          fill={mainColor} 
          fontSize="42" 
          fontWeight="900" 
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          letterSpacing="-1"
        >
          G
        </text>

        {/* Ampersand & in Accent Gradient */}
        <text 
          x="140" 
          y="54" 
          textAnchor="middle" 
          fill="url(#gysGrad)" 
          fontSize="36" 
          fontWeight="800" 
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        >
          &
        </text>

        {/* Letter S */}
        <text 
          x="198" 
          y="56" 
          textAnchor="middle" 
          fill={mainColor} 
          fontSize="42" 
          fontWeight="900" 
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          letterSpacing="-1"
        >
          S
        </text>

        {/* Subtitle SERVICIOS INMOBILIARIOS */}
        <text 
          x="140" 
          y="96" 
          textAnchor="middle" 
          fill={mainColor} 
          fontSize="11.5" 
          fontWeight="700" 
          letterSpacing="4"
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        >
          SERVICIOS INMOBILIARIOS
        </text>
      </svg>
    </div>
  );
};
