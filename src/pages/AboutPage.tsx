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
      value: "+8",
      label: "Años de Experiencia",
      desc: "Líderes y pioneros en proyectos inmobiliarios en Puerto Malabrigo",
      isHighlighted: false
    },
    {
      value: "+15",
      label: "Proyectos Desarrollados",
      desc: "Condominios residenciales de campo y playa en La Libertad",
      isHighlighted: true
    },
    {
      value: "+1,200",
      label: "Lotes Entregados",
      desc: "Familias e inversionistas con su terreno propio frente al mar",
      isHighlighted: false
    },
    {
      value: "100%",
      label: "Independizados",
      desc: "Seguridad jurídica en Sunarp y crédito directo hasta en 48 meses",
      isHighlighted: true
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#F5921E] selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. ABOUT HERO BANNER */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#162842]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" 
            alt="Puerto Malabrigo - Plus Inmobiliaria" 
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#162842] via-[#162842]/60 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.035em] leading-[1.12]"
          >
            Líderes y Pioneros en <br className="hidden sm:block" />
            <span className="font-extrabold text-[#F5921E]">Terrenos de Campo y Playa</span>
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
            <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#162842] leading-[1.25] tracking-[-0.03em]">
              <strong className="font-bold text-[#F5921E]">Plus Inmobiliaria</strong> es una empresa líder y pionera en proyectos inmobiliarios en Puerto Malabrigo. Con más de 8 años de experiencia, hacemos posible el sueño del lote propio de campo y playa mediante <strong className="font-semibold text-slate-900">condominios con Club House, 100% independizados y crédito directo accesible</strong>.
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
                    ? 'bg-[#162842] text-white shadow-xl shadow-black/20 border border-white/10'
                    : 'bg-white text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  <div className={`text-4xl sm:text-5xl font-extrabold tracking-tight mb-3 ${
                    stat.isHighlighted ? 'text-[#F5921E]' : 'text-[#162842]'
                  }`}>
                    {stat.value}
                  </div>
                  <h3 className={`text-base font-bold mb-2 ${
                    stat.isHighlighted ? 'text-white' : 'text-[#162842]'
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

      {/* 3. PILARES DE VALOR */}
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
              <span className="text-xs font-bold text-[#F5921E] uppercase tracking-wider block">
                COMPROMISO & FACILIDADES
              </span>
              
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#162842] leading-tight">
                Crédito Directo a Sola Firma hasta en 48 Meses
              </h2>
              
              <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed">
                En <strong className="text-slate-900 font-semibold">Plus Inmobiliaria</strong> creemos que adquirir un terreno no debe ser un trámite complicado. Ofrecemos financiamiento directo sin bancos, con cuotas desde S/ 799 y entrega de posesión.
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
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop" 
                  alt="Residencial Nueva Asia - Plus Inmobiliaria" 
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
