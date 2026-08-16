import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { agents } from '../data/realEstateData';
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  MessageCircle 
} from 'lucide-react';

export const AgentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find agent by id or default to first
  const agent = agents.find((a) => a.id === id) || agents[0];

  const whatsappMessage = encodeURIComponent(
    `Hola ${agent.name}, deseo agendar una consulta personalizada con usted sobre oportunidades inmobiliarias en Megapolys Inmobiliaria.`
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#00873D] selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER WITH STAGGERED ENTRANCE */}
      <section className="relative min-h-[44vh] sm:min-h-[48vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#062316]">
        {/* Background Image with Dark Architectural Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Asesor Inmobiliario Megapolys Inmobiliaria" 
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
            className="text-3xl sm:text-5xl font-bold text-white tracking-[-0.035em] leading-[1.14] mb-3"
          >
            {agent.name}
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
            <Link to="/equipo" className="hover:text-white transition-colors">Equipo</Link>
            <span>/</span>
            <span className="text-[#A3D224] font-semibold truncate max-w-[200px]">{agent.name}</span>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTENIDO EDITORIAL A 2 COLUMNAS */}
      <main className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back button */}
          <div className="mb-8 sm:mb-10">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 hover:text-emerald-700 bg-slate-50 border border-slate-200 px-4 py-2 rounded-full transition-colors shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* COLUMNA IZQUIERDA (Foto Vertical del Broker) */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-slate-100">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-[360px] sm:h-[480px] object-cover"
                />
              </div>

              {/* Botón rápido WhatsApp */}
              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${agent.phone.replace(/\D/g, '')}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span>Contactar por WhatsApp</span>
              </motion.a>
            </motion.div>

            {/* COLUMNA DERECHA (Información Editorial & Trayectoria) */}
            <div className="lg:col-span-7 space-y-10">
              
              {/* Header Nombre & Cargo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                  {agent.role}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 leading-tight mb-4">
                  {agent.name}
                </h2>
                <p className="text-sm sm:text-base font-light text-slate-600 leading-relaxed">
                  {agent.bio}
                </p>
              </motion.div>

              {/* 1. Mi Experiencia */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">
                  Mi Experiencia (My Experience)
                </h3>
                <p className="text-sm font-light text-slate-600 leading-relaxed">
                  {agent.experience}
                </p>
              </motion.div>

              {/* 2. Mis Habilidades / Especialidades (Grid 2x2 con Stagger) */}
              {agent.skills && agent.skills.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-4">
                    Especialidades & Competencias (My Skills)
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {agent.skills.map((skill, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ y: -3 }}
                        className="p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-sm space-y-1.5 transition-all"
                      >
                        <h4 className="text-sm font-medium text-slate-900">
                          {skill.title}
                        </h4>
                        <p className="text-xs font-light text-slate-600 leading-relaxed">
                          {skill.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* 3. Trayectoria Profesional (Línea temporal 2x2) */}
              {agent.career && agent.career.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-medium tracking-tight text-slate-900 mb-4">
                    Trayectoria Profesional (My Career)
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {agent.career.map((stage, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ y: -3 }}
                        className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-1.5 transition-all"
                      >
                        <span className="text-sm font-semibold text-emerald-700 block">
                          {stage.period}
                        </span>
                        <p className="text-xs font-light text-slate-600 leading-relaxed">
                          {stage.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* 4. Canales de Contacto Directo */}
              <div className="pt-4 border-t border-slate-200">
                <h3 className="text-base font-medium tracking-tight text-slate-900 mb-4">
                  Sígueme & Contáctame Directamente :
                </h3>

                <div className="flex flex-wrap items-center gap-3">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/${agent.phone.replace(/\D/g, '')}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 text-xs font-medium transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </motion.a>

                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${agent.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 text-xs font-medium transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{agent.email}</span>
                  </motion.a>

                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`tel:${agent.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 text-xs font-medium transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{agent.phone}</span>
                  </motion.a>

                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 text-xs font-medium transition-colors"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    <span>LinkedIn</span>
                  </motion.a>
                </div>
              </div>

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
