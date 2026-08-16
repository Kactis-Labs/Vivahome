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
  const [propertyType, setPropertyType] = useState('Residencial Nueva Asia');
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
      className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans selection:bg-[#F5921E] selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* 1. HERO BANNER */}
      <section className="relative min-h-[48vh] sm:min-h-[52vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#162842]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" 
            alt="Contacto Plus Inmobiliaria" 
            className="w-full h-full object-cover object-center filter brightness-[0.4] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#162842] via-[#162842]/60 to-black/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-[-0.035em] leading-[1.12] mb-4"
          >
            Contacto & Visitas Guiadas
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
            <span className="text-[#F5921E] font-semibold">Contacto</span>
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
              <span className="text-xs font-bold text-[#F5921E] uppercase tracking-wider block mb-2">
                ATENCIÓN PERSONALIZADA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#162842] leading-tight">
                Agenda Tu Visita a Puerto Malabrigo
              </h2>
            </div>

            <p className="text-xs sm:text-sm font-normal text-slate-600 max-w-md leading-relaxed">
              Comunícate con nuestro equipo en <strong className="text-[#162842] font-semibold">Plus Inmobiliaria</strong> y coordina tu recorrido para conocer el proyecto Residencial Nueva Asia.
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
                  <span className="text-[11px] font-bold text-[#F5921E] uppercase tracking-wider block mb-1">
                    SALA DE VENTAS
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-[#162842]">
                    Plus Inmobiliaria
                  </h3>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#162842] text-[#F5921E] flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Ubicación</h4>
                      <p className="text-xs font-normal text-slate-600 leading-relaxed mt-0.5">
                        Av. Costanera s/n, Puerto Malabrigo, La Libertad - Perú
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#162842] text-[#F5921E] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Teléfono / WhatsApp</h4>
                      <p className="text-xs font-normal text-slate-600 mt-0.5">
                        +51 987 654 321 / +51 944 123 456
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#162842] text-[#F5921E] flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">Correo Electrónico</h4>
                      <p className="text-xs font-normal text-slate-600 mt-0.5">
                        contacto@plusinmobiliaria.pe
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs font-normal text-slate-600 leading-relaxed">
                  <strong className="font-bold text-slate-900 block mb-1">Visitas Guiadas:</strong>
                  Sábados y Domingos con movilidad incluida desde Trujillo y Chiclayo.
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
                  <div className="p-10 bg-orange-50/70 border border-[#F5921E]/40 rounded-2xl text-center space-y-4">
                    <CheckCircle2 className="w-12 h-12 text-[#F5921E] mx-auto" />
                    <h3 className="text-2xl font-bold text-[#162842]">
                      ¡Consulta Enviada con Éxito!
                    </h3>
                    <p className="text-sm font-normal text-slate-700 leading-relaxed max-w-md mx-auto">
                      Gracias {name || 'estimado cliente'}. Un asesor de Plus Inmobiliaria te contactará para confirmar tu cotización y fecha de visita guiada.
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
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F5921E]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Proyecto de Interés *
                        </label>
                        <input 
                          type="text" 
                          required
                          value={locationReq}
                          onChange={(e) => setLocationReq(e.target.value)}
                          placeholder="Ej. Residencial Nueva Asia"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F5921E]"
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
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F5921E]"
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
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F5921E]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Modalidad de Pago
                        </label>
                        <input 
                          type="text" 
                          value={budget}
                          onChange={(e) => setBudget(e.target.value)}
                          placeholder="Ej. Crédito Directo (Cuotas desde S/ 799)"
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F5921E]"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                          Tipo de Lote
                        </label>
                        <select 
                          value={propertyType}
                          onChange={(e) => setPropertyType(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#F5921E]"
                        >
                          <option value="Residencial Nueva Asia (Club House)">Residencial Nueva Asia (Club House)</option>
                          <option value="Lote de Playa Primera Línea">Lote de Playa Primera Línea</option>
                          <option value="Condominio Campestre Los Valles">Condominio Campestre Los Valles</option>
                        </select>
                      </div>

                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1.5">
                        Mensaje o Fecha de Visita Deseada
                      </label>
                      <textarea 
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Indícanos si deseas reservar movilidad para la visita guiada o recibir el plano de lotización..."
                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#F5921E]"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-[#162842] hover:bg-[#F5921E] text-white font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full transition-all shadow-md hover:scale-102 cursor-pointer"
                    >
                      <span>Solicitar Información & Cotización</span>
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
