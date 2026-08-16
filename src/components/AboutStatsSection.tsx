import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { stats } from '../data/realEstateData';

export const AboutStatsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Left Column: Brand Vision & Narrative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Plain text label */}
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
              SOBRE GOLDEN INMOBILIARIA
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.14]">
              Creamos el Primer Condominio con Estilo Americano en Malabrigo
            </h2>

            <p className="text-sm sm:text-base font-light text-zinc-600 leading-relaxed">
              En <strong>Golden Inmobiliaria</strong> transformamos la experiencia de comprar tu casa de campo y playa. Con nuestro proyecto insignia <strong>Villa Club Malabrigo</strong>, ofrecemos los terrenos más amplios de la zona (252m², 300m² y 500m²), entregamos planos arquitectónicos americanos gratis y financiamos tu lote directamente al 100% sin intereses bancarios.
            </p>

            <div className="pt-2">
              <Link 
                to="/nosotros"
                className="inline-flex items-center gap-2 bg-[#1D4263] hover:bg-[#132B45] text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-all shadow-md group"
              >
                <span>Conoce Nuestra Visión</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 3 Key Metrics Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-[#F8FAFC] border border-zinc-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-amber-500/40 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1D4263] mb-2 font-mono">
                    {stat.value}
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-zinc-900 mb-2 uppercase tracking-wide">
                    {stat.label}
                  </h3>
                </div>
                <p className="text-xs font-light text-zinc-600 leading-relaxed border-t border-zinc-200/80 pt-4 mt-2">
                  {stat.description}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
