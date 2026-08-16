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

// 1. STATS INMOBILIARIA JML
export const heroStats = [
  {
    value: "+10",
    label: "Años de Trayectoria",
    description: "Gestión y asesoría profesional en compra y venta de inmuebles en Trujillo."
  },
  {
    value: "+500",
    label: "Inmuebles Gestionados",
    description: "Operaciones de venta y alquiler cerradas con máxima seguridad y rapidez."
  },
  {
    value: "+1,500",
    label: "Clientes Satisfechos",
    description: "Familias e inversionistas respaldados con asesoría transparente y confiable."
  },
  {
    value: "100%",
    label: "Seguridad Jurídica",
    description: "Estudio de títulos minucioso y respaldo notarial en cada operación."
  }
];

export const stats = heroStats;

// 2. PROPIEDADES DESTACADAS EN TRUJILLO
export const featuredProperties: Property[] = [
  {
    id: "duplex-el-golf-trujillo",
    title: "Exclusivo Dúplex de Estreno en El Golf",
    location: "Urb. El Golf, Trujillo",
    price: "$198,000 USD",
    pricePen: "S/ 735,000 PEN",
    category: "Departamento Dúplex",
    beds: 3,
    baths: 3,
    sqft: 165,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    badge: "Zona Exclusiva",
    description: "Hermoso dúplex con acabados de primera, amplia terraza privada con vista al parque, cocina equipada con cuarzo y 2 estacionamientos paralelos.",
    features: [
      "Terraza social con zona BBQ",
      "Dormitorio principal con walk-in closet y baño",
      "Edificio con ascensor directo",
      "2 Estacionamientos techados",
      "Seguridad y vigilancia 24 horas"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
    ],
    assignedAgent: {
      name: "Juan Manuel López",
      role: "Director Inmobiliario JML",
      phone: "+51 987 654 321",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "depa-california-trujillo",
    title: "Departamento Moderno en California",
    location: "Urb. California, Trujillo",
    price: "$145,000 USD",
    pricePen: "S/ 538,000 PEN",
    category: "Departamento Flat",
    beds: 3,
    baths: 2,
    sqft: 110,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    badge: "Excelente Ubicación",
    description: "Impecable flat cerca a centros comerciales, colegios y parques. Iluminación natural, finos acabados en granito y porcelanato.",
    features: [
      "Sala-comedor con balcón panorámico",
      "Cocina cerrada con reposteros altos y bajos",
      "Ascensor moderno",
      "Estacionamiento incluido",
      "Recepción y lobby elegante"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
    ],
    assignedAgent: {
      name: "María Elena Rivas",
      role: "Asesora Senior de Ventas",
      phone: "+51 987 654 322",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "casa-san-andres-trujillo",
    title: "Residencia Familiar en San Andrés",
    location: "Urb. San Andrés, Trujillo",
    price: "$285,000 USD",
    pricePen: "S/ 1,058,000 PEN",
    category: "Casa Residencial",
    beds: 4,
    baths: 4,
    sqft: 240,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    badge: "Oportunidad Única",
    description: "Amplia casa de 3 niveles con jardín interior, family room, cochera para 2 autos y excelente distribución en una de las zonas más céntricas de Trujillo.",
    features: [
      "Jardín posterior con terraza",
      "4 Dormitorios amplios",
      "Área de servicio completa",
      "Cochera techada para 2 camionetas",
      "Estructura sólida y antisísmica"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
    ],
    assignedAgent: {
      name: "Juan Manuel López",
      role: "Director Inmobiliario JML",
      phone: "+51 987 654 321",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "penthouse-primavera-trujillo",
    title: "Penthouse con Terraza en Primavera",
    location: "Urb. Primavera, Trujillo",
    price: "$220,000 USD",
    pricePen: "S/ 815,000 PEN",
    category: "Penthouse",
    beds: 3,
    baths: 3,
    sqft: 180,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    badge: "Vista Panorámica",
    description: "Exclusivo penthouse con terraza social, zona de parrillas privada, acabados de lujo y vista panorámica a la ciudad.",
    features: [
      "Terraza con zona BBQ",
      "Ascensor con clave de seguridad",
      "Cocina tipo americana",
      "2 Cocheras y depósito",
      "Edificio de solo 6 pisos"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop"
    ],
    assignedAgent: {
      name: "María Elena Rivas",
      role: "Asesora Senior de Ventas",
      phone: "+51 987 654 322",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "casa-playa-huanchaco",
    title: "Casa de Playa Frente al Mar en Huanchaco",
    location: "Huanchaco Tradicional, Trujillo",
    price: "$260,000 USD",
    pricePen: "S/ 965,000 PEN",
    category: "Casa de Playa",
    beds: 4,
    baths: 3,
    sqft: 200,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    badge: "Frente al Mar",
    description: "Espectacular propiedad frente al mar en Huanchaco, ideal para vivienda familiar, hospedaje boutique o alquiler por temporadas.",
    features: [
      "Vista directa al mar y puestas de sol",
      "Piscina privada",
      "Amplias terrazas con vista",
      "Totalmente saneada e independizada"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop"
    ],
    assignedAgent: {
      name: "Juan Manuel López",
      role: "Director Inmobiliario JML",
      phone: "+51 987 654 321",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
    }
  },
  {
    id: "terreno-las-hortensias-trujillo",
    title: "Terreno Residencial en Las Hortensias",
    location: "Urb. Las Hortensias, Trujillo",
    price: "$95,000 USD",
    pricePen: "S/ 352,000 PEN",
    category: "Terreno Urbano",
    beds: 0,
    baths: 0,
    sqft: 180,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop",
    badge: "Alta Plusvalía",
    description: "Excelente lote residencial en urbanización consolidada con pistas, veredas, parques y todos los servicios básicos.",
    features: [
      "Frente a parque",
      "Parámetros para 5 pisos",
      "100% Saneado en Sunarp",
      "Zona de alta demanda residencial"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1200&auto=format&fit=crop"
    ],
    assignedAgent: {
      name: "María Elena Rivas",
      role: "Asesora Senior de Ventas",
      phone: "+51 987 654 322",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    }
  }
];

// 3. AGENTES / EQUIPO
export const agents: Agent[] = [
  {
    id: "juan-manuel-lopez",
    name: "Juan Manuel López",
    role: "Director General & Broker",
    phone: "+51 987 654 321",
    email: "jlopez@inmobiliariajml.com",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    bio: "Más de 10 años liderando la gestión inmobiliaria en Trujillo. Especialista en valoración patrimonial, negociación de compraventa y asesoría legal inmobiliaria.",
    experience: "+10 años de experiencia comercial en el mercado inmobiliario de Trujillo y el norte del Perú.",
    skills: [
      { title: "Compra y Venta", description: "Gestión ágil para compradores y propietarios." },
      { title: "Estudio de Títulos", description: "Verificación minuciosa en Sunarp y notarías." }
    ]
  },
  {
    id: "maria-elena-rivas",
    name: "María Elena Rivas",
    role: "Asesora Comercial Senior",
    phone: "+51 987 654 322",
    email: "mrivas@inmobiliariajml.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    bio: "Especialista en propiedades residenciales en El Golf, California, San Andrés y Huanchaco con un enfoque centrado en las necesidades de cada familia.",
    experience: "+6 años asesorando a clientes en la búsqueda de su hogar ideal en Trujillo.",
    skills: [
      { title: "Asesoría Personalizada", description: "Acompañamiento en cada visita y negociación." },
      { title: "Gestión Hipotecaria", description: "Convenios y asesoría con entidades bancarias." }
    ]
  }
];

// 4. SERVICIOS
export const services: Service[] = [
  {
    id: "compra-venta-inmuebles",
    title: "Gestión en Compra y Venta de Inmuebles",
    tag: "Servicio Principal",
    description: "Asesoría integral para vender tu propiedad al mejor precio de mercado o encontrar el inmueble ideal en Trujillo.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    intro: "En Inmobiliaria JML nos encargamos de todo el proceso comercial, legal y publicitario para una transacción segura y exitosa.",
    mainGoal: "Maximizar el valor de tu patrimonio y garantizar una experiencia transparente y sin complicaciones.",
    process: [
      { step: 1, title: "Valoración Comercial", desc: "Estudio de mercado para determinar el precio óptimo del inmueble." },
      { step: 2, title: "Plan de Marketing", desc: "Fotografía profesional, difusión en portales y red de compradores." },
      { step: 3, title: "Cierre Notarial", desc: "Redacción de minuta, revisión de títulos y firma de escritura pública." }
    ]
  },
  {
    id: "asesoria-legal-inmobiliaria",
    title: "Asesoría Legal & Estudio de Títulos",
    tag: "Seguridad Jurídica",
    description: "Verificación de partidas registrales, cargas, gravámenes e independizaciones en Sunarp para compras 100% seguras.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    intro: "Protegemos tu inversión revisando cada detalle legal antes de cualquier compromiso de pago.",
    mainGoal: "Brindar certeza jurídica absoluta a compradores y vendedores.",
    process: [
      { step: 1, title: "Copia Literal y CRI", desc: "Análisis exhaustivo del Certificado Registral Inmobiliario." },
      { step: 2, title: "Saneamiento Municipal", desc: "Verificación de HR, PU y no adeudo en el SAT." },
      { step: 3, title: "Acompañamiento Notarial", desc: "Supervisión de la firma hasta la inscripción en registros públicos." }
    ]
  },
  {
    id: "gestion-creditos-hipotecarios",
    title: "Gestión de Créditos Hipotecarios",
    tag: "Facilidad Financiera",
    description: "Te conectamos con los principales bancos del Perú para obtener las mejores tasas y aprobación rápida de tu crédito.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop",
    intro: "Te ayudamos a estructurar tu solicitud de crédito hipotecario para calificar a las mejores condiciones.",
    mainGoal: "Facilitar el financiamiento bancario que necesitas para tu nuevo hogar.",
    process: [
      { step: 1, title: "Evaluación Preliminar", desc: "Revisión de capacidad de pago e ingresos demostrables." },
      { step: 2, title: "Comparación de Tasas", desc: "Presentación de alternativas con diferentes bancos." },
      { step: 3, title: "Aprobación y Desembolso", desc: "Coordinación directa con el banco y la notaría." }
    ]
  }
];

// 5. TESTIMONIOS
export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Carlos Villalobos",
    role: "Comprador en El Golf",
    comment: "Excelente asesoría de Inmobiliaria JML. Nos ayudaron a encontrar el dúplex perfecto en El Golf y todo el trámite notarial fue impecable y rápido.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "test-2",
    name: "Sandra Benites",
    role: "Propietaria en California",
    comment: "Vendieron mi departamento en Trujillo en menos de 45 días al precio que esperaba. Profesionales, transparentes y siempre atentos.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "test-3",
    name: "Fernando Quiroz",
    role: "Inversionista en Trujillo",
    comment: "La mejor agencia inmobiliaria en Trujillo. Su conocimiento del mercado y el respaldo legal te dan total tranquilidad.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5
  }
];

// 6. FAQS
export const faqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "¿Qué documentos necesito para poner mi propiedad en venta con JML?",
    answer: "Necesitas la Copia Literal actualizada de Sunarp, el HR (Hoja Resumen) y PU (Predio Urbano) del SAT de Trujillo, comprobante de pago del impuesto predial del año en curso y DNI de los propietarios."
  },
  {
    id: "faq-2",
    question: "¿En qué zonas de Trujillo tienen inmuebles disponibles?",
    answer: "Gestionamos propiedades exclusivas en El Golf, California, San Andrés, Primavera, Huanchaco, Las Hortensias, San Isidro y principales urbanizaciones de Trujillo."
  },
  {
    id: "faq-3",
    question: "¿Cómo garantiza Inmobiliaria JML la seguridad de la compraventa?",
    answer: "Realizamos un riguroso estudio de títulos que verifica que el inmueble esté libre de embargos, hipotecas ocultas o problemas sucesorios, acompañándote hasta la firma en notaría."
  },
  {
    id: "faq-4",
    question: "¿Tiene algún costo la asesoría inicial para vender o comprar?",
    answer: "No, la consulta inicial y valoración preliminar de tu propiedad son totalmente gratuitas. Contáctanos por WhatsApp para agendar una reunión."
  }
];

// 7. BLOG
export const blogPosts: BlogPost[] = [
  {
    id: "mejores-zonas-vivir-trujillo",
    title: "Las 5 Mejores Zonas Residenciales para Vivir en Trujillo",
    category: "Guía Inmobiliaria",
    date: "15 Ago 2026",
    readTime: "4 min de lectura",
    summary: "Conoce por qué El Golf, California y San Andrés encabezan las preferencias de las familias e inversionistas en la ciudad de la eterna primavera.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    author: "Inmobiliaria JML",
    content: [
      "Trujillo continúa siendo uno de los polos de mayor crecimiento urbano y plusvalía en el norte peruano. Elegir la ubicación adecuada no solo define tu calidad de vida, sino la rentabilidad de tu inversión a mediano y largo plazo."
    ]
  },
  {
    id: "pasos-estudio-titulos-sunarp",
    title: "La Importancia del Estudio de Títulos Antes de Comprar un Inmueble",
    category: "Legal & Seguridad",
    date: "08 Ago 2026",
    readTime: "3 min de lectura",
    summary: "Evita riesgos y sorpresas desagradables conociendo cómo se verifican las partidas registrales en Sunarp.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1200&auto=format&fit=crop",
    author: "Juan Manuel López",
    content: [
      "Comprar un inmueble es una de las decisiones financieras más importantes de tu vida. Contar con un broker profesional que verifique la situación legal te garantiza total tranquilidad."
    ]
  },
  {
    id: "consejos-vender-rapido-trujillo",
    title: "Cómo Preparar Tu Casa o Departamento para Venderlo al Mejor Precio",
    category: "Consejos para Propietarios",
    date: "01 Ago 2026",
    readTime: "3 min de lectura",
    summary: "Estrategias de home staging, precio de mercado y marketing digital para cerrar la venta en tiempo récord.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    author: "María Elena Rivas",
    content: [
      "Una buena primera impresión y una estrategia de difusión profesional multiplican las visitas y reducen el tiempo de venta significativamente."
    ]
  }
];
