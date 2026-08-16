import React from 'react';
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
      value: "10+",
      label: "Años de Experiencia",
      desc: "Liderando proyectos de habilitación urbana y campo en el norte del Perú",
      isHighlighted: false
    },
    {
      value: "1.2k+",
      label: "Familias Propietarias",
      desc: "Lotes entregados con financiamiento directo 0% interés y planos gratuitos",
      isHighlighted: true
    },
    {
      value: "500+",
      label: "Lotes en Desarrollo",
      desc: "Terrenos desde 252m² hasta 500m² en Villa Club Malabrigo",
      isHighlighted: false
    },
    {
      value: "100%",
      label: "Sin Intereses",
      desc: "Facilidades de pago directo con solo DNI y avance de obras semanal",
      isHighlighted: true
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#E5A020] selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. ABOUT HERO BANNER */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#1D4263]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Villa Club Malabrigo - Golden Inmobiliaria" 
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
            Nuestra Trayectoria en <br className="hidden sm:block" />
            <span className="font-medium text-amber-400">Golden Inmobiliaria</span>
          </motion.h1>
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
            <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-slate-900 leading-[1.25] tracking-[-0.03em]">
              En Golden Inmobiliaria creamos comunidades residenciales de campo y playa en Puerto Malabrigo con diseño de Estilo Americano, entrega de planos gratuitos y financiamiento directo 100% sin intereses bancarios.
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
                    ? 'bg-[#1D4263] text-white shadow-xl shadow-slate-900/20'
                    : 'bg-white text-slate-900 border border-slate-200 shadow-sm'
                }`}
              >
                <div>
                  <div className={`text-4xl sm:text-5xl font-bold tracking-tight mb-3 font-mono ${
                    stat.isHighlighted ? 'text-amber-400' : 'text-[#1D4263]'
                  }`}>
                    {stat.value}
                  </div>
                  <h3 className={`text-base font-semibold mb-2 ${
                    stat.isHighlighted ? 'text-white' : 'text-slate-900'
                  }`}>
                    {stat.label}
                  </h3>
                </div>

                <p className={`text-xs font-light leading-relaxed pt-4 border-t ${
                  stat.isHighlighted ? 'text-slate-200 border-white/20' : 'text-slate-500 border-slate-100'
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
                <ShieldCheck className="w-3.5 h-3.5 text-[#E5A020]" />
                <span>EXCELENCIA</span>
              </div>
              
              <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-slate-900 leading-tight">
                Comprometidos con el Futuro de tu Familia
              </h2>
              
              <p className="text-sm sm:text-base font-light text-slate-600 leading-relaxed">
                Cada lote en Villa Club Malabrigo cuenta con documentación verificada, habilitación progresiva con avance de obras semanal y entrega de planos arquitectónicos estilo americano totalmente gratis.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                  alt="Asesoría Golden Inmobiliaria" 
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
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Construyendo en Puerto Malabrigo" 
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
                <Sparkles className="w-3.5 h-3.5 text-[#E5A020]" />
                <span>FUTURO</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-slate-900 leading-tight">
                El Único Proyecto con Estilo Americano
              </h2>

              <p className="text-sm sm:text-base font-light text-slate-600 leading-relaxed">
                Desarrollamos una propuesta única en Puerto Malabrigo con áreas sociales, pórtico de ingreso, áreas verdes, zona de parrillas y lotes de 252m², 300m² y 500m² con financiamiento directo sin intereses.
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
