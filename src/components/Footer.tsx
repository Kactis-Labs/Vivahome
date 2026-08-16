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
    <footer className="bg-[#111827] text-slate-300 border-t border-white/10 pt-16 sm:pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 mb-14">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="inline-block group">
              <Logo variant="light" size="md" />
            </Link>

            <p className="text-sm font-normal text-slate-300 leading-relaxed max-w-sm">
              <strong className="text-white">Gestión y asesoría profesional en Trujillo.</strong><br />
              <span className="text-[#EF4444] font-semibold">+10 años de experiencia</span> en la compra y venta de inmuebles residenciales y comerciales en El Golf, California, San Andrés y Huanchaco.
            </p>

            <div className="flex items-center space-x-3 text-white">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#DC2626] hover:text-white flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#DC2626] hover:text-white flex items-center justify-center transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#DC2626] hover:text-white flex items-center justify-center transition-colors" aria-label="Pinterest">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0a12 12 0 0 0-4.37 23.17c-.07-.98-.13-2.48.03-3.55.14-.98.93-3.97.93-3.97s-.24-.48-.24-1.18c0-1.11.64-1.94 1.44-1.94.68 0 1.01.51 1.01 1.12 0 .68-.44 1.71-.66 2.66-.19.79.4 1.44 1.18 1.44 1.41 0 2.5-1.49 2.5-3.64 0-1.9-1.37-3.23-3.32-3.23-2.26 0-3.59 1.7-3.59 3.45 0 .68.26 1.42.59 1.81.06.08.07.15.05.23-.06.26-.2.82-.23.94-.04.16-.13.2-.3.12-1.11-.52-1.81-2.14-1.81-3.45 0-2.8 2.04-5.38 5.88-5.38 3.09 0 5.49 2.2 5.49 5.14 0 3.07-1.93 5.53-4.62 5.53-.9 0-1.75-.47-2.04-1.02l-.56 2.12c-.2.78-.75 1.75-1.12 2.35A12 12 0 1 0 12 0z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">
              Explora
            </h4>
            <ul className="space-y-3 text-sm font-normal">
              <li><a href="/#deals" className="hover:text-[#EF4444] transition-colors">Inmuebles en Trujillo</a></li>
              <li><Link to="/nosotros" className="hover:text-[#EF4444] transition-colors">Sobre Inmobiliaria JML</Link></li>
              <li><Link to="/servicios" className="hover:text-[#EF4444] transition-colors">Compra y Venta</Link></li>
              <li><Link to="/#agents" className="hover:text-[#EF4444] transition-colors">Nuestros Asesores</Link></li>
              <li><Link to="/contacto" className="hover:text-[#EF4444] transition-colors">Contacto Directo</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">
              Contacto & Oficina
            </h4>
            <ul className="space-y-3.5 text-sm font-normal">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                <span>Urb. El Golf / California, Trujillo, La Libertad - Perú</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#EF4444] shrink-0" />
                <span>+51 (044) 234-567 / +51 987 654 321</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#EF4444] shrink-0" />
                <span>contacto@inmobiliariajml.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">
              Boletín Inmobiliario
            </h4>
            <p className="text-xs font-normal text-slate-300 mb-4">
              Recibe oportunidades exclusivas y nuevas propiedades en Trujillo directamente en tu correo.
            </p>
            {subscribed ? (
              <div className="p-3 bg-[#1F2937] border border-[#DC2626]/50 rounded-2xl text-[#EF4444] text-xs font-semibold text-center">
                ✓ ¡Gracias por suscribirte a Inmobiliaria JML!
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
                    className="w-full bg-white/10 border border-white/15 rounded-full py-2.5 pl-4 pr-10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#DC2626]"
                  />
                  <button 
                    type="submit"
                    className="absolute right-1.5 top-1.5 w-7 h-7 rounded-full bg-[#DC2626] text-white flex items-center justify-center hover:bg-[#B91C1C] transition-colors"
                    aria-label="Suscribirse"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright Bar with web link */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-normal text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Inmobiliaria JML S.A.C. Todos los derechos reservados. • <span className="text-slate-300">www.inmobiliariajml.com</span></p>
          
          <div className="text-xs text-slate-300">
            Desarrollado por{' '}
            <a 
              href="https://kactilabs.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#EF4444] font-semibold hover:underline transition-colors"
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
