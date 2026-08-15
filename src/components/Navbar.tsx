import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  PhoneCall, 
  Menu, 
  X, 
  ChevronDown 
} from 'lucide-react';

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
    isExternal?: boolean;
  }

  const pageLinksCol1: PageLink[] = [
    { title: 'Homepage', href: '/' },
    { title: 'Nosotros', href: '/nosotros' },
    { title: 'Servicios', href: '/servicios' },
  ];

  const pageLinksCol2: PageLink[] = [
    { title: 'Equipo', href: '/equipo' },
    { title: 'Blog', href: '/#blog' },
    { title: 'Contacto', href: '/contacto' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#0B1E17]/95 backdrop-blur-md py-3.5 border-b border-emerald-900/30 shadow-xl' 
        : 'bg-gradient-to-b from-[#0B1E17]/90 via-[#0B1E17]/50 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo VivaHome */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-900/30 group-hover:scale-105 transition-transform">
              <Building2 className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="text-2xl font-medium tracking-tight text-white">
              Viva<span className="text-emerald-400 font-semibold">Home</span>
            </span>
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-7">
            
            {/* Dropdown "Páginas" estilo Foreal */}
            <div 
              ref={dropdownRef}
              className="relative py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors cursor-pointer ${
                  dropdownOpen ? 'text-emerald-400' : 'text-slate-300 hover:text-white'
                }`}
                aria-expanded={dropdownOpen}
              >
                <span>Páginas</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-emerald-400' : ''}`} />
              </button>

              {dropdownOpen && (
                <div 
                  className="absolute top-full left-0 pt-2 w-80 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="bg-[#0F241D] border border-emerald-900/40 rounded-2xl shadow-2xl p-6 transition-all duration-200">
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      {/* Columna 1 */}
                      <div className="space-y-3.5">
                        {pageLinksCol1.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.href}
                            onClick={() => setDropdownOpen(false)}
                            className="block text-sm font-medium text-slate-100 hover:text-emerald-400 transition-colors leading-tight"
                          >
                            {item.title}
                          </Link>
                        ))}
                      </div>

                      {/* Columna 2 */}
                      <div className="space-y-3.5">
                        {pageLinksCol2.map((item, idx) => (
                          item.isExternal ? (
                            <a
                              key={idx}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setDropdownOpen(false)}
                              className="block text-sm font-medium text-slate-100 hover:text-emerald-400 transition-colors leading-tight"
                            >
                              {item.title}
                            </a>
                          ) : (
                            <Link
                              key={idx}
                              to={item.href}
                              onClick={() => setDropdownOpen(false)}
                              className="block text-sm font-medium text-slate-100 hover:text-emerald-400 transition-colors leading-tight"
                            >
                              {item.title}
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <Link to="/nosotros" className="text-sm font-normal text-slate-300 hover:text-white transition-colors">
              Nosotros
            </Link>
            <Link to="/servicios" className="text-sm font-normal text-slate-300 hover:text-white transition-colors">
              Servicios
            </Link>
            <Link 
              to="/contacto"
              className="text-sm font-normal text-slate-300 hover:text-white transition-colors"
            >
              Contacto
            </Link>
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="https://wa.me/51987654321?text=Hola,%20quisiera%20agendar%20una%20visita%20a%20las%20propiedades%20de%20VivaHome" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-emerald-900/30 hover:scale-105"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Agendar Visita</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg cursor-pointer"
              aria-label="Menú de Navegación"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B1E17] border-b border-emerald-900/30 px-4 pt-3 pb-6 space-y-4">
          <div className="grid grid-cols-2 gap-3 pt-2">
            {[...pageLinksCol1, ...pageLinksCol2].map((item, idx) => (
              item.isExternal ? (
                <a 
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-200 hover:text-emerald-400 py-1.5"
                >
                  {item.title}
                </a>
              ) : (
                <Link 
                  key={idx}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-200 hover:text-emerald-400 py-1.5"
                >
                  {item.title}
                </Link>
              )
            ))}
          </div>

          <div className="pt-3 border-t border-emerald-900/30">
            <a 
              href="https://wa.me/51987654321?text=Hola,%20quisiera%20agendar%20una%20visita%20a%20las%20propiedades%20de%20VivaHome" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm px-6 py-3 rounded-full shadow-md"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Agendar Visita</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
