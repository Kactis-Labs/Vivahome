import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/realEstateData';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section className="py-12 sm:py-20 bg-white text-zinc-900 border-t border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-14"
        >
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-2 sm:mb-3">
            TESTIMONIOS REALES
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black mb-2 sm:mb-4">
            Lo que Dicen Quienes Compraron su Departamento
          </h2>
          <p className="text-zinc-600 text-xs sm:text-base font-light">
            Experiencias de familias e inversionistas que confiaron la compra de su departamento en KC Inmobiliaria.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((test, idx) => {
            const isHiddenMobile = !showAllMobile && idx >= 3;

            return (
              <motion.div 
                key={test.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className={`bg-[#FAFAFA] rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-zinc-200 hover:border-zinc-300 transition-all flex flex-col justify-between shadow-sm ${
                  isHiddenMobile ? 'hidden sm:flex' : 'flex'
                }`}
              >
                <div>
                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 mb-2.5 sm:mb-4 text-black">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-black" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm font-light text-zinc-700 leading-relaxed mb-4 sm:mb-6 italic">
                    "{test.comment}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-zinc-200">
                  <img 
                    src={test.avatar} 
                    alt={test.name} 
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover ring-1 ring-zinc-300 shrink-0"
                  />
                  <div className="overflow-hidden">
                    <h4 className="text-xs sm:text-sm font-medium text-zinc-900 truncate">{test.name}</h4>
                    <p className="text-[10px] sm:text-xs font-light text-zinc-500 truncate">{test.role}</p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Mobile Toggle Button */}
        <div className="sm:hidden mt-6 text-center">
          <button
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-xs font-medium text-zinc-700 transition-colors cursor-pointer"
          >
            <span>{showAllMobile ? 'Ver menos testimonios' : 'Ver más testimonios'}</span>
            {showAllMobile ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>
    </section>
  );
};
