import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  PhoneCall, 
  Menu, 
  X, 
  ChevronDown 
} from 'lucide-react';
import { Logo } from './Logo';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const leaveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = () => {
    if (leaveTimeoutRef.current) {
      clearTimeout(leaveTimeoutRef.current);
      leaveTimeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    leaveTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180);
  };

  interface PageLink {
    title: string;
    href: string;
  }

  const pageLinksCol1: PageLink[] = [
    { title: 'Inicio', href: '/' },
    { title: 'Nosotros', href: '/nosotros' },
    { title: 'Servicios', href: '/servicios' },
  ];

  const pageLinksCol2: PageLink[] = [
    { title: 'Equipo de Ventas', href: '/equipo' },
    { title: 'Blog & Novedades', href: '/#blog' },
    { title: 'Contacto & Preventa', href: '/contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md py-3.5 shadow-md border-b border-zinc-100' 
        : 'bg-white/70 backdrop-blur-md py-4 sm:py-5 border-b border-zinc-100/50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Golden Inmobiliaria */}
          <Link to="/" className="flex items-center group py-1">
            <Logo variant="dark" size="md" />
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-7">
            
            {/* Dropdown "Páginas" */}
            <div 
              ref={dropdownRef}
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 text-xs font-semibold text-zinc-800 hover:text-[#E5A020] transition-colors tracking-wide py-1"
                aria-expanded={dropdownOpen}
              >
                <span>Páginas</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#E5A020]' : ''}`} />
              </button>

              {/* 2-Column Dropdown */}
              {dropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl p-5 grid grid-cols-2 gap-4 border border-zinc-200 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="space-y-2.5">
                    {pageLinksCol1.map((link) => (
                      <Link
                        key={link.title}
                        to={link.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block text-xs font-medium text-zinc-700 hover:text-[#E5A020] transition-colors py-1 hover:translate-x-1 duration-150"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>

                  <div className="space-y-2.5 border-l border-zinc-100 pl-4">
                    {pageLinksCol2.map((link) => (
                      <Link
                        key={link.title}
                        to={link.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block text-xs font-medium text-zinc-700 hover:text-[#E5A020] transition-colors py-1 hover:translate-x-1 duration-150"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/nosotros" className="text-xs font-semibold text-zinc-800 hover:text-[#E5A020] transition-colors tracking-wide">
              Nosotros
            </Link>

            <Link to="/servicios" className="text-xs font-semibold text-zinc-800 hover:text-[#E5A020] transition-colors tracking-wide">
              Servicios
            </Link>

            <Link to="/equipo" className="text-xs font-semibold text-zinc-800 hover:text-[#E5A020] transition-colors tracking-wide">
              Equipo
            </Link>

            <a href="#deals" className="text-xs font-semibold text-zinc-800 hover:text-[#E5A020] transition-colors tracking-wide">
              Lotes Villa Club
            </a>

            <a href="#blog" className="text-xs font-semibold text-zinc-800 hover:text-[#E5A020] transition-colors tracking-wide">
              Blog
            </a>

            <Link to="/contacto" className="text-xs font-semibold text-zinc-800 hover:text-[#E5A020] transition-colors tracking-wide">
              Contacto
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+51987654321" 
              className="text-xs font-medium text-zinc-700 hover:text-[#E5A020] transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#E5A020]" />
              <span>+51 987 654 321</span>
            </a>

            <Link 
              to="/contacto"
              className="bg-[#E5A020] hover:bg-[#D97706] text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-all shadow-md hover:scale-105"
            >
              Cotizar en Preventa
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-zinc-800 hover:text-[#E5A020] p-2 focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pt-4 pb-6 space-y-3 shadow-2xl border-b border-zinc-200">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-800 hover:text-[#E5A020] py-1.5 border-b border-zinc-100"
          >
            Inicio
          </Link>
          <Link 
            to="/nosotros" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-800 hover:text-[#E5A020] py-1.5 border-b border-zinc-100"
          >
            Nosotros
          </Link>
          <Link 
            to="/servicios" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-800 hover:text-[#E5A020] py-1.5 border-b border-zinc-100"
          >
            Servicios
          </Link>
          <Link 
            to="/equipo" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-800 hover:text-[#E5A020] py-1.5 border-b border-zinc-100"
          >
            Equipo de Ventas
          </Link>
          <a 
            href="#deals" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-800 hover:text-[#E5A020] py-1.5 border-b border-zinc-100"
          >
            Lotes Villa Club
          </a>
          <a 
            href="#blog" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-800 hover:text-[#E5A020] py-1.5 border-b border-zinc-100"
          >
            Blog
          </a>
          <Link 
            to="/contacto" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-800 hover:text-[#E5A020] py-1.5"
          >
            Contacto
          </Link>
          <div className="pt-2">
            <Link 
              to="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full bg-[#E5A020] hover:bg-[#D97706] text-white font-semibold text-xs py-3 rounded-full transition-all shadow-md"
            >
              Cotizar en Preventa
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
