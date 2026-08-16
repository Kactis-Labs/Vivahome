import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../data/realEstateData';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
              EXPERIENCIAS REALES
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
              Familias que Ya Construyen su Sueño
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3 self-end md:self-auto">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full border border-zinc-300 bg-white hover:bg-[#1D4263] hover:text-white hover:border-[#1D4263] text-zinc-700 flex items-center justify-center transition-all shadow-sm"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-11 h-11 rounded-full border border-zinc-300 bg-white hover:bg-[#1D4263] hover:text-white hover:border-[#1D4263] text-zinc-700 flex items-center justify-center transition-all shadow-sm"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Dynamic Testimonial Display */}
        <div className="bg-white border border-zinc-200 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-lg relative overflow-hidden">
          <Quote className="absolute top-6 right-6 sm:top-10 sm:right-10 w-24 h-24 text-amber-500/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="max-w-4xl space-y-6"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Comment Text */}
              <p className="text-xl sm:text-2xl lg:text-3xl font-light text-zinc-800 leading-relaxed italic">
                "{current.comment}"
              </p>

              {/* Author Details */}
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-100">
                <img 
                  src={current.avatar} 
                  alt={current.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-500/30"
                />
                <div>
                  <h4 className="text-base font-semibold text-zinc-900">
                    {current.name}
                  </h4>
                  <p className="text-xs font-medium text-amber-600">
                    {current.role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
