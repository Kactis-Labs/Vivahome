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
    sm: 'h-7 sm:h-8',
    md: 'h-9 sm:h-10',
    lg: 'h-12 sm:h-14',
  };

  const isLight = variant === 'light';
  const mainTextColor = isLight ? '#FFFFFF' : '#0C130E';
  const subTextColor = isLight ? '#D1D5DB' : '#4B5563';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <svg 
        viewBox="0 0 300 70" 
        className={`${sizeClasses[size]} w-auto transition-transform duration-300 group-hover:scale-105`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wordmarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A3E635" />
            <stop offset="100%" stopColor="#84CC16" />
          </linearGradient>
        </defs>

        {/* Wordmark: G & S */}
        {/* Letter G */}
        <text 
          x="12" 
          y="42" 
          fill={mainTextColor} 
          fontSize="44" 
          fontWeight="900" 
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          letterSpacing="-1.5"
        >
          G
        </text>

        {/* Ampersand & in Lime Accent */}
        <text 
          x="54" 
          y="40" 
          fill="url(#wordmarkGrad)" 
          fontSize="36" 
          fontWeight="800" 
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        >
          &
        </text>

        {/* Letter S */}
        <text 
          x="88" 
          y="42" 
          fill={mainTextColor} 
          fontSize="44" 
          fontWeight="900" 
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          letterSpacing="-1.5"
        >
          S
        </text>

        {/* Vertical Separator Line */}
        <line 
          x1="130" 
          y1="8" 
          x2="130" 
          y2="60" 
          stroke="#84CC16" 
          strokeWidth="2" 
          strokeLinecap="round" 
        />

        {/* Right Stacked Wordmark Texts */}
        <text 
          x="144" 
          y="28" 
          fill={mainTextColor} 
          fontSize="17" 
          fontWeight="800" 
          letterSpacing="3"
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        >
          SERVICIOS
        </text>

        <text 
          x="144" 
          y="48" 
          fill={subTextColor} 
          fontSize="13.5" 
          fontWeight="600" 
          letterSpacing="4"
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        >
          INMOBILIARIOS
        </text>
      </svg>
    </div>
  );
};
