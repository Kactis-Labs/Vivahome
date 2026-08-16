import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container: Navy with Gold Accents */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-[#1D4263] p-8 sm:p-14 lg:p-18 text-white shadow-2xl"
        >
          {/* Subtle background image */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop" 
              alt="Villa Club Malabrigo" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              PREVENTA DISPONIBLE • 0% INTERESES
            </span>

            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white leading-[1.12]">
              Tu Casa de Campo y Playa en Puerto Malabrigo te Espera
            </h2>

            <p className="text-sm sm:text-base font-light text-zinc-200 leading-relaxed max-w-2xl">
              Asegura hoy tu lote de <strong>252m², 300m² o 500m²</strong> en Villa Club Malabrigo con plano de arquitectura estilo americano gratis y financiamiento directo sin intereses.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a 
                href="https://wa.me/51987654321?text=Hola%20Golden%20Inmobiliaria,%20quiero%20separar%20mi%20lote%20en%20preventa%20en%20Villa%20Club%20Malabrigo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E5A020] hover:bg-[#D97706] text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-full transition-all shadow-lg flex items-center gap-2 hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span>Separar Lote en Preventa por WhatsApp</span>
              </a>

              <Link 
                to="/contacto"
                className="bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-6 py-3.5 rounded-full transition-colors flex items-center gap-2 border border-white/15"
              >
                <span>Agendar Visita Guiada</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
