import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { featuredProperties } from '../data/realEstateData';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { 
  MapPin, 
  Bed, 
  Bath, 
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
    `Hola ${property.assignedAgent.name}, estoy interesado(a) en el departamento "${property.title}" (${property.price} / ${property.location}) a través de KC Inmobiliaria. Deseo agendar una visita o recibir el brochure.`
  );

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen bg-[#F8FAFC] text-zinc-900 font-sans selection:bg-black selection:text-white"
    >
      {/* Navbar */}
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Breadcrumb & Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 text-xs sm:text-sm font-light text-zinc-500">
            <div className="flex items-center gap-1.5 sm:gap-2 overflow-hidden">
              <Link to="/" className="hover:text-black transition-colors shrink-0">
                Inicio
              </Link>
              <span>/</span>
              <Link to="/#deals" className="hover:text-black transition-colors shrink-0">
                Departamentos
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
              <span className="px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-zinc-200 text-zinc-800 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider">
                VENTA EXCLUSIVA
              </span>
              {property.badge && (
                <span className="px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-black text-white text-[10px] sm:text-[11px] font-medium uppercase tracking-wider">
                  {property.badge}
                </span>
              )}
              <span className="px-3 py-0.5 sm:px-3.5 sm:py-1 rounded-full bg-white border border-zinc-200 text-zinc-700 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider">
                {property.deliveryStatus}
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
              <div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-[1.14] mb-2 sm:mb-3">
                  {property.title}
                </h1>
                <p className="text-xs sm:text-base font-light text-zinc-600 flex items-center gap-1.5 sm:gap-2">
                  <MapPin className="w-4 h-4 text-zinc-700 shrink-0" />
                  <span>{property.location}</span>
                </p>
              </div>

              {/* Price Tag */}
              <div className="lg:text-right shrink-0 pt-2 lg:pt-0">
                <div className="text-2xl sm:text-4xl font-semibold text-black tracking-tight">
                  {property.price}
                </div>
                {property.pricePen && (
                  <div className="text-xs sm:text-sm font-medium text-zinc-600 mt-0.5">
                    {property.pricePen}
                  </div>
                )}
                <span className="text-[10px] sm:text-[11px] font-light text-zinc-400 block mt-0.5">
                  Precio referencial en soles
                </span>
              </div>
            </div>
          </div>

          {/* 2. FOTO PRINCIPAL PANORÁMICA */}
          <div className="mb-10 sm:mb-14">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm h-[260px] sm:h-[400px] lg:h-[580px] w-full bg-[#0A0A0A]">
              <img 
                src={property.image} 
                alt={property.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent opacity-60" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-white">
                <span className="bg-[#0A0A0A]/85 backdrop-blur-md px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-light border border-white/10">
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
                <h2 className="text-lg sm:text-2xl font-medium tracking-tight text-black mb-2 sm:mb-3">
                  Descripción del Departamento
                </h2>
                <p className="text-sm sm:text-base font-light text-zinc-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              {/* Sección: Ficha Técnica */}
              <div>
                <h2 className="text-lg sm:text-2xl font-medium tracking-tight text-black mb-3 sm:mb-4">
                  Detalles & Ficha Técnica
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs sm:text-sm font-light text-zinc-700 border-y border-zinc-200 py-4 sm:py-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-black font-bold">•</span>
                    <span><strong className="font-medium text-black">Tipo:</strong> {property.propertyType}</span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-black font-bold">•</span>
                    <span><strong className="font-medium text-black">Área:</strong> {property.totalArea} ({property.coveredArea} techada)</span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-black font-bold">•</span>
                    <span><strong className="font-medium text-black">Dormitorios:</strong> {property.beds} hab. con baño</span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-black font-bold">•</span>
                    <span><strong className="font-medium text-black">Baños:</strong> {property.baths} baños</span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-black font-bold">•</span>
                    <span><strong className="font-medium text-black">Cocheras:</strong> {property.parking}</span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-black font-bold">•</span>
                    <span><strong className="font-medium text-black">Estado:</strong> {property.deliveryStatus}</span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-black font-bold">•</span>
                    <span><strong className="font-medium text-black">Mantenimiento:</strong> {property.maintenance}</span>
                  </div>

                  <div className="flex items-baseline gap-2">
                    <span className="text-black font-bold">•</span>
                    <span><strong className="font-medium text-black">Seguridad:</strong> {property.security}</span>
                  </div>
                </div>
              </div>

              {/* Sección: Galería de Espacios & Planos */}
              <div>
                <h2 className="text-lg sm:text-2xl font-medium tracking-tight text-black mb-3 sm:mb-4">
                  Galería de Espacios
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                  {/* Foto 1 */}
                  <div className="rounded-2xl overflow-hidden bg-zinc-100 shadow-sm">
                    <img 
                      src={property.gallery[0] || property.image} 
                      alt="Sala y Comedor Principal" 
                      className="w-full h-[220px] sm:h-[300px] object-cover hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  {/* Foto 2 */}
                  <div className="rounded-2xl overflow-hidden bg-zinc-100 shadow-sm">
                    <img 
                      src={property.gallery[1] || property.gallery[0]} 
                      alt="Cocina Gourmet" 
                      className="w-full h-[220px] sm:h-[300px] object-cover hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  {/* Foto 3 */}
                  <div className="rounded-2xl overflow-hidden bg-zinc-100 shadow-sm">
                    <img 
                      src={property.gallery[2] || property.gallery[1]} 
                      alt="Dormitorio Máster con Walk-in Closet" 
                      className="w-full h-[220px] sm:h-[300px] object-cover hover:scale-103 transition-transform duration-500"
                    />
                  </div>

                  {/* Foto 4: Plano */}
                  <div className="rounded-2xl overflow-hidden bg-white p-2.5 sm:p-3 border border-zinc-200 shadow-sm flex flex-col justify-between">
                    <div className="relative w-full h-[190px] sm:h-[240px] rounded-xl overflow-hidden bg-zinc-50">
                      <img 
                        src={property.floorPlan} 
                        alt="Plano Arquitectónico y Distribución 2D" 
                        className="w-full h-full object-cover filter contrast-105"
                      />
                    </div>
                    <div className="pt-2 text-center">
                      <span className="text-[11px] sm:text-xs font-medium text-zinc-800">Plano Arquitectónico & Distribución 2D</span>
                    </div>
                  </div>

                  {/* Foto 5 */}
                  <div className="sm:col-span-2 rounded-2xl overflow-hidden bg-zinc-100 shadow-sm">
                    <img 
                      src={property.gallery[3] || property.image} 
                      alt="Terraza y Vista Panorámica" 
                      className="w-full h-[240px] sm:h-[400px] object-cover hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Sección: Ubicación y Entorno */}
              <div>
                <h2 className="text-lg sm:text-2xl font-medium tracking-tight text-black mb-2">
                  Ubicación y Entorno
                </h2>
                <p className="text-xs sm:text-sm font-light text-zinc-600 mb-4 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-zinc-700 shrink-0" />
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
                    src={`https://maps.google.com/maps?q=${encodeURIComponent(property.location.replace(/•/g, ''))}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    className="w-full h-full filter contrast-95 opacity-90"
                  />
                </div>

                {/* Viñetas */}
                <div className="space-y-2 text-xs sm:text-sm font-light text-zinc-700">
                  <div className="flex items-baseline gap-2">
                    <span className="text-black font-bold">•</span>
                    <span>A pocos pasos de las principales áreas verdes, parques y clubes residenciales de la zona.</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-black font-bold">•</span>
                    <span>Cercanía a centros empresariales, bancos, boutiques de diseño y restaurantes de autor.</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-black font-bold">•</span>
                    <span>Conectividad inmediata y acceso fluido a las principales avenidas y vías de Lima.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* COLUMNA DERECHA (Sticky Sidebar) */}
            <div className="lg:col-span-4 w-full">
              <div className="lg:sticky lg:top-28 bg-white border border-zinc-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg sm:shadow-xl space-y-5 sm:space-y-6">
                
                {/* Header Sidebar */}
                <div>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-zinc-500 uppercase tracking-wider block mb-1">
                    ATENCIÓN PERSONALIZADA
                  </span>
                  <h3 className="text-lg sm:text-xl font-medium tracking-tight text-black">
                    Agendar Visita / Recibir Brochure
                  </h3>
                  <p className="text-xs font-light text-zinc-500 mt-1">
                    Completa el formulario o contacta directamente con el asesor asignado a este departamento en KC Inmobiliaria.
                  </p>
                </div>

                {/* Perfil del Asesor Asignado */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center gap-3">
                  <img 
                    src={property.assignedAgent.image} 
                    alt={property.assignedAgent.name} 
                    className="w-11 h-11 sm:w-13 sm:h-13 rounded-full object-cover ring-2 ring-zinc-400 shrink-0"
                  />
                  <div className="overflow-hidden">
                    <h4 className="text-xs sm:text-sm font-medium text-black truncate">
                      {property.assignedAgent.name}
                    </h4>
                    <p className="text-[11px] sm:text-xs font-light text-zinc-500 truncate">
                      {property.assignedAgent.role}
                    </p>
                    <a 
                      href={`tel:${property.assignedAgent.phone.replace(/\s+/g, '')}`}
                      className="text-[11px] sm:text-xs font-medium text-black flex items-center gap-1 mt-0.5 hover:underline"
                    >
                      <Phone className="w-3 h-3" />
                      <span>{property.assignedAgent.phone}</span>
                    </a>
                  </div>
                </div>

                {/* Formulario */}
                {formSubmitted ? (
                  <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-2xl text-center space-y-2">
                    <CheckCircle2 className="w-8 h-8 text-black mx-auto" />
                    <h4 className="text-sm sm:text-base font-medium text-black">
                      ¡Solicitud Recibida!
                    </h4>
                    <p className="text-xs font-light text-zinc-700 leading-relaxed">
                      Gracias {name || 'estimado cliente'}. Nuestro asesor te contactará por WhatsApp a la brevedad.
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
                        placeholder="Ej. Carlos Mendoza"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-black focus:bg-white"
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
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-black focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] sm:text-xs font-medium text-zinc-700 block mb-1">Correo Electrónico</label>
                      <input 
                        type="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="carlos.mendoza@email.com"
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-black focus:bg-white"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] sm:text-xs font-medium text-zinc-700 block mb-1">Fecha Tentativa de Visita</label>
                      <input 
                        type="date" 
                        value={visitDate}
                        onChange={(e) => setVisitDate(e.target.value)}
                        className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-3 py-2 text-xs text-zinc-900 focus:outline-none focus:border-black focus:bg-white"
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-black hover:bg-zinc-800 text-white text-xs font-medium py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Enviar Solicitud de Visita</span>
                    </button>
                  </form>
                )}

                {/* Botón Principal WhatsApp */}
                <div className="pt-1">
                  <a 
                    href={`https://wa.me/${property.assignedAgent.phone.replace(/\D/g, '')}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-zinc-100 hover:bg-black hover:text-white text-black font-medium text-xs sm:text-sm py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-current stroke-none" />
                    <span>Solicitar Asesoría por WhatsApp</span>
                  </a>
                </div>

                {/* Security note */}
                <p className="text-[10px] sm:text-[11px] font-light text-zinc-400 text-center leading-relaxed">
                  🔒 Tus datos están protegidos bajo estricta confidencialidad por KC Inmobiliaria.
                </p>

              </div>
            </div>

          </div>

          {/* 4. SECCIÓN INFERIOR (OTROS DEPARTAMENTOS) */}
          <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-zinc-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-3">
              <div>
                <span className="text-[11px] sm:text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-1">
                  RECOMENDADOS
                </span>
                <h2 className="text-xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-black">
                  Otros Departamentos Recomendados
                </h2>
              </div>
              <Link 
                to="/#deals"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-700 hover:text-black"
              >
                <span>Ver todos los departamentos</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Grid 3 tarjetas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {similarProperties.map((simProp) => (
                <Link 
                  key={simProp.id}
                  to={`/propiedades/${simProp.id}`}
                  className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-200 hover:border-zinc-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-sm hover:shadow-xl"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img 
                      src={simProp.image} 
                      alt={simProp.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
                    
                    {simProp.badge && (
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-black text-white text-[9px] sm:text-[10px] font-medium px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider">
                        {simProp.badge}
                      </div>
                    )}

                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                      <div className="text-lg sm:text-xl font-semibold tracking-tight">
                        {simProp.price}
                      </div>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-medium text-zinc-900 group-hover:text-black transition-colors mb-1 line-clamp-1">
                        {simProp.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-light text-zinc-500 flex items-center gap-1 mb-3 sm:mb-4">
                        <MapPin className="w-3 h-3 text-zinc-600 shrink-0" />
                        <span className="line-clamp-1">{simProp.location}</span>
                      </p>
                    </div>

                    <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] sm:text-xs font-light text-zinc-600">
                      <div className="flex items-center gap-1">
                        <Bed className="w-3.5 h-3.5 text-zinc-600" />
                        <span>{simProp.beds} Dorm.</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-3.5 h-3.5 text-zinc-600" />
                        <span>{simProp.baths} Baños</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Maximize2 className="w-3.5 h-3.5 text-zinc-600" />
                        <span>{simProp.sqft} m²</span>
                      </div>
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
