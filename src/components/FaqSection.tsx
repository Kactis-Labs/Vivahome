import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/realEstateData';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#181614] text-white border-t border-[#2E2A25] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Left Column: Heading */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-bold text-[#D4B996] uppercase tracking-wider block mb-3">
              PREGUNTAS FRECUENTES
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3 sm:mb-6 leading-tight">
              Todo lo que Necesitas Saber Antes de Invertir
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm font-normal leading-relaxed mb-6 sm:mb-8">
              Resolvemos tus dudas sobre compras en preventa, independización registral en Sunarp, financiamiento bancario y visitas a los proyectos de <strong className="text-white font-semibold">R&R Inmobiliaria</strong>.
            </p>

            {/* Visual Card Under Description */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#38332D] hidden sm:block">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" 
                alt="Proyecto Residencial - R&R Inmobiliaria" 
                className="w-full h-[220px] sm:h-[260px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-[#181614]/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-white">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold">¿Deseas atención personalizada?</h4>
                  <p className="text-[11px] sm:text-xs font-normal text-slate-300">Habla directamente con un asesor por WhatsApp</p>
                </div>
                <motion.a 
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/51987654321?text=Hola,%20tengo%20una%20consulta%20sobre%20los%20proyectos%20de%20R%26R%20Inmobiliaria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#C8A97E] text-[#181614] flex items-center justify-center shrink-0 hover:bg-[#B89368] transition-colors shadow-md"
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dark Interactive Smooth Accordion */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div 
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-[#221E1A] border-[#C8A97E]/50 shadow-md' 
                      : 'bg-[#1C1917] border-[#2E2A25] hover:border-[#3E3932]'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 sm:p-6 text-left flex items-center justify-between gap-3 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-base font-semibold text-white pr-2 leading-snug">
                      {faq.question}
                    </span>
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen ? 'bg-[#C8A97E] text-[#181614]' : 'bg-white/10 text-white'
                    }`}>
                      {isOpen ? <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-1 sm:px-6 sm:pb-6 text-xs sm:text-sm font-normal text-slate-300 leading-relaxed border-t border-[#38332D]">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
