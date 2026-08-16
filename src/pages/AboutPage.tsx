import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { AgentsSection } from '../components/AgentsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import { BlogSection } from '../components/BlogSection';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { ShieldCheck, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const statsList = [
    {
      value: "250m²+",
      label: "Metrajes Amplios",
      desc: "Lotes de 252m², 300m² y 500m² para casas con piscina y porche",
      isHighlighted: false
    },
    {
      value: "0%",
      label: "Intereses Bancarios",
      desc: "Financiamiento 100% directo con la inmobiliaria solo con tu DNI",
      isHighlighted: true
    },
    {
      value: "100%",
      label: "Planos Gratis",
      desc: "Juego completo de planos arquitectónicos de Estilo Americano",
      isHighlighted: false
    },
    {
      value: "Semanal",
      label: "Avance de Obras",
      desc: "Reportes periódicos verificables del desarrollo de Villa Club",
      isHighlighted: true
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-[#F8FAFC] text-zinc-900 font-sans selection:bg-amber-500 selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. ABOUT HERO BANNER */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#1D4263]">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Golden Inmobiliaria - Villa Club Malabrigo" 
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D4263] via-[#1D4263]/60 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-[-0.035em] leading-[1.12]"
          >
            Haciendo Realidad Tu Casa de Campo <br className="hidden sm:block" />
            <span className="font-bold text-amber-300">con Estilo Americano en Malabrigo</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-xs font-light text-zinc-300 mt-4"
          >
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-amber-400 font-medium">Sobre Nosotros</span>
          </motion.div>
        </div>
      </section>

      {/* 2. MANIFIESTO & MÉTRICAS */}
      <section className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Manifesto Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12 sm:mb-16"
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-zinc-900 leading-[1.25] tracking-[-0.03em]">
              <strong className="font-semibold text-[#1D4263]">Golden Inmobiliaria</strong> nació con el propósito de crear un nuevo estándar residencial en Puerto Malabrigo. Con <strong>Villa Club Malabrigo</strong> introducimos el concepto de Estilo Americano, combinando arquitectura de vanguardia, terrenos amplios y financiamiento accesible sin intermediación bancaria.
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
                className={`rounded-3xl p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between border ${
                  stat.isHighlighted
                    ? 'bg-[#1D4263] text-white border-white/10 shadow-xl'
                    : 'bg-white text-zinc-900 border-zinc-200 shadow-sm'
                }`}
              >
                <div>
                  <div className={`text-4xl sm:text-5xl font-bold tracking-tight mb-3 font-mono ${
                    stat.isHighlighted ? 'text-amber-300' : 'text-[#1D4263]'
                  }`}>
                    {stat.value}
                  </div>
                  <h3 className={`text-base font-bold mb-2 uppercase tracking-wide ${
                    stat.isHighlighted ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {stat.label}
                  </h3>
                </div>

                <p className={`text-xs font-light leading-relaxed pt-4 border-t ${
                  stat.isHighlighted ? 'text-zinc-300 border-white/15' : 'text-zinc-600 border-zinc-100'
                }`}>
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. PILARES DE VALOR */}
      <section className="py-16 sm:py-20 bg-white border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          
          {/* Bloque 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-4"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>SEGURIDAD & TRANSPARENCIA</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-zinc-900 leading-tight">
                Financiamiento Directo y Seguridad Jurídica
              </h2>
              
              <p className="text-sm sm:text-base font-light text-zinc-600 leading-relaxed">
                En Golden Inmobiliaria eliminamos las barreras de los bancos. Adquiere tu lote de campo y playa en cuotas fijas con 0% de interés, documentación en regla y el respaldo de un equipo comprometido con el avance real de las obras.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="rounded-3xl overflow-hidden shadow-lg border border-zinc-100">
                <img 
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" 
                  alt="Villa Club Malabrigo - Estilo Americano" 
                  className="w-full h-[260px] sm:h-[360px] object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Bloque 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 order-2 lg:order-1"
            >
              <div className="rounded-3xl overflow-hidden shadow-lg border border-zinc-100">
                <img 
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop" 
                  alt="Construcción en Puerto Malabrigo" 
                  className="w-full h-[260px] sm:h-[360px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-4 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-medium uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INNOVACIÓN</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-zinc-900 leading-tight">
                Planos Arquitectónicos Gratis para Cada Familia
              </h2>

              <p className="text-sm sm:text-base font-light text-zinc-600 leading-relaxed">
                Diseñamos planos completos para casas de estilo americano con porche, jardín, cochera y piscina. Te entregamos toda la planimetría sin costo alguno para que comiences a edificar cuando tú decidas.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* 4. SECCIONES REUTILIZADAS */}
      <AgentsSection />
      <TestimonialsSection />
      <FaqSection />
      <BlogSection />
      <CtaBanner />

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};
