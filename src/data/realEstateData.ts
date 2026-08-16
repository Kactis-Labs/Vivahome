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
    title: "Proyecto SIENNA — Elevated Lifestyle",
    category: "Preventa Exclusiva",
    price: "$245,000",
    pricePen: "S/ 918,000",
    location: "Calle Las Camelias 950 - 954, Urb. Las Palmeras del Golf II Etapa",
    beds: 3,
    baths: 3,
    sqft: 165,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
    badge: "PROYECTO SIENNA",
    description: "Edificio boutique de 10 pisos y solo 15 departamentos exclusivos con 16 estacionamientos. Diseñado para un estilo de vida elevado con acabados nobles, iluminación natural envolvente, terrazas privadas y vista privilegiada al Golf.",
    propertyType: "Edificio Residencial Boutique",
    totalArea: "165 m²",
    coveredArea: "148 m²",
    parking: "2 Cocheras Paralelas Techadas + Depósito",
    deliveryStatus: "En Construcción • Preventa",
    maintenance: "S/ 580 / mes aprox.",
    security: "Control de accesos digital, lobby de doble altura y vigilancia 24/7",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Rodrigo Rivas",
      role: "Director de Proyectos & Asesor Senior",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      phone: "+51 987 654 321",
      email: "rodrigo.rivas@ryrinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Palmeras del Golf Club", category: "Deportes & Exclusividad", distance: "2 min a pie" },
      { name: "Centro Financiero & Gastronómico", category: "Comercial & Servicios", distance: "4 min" },
      { name: "Parques y Áreas Verdes", category: "Recreación Familiar", distance: "1 min" },
      { name: "Colegios de Primer Nivel", category: "Educación", distance: "5 min en auto" }
    ]
  },
  {
    id: "prop-2",
    title: "Proyecto ORIGEN — Signature Apartments",
    category: "Lanzamiento Exclusivo",
    price: "$180,000",
    pricePen: "S/ 675,000",
    location: "Calle Marcelo Corne 305 - 309, San Andrés - I Etapa",
    beds: 2,
    baths: 2,
    sqft: 110,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
    badge: "PROYECTO ORIGEN",
    description: "Vivir bien empieza aquí. Departamentos desde 62 m² hasta 143 m² de 1, 2 y 3 dormitorios. Equipado con exclusivas áreas comunes: Coworking ejecutivo, Zona BBQ gourmet y Lounge social para compartir con amigos y familia.",
    propertyType: "Departamentos Signature",
    totalArea: "110 m²",
    coveredArea: "102 m²",
    parking: "1 Cochera Techada + Depósito",
    deliveryStatus: "Preventa con Respaldo Bancario",
    maintenance: "S/ 420 / mes aprox.",
    security: "Lobby contemporáneo con conserjería 24 horas y CCTV",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Valeria Ramos",
      role: "Asesora Senior de Inversión Inmobiliaria",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      phone: "+51 981 234 567",
      email: "valeria.ramos@ryrinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Zona Residencial San Andrés", category: "Urbana & Segura", distance: "0 min" },
      { name: "Centros Comerciales y Supermercados", category: "Comercio", distance: "3 min" },
      { name: "Clínicas y Centros de Salud", category: "Salud", distance: "5 min" },
      { name: "Universidades y Colegios", category: "Educación", distance: "6 min" }
    ]
  },
  {
    id: "prop-3",
    title: "Penthouse SIENNA Dúplex con Terraza Panorámica",
    category: "Penthouse Exclusivo",
    price: "$385,000",
    pricePen: "S/ 1,443,000",
    location: "Urb. Las Palmeras del Golf II Etapa",
    beds: 4,
    baths: 4,
    sqft: 240,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
    badge: "PENTHOUSE TOP",
    description: "La máxima expresión del concepto Elevated Lifestyle. Espectacular penthouse dúplex con 240 m², techos de doble altura, master suite con walk-in closet y amplia terraza privada con zona de parrilla y vista panorámica.",
    propertyType: "Penthouse Dúplex Premium",
    totalArea: "240 m²",
    coveredArea: "195 m²",
    parking: "2 Cocheras Paralelas Techadas",
    deliveryStatus: "Preventa Exclusiva",
    maintenance: "S/ 650 / mes aprox.",
    security: "Acceso biométrico directo desde ascensor y seguridad integral",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Rodrigo Rivas",
      role: "Director de Proyectos & Asesor Senior",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      phone: "+51 987 654 321",
      email: "rodrigo.rivas@ryrinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Palmeras del Golf Club", category: "Exclusividad", distance: "2 min" },
      { name: "Parques ecológicos", category: "Áreas Verdes", distance: "1 min" }
    ]
  },
  {
    id: "prop-4",
    title: "Residencia ORIGEN Garden & Private Lounge",
    category: "Departamento con Jardín",
    price: "$210,000",
    pricePen: "S/ 787,500",
    location: "Calle Marcelo Corne 305, San Andrés",
    beds: 3,
    baths: 3,
    sqft: 143,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop",
    badge: "143 M² DISPONIBLE",
    description: "Departamento en primer nivel con jardín privado y terraza integrada. Distribución abierta, cocina de concepto gourmet con mesadas de cuarzo y acceso directo a las amenidades del edificio.",
    propertyType: "Departamento Flat Garden",
    totalArea: "143 m²",
    coveredArea: "115 m²",
    parking: "1 Cochera Techada",
    deliveryStatus: "Preventa",
    maintenance: "S/ 450 / mes aprox.",
    security: "Seguridad y control perimetral 24/7",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Valeria Ramos",
      role: "Asesora Senior de Inversión Inmobiliaria",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      phone: "+51 981 234 567",
      email: "valeria.ramos@ryrinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "San Andrés I Etapa", category: "Residencial", distance: "0 min" },
      { name: "Cafés y Restaurantes", category: "Gastronomía", distance: "3 min" }
    ]
  },
  {
    id: "prop-5",
    title: "Departamento Elegance SIENNA 3 Dormitorios",
    category: "Departamento de Estreno",
    price: "$265,000",
    pricePen: "S/ 993,750",
    location: "Calle Las Camelias, Las Palmeras del Golf",
    beds: 3,
    baths: 3,
    sqft: 152,
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1400&auto=format&fit=crop",
    badge: "ENTREGA PROGRAMADA",
    description: "Excelente tipología familiar de 152 m² con sala-comedor conectada a balcón corrido, dormitorio principal con baño incorporado y acabados en porcelanato español de gran formato.",
    propertyType: "Departamento Flat",
    totalArea: "152 m²",
    coveredArea: "140 m²",
    parking: "2 Cocheras",
    deliveryStatus: "En Construcción",
    maintenance: "S/ 520 / mes aprox.",
    security: "Circuito cerrado CCTV y portería permanente",
    gallery: [
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Rodrigo Rivas",
      role: "Director de Proyectos & Asesor Senior",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      phone: "+51 987 654 321",
      email: "rodrigo.rivas@ryrinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Palmeras del Golf", category: "Residencial", distance: "1 min" }
    ]
  },
  {
    id: "prop-6",
    title: "Executive Suite ORIGEN 1 & 2 Dormitorios",
    category: "Inversión & Renta",
    price: "$135,000",
    pricePen: "S/ 506,250",
    location: "Calle Marcelo Corne, San Andrés",
    beds: 1,
    baths: 1,
    sqft: 62,
    image: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1400&auto=format&fit=crop",
    badge: "ALTO RETORNO (ROI)",
    description: "Unidad funcional optimizada de 62 m² ideal para ejecutivos, parejas o inversionistas en renta tradicional o temporal. Acceso libre al Coworking y Lounge del edificio.",
    propertyType: "Departamento Suite",
    totalArea: "62 m²",
    coveredArea: "62 m²",
    parking: "1 Cochera Opcional",
    deliveryStatus: "Preventa",
    maintenance: "S/ 280 / mes aprox.",
    security: "Acceso inteligente digital y recepción 24/7",
    gallery: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Diego Reyna",
      role: "Especialista en Proyectos e Inversión",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      phone: "+51 993 456 789",
      email: "diego.reyna@ryrinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Zona Financiera y Comercial", category: "Negocios", distance: "4 min" }
    ]
  }
];

export const heroStats: Stat[] = [
  {
    value: "+14",
    label: "Años de Experiencia",
    description: "Construyendo y gestionando proyectos inmobiliarios con solidez y visión arquitectónica"
  },
  {
    value: "+20",
    label: "Proyectos Terminados",
    description: "Edificios residenciales entregados con acabados de alta gama y valorización garantizada"
  },
  {
    value: "+420",
    label: "Familias Felices",
    description: "Propietarios que eligieron la seguridad y el confort de nuestros proyectos"
  },
  {
    value: "100%",
    label: "Seguridad Jurídica",
    description: "Títulos saneados e independizados con respaldo notarial y bancario de primer nivel"
  }
];

export const services: Service[] = [
  {
    id: "desarrollo-proyectos",
    title: "Desarrollo de Proyectos Residenciales",
    description: "Diseñamos y construimos edificios boutique concebidos para maximizar la calidad de vida, confort térmico y plusvalía patrimonial.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    tag: "CONSTRUCCIÓN & PROYECTOS",
    intro: "En R&R Inmobiliaria desarrollamos proyectos residenciales emblemáticos como SIENNA y ORIGEN, integrando arquitectura contemporánea, acabados premium y ubicaciones privilegiadas.",
    mainGoal: "Crear hogares que eleven tu estilo de vida y aseguren la máxima rentabilidad y plusvalía en el tiempo.",
    process: [
      { step: "01", title: "Conceptualización & Diseño", desc: "Selección de ubicaciones estratégicas y diseño arquitectónico enfocado en iluminación, ventilación y distribución funcional." },
      { step: "02", title: "Construcción con Rigor Técnico", desc: "Supervisión de obra con materiales de la más alta calidad estructural y acabados nobles." },
      { step: "03", title: "Entrega e Independización", desc: "Gestión registral completa en Sunarp para entrega de partidas independizadas a cada propietario." }
    ]
  },
  {
    id: "venta-preventa",
    title: "Venta y Comercialización en Preventa",
    description: "Accede a condiciones comerciales exclusivas en fases iniciales de obra con planes de pago flexibles y asesoría crediticia directa.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
    tag: "VENTAS & PREVENTA",
    intro: "Comprar en preventa con R&R Inmobiliaria garantiza un acompañamiento transparente y profesional desde la elección del plano hasta la firma de la escritura.",
    mainGoal: "Facilitar tu proceso de compra con asesoría personalizada y respaldo fiduciario.",
    process: [
      { step: "01", title: "Asesoría Financiera", desc: "Evaluación crediticia con los principales bancos del país para obtener las mejores tasas hipotecarias." },
      { step: "02", title: "Personalización de Acabados", desc: "Opciones de configuración de espacios y acabados interiores durante el ciclo constructivo." },
      { step: "03", title: "Firma Notarial Blindada", desc: "Transparencia contractual absoluta y acompañamiento en notaría." }
    ]
  },
  {
    id: "asesoria-inversion",
    title: "Consultoría de Inversión Patrimonial",
    description: "Estructuración de carteras inmobiliarias para inversionistas que buscan ingresos pasivos seguros y plusvalía por metro cuadrado.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    tag: "INVERSIÓN PATRIMONIAL",
    intro: "Analizamos métricas de rentabilidad por alquiler (Cap Rate) y revalorización urbana para asegurar inversiones inmobiliarias altamente productivas.",
    mainGoal: "Proteger y multiplicar tu capital con proyectos de demanda comprobada.",
    process: [
      { step: "01", title: "Estudio de Mercado", desc: "Identificación de tipologías con menor tasa de vacancia y mayor retorno por renta." },
      { step: "02", title: "Proyección de Flujos (ROI)", desc: "Modelado financiero detallado con costos de mantenimiento y escenarios de apreciación." },
      { step: "03", title: "Estrategia de Puesta en Renta", desc: "Asistencia en equipamiento y colocación de inquilinos calificados." }
    ]
  }
];

export const agents: Agent[] = [
  {
    id: "agent-1",
    name: "Rodrigo Rivas",
    role: "Director de Proyectos & Bróker Principal",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    phone: "+51 987 654 321",
    email: "rodrigo.rivas@ryrinmobiliaria.pe",
    bio: "Rodrigo Rivas es el Director de Proyectos de R&R Inmobiliaria. Con más de 14 años liderando el desarrollo, estructuración y comercialización de proyectos residenciales de alto valor, su trayectoria garantiza excelencia constructiva y seguridad patrimonial.",
    experience: "Ha dirigido con éxito la entrega de más de 20 proyectos residenciales y edificios boutique, acompañando a cientos de familias a concretar el hogar de sus sueños.",
    skills: [
      {
        title: "Desarrollo Arquitectónico",
        description: "Supervisión integral de estándares de diseño, confort y acabados de lujo."
      },
      {
        title: "Seguridad Registral",
        description: "Garantía de títulos saneados, independizaciones y blindaje notarial en Sunarp."
      },
      {
        title: "Atención Personalizada",
        description: "Trato directo y transparente con compradores e inversionistas."
      }
    ],
    career: [
      {
        period: "2012 — 2016",
        description: "Inicio de operaciones liderando desarrollos residenciales boutique de estreno."
      },
      {
        period: "2017 — 2021",
        description: "Consolidación de proyectos multifamiliares con más de 200 departamentos entregados."
      },
      {
        period: "2022 — Presente",
        description: "Lanzamiento y consolidación de proyectos premium como SIENNA y ORIGEN."
      }
    ]
  },
  {
    id: "agent-2",
    name: "Valeria Ramos",
    role: "Asesora Senior de Inversión Inmobiliaria",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    phone: "+51 981 234 567",
    email: "valeria.ramos@ryrinmobiliaria.pe",
    bio: "Valeria Ramos se especializa en la asesoría integral de compra en preventa y colocación de departamentos exclusivos en R&R Inmobiliaria. Su enfoque empático y riguroso asegura la mejor experiencia de adquisición.",
    experience: "Más de 9 años asesorando a familias y jóvenes profesionales en la selección de su departamento ideal con financiamiento bancario óptimo.",
    skills: [
      {
        title: "Asesoría Crediticia Hipotecaria",
        description: "Gestión directa con entidades financieras para lograr aprobaciones ágiles y tasas preferenciales."
      },
      {
        title: "Atención VIP",
        description: "Acompañamiento personalizado en recorridos, planos y elección de acabados."
      }
    ],
    career: [
      {
        period: "2017 — 2020",
        description: "Consultora de ventas residenciales especializada en departamentos de estreno."
      },
      {
        period: "2021 — Presente",
        description: "Asesora Senior en R&R Inmobiliaria, liderando ventas en SIENNA y ORIGEN."
      }
    ]
  },
  {
    id: "agent-3",
    name: "Diego Reyna",
    role: "Especialista en Proyectos e Inversión",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    phone: "+51 993 456 789",
    email: "diego.reyna@ryrinmobiliaria.pe",
    bio: "Diego Reyna es analista de inversiones inmobiliarias en R&R Inmobiliaria, ayudando a los clientes a maximizar la rentabilidad de su capital en preventa.",
    experience: "Especialista en estructuración de compras múltiples y análisis de retorno por arrendamiento.",
    skills: [
      {
        title: "Modelado Financiero",
        description: "Evaluación de rentabilidad neta y plusvalía por m² en preventa."
      },
      {
        title: "Negociación Estratégica",
        description: "Condiciones de pago preferenciales para compradores tempranos."
      }
    ],
    career: [
      {
        period: "2019 — Presente",
        description: "Asesor de inversiones y comercialización de proyectos residenciales en R&R Inmobiliaria."
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Fernando Morales",
    role: "Propietario en Proyecto SIENNA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Comprar en preventa con R&R Inmobiliaria fue la mejor decisión. La calidad de los acabados, la puntualidad en los avances y la atención personalizada superaron todas nuestras expectativas."
  },
  {
    id: "test-2",
    name: "Mariana & Carlos Vidal",
    role: "Propietarios en Proyecto ORIGEN",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Elegimos ORIGEN por su ubicación en San Andrés y sus áreas comunes. El Coworking y la zona Lounge son exactamente lo que necesitábamos para nuestro estilo de vida."
  },
  {
    id: "test-3",
    name: "Ing. Gonzalo Alarcón",
    role: "Inversionista Residencial",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Con más de 14 años de experiencia y 20 proyectos terminados, R&R Inmobiliaria ofrece una solidez que brinda total tranquilidad jurídica y rentabilidad garantizada."
  }
];

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Qué garantías ofrece R&R Inmobiliaria en sus proyectos en preventa?",
    answer: "Todos nuestros proyectos cuentan con respaldo bancario de primer nivel, cuentas fiduciarias blindadas, licencias municipales aprobadas y una trayectoria demostrada con más de 20 proyectos terminados y 420 familias satisfechas."
  },
  {
    id: "faq-2",
    question: "¿Cuáles son las facilidades de financiamiento para comprar un departamento?",
    answer: "Ofrecemos planes de cuota inicial fraccionada durante el periodo de construcción, además de convenios directos con los principales bancos del Perú para acceder a créditos hipotecarios con tasas preferenciales."
  },
  {
    id: "faq-3",
    question: "¿Cómo se gestiona la independización y entrega de los títulos en Sunarp?",
    answer: "Nuestro equipo legal se encarga de todo el proceso de independización registral y saneamiento notarial, garantizando que cada propietario reciba su partida electrónica inscrita en Sunarp con absoluta seguridad."
  },
  {
    id: "faq-4",
    question: "¿Puedo coordinar una visita a la sala de ventas o al piloto de los proyectos?",
    answer: "Sí, coordinamos visitas guiadas presenciales y recorridos virtuales 3D personalizados para conocer los proyectos SIENNA, ORIGEN y todas las unidades disponibles."
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Claves para Elegir el Departamento Ideal en Preventa y Maximizar tu Inversión",
    category: "GUÍA DE INVERSIÓN",
    date: "10 DE MAYO, 2026",
    readingTime: "5 Minutos",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    summary: "Descubre cómo adquirir en preventa te permite acceder a mejores precios, mayor plusvalía y facilidades de financiamiento en las mejores zonas residenciales.",
    author: {
      name: "Rodrigo Rivas",
      role: "Director de Proyectos",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      quote: "Comprar en preventa con una desarrolladora con respaldo comprobado es la decisión financiera más inteligente."
    },
    middleImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop",
    section1: {
      title: "La Ventaja del Precio de Entrada",
      paragraphs: [
        "Adquirir un departamento en fase de preventa o construcción inicial brinda una ventaja de rentabilidad inmediata de entre 12% y 18% frente al valor de entrega final.",
        "Proyectos residenciales como SIENNA y ORIGEN combinan ubicaciones consolidadas con amenidades contemporáneas que garantizan alta demanda."
      ]
    },
    section2: {
      title: "Respaldo y Seguridad Constructiva",
      paragraphs: [
        "Verificar que la empresa cuente con proyectos entregados y respaldo bancario elimina cualquier incertidumbre, asegurando que los plazos y estándares prometidos se cumplan con exactitud."
      ]
    },
    section3: {
      title: "Amenidades que Elevan tu Calidad de Vida",
      paragraphs: [
        "Los espacios de Coworking, zonas BBQ y Lounges sociales en edificios modernos representan un valor diferencial clave tanto para vivir como para alquilar."
      ]
    },
    section4: {
      title: "Recomendaciones Finales",
      intro: "Factores esenciales a tener en cuenta:",
      items: [
        "Analiza la trayectoria y cantidad de proyectos entregados por la inmobiliaria.",
        "Verifica que el contrato contemple especificaciones de acabados detalladas.",
        "Aprovecha el fraccionamiento de la cuota inicial durante la obra.",
        "Prioriza ubicaciones con acceso a parques y servicios esenciales."
      ]
    }
  }
];
