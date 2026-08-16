import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/realEstateData';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const featuredServices = services.slice(0, 3);

  return (
    <section id="services" className="py-24 bg-white text-zinc-900 border-t border-zinc-200 overflow-hidden">
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
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2">
              SERVICIOS ESPECIALIZADOS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
              Servicios para la Compra & Venta de Departamentos
            </h2>
          </div>

          <Link 
            to="/servicios"
            className="inline-flex items-center gap-2 bg-black hover:bg-zinc-800 text-white font-medium text-sm px-6 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md"
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
              className="group bg-[#FAFAFA] rounded-3xl overflow-hidden border border-zinc-200 hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              {/* Image Container with Floating Arrow Badge */}
              <Link to={`/servicios/${service.id}`} className="block relative aspect-[16/10] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                
                {/* Floating Icon Badge */}
                <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-black text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>

                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white text-[10px] font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                  {service.tag}
                </div>
              </Link>

              {/* Service Info */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <Link to={`/servicios/${service.id}`}>
                    <h3 className="text-xl font-medium text-zinc-900 mb-3 group-hover:text-black transition-colors leading-snug">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="text-sm font-light text-zinc-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-200 flex items-center justify-between">
                  <Link 
                    to={`/servicios/${service.id}`}
                    className="text-xs font-semibold text-zinc-900 hover:text-black flex items-center gap-1.5 transition-colors"
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
