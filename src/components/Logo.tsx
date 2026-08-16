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
  const mainColor = isLight ? '#FFFFFF' : '#DC2626';
  const subtextColor = isLight ? '#FFFFFF' : '#111827';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg 
        viewBox="0 0 240 120" 
        className={`${sizeClasses[size]} w-auto transition-transform duration-300 group-hover:scale-102`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Roof Graphic over M and L */}
        <path 
          d="M106 38 L142 10 L188 48 L170 48 L142 24 L114 46 Z" 
          fill={mainColor} 
        />
        <path 
          d="M178 38 L212 68 L188 68 L168 50 Z" 
          fill={mainColor} 
        />

        {/* Letter J */}
        <path 
          d="M36 38 H64 V78 C64 90 54 96 40 96 C26 96 18 90 18 80 H36 C36 83 38 84.5 41 84.5 C44 84.5 46 83 46 78 V38 H36 Z" 
          fill={mainColor} 
        />

        {/* Letter M */}
        <path 
          d="M72 38 H92 L112 70 L132 38 H152 V94 H134 V58 L114 88 H110 L90 58 V94 H72 V38 Z" 
          fill={mainColor} 
        />

        {/* Letter L with chimney extension */}
        <path 
          d="M164 22 H182 V78 H210 V94 H164 V22 Z" 
          fill={mainColor} 
        />

        {/* Subtitle INMOBILIARIA */}
        <text 
          x="120" 
          y="114" 
          textAnchor="middle" 
          fill={subtextColor} 
          fontSize="14.5" 
          fontWeight="900" 
          letterSpacing="4.5"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          INMOBILIARIA
        </text>
      </svg>
    </div>
  );
};
