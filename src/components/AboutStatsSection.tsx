import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/realEstateData';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutStatsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white text-zinc-900 overflow-hidden border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Brand Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mb-12 sm:mb-16"
        >
          <span className="text-xs font-semibold text-lime-700 uppercase tracking-wider block mb-2 sm:mb-3">
            SOBRE GYS SERVICIOS INMOBILIARIOS
          </span>
          
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-normal text-zinc-900 leading-[1.18] tracking-[-0.035em]">
            Especialistas en construir valor para cada decisión inmobiliaria, transformando experiencia y estrategia en patrimonio sólido.
          </h2>
        </motion.div>

        {/* Narrative & Stats Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Narrative Copy */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            <p className="text-sm sm:text-base font-light text-zinc-600 leading-relaxed">
              En <strong className="font-semibold text-zinc-900">GyS Servicios Inmobiliarios</strong> brindamos asesoría inmobiliaria, legal y financiera de alto nivel. Acompañamos a familias, inversionistas y empresas en la adquisición, estructuración y comercialización de activos de alto rendimiento con total seguridad jurídica.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-lime-100 text-lime-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm font-medium text-zinc-800">
                Respaldo legal en Sunarp, estudio de títulos y negociación bancaria preferencial.
              </p>
            </div>

            <div className="pt-4">
              <Link 
                to="/nosotros"
                className="inline-flex items-center gap-2 bg-[#0C130E] hover:bg-zinc-800 text-white text-xs sm:text-sm font-medium px-6 py-3 rounded-full transition-all shadow-md group"
              >
                <span>Conoce Nuestra Filosofía</span>
                <ArrowUpRight className="w-4 h-4 text-lime-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: 3 Key Metrics Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-[#F8FAFC] border border-zinc-200 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-lime-500/40 hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0C130E] mb-2 font-mono">
                    {stat.value}
                  </div>
                  <h3 className="text-xs sm:text-sm font-medium text-zinc-900 mb-2 uppercase tracking-wide">
                    {stat.label}
                  </h3>
                </div>

                <p className="text-xs font-light text-zinc-500 leading-relaxed border-t border-zinc-200 pt-3">
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
