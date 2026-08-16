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
    title: "Penthouse Dúplex de Alta Plusvalía en San Isidro Golf",
    category: "Inversión Residencial",
    price: "$790,000",
    pricePen: "S/ 2,960,000",
    location: "Av. Aurelio Miró Quesada, San Isidro • Lima",
    beds: 4,
    baths: 4,
    sqft: 340,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
    badge: "ALTO RETORNO",
    description: "Inmueble residencial de autor con vista panorámica al Lima Golf Club. Diseñado para inversionistas exigentes que buscan plusvalía sostenida y rentabilidad por alquiler corporativo. Cuenta con ascensor directo, acabados europeos en cuarzo y madera estructurada, y terraza social privada con zona lounge.",
    propertyType: "Penthouse Dúplex Patrimonial",
    totalArea: "340 m²",
    coveredArea: "295 m²",
    parking: "3 Cocheras Paralelas + 1 Depósito Amplio",
    deliveryStatus: "Entrega Inmediata (Estreno)",
    maintenance: "S/ 890 / mes aprox.",
    security: "Seguridad privada 24/7, cámaras CCTV y control de acceso biométrico",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Gonzalo Silva",
      role: "Director de Inversiones & Estrategia Patrimonial",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      phone: "+51 987 654 321",
      email: "gsilva@gysinmobiliarios.pe"
    },
    nearbyPlaces: [
      { name: "Lima Golf Club", category: "Deportes & Exclusividad", distance: "2 min a pie" },
      { name: "Centro Financiero San Isidro", category: "Negocios & Banca", distance: "4 min en auto" },
      { name: "Zona Gastronómica Dasso", category: "Restaurantes & Cafés", distance: "5 min en auto" },
      { name: "Real Plaza Salaverry", category: "Comercio & Retail", distance: "6 min en auto" }
    ]
  },
  {
    id: "prop-2",
    title: "Edificio Corporativo Boutique con Renta Garantizada",
    category: "Inversión Comercial",
    price: "$1,850,000",
    pricePen: "S/ 6,930,000",
    location: "Av. Canaval y Moreyra, San Isidro • Lima",
    beds: 0,
    baths: 8,
    sqft: 820,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
    badge: "OPORTUNIDAD COMERCIAL",
    description: "Activo inmobiliario comercial de primer nivel en pleno polo corporativo de San Isidro. Estructurado con contratos de arrendamiento vigentes con empresas triple A, asegurando un flujo de caja mensual con Cap Rate superior al 8.5% anual en dólares.",
    propertyType: "Edificio Corporativo / Oficinas Prime",
    totalArea: "820 m² Construidos",
    coveredArea: "760 m² Útiles",
    parking: "12 Estacionamientos Subterráneos",
    deliveryStatus: "Operativo con Inquilino Corporativo",
    maintenance: "Autogestionado",
    security: "Control de accesos con molinetes ópticos y vigilancia integral 24/7",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Rodrigo Salazar",
      role: "Consultor Senior de Finanzas & Bienes Raíces",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      phone: "+51 993 456 789",
      email: "rsalazar@gysinmobiliarios.pe"
    },
    nearbyPlaces: [
      { name: "Estación Canaval y Moreyra", category: "Transporte Rápido", distance: "2 min a pie" },
      { name: "Torres Financieras BCP / BBVA", category: "Banca Matriz", distance: "3 min a pie" },
      { name: "Hotel Westin Lima", category: "Hotelería 5 Estrellas", distance: "4 min a pie" },
      { name: "Vía Expresa Paseo de la República", category: "Conectividad Vial", distance: "1 min" }
    ]
  },
  {
    id: "prop-3",
    title: "Residencia Contemporánea & Arquitectura de Autor",
    category: "Residencial Premium",
    price: "$1,150,000",
    pricePen: "S/ 4,310,000",
    location: "Rinconada Baja, La Molina • Lima",
    beds: 5,
    baths: 6,
    sqft: 520,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
    badge: "EXCLUSIVIDAD",
    description: "Imponente residencia en exclusivo condominio cerrado con microclima privilegiado. Extensos jardines con paisajismo, piscina temperada, zona de parrilla techada estilo BBQ Lounge, cava climatizada y suite principal con doble walk-in closet y acabados en mármol Travertino.",
    propertyType: "Residencia Unifamiliar de Lujo",
    totalArea: "780 m² de Terreno",
    coveredArea: "520 m² Construidos",
    parking: "4 Estacionamientos Techados",
    deliveryStatus: "Entrega Inmediata (Saneada)",
    maintenance: "S/ 650 / mes (Junta de Propietarios)",
    security: "Pórtico de control de acceso 24/7 y patrullaje motorizado permanente",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Gisela Salinas",
      role: "Directora de Asesoría Legal & Saneamiento",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      phone: "+51 981 234 567",
      email: "gsalinas@gysinmobiliarios.pe"
    },
    nearbyPlaces: [
      { name: "Rinconada Country Club", category: "Club Social & Golf", distance: "3 min" },
      { name: "Centro Comercial Molicentro", category: "Servicios & Compras", distance: "4 min" },
      { name: "Colegio Newton & Roosevelt", category: "Colegios Internacionales", distance: "6 min" },
      { name: "Wong Planicie", category: "Supermercados", distance: "5 min" }
    ]
  },
  {
    id: "prop-4",
    title: "Departamento Flat Oceanview Frente al Mar",
    category: "Inversión Residencial",
    price: "$560,000",
    pricePen: "S/ 2,100,000",
    location: "Malecón de la Marina, Miraflores • Lima",
    beds: 3,
    baths: 3,
    sqft: 215,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
    badge: "VISTA AL MAR",
    description: "Departamento flat frente al océano pacífico con mamparas termoacústicas de piso a techo y terraza envolvente. Excelente perfil patrimonial tanto para vivienda familiar como para alquiler temporal VIP con alta tasa de ocupación anual.",
    propertyType: "Departamento Flat Frente al Mar",
    totalArea: "215 m²",
    coveredArea: "190 m²",
    parking: "2 Cocheras Paralelas Techadas + 1 Depósito",
    deliveryStatus: "Entrega Inmediata",
    maintenance: "S/ 750 / mes aprox.",
    security: "Recepción de lujo 24/7 y control biométrico",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Gonzalo Silva",
      role: "Director de Inversiones & Estrategia Patrimonial",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      phone: "+51 987 654 321",
      email: "gsilva@gysinmobiliarios.pe"
    },
    nearbyPlaces: [
      { name: "Parque del Faro & Malecón", category: "Paseos & Deporte", distance: "1 min a pie" },
      { name: "Larcomar", category: "Gastronomía & Shopping", distance: "4 min en auto" },
      { name: "Club Terrazas", category: "Tenis & Club Social", distance: "3 min en auto" },
      { name: "Av. Pardo", category: "Conectividad Comercial", distance: "2 min en auto" }
    ]
  },
  {
    id: "prop-5",
    title: "Terreno Estratégico para Desarrollo Multifamiliar",
    category: "Desarrollo Inmobiliario",
    price: "$1,420,000",
    pricePen: "S/ 5,325,000",
    location: "Av. Primavera, Chacarilla, Surco • Lima",
    beds: 0,
    baths: 0,
    sqft: 650,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1400&auto=format&fit=crop",
    badge: "DESARROLLO",
    description: "Excelente terreno con parámetros urbanísticos de alta densidad (RDA) para edificación de proyecto multifamiliar de departamentos de estreno. Frente de 18 metros lineales sobre avenida principal con zonificación consolidada y saneamiento registral listo para estructuración de fideicomiso.",
    propertyType: "Terreno Residencial / Multifamiliar",
    totalArea: "650 m² de Terreno",
    coveredArea: "0 m²",
    parking: "N/A",
    deliveryStatus: "Listo para Construcción / Parámetros Aprobados",
    maintenance: "N/A",
    security: "Perímetro cerrado con cerco de seguridad",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Gisela Salinas",
      role: "Directora de Asesoría Legal & Saneamiento",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      phone: "+51 981 234 567",
      email: "gsalinas@gysinmobiliarios.pe"
    },
    nearbyPlaces: [
      { name: "C.C. Chacarilla", category: "Comercio & Restaurantes", distance: "3 min" },
      { name: "Colegio Santa María Marianistas", category: "Colegios", distance: "4 min" },
      { name: "Av. Velasco Astete", category: "Conectividad", distance: "2 min" },
      { name: "Parque Bella Luz", category: "Áreas Verdes", distance: "2 min a pie" }
    ]
  },
  {
    id: "prop-6",
    title: "Dúplex de Estreno con Terraza & Vista a Parque",
    category: "Inversión Residencial",
    price: "$385,000",
    pricePen: "S/ 1,440,000",
    location: "Calle Las Moreras, San Borja • Lima",
    beds: 3,
    baths: 3,
    sqft: 185,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop",
    badge: "PREVENTA",
    description: "Departamento dúplex nuevo en edificio exclusivo de baja densidad frente a parque. Distribución optimizada para familias modernas, finos acabados en cuarzo y porcelanatos importados, terraza privada y alta liquidez en el mercado secundario.",
    propertyType: "Departamento Dúplex de Estreno",
    totalArea: "185 m²",
    coveredArea: "150 m²",
    parking: "2 Cocheras Paralelas Techadas",
    deliveryStatus: "Estreno (Inafecto a Alcabala)",
    maintenance: "S/ 490 / mes aprox.",
    security: "Conserjería 24/7 y ascensor directo Schindler",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Rodrigo Salazar",
      role: "Consultor Senior de Finanzas & Bienes Raíces",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      phone: "+51 993 456 789",
      email: "rsalazar@gysinmobiliarios.pe"
    },
    nearbyPlaces: [
      { name: "Pentagonito & Parque de la Felicidad", category: "Deportes al Aire Libre", distance: "3 min a pie" },
      { name: "Real Plaza Primavera", category: "Centros Comerciales", distance: "5 min" },
      { name: "Clínica San Borja", category: "Salud", distance: "6 min" },
      { name: "Av. San Borja Sur", category: "Vías Rápidas", distance: "2 min" }
    ]
  }
];

export const stats: Stat[] = [
  {
    value: "14+",
    label: "Años de Trayectoria",
    description: "Especialistas en construir valor y maximizar rentabilidad en cada decisión inmobiliaria"
  },
  {
    value: "S/ 250M+",
    label: "Patrimonio Gestionado",
    description: "Transformamos experiencia, estrategia y conocimiento del mercado en resultados sólidos"
  },
  {
    value: "100%",
    label: "Seguridad Legal & Financiera",
    description: "Asesoría integral en estructuración, saneamiento registral y financiamiento estratégico"
  }
];

export const services: Service[] = [
  {
    id: "manejo-inversiones-inmobiliarias",
    title: "Manejo y Estructuración de Inversiones en Bienes Raíces",
    description: "Estrategias de inversión patrimonial, selección de activos de alto rendimiento y análisis financiero de Cap Rate y ROI.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop",
    tag: "INVERSIÓN PATRIMONIAL",
    intro: "Manejamos carteras de inversión en bienes raíces para familias, fondos privados y empresas. Transformamos conocimiento del mercado en decisiones altamente rentables y blindadas frente a fluctuaciones económicas.",
    mainGoal: "Maximizar el retorno de inversión y la plusvalía del capital, garantizando activos generadores de flujo de caja continuo y seguridad a largo plazo.",
    process: [
      { step: "01", title: "Diagnóstico de Perfil y Metas", desc: "Evaluamos objetivos de rentabilidad, horizonte temporal y tolerancia al riesgo del inversionista." },
      { step: "02", title: "Scouting y Análisis Comparativo", desc: "Identificamos activos residenciales, comerciales o terrenos con alto potencial de revalorización." },
      { step: "03", title: "Modelado Financiero (TIR / Cap Rate)", desc: "Proyección rigurosa de flujos de caja, costos operativos, impuestos y rentabilidad neta anual." },
      { step: "04", title: "Estructuración y Cierre Seguro", desc: "Negociación de precios de entrada preferenciales y redacción de contratos blindados." },
      { step: "05", title: "Monitoreo y Estrategia de Salida", desc: "Seguimiento de valorización y asesoría en el momento óptimo para desinversión o reventa." }
    ],
    challenges: [
      {
        challenge: "Inversiones con rentabilidades proyectadas irreales o costos ocultos de mantenimiento.",
        solution: "Auditamos exhaustivamente el historial operativo y modelamos escenarios conservadores con métricas reales de mercado."
      },
      {
        challenge: "Riesgos de vacancia prolongada en activos comerciales o residenciales.",
        solution: "Seleccionamos únicamente ubicaciones estratégicas con demanda corporativa consolidada."
      }
    ]
  },
  {
    id: "asesoria-legal-saneamiento",
    title: "Asesoría Legal Inmobiliaria & Saneamiento Registral",
    description: "Estudio minucioso de títulos en Sunarp, elaboración de minutas, saneamiento físico-legal y cierre notarial 100% seguro.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    tag: "SEGURIDAD JURÍDICA",
    intro: "La seguridad jurídica es el pilar de toda inversión inmobiliaria exitosa. En GyS Servicios Inmobiliarios nuestro equipo legal especializado protege tu patrimonio en cada etapa contractual.",
    mainGoal: "Garantizar transacciones limpias, libres de contingencias registrales, gravámenes ocultos o disputas hereditarias.",
    process: [
      { step: "01", title: "Auditoría Registral Exhaustiva", desc: "Estudio de títulos de los últimos 10 años en Sunarp (Copia Literal, CRI y títulos archivados)." },
      { step: "02", title: "Verificación Municipal y Tributaria", desc: "Revisión de constancias de no adeudo de impuesto predial, arbitrios y licencias municipales." },
      { step: "03", title: "Saneamiento y Regularización", desc: "Trámite de independizaciones, rectificación de áreas, declaratorias de fábrica y levantamiento de hipotecas." },
      { step: "04", title: "Redacción de Minutas y Contratos", desc: "Elaboración de contratos a medida con cláusulas de protección patrimonial y penalidades de cumplimiento." },
      { step: "05", title: "Firma Notarial e Inscripción", desc: "Acompañamiento en notaría hasta la inscripción registral definitiva a nombre del nuevo propietario." }
    ],
    challenges: [
      {
        challenge: "Cargas, embargos o procesos judiciales no advertidos en la partida registral.",
        solution: "Revisión integral de antecedentes judiciales y títulos archivados antes de autorizar cualquier pago de arras."
      },
      {
        challenge: "Discrepancias entre el área física del terreno y el metraje inscrito en Sunarp.",
        solution: "Levantamiento topográfico pericial y trámite de rectificación de linderos según normativa vigente."
      }
    ]
  },
  {
    id: "asesoria-financiera-hipotecaria",
    title: "Asesoría y Planificación Financiera Hipotecaria",
    description: "Gestión estratégica con la banca privada para optimizar estructuras de financiamiento, tasas de interés preferenciales y apalancamiento.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop",
    tag: "FINANZAS ESTRATÉGICAS",
    intro: "Optimizamos tu capacidad financiera para adquirir activos inmobiliarios con el menor costo de capital posible a través de alianzas con los principales bancos del país.",
    mainGoal: "Diseñar esquemas de financiamiento eficientes que maximicen el rendimiento del capital propio y aceleren el crecimiento patrimonial.",
    process: [
      { step: "01", title: "Análisis de Capacidad Crediticia", desc: "Evaluación financiera de ingresos, endeudamiento y estructuración del perfil del solicitante." },
      { step: "02", title: "Negociación Multibanco", desc: "Presentación simultánea del expediente en las mejores entidades financieras para competir por la menor TEA." },
      { step: "03", title: "Estructuración de Cuotas y Plazos", desc: "Elección del plan óptimo de amortización, cuotas dobles y condiciones de prepago sin penalidad." },
      { step: "04", title: "Coordinación de Tasación Bancaria", desc: "Sustento técnico del valor comercial del inmueble ante los peritos de la entidad bancaria." },
      { step: "05", title: "Desembolso y Firma Notarial", desc: "Acompañamiento en el cierre financiero y liquidación formal de fondos." }
    ],
    challenges: [
      {
        challenge: "Dificultad de independientes o empresarios para sustentar ingresos ante la banca tradicional.",
        solution: "Armado de carpetas financieras profesionales con sustento de flujos comerciales, balances y dividendos."
      },
      {
        challenge: "Tasas de interés elevadas que reducen la rentabilidad del proyecto.",
        solution: "Negociación directa con ejecutivos de banca privada para obtener tasas corporativas preferenciales."
      }
    ]
  },
  {
    id: "comercializacion-venta-estrategica",
    title: "Comercialización y Venta Estratégica de Propiedades",
    description: "Planes de comercialización de alto impacto, valoración comercial pericial y red exclusiva de inversionistas calificados.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    tag: "VENTA ESTRATÉGICA",
    intro: "Construimos valor en cada propiedad. Implementamos estrategias de marketing de alta gama y filtramos a compradores calificados para lograr cierres ágiles y al valor óptimo de mercado.",
    mainGoal: "Vender tu activo inmobiliario en el menor tiempo posible, al precio más competitivo y con total respaldo contractual.",
    process: [
      { step: "01", title: "Valorización Comercial Pericial", desc: "Determinación del precio estratégico mediante análisis comparativo de mercado y tasación técnica." },
      { step: "02", title: "Producción Audiovisual de Alta Gama", desc: "Fotografía arquitectónica profesional, video con dron y recorridos virtuales 3D." },
      { step: "03", title: "Campaña Multicanal Segmentada", desc: "Difusión en plataformas inmobiliarias premium y presentación directa a nuestra cartera de inversionistas." },
      { step: "04", title: "Calificación y Filtro de Clientes", desc: "Verificación de respaldo económico y precalificación bancaria antes de programar visitas." },
      { step: "05", title: "Cierre Notarial y Liquidación", desc: "Gestión de contratos, pago de tributos correspondientes y entrega de posesión del inmueble." }
    ],
    challenges: [
      {
        challenge: "Inmuebles con tiempos prolongados en el mercado por estrategias de difusión deficientes.",
        solution: "Reposicionamiento del activo con producción visual editorial y campañas digitales altamente segmentadas."
      },
      {
        challenge: "Negociaciones desgastantes con compradores no calificados.",
        solution: "Filtro riguroso previo para negociar únicamente con compradores con fondos o aprobación bancaria firme."
      }
    ]
  }
];

export const agents: Agent[] = [
  {
    id: "agent-1",
    name: "Gonzalo Silva",
    role: "Director de Inversiones & Estrategia Patrimonial",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    phone: "+51 987 654 321",
    email: "gsilva@gysinmobiliarios.pe",
    bio: "Gonzalo Silva es socio fundador y Director de Inversiones en GyS Servicios Inmobiliarios. Con más de 14 años de experiencia en el mercado inmobiliario corporativo y residencial de alta gama, lidera la estructuración de portafolios patrimoniales y transacciones de alto valor en Lima y principales polos de desarrollo del Perú.",
    experience: "Ha asesorado transacciones por más de S/ 150 millones en activos comerciales, terrenos y residencias prime, enfocándose en maximizar la rentabilidad y plusvalía de cada cliente.",
    skills: [
      {
        title: "Estructuración de Inversiones",
        description: "Modelado financiero de rentabilidad, tasas de capitalización y análisis de riesgo patrimonial."
      },
      {
        title: "Negociación Estratégica",
        description: "Alineación de intereses comerciales para lograr acuerdos sólidos y de alto beneficio mutuo."
      },
      {
        title: "Visión del Mercado Inmobiliario",
        description: "Identificación de oportunidades fuera del mercado abierto y tendencias de crecimiento urbano."
      },
      {
        title: "Gestión de Portafolios",
        description: "Administración integral y revalorización continua de carteras de activos inmobiliarios."
      }
    ],
    career: [
      {
        period: "2012 — 2015",
        description: "Analista senior de inversiones inmobiliarias residenciales y comerciales en Lima."
      },
      {
        period: "2016 — 2019",
        description: "Director comercial liderando la colocación de proyectos multifamiliares y oficinas prime."
      },
      {
        period: "2020 — 2023",
        description: "Estructuración de fondos inmobiliarios y compra de terrenos para desarrollo urbano."
      },
      {
        period: "2024 — Presente",
        description: "Director General de Inversiones en GyS Servicios Inmobiliarios, construyendo valor para clientes e inversionistas."
      }
    ]
  },
  {
    id: "agent-2",
    name: "Gisela Salinas",
    role: "Directora de Asesoría Legal & Saneamiento",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    phone: "+51 981 234 567",
    email: "gsalinas@gysinmobiliarios.pe",
    bio: "Gisela Salinas es socia fundadora y Directora del área Legal en GyS Servicios Inmobiliarios. Abogada especialista en derecho registral, notarial e inmobiliario con más de 12 años asesorando operaciones complejas, saneamiento de predios y blindaje contractual.",
    experience: "Ha liderado el saneamiento físico-legal de más de 200 propiedades y coordinado cierres notariales seguros con las principales notarías de Lima.",
    skills: [
      {
        title: "Derecho Registral y Notarial",
        description: "Dominio absoluto de la normativa de Sunarp, estudios de títulos y minutas de compraventa complejas."
      },
      {
        title: "Saneamiento Físico-Legal",
        description: "Independizaciones, acumulación de lotes, rectificación de áreas y declaratorias de fábrica."
      },
      {
        title: "Estructuración Contractual",
        description: "Redacción de contratos de arras, opciones de compra y fideicomisos inmobiliarios de garantía."
      },
      {
        title: "Planificación Tributaria",
        description: "Optimización legal del impuesto de Alcabala, Impuesto a la Renta de 2da categoría y arbitrios."
      }
    ],
    career: [
      {
        period: "2014 — 2017",
        description: "Asesora legal en notarías líderes de Lima especializada en transferencias inmobiliarias."
      },
      {
        period: "2018 — 2021",
        description: "Líder de saneamiento predial y regularización de inmuebles comerciales y residenciales."
      },
      {
        period: "2022 — 2023",
        description: "Consultora legal para empresas constructoras y fondos de inversión privada."
      },
      {
        period: "2024 — Presente",
        description: "Directora Legal en GyS Servicios Inmobiliarios, asegurando cero contingencias en cada operación."
      }
    ]
  },
  {
    id: "agent-3",
    name: "Rodrigo Salazar",
    role: "Consultor Senior de Finanzas & Bienes Raíces",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    phone: "+51 993 456 789",
    email: "rsalazar@gysinmobiliarios.pe",
    bio: "Rodrigo Salazar es especialista en finanzas inmobiliarias, evaluación crediticia y apalancamiento estratégico en GyS Servicios Inmobiliarios. Con sólida trayectoria en banca corporativa e hipotecaria, ayuda a los clientes a estructurar el mejor esquema financiero para cada adquisición.",
    experience: "Ha gestionado con éxito más de S/ 80 millones en colocaciones hipotecarias y préstamos puente para proyectos inmobiliarios.",
    skills: [
      {
        title: "Modelación Financiera y Créditos",
        description: "Estructuración de financiamientos con BCP, BBVA, Interbank y Scotiabank con tasas preferenciales."
      },
      {
        title: "Análisis de Retorno de Inversión",
        description: "Cálculo de TIR, VAN, Cap Rate y periodo de recuperación de capital invertido."
      },
      {
        title: "Estrategias de Apalancamiento",
        description: "Uso óptimo de deuda bancaria para potenciar la rentabilidad sobre el patrimonio (ROE)."
      },
      {
        title: "Asesoría a Independientes",
        description: "Formulación de expedientes financieros sólidos para independientes y personas jurídicas."
      }
    ],
    career: [
      {
        period: "2015 — 2018",
        description: "Ejecutivo de banca hipotecaria y créditos empresariales en entidad líder local."
      },
      {
        period: "2019 — 2022",
        description: "Consultor financiero independiente para inversionistas en bienes raíces."
      },
      {
        period: "2023 — 2024",
        description: "Asesor senior en estructuración de créditos para preventas e inmuebles prime."
      },
      {
        period: "2025 — Presente",
        description: "Consultor Financiero Senior en GyS Servicios Inmobiliarios."
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Fernando Velásquez",
    role: "Inversionista Privado - San Isidro",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "GyS Servicios Inmobiliarios transformó mi visión de inversión. Su asesoría legal y financiera me permitió adquirir activos con rentabilidad garantizada y total seguridad."
  },
  {
    id: "test-2",
    name: "María Eugenia Barnechea",
    role: "Empresaria - Miraflores",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "El equipo legal liderado por Gisela Salinas resolvió una compleja independización en Sunarp que llevaba meses estancada. Profesionales de primer nivel."
  },
  {
    id: "test-3",
    name: "Carlos Alberto Montoya",
    role: "Director de Fondo Patrimonial",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Gonzalo y Rodrigo tienen un dominio analítico excepcional del mercado. Cada propiedad recomendada ha superado las proyecciones de plusvalía y retorno."
  },
  {
    id: "test-4",
    name: "Claudia & Renato Morales",
    role: "Propietarios en La Molina",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Vendimos nuestra residencia al mejor valor de mercado en menos de 45 días. La estrategia comercial y el filtro de compradores fueron impecables."
  },
  {
    id: "test-5",
    name: "Ing. Jorge Luis Seminario",
    role: "Desarrollador Inmobiliario - Surco",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "GyS es nuestro socio estratégico indispensable para la adquisición y saneamiento de terrenos multifamiliares. Rigor técnico absoluto."
  },
  {
    id: "test-6",
    name: "Lucía De La Puente",
    role: "Inversionista en Renta Residencial",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Su asesoría integral en crédito hipotecario me consiguió una tasa preferencial que mejoró significativamente el flujo neto de mi inversión."
  }
];

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Qué servicios integrales brinda GyS Servicios Inmobiliarios?",
    answer: "Brindamos una asesoría 360° que abarca el manejo de inversiones en bienes raíces, asesoría legal especializada (estudio de títulos y saneamiento en Sunarp), consultoría financiera hipotecaria y comercialización estratégica de activos residenciales y comerciales."
  },
  {
    id: "faq-2",
    question: "¿Cómo garantizan la seguridad jurídica de cada transacción inmobiliaria?",
    answer: "Nuestro equipo legal efectúa un estudio de títulos exhaustivo de los últimos 10 años en Sunarp, verifica cargas, gravámenes, embargos y antecedentes judiciales, y redacta contratos con cláusulas blindadas de protección patrimonial antes de autorizar cualquier desembolso."
  },
  {
    id: "faq-3",
    question: "¿Cómo estructuran y calculan la rentabilidad de una inversión en bienes raíces?",
    answer: "Elaboramos modelos financieros a medida calculando la Tasa Interna de Retorno (TIR), la Tasa de Capitalización (Cap Rate), el flujo de caja neto proyectado y la ganancia de capital estimada por plusvalía constructiva o revalorización de la zona."
  },
  {
    id: "faq-4",
    question: "¿Ayudan en la obtención de financiamiento y crédito hipotecario?",
    answer: "Sí, trabajamos directamente con ejecutivos senior de las principales entidades financieras del Perú (BCP, BBVA, Interbank y Scotiabank) para obtener la tasa de interés más baja del mercado y condiciones de amortización flexibles."
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Estrategias Clave para Construir Patrimonio a Través de Bienes Raíces",
    category: "INVERSIÓN PATRIMONIAL",
    date: "14 DE JUNIO, 2026",
    readingTime: "6 Minutos",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    summary: "Aprende cómo transformar experiencia, estrategia y conocimiento del mercado en decisiones inmobiliarias que generan rentabilidad y plusvalía sostenible.",
    author: {
      name: "Gonzalo Silva",
      role: "Director de Inversiones & Estrategia Patrimonial",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      quote: "Construir valor en bienes raíces exige visión cuantitativa, rigor legal y disciplina estratégica."
    },
    middleImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    section1: {
      title: "La Importancia del Rigor Financiero en Bienes Raíces",
      paragraphs: [
        "Invertir en bienes raíces no consiste simplemente en adquirir metros cuadrados, sino en estructurar activos generadores de flujo de efectivo y plusvalía continua. El análisis exhaustivo de la tasa de capitalización (Cap Rate) y la tasa interna de retorno (TIR) permite distinguir oportunidades sólidas de compras especulativas.",
        "En GyS Servicios Inmobiliarios combinamos métricas de mercado con análisis macroeconómico local para seleccionar propiedades en ubicaciones con demanda corporativa y residencial de alta resiliencia."
      ]
    },
    section2: {
      title: "Diversificación y Selección de Tipologías",
      paragraphs: [
        "Un portafolio patrimonial equilibrado debe combinar inmuebles generadores de renta inmediata (departamentos premium o activos comerciales) con proyectos en preventa o terrenos estratégicos que capturen la plusvalía constructiva a mediano plazo.",
        "La clave radica en alinear la liquidez de cada activo con el horizonte de inversión y los objetivos patrimoniales de cada familia o empresa."
      ]
    },
    section3: {
      title: "El Papel Fundamental de la Asesoría Legal",
      paragraphs: [
        "Ninguna rentabilidad proyectada tiene valor si la propiedad no cuenta con un saneamiento registral impecable. Verificar la partida matriz, los títulos archivados en Sunarp y la ausencia de cargas es el primer paso obligatorio de toda inversión inteligente."
      ]
    },
    section4: {
      title: "Pilares para una Inversión Inmobiliaria Exitosa",
      intro: "Factores esenciales que evaluamos en cada análisis:",
      items: [
        "Ubicación consolidada con acceso a servicios e infraestructura vial de primer orden.",
        "Estudio de títulos registrales al 100% libre de gravámenes.",
        "Modelado de flujos de caja conservadores con margen de seguridad ante vacancia.",
        "Estructuración de créditos con apalancamiento a tasas preferenciales.",
        "Acompañamiento profesional desde la búsqueda hasta la gestión del contrato de alquiler."
      ]
    }
  },
  {
    id: "blog-2",
    title: "Checklist Legal Indispensable Antes de Comprar un Inmueble en el Perú",
    category: "SEGURIDAD JURÍDICA",
    date: "28 DE MAYO, 2026",
    readingTime: "5 Minutos",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    summary: "Guía legal práctica elaborada por nuestros especialistas para evitar fraudes, verificar títulos en Sunarp y asegurar un cierre notarial blindado.",
    author: {
      name: "Gisela Salinas",
      role: "Directora de Asesoría Legal & Saneamiento",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      quote: "El saneamiento registral y el rigor notarial son la garantía definitiva de la tranquilidad de tu familia."
    },
    middleImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    section1: {
      title: "Estudio de Títulos de los Últimos 10 Años",
      paragraphs: [
        "Solicitar únicamente la copia literal no es suficiente. Es indispensable solicitar el Certificado Registral Inmobiliario (CRI) y revisar los títulos archivados en Sunarp para rastrear la cadena ininterrumpida de transferencias y confirmar la legitimidad de las firmas precedentes."
      ]
    },
    section2: {
      title: "Verificación de Facultades y Poderes",
      paragraphs: [
        "Si la venta es realizada mediante apoderado o persona jurídica, debe verificarse en el Registro de Personas Jurídicas y Mandatos que las facultades de disposición de bienes inmuebles se encuentren expresas, vigentes y no revocadas."
      ]
    },
    section3: {
      title: "Minuta Notarial con Cláusulas de Protección",
      paragraphs: [
        "El contrato debe incluir cláusulas expresas de evicción y saneamiento, penalidades por mora en la entrega del inmueble y el establecimiento claro del medio de pago bancarizado obligatorio según la Ley de Bancarización."
      ]
    },
    section4: {
      title: "Documentación que Debes Exigir",
      intro: "Revisa siempre estos documentos antes de firmar las arras:",
      items: [
        "Certificado Registral Inmobiliario (CRI) emitido por Sunarp con antigüedad menor a 30 días.",
        "Hoja Resumen (HR) y Predio Urbano (PU) municipal con pagos al día.",
        "Constancia de no adeudo de arbitrios e impuesto predial del año en curso.",
        "Comprobación de independización de cocheras y depósitos si es departamento.",
        "Minuta redactada y visada por abogado colegiado especializado en derecho inmobiliario."
      ]
    }
  },
  {
    id: "blog-3",
    title: "Cómo Optimizar el Financiamiento Hipotecario y Maximizar tu ROE",
    category: "FINANZAS ESTRATÉGICAS",
    date: "12 DE ABRIL, 2026",
    readingTime: "5 Minutos",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
    summary: "Descubre cómo el apalancamiento bancario inteligente puede duplicar el retorno sobre tu capital propio al adquirir propiedades para inversión.",
    author: {
      name: "Rodrigo Salazar",
      role: "Consultor Senior de Finanzas & Bienes Raíces",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      quote: "Una estructura de deuda inteligente convierte una buena inversión en un negocio altamente rentable."
    },
    middleImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    section1: {
      title: "El Poder del Apalancamiento Financiero",
      paragraphs: [
        "Utilizar capital bancario a una tasa de interés menor a la tasa de retorno total del inmueble (renta + plusvalía) permite amplificar el rendimiento de los fondos propios invertidos (Return on Equity - ROE)."
      ]
    },
    section2: {
      title: "Negociación de Tasas y Costo Financiero Total (TCEA)",
      paragraphs: [
        "Comparar ofertas entre diversas entidades bancarias y evaluar seguros asociados (desgravamen e inmueble) permite reducir el costo efectivo anual en más de 150 puntos básicos, lo que representa decenas de miles de dólares en ahorros a lo largo del crédito."
      ]
    },
    section3: {
      title: "Estrategias de Amortización Acelerada",
      paragraphs: [
        "Diseñar cronogramas que permitan abonos directos al capital sin penalidades acelera la cancelación de la deuda y permite reinvertir el flujo liberado en nuevas oportunidades inmobiliarias."
      ]
    },
    section4: {
      title: "Recomendaciones Financieras para Inversionistas",
      intro: "Prácticas recomendadas para optimizar tus créditos:",
      items: [
        "Mantén un score crediticio intachable en Infocorp y centrales de riesgo.",
        "Presenta expedientes con ingresos auditados y balances consolidados.",
        "Opta por créditos en la misma moneda en la que recibirás los ingresos por alquiler.",
        "Negocia exoneraciones de comisiones de evaluación y gastos de estructuración.",
        "Cuenta con la asesoría de GyS Servicios Inmobiliarios para el cierre multibanco."
      ]
    }
  }
];
