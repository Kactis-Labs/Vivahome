import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Navbar } from '../components/Navbar';
import { CtaBanner } from '../components/CtaBanner';
import { Footer } from '../components/Footer';
import { 
  ArrowLeft, 
  MapPin, 
  Maximize2, 
  CheckCircle2, 
  Shield, 
  Send,
  MessageCircle,
  Phone,
  ArrowUpRight,
  Ruler
} from 'lucide-react';
import { featuredProperties } from '../data/realEstateData';

export const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const property = featuredProperties.find((p) => p.id === id);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  if (!property) {
    return <Navigate to="/#deals" replace />;
  }

  const similarProperties = featuredProperties.filter((p) => p.id !== id).slice(0, 3);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola Golden Inmobiliaria, deseo solicitar información y cotización del lote: ${property.title} (${property.price}) en Villa Club Malabrigo.`
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-amber-500 selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Breadcrumb & Back Link */}
          <div className="mb-6 flex items-center justify-between">
            <Link 
              to="/#deals"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-zinc-600 hover:text-amber-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver a Lotes de Villa Club</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2 text-xs font-light text-zinc-400">
              <Link to="/" className="hover:text-zinc-600">Inicio</Link>
              <span>/</span>
              <span className="text-zinc-700 font-medium">{property.title}</span>
            </div>
          </div>

          {/* 1. HEADER DE LA PROPIEDAD */}
          <div className="mb-8 sm:mb-10">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-800 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                VILLA CLUB MALABRIGO
              </span>
              {property.badge && (
                <span className="px-2.5 py-0.5 rounded-md bg-[#1D4263] text-amber-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                  {property.badge}
                </span>
              )}
              <span className="px-2.5 py-0.5 rounded-md bg-white border border-zinc-200 text-zinc-700 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider">
                {property.deliveryStatus}
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
              <div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.14] mb-2 sm:mb-3">
                  {property.title}
                </h1>
                <p className="text-xs sm:text-base font-light text-zinc-600 flex items-center gap-1.5 sm:gap-2">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{property.location}</span>
                </p>
              </div>

              {/* Price Tag */}
              <div className="lg:text-right shrink-0 pt-2 lg:pt-0">
                <div className="text-2xl sm:text-4xl font-bold text-[#1D4263] tracking-tight font-mono">
                  {property.price}
                </div>
                {property.pricePen && (
                  <div className="text-xs sm:text-sm font-semibold text-amber-600 mt-0.5">
                    {property.pricePen}
                  </div>
                )}
                <span className="text-[10px] sm:text-[11px] font-light text-zinc-400 block mt-0.5">
                  Financiamiento 100% directo sin intereses
                </span>
              </div>
            </div>
          </div>

          {/* 2. FOTO PRINCIPAL */}
          <div className="mb-10 sm:mb-14">
            <div className="relative rounded-3xl overflow-hidden shadow-xl h-[280px] sm:h-[420px] lg:h-[580px] w-full bg-zinc-900">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-white">
                <span className="bg-[#1D4263]/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium text-amber-300">
                  {property.category} • {property.sqft} m² • Plano Americano Incluido
                </span>
              </div>
            </div>
          </div>

          {/* 3. DOS COLUMNAS: DETALLES VS SIDEBAR */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
            
            {/* Columna Izquierda: Información Técnica */}
            <div className="lg:col-span-7 space-y-10 sm:space-y-12">
              
              {/* Resumen */}
              <div>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-900 mb-4">
                  Descripción del Lote
                </h3>
                <p className="text-sm sm:text-base font-light text-zinc-700 leading-relaxed mb-6">
                  {property.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-100">
                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-zinc-200">
                    <Maximize2 className="w-5 h-5 text-amber-600 mb-2" />
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">Área Total</span>
                    <span className="text-sm sm:text-base font-bold text-zinc-900">{property.totalArea}</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-zinc-200">
                    <Ruler className="w-5 h-5 text-amber-600 mb-2" />
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">Arquitectura</span>
                    <span className="text-sm sm:text-base font-bold text-zinc-900">Plano Americano</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-zinc-200">
                    <Shield className="w-5 h-5 text-amber-600 mb-2" />
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block">Financiamiento</span>
                    <span className="text-sm sm:text-base font-bold text-zinc-900">0% Intereses</span>
                  </div>
                </div>
              </div>

              {/* Ficha Técnica */}
              <div>
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-900 mb-4">
                  Características de Villa Club
                </h3>
                <div className="bg-[#F8FAFC] rounded-2xl border border-zinc-200 divide-y divide-zinc-200/80 text-xs sm:text-sm">
                  <div className="p-4 flex justify-between">
                    <span className="text-zinc-500 font-light">Concepto Urbanístico</span>
                    <span className="font-semibold text-zinc-900">Estilo Americano</span>
                  </div>
                  <div className="p-4 flex justify-between">
                    <span className="text-zinc-500 font-light">Estado de Entrega</span>
                    <span className="font-semibold text-zinc-900">{property.deliveryStatus}</span>
                  </div>
                  <div className="p-4 flex justify-between">
                    <span className="text-zinc-500 font-light">Seguridad</span>
                    <span className="font-semibold text-zinc-900">{property.security}</span>
                  </div>
                  <div className="p-4 flex justify-between">
                    <span className="text-zinc-500 font-light">Mantenimiento de Áreas Comunes</span>
                    <span className="font-semibold text-zinc-900">{property.maintenance}</span>
                  </div>
                </div>
              </div>

              {/* Lugares Cercanos */}
              {property.nearbyPlaces && (
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-900 mb-4">
                    Ubicación y Entorno
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {property.nearbyPlaces.map((np, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-white border border-zinc-200 flex items-center justify-between text-xs">
                        <span className="font-medium text-zinc-800">{np.name}</span>
                        <span className="text-amber-600 font-bold font-mono">{np.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Columna Derecha: Sidebar de Formulario & Contacto */}
            <div className="lg:col-span-5">
              <div className="sticky top-28 bg-[#F8FAFC] border border-zinc-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-lg">
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
                    PREVENTA DIRECTA
                  </span>
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-900">
                    Solicita Información del Lote
                  </h3>
                  <p className="text-xs font-light text-zinc-600 mt-1">
                    Recibe la cotización oficial, el plano americano y agenda tu visita guiada al terreno.
                  </p>
                </div>

                {/* Asesor Asignado */}
                <div className="p-4 rounded-2xl bg-white border border-zinc-200 flex items-center gap-3.5">
                  <img 
                    src={property.assignedAgent.image} 
                    alt={property.assignedAgent.name} 
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-500 shrink-0"
                  />
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-zinc-900">
                      {property.assignedAgent.name}
                    </h4>
                    <p className="text-[11px] text-zinc-500 font-light">
                      {property.assignedAgent.role}
                    </p>
                    <a 
                      href={`tel:${property.assignedAgent.phone.replace(/\s+/g, '')}`}
                      className="text-xs font-bold text-amber-600 flex items-center gap-1 mt-0.5 hover:underline"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{property.assignedAgent.phone}</span>
                    </a>
                  </div>
                </div>

                {/* Formulario */}
                {formSubmitted ? (
                  <div className="p-6 bg-amber-50 border border-amber-200 rounded-2xl text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-amber-600 mx-auto" />
                    <h4 className="text-sm sm:text-base font-bold text-zinc-900">
                      ¡Solicitud Enviada!
                    </h4>
                    <p className="text-xs font-light text-zinc-700 leading-relaxed">
                      Gracias {name}. Nuestro asesor se comunicará contigo vía WhatsApp para coordinar los detalles.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-zinc-700 block mb-1">Nombre Completo *</label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Juan Pérez"
                        className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-zinc-700 block mb-1">Teléfono / WhatsApp *</label>
                      <input 
                        type="tel" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+51 987 654 321"
                        className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-zinc-700 block mb-1">Correo Electrónico (Opcional)</label>
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="correo@ejemplo.com"
                        className="w-full bg-white border border-zinc-200 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-900 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#1D4263] hover:bg-[#132B45] text-white text-xs font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-colors shadow-md cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-amber-400" />
                      <span>Solicitar Planos & Cotización</span>
                    </button>
                  </form>
                )}

                {/* Botón WhatsApp */}
                <div className="pt-2">
                  <a 
                    href={`https://wa.me/${property.assignedAgent.phone.replace(/\D/g, '')}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#E5A020] hover:bg-[#D97706] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-md hover:scale-102"
                  >
                    <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>

              </div>
            </div>

          </div>

          {/* 4. SECCIÓN INFERIOR: OTROS LOTES */}
          <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-zinc-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-3">
              <div>
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block mb-1">
                  RECOMENDADOS
                </span>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900">
                  Otros Lotes en Villa Club
                </h2>
              </div>
              <Link 
                to="/#deals"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 hover:text-amber-700"
              >
                <span>Ver todos los lotes</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {similarProperties.map((simProp) => (
                <Link 
                  key={simProp.id}
                  to={`/propiedades/${simProp.id}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-zinc-200 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-xl"
                >
                  <div className="relative aspect-[16/11] overflow-hidden bg-zinc-100">
                    <img 
                      src={simProp.image} 
                      alt={simProp.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    
                    {simProp.badge && (
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#1D4263]/90 text-amber-300 text-[9px] sm:text-[10px] font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md uppercase tracking-wider">
                        {simProp.badge}
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                      <div className="text-lg sm:text-xl font-bold tracking-tight font-mono">
                        {simProp.price}
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-medium text-zinc-900 group-hover:text-amber-600 transition-colors mb-1 line-clamp-1">
                        {simProp.title}
                      </h3>
                      <p className="text-xs font-light text-zinc-500 flex items-center gap-1 mb-3">
                        <MapPin className="w-3 h-3 text-amber-600 shrink-0" />
                        <span className="line-clamp-1">{simProp.location}</span>
                      </p>
                    </div>

                    <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs font-light text-zinc-600">
                      <div className="flex items-center gap-1 font-medium text-zinc-800">
                        <Maximize2 className="w-3.5 h-3.5 text-amber-600" />
                        <span>{simProp.sqft} m²</span>
                      </div>
                      <span className="text-amber-600 font-semibold">0% Intereses</span>
                    </div>
                  </div>
                </Link>
              ))}
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
