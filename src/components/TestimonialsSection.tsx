import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/realEstateData';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const [showAllMobile, setShowAllMobile] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC] text-slate-900 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-xs font-bold text-[#F5921E] uppercase tracking-wider block mb-2">
            CONFIANZA & RESULTADOS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#162842] mb-2 sm:mb-4">
            +1,200 Propietarios Felices en Puerto Malabrigo
          </h2>
          <p className="text-slate-600 text-xs sm:text-base font-normal">
            Historias reales de familias e inversionistas que ya cuentan con su terreno propio.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                className={`bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 hover:border-[#F5921E] transition-all flex flex-col justify-between shadow-sm hover:shadow-md ${
                  isHiddenMobile ? 'hidden sm:flex' : 'flex'
                }`}
              >
                <div>
                  {/* 5-Star Rating in Orange */}
                  <div className="flex items-center gap-1 mb-3 text-[#F5921E]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm font-normal text-slate-700 leading-relaxed mb-6 italic">
                    "{test.comment}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <img 
                    src={test.avatar} 
                    alt={test.name} 
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover ring-2 ring-[#F5921E]/40 shrink-0"
                  />
                  <div className="overflow-hidden">
                    <h4 className="text-xs sm:text-sm font-bold text-[#162842] truncate">{test.name}</h4>
                    <p className="text-[10px] sm:text-xs font-normal text-slate-500 truncate">{test.role}</p>
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
