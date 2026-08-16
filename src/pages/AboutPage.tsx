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
      value: "14+",
      label: "Años de Trayectoria",
      desc: "Liderando operaciones en el sector inmobiliario residencial, comercial y corporativo",
      isHighlighted: false
    },
    {
      value: "S/ 250M+",
      label: "Patrimonio Gestionado",
      desc: "Activos estructurados y asesorados con alta rentabilidad y plusvalía en el Perú",
      isHighlighted: true
    },
    {
      value: "500+",
      label: "Inversionistas Asesorados",
      desc: "Familias, fondos y empresas con inversiones blindadas y seguras",
      isHighlighted: false
    },
    {
      value: "100%",
      label: "Seguridad Legal",
      desc: "Estudio de títulos minucioso y convenios directos con banca privada y notarías",
      isHighlighted: true
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-[#F8FAFC] text-zinc-900 font-sans selection:bg-lime-500 selection:text-black"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. ABOUT HERO BANNER */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#0C130E]">
        {/* Background Image with Dark Architectural Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Arquitectura Moderna y Residencia de Lujo - GyS Servicios Inmobiliarios" 
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C130E] via-[#0C130E]/60 to-black/75" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-[-0.035em] leading-[1.12]"
          >
            Especialistas en Construir Valor <br className="hidden sm:block" />
            <span className="font-medium text-white">para tu Patrimonio Inmobiliario</span>
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
            <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-zinc-900 leading-[1.25] tracking-[-0.03em]">
              En GyS Servicios Inmobiliarios transformamos experiencia, estrategia y conocimiento del mercado en resultados que generan patrimonio. Asesoramos en cada decisión inmobiliaria, legal y financiera con transparencia y rigor técnico.
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
                    ? 'bg-[#0C130E] text-white border border-lime-500/30 shadow-xl'
                    : 'bg-white text-zinc-900 border border-zinc-200 shadow-sm'
                }`}
              >
                <div>
                  <div className={`text-4xl sm:text-5xl font-bold tracking-tight mb-3 font-mono ${
                    stat.isHighlighted ? 'text-lime-400' : 'text-[#0C130E]'
                  }`}>
                    {stat.value}
                  </div>
                  <h3 className={`text-base font-semibold mb-2 ${
                    stat.isHighlighted ? 'text-white' : 'text-zinc-900'
                  }`}>
                    {stat.label}
                  </h3>
                </div>

                <p className={`text-xs font-light leading-relaxed pt-4 border-t ${
                  stat.isHighlighted ? 'text-zinc-300 border-white/10' : 'text-zinc-500 border-zinc-100'
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
              <span className="text-xs font-semibold text-lime-700 uppercase tracking-wider block mb-1">
                SEGURIDAD JURÍDICA
              </span>
              
              <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-black leading-tight">
                Comprometidos con la Protección de tu Patrimonio
              </h2>
              
              <p className="text-sm sm:text-base font-light text-zinc-600 leading-relaxed">
                Cada inmueble en nuestra cartera pasa por un riguroso estudio de títulos en Sunarp, verificación de gravámenes y saneamiento legal completo. Garantizamos que tu inversión con GyS Servicios Inmobiliarios se realice con absoluta transparencia y respaldo notarial.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-zinc-200">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                  alt="Asesoría Legal Inmobiliaria Profesional GyS" 
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
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-zinc-200">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" 
                  alt="Estrategia e Inversión Inmobiliaria con GyS" 
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
              <span className="text-xs font-semibold text-lime-700 uppercase tracking-wider block mb-1">
                ESTRATEGIA PATRIMONIAL
              </span>

              <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-black leading-tight">
                Modelado Financiero & Rentabilidad Continua
              </h2>

              <p className="text-sm sm:text-base font-light text-zinc-600 leading-relaxed">
                Seleccionamos propiedades en las zonas con mayor proyección y plusvalía de Lima Top y polos comerciales. Diseñamos esquemas de apalancamiento y rentas que optimizan el retorno de tu inversión a corto, mediano y largo plazo.
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
