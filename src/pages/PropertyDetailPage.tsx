import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { featuredProperties } from '../data/realEstateData';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  MapPin, 
  Maximize2, 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

export const PropertyDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find property by id
  const property = featuredProperties.find((p) => p.id === id) || featuredProperties[0];

  // Contact form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Similar properties (exclude current)
  const similarProperties = featuredProperties
    .filter((p) => p.id !== property.id)
    .slice(0, 3);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hola ${property.assignedAgent.name}, estoy interesado(a) en el lote "${property.title}" (${property.price} / ${property.location}) de ECO HOGAR Inmobiliaria. Deseo agendar una visita o recibir la cotización con financiamiento directo.`
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-[#F8FAFC] text-zinc-900 font-sans selection:bg-emerald-500 selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 text-xs sm:text-sm font-light text-zinc-500">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden">
              <Link to="/" className="hover:text-emerald-700 transition-colors shrink-0">
                Inicio
              </Link>
              <span>/</span>
              <Link to="/#deals" className="hover:text-emerald-700 transition-colors shrink-0">
                Lotes en Venta
              </Link>
              <span>/</span>
              <span className="text-zinc-900 font-medium truncate">{property.title}</span>
            </div>

            <button 
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-black bg-white border border-zinc-200 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full transition-colors shadow-sm cursor-pointer ml-auto"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver</span>
            </button>
          </div>

          {/* 1. ENCABEZADO DE PROPIEDAD */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
              <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 border border-emerald-300 text-emerald-900 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
                VENTA EXCLUSIVA
              </span>
              {property.badge && (
                <span className="px-2.5 py-0.5 rounded-md bg-[#0A2540] text-emerald-300 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
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
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{property.location}</span>
                </p>
              </div>

              {/* Price Tag */}
              <div className="lg:text-right shrink-0 pt-2 lg:pt-0">
                <div className="text-2xl sm:text-4xl font-bold text-emerald-800 tracking-tight">
                  {property.price}
                </div>
                {property.pricePen && (
                  <div className="text-xs sm:text-sm font-medium text-zinc-600 mt-0.5">
                    {property.pricePen}
                  </div>
                )}
                <span className="text-[10px] sm:text-[11px] font-light text-zinc-400 block mt-0.5">
                  Precio al contado o financiado
                </span>
              </div>
            </div>
          </div>

          {/* 2. FOTO PRINCIPAL */}
          <div className="mb-10 sm:mb-14">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm h-[260px] sm:h-[400px] lg:h-[580px] w-full bg-[#0A2540]">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-white">
                <span className="bg-[#0A2540]/85 backdrop-blur-md px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-light border border-emerald-500/20">
                  {property.category} • {property.sqft} m²
                </span>
              </div>
            </div>
          </div>

          {/* 3. CONTENIDO PRINCIPAL */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* COLUMNA IZQUIERDA */}
            <div className="lg:col-span-8 space-y-8 sm:space-y-12">
              
              {/* Sección: Descripción */}
              <div>
                <h2 className="text-lg sm:text-2xl font-medium tracking-tight text-zinc-900 mb-2 sm:mb-3">
                  Descripción & Características del Terreno
                </h2>
                <p className="text-sm sm:text-base font-light text-zinc-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Sección: Ficha Técnica */}
              <div>
                <h2 className="text-lg sm:text-2xl font-medium tracking-tight text-zinc-900 mb-3 sm:mb-4">
                  Ficha Técnica del Lote
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs sm:text-sm font-light text-zinc-700 border-y border-zinc-200 py-4 sm:py-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong className="font-medium text-zinc-900">Tipo de Inmueble:</strong> {property.propertyType}</span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong className="font-medium text-zinc-900">Área Total:</strong> {property.totalArea}</span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong className="font-medium text-zinc-900">Financiamiento:</strong> 100% Directo con DNI</span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong className="font-medium text-zinc-900">Estado de Entrega:</strong> {property.deliveryStatus}</span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong className="font-medium text-zinc-900">Mantenimiento:</strong> {property.maintenance}</span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span><strong className="font-medium text-zinc-900">Seguridad:</strong> {property.security}</span>
                  </div>
                </div>
              </div>

              {/* Sección: Galería de Fotos */}
              <div>
                <h2 className="text-lg sm:text-2xl font-medium tracking-tight text-zinc-900 mb-3 sm:mb-4">
                  Galería del Proyecto
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                  {/* Foto 1 */}
                  <div className="rounded-2xl overflow-hidden bg-zinc-100 shadow-sm">
                    <img 
                      src={property.gallery[0] || property.image} 
                      alt="Vista del Proyecto" 
                      className="w-full h-[220px] sm:h-[300px] object-cover hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  {/* Foto 2 */}
                  <div className="rounded-2xl overflow-hidden bg-zinc-100 shadow-sm">
                    <img 
                      src={property.gallery[1] || property.gallery[0]} 
                      alt="Entorno Natural y Playa" 
                      className="w-full h-[220px] sm:h-[300px] object-cover hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  {/* Foto 3 */}
                  <div className="rounded-2xl overflow-hidden bg-zinc-100 shadow-sm">
                    <img 
                      src={property.gallery[2] || property.gallery[1]} 
                      alt="Áreas Verdes y Vías" 
                      className="w-full h-[220px] sm:h-[300px] object-cover hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  {/* Foto 4: Plano */}
                  <div className="rounded-2xl overflow-hidden bg-white p-2.5 sm:p-3 border border-zinc-200 shadow-sm flex flex-col justify-between">
                    <div className="relative w-full h-[190px] sm:h-[240px] rounded-xl overflow-hidden bg-zinc-50">
                      <img 
                        src={property.floorPlan} 
                        alt="Plano de Manzaneo y Lotización" 
                        className="w-full h-full object-cover filter contrast-105"
                      />
                    </div>
                    <div className="pt-2 text-center">
                      <span className="text-[11px] sm:text-xs font-medium text-zinc-800">Plano de Manzaneo & Lotización</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sección: Ubicación y Entorno */}
              <div>
                <h2 className="text-lg sm:text-2xl font-medium tracking-tight text-zinc-900 mb-2">
                  Ubicación & Conectividad
                </h2>
                <p className="text-xs sm:text-sm font-light text-zinc-600 mb-4 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{property.location}</span>
                </p>

                {/* Contenedor de Mapa */}
                <div className="relative h-[220px] sm:h-[320px] rounded-2xl overflow-hidden border border-zinc-200 mb-5 bg-zinc-100 shadow-sm">
                  <iframe
                    title="Ubicación Inmueble"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src={`https://maps.google.com/maps?q=${encodeURIComponent('Puerto Malabrigo, La Libertad, Peru')}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                    className="w-full h-full filter contrast-95 opacity-90"
                  />
                </div>

                {/* Puntos Cercanos */}
                <div className="space-y-2 text-xs sm:text-sm font-light text-zinc-700">
                  {property.nearbyPlaces.map((np, idx) => (
                    <div key={idx} className="flex items-baseline gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span><strong className="font-medium text-zinc-900">{np.name}:</strong> a solo {np.distance} ({np.category})</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* COLUMNA DERECHA (Sticky Sidebar) */}
            <div className="lg:col-span-4 w-full">
              <div className="lg:sticky lg:top-28 bg-white border border-zinc-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg sm:shadow-xl space-y-5 sm:space-y-6">
                
                {/* Header Sidebar */}
                <div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                    ASESORÍA PERSONALIZADA
                  </span>
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight text-zinc-900">
                    Reserva tu Visita / Cotización
                  </h3>
                  <p className="text-xs font-light text-zinc-500 mt-1">
                    Completa el formulario o contacta directamente con el asesor asignado a este lote.
                  </p>
                </div>

                {/* Perfil del Asesor Asignado */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center gap-3">
                  <img 
                    src={property.assignedAgent.image} 
                    alt={property.assignedAgent.name} 
                    className="w-11 h-11 sm:w-13 sm:h-13 rounded-full object-cover ring-2 ring-emerald-500 shrink-0"
                  />
                  <div className="overflow-hidden">
                    <h4 className="text-xs sm:text-sm font-medium text-zinc-900 truncate">
                      {property.assignedAgent.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs font-light text-zinc-500 truncate">
                      {property.assignedAgent.role}
                    </p>
                    <a 
                      href={`tel:${property.assignedAgent.phone.replace(/\s+/g, '')}`}
                      className="text-[11px] sm:text-xs font-medium text-emerald-700 flex items-center gap-1 mt-0.5 hover:underline"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{property.assignedAgent.phone}</span>
                    </a>
                  </div>
                </div>

                {/* Formulario */}
                {formSubmitted ? (
                  <div className="p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-700 mx-auto" />
                    <h4 className="text-sm sm:text-base font-medium text-zinc-900">
                      ¡Solicitud Recibida!
                    </h4>
                    <p className="text-xs font-light text-zinc-700 leading-relaxed">
                      Gracias {name || 'estimado(a) cliente'}. Te contactaremos por WhatsApp para coordinar tu visita guiada al lote.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5">
                    <div>
                      <label className="text-[11px] sm:text-xs font-medium text-zinc-700 block mb-1">Nombre Completo</label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Juan Pérez"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] sm:text-xs font-medium text-zinc-700 block mb-1">Teléfono / WhatsApp</label>
                      <input 
                        type="tel" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+51 987 654 321"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] sm:text-xs font-medium text-zinc-700 block mb-1">Correo Electrónico (Opcional)</label>
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="correo@ejemplo.com"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500 focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] sm:text-xs font-medium text-zinc-700 block mb-1">Fecha Tentativa de Visita</label>
                      <input 
                        type="date" 
                        value={visitDate}
                        onChange={(e) => setVisitDate(e.target.value)}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-emerald-500 focus:bg-white"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#0A2540] hover:bg-zinc-800 text-white text-xs font-medium py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Enviar Solicitud</span>
                    </button>
                  </form>
                )}

                {/* Botón Principal WhatsApp */}
                <div className="pt-1">
                  <a 
                    href={`https://wa.me/${property.assignedAgent.phone.replace(/\D/g, '')}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-md hover:scale-102"
                  >
                    <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                    <span>Consultar por WhatsApp</span>
                  </a>
                </div>

                <p className="text-[10px] sm:text-[11px] font-light text-zinc-400 text-center leading-relaxed">
                  🔒 Tus datos están protegidos bajo estricta confidencialidad por ECO HOGAR Inmobiliaria.
                </p>

              </div>
            </div>

          </div>

          {/* 4. SECCIÓN INFERIOR: OTROS LOTES */}
          <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-zinc-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-3">
              <div>
                <span className="text-[11px] sm:text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                  RECOMENDADOS
                </span>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-zinc-900">
                  Otros Lotes Disponibles
                </h2>
              </div>
              <Link 
                to="/#deals"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 hover:text-emerald-800"
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
                  className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-xl"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img 
                      src={simProp.image} 
                      alt={simProp.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    
                    {simProp.badge && (
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#0A2540]/85 text-emerald-300 text-[9px] sm:text-[10px] font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md uppercase tracking-wider border border-emerald-400/30">
                        {simProp.badge}
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                      <div className="text-lg sm:text-xl font-bold tracking-tight">
                        {simProp.price}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-medium text-zinc-900 group-hover:text-emerald-700 transition-colors mb-1 line-clamp-1">
                        {simProp.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-light text-zinc-500 flex items-center gap-1 mb-3 sm:mb-4">
                        <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
                        <span className="line-clamp-1">{simProp.location}</span>
                      </p>
                    </div>

                    <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] sm:text-xs font-light text-zinc-600">
                      <div className="flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{simProp.sqft} m²</span>
                      </div>
                      <span className="text-emerald-700 font-medium">Financiamiento Directo</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};
