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
    id: "lote-malabrigo-1",
    title: "Lote Residencial Cerca a la Playa - Puerto Malabrigo",
    category: "Lote de Playa",
    price: "S/ 14,900",
    pricePen: "$3,980 USD aprox.",
    location: "Puerto Malabrigo, Ascope • La Libertad",
    beds: 0,
    baths: 0,
    sqft: 120,
    image: "/images/banner-eco-hogar.png",
    badge: "PRECIO DE LANZAMIENTO",
    description: "Cumple el sueño del terreno propio a pocos minutos de la mítica playa de Puerto Malabrigo (Chicama). Proyecto campestre y playero con pórtico de ingreso monumental, áreas verdes, vías afirmadas y proyección de servicios de agua y luz. Financiamiento directo al 100% sin evaluación bancaria.",
    propertyType: "Lote Residencial de Playa & Campo",
    totalArea: "120 m² (8m x 15m)",
    coveredArea: "Listo para edificar",
    parking: "Espacio para cochera privada en lote",
    deliveryStatus: "Entrega Inmediata / En Habilitación",
    maintenance: "S/ 35 / mes (Mantenimiento de áreas comunes)",
    security: "Pórtico de acceso monumental y cerco perimétrico vivo",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Renzo Cabrera",
      role: "Gerente de Proyectos & Asesor Senior",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      phone: "+51 987 654 321",
      email: "ventas@ecohogarinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Playa Puerto Malabrigo (Ola Izquierda Más Larga del Mundo)", category: "Surf & Playa", distance: "4 min en auto" },
      { name: "Plaza de Armas de Malabrigo", category: "Centro Urbano", distance: "3 min" },
      { name: "Carretera Panamericana Norte", category: "Conectividad", distance: "8 min" },
      { name: "Ciudad de Trujillo", category: "Capital Regional", distance: "55 min" }
    ]
  },
  {
    id: "lote-campestre-2",
    title: "Lote Campestre Los Álamos - Vista Panorámica al Valle",
    category: "Lote Campestre",
    price: "S/ 18,500",
    pricePen: "$4,950 USD aprox.",
    location: "Valle Chicama, Ascope • La Libertad",
    beds: 0,
    baths: 0,
    sqft: 160,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400&auto=format&fit=crop",
    badge: "FINANCIAMIENTO DIRECTO",
    description: "Espacioso lote campestre ideal para construir tu casa de campo o huerto familiar. Rodeado de árboles y vegetación natural, con clima cálido y soleado todo el año. Cuenta con acceso vehicular, zonas de esparcimiento familiar y factibilidad de servicios.",
    propertyType: "Lote Campestre / Casa de Campo",
    totalArea: "160 m² (10m x 16m)",
    coveredArea: "100% Aprovechable",
    parking: "Cochera dentro del lote",
    deliveryStatus: "Entrega Inmediata",
    maintenance: "S/ 30 / mes",
    security: "Control de acceso con tranquera y vigilancia",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Dayana Paredes",
      role: "Asesora Especialista en Terrenos Campestres",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      phone: "+51 981 234 567",
      email: "dparedes@ecohogarinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Río Chicama & Áreas Naturales", category: "Naturaleza", distance: "5 min a pie" },
      { name: "Pueblo Tradicional de Paiján", category: "Servicios & Mercado", distance: "10 min" },
      { name: "Complejo Arqueológico El Brujo", category: "Cultura & Turismo", distance: "15 min" },
      { name: "Trujillo", category: "Ciudad", distance: "50 min" }
    ]
  },
  {
    id: "lote-esquina-3",
    title: "Lote Premium de Esquina Frente a Parque Central",
    category: "Lote de Playa & Campo",
    price: "S/ 22,900",
    pricePen: "$6,100 USD aprox.",
    location: "EcoHogar Malabrigo Etapa 1 • La Libertad",
    beds: 0,
    baths: 0,
    sqft: 180,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop",
    badge: "FRENTE A PARQUE",
    description: "Ubicación inmejorable en esquina frente al parque central del condominio. Ideal para casa de retiro, casa de playa o proyecto comercial (bodega, café, hospedaje). Doble frente de calle con excelente iluminación y ventilación marina.",
    propertyType: "Lote en Esquina / Multifamiliar",
    totalArea: "180 m² (12m x 15m)",
    coveredArea: "Listo para construir",
    parking: "Doble acceso vehicular",
    deliveryStatus: "Etapa 1 Habilitada",
    maintenance: "S/ 40 / mes",
    security: "Pórtico de ingreso y rondas de vigilancia",
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Carlos Benites",
      role: "Coordinador de Visitas & Ventas de Campo",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      phone: "+51 993 456 789",
      email: "cbenites@ecohogarinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Parque Central & Juegos Infantiles", category: "Áreas Verdes", distance: "0 min (Frente)" },
      { name: "Malecón Turístico de Malabrigo", category: "Paseo Marítimo", distance: "5 min" },
      { name: "Restaurantes de Pescados & Mariscos", category: "Gastronomía", distance: "4 min" },
      { name: "Huanchaco", category: "Balneario", distance: "45 min" }
    ]
  },
  {
    id: "lote-playa-4",
    title: "Lote EcoHogar Malabrigo - Segunda Etapa con Financiamiento",
    category: "Lote de Playa",
    price: "S/ 15,900",
    pricePen: "$4,240 USD aprox.",
    location: "Puerto Malabrigo, Ascope • La Libertad",
    beds: 0,
    baths: 0,
    sqft: 130,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop",
    badge: "CUOTAS DESDE S/ 350",
    description: "Adquiere tu lote con inicial accesible y paga el saldo en cómodas cuotas mensuales fijas sin intereses bancarios. Disfruta de la brisa marina, atardeceres mágicos y la tranquilidad que solo el norte liberteño te puede ofrecer.",
    propertyType: "Lote de Playa / Preventa",
    totalArea: "130 m²",
    coveredArea: "Listo para inicio de obra",
    parking: "Cochera propia",
    deliveryStatus: "En Preventa con Descuento",
    maintenance: "S/ 35 / mes",
    security: "Pórtico de seguridad permanente",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Renzo Cabrera",
      role: "Gerente de Proyectos & Asesor Senior",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      phone: "+51 987 654 321",
      email: "ventas@ecohogarinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Muelle Artesanal de Malabrigo", category: "Turismo & Paseos", distance: "5 min" },
      { name: "Zona Hotelera & Surf Camps", category: "Hospedajes", distance: "4 min" },
      { name: "Grifo & Minimarket", category: "Servicios", distance: "2 min" },
      { name: "Pacasmayo", category: "Ciudad & Puerto", distance: "35 min" }
    ]
  },
  {
    id: "lote-comercial-5",
    title: "Lote Comercial sobre Avenida Principal de Ingreso",
    category: "Lote Comercial",
    price: "S/ 29,900",
    pricePen: "$7,980 USD aprox.",
    location: "Av. Principal EcoHogar, Malabrigo • La Libertad",
    beds: 0,
    baths: 0,
    sqft: 200,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
    badge: "ALTO TRÁFICO",
    description: "Excelente lote comercial sobre la vía principal del proyecto. Ideal para inversión en minimarket, restaurante campestre, ferretería, farmacia o departamentos de alquiler para veraneantes y surfistas que visitan Puerto Malabrigo.",
    propertyType: "Lote Comercial / Mixto",
    totalArea: "200 m² (10m x 20m)",
    coveredArea: "100% Comercial",
    parking: "Estacionamiento frontal para clientes",
    deliveryStatus: "Entrega Inmediata",
    maintenance: "S/ 45 / mes",
    security: "Pórtico de control de ingreso principal",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Dayana Paredes",
      role: "Asesora Especialista en Terrenos Campestres",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      phone: "+51 981 234 567",
      email: "dparedes@ecohogarinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Pórtico de Ingreso Principal", category: "Acceso", distance: "1 min a pie" },
      { name: "Playa de Malabrigo", category: "Mar", distance: "4 min en auto" },
      { name: "Panamericana Norte", category: "Vía Nacional", distance: "7 min" },
      { name: "Ascope Centro", category: "Municipio", distance: "20 min" }
    ]
  },
  {
    id: "lote-familiar-6",
    title: "Lote Campestre Familiar - Proyecto Valle Esmeralda",
    category: "Lote Campestre",
    price: "S/ 16,900",
    pricePen: "$4,500 USD aprox.",
    location: "Ascope • La Libertad",
    beds: 0,
    baths: 0,
    sqft: 140,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400&auto=format&fit=crop",
    badge: "OPORTUNIDAD FAMILIAR",
    description: "Terreno plano y listo para construir tu casa de campo familiar en una zona de alta tranquilidad y sol todo el año. Cuenta con áreas comunes para niños, canchas deportivas y árboles frutales en el entorno.",
    propertyType: "Lote Campestre Residencial",
    totalArea: "140 m²",
    coveredArea: "100% plano",
    parking: "Cochera propia",
    deliveryStatus: "Entrega Inmediata",
    maintenance: "S/ 30 / mes",
    security: "Cerco perimétrico y portón de seguridad",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Carlos Benites",
      role: "Coordinador de Visitas & Ventas de Campo",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      phone: "+51 993 456 789",
      email: "cbenites@ecohogarinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Zona Deportiva & Parrillas", category: "Recreación", distance: "1 min a pie" },
      { name: "Paiján", category: "Comercio", distance: "8 min" },
      { name: "Playa Malabrigo", category: "Mar", distance: "10 min" },
      { name: "Trujillo", category: "Capital", distance: "50 min" }
    ]
  }
];

export const stats: Stat[] = [
  {
    value: "1,200+",
    label: "Lotes Entregados",
    description: "Familias e inversionistas que ya cumplieron el sueño de su terreno propio en La Libertad"
  },
  {
    value: "S/ 14,900",
    label: "Precio al Contado Desde",
    description: "Oportunidades únicas de inversión cerca al mar y campo con alta plusvalía proyectada"
  },
  {
    value: "100%",
    label: "Financiamiento Directo",
    description: "Sin bancos, sin avales ni trámites engorrosos: adquiere tu lote solo con tu DNI"
  }
];

export const services: Service[] = [
  {
    id: "venta-lotes-playa-campo",
    title: "Venta de Lotes de Playa y Campo con Financiamiento Directo",
    description: "Terrenos independizados en Puerto Malabrigo y Ascope con precios accesibles al contado y cuotas mensuales fijas.",
    image: "/images/banner-eco-hogar.png",
    tag: "FINANCIAMIENTO DIRECTO",
    intro: "En ECO HOGAR Inmobiliaria hacemos posible el sueño de tener un lote propio cerca al mar o en el campo. Diseñamos proyectos sostenibles con pórticos de ingreso, áreas verdes y planes de pago a la medida de tu bolsillo.",
    mainGoal: "Facilitar el acceso a terrenos con alta revalorización para que cada familia peruana construya su patrimonio con tranquilidad y seguridad.",
    process: [
      { step: "01", title: "Visita Guiada Gratuita", desc: "Te llevamos con movilidad ida y vuelta desde Trujillo o Ascope para que conozcas el proyecto y elijas tu lote ideal." },
      { step: "02", title: "Elección de Ubicación", desc: "Selecciona tu lote residencial, frente a parque, en esquina o sobre avenida principal según tu presupuesto." },
      { step: "03", title: "Firma de Contrato con DNI", desc: "Separación inmediata y suscripción de contrato de compraventa sin evaluación crediticia de bancos." },
      { step: "04", title: "Plan de Cuotas Flexibles", desc: "Paga tu cuota inicial y financia el saldo en cuotas mensuales cómodas y transparentes." },
      { step: "05", title: "Toma de Posesión y Construcción", desc: "Entrega del lote para que inicies la cerca, plantación de árboles o construcción de tu casa." }
    ],
    challenges: [
      {
        challenge: "Precios elevados e inaccesibles en los proyectos tradicionales de la costa peruana.",
        solution: "Lotes con precios de lanzamiento desde S/ 14,900 al contado y facilidades de pago directo."
      },
      {
        challenge: "Requisitos bancarios estrictos que excluyen a trabajadores independientes.",
        solution: "Financiamiento directo con la inmobiliaria únicamente presentando tu DNI."
      }
    ]
  },
  {
    id: "asesoria-legal-titulacion",
    title: "Seguridad Jurídica & Asesoría en Titulación",
    description: "Garantía de compra con documentación saneada, partidas registrales y acompañamiento notarial.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    tag: "SEGURIDAD JURÍDICA",
    intro: "En ECO HOGAR Inmobiliaria la transparencia y la legalidad son innegociables. Cada proyecto cuenta con expediente técnico y documentación en regla para proteger la inversión de tu familia.",
    mainGoal: "Brindar certeza jurídica absoluta para que tu compra sea segura, heredable y libre de problemas legales.",
    process: [
      { step: "01", title: "Revisión de Antecedentes Registrales", desc: "Verificación de la partida matriz en Sunarp y ausencia de gravámenes o litigios." },
      { step: "02", title: "Habilitación y Planos Visados", desc: "Levantamiento topográfico y delimitación clara de linderos de cada manzana y lote." },
      { step: "03", title: "Contrato Legal Notarial", desc: "Firma de contrato de compraventa con cláusulas claras de derechos y posesión." },
      { step: "04", title: "Proceso de Independización", desc: "Acompañamiento en el trámite de independización de partidas individuales." }
    ],
    challenges: [
      {
        challenge: "Temor a estafas o terrenos sin respaldo legal en la zona norte.",
        solution: "Mostramos toda la documentación legal, partida matriz y licencias antes de cualquier pago."
      },
      {
        challenge: "Dudas sobre los linderos exactos de la propiedad.",
        solution: "Entrega física del lote con estacas georreferenciadas y coordenadas UTM."
      }
    ]
  },
  {
    id: "habilitacion-urbana-sostenible",
    title: "Habilitación de Espacios Ecológicos & Áreas Verdes",
    description: "Diseño de condominios amigables con el medio ambiente: pórticos de ingreso, parques, vías arborizadas y espacios de recreación.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop",
    tag: "VIDA NATURAL",
    intro: "Creemos en un desarrollo inmobiliario en armonía con la naturaleza. Nuestros proyectos en Puerto Malabrigo y Ascope integran grandes parques y áreas recreativas para el disfrute de tu familia.",
    mainGoal: "Ofrecer una experiencia de vida saludable, libre del ruido de la ciudad y en contacto directo con el campo y el mar.",
    process: [
      { step: "01", title: "Diseño Urbanístico Armónico", desc: "Planificación de manzanas amplias con doble vía y retiros para jardines." },
      { step: "02", title: "Construcción de Pórticos y Cercos", desc: "Pórticos monumentales de bienvenida y cercos vivos con vegetación autóctona." },
      { step: "03", title: "Apertura y Afirmado de Calles", desc: "Vías vehiculares y peatonales compactadas para fácil acceso en todo tipo de vehículo." },
      { step: "04", title: "Arborización y Parques Temáticos", desc: "Siembra de árboles, zonas de juegos para niños y espacios de descanso." }
    ],
    challenges: [
      {
        challenge: "Proyectos en zonas áridas sin vegetación ni áreas recreativas.",
        solution: "Incorporamos paisajismo verde y programas de arborización permanente en cada etapa."
      }
    ]
  },
  {
    id: "asesoria-construccion-casas",
    title: "Asesoría en Construcción de Casas de Campo & Playa",
    description: "Orientación arquitectónica y constructiva para edificar tu casa de descanso con materiales ecológicos y modernos.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    tag: "CONSTRUCCIÓN",
    intro: "Te asesoramos en el diseño y distribución de tu casa de campo o playa para aprovechar al máximo el espacio, la iluminación natural y el clima privilegiado de La Libertad.",
    mainGoal: "Ayudarte a materializar tu vivienda de descanso con presupuestos eficientes y diseños modernos y bioclimáticos.",
    process: [
      { step: "01", title: "Modelos Arquitectónicos Sugeridos", desc: "Presentación de planos modelo para casas de 1 y 2 pisos con terraza y zona BBQ." },
      { step: "02", title: "Recomendación de Materiales", desc: "Uso de madera tratada, ladrillo, drywall y coberturas termoacústicas duraderas." },
      { step: "03", title: "Soluciones de Energía y Agua", desc: "Instalación de tanques elevados, biodigestores y paneles solares ecológicos." }
    ],
    challenges: [
      {
        challenge: "Desconocimiento de proveedores y constructores de confianza en la zona.",
        solution: "Red de constructores y proveedores aliados con tarifas preferenciales para nuestros propietarios."
      }
    ]
  }
];

export const agents: Agent[] = [
  {
    id: "renzo-cabrera",
    name: "Renzo Cabrera",
    role: "Gerente de Proyectos & Asesor Senior",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    phone: "+51 987 654 321",
    email: "ventas@ecohogarinmobiliaria.pe",
    bio: "Renzo Cabrera lidera el desarrollo y comercialización de proyectos campestres y de playa en ECO HOGAR Inmobiliaria. Con más de 10 años impulsando la democratización del acceso a terrenos en el norte del país, ha guiado a más de 800 familias hacia su lote propio.",
    experience: "Especialista en proyectos de habilitación campestre y de playa en La Libertad con facilidades de pago directo.",
    skills: [
      {
        title: "Asesoría en Financiamiento Directo",
        description: "Planes de pago personalizados adaptados a las posibilidades de cada familia."
      },
      {
        title: "Desarrollo de Proyectos Sostenibles",
        description: "Diseño y ejecución de condominios campestres con amplias áreas verdes."
      },
      {
        title: "Atención y Guiado de Clientes",
        description: "Organización de tours y visitas guiadas a los terrenos de Puerto Malabrigo."
      }
    ],
    career: [
      {
        period: "2015 — 2018",
        description: "Coordinador de ventas inmobiliarias en Trujillo y costa norte."
      },
      {
        period: "2019 — 2022",
        description: "Líder de proyectos de lotización campestre en el Valle Chicama."
      },
      {
        period: "2023 — Presente",
        description: "Gerente de Proyectos en ECO HOGAR Inmobiliaria liderando Puerto Malabrigo y Ascope."
      }
    ]
  },
  {
    id: "dayana-paredes",
    name: "Dayana Paredes",
    role: "Asesora Especialista en Terrenos Campestres",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    phone: "+51 981 234 567",
    email: "dparedes@ecohogarinmobiliaria.pe",
    bio: "Dayana Paredes es asesora inmobiliaria senior en ECO HOGAR. Apasionada por ayudar a las familias a encontrar su refugio en la naturaleza, brinda un trato cercano, claro y transparente en cada visita.",
    experience: "Ha asesorado con éxito la colocación de más de 400 lotes residenciales y comerciales en Ascope y Malabrigo.",
    skills: [
      {
        title: "Orientación Personalizada",
        description: "Selección del lote que mejor se adapta a tus planes de vivienda o inversión."
      },
      {
        title: "Trámites y Contratos",
        description: "Gestión ágil y transparente de contratos de compraventa y cronogramas de pago."
      },
      {
        title: "Asesoría Postventa",
        description: "Acompañamiento continuo a los propietarios en la toma de posesión y cercado."
      }
    ],
    career: [
      {
        period: "2018 — 2021",
        description: "Asesora comercial en proyectos residenciales en La Libertad."
      },
      {
        period: "2022 — Presente",
        description: "Asesora senior en ECO HOGAR Inmobiliaria para proyectos de playa y campo."
      }
    ]
  },
  {
    id: "carlos-benites",
    name: "Carlos Benites",
    role: "Coordinador de Visitas & Ventas de Campo",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    phone: "+51 993 456 789",
    email: "cbenites@ecohogarinmobiliaria.pe",
    bio: "Carlos Benites coordina las visitas de campo semanales desde Trujillo y Ascope hacia Puerto Malabrigo. Con amplio conocimiento del terreno y la geografía local, se asegura de que cada visitante viva una experiencia inolvidable.",
    experience: "Más de 5 años coordinando logística de visitas y entrega física de lotes a propietarios felices.",
    skills: [
      {
        title: "Guiado y Logística de Tours",
        description: "Traslado seguro y cómodo de familias desde Trujillo y puntos de encuentro."
      },
      {
        title: "Verificación de Linderos en Campo",
        description: "Ubicación precisa de manzanas y lotes con planos técnicos y estacas."
      },
      {
        title: "Atención en Módulos de Venta",
        description: "Recepción y asesoría en el módulo de ventas de Puerto Malabrigo."
      }
    ],
    career: [
      {
        period: "2019 — 2022",
        description: "Supervisor de campo en proyectos de habilitación urbana."
      },
      {
        period: "2023 — Presente",
        description: "Coordinador de Visitas en ECO HOGAR Inmobiliaria."
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Familia Morales Saldaña",
    role: "Propietarios en Puerto Malabrigo",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Compramos nuestro lote al contado por S/ 14,900 en Puerto Malabrigo. El proceso fue súper rápido, nos mostraron los papeles en regla y ya estamos planeando construir nuestra casa de playa."
  },
  {
    id: "test-2",
    name: "Sra. Gladys Alayo",
    role: "Emprendedora - Trujillo",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "El financiamiento directo me permitió adquirir dos lotes juntos para mi familia pagando cuotas muy cómodas. La movilidad para conocer el terreno fue gratis y la atención de 10."
  },
  {
    id: "test-3",
    name: "Ing. Marco Aurelio Ruiz",
    role: "Inversionista en Terrenos",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Puerto Malabrigo tiene un potencial turístico enorme por el surf. Adquirir lotes a este precio es una oportunidad de plusvalía insuperable en el norte."
  },
  {
    id: "test-4",
    name: "Víctor & Paola Chávez",
    role: "Compradores en Ascope",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Siempre soñamos con tener un pedazo de tierra en el campo para que nuestros hijos crezcan libres y con aire puro. ECO HOGAR lo hizo realidad."
  },
  {
    id: "test-5",
    name: "Prof. Segundo Vásquez",
    role: "Docente - Paiján",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Excelente inmobiliaria, muy seria y cumplida con los plazos de habilitación del pórtico y las calles. Totalmente recomendados."
  },
  {
    id: "test-6",
    name: "Karina Zavaleta",
    role: "Compradora en Etapa 2",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Separé mi lote solo con S/ 500 y comencé a pagar mis cuotas mensuales sin problemas. Ya tengo la posesión de mi terreno frente al parque."
  }
];

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Dónde están ubicados los proyectos de ECO HOGAR Inmobiliaria?",
    answer: "Nuestros proyectos principales se encuentran en Puerto Malabrigo (famoso por sus playas y la ola izquierda perfecta) y en el fértil Valle Chicama, provincia de Ascope, departamento de La Libertad, a solo 50 minutos de Trujillo."
  },
  {
    id: "faq-2",
    question: "¿Cuáles son los precios y facilidades de pago?",
    answer: "Contamos con precios de lanzamiento al contado desde S/ 14,900. Además, ofrecemos financiamiento directo con cuotas mensuales accesibles desde S/ 350, sin bancos ni intereses usureros, solo presentando tu DNI."
  },
  {
    id: "faq-3",
    question: "¿Cómo puedo visitar los terrenos y conocer el proyecto?",
    answer: "Organizamos visitas guiadas gratuitas todos los sábados y domingos con movilidad de ida y vuelta incluida desde Trujillo y puntos estratégicos de Ascope. Solo debes registrarte vía WhatsApp."
  },
  {
    id: "faq-4",
    question: "¿Qué servicios y obras incluye el proyecto?",
    answer: "Nuestros proyectos se entregan con pórtico de ingreso monumental, cerco perimétrico, calles y avenidas afirmadas, parques temáticos con juegos, áreas verdes arborizadas y factibilidad de servicios de luz y agua."
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Por Qué Invertir en un Lote en Puerto Malabrigo es la Mejor Decisión Hoy",
    category: "INVERSIÓN & PLUSVALÍA",
    date: "10 DE JULIO, 2026",
    readingTime: "5 Minutos",
    image: "/images/banner-eco-hogar.png",
    summary: "Descubre el crecimiento turístico y la revalorización de terrenos en Puerto Malabrigo (Chicama), uno de los destinos playeros con mayor proyección en el norte peruano.",
    author: {
      name: "Renzo Cabrera",
      role: "Gerente de Proyectos",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      quote: "Comprar tierra en el momento adecuado es la forma más segura de multiplicar tu patrimonio familiar."
    },
    middleImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
    section1: {
      title: "El Atractivo Turístico y Deportivo de Puerto Malabrigo",
      paragraphs: [
        "Puerto Malabrigo (o Puerto Chicama) es reconocido mundialmente por albergar la ola izquierda más larga del mundo, atrayendo a miles de surfistas, turistas nacionales y extranjeros durante todo el año.",
        "Este flujo constante de visitantes genera una creciente demanda de hospedajes, casas de playa y servicios comerciales, impulsando la plusvalía de los terrenos cercanos a la costa."
      ]
    },
    section2: {
      title: "Precios Accesibles con Alto Potencial de Ganancia",
      paragraphs: [
        "Mientras que en Lima o balnearios saturados el metro cuadrado supera los $500 dólares, en Puerto Malabrigo hoy puedes adquirir un lote de 120 m² desde S/ 14,900 al contado con ECO HOGAR Inmobiliaria.",
        "Esto permite que familias jóvenes e inversionistas entren al mercado inmobiliario con un ticket bajo y capturen toda la valorización de las futuras etapas de habilitación urbana."
      ]
    },
    section3: {
      title: "Beneficios de Vivir Cerca al Mar y la Naturaleza",
      paragraphs: [
        "Vivir o tener una casa de descanso cerca al mar mejora la calidad de vida, reduce el estrés y brinda un ambiente sano y seguro para el crecimiento de los niños, lejos de la contaminación y el caos urbano."
      ]
    },
    section4: {
      title: "Ventajas de Invertir con ECO HOGAR",
      intro: "Por qué elegir nuestros proyectos en La Libertad:",
      items: [
        "Precios accesibles al contado desde S/ 14,900.",
        "Financiamiento directo con tu DNI sin historial crediticio.",
        "Pórtico de ingreso, áreas verdes y calles amplias.",
        "Visitas guiadas gratuitas con movilidad todos los fines de semana.",
        "Seguridad jurídica y entrega transparente de cada lote."
      ]
    }
  },
  {
    id: "blog-2",
    title: "Guía Paso a Paso para Comprar tu Lote Campestre con Financiamiento Directo",
    category: "CONSEJOS INMOBILIARIOS",
    date: "25 DE JUNIO, 2026",
    readingTime: "4 Minutos",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    summary: "Todo lo que necesitas saber para financiar tu terreno sin bancos, con cuotas fijas y total tranquilidad para tu economía familiar.",
    author: {
      name: "Dayana Paredes",
      role: "Asesora Senior",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      quote: "Tu sueño del lote propio no tiene por qué esperar a una aprobación bancaria."
    },
    middleImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
    section1: {
      title: "¿Qué es el Financiamiento Directo?",
      paragraphs: [
        "El financiamiento directo es un crédito otorgado directamente por la inmobiliaria propietaria del proyecto, sin intermediación de entidades bancarias. Esto elimina trámites engorrosos, cartas de sustento de ingresos y cobro de intereses abusivos."
      ]
    },
    section2: {
      title: "Requisitos Mínimos",
      paragraphs: [
        "En ECO HOGAR Inmobiliaria creemos en la confianza. Para acceder al crédito solo necesitas tu DNI vigente, el pago de tu cuota inicial y elegir el plazo de cuotas que mejor se acomode a tu presupuesto mensual."
      ]
    },
    section3: {
      title: "Garantía y Entrega del Inmueble",
      paragraphs: [
        "Desde la firma del contrato y el pago inicial, tienes la posesión de tu lote para comenzar a cercarlo, sembrar áreas verdes o planificar la construcción de tu casa de campo."
      ]
    },
    section4: {
      title: "Pasos Simples para Comprar",
      intro: "El proceso es muy sencillo:",
      items: [
        "1. Agenda tu visita guiada gratuita en nuestro bus de traslados.",
        "2. Recorre el proyecto y elige la manzana y número de lote.",
        "3. Separa tu terreno con un monto mínimo.",
        "4. Firma tu contrato de compraventa.",
        "5. Paga tus cuotas mensuales y disfruta de tu propiedad."
      ]
    }
  },
  {
    id: "blog-3",
    title: "Ideas y Consejos para Diseñar una Casa de Campo Económica y Sustentable",
    category: "CONSTRUCCIÓN & ECOLOGÍA",
    date: "15 DE MAYO, 2026",
    readingTime: "5 Minutos",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    summary: "Aprende cómo construir una vivienda de campo moderna, bioclimática y de bajo costo aprovechando los materiales de la zona y la energía solar.",
    author: {
      name: "Carlos Benites",
      role: "Coordinador de Campo",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      quote: "Una casa ecológica es más fresca, económica y hermosa para convivir con la naturaleza."
    },
    middleImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop",
    section1: {
      title: "Orientación y Ventilación Cruzada",
      paragraphs: [
        "En la costa norte de La Libertad el sol brilla la mayor parte del año. Diseñar ventanas amplias orientadas hacia los vientos dominantes permite mantener la casa fresca sin necesidad de aire acondicionado."
      ]
    },
    section2: {
      title: "Materiales Sostenibles y Accesibles",
      paragraphs: [
        "Combinar estructuras de concreto y ladrillo con techos altos de madera y terrazas exteriores con sombra de caña guayaquil o bambú crea una estética campestre muy acogedora a una fracción del costo tradicional."
      ]
    },
    section3: {
      title: "Aprovechamiento de la Energía Solar",
      paragraphs: [
        "Instalar paneles solares y termas solares es una solución sumamente económica y autosustentable en Puerto Malabrigo y Ascope, garantizando energía limpia y agua caliente todo el año."
      ]
    },
    section4: {
      title: "Espacios Clave en tu Casa de Campo",
      intro: "Espacios que no pueden faltar:",
      items: [
        "Terraza exterior techada con zona de parrilla (BBQ) y horno a leña.",
        "Jardín frontal con árboles frutales y plantas nativas.",
        "Piscina o zona de juego para niños.",
        "Espacio para huerto orgánico casero."
      ]
    }
  }
];
