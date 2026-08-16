import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/realEstateData';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export const AboutStatsSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#F8FAFC] text-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mb-12 sm:mb-16"
        >
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2 sm:mb-3">
            SOBRE KC INMOBILIARIA
          </span>
          
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-normal text-zinc-900 leading-[1.18] tracking-[-0.035em]">
            Ayudamos a familias e inversionistas a encontrar su departamento ideal con asesoría transparente, rigor legal y respaldo integral.
          </h2>

          <div className="mt-6 sm:mt-8 flex items-center gap-4">
            <a 
              href="/nosotros"
              className="inline-flex items-center gap-2 bg-black hover:bg-zinc-800 text-white font-medium text-xs sm:text-sm px-6 sm:px-8 py-3 rounded-full transition-all shadow-md hover:shadow-black/20"
            >
              <span>Conoce Nuestra Trayectoria</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Dual Composition Layout: Image Left + Stats Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center pt-6 sm:pt-8 border-t border-zinc-200">
          
          {/* Left Column: Team / Advisory Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop" 
                alt="Equipo de Asesoría Inmobiliaria KC Inmobiliaria" 
                className="w-full h-[240px] sm:h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black text-white flex items-center justify-center font-bold shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-xs sm:text-sm font-medium text-zinc-900 truncate">Agencia Especializada en Departamentos</h4>
                    <p className="text-[10px] sm:text-xs font-light text-zinc-600 truncate">Respaldo legal integral y estudio de títulos en Sunarp</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stacked Impact Statistics */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 pl-0 lg:pl-6">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-4 sm:p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl sm:text-5xl font-medium text-black tracking-tight mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <h3 className="text-sm sm:text-base font-medium text-zinc-900 mb-0.5 sm:mb-1">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm font-light text-zinc-500 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
