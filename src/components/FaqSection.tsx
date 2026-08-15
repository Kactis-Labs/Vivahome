import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/realEstateData';
import { Plus, Minus, HelpCircle, ArrowUpRight } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-12 sm:py-24 bg-[#0B1E17] text-white border-t border-emerald-950/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 items-start">
          
          {/* Left Column: Heading with Scroll Reveal */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full bg-emerald-900/40 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-xs font-medium uppercase tracking-wider mb-3 sm:mb-6">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>PREGUNTAS FRECUENTES</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-2 sm:mb-6 leading-tight">
              Todo lo que Necesitas Saber Antes de Invertir
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed mb-4 sm:mb-8">
              Resolvemos tus dudas sobre requisitos notariales, verificación en Sunarp, financiamiento hipotecario y visitas guiadas a propiedades con VivaHome.
            </p>

            {/* Visual Card Under Description (Solo en tablets y desktop para ahorrar espacio en móvil) */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-emerald-900/40 hidden sm:block">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" 
                alt="Propiedad de Lujo en San Isidro - VivaHome" 
                className="w-full h-[220px] sm:h-[260px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E17] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-white">
                <div>
                  <h4 className="text-xs sm:text-sm font-medium">¿Tienes una consulta específica?</h4>
                  <p className="text-[11px] sm:text-xs font-light text-slate-300">Habla directamente con un asesor por WhatsApp</p>
                </div>
                <motion.a 
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://wa.me/51987654321?text=Hola,%20tengo%20una%20consulta%20inmobiliaria%20para%20VivaHome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 hover:bg-emerald-700 transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dark Interactive Smooth Accordion with AnimatePresence */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div 
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={`rounded-xl sm:rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? 'bg-[#0F241D] border-emerald-500/40 shadow-md' 
                      : 'bg-[#081611] border-emerald-900/30 hover:border-emerald-700/40'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-3.5 sm:p-5 lg:p-6 text-left flex items-center justify-between gap-3 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xs sm:text-base font-medium text-white pr-2 leading-snug">
                      {faq.question}
                    </span>
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen ? 'bg-emerald-600 text-white' : 'bg-white/10 text-white'
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
                        <div className="px-3.5 pb-3.5 pt-1 sm:px-6 sm:pb-6 text-xs sm:text-sm font-light text-slate-300 leading-relaxed border-t border-emerald-900/30">
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
