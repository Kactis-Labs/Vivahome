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
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-[#162842] min-h-[340px] sm:min-h-[460px] flex items-center justify-center text-center p-6 sm:p-16"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" 
              alt="Puerto Malabrigo Lotes de Playa - Plus Inmobiliaria" 
              className="w-full h-full object-cover filter brightness-[0.38] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#162842] via-[#162842]/60 to-black/70" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <span className="text-xs font-bold text-[#F5921E] uppercase tracking-wider block mb-3">
              PUERTO MALABRIGO — RESIDENCIAL NUEVA ASIA
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white leading-[1.14] mb-4 sm:mb-6">
              Vive a un Paso de la Playa
            </h2>

            <p className="text-slate-200 text-xs sm:text-base lg:text-lg font-normal leading-relaxed mb-6 sm:mb-10 max-w-xl mx-auto">
              Lotes con Club House, 100% independizados y financiamiento directo hasta en 48 meses con cuotas desde S/ 799 en <strong className="text-white font-semibold">Plus Inmobiliaria</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a 
                href="https://wa.me/51987654321?text=Hola,%20deseo%20asesoria%20para%20los%20lotes%20en%20Puerto%20Malabrigo%20con%20Plus%20Inmobiliaria"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F5921E] hover:bg-[#E67E10] text-white font-bold text-xs sm:text-sm px-6 sm:px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-[#F5921E]/30 hover:scale-102 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span>Hablar por WhatsApp</span>
              </a>

              <a 
                href="/#deals"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 hover:border-[#F5921E]/50 font-bold text-xs sm:text-sm px-6 sm:px-8 py-3.5 rounded-full transition-all flex items-center gap-2"
              >
                <span>Ver Proyectos</span>
                <ArrowUpRight className="w-4 h-4 text-[#F5921E]" />
              </a>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
