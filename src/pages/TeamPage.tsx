import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { ArrowUpRight, MessageCircle, Mail, Phone } from 'lucide-react';
import { agents } from '../data/realEstateData';

export const TeamPage: React.FC = () => {
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
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#1D4263]">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Equipo Comercial de Golden Inmobiliaria" 
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
            Nuestro Equipo Comercial
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
            <span className="text-amber-400 font-medium">Equipo de Ventas</span>
          </motion.div>
        </div>
      </section>

      {/* 2. LISTA DE ASESORES */}
      <main className="py-16 sm:py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white border border-zinc-200 rounded-3xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between hover:shadow-xl"
              >
                {/* Agent Image */}
                <Link to={`/equipo/${agent.id}`} className="relative aspect-[4/3] overflow-hidden block bg-zinc-200">
                  <img 
                    src={agent.image} 
                    alt={agent.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white text-zinc-900 flex items-center justify-center shadow-md group-hover:bg-[#E5A020] group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>

                {/* Agent Info */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <Link to={`/equipo/${agent.id}`}>
                      <h3 className="text-xl font-medium tracking-tight text-zinc-900 group-hover:text-amber-600 transition-colors mb-1">
                        {agent.name}
                      </h3>
                    </Link>
                    <p className="text-xs font-bold text-amber-600 mb-4">
                      {agent.role}
                    </p>
                    <p className="text-xs sm:text-sm font-light text-zinc-600 leading-relaxed mb-6">
                      {agent.bio || agent.experience}
                    </p>
                  </div>

                  {/* Contact Shortcuts */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-2">
                    <a 
                      href={`https://wa.me/${agent.phone.replace(/\D/g, '')}?text=Hola%20${encodeURIComponent(agent.name)},%20deseo%20asesoría%20sobre%20los%20lotes%20de%20Villa%20Club%20Malabrigo`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-amber-500/15 hover:bg-[#E5A020] hover:text-white text-amber-700 text-xs font-medium transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <a 
                      href={`tel:${agent.phone.replace(/\s+/g, '')}`}
                      className="p-2.5 rounded-xl bg-zinc-100 hover:bg-[#1D4263] hover:text-white text-zinc-700 transition-colors"
                      title={`Llamar a ${agent.name}`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>

                    <a 
                      href={`mailto:${agent.email}`}
                      className="p-2.5 rounded-xl bg-zinc-100 hover:bg-[#1D4263] hover:text-white text-zinc-700 transition-colors"
                      title={`Escribir a ${agent.name}`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </main>

      {/* CTA & FOOTER */}
      <CtaBanner />
      <Footer />
    </motion.div>
  );
};
