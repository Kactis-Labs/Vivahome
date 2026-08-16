import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../data/realEstateData';

export const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              VENTAJAS & SERVICIOS INTEGRALES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
              Diseño, Facilidades y Garantía de Construcción
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-light text-zinc-600 max-w-md leading-relaxed">
            Te acompañamos desde la compra en preventa hasta el diseño arquitectónico y la ejecución de obras semanales en Villa Club Malabrigo.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-zinc-200 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-sm hover:shadow-xl"
            >
              {/* Service Image with Zoom */}
              <Link to={`/servicios/${service.id}`} className="relative aspect-[4/3] overflow-hidden block bg-zinc-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                
                {/* Floating Action Button */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#E5A020] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#D97706] transition-all">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>

                <div className="absolute top-4 left-4 bg-[#1D4263]/90 backdrop-blur-md text-amber-300 text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-wider shadow-md">
                  {service.tag}
                </div>
              </Link>

              {/* Service Info */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <Link to={`/servicios/${service.id}`}>
                    <h3 className="text-lg sm:text-xl font-medium tracking-tight text-zinc-900 group-hover:text-amber-600 transition-colors mb-2.5">
                      {service.title}
                    </h3>
                  </Link>

                  <p className="text-xs sm:text-sm font-light text-zinc-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <Link 
                    to={`/servicios/${service.id}`}
                    className="text-xs font-semibold text-amber-600 group-hover:text-amber-700 transition-colors flex items-center gap-1"
                  >
                    <span>Conocer detalles</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <Link 
            to="/servicios"
            className="inline-flex items-center gap-2 bg-[#1D4263] hover:bg-[#132B45] text-white text-xs sm:text-sm font-medium px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105"
          >
            <span>Ver Todos los Servicios Inmobiliarios</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>

      </div>
    </section>
  );
};
