import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Architectural Panoramic Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#181614] min-h-[340px] sm:min-h-[460px] flex items-center justify-center text-center p-6 sm:p-16"
        >
          {/* Background Image with Contrast Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
              alt="Arquitectura Residencial - R&R Inmobiliaria" 
              className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-[#181614]/60 to-black/70" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <span className="text-xs font-bold text-[#D4B996] uppercase tracking-wider block mb-3">
              ELEVATED LIFESTYLE & PROYECTOS SIGNATURE
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14] mb-4 sm:mb-6">
              Vivir Bien Empieza Aquí
            </h2>

            <p className="text-slate-200 text-xs sm:text-base lg:text-lg font-normal leading-relaxed mb-6 sm:mb-10 max-w-xl mx-auto">
              Descubre proyectos concebidos para trascender. Te acompañamos en cada etapa de tu adquisición con total respaldo y transparencia en <strong className="text-white font-semibold">R&R Inmobiliaria</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a 
                href="https://wa.me/51987654321?text=Hola,%20deseo%20asesoria%20para%20los%20proyectos%20SIENNA%20y%20ORIGEN%20con%20R%26R%20Inmobiliaria"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C8A97E] hover:bg-[#B89368] text-[#181614] font-semibold text-xs sm:text-sm px-6 sm:px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-[#C8A97E]/30 hover:scale-102 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span>Hablar por WhatsApp</span>
              </a>

              <a 
                href="/#deals"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 hover:border-[#D4B996]/50 font-semibold text-xs sm:text-sm px-6 sm:px-8 py-3.5 rounded-full transition-all flex items-center gap-2"
              >
                <span>Ver Proyectos</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4B996]" />
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
