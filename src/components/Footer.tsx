import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#162842] text-slate-300 border-t border-white/10 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 mb-14">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block group">
              <Logo variant="light" size="md" />
            </Link>

            <p className="text-sm font-normal text-slate-300 leading-relaxed max-w-sm">
              <strong className="text-white">Empresa líder y pionera en Puerto Malabrigo.</strong><br />
              <span className="text-[#F5921E] font-semibold">+8 años de experiencia</span> en terrenos de campo y playa con Club House, 100% independizados y crédito directo.
            </p>

            <div className="flex items-center space-x-3 text-white">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F5921E] hover:text-white flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F5921E] hover:text-white flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#F5921E] hover:text-white flex items-center justify-center transition-colors" aria-label="TikTok">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01v8.83c0 1.93-.5 3.86-1.6 5.4-1.39 1.96-3.69 3.25-6.14 3.47-1.7.15-3.43-.2-4.96-1.03-2.12-1.16-3.67-3.17-4.2-5.54-.53-2.37-.08-4.9 1.25-6.88 1.49-2.22 3.95-3.6 6.64-3.64.44 0 .88.04 1.31.1v4.06c-.46-.14-.94-.2-1.42-.18-1.22.05-2.39.63-3.12 1.59-.73.96-.95 2.2-.6 3.37.35 1.17 1.27 2.08 2.45 2.42 1.18.34 2.47.1 3.44-.64.84-.64 1.35-1.63 1.39-2.69V.02h-.82z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">
              Explora
            </h4>
            <ul className="space-y-3 text-sm font-normal">
              <li><a href="/#deals" className="hover:text-[#F5921E] transition-colors">Residencial Nueva Asia</a></li>
              <li><Link to="/nosotros" className="hover:text-[#F5921E] transition-colors">Sobre Plus Inmobiliaria</Link></li>
              <li><Link to="/servicios" className="hover:text-[#F5921E] transition-colors">Crédito Directo</Link></li>
              <li><Link to="/#agents" className="hover:text-[#F5921E] transition-colors">Equipo Comercial</Link></li>
              <li><Link to="/contacto" className="hover:text-[#F5921E] transition-colors">Contacto & Visitas</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">
              Contacto & Ventas
            </h4>
            <ul className="space-y-3.5 text-sm font-normal">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F5921E] shrink-0 mt-0.5" />
                <span>Av. Costanera s/n, Puerto Malabrigo, La Libertad - Perú</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#F5921E] shrink-0" />
                <span>+51 987 654 321 / +51 944 123 456</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#F5921E] shrink-0" />
                <span>contacto@plusinmobiliaria.pe</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">
              Boletín de Lanzamientos
            </h4>
            <p className="text-xs font-normal text-slate-300 mb-4">
              Recibe promociones exclusivas y fechas de visitas guiadas a Puerto Malabrigo.
            </p>
            {subscribed ? (
              <div className="p-3 bg-[#1E3A5F] border border-[#F5921E]/50 rounded-2xl text-[#F5921E] text-xs font-semibold text-center">
                ✓ ¡Gracias por suscribirte a Plus Inmobiliaria!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresa tu correo"
                    required
                    className="w-full bg-white/10 border border-white/15 rounded-full py-2.5 pl-4 pr-10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#F5921E]"
                  />
                  <button 
                    type="submit"
                    className="absolute right-1.5 top-1.5 w-7 h-7 rounded-full bg-[#F5921E] text-white flex items-center justify-center hover:bg-[#E67E10] transition-colors"
                    aria-label="Suscribirse"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-normal text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Plus Inmobiliaria S.A.C. Todos los derechos reservados.</p>
          
          <div className="text-xs text-slate-300">
            Desarrollado por{' '}
            <a 
              href="https://kactilabs.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#F5921E] font-semibold hover:underline transition-colors"
            >
              Kacti Labs
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
