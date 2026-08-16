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

  const agent = agents.find((a) => a.id === id) || agents[0];

  const whatsappMessage = encodeURIComponent(
    `Hola ${agent.name}, deseo agendar una consulta personalizada con usted sobre proyectos residenciales en R&R Inmobiliaria.`
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
      <section className="relative min-h-[44vh] sm:min-h-[48vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#181614]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Asesor Especialista R&R Inmobiliaria" 
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
            <span className="text-[#D4B996] font-semibold truncate max-w-[200px]">{agent.name}</span>
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
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#A8875D] bg-[#FAF8F5] border border-[#E8E4DC] px-4 py-2 rounded-full transition-colors shadow-sm cursor-pointer"
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
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-[#E8E4DC] bg-slate-100">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-[380px] sm:h-[460px] object-cover"
                />
              </div>

              {/* Action Buttons Box */}
              <div className="bg-[#FAF8F5] border border-[#E8E4DC] rounded-2xl p-5 space-y-3 shadow-sm">
                <a 
                  href={`https://wa.me/${agent.phone.replace(/\D/g, '')}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1C1917] hover:bg-[#2E2A25] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#D4B996]" />
                  <span>Contactar por WhatsApp</span>
                </a>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#E8E4DC]">
                  <a 
                    href={`tel:${agent.phone.replace(/\s+/g, '')}`}
                    className="flex items-center justify-center gap-1.5 bg-white border border-[#E8E4DC] text-slate-800 hover:text-[#A8875D] text-xs font-semibold py-2.5 rounded-full transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#A8875D]" />
                    <span>Llamar</span>
                  </a>
                  <a 
                    href={`mailto:${agent.email}`}
                    className="flex items-center justify-center gap-1.5 bg-white border border-[#E8E4DC] text-slate-800 hover:text-[#A8875D] text-xs font-semibold py-2.5 rounded-full transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#A8875D]" />
                    <span>Correo</span>
                  </a>
                </div>
              </div>
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
                <span className="text-xs font-bold text-[#A8875D] uppercase tracking-wider block mb-1">
                  PERFIL PROFESIONAL
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#1C1917] mb-2">
                  {agent.name}
                </h2>
                <p className="text-sm font-semibold text-[#A8875D] mb-4">
                  {agent.role}
                </p>
                <p className="text-sm font-normal text-slate-600 leading-relaxed">
                  {agent.bio}
                </p>
              </div>

              {agent.experience && (
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[#1C1917] mb-3">
                    Experiencia & Trayectoria
                  </h3>
                  <p className="text-sm font-normal text-slate-600 leading-relaxed">
                    {agent.experience}
                  </p>
                </div>
              )}

              {agent.skills && agent.skills.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-[#1C1917] mb-4">
                    Áreas de Especialización
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {agent.skills.map((skill, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E4DC]">
                        <h4 className="text-xs font-bold text-[#1C1917] mb-1">{skill.title}</h4>
                        <p className="text-xs font-normal text-slate-500 leading-relaxed">{skill.description}</p>
                      </div>
                    ))}
                  </div>
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
