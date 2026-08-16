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
  const mainTextColor = isLight ? '#FFFFFF' : '#0E4F7E';
  const subTextColor = isLight ? '#93C5FD' : '#0E4F7E';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg 
        viewBox="0 0 280 90" 
        className={`${sizeClasses[size]} w-auto transition-transform duration-300 group-hover:scale-105`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Leaf / House Emblem */}
        <g transform="translate(10, 8)">
          {/* Green Leaf-House Silhouette */}
          <path 
            d="M 36 2 C 22 18 10 32 10 50 C 10 68 10 74 10 74 L 62 74 C 62 74 62 68 62 50 C 62 32 50 18 36 2 Z" 
            fill="#1E8E5A" 
          />
          
          {/* Inner Tree Stem & Branches */}
          {/* Main vertical trunk and base */}
          <path 
            d="M 36 10 L 36 68 L 62 68" 
            stroke="#FFFFFF" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          
          {/* Upper left branch */}
          <path 
            d="M 36 34 L 22 24" 
            stroke="#FFFFFF" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
          />

          {/* Lower right branch */}
          <path 
            d="M 36 50 L 50 42" 
            stroke="#FFFFFF" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
          />
        </g>

        {/* Text: ECO HOGAR */}
        <text 
          x="88" 
          y="46" 
          fill={mainTextColor} 
          fontSize="31" 
          fontWeight="900" 
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          letterSpacing="1"
        >
          ECO HOGAR
        </text>

        {/* Subtitle: inmobiliaria */}
        <text 
          x="88" 
          y="72" 
          fill={subTextColor} 
          fontSize="19" 
          fontWeight="400" 
          letterSpacing="4.5"
          fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        >
          inmobiliaria
        </text>
      </svg>
    </div>
  );
};
