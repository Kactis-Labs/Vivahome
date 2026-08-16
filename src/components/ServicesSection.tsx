import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/realEstateData';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const featuredServices = services.slice(0, 3);

  return (
    <section id="services" className="py-24 bg-[#F8FAFC] text-slate-900 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block mb-2">
              SERVICIOS PROFESIONALES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827]">
              Soluciones Inmobiliarias en Trujillo
            </h2>
          </div>

          <Link 
            to="/servicios"
            className="inline-flex items-center gap-2 bg-[#111827] hover:bg-[#DC2626] text-white font-bold text-xs sm:text-sm px-6 sm:px-7 py-3 rounded-full transition-all shadow-md hover:scale-102"
          >
            <span>Ver Todos los Servicios</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* 3 Featured Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, idx) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-[#DC2626] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              {/* Image Container */}
              <Link to={`/servicios/${service.id}`} className="block relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                
                {/* Floating Icon Badge */}
                <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-[#111827] text-white flex items-center justify-center shadow-lg group-hover:bg-[#DC2626] transition-all">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>

                <div className="absolute top-4 left-4 bg-[#111827]/90 backdrop-blur-md text-[#EF4444] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#EF4444]/30">
                  {service.tag}
                </div>
              </Link>

              {/* Service Info */}
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <Link to={`/servicios/${service.id}`}>
                    <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-[#DC2626] transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="text-sm font-normal text-slate-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link 
                    to={`/servicios/${service.id}`}
                    className="text-xs font-bold text-[#111827] hover:text-[#DC2626] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Conocer más</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
