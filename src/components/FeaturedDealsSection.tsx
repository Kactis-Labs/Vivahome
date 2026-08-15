import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { featuredProperties } from '../data/realEstateData';
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';

export const FeaturedDealsSection: React.FC = () => {
  return (
    <section id="deals" className="py-16 sm:py-24 bg-[#0B1E17] text-white border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-gray-300 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-3 sm:mb-4">
              <span>MEJORES OFERTAS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-tight">
              Oportunidades Destacadas del Mes
            </h2>
          </div>
          
          <p className="text-gray-400 max-w-md text-xs sm:text-sm font-light leading-relaxed">
            Inmuebles residenciales de alta plusvalía y residencias de lujo disponibles para adquisición inmediata en el Perú.
          </p>
        </motion.div>

        {/* Property Grid (2 rows x 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProperties.map((prop, idx) => (
            <motion.div 
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6 }}
              className="group bg-[#18181B] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Image Container (Clickable to Detail) */}
              <Link to={`/propiedades/${prop.id}`} className="block relative aspect-[16/11] overflow-hidden">
                <img 
                  src={prop.image} 
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-transparent to-transparent opacity-80" />
                
                {/* Badge Overlay */}
                {prop.badge && (
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] sm:text-[11px] font-medium px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                    {prop.badge}
                  </div>
                )}

                {/* Price Overlay (Dual USD & PEN) */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-baseline justify-between">
                  <div>
                    <div className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                      {prop.price}
                    </div>
                    {prop.pricePen && (
                      <div className="text-[11px] sm:text-xs text-gray-400 font-normal mt-0.5">
                        {prop.pricePen}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] sm:text-xs font-normal text-gray-300 bg-black/60 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-white/10">
                    {prop.category}
                  </span>
                </div>
              </Link>

              {/* Property Details Body */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <Link to={`/propiedades/${prop.id}`}>
                    <h3 className="text-base sm:text-lg font-medium text-white hover:text-white/90 transition-colors mb-1.5 sm:mb-2 line-clamp-1">
                      {prop.title}
                    </h3>
                  </Link>
                  <p className="text-[11px] sm:text-xs text-gray-400 font-light flex items-center gap-1.5 mb-4 sm:mb-6">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="line-clamp-1">{prop.location}</span>
                  </p>
                </div>

                {/* Specs Bar (m²) con iconos discretos en gris */}
                <div className="pt-3 sm:pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] sm:text-xs text-gray-400 font-light">
                  <div className="flex items-center gap-1">
                    <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                    <span>{prop.beds} Dorm.</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                    <span>{prop.baths} Baños</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                    <span>{prop.sqft} m²</span>
                  </div>
                </div>

                {/* Card Actions Refinadas */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 flex items-center gap-2.5 sm:gap-3">
                  <a 
                    href={`https://wa.me/51987654321?text=Hola,%20deseo%20mas%20informacion%20de%20la%20propiedad%20VivaHome:%20${encodeURIComponent(prop.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white/[0.06] hover:bg-emerald-600 hover:text-white text-gray-200 border border-white/10 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs font-medium transition-all flex items-center justify-center gap-1.5 sm:gap-2 truncate"
                  >
                    <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">WhatsApp</span>
                  </a>
                  <Link 
                    to={`/propiedades/${prop.id}`}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.06] hover:bg-emerald-600 hover:text-white text-gray-300 border border-white/10 flex items-center justify-center transition-all shrink-0"
                    aria-label={`Ver detalles de ${prop.title}`}
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
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
