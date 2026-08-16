import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/realEstateData';
import { ArrowUpRight } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const featuredServices = services.slice(0, 3);

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] text-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-2">
              SERVICIOS INMOBILIARIOS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black">
              Soluciones Integrales para Tu Terreno Propio
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-light text-zinc-600 max-w-md leading-relaxed">
            Te brindamos asesoría completa desde la visita guiada hasta la titulación y construcción de tu casa de campo o playa.
          </p>
        </motion.div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-zinc-200 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-sm hover:shadow-xl"
            >
              {/* Image Preview with Hover Zoom */}
              <Link to={`/servicios/${service.id}`} className="relative aspect-[16/10] overflow-hidden block bg-zinc-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                
                {/* Circular Action Button */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-emerald-400 transition-all">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>

                <div className="absolute top-4 left-4 bg-[#0A2540]/85 backdrop-blur-md text-emerald-300 text-[10px] font-semibold px-3 py-1 rounded-md uppercase tracking-wider border border-emerald-400/30">
                  {service.tag}
                </div>
              </Link>

              {/* Service Info */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <Link to={`/servicios/${service.id}`}>
                    <h3 className="text-lg sm:text-xl font-medium tracking-tight text-zinc-900 group-hover:text-emerald-700 transition-colors mb-2.5">
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
                    className="text-xs font-medium text-emerald-700 group-hover:text-emerald-800 transition-colors flex items-center gap-1"
                  >
                    <span>Conocer detalles del servicio</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to all services */}
        <div className="text-center mt-12 sm:mt-16">
          <Link 
            to="/servicios"
            className="inline-flex items-center gap-2 bg-[#0A2540] hover:bg-zinc-800 text-white text-xs sm:text-sm font-medium px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-105"
          >
            <span>Ver Todos los Servicios Inmobiliarios</span>
            <ArrowUpRight className="w-4 h-4 text-emerald-400" />
          </Link>
        </div>

      </div>
    </section>
  );
};
