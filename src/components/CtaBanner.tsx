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
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#1D4263] min-h-[340px] sm:min-h-[460px] flex items-center justify-center text-center p-6 sm:p-16"
        >
          {/* Background Image with Dark Contrast Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
              alt="Villa Club Malabrigo - Casa de Campo Estilo Americano" 
              className="w-full h-full object-cover filter brightness-[0.35] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D4263] via-[#1D4263]/60 to-black/70" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-4 sm:mb-6">
              <span>TU LOTE EN MALABRIGO COMIENZA HOY</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-medium tracking-tight text-white leading-[1.14] mb-4 sm:mb-6">
              Asegura Tu Lote en Villa Club al Mejor Precio de Preventa
            </h2>

            <p className="text-slate-300 text-xs sm:text-base lg:text-lg font-light leading-relaxed mb-6 sm:mb-10 max-w-xl mx-auto">
              En Golden Inmobiliaria te brindamos financiamiento directo al 100% sin intereses bancarios y planos americanos gratuitos para tu casa.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a 
                href="https://wa.me/51987654321?text=Hola%20Golden%20Inmobiliaria,%20deseo%20asesor%C3%ADa%20y%20precios%20de%20preventa%20de%20Villa%20Club%20Malabrigo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E5A020] hover:bg-[#D97706] text-white font-medium text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all shadow-lg hover:scale-105 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span>Hablar por WhatsApp</span>
              </a>

              <a 
                href="/#deals"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-medium text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-3.5 rounded-full transition-all flex items-center gap-2"
              >
                <span>Ver Lotes Disponibles</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
