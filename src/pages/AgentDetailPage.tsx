import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Award,
  Calendar
} from 'lucide-react';
import { agents } from '../data/realEstateData';

export const AgentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const agent = agents.find((a) => a.id === id);

  if (!agent) {
    return <Navigate to="/equipo" replace />;
  }

  const whatsappMessage = encodeURIComponent(
    `Hola ${agent.name}, vi tu perfil en Golden Inmobiliaria y deseo recibir información y precios de preventa sobre Villa Club Malabrigo.`
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-[#F8FAFC] text-zinc-900 font-sans selection:bg-amber-500 selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[44vh] sm:min-h-[48vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#1D4263]">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Asesor Especialista Golden Inmobiliaria" 
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
            className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-[-0.035em] leading-[1.12] mb-4"
          >
            {agent.name}
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
            <span className="text-amber-400 font-medium">{agent.name}</span>
          </motion.div>
        </div>
      </section>

      {/* 2. CONTENIDO PRINCIPAL */}
      <main className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <div className="mb-8 sm:mb-12">
            <Link 
              to="/equipo"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-600 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a Todo el Equipo</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
            
            {/* Left Column: Photo & Contact Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-zinc-100 aspect-[4/5] bg-zinc-100">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Direct Contact Card */}
              <div className="bg-[#1D4263] text-white rounded-3xl p-6 sm:p-8 space-y-5 shadow-xl">
                <h3 className="text-xl font-medium tracking-tight text-white">
                  Contáctate con {agent.name.split(' ')[0]}
                </h3>
                <p className="text-xs font-light text-zinc-300 leading-relaxed">
                  Solicita cotizaciones de preventa, planos de arquitectura o reserva tu visita guiada al terreno.
                </p>

                <div className="space-y-3 pt-2">
                  <a 
                    href={`https://wa.me/${agent.phone.replace(/\D/g, '')}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#E5A020] hover:bg-[#D97706] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                    <span>Escribir por WhatsApp</span>
                  </a>

                  <a 
                    href={`tel:${agent.phone.replace(/\s+/g, '')}`}
                    className="w-full bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-colors border border-white/15"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Llamar al {agent.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Bio & Track Record */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
                  PERFIL PROFESIONAL
                </span>
                <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-900 mb-2">
                  {agent.name}
                </h2>
                <p className="text-sm font-bold text-amber-600 mb-6">
                  {agent.role} en Golden Inmobiliaria
                </p>

                <p className="text-sm sm:text-base font-light text-zinc-700 leading-relaxed mb-6">
                  {agent.bio}
                </p>
                <p className="text-sm sm:text-base font-light text-zinc-700 leading-relaxed">
                  {agent.experience}
                </p>
              </div>

              {/* Skills */}
              {agent.skills && (
                <div className="space-y-4 pt-6 border-t border-zinc-100">
                  <h3 className="text-xl font-medium tracking-tight text-zinc-900 flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-600" />
                    <span>Áreas de Especialización</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {agent.skills.map((skill, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-[#F8FAFC] border border-zinc-200">
                        <h4 className="text-xs font-bold text-zinc-900 mb-1 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{skill.title}</span>
                        </h4>
                        <p className="text-xs font-light text-zinc-600 leading-relaxed pl-5">
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Career Timeline */}
              {agent.career && (
                <div className="space-y-4 pt-6 border-t border-zinc-100">
                  <h3 className="text-xl font-medium tracking-tight text-zinc-900 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    <span>Trayectoria & Experiencia</span>
                  </h3>
                  <div className="space-y-3">
                    {agent.career.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-[#F8FAFC] border border-zinc-200 flex items-start gap-4">
                        <span className="text-xs font-bold font-mono text-amber-600 shrink-0 bg-amber-50 px-2.5 py-1 rounded-md">
                          {item.period}
                        </span>
                        <p className="text-xs sm:text-sm font-light text-zinc-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

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
