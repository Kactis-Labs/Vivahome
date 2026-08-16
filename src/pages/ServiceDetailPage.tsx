import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { services } from '../data/realEstateData';
import { ArrowUpRight } from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const service = services.find((s) => s.id === id) || services[0];

  const whatsappMessage = encodeURIComponent(
    `Hola, me gustaría solicitar información y asesoría sobre el servicio "${service.title}" de R&R Inmobiliaria.`
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-[#FAF8F5] text-slate-900 font-sans selection:bg-[#C8A97E] selection:text-[#181614]"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#181614]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-[#181614]/60 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.035em] leading-[1.14] mb-4"
          >
            {service.title}
          </motion.h1>

          {/* Breadcrumbs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-xs font-normal text-slate-300"
          >
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-[#D4B996] font-semibold">Detalle del Servicio</span>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTENIDO EDITORIAL */}
      <main className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* COLUMNA IZQUIERDA */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-4"
            >
              <div className="rounded-2xl overflow-hidden shadow-sm bg-slate-100 border border-[#E8E4DC]">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-[280px] sm:h-[320px] object-cover"
                />
              </div>

              {/* Botón WhatsApp */}
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/51987654321?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#1C1917] hover:bg-[#2E2A25] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-md"
              >
                <span>Solicitar Asesoría para este Servicio</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4B996]" />
              </motion.a>
            </motion.div>

            {/* COLUMNA DERECHA */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8"
            >
              <div>
                <h3 className="text-xl font-bold tracking-tight text-[#1C1917] mb-3">
                  Introducción del Servicio
                </h3>
                <p className="text-sm font-normal text-slate-600 leading-relaxed">
                  {service.intro || service.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold tracking-tight text-[#1C1917] mb-3">
                  Nuestro Objetivo Principal
                </h3>
                <p className="text-sm font-normal text-slate-600 leading-relaxed">
                  {service.mainGoal || "Proporcionar certeza, transparencia y asesoría personalizada de alto nivel, guiando a cada cliente hacia el éxito inmobiliario con total confianza."}
                </p>
              </div>

              {service.process && service.process.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[#1C1917] mb-3">
                    Proceso de Acompañamiento
                  </h3>
                  <ol className="space-y-3 text-sm font-normal text-slate-600 leading-relaxed list-none">
                    {service.process.map((item, idx) => (
                      <li key={idx} className="flex items-baseline gap-2.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC]">
                        <span className="font-bold text-[#A8875D]">{item.step}.</span>
                        <span>
                          <strong className="font-semibold text-[#1C1917]">{item.title}:</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </motion.div>

          </div>

        </div>
      </main>

      {/* CTA Banner & Footer */}
      <CtaBanner />
      <Footer />
    </motion.div>
  );
};
