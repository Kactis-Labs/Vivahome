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
    `Hola ${agent.name}, deseo agendar una visita guiada gratuita a los lotes de Puerto Malabrigo y Ascope con ECO HOGAR Inmobiliaria.`
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-emerald-500 selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[44vh] sm:min-h-[48vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0D2218]">
        {/* Background Image with Dark Architectural Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/banner-eco-hogar.png" 
            alt="Asesor Especialista ECO HOGAR Inmobiliaria" 
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D2218] via-[#0D2218]/60 to-black/75" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl font-normal text-white tracking-[-0.035em] leading-[1.14] mb-3"
          >
            Perfil del Asesor
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
            <Link to="/equipo" className="hover:text-white transition-colors">Equipo</Link>
            <span>/</span>
            <span className="text-emerald-400 font-medium truncate max-w-[200px]">{agent.name}</span>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTENIDO EDITORIAL */}
      <main className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back button */}
          <div className="mb-8 sm:mb-10">
            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-black bg-zinc-50 border border-zinc-200 px-4 py-2 rounded-full transition-colors shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* COLUMNA IZQUIERDA */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 space-y-6"
            >
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-zinc-200 bg-zinc-100">
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
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                <span>Contactar por WhatsApp</span>
              </motion.a>
            </motion.div>

            {/* COLUMNA DERECHA */}
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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 leading-tight mb-4">
                  {agent.name}
                </h2>
                <p className="text-sm sm:text-base font-light text-zinc-600 leading-relaxed">
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
                <h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-3">
                  Trayectoria en el Sector
                </h3>
                <p className="text-sm font-light text-zinc-600 leading-relaxed">
                  {agent.experience}
                </p>
              </motion.div>

              {/* 2. Mis Habilidades / Especialidades */}
              {agent.skills && agent.skills.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-4">
                    Especialidades & Funciones
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {agent.skills.map((skill, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ y: -3 }}
                        className="p-5 rounded-2xl bg-[#F8FAFC] border border-zinc-200 shadow-sm space-y-1.5 transition-all"
                      >
                        <h4 className="text-sm font-medium text-zinc-900">
                          {skill.title}
                        </h4>
                        <p className="text-xs font-light text-zinc-600 leading-relaxed">
                          {skill.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* 3. Cronología Profesional */}
              {agent.career && agent.career.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-xl font-medium tracking-tight text-zinc-900 mb-4">
                    Cronología Profesional
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {agent.career.map((stage, idx) => (
                      <motion.div 
                        key={idx}
                        whileHover={{ y: -3 }}
                        className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-1.5 transition-all"
                      >
                        <span className="text-sm font-bold text-emerald-700 block font-mono">
                          {stage.period}
                        </span>
                        <p className="text-xs font-light text-zinc-600 leading-relaxed">
                          {stage.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* 4. Canales de Contacto Directo */}
              <div className="pt-4 border-t border-zinc-200">
                <h3 className="text-base font-medium tracking-tight text-zinc-900 mb-4">
                  Contacto Directo:
                </h3>

                <div className="flex flex-wrap items-center gap-3">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`https://wa.me/${agent.phone.replace(/\D/g, '')}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500/15 hover:bg-emerald-500 hover:text-white text-emerald-800 text-xs font-medium transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </motion.a>

                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`mailto:${agent.email}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-100 hover:bg-[#0D2218] hover:text-white text-zinc-700 text-xs font-medium transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>{agent.email}</span>
                  </motion.a>

                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={`tel:${agent.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-100 hover:bg-[#0D2218] hover:text-white text-zinc-700 text-xs font-medium transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>{agent.phone}</span>
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
