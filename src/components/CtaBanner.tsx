import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowUpRight } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white text-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Box with Architectural Image Background */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-[#0C130E] py-16 sm:py-20 px-6 sm:px-12 text-center shadow-2xl border border-lime-500/20"
        >
          {/* Background overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
              alt="GyS Servicios Inmobiliarios - Asesoría Integral" 
              className="w-full h-full object-cover filter brightness-[0.25] contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C130E]/95 via-[#0C130E]/80 to-[#0C130E]/95" />
          </div>

          {/* Banner Content */}
          <div className="relative z-10 max-w-3xl mx-auto text-white">
            <span className="text-xs font-semibold text-lime-400 uppercase tracking-widest block mb-3 sm:mb-4">
              ASESORÍA INMOBILIARIA INTEGRAL
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-6xl font-medium tracking-tight text-white leading-[1.14] mb-4 sm:mb-6">
              Construyamos Valor Juntos para Tu Patrimonio
            </h2>

            <p className="text-xs sm:text-base font-light text-zinc-300 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
              Transformamos experiencia, estrategia y conocimiento del mercado en decisiones inmobiliarias que protegen y multiplican tu capital.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/51987654321?text=Hola,%20quisiera%20solicitar%20una%20reuni%C3%B3n%20con%20un%20asesor%20de%20GyS%20Servicios%20Inmobiliarios"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-full transition-all shadow-lg hover:scale-105"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span>Contactar por WhatsApp</span>
              </a>

              <Link 
                to="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm px-8 py-3.5 rounded-full border border-white/20 transition-all backdrop-blur-md"
              >
                <span>Agendar Asesoría Personalizada</span>
                <ArrowUpRight className="w-4 h-4 text-lime-400" />
              </Link>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
