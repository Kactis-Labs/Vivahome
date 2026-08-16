import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { services } from '../data/realEstateData';
import { 
  ArrowUpRight, 
  TrendingUp, 
  ShieldCheck, 
  Building 
} from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find current service by id or fallback to first
  const service = services.find((s) => s.id === id) || services[0];

  // Related services (exclude current)
  const otherServices = services
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hola, me gustaría solicitar información y asesoría sobre el servicio "${service.title}" de GyS Servicios Inmobiliarios.`
  );

  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'manejo-inversiones-inmobiliarias': return <TrendingUp className="w-5 h-5" />;
      case 'asesoria-legal-saneamiento': return <ShieldCheck className="w-5 h-5" />;
      case 'asesoria-financiera-hipotecaria': return <Building className="w-5 h-5" />;
      default: return <TrendingUp className="w-5 h-5" />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-lime-500 selection:text-black"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0C130E]">
        {/* Background Image with Dark Architectural Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C130E] via-[#0C130E]/60 to-black/75" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-[-0.035em] leading-[1.14] mb-4"
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
            <span className="text-lime-400 font-medium">Detalle del Servicio</span>
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
              <div className="rounded-2xl overflow-hidden shadow-sm bg-zinc-100 border border-zinc-200">
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
                className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-all shadow-md"
              >
                <span>Solicitar este Servicio</span>
                <ArrowUpRight className="w-4 h-4" />
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
              
              {/* 1. Intro Service */}
              <div>
                <h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">
                  Descripción del Servicio
                </h3>
                <p className="text-sm font-light text-zinc-600 leading-relaxed">
                  {service.intro || service.description}
                </p>
              </div>

              {/* 2. Our Main Goal */}
              <div>
                <h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">
                  Objetivo Estratégico
                </h3>
                <p className="text-sm font-light text-zinc-600 leading-relaxed">
                  {service.mainGoal || "Construir valor y proporcionar certeza, transparencia y asesoría personalizada de alto nivel, guiando a cada cliente hacia el éxito inmobiliario con total confianza."}
                </p>
              </div>

              {/* 3. Our Simple Process */}
              {service.process && service.process.length > 0 && (
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">
                    Metodología & Proceso de Trabajo
                  </h3>
                  <ol className="space-y-3 text-sm font-light text-zinc-600 leading-relaxed list-none">
                    {service.process.map((item, idx) => (
                      <li key={idx} className="flex items-baseline gap-2.5">
                        <span className="font-semibold text-lime-700 shrink-0">{item.step}.</span>
                        <span>
                          <strong className="font-medium text-zinc-900">{item.title}:</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* 4. What Was Challenge */}
              <div>
                <h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">
                  Desafíos Habituales del Mercado
                </h3>
                <p className="text-sm font-light text-zinc-600 leading-relaxed">
                  {service.challenges && service.challenges[0]?.challenge
                    ? service.challenges[0].challenge
                    : "Guiar a los clientes a través de un mercado inmobiliario complejo con fluctuaciones de precios, vacancia y rigurosos requerimientos legales en Sunarp."}
                </p>
              </div>

              {/* 5. Key Solutions */}
              <div>
                <h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">
                  Soluciones Implementadas por GyS
                </h3>
                <p className="text-sm font-light text-zinc-600 leading-relaxed">
                  {service.challenges && service.challenges[0]?.solution
                    ? service.challenges[0].solution
                    : "Implementamos estrategias proactivas, estudios de títulos notariales exhaustivos y asesoría financiera personalizada para asegurar transacciones fluidas y 100% seguras."}
                </p>
              </div>

            </motion.div>

          </div>

          {/* 3. SECCIÓN INFERIOR: OTROS SERVICIOS */}
          <div className="mt-20 sm:mt-28 pt-12 sm:pt-16 border-t border-zinc-200">
            
            {/* Header inferior */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
              <div>
                <span className="text-xs font-semibold text-lime-700 uppercase tracking-wider block mb-1">
                  NUESTROS SERVICIOS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-black">
                  Soluciones Inmobiliarias Integrales
                </h2>
              </div>

              <Link 
                to="/servicios"
                className="inline-flex items-center gap-2 bg-[#0C130E] hover:bg-zinc-800 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow-sm self-start sm:self-auto"
              >
                <span>Ver Todos los Servicios</span>
                <ArrowUpRight className="w-4 h-4 text-lime-400" />
              </Link>
            </div>

            {/* Grid 3 tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {otherServices.map((otherServ, idx) => (
                <motion.div 
                  key={otherServ.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group bg-[#F8FAFC] border border-zinc-200 rounded-3xl p-5 flex flex-col justify-between hover:border-lime-500/40 hover:shadow-lg transition-all"
                >
                  <Link to={`/servicios/${otherServ.id}`} className="block relative aspect-[16/10] rounded-2xl overflow-hidden shadow-sm bg-zinc-100 mb-4">
                    <img 
                      src={otherServ.image} 
                      alt={otherServ.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    
                    <div className="absolute bottom-3 right-3 w-9 h-9 rounded-full bg-lime-500 text-black flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      {getServiceIcon(otherServ.id)}
                    </div>
                  </Link>

                  <div>
                    <Link to={`/servicios/${otherServ.id}`}>
                      <h3 className="text-base font-medium text-zinc-900 group-hover:text-lime-700 transition-colors mb-1.5 leading-snug">
                        {otherServ.title}
                      </h3>
                    </Link>
                    <p className="text-xs font-light text-zinc-600 leading-relaxed line-clamp-2">
                      {otherServ.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </main>

      {/* Reused CTA Banner */}
      <CtaBanner />

      {/* Reused Footer */}
      <Footer />
    </motion.div>
  );
};
