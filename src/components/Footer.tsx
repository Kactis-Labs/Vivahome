import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
  Clock
} from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1D4263] text-white pt-16 sm:pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block py-1">
              <Logo variant="light" size="md" />
            </Link>

            <p className="text-xs sm:text-sm font-light text-zinc-300 leading-relaxed">
              <strong>Golden Inmobiliaria</strong> desarrolla <strong>Villa Club Malabrigo</strong>, el primer y único proyecto con diseño urbanístico de Estilo Americano en Puerto Malabrigo. Terrenos de 252m², 300m² y 500m² con planos gratis y financiamiento sin intereses.
            </p>

            {/* Direct WhatsApp CTA */}
            <div className="pt-2">
              <a
                href="https://wa.me/51987654321?text=Hola%20Golden%20Inmobiliaria,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Villa%20Club%20Malabrigo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#E5A020] hover:bg-[#D97706] text-white text-xs font-semibold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span>Atención Rápida por WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-zinc-300">
              <li>
                <Link to="/" className="hover:text-amber-400 transition-colors">Inicio</Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-amber-400 transition-colors">Nosotros</Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-amber-400 transition-colors">Servicios</Link>
              </li>
              <li>
                <Link to="/equipo" className="hover:text-amber-400 transition-colors">Equipo Comercial</Link>
              </li>
              <li>
                <a href="#deals" className="hover:text-amber-400 transition-colors">Lotes Villa Club</a>
              </li>
              <li>
                <a href="#blog" className="hover:text-amber-400 transition-colors">Blog & Noticias</a>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-amber-400 transition-colors">Contacto & Preventa</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Metrajes & Proyecto (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Villa Club Malabrigo
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-zinc-300">
              <li>
                <Link to="/propiedades/lote-villa-club-252" className="hover:text-amber-400 transition-colors">
                  • Lotes de 252 m² en Preventa
                </Link>
              </li>
              <li>
                <Link to="/propiedades/lote-villa-club-300" className="hover:text-amber-400 transition-colors">
                  • Lotes de 300 m² frente a Club House
                </Link>
              </li>
              <li>
                <Link to="/propiedades/lote-villa-club-500" className="hover:text-amber-400 transition-colors">
                  • Macrolotes Quinta de 500 m²
                </Link>
              </li>
              <li>
                <Link to="/servicios/diseno-planos-arquitectonicos" className="hover:text-amber-400 transition-colors">
                  • Plano Americano Gratis
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-amber-400 transition-colors">
                  • Financiamiento 100% Sin Intereses
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Atención & Ventas
            </h4>
            
            <div className="space-y-3 text-xs font-light text-zinc-300">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Villa Club Malabrigo, Puerto Malabrigo • La Libertad, Perú</span>
              </p>

              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+51987654321" className="hover:text-amber-400 transition-colors">
                  +51 987 654 321 / +51 981 234 567
                </a>
              </p>

              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:ventas@goldeninmobiliaria.pe" className="hover:text-amber-400 transition-colors">
                  ventas@goldeninmobiliaria.pe
                </a>
              </p>

              <p className="flex items-center gap-2 pt-1 text-[11px] text-zinc-400">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Lunes a Domingo: 8:00 am - 7:00 pm</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-light text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} Golden Inmobiliaria. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span>Puerto Malabrigo • La Libertad</span>
            <span>RUC: 20608945123</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
