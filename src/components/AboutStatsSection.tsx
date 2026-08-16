import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { heroStats } from '../data/realEstateData';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

export const AboutStatsSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white text-[#1C1917] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold text-[#A8875D] uppercase tracking-wider block mb-3">
            TRAYECTORIA & SOLIDEZ
          </span>
          
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] leading-[1.18] tracking-[-0.03em]">
            Más de 14 años construyendo hogares y desarrollando proyectos residenciales que redefinen la calidad de vida y el patrimonio de cada familia.
          </h2>

          <div className="mt-6 sm:mt-8 flex items-center gap-4">
            <Link 
              to="/nosotros"
              className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#2E2A25] text-white font-semibold text-xs sm:text-sm px-6 sm:px-8 py-3 rounded-full transition-all shadow-md hover:shadow-xl hover:scale-102"
            >
              <span>Conoce Más Sobre R&R</span>
              <ArrowUpRight className="w-4 h-4 text-[#D4B996]" />
            </Link>
          </div>
        </motion.div>

        {/* Dual Composition Layout: Image Left + Stats Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center pt-6 sm:pt-8 border-t border-[#E8E4DC]">
          
          {/* Left Column: Architectural / Advisory Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop" 
                alt="Proyectos Residenciales R&R Inmobiliaria" 
                className="w-full h-[260px] sm:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />
              
              {/* Floating Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1C1917] text-[#D4B996] flex items-center justify-center font-bold shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">Desarrolladora Inmobiliaria Respaldada</h4>
                    <p className="text-[10px] sm:text-xs font-normal text-slate-600 truncate">+20 proyectos terminados y entregados en Sunarp</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stacked Impact Statistics */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 pl-0 lg:pl-4">
            {heroStats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E4DC] hover:border-[#C8A97E] shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight mb-1">
                  {stat.value}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#1C1917] mb-0.5">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm font-normal text-slate-600 leading-relaxed">
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
