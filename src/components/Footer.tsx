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
    <footer className="bg-[#0A0A0A] text-zinc-400 border-t border-white/10 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 mb-14">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block" aria-label="KC Inmobiliaria Home">
              <Logo variant="light" size="lg" />
            </Link>

            <p className="text-sm font-light text-zinc-400 leading-relaxed max-w-sm">
              Especialistas en la venta de departamentos de estreno, flats y penthouses en las zonas residenciales más exclusivas de Lima. Asesoría integral y seguridad jurídica garantizada.
            </p>

            <div className="flex items-center space-x-3 text-white">
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white hover:text-black flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white hover:text-black flex items-center justify-center transition-colors" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white hover:text-black flex items-center justify-center transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-5">
              Navegación
            </h4>
            <ul className="space-y-3 text-sm font-light">
              <li><Link to="/#deals" className="hover:text-white transition-colors">Departamentos</Link></li>
              <li><Link to="/nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/equipo" className="hover:text-white transition-colors">Nuestro Equipo</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-5">
              Contacto Directo
            </h4>
            <ul className="space-y-3.5 text-sm font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-zinc-300 shrink-0 mt-0.5" />
                <span>Av. El Polo 670, Santiago de Surco, Lima - Perú</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-zinc-300 shrink-0" />
                <span>+51 987 654 321 / +51 (01) 456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-zinc-300 shrink-0" />
                <span>contacto@kcinmobiliaria.pe</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-5">
              Boletín Inmobiliario
            </h4>
            <p className="text-xs font-light text-zinc-400 mb-4">
              Recibe las últimas opciones de departamentos de estreno y preventa antes de su lanzamiento.
            </p>
            {subscribed ? (
              <div className="p-3 bg-zinc-900 border border-zinc-700 rounded-2xl text-white text-xs font-medium text-center">
                ✓ ¡Gracias por suscribirte a KC Inmobiliaria!
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
                    className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-4 pr-10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white"
                  />
                  <button 
                    type="submit"
                    className="absolute right-1.5 top-1.5 w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors"
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
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-light text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} KC Inmobiliaria. Todos los derechos reservados.</p>
          
          {/* Desarrollado por Kacti Labs */}
          <div className="text-xs text-zinc-400">
            Desarrollado por{' '}
            <a 
              href="https://kactilabs.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white font-medium hover:underline transition-colors"
            >
              Kacti Labs
            </a>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Términos</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Aviso Legal</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
