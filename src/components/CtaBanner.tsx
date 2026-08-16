import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white text-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-[#0A2540] py-16 sm:py-20 px-6 sm:px-12 text-center shadow-2xl border border-emerald-500/20"
        >
          {/* Background overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/banner-eco-hogar.png" 
              alt="ECO HOGAR Inmobiliaria - Tu Lote Cerca a la Playa" 
              className="w-full h-full object-cover filter brightness-[0.3] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/95 via-[#0A2540]/80 to-[#0A2540]/95" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-3 sm:mb-4">
              TU OPORTUNIDAD DE INVERTIR ES HOY
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-medium tracking-tight text-white leading-[1.14] mb-4 sm:mb-6">
              Tu Lote Cerca a la Playa desde S/ 14,900 en Puerto Malabrigo
            </h2>

            <p className="text-xs sm:text-base font-light text-zinc-200 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
              Cumple el sueño del lote propio y disfruta de la tranquilidad de la naturaleza. Financiamiento directo al 100% solo con tu DNI y tours gratuitos todos los fines de semana.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/51987654321?text=Hola,%20quisiera%20reservar%20mi%20cupo%20gratuito%20en%20el%20bus%20de%20visita%20a%20los%20lotes%20de%20Puerto%20Malabrigo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-full transition-all shadow-lg hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span>Reservar Cupo de Visita Gratis</span>
              </a>

              <Link 
                to="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-8 py-3.5 rounded-full border border-white/20 transition-all backdrop-blur-md"
              >
                <span>Solicitar Asesoría por Teléfono</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </Link>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
