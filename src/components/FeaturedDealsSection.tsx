import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { featuredProperties } from '../data/realEstateData';
import { Bed, Bath, Maximize2, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react';

export const FeaturedDealsSection: React.FC = () => {
  return (
    <section id="deals" className="py-16 sm:py-24 bg-[#F8FAFC] text-slate-900 border-t border-slate-200/80 overflow-hidden">
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
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-[#00873D]/10 border border-[#00873D]/20 text-[#00873D] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
              <span>MEJORES OFERTAS & PROYECTOS</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Oportunidades Destacadas del Mes
            </h2>
          </div>
          
          <p className="text-slate-600 max-w-md text-xs sm:text-sm font-normal leading-relaxed">
            Inmuebles residenciales, departamentos de estreno y proyectos de alta rentabilidad con entrega inmediata y en preventa en el Perú.
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
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#00873D]/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              {/* Image Container (Clickable to Detail) */}
              <Link to={`/propiedades/${prop.id}`} className="block relative aspect-[16/11] overflow-hidden">
                <img 
                  src={prop.image} 
                  alt={prop.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Badge Overlay */}
                {prop.badge && (
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#00873D] text-white text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full uppercase tracking-wider shadow-md">
                    {prop.badge}
                  </div>
                )}

                {/* Price Overlay (Dual USD & PEN) */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-baseline justify-between">
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm">
                      {prop.price}
                    </div>
                    {prop.pricePen && (
                      <div className="text-[11px] sm:text-xs text-slate-200 font-medium mt-0.5 drop-shadow-sm">
                        {prop.pricePen}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    {prop.category}
                  </span>
                </div>
              </Link>

              {/* Property Details Body */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <Link to={`/propiedades/${prop.id}`}>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00873D] transition-colors mb-1.5 sm:mb-2 line-clamp-1">
                      {prop.title}
                    </h3>
                  </Link>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-normal flex items-center gap-1.5 mb-4 sm:mb-6">
                    <MapPin className="w-3.5 h-3.5 text-[#00873D] shrink-0" />
                    <span className="line-clamp-1">{prop.location}</span>
                  </p>
                </div>

                {/* Specs Bar (m²) */}
                <div className="pt-3 sm:pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-slate-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <Bed className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                    <span>{prop.beds} Dorm.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Bath className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                    <span>{prop.baths} Baños</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-400" />
                    <span>{prop.sqft} m²</span>
                  </div>
                </div>

                {/* Card Actions Refinadas */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-100 flex items-center gap-2.5 sm:gap-3">
                  <a 
                    href={`https://wa.me/51987654321?text=Hola,%20deseo%20mas%20informacion%20de%20la%20propiedad%20Megapolys:%20${encodeURIComponent(prop.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#00873D]/10 hover:bg-[#00873D] text-[#00873D] hover:text-white border border-[#00873D]/25 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs font-semibold transition-all flex items-center justify-center gap-1.5 sm:gap-2 truncate shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">WhatsApp</span>
                  </a>
                  <Link 
                    to={`/propiedades/${prop.id}`}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 hover:bg-[#00873D] hover:text-white text-slate-700 border border-slate-200 flex items-center justify-center transition-all shrink-0 shadow-sm"
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
