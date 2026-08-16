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
      value: "+14",
      label: "Años de Experiencia",
      desc: "Liderando operaciones en desarrollo inmobiliario y construcción residencial de alto nivel",
      isHighlighted: false
    },
    {
      value: "+20",
      label: "Proyectos Terminados",
      desc: "Edificios boutique y departamentos entregados con excelencia constructiva en el Perú",
      isHighlighted: true
    },
    {
      value: "+420",
      label: "Familias Felices",
      desc: "Hogares consolidados con asesoría personalizada y respaldo integral",
      isHighlighted: false
    },
    {
      value: "100%",
      label: "Seguridad Jurídica",
      desc: "Partidas independizadas en Sunarp y asesoría notarial garantizada",
      isHighlighted: true
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-[#FAF8F5] text-slate-900 font-sans selection:bg-[#C8A97E] selection:text-[#181614]"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. ABOUT HERO BANNER */}
      <section className="relative min-h-[55vh] sm:min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#181614]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Arquitectura Moderna y Proyectos - R&R Inmobiliaria" 
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-[#181614]/60 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.035em] leading-[1.12]"
          >
            Nuestra Trayectoria en Casos <br className="hidden sm:block" />
            <span className="font-semibold text-white">de Éxito Inmobiliario</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. MANIFIESTO & MÉTRICAS */}
      <section className="py-16 sm:py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Manifesto Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mb-12 sm:mb-16"
          >
            <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1C1917] leading-[1.25] tracking-[-0.03em]">
              <strong className="font-bold text-[#A8875D]">R&R Inmobiliaria</strong> nació con la visión de elevar el estándar residencial en el Perú. Con más de 14 años de experiencia y 20 proyectos concluidos, creamos espacios que trascienden mediante <strong className="font-semibold text-slate-900">diseño de vanguardia, solidez constructiva y total seguridad jurídica</strong>.
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
                    ? 'bg-[#181614] text-white shadow-xl shadow-black/20 border border-[#38332D]'
                    : 'bg-white text-slate-900 border border-[#E8E4DC] shadow-sm'
                }`}
              >
                <div>
                  <div className={`text-4xl sm:text-5xl font-bold tracking-tight mb-3 ${
                    stat.isHighlighted ? 'text-[#D4B996]' : 'text-[#1C1917]'
                  }`}>
                    {stat.value}
                  </div>
                  <h3 className={`text-base font-bold mb-2 ${
                    stat.isHighlighted ? 'text-white' : 'text-[#1C1917]'
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
      <section className="py-16 sm:py-20 bg-white border-t border-[#E8E4DC]">
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
              <span className="text-xs font-bold text-[#A8875D] uppercase tracking-wider block">
                EXCELENCIA & RIGOR CONSTRUCTIVO
              </span>
              
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1C1917] leading-tight">
                Comprometidos con la Seguridad de tu Patrimonio
              </h2>
              
              <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed">
                Cada proyecto desarrollado por <strong className="text-slate-900 font-semibold">R&R Inmobiliaria</strong> cuenta con respaldo bancario, saneamiento legal integral y estudio de títulos en Sunarp. Garantizamos una adquisición segura, transparente y con alto retorno de inversión.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#E8E4DC]">
                <img 
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Asesoría Inmobiliaria Profesional R&R Inmobiliaria" 
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
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#E8E4DC]">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Construyendo el Futuro con R&R Inmobiliaria" 
                  className="w-full h-[260px] sm:h-[360px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 order-1 lg:order-2 space-y-4"
            >
              <span className="text-xs font-bold text-[#A8875D] uppercase tracking-wider block">
                ARQUITECTURA DE VANGUARDIA
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1C1917] leading-tight">
                Espacios Diseñados para Elevar tu Estilo de Vida
              </h2>

              <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed">
                Nuestros proyectos emblemáticos como <strong className="text-slate-900 font-semibold">SIENNA</strong> y <strong className="text-slate-900 font-semibold">ORIGEN</strong> integran distribuciones inteligentes, acabados nobles y amenidades funcionales como Coworking, BBQ y Lounge social.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Agents, Testimonials, FAQ & Blog Sections */}
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
