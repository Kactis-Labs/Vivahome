import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  MapPin, 
  Maximize2, 
  MessageCircle,
  Ruler
} from 'lucide-react';
import { featuredProperties } from '../data/realEstateData';

export const FeaturedDealsSection: React.FC = () => {
  return (
    <section id="deals" className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              VILLA CLUB MALABRIGO • PREVENTA EXCLUSIVA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
              Lotes con Estilo Americano en Puerto Malabrigo
            </h2>
          </div>

          <p className="text-xs sm:text-sm font-light text-zinc-600 max-w-md leading-relaxed">
            Metrajes amplios de 252m², 300m² y 500m² con plano arquitectónico americano gratis, financiamiento directo 0% de interés y avance de obras semanal.
          </p>
        </div>

        {/* Property Grid: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProperties.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden border border-zinc-200 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 shadow-sm hover:shadow-xl"
            >
              {/* Image Preview with Hover Zoom */}
              <div className="relative aspect-[16/11] overflow-hidden bg-zinc-100">
                <img 
                  src={prop.image} 
                  alt={prop.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                
                {/* Badge Overlay */}
                {prop.badge && (
                  <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#1D4263]/90 text-amber-300 text-[10px] sm:text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-wider backdrop-blur-md shadow-md">
                    {prop.badge}
                  </div>
                )}

                {/* Price Display */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                  <div className="text-xl sm:text-2xl font-bold tracking-tight">
                    {prop.price}
                  </div>
                  {prop.pricePen && (
                    <div className="text-xs font-medium text-amber-300">
                      {prop.pricePen}
                    </div>
                  )}
                </div>
              </div>

              {/* Property Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider block mb-1">
                    {prop.category}
                  </span>
                  
                  <Link to={`/propiedades/${prop.id}`}>
                    <h3 className="text-base sm:text-lg font-medium text-zinc-900 group-hover:text-amber-600 transition-colors mb-1.5 line-clamp-1">
                      {prop.title}
                    </h3>
                  </Link>

                  <p className="text-xs font-light text-zinc-500 flex items-center gap-1.5 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span className="truncate">{prop.location}</span>
                  </p>
                </div>

                {/* Specs and WhatsApp CTA */}
                <div className="pt-4 border-t border-zinc-100 space-y-4">
                  <div className="flex items-center justify-between text-xs font-light text-zinc-600">
                    <div className="flex items-center gap-1 font-medium text-zinc-800">
                      <Maximize2 className="w-4 h-4 text-amber-600" />
                      <span>Área: <strong>{prop.sqft} m²</strong></span>
                    </div>
                    <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-md flex items-center gap-1">
                      <Ruler className="w-3 h-3" /> Plano Gratis
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/propiedades/${prop.id}`}
                      className="flex-1 text-center bg-zinc-100 hover:bg-[#1D4263] hover:text-white text-zinc-900 text-xs font-medium py-2.5 rounded-xl transition-colors"
                    >
                      Ver Detalles del Lote
                    </Link>

                    <a
                      href={`https://wa.me/51987654321?text=Hola%20Golden%20Inmobiliaria,%20solicito%20informaci%C3%B3n%20sobre%20el%20lote:%20${encodeURIComponent(prop.title)}%20(${prop.price})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-amber-500/15 hover:bg-[#E5A020] hover:text-white text-amber-700 transition-colors"
                      title="Consultar por WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-[#1D4263] hover:bg-[#132B45] text-white text-xs sm:text-sm font-medium px-8 py-3.5 rounded-full transition-all shadow-lg hover:scale-105"
          >
            <span>Conoce los Planos y Lotes de Villa Club</span>
            <ArrowUpRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>

      </div>
    </section>
  );
};
