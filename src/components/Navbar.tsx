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

  // Close dropdown on click outside
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
    { title: 'Equipo de Campo', href: '/equipo' },
    { title: 'Blog & Novedades', href: '/#blog' },
    { title: 'Contacto & Visitas', href: '/contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0A2540]/95 backdrop-blur-md py-3.5 border-b border-emerald-500/20 shadow-2xl' 
        : 'bg-gradient-to-b from-[#0A2540]/90 via-[#0A2540]/50 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo ECO HOGAR Inmobiliaria */}
          <Link to="/" className="flex items-center group py-1">
            <Logo variant="light" size="md" />
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
                className="flex items-center gap-1.5 text-xs font-light text-zinc-100 hover:text-emerald-400 transition-colors tracking-wide py-1"
                aria-expanded={dropdownOpen}
              >
                <span>Páginas</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-emerald-400' : ''}`} />
              </button>

              {/* 2-Column Dropdown */}
              {dropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-[#0A2540]/98 backdrop-blur-xl border border-emerald-500/30 rounded-2xl shadow-2xl p-5 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Column 1 */}
                  <div className="space-y-2.5">
                    {pageLinksCol1.map((link) => (
                      <Link
                        key={link.title}
                        to={link.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block text-xs font-light text-zinc-200 hover:text-emerald-400 transition-colors py-1 hover:translate-x-1 duration-150"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>

                  {/* Column 2 */}
                  <div className="space-y-2.5 border-l border-white/10 pl-4">
                    {pageLinksCol2.map((link) => (
                      <Link
                        key={link.title}
                        to={link.href}
                        onClick={() => setDropdownOpen(false)}
                        className="block text-xs font-light text-zinc-200 hover:text-emerald-400 transition-colors py-1 hover:translate-x-1 duration-150"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/nosotros" className="text-xs font-light text-zinc-100 hover:text-emerald-400 transition-colors tracking-wide">
              Nosotros
            </Link>

            <Link to="/servicios" className="text-xs font-light text-zinc-100 hover:text-emerald-400 transition-colors tracking-wide">
              Servicios
            </Link>

            <Link to="/equipo" className="text-xs font-light text-zinc-100 hover:text-emerald-400 transition-colors tracking-wide">
              Equipo
            </Link>

            <a href="#deals" className="text-xs font-light text-zinc-100 hover:text-emerald-400 transition-colors tracking-wide">
              Lotes en Venta
            </a>

            <a href="#blog" className="text-xs font-light text-zinc-100 hover:text-emerald-400 transition-colors tracking-wide">
              Blog
            </a>

            <Link to="/contacto" className="text-xs font-light text-zinc-100 hover:text-emerald-400 transition-colors tracking-wide">
              Contacto
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+51987654321" 
              className="text-xs font-light text-zinc-200 hover:text-emerald-400 transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
              <span>+51 987 654 321</span>
            </a>

            <Link 
              to="/contacto"
              className="bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-xs px-5 py-2.5 rounded-full transition-all shadow-lg shadow-emerald-950/40 hover:scale-105"
            >
              Agenda Visita Gratis
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-emerald-400 p-2 focus:outline-none"
              aria-label="Abrir menú de navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A2540] border-b border-emerald-500/20 px-4 pt-4 pb-6 space-y-3 shadow-2xl">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-light text-zinc-100 hover:text-emerald-400 py-1.5 border-b border-white/5"
          >
            Inicio
          </Link>
          <Link 
            to="/nosotros" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-light text-zinc-100 hover:text-emerald-400 py-1.5 border-b border-white/5"
          >
            Nosotros
          </Link>
          <Link 
            to="/servicios" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-light text-zinc-100 hover:text-emerald-400 py-1.5 border-b border-white/5"
          >
            Servicios
          </Link>
          <Link 
            to="/equipo" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-light text-zinc-100 hover:text-emerald-400 py-1.5 border-b border-white/5"
          >
            Equipo de Campo
          </Link>
          <a 
            href="#deals" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-light text-zinc-100 hover:text-emerald-400 py-1.5 border-b border-white/5"
          >
            Lotes en Venta
          </a>
          <a 
            href="#blog" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-light text-zinc-100 hover:text-emerald-400 py-1.5 border-b border-white/5"
          >
            Blog
          </a>
          <Link 
            to="/contacto" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-light text-zinc-100 hover:text-emerald-400 py-1.5"
          >
            Contacto
          </Link>
          <div className="pt-2">
            <Link 
              to="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-xs py-3 rounded-full transition-all shadow-md"
            >
              Agendar Visita Guiada Gratis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
