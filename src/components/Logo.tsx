import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  variant = 'light',
  size = 'md'
}) => {
  // Height configurations
  const heightClass = size === 'sm' ? 'h-6 sm:h-7' : size === 'lg' ? 'h-10 sm:h-12' : 'h-8 sm:h-9';
  
  // If dark variant is selected (for light background), we apply brightness-0 or dark styling
  const filterStyle = variant === 'dark' ? 'brightness-0 contrast-200' : '';

  return (
    <div className={`flex items-center select-none ${className}`}>
      <img 
        src="/logo-ryr.png" 
        alt="R&R Inmobiliaria" 
        className={`${heightClass} w-auto object-contain transition-transform ${filterStyle}`}
      />
    </div>
  );
};
