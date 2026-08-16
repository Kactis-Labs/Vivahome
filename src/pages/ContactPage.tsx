import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [locationReq, setLocationReq] = useState('');
  const [phone, setPhone] = useState('');
  const [budget, setBudget] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('Proyecto SIENNA');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

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
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Contáctanos en R&R Inmobiliaria" 
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
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.035em] leading-[1.12] mb-4"
          >
            Contacto & Sala de Ventas
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
            <span className="text-[#D4B996] font-semibold">Contacto</span>
          </motion.div>
        </div>
      </section>

      {/* 2. SECCIÓN PRINCIPAL */}
      <main className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header de la sección */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
          >
            <div>
              <span className="text-xs font-bold text-[#A8875D] uppercase tracking-wider block mb-2">
                ATENCIÓN PERSONALIZADA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] leading-tight">
                Encontremos Tu Próximo Hogar
              </h2>
            </div>

            <p className="text-xs sm:text-sm font-normal text-slate-600 max-w-md leading-relaxed">
              Comunícate con nuestro equipo especializado de <strong className="text-[#1C1917] font-semibold">R&R Inmobiliaria</strong> y recibe asesoría exclusiva para los proyectos SIENNA, ORIGEN y oportunidades en preventa.
            </p>
          </motion.div>

          {/* Layout Dividido */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            
            {/* COLUMNA IZQUIERDA */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="bg-[#FAF8F5] border border-[#E8E4DC] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <span className="text-[11px] font-bold text-[#A8875D] uppercase tracking-wider block mb-1">
                    SALA DE VENTAS & PROYECTOS
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[#1C1917]">
                    Sede R&R Inmobiliaria
                  </h3>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1C1917] text-[#D4B996] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Dirección Principal</h4>
                      <p className="text-xs font-normal text-slate-600 leading-relaxed mt-0.5">
                        Calle Las Camelias 950, Urb. Las Palmeras del Golf, Lima - Perú
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1C1917] text-[#D4B996] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Central Telefónica</h4>
                      <p className="text-xs font-normal text-slate-600 mt-0.5">
                        +51 (01) 456-7890 / +51 987 654 321
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1C1917] text-[#D4B996] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Correo Electrónico</h4>
                      <p className="text-xs font-normal text-slate-600 mt-0.5">
                        contacto@ryrinmobiliaria.pe
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-[#E8E4DC] text-xs font-normal text-slate-600 leading-relaxed">
                  <strong className="font-bold text-slate-900 block mb-1">Horario de Atención:</strong>
                  Lunes a Viernes: 8:30 AM – 7:00 PM <br />
                  Sábados: 9:00 AM – 2:00 PM
                </div>
              </div>
            </motion.div>

            {/* COLUMNA DERECHA: FORMULARIO */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <div className="bg-[#FAF8F5] border border-[#E8E4DC] rounded-3xl p-6 sm:p-10 shadow-sm">
                {formSubmitted ? (
                  <div className="p-10 bg-amber-50/70 border border-[#C8A97E]/40 rounded-2xl text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#A8875D] mx-auto" />
                    <h3 className="text-2xl font-bold text-[#1C1917]">
                      ¡Consulta Enviada con Éxito!
                    </h3>
                    <p className="text-sm font-normal text-slate-700 leading-relaxed max-w-md mx-auto">
                      Gracias {name || 'estimado cliente'}. Un asesor senior de R&R Inmobiliaria revisará tu requerimiento y se comunicará contigo vía WhatsApp o correo electrónico a la brevedad.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Nombre */}
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Nombre Completo *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ingresa tu nombre"
                          className="w-full bg-white border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8A97E]"
                        />
                      </div>

                      {/* Proyecto o Zona */}
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Proyecto o Zona de Interés *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={locationReq}
                          onChange={(e) => setLocationReq(e.target.value)}
                          placeholder="Ej. Proyecto SIENNA o ORIGEN"
                          className="w-full bg-white border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8A97E]"
                        />
                      </div>

                      {/* Teléfono */}
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Teléfono / WhatsApp *
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+51 987 654 321"
                          className="w-full bg-white border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8A97E]"
                        />
                      </div>

                      {/* Correo */}
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Correo Electrónico *
                        </label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="tu@correo.com"
                          className="w-full bg-white border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8A97E]"
                        />
                      </div>

                      {/* Presupuesto */}
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Presupuesto Estimado
                        </label>
                        <input 
                          type="text" 
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          placeholder="Ej. $180,000 – $280,000 USD"
                          className="w-full bg-white border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8A97E]"
                        />
                      </div>

                      {/* Tipo de Propiedad */}
                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Tipología de Interés
                        </label>
                        <select 
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full bg-white border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#C8A97E]"
                        >
                          <option value="Proyecto SIENNA (2, 3 y 4 Dorm.)">Proyecto SIENNA (2, 3 y 4 Dorm.)</option>
                          <option value="Proyecto ORIGEN (1, 2 y 3 Dorm.)">Proyecto ORIGEN (1, 2 y 3 Dorm.)</option>
                          <option value="Penthouse Dúplex">Penthouse Dúplex</option>
                          <option value="Departamento Garden">Departamento Garden</option>
                        </select>
                      </div>

                    </div>

                    {/* Mensaje */}
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                        Mensaje o Consulta Específica
                      </label>
                      <textarea 
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Escribe aquí cualquier detalle sobre los departamentos, financiamiento o visita al piloto..."
                        className="w-full bg-white border border-[#E8E4DC] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#C8A97E]"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-[#1C1917] hover:bg-[#2E2A25] text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-xl hover:scale-102 cursor-pointer"
                    >
                      <span>Enviar Solicitud</span>
                      <ArrowUpRight className="w-4 h-4 text-[#D4B996]" />
                    </button>
                  </form>
                )}
              </div>
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
