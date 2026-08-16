export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  pricePen?: string;
  category: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  badge?: string;
  description: string;
  features: string[];
  gallery: string[];
  assignedAgent: {
    name: string;
    role: string;
    phone: string;
    image: string;
  };
  deliveryStatus?: string;
  propertyType?: string;
  totalArea?: number;
  coveredArea?: number;
  parking?: number;
  maintenance?: string;
  security?: string;
  floorPlan?: string;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  phone: string;
  email: string;
  image: string;
  bio: string;
  experience?: string;
  skills?: { title: string; description: string }[];
  career?: { year?: string; period?: string; title: string; desc?: string; description?: string }[];
}

export interface Service {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  intro?: string;
  mainGoal?: string;
  process?: { step: number; title: string; desc: string }[];
  challenges?: { title?: string; desc?: string; challenge?: string; solution?: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime?: string;
  readingTime?: string;
  summary: string;
  image: string;
  author: any;
  quote?: string;
  content: string[];
  section1?: { title: string; paragraphs: string[] };
  section2?: { title: string; paragraphs: string[] };
  middleImage?: string;
  section3?: { title: string; paragraphs: string[] };
  section4?: { title: string; intro?: string; items: string[] };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  comment: string;
  avatar: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// 1. STATS OFICIALES PLUS INMOBILIARIA
export const heroStats = [
  {
    value: "+8",
    label: "Años de Experiencia",
    description: "Líderes y pioneros en proyectos inmobiliarios en Puerto Malabrigo."
  },
  {
    value: "+15",
    label: "Proyectos Desarrollados",
    description: "Condominios residenciales de campo y playa con alta plusvalía."
  },
  {
    value: "+1,200",
    label: "Lotes Entregados",
    description: "Familias e inversionistas construyendo su patrimonio frente al mar."
  },
  {
    value: "100%",
    label: "Independizados",
    description: "Crédito directo hasta en 48 meses sin evaluación bancaria."
  }
];

export const stats = heroStats;

// 2. PROYECTOS & LOTES DESTACADOS
export const featuredProperties: Property[] = [
  {
    id: "nueva-asia-residencial",
    title: "Residencial Nueva Asia — Club House",
    location: "Puerto Malabrigo (Chicama), La Libertad",
    price: "Cuotas desde S/ 799/m",
    pricePen: "Financiamiento hasta 48 meses",
    category: "Lote de Playa",
    beds: 0,
    baths: 0,
    sqft: 160,
    image: "/project-nueva-asia.png",
    badge: "100% Independizado",
    description: "¡Vive a un paso de la playa! Exclusivo condominio residencial en Puerto Malabrigo con Club House, canchas de frontón y tenis, piscina panorámica, parques temáticos y crédito directo.",
    features: [
      "Club House con piscina y restaurante",
      "Canchas deportivas de tenis y frontón",
      "100% Independizados en Sunarp",
      "Crédito Directo hasta 48 meses",
      "Pórtico de seguridad 24/7",
      "Alumbrado público y redes de agua"
    ],
    gallery: [
      "/project-nueva-asia.png",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
    ],
    assignedAgent: {
      name: "Carlos Santillán",
      role: "Director de Ventas",
      phone: "+51 987 654 321",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "lotes-playa-malabrigo",
    title: "Lotes de Playa — Primera Línea de Mar",
    location: "Malecón Puerto Malabrigo, La Libertad",
    price: "Cuotas desde S/ 950/m",
    pricePen: "Precio contado: $22,000 USD",
    category: "Frente al Mar",
    beds: 0,
    baths: 0,
    sqft: 200,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    badge: "Vista Panorámica",
    description: "Terrenos residenciales en primera fila con acceso directo a la playa de la ola izquierda más larga del mundo. Ideal para casas de verano o inversión turística.",
    features: [
      "Acceso directo a la playa",
      "Ideal para casas de playa y hospedajes",
      "Redes de servicios básicos",
      "Título de propiedad independizado",
      "Facilidades de pago sin intereses"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      "/project-nueva-asia.png"
    ],
    assignedAgent: {
      name: "Lucía Mendoza",
      role: "Especialista en Lotes de Playa",
      phone: "+51 987 654 322",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "condominio-campestre-los-valles",
    title: "Condominio Campestre Los Valles",
    location: "Valle Chicama, La Libertad",
    price: "Cuotas desde S/ 650/m",
    pricePen: "Precio contado: $14,900 USD",
    category: "Lote de Campo",
    beds: 0,
    baths: 0,
    sqft: 300,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    badge: "Sol Todo el Año",
    description: "Amplios lotes campestres rodeados de naturaleza, sol permanente y tranquilidad. Diseñado para casas de campo con zona de huerto, parrilla y recreación.",
    features: [
      "Lotes desde 300 m²",
      "Clima cálido todo el año",
      "Zona de biohuertos y parques",
      "Financiamiento a sola firma",
      "Seguridad privada"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
    ],
    assignedAgent: {
      name: "Carlos Santillán",
      role: "Director de Ventas",
      phone: "+51 987 654 321",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
    }
  }
];

// 3. AGENTES / EQUIPO
export const agents: Agent[] = [
  {
    id: "carlos-santillan",
    name: "Carlos Santillán",
    role: "Director Comercial & Desarrollo",
    phone: "+51 987 654 321",
    email: "csantillan@plusinmobiliaria.pe",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    bio: "Más de 8 años liderando el desarrollo inmobiliario en Puerto Malabrigo y el norte del Perú. Especialista en estructuración de créditos directos y desarrollo de condominios.",
    experience: "+8 años de trayectoria en habilitaciones urbanas y venta de proyectos de campo y playa.",
    skills: [
      { title: "Crédito Directo", description: "Planes a medida hasta 48 meses sin bancos." },
      { title: "Saneamiento de Terrenos", description: "Garantía de títulos inscritos en Sunarp." }
    ]
  },
  {
    id: "lucia-mendoza",
    name: "Lucía Mendoza",
    role: "Asesora Senior de Inversiones",
    phone: "+51 987 654 322",
    email: "lmendoza@plusinmobiliaria.pe",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "Especialista en proyectos de playa y asesoría integral para familias que buscan rentabilizar su capital en Puerto Malabrigo.",
    experience: "+5 años asesorando a inversionistas y compradores de lotes vacacionales.",
    skills: [
      { title: "Lotes de Playa", description: "Ubicaciones estratégicas de alta plusvalía." },
      { title: "Atención Personalizada", description: "Tours guiados y visitas a los proyectos." }
    ]
  }
];

// 4. SERVICIOS
export const services: Service[] = [
  {
    id: "venta-terrenos-playa-campo",
    title: "Venta de Terrenos de Campo y Playa",
    tag: "Proyectos Exclusivos",
    description: "Desarrollo y comercialización de lotes con Club House, áreas recreativas y acceso a las mejores playas del norte.",
    image: "/project-nueva-asia.png",
    intro: "En Plus Inmobiliaria diseñamos condominios que combinan la tranquilidad de la playa y el campo con servicios de primer nivel.",
    mainGoal: "Facilitar el acceso a terrenos propios con alta plusvalía y proyectos residenciales planificados.",
    process: [
      { step: 1, title: "Visita Guiada", desc: "Coordinamos tu visita a Puerto Malabrigo para conocer el lote y sus amenidades." },
      { step: 2, title: "Elección de Ubicación", desc: "Seleccionas el metraje y ubicación ideal dentro del plano matriz." },
      { step: 3, title: "Firma y Entrega", desc: "Financiamiento inmediato a sola firma con entrega garantizada." }
    ]
  },
  {
    id: "credito-directo-facil",
    title: "Crédito Directo a Sola Firma",
    tag: "Sin Trámites Bancarios",
    description: "Financiamiento propio hasta en 48 meses con cuotas desde S/ 799, sin evaluación en Infocorp ni requisitos engorrosos.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    intro: "El financiamiento no debe ser una barrera para tener tu terreno de playa. Ofrecemos crédito directo y accesible.",
    mainGoal: "Garantizar que toda familia pueda adquirir su lote con cuotas mensuales cómodas.",
    process: [
      { step: 1, title: "Evaluación Inmediata", desc: "Solo necesitas tu DNI y recibo de servicios." },
      { step: 2, title: "Plan de Pagos", desc: "Eliges el plazo de 12 a 48 meses que mejor se acomode a ti." },
      { step: 3, title: "Inicio de Cuotas", desc: "Comienzas a pagar tu terreno con total tranquilidad." }
    ]
  },
  {
    id: "seguridad-juridica-sunarp",
    title: "100% Independizados en Sunarp",
    tag: "Garantía Total",
    description: "Todos nuestros proyectos cuentan con habilitación y respaldo registral para garantizar la seguridad de tu patrimonio.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    intro: "Tu inversión respaldada legalmente con títulos independizados y acompañamiento notarial.",
    mainGoal: "Brindar total transparencia y certeza legal a cada propietario.",
    process: [
      { step: 1, title: "Estudio de Títulos", desc: "Partidas matrices y planos aprobados a tu disposición." },
      { step: 2, title: "Contrato Notarial", desc: "Firma de contrato de compraventa con validez legal." },
      { step: 3, title: "Inscripción en Sunarp", desc: "Inscripción definitiva de tu propiedad." }
    ]
  }
];

// 5. TESTIMONIOS
export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Miguel Ángel Flores",
    role: "Propietario en Nueva Asia",
    comment: "Comprar nuestro lote en Puerto Malabrigo con Plus Inmobiliaria fue la mejor decisión. El crédito directo facilitó todo y las cuotas de S/ 799 son muy accesibles.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "test-2",
    name: "Patricia Alva",
    role: "Inversionista",
    comment: "Puerto Malabrigo tiene un potencial turístico enorme por el surf. Los terrenos de Plus Inmobiliaria cuentan con Club House y seguridad legal completa.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "test-3",
    name: "Jorge Ramírez",
    role: "Comprador de Lote de Campo",
    comment: "La atención de Carlos y su equipo fue transparente desde el primer día. Ya estamos planificando nuestra casa de campo para los fines de semana.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5
  }
];

// 6. FAQS
export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "¿Cuáles son los requisitos para acceder al Crédito Directo?",
    answer: "Solo necesitas tu DNI vigente y un recibo de servicios. No solicitamos historial crediticio ni intermediación bancaria, lo que hace el proceso 100% ágil y seguro."
  },
  {
    id: "faq-2",
    question: "¿Los lotes en Residencial Nueva Asia están independizados?",
    answer: "Sí, todos los proyectos desarrollados por Plus Inmobiliaria cuentan con respaldo registral e independización garantizada en Sunarp."
  },
  {
    id: "faq-3",
    question: "¿Qué amenidades incluye el proyecto Nueva Asia en Puerto Malabrigo?",
    answer: "Incluye Club House con piscina, canchas de tenis y frontón, juegos infantiles, parques temáticos, pórtico de seguridad 24/7 y servicios básicos."
  },
  {
    id: "faq-4",
    question: "¿Cómo puedo coordinar una visita a los terrenos?",
    answer: "Organizamos visitas guiadas gratuitas todos los fines de semana a Puerto Malabrigo. Contáctanos por WhatsApp para reservar tu movilidad y recorrido personalizado."
  }
];

// 7. BLOG
export const blogPosts: BlogPost[] = [
  {
    id: "por-que-invertir-puerto-malabrigo",
    title: "Por qué Puerto Malabrigo es el Nuevo Foco de Inversión Inmobiliaria",
    category: "Inversión & Plusvalía",
    date: "14 Ago 2026",
    readTime: "4 min de lectura",
    summary: "Descubre el auge de la costa norte, el turismo internacional y el crecimiento del valor por m² en terrenos de playa.",
    image: "/project-nueva-asia.png",
    author: "Plus Inmobiliaria",
    content: [
      "Puerto Malabrigo se ha consolidado como uno de los destinos costeros más codiciados del Perú. Conocido mundialmente por poseer la ola izquierda más larga del planeta, atrae no solo a turistas y deportistas, sino a familias e inversionistas que buscan calidad de vida frente al mar.",
      "Invertir en lotes de playa y campo en proyectos como Nueva Asia Residencial permite acceder a cuotas desde S/ 799 y asegurar un retorno exponencial gracias al continuo desarrollo urbano y turístico de la zona."
    ]
  },
  {
    id: "ventajas-credito-directo",
    title: "Ventajas de Comprar tu Terreno con Crédito Directo",
    category: "Finanzas Inmobiliarias",
    date: "08 Ago 2026",
    readTime: "3 min de lectura",
    summary: "Cómo el financiamiento a sola firma te permite adquirir tu lote sin depender de tasas bancarias ni trámites excesivos.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    author: "Carlos Santillán",
    content: [
      "El crédito directo es la herramienta ideal para quienes desean construir su patrimonio de forma flexible. Con cuotas fijas hasta en 48 meses, podrás asegurar tu terreno hoy mismo."
    ]
  },
  {
    id: "beneficios-vivir-cerca-mar",
    title: "Beneficios de Tener tu Casa de Playa y Campo en el Norte",
    category: "Estilo de Vida",
    date: "01 Ago 2026",
    readTime: "3 min de lectura",
    summary: "Salud, desconexión y momentos inolvidables en familia con el clima privilegiado de La Libertad.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    author: "Lucía Mendoza",
    content: [
      "Disfrutar del mar, el sol y áreas verdes en condominios cerrados con Club House brinda una experiencia inigualable para toda la familia."
    ]
  }
];
