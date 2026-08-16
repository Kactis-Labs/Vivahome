import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/realEstateData';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#0C130E] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          
          {/* Left Column: Heading & Contact info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span className="text-xs font-semibold text-lime-400 uppercase tracking-widest block mb-2 sm:mb-4">
              PREGUNTAS FRECUENTES
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-2 sm:mb-6 leading-tight">
              Estructuración Legal, Financiera & Rentabilidad
            </h2>

            <p className="text-xs sm:text-base font-light text-zinc-300 mb-8 leading-relaxed">
              Resolvemos tus dudas sobre procesos notariales en Sunarp, cálculo de retorno de inversión y financiamiento hipotecario estratégico.
            </p>

            <div className="p-6 rounded-3xl bg-white/5 border border-lime-500/20 backdrop-blur-sm space-y-4">
              <h3 className="text-sm font-medium text-white">¿Tienes una consulta específica?</h3>
              <p className="text-xs font-light text-zinc-400 leading-relaxed">
                Nuestros directores y asesores legales revisan tu caso particular de manera confidencial y sin costo inicial.
              </p>
              <Link 
                to="/contacto" 
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-lime-400 hover:text-lime-300 transition-colors"
              >
                <span>Hablar con un especialista de GyS</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Accordion List */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-4"
          >
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;

              return (
                <div 
                  key={faq.id}
                  className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] overflow-hidden transition-colors hover:border-lime-500/40"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-medium text-white tracking-tight">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 text-lime-400 flex items-center justify-center shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm font-light text-zinc-300 leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </section>
  );
};
