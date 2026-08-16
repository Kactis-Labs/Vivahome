import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { featuredProperties } from '../data/realEstateData';
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';

export const FeaturedDealsSection: React.FC = () => {
  return (
    <section id="deals" className="py-16 sm:py-24 bg-[#FAFAFA] text-zinc-900 border-t border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/5 border border-black/10 text-zinc-700 text-[10px] sm:text-xs font-semibold uppercase tracking-widest mb-3 sm:mb-4">
              <span>PORTAFOLIO EXCLUSIVO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-tight">
              Departamentos Destacados en Venta
            </h2>
          </div>
          
          <p className="text-zinc-600 max-w-md text-xs sm:text-sm font-light leading-relaxed">
            Flats de estreno, dúplex y penthouses con acabados de primera en las mejores zonas residenciales de Lima.
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
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200 hover:border-zinc-400 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              {/* Image Container (Clickable to Detail) */}
              <Link to={`/propiedades/${prop.id}`} className="block relative aspect-[16/11] overflow-hidden bg-zinc-100">
                <img 
                  src={prop.image} 
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                
                {/* Badge Overlay */}
                {prop.badge && (
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black/80 text-white border border-white/20 text-[10px] sm:text-[11px] font-medium px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
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
                      <div className="text-[11px] sm:text-xs text-zinc-300 font-light mt-0.5">
                        {prop.pricePen}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-black bg-white px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-md">
                    {prop.category}
                  </span>
                </div>
              </Link>

              {/* Property Details Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <Link to={`/propiedades/${prop.id}`}>
                    <h2 className="text-base sm:text-lg font-medium text-black group-hover:text-zinc-700 transition-colors mb-1.5 sm:mb-2 line-clamp-1">
                      {prop.title}
                    </h2>
                  </Link>
                  <p className="text-[11px] sm:text-xs text-zinc-500 font-light flex items-center gap-1.5 mb-4 sm:mb-6">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="line-clamp-1">{prop.location}</span>
                  </p>
                </div>

                {/* Specs Bar (m²) */}
                <div className="pt-3 sm:pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] sm:text-xs text-zinc-600 font-light">
                  {prop.beds > 0 && (
                    <div className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400" />
                      <span>{prop.beds} Dorm.</span>
                    </div>
                  )}
                  {prop.baths > 0 && (
                    <div className="flex items-center gap-1">
                      <Bath className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400" />
                      <span>{prop.baths} Baños</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400" />
                    <span>{prop.sqft} m²</span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 flex items-center gap-2.5 sm:gap-3">
                  <a 
                    href={`https://wa.me/51987654321?text=Hola,%20deseo%20informacion%20del%20departamento:%20${encodeURIComponent(prop.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-black hover:bg-zinc-800 text-white rounded-full px-3 sm:px-4 py-2.5 text-[11px] sm:text-xs font-medium transition-all flex items-center justify-center gap-1.5 sm:gap-2 truncate shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">Consultar Departamento</span>
                  </a>
                  <Link 
                    to={`/propiedades/${prop.id}`}
                    className="w-9 h-9 rounded-full bg-zinc-100 hover:bg-black hover:text-white text-zinc-700 flex items-center justify-center transition-all shrink-0 shadow-sm"
                    aria-label={`Ver detalles de ${prop.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
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
