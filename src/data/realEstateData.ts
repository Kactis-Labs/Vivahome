export interface Property {
  id: string;
  title: string;
  category: string;
  price: string;
  pricePen?: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number; // m² en Perú
  image: string;
  badge?: string;
  // Enhanced detail page fields
  description: string;
  propertyType: string;
  totalArea: string;
  coveredArea: string;
  parking: string;
  deliveryStatus: string;
  maintenance: string;
  security: string;
  gallery: string[];
  floorPlan: string;
  assignedAgent: {
    name: string;
    role: string;
    image: string;
    phone: string;
    email: string;
  };
  nearbyPlaces: {
    name: string;
    category: string;
    distance: string;
  }[];
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  intro?: string;
  mainGoal?: string;
  process?: {
    step: string;
    title: string;
    desc: string;
  }[];
  challenges?: {
    challenge: string;
    solution: string;
  }[];
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  image: string;
  phone: string;
  email: string;
  bio?: string;
  experience?: string;
  skills?: {
    title: string;
    description: string;
  }[];
  career?: {
    period: string;
    description: string;
  }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  readingTime?: string;
  author?: {
    name: string;
    role: string;
    avatar: string;
    quote: string;
  };
  middleImage?: string;
  section1?: {
    title: string;
    paragraphs: string[];
  };
  section2?: {
    title: string;
    paragraphs: string[];
  };
  section3?: {
    title: string;
    paragraphs: string[];
  };
  section4?: {
    title: string;
    intro: string;
    items: string[];
  };
}

export const featuredProperties: Property[] = [
  {
    id: "prop-1",
    title: "Residencia Greenfield & Penthouse",
    category: "Penthouse de Lujo",
    price: "$850,000",
    pricePen: "S/ 3,185,000",
    location: "Av. El Golf, San Isidro • Lima",
    beds: 4,
    baths: 4,
    sqft: 340,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
    badge: "OFERTA TOP",
    description: "Extraordinario penthouse dúplex con vista directa y despejada a las canchas del Club El Golf de San Isidro. Diseñado con alturas libres de 3.10 metros, pisos de madera estructurada europea, cocina de autor con isla en cuarzo Calacatta y terraza panorámica con zona lounge y jacuzzi privado.",
    propertyType: "Penthouse Dúplex de Lujo",
    totalArea: "340 m²",
    coveredArea: "295 m²",
    parking: "3 Cocheras Paralelas Techadas + 1 Depósito",
    deliveryStatus: "Entrega Inmediata (Estreno)",
    maintenance: "S/ 920 / mes aprox.",
    security: "Seguridad 24/7, cámaras CCTV y ascensor directo con código privado",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Marco Benavides",
      role: "Director Comercial & Bróker Principal",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      phone: "+51 987 654 321",
      email: "marco.benavides@megapolys.pe"
    },
    nearbyPlaces: [
      { name: "Lima Golf Club", category: "Deportes & Exclusividad", distance: "2 min a pie" },
      { name: "Bosque El Olivar", category: "Parques & Naturaleza", distance: "4 min en auto" },
      { name: "Zona Gastronómica Dasso", category: "Restaurantes & Cafés", distance: "5 min en auto" },
      { name: "Real Plaza Salaverry", category: "Centros Comerciales", distance: "7 min en auto" }
    ]
  },
  {
    id: "prop-2",
    title: "Casa de Campo Woodland & Piscina",
    category: "Villa Moderna",
    price: "$1,250,000",
    pricePen: "S/ 4,680,000",
    location: "Rinconada de la Molina, La Molina • Lima",
    beds: 5,
    baths: 5,
    sqft: 480,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
    badge: "EXCLUSIVO",
    description: "Imponente residencia contemporánea en el corazón de Rinconada de la Molina con microclima soleado todo el año. Cuenta con amplios jardines paisajistas, piscina temperada sin fin, zona de parrilla techada estilo BBQ Lounge, cava de vinos climatizada y suite principal con doble walk-in closet.",
    propertyType: "Casa / Residencia Unifamiliar",
    totalArea: "750 m² de Terreno",
    coveredArea: "480 m² Construidos",
    parking: "4 Estacionamientos Techados",
    deliveryStatus: "Entrega Inmediata",
    maintenance: "S/ 650 / mes (Junta de Propietarios)",
    security: "Pórtico de Control de Acceso 24/7 y Patrullaje Privado",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Valeria Ugarte",
      role: "Asesora Senior de Inmuebles de Lujo",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      phone: "+51 981 234 567",
      email: "valeria.ugarte@megapolys.pe"
    },
    nearbyPlaces: [
      { name: "Rinconada Country Club", category: "Club Social & Golf", distance: "3 min" },
      { name: "Centro Comercial Molicentro", category: "Compras & Servicios", distance: "5 min" },
      { name: "Colegio Newton & Roosevelt", category: "Colegios Internacionales", distance: "6 min" },
      { name: "Wong Planicie", category: "Supermercados", distance: "4 min" }
    ]
  },
  {
    id: "prop-3",
    title: "Departamento Oceanview & Malecón",
    category: "Dpto. Frente al Mar",
    price: "$980,000",
    pricePen: "S/ 3,670,000",
    location: "Malecón de la Reserva, Miraflores • Lima",
    beds: 3,
    baths: 3,
    sqft: 280,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
    badge: "DESTACADO",
    description: "Espectacular departamento flat con vista frontal en primera fila a la bahía de Miraflores. Amplia terraza con barandas de cristal templado, mamparas termoacústicas de piso a techo, acabados en mármol Botticino y acceso peatonal directo a los parques del malecón.",
    propertyType: "Departamento Flat Frente al Mar",
    totalArea: "280 m²",
    coveredArea: "250 m²",
    parking: "2 Cocheras Paralelas + 1 Depósito",
    deliveryStatus: "Entrega Inmediata",
    maintenance: "S/ 880 / mes aprox.",
    security: "Recepción de Lujo 24/7 y Sistema de Control Biométrico",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Diego Reyna",
      role: "Especialista en Proyectos e Inversión",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      phone: "+51 993 456 789",
      email: "diego.reyna@megapolys.pe"
    },
    nearbyPlaces: [
      { name: "Larcomar", category: "Shopping & Dining", distance: "4 min a pie" },
      { name: "Parque del Amor", category: "Malecón & Parques", distance: "3 min a pie" },
      { name: "Club Terrazas", category: "Deportes & Tenis", distance: "5 min a pie" },
      { name: "JW Marriott Hotel", category: "Hoteles 5 Estrellas", distance: "4 min" }
    ]
  },
  {
    id: "prop-4",
    title: "Casa de Playa Villa Mar",
    category: "Casa de Playa",
    price: "$690,000",
    pricePen: "S/ 2,585,000",
    location: "Playa Chocalla, Asia, Cañete • Lima",
    beds: 5,
    baths: 4,
    sqft: 390,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop",
    badge: "NUEVO INGRESO",
    description: "Moderna casa de playa en condominio privado con acceso directo a la arena y vista panorámica al océano pacífico. Diseñada en 3 niveles con piscina privada en el rooftop, área de fogatero, dormitorios con baño incorporado y cocina abierta integrada a la terraza.",
    propertyType: "Casa de Playa en Condominio",
    totalArea: "390 m²",
    coveredArea: "310 m²",
    parking: "3 Estacionamientos Privados",
    deliveryStatus: "Entrega Inmediata",
    maintenance: "S/ 1,100 / mes (Incluye Club House y Sombrilla)",
    security: "Vigilancia Permanente 24/7 y Garita de Control",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Valeria Ugarte",
      role: "Asesora Senior de Inmuebles de Lujo",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      phone: "+51 981 234 567",
      email: "valeria.ugarte@megapolys.pe"
    },
    nearbyPlaces: [
      { name: "Boulevard de Asia", category: "Centros Comerciales", distance: "8 min en auto" },
      { name: "Club House Privado", category: "Canchas de Tenis & Piscina", distance: "1 min a pie" },
      { name: "Helipuerto Asia", category: "Transporte Privado", distance: "10 min" },
      { name: "Restaurantes de Playa", category: "Gastronomía Marina", distance: "5 min" }
    ]
  },
  {
    id: "prop-5",
    title: "Residencia San Isidro El Olivar",
    category: "Casa Arquitectónica",
    price: "$1,650,000",
    pricePen: "S/ 6,180,000",
    location: "Bosque El Olivar, San Isidro • Lima",
    beds: 5,
    baths: 5,
    sqft: 520,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1400&auto=format&fit=crop",
    badge: "PREVENTA",
    description: "Obra maestra arquitectónica frente a los árboles centenarios del Bosque El Olivar. Fachada en concreto aparente y listones de madera teca, patio interior zen con caída de agua, ascensor hidráulico para todas las plantas y sistema integral de domótica Lutron para iluminación y climatización.",
    propertyType: "Residencia Arquitectónica de Autor",
    totalArea: "620 m² de Terreno",
    coveredArea: "520 m² Construidos",
    parking: "4 Estacionamientos Paralelos",
    deliveryStatus: "Preventa Exclusiva (Entrega Diciembre 2026)",
    maintenance: "S/ 750 / mes aprox.",
    security: "Circuito Cerrado de Seguridad y Blindaje Perimetral",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Marco Benavides",
      role: "Director Comercial & Bróker Principal",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      phone: "+51 987 654 321",
      email: "marco.benavides@megapolys.pe"
    },
    nearbyPlaces: [
      { name: "Parque El Olivar", category: "Patrimonio Histórico & Áreas Verdes", distance: "0 min (Frente al inmueble)" },
      { name: "Av. Conquistadores", category: "Boutiques & Diseño de Interiores", distance: "3 min a pie" },
      { name: "Hotel Country Club", category: "Gastronomía & Salones", distance: "4 min en auto" },
      { name: "Centro Financiero San Isidro", category: "Banca & Negocios", distance: "5 min en auto" }
    ]
  },
  {
    id: "prop-6",
    title: "Casona Moderna Paul de Baudiez",
    category: "Casona Dúplex",
    price: "$780,000",
    pricePen: "S/ 2,920,000",
    location: "Malecón de Barranco, Barranco • Lima",
    beds: 4,
    baths: 3,
    sqft: 310,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop",
    badge: "OPORTUNIDAD",
    description: "Casona de diseño restaurada con espíritu bohemio y acabados contemporáneos en el acantilado de Barranco. Techos de 4 metros de altura con vigas vistas, cocina gourmet industrial, balcón corrido con vista lateral al mar y taller/estudio independiente para artistas o profesionales.",
    propertyType: "Casona Restaurada / Dúplex",
    totalArea: "310 m²",
    coveredArea: "275 m²",
    parking: "2 Cocheras Techadas",
    deliveryStatus: "Entrega Inmediata",
    maintenance: "S/ 580 / mes",
    security: "Monitoreo 24/7 y Alarma Centralizada",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Diego Reyna",
      role: "Especialista en Proyectos e Inversión",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      phone: "+51 993 456 789",
      email: "diego.reyna@megapolys.pe"
    },
    nearbyPlaces: [
      { name: "Puente de los Suspiros", category: "Cultura & Turismo", distance: "4 min a pie" },
      { name: "Malecón Paul de Baudiez", category: "Caminatas & Mar", distance: "1 min a pie" },
      { name: "Galería Dédalo", category: "Arte & Diseño", distance: "5 min a pie" },
      { name: "Restaurante Central & Isolina", category: "Alta Gastronomía", distance: "6 min a pie" }
    ]
  }
];

export const stats: Stat[] = [
  {
    value: "10+",
    label: "Años de Experiencia",
    description: "Brindando asesoría inmobiliaria de alto nivel con total transparencia en el Perú"
  },
  {
    value: "9k+",
    label: "Clientes Satisfechos",
    description: "Familias e inversionistas que concretaron su propiedad ideal con nuestro respaldo"
  },
  {
    value: "10k+",
    label: "Propiedades Gestionadas",
    description: "Portafolio exclusivo administrado bajo estándares de máxima seguridad jurídica"
  }
];

export const services: Service[] = [
  {
    id: "asesoria-compra",
    title: "Asesoría en Compra de Inmuebles",
    description: "Te guiamos en la búsqueda y adquisición de propiedades residenciales y comerciales en Lima y playas con total seguridad jurídica.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    tag: "COMPRA & ASESORÍA",
    intro: "Comprar una propiedad es una de las decisiones financieras más trascendentales. En Megapolys Inmobiliaria brindamos un acompañamiento integral y personalizado desde la definición del perfil del inmueble ideal hasta la firma de la escritura pública en notaría.",
    mainGoal: "Garantizar que tu inversión inmobiliaria sea 100% segura, rentable y adaptada a las necesidades de vida o patrimonio de tu familia, protegiéndote ante riesgos registrales o tributarios.",
    process: [
      { step: "01", title: "Definición de Requerimientos", desc: "Analizamos tu presupuesto, zona de preferencia (San Isidro, Miraflores, La Molina, etc.) y necesidades de metraje." },
      { step: "02", title: "Selección Curada de Opciones", desc: "Filtramos propiedades exclusivas dentro y fuera del mercado abierto con altos estándares arquitectónicos." },
      { step: "03", title: "Visitas Privadas & Guiadas", desc: "Coordinamos recorridos presenciales con asesoría técnica en acabados, iluminación y potencial de revalorización." },
      { step: "04", title: "Negociación Estratégica", desc: "Defendemos tus intereses económicos para lograr el mejor precio de compra y condiciones comerciales favorables." },
      { step: "05", title: "Estudio de Títulos & Cierre Notarial", desc: "Revisión exhaustiva en Sunarp, elaboración de minuta, pago de Alcabala y firma de escritura pública." }
    ],
    challenges: [
      {
        challenge: "Cargas o gravámenes ocultos en la partida registral del vendedor.",
        solution: "Nuestro equipo legal realiza un estudio de títulos exhaustivo en Sunarp de los últimos 10 años antes de firmar cualquier arras o contrato."
      },
      {
        challenge: "Demoras y complicaciones en la calificación del crédito hipotecario bancario.",
        solution: "Trabajamos con ejecutivos senior de BCP, BBVA, Interbank y Scotiabank para agilizar la aprobación y conseguir tasas preferenciales."
      }
    ]
  },
  {
    id: "venta-comercializacion",
    title: "Venta y Comercialización Exclusiva",
    description: "Estrategias de marketing inmobiliario digital y red de compradores calificados para vender tu propiedad al mejor valor de mercado.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
    tag: "VENTA & MARKETING",
    intro: "Maximizamos el valor de venta de tu inmueble aplicando técnicas avanzadas de Home Staging, producción audiovisual 4K y segmentación de clientes con alto poder adquisitivo.",
    mainGoal: "Lograr el cierre de venta en el menor tiempo posible, al precio óptimo de mercado y con filtros rigurosos de solvencia para los potenciales compradores.",
    process: [
      { step: "01", title: "Inspección & Valorización Comercial", desc: "Determinamos el precio justo y competitivo mediante análisis comparativo de mercado (ACM)." },
      { step: "02", title: "Producción Audiovisual de Alto Nivel", desc: "Fotografía arquitectónica profesional, video con dron y recorridos virtuales 3D." },
      { step: "03", title: "Campaña Multicanal Segmentada", desc: "Difusión en portales premium, redes sociales y nuestra base privada de inversionistas calificados." },
      { step: "04", title: "Calificación y Filtro de Clientes", desc: "Verificación de capacidad crediticia antes de programar visitas privadas." },
      { step: "05", title: "Cierre & Liquidación Notarial", desc: "Gestión de contratos, pago de impuesto a la renta de 2da categoría y entrega de llaves." }
    ],
    challenges: [
      {
        challenge: "Propiedades estancadas en el mercado por sobreprecio o mala exposición fotográfica.",
        solution: "Alineamos la tasación con datos reales de transacciones recientes y relanzamos la propiedad con producción fotográfica de calidad editorial."
      },
      {
        challenge: "Pérdida de tiempo con compradores no calificados o sin aprobación bancaria.",
        solution: "Exigimos carta de aprobación hipotecaria o constancia de fondos previa a la negociación formal."
      }
    ]
  },
  {
    id: "tasacion-valorizacion",
    title: "Tasación y Valorización Comercial",
    description: "Informes periciales rigurosos y análisis comparativo de mercado para fijar precios precisos de compra, venta o hipoteca.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    tag: "VALORIZACIÓN TÉCNICA",
    intro: "Conocer el valor real de un inmueble es fundamental antes de cualquier transacción. Elaboramos tasaciones comerciales y reglamentarias elaboradas por peritos certificados.",
    mainGoal: "Proporcionar certeza técnica y financiera sobre el valor comercial y de liquidación de residencias, departamentos y terrenos.",
    process: [
      { step: "01", title: "Recopilación Documentaria", desc: "Revisión de planos, memoria descriptiva, PU/HR de la municipalidad y partida registral." },
      { step: "02", title: "Inspección Física In Situ", desc: "Evaluación del estado de conservación, calidad de acabados, antigüedad e infraestructura." },
      { step: "03", title: "Análisis de Entorno y Zonificación", desc: "Estudio de accesibilidad, servicios, parámetros urbanísticos y proyectos viales cercanos." },
      { step: "04", title: "Muestreo Comparativo de Mercado", desc: "Cruce de datos con ofertas activas y cierres notariales en la misma manzana o sector." },
      { step: "05", title: "Emisión del Informe Pericial", desc: "Entrega del informe completo foliado con metodología de tasación y rango de valor." }
    ],
    challenges: [
      {
        challenge: "Divergencias entre el valor de tasación bancaria y el precio de venta pactado.",
        solution: "Presentamos informes sustentados con metodologías homologadas por el Cuerpo Técnico de Tasaciones del Perú para evitar observaciones bancarias."
      },
      {
        challenge: "Falta de claridad en áreas comunes o porcentajes de copropiedad.",
        solution: "Desglosamos al milímetro el área ocupada, techada y libre con su respectiva alícuota en el reglamento interno."
      }
    ]
  },
  {
    id: "consultoria-inversiones",
    title: "Consultoría en Inversiones & Preventas",
    description: "Identificación de oportunidades en preventa y departamentos de estreno con alto potencial de plusvalía y retorno de alquiler (ROI).",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop",
    tag: "INVERSIÓN PATRIMONIAL",
    intro: "Asesoramos a fondos familiares e inversionistas particulares en la conformación de portafolios inmobiliarios resilientes y altamente rentables en Lima Top.",
    mainGoal: "Maximizar el retorno sobre el capital invertido (Cap Rate y Plusvalía) mitigando los riesgos del ciclo inmobiliario y constructivo.",
    process: [
      { step: "01", title: "Diagnóstico de Perfil de Inversionista", desc: "Determinación de metas de rentabilidad por alquiler o ganancia de capital a mediano plazo." },
      { step: "02", title: "Scouting de Proyectos en Preventa", desc: "Acceso a listas de precios 'Friends & Family' y fases iniciales de preventa de constructoras consolidadas." },
      { step: "03", title: "Evaluación Financiera & Flujos de Caja", desc: "Modelado de rentabilidad por alquiler tradicional, temporal (Airbnb) y tasa interna de retorno (TIR)." },
      { step: "04", title: "Estructuración Legal del Contrato", desc: "Revisión de cartas fianza, cronogramas de desembolso y penalidades por retraso de entrega." },
      { step: "05", title: "Monitoreo y Estrategia de Salida", desc: "Acompañamiento hasta la entrega del departamento y posterior puesta en alquiler o reventa." }
    ],
    challenges: [
      {
        challenge: "Incertidumbre sobre la solvencia y cumplimiento de plazos de la empresa constructora.",
        solution: "Auditamos el historial de entregas de la desarrolladora y exigimos que el proyecto cuente con fideicomiso bancario de garantía."
      },
      {
        challenge: "Riesgo de vacancia prolongada tras la entrega del inmueble.",
        solution: "Seleccionamos únicamente tipologías y metrajes de alta demanda de alquiler corporativo en zonas consolidadas."
      }
    ]
  },
  {
    id: "administracion-propiedades",
    title: "Administración Integral de Propiedades",
    description: "Cuidado patrimonial continuo, mantenimiento preventivo, gestión de pagos y supervisión de servicios para propietarios ausentes.",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1000&auto=format&fit=crop",
    tag: "ADMINISTRACIÓN & CUIDADO",
    intro: "Para propietarios que residen fuera de Lima o en el extranjero, nos encargamos del cuidado integral de sus inmuebles como si fueran propios.",
    mainGoal: "Mantener el estado óptimo de conservación y valor de tus activos inmobiliarios sin que tengas que invertir tu tiempo en gestiones operativas.",
    process: [
      { step: "01", title: "Inventario Detallado Inicial", desc: "Levantamiento fotográfico del estado de mobiliario, equipamiento, luminarias y servicios." },
      { step: "02", title: "Mantenimiento Preventivo y Correctivo", desc: "Coordinación con técnicos certificados para gasfitería, electricidad, pintura y climatización." },
      { step: "03", title: "Gestión de Servicios y Arbitrios", desc: "Pago puntual de mantenimiento del edificio, luz, agua, predial y arbitrios municipales." },
      { step: "04", title: "Supervisión de Seguridad y Accesos", desc: "Control de llaves, visitas técnicas y activación de alarmas." },
      { step: "05", title: "Reportes Periódicos de Estado", desc: "Envío mensual de estados de cuenta consolidados y fotografías de inspección." }
    ],
    challenges: [
      {
        challenge: "Deterioro de inmuebles desocupados por falta de ventilación y mantenimiento.",
        solution: "Programamos visitas quincenales de inspección y limpieza profunda para conservar el inmueble en condiciones impecables."
      },
      {
        challenge: "Complicaciones para pagar arbitrios e impuestos desde el exterior.",
        solution: "Consolidamos todos los pagos municipales y tributarios en una cuenta única con rendición mensual detallada."
      }
    ]
  },
  {
    id: "gestion-alquileres",
    title: "Gestión y Garantía de Alquileres",
    description: "Evaluación crediticia de inquilinos en centrales de riesgo (Infocorp/Equifax), contratos con cláusula de allanamiento futuro y cobro puntual.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    tag: "ALQUILERES SEGUROS",
    intro: "Alquilar una propiedad de lujo requiere máxima cautela. Filtramos rigurosamente a cada postulante y redactamos contratos blindados bajo la legislación peruana vigente.",
    mainGoal: "Asegurar un flujo mensual de ingresos sin retrasos y con total protección legal frente a contingencias de inquilinos morosos.",
    process: [
      { step: "01", title: "Evaluación en Centrales de Riesgo", desc: "Revisión exhaustiva en Infocorp, Sentinel, verificación laboral y antecedentes penales/judiciales." },
      { step: "02", title: "Fijación de Renta y Condiciones", desc: "Establecimiento del canon de arrendamiento y depósito de garantía (2 meses de garantía + 1 de adelanto)." },
      { step: "03", title: "Contrato con Cláusula de Allanamiento", desc: "Redacción de contrato notarial con cláusula de allanamiento a futuro (Ley 30201) y desalojo notarial (Ley 30933)." },
      { step: "04", title: "Firma en Notaría y Entrega de Activo", desc: "Legalización de firmas, inventario de entrega firmado y entrega formal de llaves." },
      { step: "05", title: "Gestión Mensual de Cobranza", desc: "Recaudación del alquiler, pago del impuesto de 1ra categoría a Sunat y atención de incidencias del inquilino." }
    ],
    challenges: [
      {
        challenge: "Inquilinos morosos que se rehúsan a desalojar el inmueble.",
        solution: "Incorporamos siempre la cláusula de allanamiento futuro y desalojo exprés con legalización notarial obligatoria."
      },
      {
        challenge: "Daños en los acabados y pisos tras el vencimiento del contrato.",
        solution: "Exigimos inventario fotográfico notariado y retenemos el depósito de garantía hasta la liquidación de refacciones."
      }
    ]
  }
];

export const agents: Agent[] = [
  {
    id: "agent-1",
    name: "Marco Benavides",
    role: "Director Comercial & Bróker Principal",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    phone: "+51 987 654 321",
    email: "marco.benavides@megapolys.pe",
    bio: "Marco Benavides es el Director Comercial y Bróker Principal de Megapolys Inmobiliaria, liderando las operaciones de inmuebles de lujo e inversión institucional en Lima y balnearios del sur. Con más de 12 años en el sector inmobiliario de alta gama, su gestión se fundamenta en la integridad, el rigor analítico y la construcción de relaciones comerciales de largo plazo.",
    experience: "A lo largo de su carrera, Marco ha asesorado con éxito a fondos de inversión, familias y empresarios en la adquisición y estructuración de proyectos residenciales en San Isidro, Miraflores y Asia. Su profundo conocimiento del mercado peruano garantiza transacciones seguras y altamente rentables.",
    skills: [
      {
        title: "Liderazgo Estratégico",
        description: "Coordina equipos de alto rendimiento fomentando transparencia, servicio al cliente y excelencia técnica en cada cierre."
      },
      {
        title: "Conocimiento del Mercado",
        description: "Análisis continuo de oferta, demanda y plusvalía por m² en Lima Top para anticipar tendencias de revalorización."
      },
      {
        title: "Negociación de Alto Nivel",
        description: "Especialista en alinear intereses entre compradores y vendedores para alcanzar acuerdos comerciales sólidos y mutuamente beneficiosos."
      },
      {
        title: "Planificación Financiera",
        description: "Diseño de modelos de retorno de capital, estructuración crediticia con banca local y análisis de rentabilidad patrimonial."
      }
    ],
    career: [
      {
        period: "2016 — 2018",
        description: "Inició en consultoría inmobiliaria residencial en Lima, especializándose en venta de departamentos de estreno y captación de clientes de banca privada."
      },
      {
        period: "2019 — 2021",
        description: "Consolidó alianzas estratégicas con las principales notarías y desarrolladoras en San Isidro y Miraflores, liderando equipos comerciales."
      },
      {
        period: "2022 — 2024",
        description: "Dirigió transacciones multimillonarias en preventas exclusivas y casas de playa en Asia, consolidando carteras de inversión patrimonial."
      },
      {
        period: "2025 — Presente",
        description: "Lidera la expansión de Megapolys Inmobiliaria en el mercado peruano, impulsando la digitalización de procesos y estándares de servicio VIP."
      }
    ]
  },
  {
    id: "agent-2",
    name: "Valeria Ugarte",
    role: "Asesora Senior de Inmuebles de Lujo",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    phone: "+51 981 234 567",
    email: "valeria.ugarte@megapolys.pe",
    bio: "Valeria Ugarte es Asesora Senior en Megapolys Inmobiliaria, especializada en residencias de diseño, penthouses y arquitectura contemporánea en Lima Top. Combina su formación en arquitectura y bienes raíces para brindar una visión estética y técnica inigualable.",
    experience: "Más de 9 años guiando a compradores exigentes y embajadas en la elección de inmuebles con los más altos estándares de privacidad, seguridad y confort.",
    skills: [
      {
        title: "Curaduría Arquitectónica",
        description: "Evaluación detallada de distribución espacial, iluminación natural y calidad de acabados nobles."
      },
      {
        title: "Atención Diplomática y VIP",
        description: "Gestión confidencial de operaciones para directivos, diplomáticos y clientes de alto patrimonio."
      },
      {
        title: "Home Staging & Presentación",
        description: "Estrategias de puesta en escena para maximizar el atractivo visual y el valor percibido del inmueble."
      },
      {
        title: "Saneamiento Registral",
        description: "Revisión meticulosa de títulos de propiedad, independizaciones y licencias municipales."
      }
    ],
    career: [
      {
        period: "2017 — 2019",
        description: "Consultora de diseño y ventas para desarrollos boutique en Barranco y Miraflores."
      },
      {
        period: "2020 — 2022",
        description: "Especialista en inmuebles residenciales de lujo en San Isidro Golf y La Molina."
      },
      {
        period: "2023 — 2024",
        description: "Asesora premiada por mayor volumen de cierres en penthouses frente al mar en Lima."
      },
      {
        period: "2025 — Presente",
        description: "Asesora Senior en Megapolys Inmobiliaria, gestionando el portafolio más exclusivo de residencias privadas."
      }
    ]
  },
  {
    id: "agent-3",
    name: "Diego Reyna",
    role: "Especialista en Proyectos e Inversión",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    phone: "+51 993 456 789",
    email: "diego.reyna@megapolys.pe",
    bio: "Diego Reyna es especialista en estructuración de inversiones inmobiliarias, preventas y análisis financiero de rentabilidad en Megapolys Inmobiliaria. Su enfoque cuantitativo permite a los inversionistas maximizar el retorno de su capital con total control de riesgos.",
    experience: "Ha asesorado en la colocación de más de 100 unidades en preventa y en la estructuración de portafolios para renta tradicional y temporal.",
    skills: [
      {
        title: "Modelado Financiero (ROI & TIR)",
        description: "Análisis de flujos de caja proyectados, tasas de capitalización (Cap Rate) y rentabilidad neta."
      },
      {
        title: "Negociación en Preventa",
        description: "Acceso a precios preferenciales en fases iniciales de proyectos con constructoras líderes."
      },
      {
        title: "Auditoría de Desarrolladoras",
        description: "Verificación de cartas fianza, fideicomisos y solvencia de constructoras aliadas."
      },
      {
        title: "Estrategias de Salida",
        description: "Planificación de reventa en punto óptimo del ciclo constructivo para maximizar la plusvalía."
      }
    ],
    career: [
      {
        period: "2018 — 2020",
        description: "Analista financiero en fondos de inversión inmobiliaria residencial en Lima."
      },
      {
        period: "2021 — 2023",
        description: "Especialista en comercialización de proyectos multifamiliares en Surco y Jesús María."
      },
      {
        period: "2024",
        description: "Líder de estructuración de compras en preventa para inversionistas institucionales."
      },
      {
        period: "2025 — Presente",
        description: "Especialista Senior de Inversiones en Megapolys Inmobiliaria, coordinando alianzas con constructoras."
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Carlos E. Mendoza",
    role: "Empresario - San Isidro",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Conseguir nuestro penthouse en Av. El Golf fue un proceso impecable. El equipo de Megapolys Inmobiliaria nos brindó asesoría VIP de principio a fin."
  },
  {
    id: "test-2",
    name: "Elena Rostova",
    role: "Arquitecta de Interiores - Miraflores",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Como arquitecta, valoro mucho los acabados y la distribución. Encontraron exactamente el dpto frente al malecón que estaba buscando."
  },
  {
    id: "test-3",
    name: "Juan Pablo Alarcón",
    role: "Inversionista Inmobiliario - Surco",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "La rapidez en el estudio de títulos en Sunarp y la negociación directa con los propietarios hicieron que mi inversión en preventa sea sumamente rentable."
  },
  {
    id: "test-4",
    name: "Sofía & David Larrea",
    role: "Compradores de Casa de Playa - Asia",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Compramos nuestra casa de verano en Chocalla con total tranquilidad. Su equipo legal gestionó todo el proceso notarial sin inconvenientes."
  },
  {
    id: "test-5",
    name: "Miguel Ángel Barreto",
    role: "Gerente de Fondo Patrimonial",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Megapolys Inmobiliaria combina elegancia en la presentación con un rigor financiero excepcional. Son la mejor agencia inmobiliaria boutique en el Perú."
  },
  {
    id: "test-6",
    name: "Amanda K. Wong",
    role: "Directora Creativa - Barranco",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Desde el recorrido virtual en 3D hasta la firma de la escritura pública en notaría, cada detalle fue llevado con profesionalismo."
  }
];

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Cómo agendar una visita privada a un inmueble en Lima o provincias?",
    answer: "Puedes agendar una visita presencial o tour virtual privado haciendo clic en 'Agendar Llamada', escribiéndonos directamente por WhatsApp o completando el formulario de contacto en la propiedad seleccionada."
  },
  {
    id: "faq-2",
    question: "¿Qué asesoría legal e hipotecaria brindan para la compraventa?",
    answer: "Ofrecemos asesoría legal integral que incluye el estudio de títulos en Sunarp, verificación de cargas/gravámenes, minuta de compraventa, coordinación notarial y trámite de crédito hipotecario con BCP, BBVA, Interbank o Scotiabank."
  },
  {
    id: "faq-3",
    question: "¿Manejan proyectos inmobiliarios en preventa y departamentos de estreno?",
    answer: "Sí, contamos con alianzas exclusivas con las mejores desarrolladoras inmobiliarias para ofrecer departamentos de estreno y casas en preventa con precios preferenciales antes de su lanzamiento oficial."
  },
  {
    id: "faq-4",
    question: "¿Cuáles son los impuestos y gastos notariales que corresponden al comprador?",
    answer: "El comprador asume el impuesto de Alcabala (3% sobre el valor que excede las 10 UIT, salvo en primera venta de constructora) más los gastos notariales y de inscripción registral en Sunarp, los cuales desglosamos con total claridad previa a la oferta."
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Consejos Clave para Encontrar el Hogar Ideal para tu Familia en Lima",
    category: "CONSEJOS & GUÍAS",
    date: "13 DE ABRIL, 2026",
    readingTime: "6 Minutos",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    summary: "Guía paso a paso para definir prioridades, evaluar plusvalía por m², asegurar solvencia crediticia y seleccionar la mejor zona residencial en Lima.",
    author: {
      name: "Marco Benavides",
      role: "Director Comercial & Bróker Principal",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      quote: "Asesorando a familias e inversionistas a tomar decisiones patrimoniales seguras y con alta plusvalía en el Perú."
    },
    middleImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    section1: {
      title: "Define tus Prioridades Familiares",
      paragraphs: [
        "Antes de comenzar la búsqueda de un inmueble, es esencial alinear las necesidades presentes y futuras de tu familia. Factores como el número de habitaciones, la cercanía a colegios de prestigio, áreas recreativas y el tiempo diario de traslado son determinantes para garantizar calidad de vida a largo plazo.",
        "En distritos consolidados de Lima como San Isidro, Miraflores o Surco, la distribución interna y la eficiencia del metraje resultan clave para equilibrar espacios sociales con la privacidad de cada miembro del hogar."
      ]
    },
    section2: {
      title: "Establece un Presupuesto Realista y Calificación Bancaria",
      paragraphs: [
        "Determinar con exactitud tu capacidad de inversión evita desgastes y agiliza las negociaciones. Además del precio de lista del inmueble, considera costos anexos como el impuesto de Alcabala, gastos notariales, derechos de inscripción en Sunarp y cuotas iniciales del crédito hipotecario.",
        "Contar con una carta de precalificación emitida por entidades como BCP, BBVA o Interbank te otorga una posición de ventaja competitiva para negociar mejores condiciones de compra."
      ]
    },
    section3: {
      title: "Investiga el Entorno y Seguridad de la Zona",
      paragraphs: [
        "La ubicación define más del 60% del valor futuro de tu propiedad. Evalúa el alumbrado público, cámaras de vigilancia comunales, acceso a ciclovías y la proximidad a centros de salud y parques ecológicos.",
        "Un vecindario con baja densidad y zonificación residencial estrictamente regulada asegura que tu tranquilidad no se vea comprometida por futuras construcciones de alto impacto."
      ]
    },
    section4: {
      title: "Evalúa el Retorno y la Plusvalía a Largo Plazo",
      intro: "Elegir una residencia implica una inversión patrimonial que debe revalorizarse con el paso de los años. Ten en cuenta estas consideraciones clave:",
      items: [
        "Opta por inmuebles en sectores con proyectos de mejora urbana e infraestructura vial consolidada.",
        "Prioriza edificios con certificaciones sostenibles (Edge o LEED) para reducir costos de mantenimiento.",
        "Verifica que el reglamento interno permita flexibilidad ante eventuales adaptaciones familiares.",
        "Consulta el histórico de transacciones notariales en la misma manzana para verificar el precio por m².",
        "Apóyate en asesores inmobiliarios colegiados para blindar la operación con total seguridad jurídica."
      ]
    }
  },
  {
    id: "blog-2",
    title: "Innovaciones Arquitectónicas que Valorizan Tu Propiedad en Lima",
    category: "DISEÑO & ARQUITECTURA",
    date: "08 DE FEBRERO, 2026",
    readingTime: "5 Minutos",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    summary: "Cómo los acabados en piedra natural, cristales herméticos termoacústicos y terrazas panorámicas elevan el precio de reventa.",
    author: {
      name: "Valeria Ugarte",
      role: "Asesora Senior de Inmuebles de Lujo",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      quote: "El diseño funcional y los materiales nobles son el verdadero pilar de la revalorización inmobiliaria."
    },
    middleImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop",
    section1: {
      title: "Integración de Luz Natural y Ventilación Cruzada",
      paragraphs: [
        "El diseño bioclimático se ha convertido en una de las mayores exigencias para compradores de alta gama en Lima. La correcta orientación de mamparas y techos de doble altura maximiza el confort térmico."
      ]
    },
    section2: {
      title: "Materiales Nobles de Bajo Mantenimiento",
      paragraphs: [
        "El uso de cuarzo en encimeras de cocina, porcelanatos de gran formato y maderas tratadas previene el desgaste prematuro y garantiza una presentación impecable al momento de cotizar en el mercado."
      ]
    },
    section3: {
      title: "Espacios Híbridos para Home Office y Bienestar",
      paragraphs: [
        "Las áreas polivalentes diseñadas para teletrabajo y zonas de relajación privada incrementan significativamente el atractivo comercial frente a familias profesionales contemporáneas."
      ]
    },
    section4: {
      title: "Factores Clave de Plusvalía Arquitectónica",
      intro: "Aspectos indispensables en la arquitectura residencial moderna:",
      items: [
        "Balcones corridos con barandas de cristal templado.",
        "Aislamiento termoacústico con ventanas de doble vidriado hermético.",
        "Sistemas domóticos de control de iluminación y seguridad.",
        "Luminarias LED empotradas de bajo consumo energético."
      ]
    }
  },
  {
    id: "blog-3",
    title: "Guía Clave para Invertir en Proyectos Inmobiliarios en Preventa en Perú",
    category: "GUÍA DE INVERSIÓN",
    date: "28 DE ENERO, 2026",
    readingTime: "7 Minutos",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
    summary: "Consejos clave para asegurar precios de entrada de preventa, verificar el respaldo financiero del proyecto y maximizar la rentabilidad de alquiler.",
    author: {
      name: "Diego Reyna",
      role: "Especialista en Proyectos e Inversión",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      quote: "Comprar en preventa con el socio desarrollador adecuado es la vía más sólida para generar plusvalía."
    },
    middleImage: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1000&auto=format&fit=crop",
    section1: {
      title: "Beneficios de Entrada en Fases Iniciales",
      paragraphs: [
        "Adquirir en preventa (en planos o inicio de excavación) permite acceder a descuentos de entre el 10% y el 18% respecto al valor final de entrega del departamento."
      ]
    },
    section2: {
      title: "Auditoría de la Desarrolladora y Fideicomiso Bancario",
      paragraphs: [
        "Verifica que el proyecto cuente con el respaldo de un banco de primera línea y que los fondos de los compradores se depositen en una cuenta fiduciaria blindada."
      ]
    },
    section3: {
      title: "Tipologías con Mayor Demanda de Alquiler",
      paragraphs: [
        "Los departamentos de 1 y 2 dormitorios con cochera en zonas estratégicas de San Isidro y Miraflores presentan la menor tasa de vacancia y el mayor retorno anual por renta (Cap Rate)."
      ]
    },
    section4: {
      title: "Estrategia para Inversionistas Patrimoniales",
      intro: "Pasos recomendados para blindar tu compra en planos:",
      items: [
        "Solicita la copia literal de la matriz del terreno en Sunarp.",
        "Revisa el cronograma de desembolsos vinculado al avance de obra.",
        "Asegúrate de que el contrato contemple penalidades por retraso.",
        "Planifica con anticipación la estrategia de amueblado y puesta en alquiler."
      ]
    }
  }
];
