import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { AgentsSection } from '../components/AgentsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import { BlogSection } from '../components/BlogSection';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';

export const AboutPage: React.FC = () => {
  const statsList = [
    {
      value: "+10",
      label: "Años de Trayectoria",
      desc: "Liderando la gestión y asesoría inmobiliaria profesional en Trujillo",
      isHighlighted: false
    },
    {
      value: "+500",
      label: "Inmuebles Gestionados",
      desc: "Operaciones de compraventa cerradas con rapidez y seguridad",
      isHighlighted: true
    },
    {
      value: "+1,500",
      label: "Clientes Satisfechos",
      desc: "Familias e inversionistas respaldados en cada paso",
      isHighlighted: false
    },
    {
      value: "100%",
      label: "Seguridad Jurídica",
      desc: "Estudio de títulos minucioso y respaldo notarial garantizado",
      isHighlighted: true
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#DC2626] selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. ABOUT HERO BANNER */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#111827]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Inmobiliaria JML Trujillo" 
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-black/75" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.035em] leading-[1.12]"
          >
            Nuestra Trayectoria en <br className="hidden sm:block" />
            <span className="font-extrabold text-[#EF4444]">Asesoría Inmobiliaria</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. MANIFIESTO & MÉTRICAS */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Manifesto */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12 sm:mb-16"
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111827] leading-[1.25] tracking-[-0.03em]">
              <strong className="font-bold text-[#DC2626]">Inmobiliaria JML</strong> es una empresa encargada de la gestión y asesoría profesional en la compra y venta de inmuebles en Trujillo. Con más de 10 años de experiencia, brindamos <strong className="font-semibold text-slate-900">transparencia, valoración precisa y total respaldo legal</strong> a cada familia e inversionista.
            </p>
          </motion.div>

          {/* 4-Card Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsList.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between ${
                  stat.isHighlighted
                    ? 'bg-[#111827] text-white shadow-xl shadow-black/20 border border-white/10'
                    : 'bg-white text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  <div className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 ${
                    stat.isHighlighted ? 'text-[#EF4444]' : 'text-[#111827]'
                  }`}>
                    {stat.value}
                  </div>
                  <h3 className={`text-base font-bold mb-2 ${
                    stat.isHighlighted ? 'text-white' : 'text-[#111827]'
                  }`}>
                    {stat.label}
                  </h3>
                </div>

                <p className={`text-xs font-normal leading-relaxed pt-4 border-t ${
                  stat.isHighlighted ? 'text-slate-300 border-white/15' : 'text-slate-500 border-slate-100'
                }`}>
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. PILARES */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-4"
            >
              <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block">
                COMPROMISO & PROFESIONALISMO
              </span>
              
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#111827] leading-tight">
                Estudio de Títulos & Asesoría Notarial Integral
              </h2>
              
              <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed">
                En <strong className="text-slate-900 font-semibold">Inmobiliaria JML</strong> nos aseguramos de que cada operación se realice con absoluta transparencia y respaldo en Sunarp. Ya sea que busques comprar tu hogar o vender una propiedad, estás en manos de profesionales.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop" 
                  alt="Inmobiliaria JML Trujillo" 
                  className="w-full h-[260px] sm:h-[360px] object-cover"
                />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Sections */}
      <AgentsSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogSection />

      {/* CTA Banner & Footer */}
      <CtaBanner />
      <Footer />
    </motion.div>
  );
};
