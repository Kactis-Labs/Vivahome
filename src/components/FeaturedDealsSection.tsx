import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { featuredProperties } from '../data/realEstateData';
import { Maximize2, MapPin, ArrowUpRight, MessageCircle, Ruler } from 'lucide-react';

export const FeaturedDealsSection: React.FC = () => {
  return (
    <section id="deals" className="py-16 sm:py-24 bg-[#F8FAFC] text-zinc-900 border-t border-zinc-200 overflow-hidden">
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
            <div className="inline-flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
              <span>PREVENTA EXCLUSIVA</span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
              Lotes Villa Club Malabrigo
            </h2>
          </div>
          
          <p className="text-zinc-600 max-w-md text-xs sm:text-sm font-light leading-relaxed">
            Terrenos de 252m², 300m² y 500m² con diseño de Estilo Americano, plano gratis y financiamiento directo sin intereses en Puerto Malabrigo.
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
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
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
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#1D4263]/90 text-amber-300 border border-white/20 text-[10px] sm:text-[11px] font-medium px-2.5 py-0.5 sm:px-3.5 sm:py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                    {prop.badge}
                  </div>
                )}

                {/* Price Overlay */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-baseline justify-between">
                  <div>
                    <div className="text-xl sm:text-2xl font-semibold text-white tracking-tight font-mono">
                      {prop.price}
                    </div>
                    {prop.pricePen && (
                      <div className="text-[11px] sm:text-xs text-amber-300 font-normal mt-0.5">
                        {prop.pricePen}
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] sm:text-xs font-normal text-white bg-black/60 backdrop-blur-md px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-white/10">
                    {prop.category}
                  </span>
                </div>
              </Link>

              {/* Property Details Body */}
              <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <Link to={`/propiedades/${prop.id}`}>
                    <h3 className="text-base sm:text-lg font-medium text-zinc-900 hover:text-amber-600 transition-colors mb-1.5 sm:mb-2 line-clamp-1">
                      {prop.title}
                    </h3>
                  </Link>
                  <p className="text-[11px] sm:text-xs text-zinc-500 font-light flex items-center gap-1.5 mb-4 sm:mb-6">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="line-clamp-1">{prop.location}</span>
                  </p>
                </div>

                {/* Specs Bar */}
                <div className="pt-3 sm:pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] sm:text-xs text-zinc-600 font-light">
                  <div className="flex items-center gap-1 font-medium text-zinc-800">
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" />
                    <span>{prop.sqft} m²</span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-700 font-medium">
                    <Ruler className="w-3.5 h-3.5" />
                    <span>Plano Gratis</span>
                  </div>
                  <span className="text-[11px] font-semibold text-zinc-700">
                    0% Intereses
                  </span>
                </div>

                {/* Card Actions */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 flex items-center gap-2.5 sm:gap-3">
                  <a 
                    href={`https://wa.me/51987654321?text=Hola%20Golden%20Inmobiliaria,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20del%20lote:%20${encodeURIComponent(prop.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-zinc-100 hover:bg-[#E5A020] hover:text-white text-zinc-800 border border-zinc-200 rounded-full px-3 sm:px-4 py-2 sm:py-2.5 text-[11px] sm:text-xs font-medium transition-all flex items-center justify-center gap-1.5 sm:gap-2 truncate"
                  >
                    <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">WhatsApp</span>
                  </a>
                  <Link 
                    to={`/propiedades/${prop.id}`}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-zinc-100 hover:bg-[#1D4263] hover:text-white text-zinc-700 border border-zinc-200 flex items-center justify-center transition-all shrink-0"
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
