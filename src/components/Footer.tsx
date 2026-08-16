import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight 
} from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2540] text-white pt-16 sm:pt-20 pb-12 border-t border-emerald-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 sm:mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <Logo variant="light" size="md" />
            </Link>

            <p className="text-xs sm:text-sm font-light text-zinc-300 leading-relaxed max-w-sm">
              Cumple el sueño del lote propio cerca al mar o campo y disfruta de la tranquilidad de la naturaleza. Proyectos en Puerto Malabrigo y Ascope - La Libertad con financiamiento directo.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-white flex items-center justify-center text-zinc-300 transition-colors border border-white/10"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-white flex items-center justify-center text-zinc-300 transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-500 hover:text-white flex items-center justify-center text-zinc-300 transition-colors border border-white/10"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Servicios Inmobiliarios */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-emerald-400 uppercase">
              Servicios Inmobiliarios
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-zinc-300">
              <li>
                <Link to="/servicios/venta-lotes-playa-campo" className="hover:text-emerald-400 transition-colors block">
                  Venta de Lotes de Playa & Campo
                </Link>
              </li>
              <li>
                <Link to="/servicios/asesoria-legal-titulacion" className="hover:text-emerald-400 transition-colors block">
                  Seguridad Jurídica & Titulación
                </Link>
              </li>
              <li>
                <Link to="/servicios/habilitacion-urbana-sostenible" className="hover:text-emerald-400 transition-colors block">
                  Habilitación Ecológica & Áreas Verdes
                </Link>
              </li>
              <li>
                <Link to="/servicios/asesoria-construccion-casas" className="hover:text-emerald-400 transition-colors block">
                  Asesoría en Construcción de Casas
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Enlaces Rápidos */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-emerald-400 uppercase">
              Enlaces
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-zinc-300">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors block">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-emerald-400 transition-colors block">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-emerald-400 transition-colors block">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/equipo" className="hover:text-emerald-400 transition-colors block">
                  Equipo
                </Link>
              </li>
              <li>
                <a href="/#blog" className="hover:text-emerald-400 transition-colors block">
                  Blog
                </a>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-emerald-400 transition-colors block">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto Directo */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-emerald-400 uppercase">
              Atención & Visitas
            </h4>
            <div className="space-y-3 text-xs font-light text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Puerto Malabrigo, Ascope / Oficina Trujillo, La Libertad - Perú</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:+51987654321" className="hover:text-emerald-400 transition-colors">
                  +51 987 654 321 / +51 981 234 567
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:ventas@ecohogarinmobiliaria.pe" className="hover:text-emerald-400 transition-colors">
                  ventas@ecohogarinmobiliaria.pe
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Reservar Asiento en Bus de Visita</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-zinc-400">
          <p>© {new Date().getFullYear()} ECO HOGAR Inmobiliaria. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-6">
            <Link to="/nosotros" className="hover:text-emerald-400 transition-colors">Términos del Servicio</Link>
            <Link to="/contacto" className="hover:text-emerald-400 transition-colors">Política de Privacidad</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
