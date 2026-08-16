import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#F8FAFC] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Panoramic Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#111827] min-h-[340px] sm:min-h-[460px] flex items-center justify-center text-center p-6 sm:p-16"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
              alt="Propiedades en Trujillo - Inmobiliaria JML" 
              className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-black/75" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <span className="text-xs font-bold text-[#EF4444] uppercase tracking-wider block mb-3">
              GESTIÓN & ASESORÍA PROFESIONAL EN TRUJILLO
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14] mb-4 sm:mb-6">
              Vende o Compra Tu Inmueble con Total Seguridad
            </h2>

            <p className="text-slate-200 text-xs sm:text-base lg:text-lg font-normal leading-relaxed mb-6 sm:mb-10 max-w-xl mx-auto">
              Te acompañamos en todo el proceso de valoración, estudio de títulos y firma notarial en <strong className="text-white font-semibold">Inmobiliaria JML</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a 
                href="https://wa.me/51987654321?text=Hola,%20deseo%20asesoria%20inmobiliaria%20con%20Inmobiliaria%20JML%20en%20Trujillo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#DC2626] hover:bg-[#B91C1C] text-white font-bold text-xs sm:text-sm px-6 sm:px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-[#DC2626]/30 hover:scale-102 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span>Hablar por WhatsApp</span>
              </a>

              <a 
                href="/#deals"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 hover:border-[#DC2626]/50 font-bold text-xs sm:text-sm px-6 sm:px-8 py-3.5 rounded-full transition-all flex items-center gap-2"
              >
                <span>Ver Portafolio</span>
                <ArrowUpRight className="w-4 h-4 text-[#EF4444]" />
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
