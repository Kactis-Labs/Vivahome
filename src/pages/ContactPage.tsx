import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Send, 
  CheckCircle2
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedLotSize, setSelectedLotSize] = useState('252m2');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

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
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Contáctanos en Golden Inmobiliaria" 
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
            Contáctanos & Reserva en Preventa
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
            <span className="text-amber-400 font-medium">Contacto & Visitas</span>
          </motion.div>
        </div>
      </section>

      {/* 2. SECCIÓN PRINCIPAL */}
      <main className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
          >
            <div>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-2">
                RESERVA TU VISITA GUIADA GRATUITA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
                Cumple el Sueño de Tu Lote en Villa Club
              </h2>
            </div>

            <p className="text-xs sm:text-sm font-light text-zinc-600 max-w-md leading-relaxed">
              Completa tus datos para separar tu lote de 252m², 300m² o 500m² a precio de preventa con financiamiento directo sin intereses.
            </p>
          </motion.div>

          {/* Layout Dividido */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            
            {/* Left Column: Sede & Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="bg-[#F8FAFC] border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider block mb-1">
                    OFICINA & ATENCIÓN EN TERRENO
                  </span>
                  <h3 className="text-xl font-medium tracking-tight text-zinc-900">
                    Sede Puerto Malabrigo
                  </h3>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1D4263] text-amber-300 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900">Ubicación</h4>
                      <p className="text-xs font-light text-zinc-600 leading-relaxed mt-0.5">
                        Villa Club Malabrigo • Puerto Malabrigo, La Libertad - Perú
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1D4263] text-amber-300 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900">WhatsApp / Central</h4>
                      <p className="text-xs font-light text-zinc-600 mt-0.5">
                        +51 987 654 321 / +51 981 234 567
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1D4263] text-amber-300 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-900">Correo Electrónico</h4>
                      <p className="text-xs font-light text-zinc-600 mt-0.5">
                        ventas@goldeninmobiliaria.pe
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-200/80">
                  <a
                    href="https://wa.me/51987654321?text=Hola%20Golden%20Inmobiliaria,%20deseo%20coordinar%20una%20visita%20guiada%20a%20Villa%20Club%20Malabrigo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#E5A020] hover:bg-[#D97706] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                    <span>WhatsApp Inmediato</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <div className="bg-white border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-lg">
                <h3 className="text-2xl font-medium tracking-tight text-zinc-900 mb-2">
                  Formulario de Reserva & Cotización en Preventa
                </h3>
                <p className="text-xs sm:text-sm font-light text-zinc-600 mb-8">
                  Te enviaremos el catálogo de lotes, precios de preventa y el plano arquitectónico americano gratis.
                </p>

                {formSubmitted ? (
                  <div className="p-8 bg-amber-50 border border-amber-200 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-amber-600 mx-auto" />
                    <h4 className="text-lg font-bold text-zinc-900">
                      ¡Gracias por contactarnos, {name}!
                    </h4>
                    <p className="text-xs sm:text-sm font-light text-zinc-700 max-w-md mx-auto leading-relaxed">
                      Uno de nuestros asesores comerciales se comunicará contigo vía WhatsApp al número <strong>{phone}</strong> para enviarte los planos y coordinar tu visita guiada.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-2">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ej. Juan Pérez"
                          className="w-full bg-[#F8FAFC] border border-zinc-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-2">
                          Teléfono / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+51 987 654 321"
                          className="w-full bg-[#F8FAFC] border border-zinc-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-2">
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="correo@ejemplo.com"
                          className="w-full bg-[#F8FAFC] border border-zinc-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-zinc-700 block mb-2">
                          Metraje de Lote de Interés
                        </label>
                        <select
                          value={selectedLotSize}
                          onChange={(e) => setSelectedLotSize(e.target.value)}
                          className="w-full bg-[#F8FAFC] border border-zinc-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                        >
                          <option value="252m2">Lote 252 m² (con Plano Americano)</option>
                          <option value="300m2">Lote 300 m² (Frente a Club House)</option>
                          <option value="500m2">Lote Quinta 500 m² (Mansión Campestre)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-zinc-700 block mb-2">
                        Consulta o Fecha Tentativa de Visita
                      </label>
                      <textarea
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Ej. Deseo conocer el cronograma de financiamiento a 0% de interés y visitar el terreno este sábado..."
                        className="w-full bg-[#F8FAFC] border border-zinc-200 rounded-xl p-4 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#1D4263] hover:bg-[#132B45] text-white font-semibold text-xs sm:text-sm py-3.5 px-6 rounded-full transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                    >
                      <Send className="w-4 h-4 text-amber-400" />
                      <span>Enviar Solicitud de Preventa</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};
