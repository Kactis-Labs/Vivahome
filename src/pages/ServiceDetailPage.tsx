import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { services } from '../data/realEstateData';
import { 
  ArrowUpRight, 
  Home, 
  Key, 
  TrendingUp, 
  Building, 
  ShieldCheck, 
  Users 
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
    `Hola, me gustaría solicitar información y asesoría sobre el servicio "${service.title}" de Megapolys Inmobiliaria.`
  );

  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'asesoria-compra': return <Home className="w-5 h-5" />;
      case 'venta-comercializacion': return <Key className="w-5 h-5" />;
      case 'tasacion-valorizacion': return <TrendingUp className="w-5 h-5" />;
      case 'consultoria-inversiones': return <Building className="w-5 h-5" />;
      case 'administracion-propiedades': return <ShieldCheck className="w-5 h-5" />;
      case 'gestion-alquileres': return <Users className="w-5 h-5" />;
      default: return <Home className="w-5 h-5" />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#00873D] selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER DINÁMICO WITH STAGGERED ENTRANCE */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#062316]">
        {/* Background Image with Dark Architectural Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062316] via-[#062316]/60 to-black/70" />
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

          {/* Breadcrumbs beneath title */}
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
            <span className="text-[#A3D224] font-semibold">Detalle del Servicio</span>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTENIDO EDITORIAL A 2 COLUMNAS (Layout exacto según captura) */}
      <main className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* COLUMNA IZQUIERDA (Imagen + Botón "Solicitar este Servicio") */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-4"
            >
              <div className="rounded-2xl overflow-hidden shadow-sm bg-slate-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-[280px] sm:h-[320px] object-cover"
                />
              </div>

              {/* Botón Verde Píldora "Solicitar este Servicio ↗" */}
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/51987654321?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#00873D] hover:bg-[#007333] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-[#00873D]/30"
              >
                <span>Solicitar este Servicio</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* COLUMNA DERECHA (Flujo Editorial Limpio con Scroll Reveal) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 space-y-8"
            >
              
              {/* 1. Intro Service */}
              <div>
                <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">
                  Intro Service
                </h3>
                <p className="text-sm font-light text-slate-600 leading-relaxed">
                  {service.intro || service.description}
                </p>
              </div>

              {/* 2. Our Main Goal */}
              <div>
                <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">
                  Nuestro Objetivo Principal (Our Main Goal)
                </h3>
                <p className="text-sm font-light text-slate-600 leading-relaxed">
                  {service.mainGoal || "Proporcionar certeza, transparencia y asesoría personalizada de alto nivel, guiando a cada cliente hacia el éxito inmobiliario con total confianza."}
                </p>
              </div>

              {/* 3. Our Simple Process (Numbered list) */}
              {service.process && service.process.length > 0 && (
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">
                    Nuestro Proceso Simple (Our Simple Process)
                  </h3>
                  <ol className="space-y-2 text-sm font-light text-slate-600 leading-relaxed list-none">
                    {service.process.map((item, idx) => (
                      <li key={idx} className="flex items-baseline gap-2">
                        <span className="font-normal text-slate-900">{idx + 1}.</span>
                        <span>
                          <strong className="font-medium text-slate-800">{item.title}:</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* 4. What Was Challenge */}
              <div>
                <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">
                  Desafíos Habituales (What Was Challenge)
                </h3>
                <p className="text-sm font-light text-slate-600 leading-relaxed">
                  {service.challenges && service.challenges[0]?.challenge
                    ? service.challenges[0].challenge
                    : "Guiar a los clientes a través de un mercado inmobiliario dinámico con inventario limitado, variaciones de precios y rigurosos requerimientos legales en Sunarp."}
                </p>
              </div>

              {/* 5. Key Solutions */}
              <div>
                <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">
                  Soluciones Clave (Key Solutions)
                </h3>
                <p className="text-sm font-light text-slate-600 leading-relaxed">
                  {service.challenges && service.challenges[0]?.solution
                    ? service.challenges[0].solution
                    : "Implementamos estrategias proactivas, estudios de títulos notariales exhaustivos y asesoría personalizada para asegurar transacciones fluidas y 100% seguras."}
                </p>
              </div>

            </motion.div>

          </div>

          {/* 3. SECCIÓN INFERIOR: OTROS SERVICIOS */}
          <div className="mt-20 sm:mt-28 pt-12 sm:pt-16 border-t border-slate-200">
            
            {/* Header inferior */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
              <div>
                <span className="text-xs font-medium text-emerald-600 uppercase tracking-wider block mb-1">
                  NUESTROS SERVICIOS
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-slate-900">
                  Soluciones Inmobiliarias Integrales
                </h2>
              </div>

              <Link 
                to="/servicios"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-xs sm:text-sm px-5 py-2.5 rounded-full transition-all shadow-sm self-start sm:self-auto"
              >
                <span>Ver Todos los Servicios</span>
                <ArrowUpRight className="w-4 h-4" />
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
                  className="group flex flex-col justify-between"
                >
                  {/* Imagen con icono flotante */}
                  <Link to={`/servicios/${otherServ.id}`} className="block relative aspect-[16/11] rounded-2xl overflow-hidden shadow-sm bg-slate-100">
                    <img 
                      src={otherServ.image} 
                      alt={otherServ.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    
                    {/* Floating Green Badge */}
                    <div className="absolute bottom-3 right-3 w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-lg group-hover:bg-emerald-600 transition-colors">
                      {getServiceIcon(otherServ.id)}
                    </div>
                  </Link>

                  {/* Texto inferior */}
                  <div className="pt-4">
                    <Link to={`/servicios/${otherServ.id}`}>
                      <h3 className="text-lg font-medium text-slate-900 group-hover:text-emerald-700 transition-colors mb-1.5 leading-snug">
                        {otherServ.title}
                      </h3>
                    </Link>
                    <p className="text-xs sm:text-sm font-light text-slate-500 leading-relaxed">
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
