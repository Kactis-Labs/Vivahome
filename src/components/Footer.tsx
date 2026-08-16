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
    <footer className="bg-[#0C130E] text-white pt-16 sm:pt-20 pb-12 border-t border-lime-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 sm:mb-16">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <Logo variant="light" size="md" />
            </Link>

            <p className="text-xs sm:text-sm font-light text-zinc-300 leading-relaxed max-w-sm">
              Especialistas en construir valor para cada decisión inmobiliaria. Transformamos experiencia, estrategia y conocimiento del mercado en resultados que generan patrimonio sólido.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-lime-500 hover:text-black flex items-center justify-center text-zinc-300 transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-lime-500 hover:text-black flex items-center justify-center text-zinc-300 transition-colors border border-white/10"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-lime-500 hover:text-black flex items-center justify-center text-zinc-300 transition-colors border border-white/10"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Servicios Inmobiliarios (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-lime-400 uppercase">
              Servicios Especializados
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-zinc-300">
              <li>
                <Link to="/servicios/manejo-inversiones-inmobiliarias" className="hover:text-lime-400 transition-colors block">
                  Manejo de Inversiones en Bienes Raíces
                </Link>
              </li>
              <li>
                <Link to="/servicios/asesoria-legal-saneamiento" className="hover:text-lime-400 transition-colors block">
                  Asesoría Legal & Saneamiento Registral
                </Link>
              </li>
              <li>
                <Link to="/servicios/asesoria-financiera-hipotecaria" className="hover:text-lime-400 transition-colors block">
                  Planificación Financiera Hipotecaria
                </Link>
              </li>
              <li>
                <Link to="/servicios/comercializacion-venta-estrategica" className="hover:text-lime-400 transition-colors block">
                  Comercialización & Venta Estratégica
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Enlaces Rápidos (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-lime-400 uppercase">
              Enlaces
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-zinc-300">
              <li>
                <Link to="/" className="hover:text-lime-400 transition-colors block">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="hover:text-lime-400 transition-colors block">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-lime-400 transition-colors block">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/equipo" className="hover:text-lime-400 transition-colors block">
                  Equipo
                </Link>
              </li>
              <li>
                <a href="/#blog" className="hover:text-lime-400 transition-colors block">
                  Blog
                </a>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-lime-400 transition-colors block">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto Directo (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold tracking-wider text-lime-400 uppercase">
              Sede Central
            </h4>
            <div className="space-y-3 text-xs font-light text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span>Av. Canaval y Moreyra 452, Torre Financiera, San Isidro, Lima - Perú</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-lime-400 shrink-0" />
                <a href="tel:+51987654321" className="hover:text-lime-400 transition-colors">
                  +51 987 654 321 / +51 (01) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-lime-400 shrink-0" />
                <a href="mailto:contacto@gysinmobiliarios.pe" className="hover:text-lime-400 transition-colors">
                  contacto@gysinmobiliarios.pe
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/contacto"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-lime-400 hover:text-lime-300 transition-colors"
              >
                <span>Solicitar Consulta Privada</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light text-zinc-400">
          <p>© {new Date().getFullYear()} GyS Servicios Inmobiliarios. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-6">
            <Link to="/nosotros" className="hover:text-lime-400 transition-colors">Términos de Servicio</Link>
            <Link to="/contacto" className="hover:text-lime-400 transition-colors">Política de Privacidad</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
