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
  const [serviceType, setServiceType] = useState('Manejo de Inversiones');
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
      className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-lime-500 selection:text-black"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0C130E]">
        {/* Background Image with Dark Architectural Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Contáctanos en GyS Servicios Inmobiliarios" 
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
            className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-[-0.035em] leading-[1.12] mb-4"
          >
            Contáctanos en GyS Servicios Inmobiliarios
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
            <span className="text-lime-400 font-medium">Contacto</span>
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
              <span className="text-xs font-semibold text-lime-700 uppercase tracking-wider block mb-2">
                ASESORÍA PERSONALIZADA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-tight">
                Construyamos Valor para tu Próxima Inversión
              </h2>
            </div>

            <p className="text-xs sm:text-sm font-light text-zinc-600 max-w-md leading-relaxed">
              Comunícate hoy con nuestro equipo de directores y déjanos asesorarte en inversiones, saneamiento legal o planificación financiera.
            </p>
          </motion.div>

          {/* Layout Dividido */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            
            {/* COLUMNA IZQUIERDA: TARJETA DE SEDE */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="bg-[#F8FAFC] border border-zinc-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block mb-1">
                    SEDE CORPORATIVA
                  </span>
                  <h3 className="text-xl font-medium tracking-tight text-black">
                    Oficina Principal GyS
                  </h3>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Dirección */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0C130E] text-lime-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-black">Dirección</h4>
                      <p className="text-xs font-light text-zinc-600 leading-relaxed mt-0.5">
                        Av. Canaval y Moreyra 452, Torre Financiera, San Isidro, Lima - Perú
                      </p>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0C130E] text-lime-400 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-black">Central Telefónica / WhatsApp</h4>
                      <p className="text-xs font-light text-zinc-600 mt-0.5">
                        +51 987 654 321 / +51 (01) 456-7890
                      </p>
                    </div>
                  </div>

                  {/* Correo */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0C130E] text-lime-400 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-black">Correo Electrónico</h4>
                      <p className="text-xs font-light text-zinc-600 mt-0.5">
                        contacto@gysinmobiliarios.pe
                      </p>
                    </div>
                  </div>
                </div>

                {/* Horario de atención */}
                <div className="p-4 rounded-2xl bg-white border border-zinc-200 text-xs font-light text-zinc-600 leading-relaxed">
                  <strong className="font-medium text-black block mb-1">Horario de Atención:</strong>
                  Lunes a Viernes: 8:30 AM – 6:30 PM <br />
                  Sábados: 9:00 AM – 1:00 PM (Previa Cita)
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
              <div className="bg-[#F8FAFC] border border-zinc-200 rounded-3xl p-6 sm:p-10 shadow-sm">
                {formSubmitted ? (
                  <div className="p-10 bg-lime-50 border border-lime-200 rounded-2xl text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-lime-700 mx-auto" />
                    <h3 className="text-2xl font-medium text-zinc-900">
                      ¡Consulta Enviada con Éxito!
                    </h3>
                    <p className="text-sm font-light text-zinc-700 leading-relaxed max-w-md mx-auto">
                      Gracias {name || 'estimado cliente'}. Un asesor senior de GyS Servicios Inmobiliarios revisará tu requerimiento y se comunicará contigo vía WhatsApp o correo a la brevedad.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
                      {/* Nombre */}
                      <div>
                        <label className="text-xs font-medium text-zinc-700 block mb-1.5">
                          Nombre Completo *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ingresa tu nombre"
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-lime-500"
                        />
                      </div>

                      {/* Zona de Interés */}
                      <div>
                        <label className="text-xs font-medium text-zinc-700 block mb-1.5">
                          Zona o Distrito de Interés *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={locationReq}
                          onChange={(e) => setLocationReq(e.target.value)}
                          placeholder="Ej. San Isidro, Miraflores, Surco"
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-lime-500"
                        />
                      </div>

                      {/* Teléfono */}
                      <div>
                        <label className="text-xs font-medium text-zinc-700 block mb-1.5">
                          Teléfono / WhatsApp *
                        </label>
                        <input 
                          type="tel" 
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="+51 987 654 321"
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-lime-500"
                        />
                      </div>

                      {/* Presupuesto Deseado */}
                      <div>
                        <label className="text-xs font-medium text-zinc-700 block mb-1.5">
                          Capital / Presupuesto Estimado (USD) *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          placeholder="Ej. $200,000 – $1,500,000"
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-lime-500"
                        />
                      </div>

                      {/* Dirección Actual */}
                      <div>
                        <label className="text-xs font-medium text-zinc-700 block mb-1.5">
                          Ciudad / Dirección de Residencia
                        </label>
                        <input 
                          type="text" 
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Tu ciudad de residencia"
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-lime-500"
                        />
                      </div>

                      {/* Correo Electrónico */}
                      <div>
                        <label className="text-xs font-medium text-zinc-700 block mb-1.5">
                          Correo Electrónico *
                        </label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="correo@ejemplo.com"
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-lime-500"
                        />
                      </div>

                      {/* Tipo de Servicio Solicitado */}
                      <div className="sm:col-span-2">
                        <label className="text-xs font-medium text-zinc-700 block mb-1.5">
                          Servicio o Tipo de Asesoría Requerida
                        </label>
                        <select 
                          value={serviceType}
                          onChange={(e) => setServiceType(e.target.value)}
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-lime-500 cursor-pointer"
                        >
                          <option value="Manejo de Inversiones">Manejo y Estructuración de Inversiones en Bienes Raíces</option>
                          <option value="Asesoría Legal">Asesoría Legal Inmobiliaria & Saneamiento en Sunarp</option>
                          <option value="Asesoría Financiera">Planificación Financiera & Crédito Hipotecario</option>
                          <option value="Comercialización de Propiedades">Comercialización y Venta de Propiedad</option>
                        </select>
                      </div>

                      {/* Mensaje */}
                      <div className="sm:col-span-2">
                        <label className="text-xs font-medium text-zinc-700 block mb-1.5">
                          Detalles o requerimientos de tu consulta
                        </label>
                        <textarea 
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Descríbenos brevemente tu objetivo: compra para renta, venta de inmueble, estudio de títulos o estructuración patrimonial."
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-lime-500 resize-none"
                        />
                      </div>

                    </div>

                    {/* Botón de Envío */}
                    <div className="pt-2">
                      <motion.button 
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        className="inline-flex items-center gap-2 bg-lime-500 hover:bg-lime-400 text-black font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-full transition-all shadow-md cursor-pointer"
                      >
                        <span>Enviar Consulta a un Director de GyS</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.button>
                    </div>
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
