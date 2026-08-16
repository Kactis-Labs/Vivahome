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
  const [operationType, setOperationType] = useState('Quiero Comprar un Inmueble');
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
      className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#DC2626] selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#111827]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
            alt="Contacto Inmobiliaria JML Trujillo" 
            className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/60 to-black/75" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.035em] leading-[1.12] mb-4"
          >
            Contacto & Asesoría Inmobiliaria
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
            <span className="text-[#EF4444] font-semibold">Contacto</span>
          </motion.div>
        </div>
      </section>

      {/* 2. MAIN */}
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
              <span className="text-xs font-bold text-[#DC2626] uppercase tracking-wider block mb-2">
                ATENCIÓN PROFESIONAL
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827] leading-tight">
                Conversemos sobre Tu Propiedad en Trujillo
              </h2>
            </div>

            <p className="text-xs sm:text-sm font-normal text-slate-600 max-w-md leading-relaxed">
              Comunícate con nuestro equipo en <strong className="text-[#111827] font-semibold">Inmobiliaria JML</strong> y recibe orientación experta para comprar, vender o tasar un inmueble.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
            
            {/* Left */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <span className="text-[11px] font-bold text-[#DC2626] uppercase tracking-wider block mb-1">
                    OFICINA COMERCIAL
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[#111827]">
                    Inmobiliaria JML
                  </h3>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#111827] text-[#EF4444] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Ubicación</h4>
                      <p className="text-xs font-normal text-slate-600 leading-relaxed mt-0.5">
                        Urb. El Golf / California, Trujillo, La Libertad - Perú
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#111827] text-[#EF4444] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Teléfono / WhatsApp</h4>
                      <p className="text-xs font-normal text-slate-600 mt-0.5">
                        +51 (044) 234-567 / +51 987 654 321
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#111827] text-[#EF4444] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Correo Electrónico</h4>
                      <p className="text-xs font-normal text-slate-600 mt-0.5">
                        contacto@inmobiliariajml.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs font-normal text-slate-600 leading-relaxed">
                  <strong className="font-bold text-slate-900 block mb-1">Horario de Atención:</strong>
                  Lunes a Viernes: 8:30 AM – 7:00 PM <br />
                  Sábados: 9:00 AM – 2:00 PM
                </div>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-8"
            >
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
                {formSubmitted ? (
                  <div className="p-10 bg-red-50/70 border border-[#DC2626]/40 rounded-2xl text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#DC2626] mx-auto" />
                    <h3 className="text-2xl font-bold text-[#111827]">
                      ¡Consulta Enviada con Éxito!
                    </h3>
                    <p className="text-sm font-normal text-slate-700 leading-relaxed max-w-md mx-auto">
                      Gracias {name || 'estimado cliente'}. Un asesor de Inmobiliaria JML revisará tu solicitud y se comunicará contigo vía WhatsApp a la brevedad.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      
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
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#DC2626]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Zona de Interés en Trujillo *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={locationReq}
                          onChange={(e) => setLocationReq(e.target.value)}
                          placeholder="Ej. El Golf, California o San Andrés"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#DC2626]"
                        />
                      </div>

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
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#DC2626]"
                        />
                      </div>

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
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#DC2626]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Presupuesto Estimado
                        </label>
                        <input 
                          type="text" 
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          placeholder="Ej. $120,000 – $220,000 USD"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#DC2626]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Tipo de Consulta
                        </label>
                        <select 
                          value={operationType}
                          onChange={(e) => setOperationType(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#DC2626]"
                        >
                          <option value="Quiero Comprar un Inmueble">Quiero Comprar un Inmueble</option>
                          <option value="Quiero Vender mi Propiedad">Quiero Vender mi Propiedad</option>
                          <option value="Tasación y Estudio de Títulos">Tasación y Estudio de Títulos</option>
                          <option value="Asesoría de Crédito Hipotecario">Asesoría de Crédito Hipotecario</option>
                        </select>
                      </div>

                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                        Mensaje o Consulta Específica
                      </label>
                      <textarea 
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Escribe aquí los detalles del inmueble que buscas o que deseas vender en Trujillo..."
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#DC2626]"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-[#111827] hover:bg-[#DC2626] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-102 cursor-pointer"
                    >
                      <span>Enviar Consulta a Inmobiliaria JML</span>
                      <ArrowUpRight className="w-4 h-4" />
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
