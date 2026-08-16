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
  const navyColor = isLight ? '#FFFFFF' : '#233D5B';
  const orangeColor = '#F5921E';
  const subtextColor = isLight ? '#E2E8F0' : '#233D5B';

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg 
        viewBox="0 0 240 105" 
        className={`${sizeClasses[size]} w-auto transition-transform duration-300 group-hover:scale-102`}
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Roof Graphic */}
        {/* Left Navy Roof with Chimney */}
        <path 
          d="M60 48 L122 8 L146 22 L110 46 L110 38 L98 38 L98 54 Z" 
          fill={navyColor} 
        />
        
        {/* Right Orange Roof Beam */}
        <path 
          d="M135 24 L190 60 L190 73 L162 54 L135 36 Z" 
          fill={orangeColor} 
        />

        {/* Wordmark PLUS */}
        {/* Letter P (Orange) */}
        <path 
          d="M20 70 H44 C58 70 66 76 66 86 C66 96 58 102 44 102 H30 L26 116 H10 L20 70 Z M33 80 L30 92 H43 C49 92 53 90 53 86 C53 82 49 80 43 80 H33 Z" 
          transform="matrix(1 0 -0.15 1 12 -12)"
          fill={orangeColor} 
        />

        {/* Letters LUS (Navy or White) */}
        {/* L */}
        <path 
          d="M72 70 H86 L80 94 H104 L78 104 H58 L72 70 Z" 
          transform="matrix(1 0 -0.15 1 16 -12)"
          fill={navyColor} 
        />
        
        {/* U */}
        <path 
          d="M106 70 H120 L115 90 C113.5 95 116 97 121 97 C126 97 128.5 95 130 90 L135 70 H149 L143 90 C140 102 131 106 118 106 C105 106 99 100 102 90 L106 70 Z" 
          transform="matrix(1 0 -0.15 1 20 -12)"
          fill={navyColor} 
        />

        {/* S */}
        <path 
          d="M152 82 C154 75 161 70 172 70 C182 70 187 75 186 82 L174 85 C174.5 82 172 80 169 80 C165 80 163 81.5 163 83.5 C163 85.5 165 86.5 170 88 L175 89.5 C185 92.5 186 98 184 104 C181.5 110 174 113 163 113 C151 113 146 107 148 100 L160 98 C159.5 101.5 162.5 103 166 103 C170 103 173 101.5 173 99 C173 97 171 96 166 94.5 L161 93 C152 90 150 86 152 82 Z" 
          transform="matrix(1 0 -0.15 1 24 -18)"
          fill={navyColor} 
        />

        {/* Subtitle INMOBILIARIA */}
        <text 
          x="120" 
          y="99" 
          textAnchor="middle" 
          fill={subtextColor} 
          fontSize="11" 
          fontWeight="800" 
          letterSpacing="4.5"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          INMOBILIARIA
        </text>
      </svg>
    </div>
  );
};
