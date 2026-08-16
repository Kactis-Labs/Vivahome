import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/realEstateData';
import { Star, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section className="py-12 sm:py-20 bg-white text-slate-900 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-2 sm:mb-3">
            <MessageSquare className="w-4 h-4" />
            <span>HISTORIAS DE ÉXITO</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-2 sm:mb-4">
            Lo que Dicen Quienes Ya Eligieron Villa Club
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-light">
            Experiencias reales de familias e inversionistas que adquirieron su lote con Golden Inmobiliaria.
          </p>
        </motion.div>

        {/* Testimonials Grid (Compacto en móvil) */}
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
                className={`bg-[#F8FAFC] rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between shadow-sm ${
                  isHiddenMobile ? 'hidden sm:flex' : 'flex'
                }`}
              >
                <div>
                  {/* 5-Star Rating */}
                  <div className="flex items-center gap-1 mb-2.5 sm:mb-4 text-[#E5A020]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm font-light text-slate-700 leading-relaxed mb-4 sm:mb-6 italic">
                    "{test.comment}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-slate-200">
                  <img 
                    src={test.avatar} 
                    alt={test.name} 
                    className="w-9 h-9 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-amber-500/30 shrink-0"
                  />
                  <div className="overflow-hidden">
                    <h4 className="text-xs sm:text-sm font-medium text-slate-900 truncate">{test.name}</h4>
                    <p className="text-[10px] sm:text-xs font-light text-slate-500 truncate">{test.role}</p>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Mobile Toggle Button for remaining testimonials */}
        <div className="sm:hidden mt-6 text-center">
          <button
            onClick={() => setShowAllMobile(!showAllMobile)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors cursor-pointer"
          >
            <span>{showAllMobile ? 'Ver menos testimonios' : 'Ver más testimonios'}</span>
            {showAllMobile ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>
    </section>
  );
};
