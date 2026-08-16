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
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('Departamento');
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
      className="min-h-screen bg-white text-slate-900 font-sans selection:bg-emerald-500 selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER WITH STAGGERED ENTRANCE */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#062316]">
        {/* Background Image with Dark Architectural Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Contáctanos en Megapolys Inmobiliaria" 
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
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.035em] leading-[1.12] mb-4"
          >
            Contáctanos en Megapolys
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
            <span className="text-[#A3D224] font-semibold">Contacto</span>
          </motion.div>
        </div>
      </section>

      {/* 2. SECCIÓN PRINCIPAL: ENCONTREMOS TU PRÓXIMO INMUEBLE */}
      <main className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header de la sección con Scroll Reveal */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6"
          >
            <div>
              <span className="text-xs font-bold text-[#00873D] uppercase tracking-wider block mb-2">
                // CONTACTO DIRECTO
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
                Encontremos Tu Próximo Inmueble
              </h2>
            </div>

            <p className="text-xs sm:text-sm font-normal text-slate-600 max-w-md leading-relaxed">
              Comunícate con nuestro equipo especializado de <strong className="text-slate-900 font-semibold">Megapolys Inmobiliaria</strong> hoy y déjanos ayudarte a comprar, vender o alquilar con total confianza y claridad jurídica.
            </p>
          </motion.div>

          {/* Layout Dividido: Tarjeta de Sede Izquierda + Formulario Completo Derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            
            {/* COLUMNA IZQUIERDA: TARJETA DE SEDE CORPORATIVA */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <span className="text-[11px] font-bold text-[#00873D] uppercase tracking-wider block mb-1">
                    SEDE CENTRAL
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900">
                    Oficina Principal Megapolys
                  </h3>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Dirección */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#062316] text-[#A3D224] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Dirección</h4>
                      <p className="text-xs font-normal text-slate-600 leading-relaxed mt-0.5">
                        Av. Víctor Andrés Belaúnde 147, Real 5, San Isidro, Lima - Perú
                      </p>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#062316] text-[#A3D224] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Central Telefónica</h4>
                      <p className="text-xs font-normal text-slate-600 mt-0.5">
                        +51 (01) 456-7890 / +51 987 654 321
                      </p>
                    </div>
                  </div>

                  {/* Correo */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#062316] text-[#A3D224] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Correo Electrónico</h4>
                      <p className="text-xs font-normal text-slate-600 mt-0.5">
                        contacto@megapolys.pe
                      </p>
                    </div>
                  </div>
                </div>

                {/* Horario de atención */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs font-normal text-slate-600 leading-relaxed">
                  <strong className="font-bold text-slate-900 block mb-1">Horario de Atención:</strong>
                  Lunes a Viernes: 8:30 AM – 7:00 PM <br />
                  Sábados: 9:00 AM – 2:00 PM
                </div>
              </div>
            </motion.div>

            {/* COLUMNA DERECHA: FORMULARIO INMOBILIARIO COMPLETO (Grid 2 Columnas) */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
                {formSubmitted ? (
                  <div className="p-10 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#00873D] mx-auto" />
                    <h3 className="text-2xl font-bold text-emerald-900">
                      ¡Consulta Enviada con Éxito!
                    </h3>
                    <p className="text-sm font-normal text-emerald-800 leading-relaxed max-w-md mx-auto">
                      Gracias {name || 'estimado cliente'}. Un asesor senior de Megapolys Inmobiliaria revisará tu requerimiento y se comunicará contigo vía WhatsApp o correo electrónico a la brevedad.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Nombre */}
                      <div>
                        <label className="text-xs font-medium text-slate-700 block mb-1.5">
                          Nombre Completo *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ingresa tu nombre"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      {/* Ubicación Requerida */}
                      <div>
                        <label className="text-xs font-medium text-slate-700 block mb-1.5">
                          Zona o Ubicación de Interés *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={locationReq}
                          onChange={(e) => setLocationReq(e.target.value)}
                          placeholder="Ej. San Isidro, Miraflores, Playas"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      {/* Teléfono */}
                      <div>
                        <label className="text-xs font-medium text-slate-700 block mb-1.5">
                          Teléfono / WhatsApp *
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+51 987 654 321"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      {/* Presupuesto Deseado */}
                      <div>
                        <label className="text-xs font-medium text-slate-700 block mb-1.5">
                          Presupuesto Estimado (USD) *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          placeholder="Ej. $250,000 - $400,000"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      {/* Dirección Actual */}
                      <div>
                        <label className="text-xs font-medium text-slate-700 block mb-1.5">
                          Dirección Actual
                        </label>
                        <input 
                          type="text" 
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Tu dirección residencial actual"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      {/* Correo Electrónico */}
                      <div>
                        <label className="text-xs font-medium text-slate-700 block mb-1.5">
                          Correo Electrónico *
                        </label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="correo@ejemplo.com"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      {/* Tipo de Inmueble */}
                      <div className="sm:col-span-2">
                        <label className="text-xs font-medium text-slate-700 block mb-1.5">
                          Tipo de Inmueble Deseado
                        </label>
                        <select
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-emerald-500 cursor-pointer"
                        >
                          <option value="Departamento">Departamento Exclusivo</option>
                          <option value="Casa Residencial">Casa Residencial / Mansión</option>
                          <option value="Penthouse">Penthouse / Dúplex</option>
                          <option value="Casa de Playa">Casa de Playa / Campo</option>
                          <option value="Proyecto en Preventa">Proyecto en Preventa (Inversión)</option>
                          <option value="Terreno / Lote">Terreno / Lote Urbano</option>
                        </select>
                      </div>

                      {/* Mensaje Textarea */}
                      <div className="sm:col-span-2">
                        <label className="text-xs font-medium text-slate-700 block mb-1.5">
                          Mensaje / Requerimiento Específico *
                        </label>
                        <textarea 
                          rows={4}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Describe qué características buscas (número de dormitorios, vista al mar/golf, fecha estimada de mudanza, etc.)..."
                          className="w-full bg-white border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 leading-relaxed"
                        />
                      </div>

                    </div>

                    {/* Botón Ancho Verde Esmeralda */}
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm py-3.5 sm:py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-emerald-900/20 cursor-pointer"
                    >
                      <span>Enviar Consulta / Solicitar Asesor</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>

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
