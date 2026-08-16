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
  const mainColor = isLight ? '#FFFFFF' : '#111111';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg 
        viewBox="0 0 260 140" 
        className={`${sizeClasses[size]} w-auto transition-transform duration-300 group-hover:scale-105`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Roof Caret / Chevron above the letter 'k' */}
        <path 
          d="M62 26 L96 4 L130 26 L122 34 L96 15 L70 34 Z" 
          fill={mainColor} 
        />

        {/* Serif 'k' */}
        {/* Vertical Stem */}
        <path 
          d="M72 38 L92 38 L92 108 L72 108 L72 104 L78 104 L78 44 L68 49 L66 42 Z" 
          fill={mainColor} 
        />
        {/* 'k' Upper Arm */}
        <path 
          d="M92 78 L116 54 L138 54 L110 80 Z" 
          fill={mainColor} 
        />
        {/* 'k' Lower Leg */}
        <path 
          d="M102 74 L132 108 L146 108 L114 71 Z" 
          fill={mainColor} 
        />
        {/* Left base serif on k */}
        <path 
          d="M68 104 L98 104 L98 108 L68 108 Z" 
          fill={mainColor} 
        />

        {/* Serif 'c' with elegant bulb terminal */}
        <path 
          d="M198 62 C196 55 190 49 178 49 C160 49 146 63 146 80 C146 97 160 110 180 110 C194 110 202 102 205 95 L196 90 C193 95 188 101 179 101 C167 101 157 91 157 80 C157 68 167 58 178 58 C186 58 191 63 192 68 L198 62 Z" 
          fill={mainColor} 
        />
        {/* Top teardrop ball terminal on 'c' */}
        <circle 
          cx="195" 
          cy="58" 
          r="6.5" 
          fill={mainColor} 
        />

        {/* Period / Dot '.' */}
        <circle 
          cx="214" 
          cy="104" 
          r="6" 
          fill={mainColor} 
        />

        {/* Subtitle INMOBILIARIA with wide tracking */}
        <text 
          x="130" 
          y="132" 
          textAnchor="middle" 
          fill={mainColor} 
          fontSize="13.5" 
          fontWeight="600" 
          letterSpacing="7.5"
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        >
          INMOBILIARIA
        </text>
      </svg>
    </div>
  );
};
