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
  const goldColor = '#E5A020';
  const navyColor = isLight ? '#FFFFFF' : '#1D4263';
  const subTextColor = isLight ? '#E2E8F0' : '#1D4263';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <svg 
        viewBox="0 0 340 120" 
        className={`${sizeClasses[size]} w-auto transition-transform duration-300 group-hover:scale-105`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Roof Icon over "G" & "o" */}
        {/* Left Gold Slope */}
        <polygon 
          points="20,52 64,24 74,38 42,58" 
          fill={goldColor} 
        />
        {/* Right Navy Slope */}
        <polygon 
          points="68,22 108,52 92,62 60,38" 
          fill={isLight ? '#F59E0B' : '#1D4263'} 
        />

        {/* Text: "Gold" */}
        <text 
          x="35" 
          y="84" 
          fill={goldColor} 
          fontSize="56" 
          fontWeight="800" 
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          letterSpacing="-1"
        >
          Gold
        </text>

        {/* Text: "en" */}
        <text 
          x="166" 
          y="84" 
          fill={navyColor} 
          fontSize="56" 
          fontWeight="800" 
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          letterSpacing="-1"
        >
          en
        </text>

        {/* Subtitle: "I N M O B I L I A R I A" */}
        <text 
          x="36" 
          y="108" 
          fill={subTextColor} 
          fontSize="14.5" 
          fontWeight="600" 
          letterSpacing="9"
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        >
          INMOBILIARIA
        </text>
      </svg>
    </div>
  );
};
