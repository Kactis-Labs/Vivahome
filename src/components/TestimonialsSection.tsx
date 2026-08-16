import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/realEstateData';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] text-zinc-900 overflow-hidden border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-14"
        >
          <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-2 sm:mb-3">
            FAMILIAS CON LOTE PROPIO
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black mb-2 sm:mb-4">
            Historias Reales de Familias que Cumplieron su Sueño
          </h2>
          <p className="text-xs sm:text-base font-light text-zinc-600 leading-relaxed">
            Conoce los testimonios de quienes ya disfrutan de su terreno propio en Puerto Malabrigo y La Libertad con ECO HOGAR Inmobiliaria.
          </p>
        </motion.div>

        {/* Testimonials Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, index) => {
            const isHiddenMobile = index >= 3 && !showAllMobile;

            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`bg-white border border-zinc-200 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-emerald-500/40 transition-all flex flex-col justify-between ${
                  isHiddenMobile ? 'hidden md:flex' : 'flex'
                }`}
              >
                <div>
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 mb-4 text-emerald-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm font-light text-zinc-700 leading-relaxed italic mb-6">
                    "{t.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-zinc-100">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-emerald-500"
                  />
                  <div>
                    <h3 className="text-xs sm:text-sm font-medium text-zinc-900">
                      {t.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs font-light text-zinc-500">
                      {t.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Accordion Toggle */}
        <div className="mt-8 text-center md:hidden">
          <button
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center gap-2 bg-white border border-zinc-300 text-zinc-800 text-xs font-medium px-5 py-2.5 rounded-full shadow-sm"
          >
            <span>{showAllMobile ? 'Ver menos testimonios' : 'Ver todos los testimonios'}</span>
            {showAllMobile ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

      </div>
    </section>
  );
};
