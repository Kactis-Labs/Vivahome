import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { AgentsSection } from '../components/AgentsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FaqSection } from '../components/FaqSection';
import { BlogSection } from '../components/BlogSection';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { ShieldCheck, Sparkles, Trees } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const statsList = [
    {
      value: "1,200+",
      label: "Lotes Entregados",
      desc: "Familias e inversionistas que ya son propietarios de su terreno en La Libertad",
      isHighlighted: false
    },
    {
      value: "S/ 14,900",
      label: "Precio al Contado",
      desc: "Lanzamientos exclusivos en Puerto Malabrigo accesibles para toda la familia",
      isHighlighted: true
    },
    {
      value: "100%",
      label: "Financiamiento Directo",
      desc: "Sin intermediación bancaria, sin avales ni requisitos imposibles: solo con DNI",
      isHighlighted: false
    },
    {
      value: "10+",
      label: "Años en el Norte",
      desc: "Trayectoria en habilitación de condominios campestres y de playa en Ascope",
      isHighlighted: true
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-[#F8FAFC] text-zinc-900 font-sans selection:bg-emerald-500 selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0D2218]">
        {/* Background Image with Dark Architectural Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
            alt="ECO HOGAR Inmobiliaria - Nuestra Historia" 
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2218] via-[#0D2218]/60 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-[-0.035em] leading-[1.12]"
          >
            Haciendo Realidad el Sueño <br className="hidden sm:block" />
            <span className="font-medium text-emerald-300">del Lote Propio en La Libertad</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-xs font-light text-zinc-300 mt-4"
          >
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <span className="text-emerald-400 font-medium">Sobre Nosotros</span>
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
              <strong className="font-semibold text-emerald-700">ECO HOGAR Inmobiliaria</strong> nació con la misión de democratizar el acceso al terreno propio, permitiendo que miles de familias adquieran lotes de campo y playa en Puerto Malabrigo y Ascope con financiamiento directo y total seguridad jurídica.
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
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                  stat.isHighlighted 
                    ? 'bg-[#0D2218] text-white border-emerald-500/30 shadow-xl' 
                    : 'bg-white text-zinc-900 border-zinc-200 shadow-sm'
                }`}
              >
                <div>
                  <div className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2 font-mono ${
                    stat.isHighlighted ? 'text-emerald-300' : 'text-[#0D2218]'
                  }`}>
                    {stat.value}
                  </div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider mb-2">
                    {stat.label}
                  </h3>
                </div>

                <p className={`text-xs font-light leading-relaxed border-t pt-3 ${
                  stat.isHighlighted ? 'text-zinc-300 border-white/10' : 'text-zinc-500 border-zinc-100'
                }`}>
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. PROPÓSITO, VISIÓN Y VALORES */}
      <section className="py-16 sm:py-24 bg-white border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Propósito */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-zinc-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Trees className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900">Naturaleza & Bienestar</h3>
              <p className="text-xs sm:text-sm font-light text-zinc-600 leading-relaxed">
                Diseñamos condominios campestres y de playa con pórticos de ingreso, amplias áreas verdes y espacios recreativos para que tus hijos crezcan en un entorno saludable.
              </p>
            </div>

            {/* Inclusión Financiera */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-zinc-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900">Financiamiento para Todos</h3>
              <p className="text-xs sm:text-sm font-light text-zinc-600 leading-relaxed">
                Eliminamos las barreras bancarias. Con nosotros compras tu lote únicamente presentando tu DNI, pagando una inicial cómoda y cuotas mensuales fijas a tu medida.
              </p>
            </div>

            {/* Legalidad */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-zinc-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-zinc-900">Seguridad Jurídica</h3>
              <p className="text-xs sm:text-sm font-light text-zinc-600 leading-relaxed">
                Trabajamos con partidas registrales claras, contratos notariales y expedientes técnicos visados para garantizar la protección absoluta de tu inversión familiar.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. AGENTES & EQUIPO */}
      <AgentsSection />

      {/* 5. TESTIMONIOS */}
      <TestimonialsSection />

      {/* 6. FAQ & BLOG */}
      <FaqSection />
      <BlogSection />

      {/* 7. CTA & FOOTER */}
      <CtaBanner />
      <Footer />
    </motion.div>
  );
};
