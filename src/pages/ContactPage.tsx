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
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [projectInterest, setProjectInterest] = useState('Lotes en Puerto Malabrigo (Playa)');
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
      className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-emerald-500 selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#0D2218]">
        {/* Background Image with Dark Architectural Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/banner-eco-hogar.png" 
            alt="Contáctanos en ECO HOGAR Inmobiliaria" 
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
            className="text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-[-0.035em] leading-[1.12] mb-4"
          >
            Contáctanos en ECO HOGAR Inmobiliaria
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
            <span className="text-emerald-400 font-medium">Contacto & Visitas</span>
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
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-2">
                RESERVA TU VISITA GUIADA GRATUITA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-tight">
                Cumple el Sueño de Tu Lote Propio
              </h2>
            </div>

            <p className="text-xs sm:text-sm font-light text-zinc-600 max-w-md leading-relaxed">
              Completa tus datos para separar tu asiento en nuestro bus de traslados o solicitar información sobre planes de financiamiento directo.
            </p>
          </motion.div>

          {/* Layout Dividido */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            
            {/* COLUMNA IZQUIERDA: INFORMACIÓN DE SEDES */}
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
                    OFICINAS & MÓDULOS DE VENTA
                  </span>
                  <h3 className="text-xl font-medium tracking-tight text-black">
                    Sede Trujillo & Puerto Malabrigo
                  </h3>
                </div>

                <div className="space-y-4 pt-2">
                  {/* Dirección */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0D2218] text-emerald-300 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-black">Dirección</h4>
                      <p className="text-xs font-light text-zinc-600 leading-relaxed mt-0.5">
                        Puerto Malabrigo, Ascope / Av. España 1840, Trujillo, La Libertad - Perú
                      </p>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0D2218] text-emerald-300 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-black">WhatsApp / Llamadas</h4>
                      <p className="text-xs font-light text-zinc-600 mt-0.5">
                        +51 987 654 321 / +51 981 234 567
                      </p>
                    </div>
                  </div>

                  {/* Correo */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0D2218] text-emerald-300 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium text-black">Correo Electrónico</h4>
                      <p className="text-xs font-light text-zinc-600 mt-0.5">
                        ventas@ecohogarinmobiliaria.pe
                      </p>
                    </div>
                  </div>
                </div>

                {/* Salidas del Bus */}
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs font-light text-zinc-800 leading-relaxed">
                  <strong className="font-semibold text-emerald-900 block mb-1">🚌 Visitas Guiadas Gratuitas:</strong>
                  Sábados y Domingos a las 9:00 AM. Salida desde el punto de encuentro en Trujillo con movilidad ida y vuelta incluida.
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
                  <div className="p-10 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="text-2xl font-medium text-zinc-900">
                      ¡Registro Recibido con Éxito!
                    </h3>
                    <p className="text-sm font-light text-zinc-700 leading-relaxed max-w-md mx-auto">
                      Gracias {name || 'estimado(a) amigo(a)'}. Un asesor de ECO HOGAR Inmobiliaria te contactará vía WhatsApp para confirmar tu asistencia a la visita guiada y enviarte el catálogo de lotes disponibles.
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
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
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
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      {/* Ciudad de Residencia */}
                      <div>
                        <label className="text-xs font-medium text-zinc-700 block mb-1.5">
                          Ciudad donde resides actualmente
                        </label>
                        <input 
                          type="text" 
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Ej. Trujillo, Ascope, Lima, Chepén"
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      {/* Correo Electrónico */}
                      <div>
                        <label className="text-xs font-medium text-zinc-700 block mb-1.5">
                          Correo Electrónico
                        </label>
                        <input 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="correo@ejemplo.com"
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500"
                        />
                      </div>

                      {/* Tipo de Proyecto */}
                      <div className="sm:col-span-2">
                        <label className="text-xs font-medium text-zinc-700 block mb-1.5">
                          Proyecto o Tipo de Lote de Interés
                        </label>
                        <select 
                          value={projectInterest}
                          onChange={(e) => setProjectInterest(e.target.value)}
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-emerald-500 cursor-pointer"
                        >
                          <option value="Lotes en Puerto Malabrigo (Playa)">Lotes Cerca al Mar en Puerto Malabrigo (desde S/ 14,900)</option>
                          <option value="Lotes Campestres en Valle Chicama">Lotes Campestres en Valle Chicama / Ascope</option>
                          <option value="Lotes Comerciales en Avenida">Lotes Comerciales sobre Avenida Principal</option>
                          <option value="Financiamiento Directo">Consulta sobre Facilidades y Cuotas de Pago</option>
                        </select>
                      </div>

                      {/* Mensaje */}
                      <div className="sm:col-span-2">
                        <label className="text-xs font-medium text-zinc-700 block mb-1.5">
                          ¿Deseas asistir a la visita guiada o tienes alguna consulta?
                        </label>
                        <textarea 
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Indícanos cuántas personas asistirían a la visita o qué dudas tienes sobre la compra de tu lote."
                          className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500 resize-none"
                        />
                      </div>

                    </div>

                    {/* Botón de Envío */}
                    <div className="pt-2">
                      <motion.button 
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-xs sm:text-sm px-8 py-3.5 rounded-full transition-all shadow-md cursor-pointer"
                      >
                        <span>Reservar Asiento / Enviar Consulta</span>
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
