import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { 
  ArrowLeft, 
  HelpCircle, 
  PhoneCall 
} from 'lucide-react';
import { services } from '../data/realEstateData';

export const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/servicios" replace />;
  }

  const otherServices = services.filter((s) => s.id !== id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-amber-500 selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#1D4263]">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1D4263] via-[#1D4263]/60 to-black/75" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl sm:text-4xl lg:text-5xl font-normal text-white tracking-[-0.035em] leading-[1.18] mb-4"
          >
            {service.title}
          </motion.h1>

          {/* Breadcrumbs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center justify-center gap-2 text-xs font-light text-zinc-300"
          >
            <Link to="/" className="hover:text-white transition-colors">Inicio</Link>
            <span>/</span>
            <Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link>
            <span>/</span>
            <span className="text-amber-400 font-medium">Detalle</span>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTENIDO PRINCIPAL */}
      <main className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Botón Volver */}
          <div className="mb-8 sm:mb-12">
            <Link 
              to="/servicios"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-600 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al Catálogo de Servicios</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            
            {/* COLUMNA IZQUIERDA: CONTENIDO PRINCIPAL */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Sección: Introducción & Propósito */}
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
                  RESUMEN DEL SERVICIO
                </span>
                <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-sm sm:text-base font-light text-zinc-700 leading-relaxed mb-4">
                  {service.intro || service.description}
                </p>
                {service.mainGoal && (
                  <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-zinc-200 text-xs sm:text-sm font-light text-zinc-700 leading-relaxed">
                    <strong className="font-semibold text-zinc-900 block mb-1">Nuestro Compromiso:</strong>
                    {service.mainGoal}
                  </div>
                )}
              </div>

              {/* Sección: Metodología Paso a Paso */}
              {service.process && service.process.length > 0 && (
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
                    CÓMO FUNCIONA EL PROCESO
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-6">
                    Paso a Paso de la Adquisición
                  </h3>

                  <div className="space-y-4">
                    {service.process.map((step, idx) => (
                      <div 
                        key={idx}
                        className="p-5 sm:p-6 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex items-start gap-4"
                      >
                        <span className="w-9 h-9 rounded-xl bg-[#1D4263] text-amber-300 font-bold font-mono text-sm flex items-center justify-center shrink-0">
                          {step.step}
                        </span>
                        <div>
                          <h4 className="text-sm sm:text-base font-medium text-zinc-900 mb-1">
                            {step.title}
                          </h4>
                          <p className="text-xs sm:text-sm font-light text-zinc-600 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sección: Soluciones a Desafíos Comunes */}
              {service.challenges && service.challenges.length > 0 && (
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
                    TRANSPARENCIA & GARANTÍA
                  </span>
                  <h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-6">
                    Desafíos del Mercado y Cómo los Resolvemos
                  </h3>

                  <div className="space-y-4">
                    {service.challenges.map((item, idx) => (
                      <div 
                        key={idx}
                        className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-3"
                      >
                        <div className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-red-600">
                          <HelpCircle className="w-4 h-4 shrink-0 mt-0.5" />
                          <span>Desafío: {item.challenge}</span>
                        </div>
                        <div className="flex items-start gap-2.5 text-xs sm:text-sm font-light text-zinc-700 pl-6 border-l-2 border-[#E5A020]">
                          <span>Solución Golden Inmobiliaria: {item.solution}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* COLUMNA DERECHA: SIDEBAR DE CONTACTO */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Tarjeta de Contacto Inmediato */}
              <div className="bg-[#1D4263] text-white rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                  ATENCIÓN PERSONALIZADA
                </span>
                <h3 className="text-xl font-medium tracking-tight text-white">
                  ¿Deseas Asesoría sobre Este Servicio?
                </h3>
                <p className="text-xs font-light text-zinc-300 leading-relaxed">
                  Comunícate directamente con nuestro equipo de ventas para resolver cualquier duda sobre Villa Club Malabrigo o agendar tu visita.
                </p>

                <div className="pt-2 space-y-3">
                  <a 
                    href="https://wa.me/51987654321?text=Hola%20Golden%20Inmobiliaria,%20solicito%20asesor%C3%ADa%20sobre%20el%20servicio:%20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#E5A020] hover:bg-[#D97706] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span>Consultar por WhatsApp</span>
                  </a>

                  <Link 
                    to="/contacto"
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-colors"
                  >
                    <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                    <span>Solicitar una Llamada</span>
                  </Link>
                </div>
              </div>

              {/* Otros Servicios */}
              <div className="bg-[#F8FAFC] border border-zinc-200 rounded-3xl p-6 space-y-4">
                <h4 className="text-sm font-bold text-zinc-900 uppercase tracking-wider">
                  Otros Servicios
                </h4>
                <div className="space-y-2.5">
                  {otherServices.map((os) => (
                    <Link
                      key={os.id}
                      to={`/servicios/${os.id}`}
                      className="block p-3 rounded-xl bg-white border border-zinc-100 hover:border-amber-500/40 transition-colors text-xs font-medium text-zinc-800 hover:text-amber-600"
                    >
                      {os.title}
                    </Link>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* CTA & FOOTER */}
      <CtaBanner />
      <Footer />
    </motion.div>
  );
};
