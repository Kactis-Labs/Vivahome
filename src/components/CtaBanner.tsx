import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Architectural Panoramic Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#0A0A0A] min-h-[340px] sm:min-h-[460px] flex items-center justify-center text-center p-6 sm:p-16"
        >
          {/* Background Image with Dark Contrast Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
              alt="Edificio Residencial Moderno - KC Inmobiliaria" 
              className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/75" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-widest block mb-3 sm:mb-4">
              TU PRÓXIMO DEPARTAMENTO COMIENZA AQUÍ
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-medium tracking-tight text-white leading-[1.14] mb-4 sm:mb-6">
              Encuentra el Departamento Ideal con Asesoría Especializada
            </h2>

            <p className="text-zinc-300 text-xs sm:text-base lg:text-lg font-light leading-relaxed mb-6 sm:mb-10 max-w-xl mx-auto">
              En KC Inmobiliaria te acompañamos en cada etapa: desde la selección de la tipología ideal y el estudio de títulos hasta la entrega formal de llaves.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a 
                href="https://wa.me/51987654321?text=Hola,%20deseo%20asesoria%20para%20comprar%20un%20departamento%20con%20KC%20Inmobiliaria"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-zinc-200 text-black font-semibold text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all shadow-lg hover:shadow-white/20 hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span>Hablar por WhatsApp</span>
              </a>

              <a 
                href="/#deals"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-medium text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all flex items-center gap-2"
              >
                <span>Ver Departamentos</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
