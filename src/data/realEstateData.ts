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
    id: "lote-villa-club-252",
    title: "Lote Villa Club Malabrigo - 252 m² con Plano Americano",
    category: "Lote de Campo & Playa",
    price: "S/ 32,900",
    pricePen: "$8,800 USD aprox.",
    location: "Villa Club Malabrigo, Puerto Malabrigo • La Libertad",
    beds: 0,
    baths: 0,
    sqft: 252,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    badge: "PREVENTA EXCLUSIVA",
    description: "Tu casa de campo/playa en Puerto Malabrigo en el único proyecto con diseño urbanístico de Estilo Americano. Terreno amplio de 252 m² con plano arquitectónico americano gratis, pórtico monumental, club house, piscina y financiamiento directo 100% sin intereses.",
    propertyType: "Lote Residencial Campestre / Playa",
    totalArea: "252 m² (12m x 21m)",
    coveredArea: "Plano Americano incluido sin costo",
    parking: "Espacio para 2 cocheras privadas",
    deliveryStatus: "En Preventa / Avance Semanal de Obras",
    maintenance: "S/ 50 / mes (Mantenimiento de áreas comunes y piscina)",
    security: "Pórtico de ingreso con control de acceso 24/7 y cerco perimétrico",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Guillermo Mendoza",
      role: "Director de Ventas Golden Inmobiliaria",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      phone: "+51 987 654 321",
      email: "ventas@goldeninmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Playa Puerto Malabrigo (Ola Chicama)", category: "Surf & Playa", distance: "3 min en auto" },
      { name: "Malecón Turístico & Boulevard", category: "Paseo & Gastronomía", distance: "4 min" },
      { name: "Plaza Central de Malabrigo", category: "Centro Urbano", distance: "3 min" },
      { name: "Ciudad de Trujillo", category: "Capital Regional", distance: "50 min" }
    ]
  },
  {
    id: "lote-villa-club-300",
    title: "Lote Premium 300 m² - Frente a Club House & Piscina",
    category: "Lote Estilo Americano",
    price: "S/ 39,500",
    pricePen: "$10,500 USD aprox.",
    location: "Villa Club Malabrigo • Puerto Malabrigo",
    beds: 0,
    baths: 0,
    sqft: 300,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    badge: "0% INTERESES",
    description: "Excelente lote de 300 m² ubicado a pasos del Club House y la zona de piscinas. Ideal para edificar una residencia estilo americano con porche delantero, jardín posterior y terraza BBQ. Incluye planos de distribución y elevaciones.",
    propertyType: "Lote Residencial Familiar",
    totalArea: "300 m² (15m x 20m)",
    coveredArea: "100% plano y listo para edificar",
    parking: "Cochera para 2 o 3 vehículos",
    deliveryStatus: "Preventa Etapa 1",
    maintenance: "S/ 55 / mes",
    security: "Seguridad privada y cámaras de vigilancia",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Mariana Alarcón",
      role: "Asesora Senior de Inversiones Campestres",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      phone: "+51 981 234 567",
      email: "malarcon@goldeninmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Piscina & Zona de Recreación", category: "Área Social", distance: "0 min (Frente)" },
      { name: "Playa Chicama", category: "Playa", distance: "3 min" },
      { name: "Panamericana Norte", category: "Acceso", distance: "6 min" },
      { name: "Paiján", category: "Servicios", distance: "12 min" }
    ]
  },
  {
    id: "lote-villa-club-500",
    title: "Lote Mansión Campestre 500 m² - Esquina Exclusiva",
    category: "Lote Campestre Exclusivo",
    price: "S/ 62,900",
    pricePen: "$16,800 USD aprox.",
    location: "Villa Club Malabrigo • La Libertad",
    beds: 0,
    baths: 0,
    sqft: 500,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    badge: "LOTE MÁS AMPLIO",
    description: "La máxima amplitud para la casa de tus sueños. Terreno de 500 m² en esquina con doble acceso, ideal para construir una casa de campo con piscina privada, amplios jardines y áreas sociales. Financiamiento directo hasta 36 meses sin intereses.",
    propertyType: "Lote Campestre / Quinta",
    totalArea: "500 m² (20m x 25m)",
    coveredArea: "Espacio para casa, piscina privada y huerto",
    parking: "Cochera para 4 autos",
    deliveryStatus: "Preventa Especial",
    maintenance: "S/ 70 / mes",
    security: "Pórtico monumental y rondas permanentes",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Eduardo Castillo",
      role: "Especialista en Proyectos de Alta Gama",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      phone: "+51 993 456 789",
      email: "ecastillo@goldeninmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Parque Central & Vías Arborizadas", category: "Naturaleza", distance: "1 min a pie" },
      { name: "Playa Puerto Malabrigo", category: "Deportes Acuáticos", distance: "4 min" },
      { name: "Ascope Centro", category: "Ciudad", distance: "18 min" },
      { name: "Trujillo", category: "Metrópoli", distance: "50 min" }
    ]
  },
  {
    id: "lote-villa-club-252-b",
    title: "Lote Residencial 252 m² - Etapa 2 con Vista al Valle",
    category: "Lote Estilo Americano",
    price: "S/ 33,500",
    pricePen: "$8,950 USD aprox.",
    location: "Villa Club Malabrigo • Puerto Malabrigo",
    beds: 0,
    baths: 0,
    sqft: 252,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    badge: "PLANO GRATIS",
    description: "Excelente lote de 252 m² con orientación este-oeste, diseñado para maximizar la ventilación y la luz natural. Entrega con plano de arquitectura estilo americano gratis y facilidades de pago directo sin trámites bancarios.",
    propertyType: "Lote Residencial Campestre",
    totalArea: "252 m²",
    coveredArea: "Listo para edificar",
    parking: "Cochera privada",
    deliveryStatus: "Preventa Etapa 2",
    maintenance: "S/ 50 / mes",
    security: "Pórtico y vigilancia 24/7",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Guillermo Mendoza",
      role: "Director de Ventas Golden Inmobiliaria",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      phone: "+51 987 654 321",
      email: "ventas@goldeninmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Zona Surf & Deportes", category: "Deportes", distance: "3 min" },
      { name: "Restaurantes & Comercios", category: "Comercio", distance: "3 min" },
      { name: "Complejo Arqueológico El Brujo", category: "Cultura", distance: "15 min" },
      { name: "Huanchaco", category: "Balneario", distance: "45 min" }
    ]
  },
  {
    id: "lote-villa-club-300-esquina",
    title: "Lote en Esquina 300 m² - Doble Fachada & Retiro Verde",
    category: "Lote en Esquina",
    price: "S/ 42,900",
    pricePen: "$11,400 USD aprox.",
    location: "Villa Club Malabrigo • La Libertad",
    beds: 0,
    baths: 0,
    sqft: 300,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    badge: "DOBLE FACHADA",
    description: "Ubicación privilegiada en esquina con doble frente y retiro ajardinado. Incluye el juego completo de planos americanos con diseño de porche perimetral y techos a dos aguas.",
    propertyType: "Lote en Esquina",
    totalArea: "300 m²",
    coveredArea: "100% plano",
    parking: "Cochera para 3 autos",
    deliveryStatus: "Preventa Etapa 1",
    maintenance: "S/ 55 / mes",
    security: "Pórtico principal y control biométrico",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Mariana Alarcón",
      role: "Asesora Senior de Inversiones Campestres",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      phone: "+51 981 234 567",
      email: "malarcon@goldeninmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Pórtico Monumental", category: "Ingreso", distance: "1 min" },
      { name: "Playa Malabrigo", category: "Mar", distance: "3 min" },
      { name: "Paiján", category: "Mercado", distance: "10 min" },
      { name: "Trujillo", category: "Ciudad", distance: "50 min" }
    ]
  },
  {
    id: "lote-villa-club-500-b",
    title: "Lote Quinta de 500 m² - Vista Panorámica al Atardecer",
    category: "Lote Campestre Exclusivo",
    price: "S/ 64,500",
    pricePen: "$17,200 USD aprox.",
    location: "Villa Club Malabrigo • Puerto Malabrigo",
    beds: 0,
    baths: 0,
    sqft: 500,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    badge: "ALTA PLUSVALÍA",
    description: "Macrolote exclusivo de 500 m² para construir la quinta o casa de playa de tus sueños con piscina, pérgolas y canchas. Proyecto con diseño y estándares de Estilo Americano únicos en La Libertad.",
    propertyType: "Lote Quinta Campestre",
    totalArea: "500 m²",
    coveredArea: "Espacio amplio para recreación",
    parking: "Cochera privada para varios vehículos",
    deliveryStatus: "Preventa Especial",
    maintenance: "S/ 70 / mes",
    security: "Pórtico de ingreso monumental",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Eduardo Castillo",
      role: "Especialista en Proyectos de Alta Gama",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      phone: "+51 993 456 789",
      email: "ecastillo@goldeninmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Playa Chicama", category: "Mar", distance: "3 min" },
      { name: "Pórtico Monumental", category: "Control", distance: "2 min" },
      { name: "Chicama", category: "Valle", distance: "15 min" },
      { name: "Trujillo", category: "Capital", distance: "50 min" }
    ]
  }
];

export const stats: Stat[] = [
  {
    value: "250m²+",
    label: "Lotes Más Amplios",
    description: "Metrajes de 252m², 300m² y 500m² diseñados para tu casa con piscina y jardín"
  },
  {
    value: "0%",
    label: "Intereses",
    description: "Financiamiento directo con la inmobiliaria sin intermediación de bancos ni requisitos imposibles"
  },
  {
    value: "100%",
    label: "Plano Americano Gratis",
    description: "Te entregamos los planos arquitectónicos de tu casa de campo o playa sin costo adicional"
  }
];

export const services: Service[] = [
  {
    id: "venta-lotes-estilo-americano",
    title: "Venta de Lotes de Campo y Playa con Estilo Americano",
    description: "Lotes amplios de 252m², 300m² y 500m² en Villa Club Malabrigo con financiamiento directo sin intereses.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    tag: "ESTILO AMERICANO",
    intro: "En Golden Inmobiliaria diseñamos comunidades planificadas que combinan la tranquilidad de la vida campestre con la frescura del mar de Puerto Malabrigo bajo el concepto arquitectónico de Estilo Americano.",
    mainGoal: "Brindarte un terreno espacioso con valor arquitectónico superior y facilidades de pago directo para que construyas la casa que siempre soñaste.",
    process: [
      { step: "01", title: "Visita y Elección de Lote", desc: "Elige entre lotes de 252m², 300m² o 500m² en esquina, frente a parque o cerca al Club House." },
      { step: "02", title: "Entrega de Planos Americanos Gratis", desc: "Recibe el set completo de planos de arquitectura para edificar tu casa con porche y piscina." },
      { step: "03", title: "Financiamiento Directo 0% Intereses", desc: "Paga tu cuota inicial y financia el saldo en cuotas mensuales fijas sin intereses bancarios." },
      { step: "04", title: "Avance de Obras Semanal", desc: "Monitorea la habilitación de pórtico, vías, redes de servicios y áreas verdes semana a semana." }
    ],
    challenges: [
      {
        challenge: "Lotes reducidos y hacinados en los proyectos convencionales.",
        solution: "En Villa Club Malabrigo ofrecemos los lotes más amplios de la zona desde 252m² hasta 500m²."
      },
      {
        challenge: "Cobro de intereses bancarios que encarecen el precio del terreno.",
        solution: "Financiamiento 100% directo con Golden Inmobiliaria a 0% de interés."
      }
    ]
  },
  {
    id: "diseno-planos-arquitectonicos",
    title: "Planos Arquitectónicos de Estilo Americano Gratis",
    description: "Diseños exclusivos para casas de campo y playa con porches, techos a dos aguas, terrazas y piscinas.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    tag: "ARQUITECTURA GRATIS",
    intro: "Cada comprador en Villa Club Malabrigo recibe sin costo el plano arquitectónico completo para construir su vivienda bajo el concepto Estilo Americano.",
    mainGoal: "Ahorrarte miles de soles en diseño arquitectónico y garantizar una estética homogénea y de alta plusvalía en el condominio.",
    process: [
      { step: "01", title: "Selección del Modelo de Casa", desc: "Modelos de 1 y 2 pisos con distribución abierta, cocina americana y porche exterior." },
      { step: "02", title: "Planos de Distribución y Elevaciones", desc: "Documentación técnica lista para trámites municipales de construcción." },
      { step: "03", title: "Asesoría en Materiales y Acabados", desc: "Guía de construcción sostenible adaptada al clima soleado del norte liberteño." }
    ],
    challenges: [
      {
        challenge: "Alto costo de contratación de arquitectos para el diseño de casas de campo.",
        solution: "Golden Inmobiliaria te entrega el juego de planos completo 100% gratis con la compra de tu lote."
      }
    ]
  },
  {
    id: "habilitacion-club-house-amenities",
    title: "Habilitación Urbanística & Amenities de Primera",
    description: "Pórtico monumental de ingreso, club house, piscinas, zonas deportivas y cerco perimétrico con avance semanal.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    tag: "AMENITIES PREMIUM",
    intro: "Villa Club Malabrigo cuenta con obras de habilitación en ejecución continua: pórtico de control, vías afirmadas, parques temáticos y club house.",
    mainGoal: "Crear un entorno residencial seguro, ordenado y con espacios de recreación de primer nivel para toda la familia.",
    process: [
      { step: "01", title: "Pórtico Monumental y Accesos", desc: "Control de seguridad permanente con caseta de vigilancia y cámaras." },
      { step: "02", title: "Piscina y Club House", desc: "Zonas de descanso, bar exterior y salones para reuniones familiares." },
      { step: "03", title: "Reportes Semanales de Obra", desc: "Publicación periódica en video y fotos de los avances físicos del proyecto." }
    ],
    challenges: [
      {
        challenge: "Inmobiliarias que prometen obras pero no muestran avances reales.",
        solution: "En Golden Inmobiliaria publicamos avances de obra semanalmente en todas nuestras plataformas."
      }
    ]
  },
  {
    id: "asesoria-financiera-inversion",
    title: "Asesoría en Inversión Patrimonial y Plusvalía",
    description: "Estrategias para maximizar el retorno de inversión en Puerto Malabrigo gracias al auge del surf y turismo.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    tag: "INVERSIÓN & PLUSVALÍA",
    intro: "Puerto Malabrigo es una de las zonas de mayor revalorización del norte peruano. Te asesoramos en la adquisición de lotes en preventa para capturar toda la plusvalía.",
    mainGoal: "Generar rentabilidad y seguridad patrimonial a mediano y largo plazo para tu familia.",
    process: [
      { step: "01", title: "Análisis de Revalorización", desc: "Estudio del crecimiento de precios por etapa de preventa y habilitación." },
      { step: "02", title: "Plan de Inversión y Cuotas", desc: "Cronograma de pagos sin intereses ajustado a tu flujo financiero." },
      { step: "03", title: "Potencial de Renta Turística", desc: "Asesoría para alquiler de casas a turistas y surfistas internacionales." }
    ],
    challenges: [
      {
        challenge: "Incertidumbre sobre el retorno financiero de la compra de terrenos.",
        solution: "Precios de preventa competitivos que aseguran una ganancia inmediata al avanzar las etapas."
      }
    ]
  }
];

export const agents: Agent[] = [
  {
    id: "guillermo-mendoza",
    name: "Guillermo Mendoza",
    role: "Director de Ventas & Proyectos",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    phone: "+51 987 654 321",
    email: "ventas@goldeninmobiliaria.pe",
    bio: "Guillermo Mendoza lidera la comercialización de Villa Club Malabrigo en Golden Inmobiliaria. Con más de 12 años de trayectoria en el sector inmobiliario campestre y de playa, ha impulsado proyectos residenciales innovadores con estilo americano en la costa norte.",
    experience: "Especialista en estructuración de condominios campestres, planes de financiamiento sin intereses y desarrollo urbanístico.",
    skills: [
      {
        title: "Financiamiento Directo 0% Intereses",
        description: "Elaboración de cronogramas de pago flexibles y accesibles sin bancos."
      },
      {
        title: "Asesoría en Estilo Americano",
        description: "Orientación en la elección de planos y distribución de lotes amplios."
      },
      {
        title: "Atención y Guiado a Proyectos",
        description: "Coordinación de visitas personalizadas a Villa Club Malabrigo."
      }
    ],
    career: [
      {
        period: "2014 — 2018",
        description: "Supervisor comercial en proyectos residenciales en La Libertad."
      },
      {
        period: "2019 — 2022",
        description: "Gerente de ventas en desarrollos campestres del norte del Perú."
      },
      {
        period: "2023 — Presente",
        description: "Director de Ventas en Golden Inmobiliaria para Villa Club Malabrigo."
      }
    ]
  },
  {
    id: "mariana-alarcon",
    name: "Mariana Alarcón",
    role: "Asesora Senior de Inversiones Campestres",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    phone: "+51 981 234 567",
    email: "malarcon@goldeninmobiliaria.pe",
    bio: "Mariana Alarcón es asesora inmobiliaria senior especializada en lotes de campo y playa. Su objetivo es brindar a cada familia la mejor orientación para adquirir su lote con plano americano gratis en Puerto Malabrigo.",
    experience: "Ha asesorado a más de 350 familias en la compra de lotes de 252m², 300m² y 500m² con financiamiento directo.",
    skills: [
      {
        title: "Atención Personalizada",
        description: "Asesoría clara sobre ubicación, orientación solar y metrajes."
      },
      {
        title: "Gestión de Preventa",
        description: "Acceso a las mejores tarifas de lanzamiento y promociones."
      },
      {
        title: "Acompañamiento Postventa",
        description: "Seguimiento al avance semanal de obras y entrega del terreno."
      }
    ],
    career: [
      {
        period: "2017 — 2021",
        description: "Consultora inmobiliaria en proyectos de playa en Trujillo."
      },
      {
        period: "2022 — Presente",
        description: "Asesora Senior en Golden Inmobiliaria."
      }
    ]
  },
  {
    id: "eduardo-castillo",
    name: "Eduardo Castillo",
    role: "Especialista en Proyectos de Alta Gama",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    phone: "+51 993 456 789",
    email: "ecastillo@goldeninmobiliaria.pe",
    bio: "Eduardo Castillo coordina la atención a inversionistas y familias interesadas en macrolotes de 500 m² y lotes en esquina dentro de Villa Club Malabrigo.",
    experience: "Más de 8 años de experiencia en desarrollo de quintas campestres y casas de playa.",
    skills: [
      {
        title: "Inversión Patrimonial",
        description: "Cálculo de plusvalía y retorno de inversión por etapas de preventa."
      },
      {
        title: "Visitas de Campo",
        description: "Recorridos guiados por el terreno y explicación de linderos."
      },
      {
        title: "Arquitectura & Planos",
        description: "Explicación técnica de los planos de Estilo Americano incluidos gratis."
      }
    ],
    career: [
      {
        period: "2016 — 2020",
        description: "Asesor de inversiones en bienes raíces en la costa norte."
      },
      {
        period: "2021 — Presente",
        description: "Especialista en Proyectos en Golden Inmobiliaria."
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Familia Rivas Córdova",
    role: "Propietarios Lote 300 m² - Villa Club",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Elegimos Villa Club Malabrigo por el concepto de Estilo Americano y los lotes amplios. Nos entregaron el plano de la casa gratis y estamos pagando sin intereses. ¡Una maravilla!"
  },
  {
    id: "test-2",
    name: "Dr. Carlos Fernández",
    role: "Inversionista Lote 500 m²",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "El avance de obras semanal que publican demuestra la seriedad de Golden Inmobiliaria. El metraje de 500 m² me permite tener casa de playa, piscina propia y jardín para mis nietos."
  },
  {
    id: "test-3",
    name: "Sra. Patricia Benavides",
    role: "Compradora Lote 252 m²",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Aproveché el precio de preventa y la atención de Guillermo fue excelente. El clima de Puerto Malabrigo es soleado todo el año y estar a minutos de la playa es impagable."
  },
  {
    id: "test-4",
    name: "Ing. Jorge & Lucía Valdivia",
    role: "Propietarios en Esquina",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Los planos americanos incluidos son preciosos, con porche delantero y acabados que no encuentras en otros proyectos. Muy contentos con la inversión."
  },
  {
    id: "test-5",
    name: "Vanessa Loyola",
    role: "Emprendedora - Trujillo",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "El financiamiento directo sin intereses facilitó toda la compra. Separe mi lote con monto mínimo y las cuotas mensuales son sumamente cómodas."
  },
  {
    id: "test-6",
    name: "Familia Salazar Meza",
    role: "Compradores Etapa 1",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Excelente inmobiliaria. Cumplieron con todos los términos del contrato y el pórtico de ingreso está quedando espectacular."
  }
];

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Qué es el concepto de Estilo Americano en Villa Club Malabrigo?",
    answer: "Villa Club Malabrigo es el único proyecto en Puerto Malabrigo diseñado bajo la arquitectura residencial americana: lotes amplios desde 252m² hasta 500m², retiros ajardinados, porches delanteros, techos a dos aguas, club house y planos arquitectónicos incluidos gratis para cada propietario."
  },
  {
    id: "faq-2",
    question: "¿Cómo funciona el financiamiento directo sin intereses?",
    answer: "Ofrecemos financiamiento 100% directo con Golden Inmobiliaria. Pagas una cuota inicial accesible y el saldo lo cancelas en cuotas fijas a 0% de interés, sin necesidad de evaluación crediticia en bancos, únicamente con tu DNI."
  },
  {
    id: "faq-3",
    question: "¿Qué metrajes de lotes tienen disponibles y cuáles son los precios de preventa?",
    answer: "Contamos con lotes de 252 m², 300 m² y 500 m² (los más amplios de la zona). Al encontrarnos en etapa de preventa, puedes acceder a tarifas preferenciales desde S/ 32,900 con importantes descuentos por pago al contado."
  },
  {
    id: "faq-4",
    question: "¿Cómo puedo constatar el avance de obras y visitar el terreno?",
    answer: "Publicamos reportes de avance de obras semanalmente en video y fotos. Además, organizamos visitas guiadas todos los fines de semana con movilidad de ida y vuelta para que conozcas la ubicación y elijas tu lote en persona."
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Descubre el Estilo Americano: El Nuevo Concepto Residencial en Puerto Malabrigo",
    category: "ARQUITECTURA & DISEÑO",
    date: "12 DE JULIO, 2026",
    readingTime: "5 Minutos",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    summary: "Conoce por qué las casas de estilo americano con porche, jardín y amplios espacios están revolucionando la forma de vivir en la costa liberteña.",
    author: {
      name: "Guillermo Mendoza",
      role: "Director de Ventas",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      quote: "Una casa espaciosa cerca al mar cambia por completo la calidad de vida de tu familia."
    },
    middleImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    section1: {
      title: "¿Qué Caracteriza a una Casa de Estilo Americano?",
      paragraphs: [
        "El estilo americano se distingue por su generosidad de espacios, diseño de porche perimetral delantero, techos inclinados a dos aguas, cocina integrada con isla central y una conexión fluida entre los ambientes interiores y los jardines exteriores.",
        "En Villa Club Malabrigo adaptamos este concepto al clima soleado del norte peruano, creando condominios con lotes desde 252 m² hasta 500 m² que garantizan privacidad, confort y luz natural."
      ]
    },
    section2: {
      title: "Plano Americano Gratis con Cada Lote",
      paragraphs: [
        "Para asegurar que tu inversión mantenga una armonía estética y valor de reventa superior, Golden Inmobiliaria entrega a cada comprador el juego de planos de arquitectura completamente gratis, ahorrándote tiempo y costos en honorarios profesionales."
      ]
    },
    section3: {
      title: "Ubicación Privilegiada en Puerto Malabrigo",
      paragraphs: [
        "Puerto Malabrigo (Chicama) es un destino turístico y de surf de renombre mundial. Vivir aquí significa disfrutar de aire puro, atardeceres mágicos y actividades deportivas los 365 días del año."
      ]
    },
    section4: {
      title: "Ventajas Exclusivas de Villa Club Malabrigo",
      intro: "Beneficios de invertir con Golden Inmobiliaria:",
      items: [
        "Los lotes más amplios de la zona: 252m², 300m² y 500m².",
        "Plano de arquitectura estilo americano gratis.",
        "Financiamiento directo 100% sin intereses.",
        "Avance de obras verificado semanalmente.",
        "Pórtico monumental, club house y piscina."
      ]
    }
  },
  {
    id: "blog-2",
    title: "Por Qué Comprar en Preventa es la Mejor Estrategia de Inversión Inmobiliaria",
    category: "INVERSIÓN & PLUSVALÍA",
    date: "28 DE JUNIO, 2026",
    readingTime: "4 Minutos",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    summary: "Aprende cómo maximizar tu rentabilidad adquiriendo lotes en primera etapa de preventa y capturando toda la valorización de obra.",
    author: {
      name: "Mariana Alarcón",
      role: "Asesora Senior",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      quote: "Comprar en preventa te asegura el precio más bajo y la mejor ubicación en el condominio."
    },
    middleImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop",
    section1: {
      title: "El Ciclo de Plusvalía en Lotes de Campo y Playa",
      paragraphs: [
        "Cuando un proyecto inicia su preventa, los precios de lanzamiento ofrecen descuentos significativos respecto al valor final con obras concluidas. A medida que avanza la habilitación del pórtico, vías y club house, el precio por metro cuadrado aumenta automáticamente."
      ]
    },
    section2: {
      title: "Financiamiento 0% Intereses: Tu Dinero Rinde Más",
      paragraphs: [
        "Al financiar directamente con Golden Inmobiliaria sin intereses bancarios, el 100% de tus cuotas va directamente al pago del terreno, maximizando el rendimiento de tu capital sin pagar sobrecostos a intermediarios."
      ]
    },
    section3: {
      title: "Elección de las Mejores Ubicaciones",
      paragraphs: [
        "En la etapa de preventa tienes la oportunidad de elegir los lotes en esquina, frente al parque o más cercanos al club house antes de que se agoten."
      ]
    },
    section4: {
      title: "Pasos para Asegurar tu Lote en Preventa",
      intro: "Cómo reservar tu terreno hoy:",
      items: [
        "1. Agenda tu visita a Villa Club Malabrigo.",
        "2. Elige el metraje (252m², 300m² o 500m²).",
        "3. Separa con monto promocional de preventa.",
        "4. Firma contrato con financiamiento directo 0% intereses."
      ]
    }
  },
  {
    id: "blog-3",
    title: "Consejos para Construir tu Casa de Campo con Piscina en Puerto Malabrigo",
    category: "CONSTRUCCIÓN & VIDA",
    date: "15 DE MAYO, 2026",
    readingTime: "5 Minutos",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    summary: "Guía práctica para planificar la construcción de tu casa de descanso aprovechando el clima cálido, la luz natural y el plano americano gratis.",
    author: {
      name: "Eduardo Castillo",
      role: "Especialista en Proyectos",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      quote: "El diseño adecuado permite que tu casa se sienta como un resort privado todos los días."
    },
    middleImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
    section1: {
      title: "Aprovechamiento del Clima Soleado",
      paragraphs: [
        "En Puerto Malabrigo el sol brilla casi todo el año. Diseñar una terraza con porche techado orientada hacia el atardecer y una piscina central crea el ambiente perfecto para reuniones familiares de fin de semana."
      ]
    },
    section2: {
      title: "Ventajas de Lotes de 252m² a 500m²",
      paragraphs: [
        "A diferencia de los lotes pequeños de 100m² donde la casa ocupa todo el terreno, en Villa Club Malabrigo dispones de espacio suficiente para áreas verdes, cochera para múltiples autos, zona de parrilla y piscina."
      ]
    },
    section3: {
      title: "Sostenibilidad y Ahorro",
      paragraphs: [
        "Recomendamos integrar paneles solares y vegetación nativa en los retiros ajardinados para mantener tu casa fresca y con bajo costo de mantenimiento."
      ]
    },
    section4: {
      title: "Elementos Esenciales de tu Casa de Campo",
      intro: "Espacios recomendados:",
      items: [
        "Porche delantero con columnas de madera o concreto blanco.",
        "Cocina americana abierta hacia la sala y terraza.",
        "Piscina con solárium y piso atérmico.",
        "Zona de parrilla (BBQ) techada."
      ]
    }
  }
];
