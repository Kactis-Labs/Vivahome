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
    title: "Penthouse Dúplex con Terraza Panorámica & Vista al Golf",
    category: "Penthouse Dúplex",
    price: "$680,000",
    pricePen: "S/ 2,550,000",
    location: "Av. Aurelio Miró Quesada, San Isidro • Lima",
    beds: 4,
    baths: 4,
    sqft: 310,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1400&auto=format&fit=crop",
    badge: "ESTRENO EXCLUSIVO",
    description: "Imponente penthouse dúplex de estreno con ascensor directo a ambos niveles y vista despejada al Club El Golf. Cuenta con techos altos de 2.95 m, pisos en madera estructurada europea, cocina de autor con isla central de cuarzo y una amplia terraza social con zona de parrilla y piscina privada.",
    propertyType: "Penthouse Dúplex de Lujo",
    totalArea: "310 m²",
    coveredArea: "265 m²",
    parking: "3 Cocheras Paralelas Techadas + 1 Depósito",
    deliveryStatus: "Entrega Inmediata (Estreno)",
    maintenance: "S/ 850 / mes aprox.",
    security: "Seguridad y recepción 24/7, cámaras CCTV y control biométrico",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Christian Kruger",
      role: "Director Comercial & Especialista en Departamentos",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      phone: "+51 987 654 321",
      email: "ventas@kcinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Lima Golf Club", category: "Deportes & Exclusividad", distance: "1 min a pie" },
      { name: "Bosque El Olivar", category: "Parques & Naturaleza", distance: "4 min en auto" },
      { name: "Zona Gastronómica Dasso", category: "Restaurantes & Cafés", distance: "5 min en auto" },
      { name: "Real Plaza Salaverry", category: "Centros Comerciales", distance: "6 min en auto" }
    ]
  },
  {
    id: "prop-2",
    title: "Departamento Flat con Vista Frontal al Mar & Malecón",
    category: "Departamento Flat",
    price: "$520,000",
    pricePen: "S/ 1,950,000",
    location: "Malecón de la Marina, Miraflores • Lima",
    beds: 3,
    baths: 3,
    sqft: 220,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1400&auto=format&fit=crop",
    badge: "VISTA AL MAR",
    description: "Extraordinario departamento flat frente al océano pacífico con mamparas termoacústicas de piso a techo y terraza envolvente. Acabados premium, mármol en baños, cocina abierta equipada con electrodomésticos empotrados y dormitorio principal con walk-in closet y tina hidromasaje.",
    propertyType: "Departamento Flat Frente al Mar",
    totalArea: "220 m²",
    coveredArea: "198 m²",
    parking: "2 Cocheras Paralelas Techadas + 1 Depósito",
    deliveryStatus: "Entrega Inmediata",
    maintenance: "S/ 720 / mes aprox.",
    security: "Recepción de lujo 24/7 y control de accesos automatizado",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Karina Cisneros",
      role: "Asesora Senior de Departamentos Residenciales",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      phone: "+51 981 234 567",
      email: "kcisneros@kcinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Parque del Faro & Malecón", category: "Parques & Caminatas", distance: "1 min a pie" },
      { name: "Larcomar", category: "Centro Comercial & Cine", distance: "5 min en auto" },
      { name: "Club Terrazas", category: "Club Social & Tenis", distance: "4 min en auto" },
      { name: "Av. Pardo & Restaurantes", category: "Gastronomía", distance: "3 min en auto" }
    ]
  },
  {
    id: "prop-3",
    title: "Moderno Dúplex con Jardín Privado & Family Room",
    category: "Departamento Dúplex",
    price: "$445,000",
    pricePen: "S/ 1,670,000",
    location: "Chacarilla del Estanque, Santiago de Surco • Lima",
    beds: 3,
    baths: 3,
    sqft: 245,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop",
    badge: "CON JARDÍN",
    description: "Elegante departamento dúplex en primer piso elevado con jardín privado de 45 m² y terraza techada para reuniones. Diseño contemporáneo en calle cerrada y tranquila, sala comedor de gran amplitud, family room en segundo nivel y acabados de primera en cuarzo y porcelanatos importados.",
    propertyType: "Departamento Dúplex con Jardín",
    totalArea: "245 m²",
    coveredArea: "200 m²",
    parking: "2 Cocheras Lineales Techadas",
    deliveryStatus: "Entrega Inmediata",
    maintenance: "S/ 580 / mes aprox.",
    security: "Garita de control de accesos 24 horas y cámaras perimétricas",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Diego Cárdenas",
      role: "Especialista en Departamentos & Inversión",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      phone: "+51 993 456 789",
      email: "dcardenas@kcinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Centro Comercial Chacarilla", category: "Boutiques & Cafés", distance: "3 min a pie" },
      { name: "Colegio Santa María Marianistas", category: "Colegios", distance: "4 min en auto" },
      { name: "Parque Bella Luz", category: "Áreas Verdes", distance: "2 min a pie" },
      { name: "Supermercado Wong Chacarilla", category: "Compras", distance: "3 min en auto" }
    ]
  },
  {
    id: "prop-4",
    title: "Departamento de Estreno con Balcón & Vista a Parque",
    category: "Departamento Flat",
    price: "$340,000",
    pricePen: "S/ 1,275,000",
    location: "Calle Las Moreras, San Borja • Lima",
    beds: 3,
    baths: 2,
    sqft: 155,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop",
    badge: "FRENTE A PARQUE",
    description: "Departamento flat nuevo de estreno en edificio exclusivo de solo 8 familias frente a parque residencial. Distribución eficiente, balcón terraza hacia áreas verdes, cocina cerrada con tableros de granito, área de lavandería completa y cuarto y baño de servicio.",
    propertyType: "Departamento Flat de Estreno",
    totalArea: "155 m²",
    coveredArea: "155 m²",
    parking: "2 Cocheras Paralelas",
    deliveryStatus: "Estreno (No Paga Alcabala)",
    maintenance: "S/ 480 / mes aprox.",
    security: "Conserjería 24/7 y ascensor directo Schindler",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Karina Cisneros",
      role: "Asesora Senior de Departamentos Residenciales",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      phone: "+51 981 234 567",
      email: "kcisneros@kcinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Parque de la Felicidad & Pentagonito", category: "Deportes al Aire Libre", distance: "3 min a pie" },
      { name: "Real Plaza Primavera", category: "Centros Comerciales", distance: "5 min en auto" },
      { name: "Clínica Delgado & San Borja", category: "Salud", distance: "6 min en auto" },
      { name: "Av. San Borja Sur", category: "Conectividad", distance: "2 min en auto" }
    ]
  },
  {
    id: "prop-5",
    title: "Penthouse de Autor con Rooftop & Piscina Climatizada",
    category: "Penthouse Triplex",
    price: "$890,000",
    pricePen: "S/ 3,340,000",
    location: "Av. Pardo y Aliaga, San Isidro • Lima",
    beds: 4,
    baths: 5,
    sqft: 380,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=1400&auto=format&fit=crop",
    badge: "PREVENTA TOP",
    description: "Obra de arte inmobiliaria en la zona más codiciada de San Isidro. Triplex de autor con rooftop privado, piscina sinfín con vista panorámica a la ciudad, sistema integral de domótica Lutron para climatización y sonido, y acabados en mármol Calacatta y roble importado.",
    propertyType: "Penthouse Triplex de Autor",
    totalArea: "380 m²",
    coveredArea: "310 m²",
    parking: "4 Estacionamientos Paralelos + Depósito Doble",
    deliveryStatus: "Preventa Exclusiva (Entrega Diciembre 2026)",
    maintenance: "S/ 1,100 / mes aprox.",
    security: "Circuito cerrado CCTV, portería blindada y ascensor privado",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Christian Kruger",
      role: "Director Comercial & Especialista en Departamentos",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
      phone: "+51 987 654 321",
      email: "ventas@kcinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Av. Conquistadores", category: "Boutiques & Diseño", distance: "2 min a pie" },
      { name: "Parque El Olivar", category: "Patrimonio & Naturaleza", distance: "3 min a pie" },
      { name: "Hotel Country Club", category: "Hotelería & Salones", distance: "4 min en auto" },
      { name: "Centro Financiero Real", category: "Negocios & Banca", distance: "5 min en auto" }
    ]
  },
  {
    id: "prop-6",
    title: "Departamento Boutique de Estreno en Acantilado de Barranco",
    category: "Departamento Flat",
    price: "$295,000",
    pricePen: "S/ 1,105,000",
    location: "Av. Pedro de Osma, Barranco • Lima",
    beds: 2,
    baths: 2,
    sqft: 110,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400&auto=format&fit=crop",
    badge: "ALTO RENDIMIENTO",
    description: "Departamento boutique de concepto contemporáneo con diseño de autor en el corazón cultural de Barranco. Techos de 2.80 m, cocina integrada con barra de granito, balcón con vista urbana y excelente perfil para inversión o renta temporal de alta rentabilidad.",
    propertyType: "Departamento Flat Boutique",
    totalArea: "110 m²",
    coveredArea: "110 m²",
    parking: "1 Cochera Techada + Depósito",
    deliveryStatus: "Entrega Inmediata",
    maintenance: "S/ 420 / mes",
    security: "Lobby con vigilancia 24/7 y control de accesos digital",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop"
    ],
    floorPlan: "https://images.unsplash.com/photo-1574958269340-fa927304f208?q=80&w=1200&auto=format&fit=crop",
    assignedAgent: {
      name: "Diego Cárdenas",
      role: "Especialista en Departamentos & Inversión",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      phone: "+51 993 456 789",
      email: "dcardenas@kcinmobiliaria.pe"
    },
    nearbyPlaces: [
      { name: "Puente de los Suspiros", category: "Cultura & Turismo", distance: "4 min a pie" },
      { name: "Malecón Paul de Baudiez", category: "Caminatas & Mar", distance: "2 min a pie" },
      { name: "Galería Dédalo & MAC", category: "Arte Contemporáneo", distance: "3 min a pie" },
      { name: "Restaurantes de Autor", category: "Gastronomía", distance: "3 min a pie" }
    ]
  }
];

export const stats: Stat[] = [
  {
    value: "12+",
    label: "Años de Trayectoria",
    description: "Especialistas líderes en comercialización y venta de departamentos en zonas residenciales exclusivas"
  },
  {
    value: "450+",
    label: "Departamentos Vendidos",
    description: "Familias e inversionistas que encontraron su departamento ideal con total seguridad jurídica"
  },
  {
    value: "99%",
    label: "Satisfacción Comprobada",
    description: "Acompañamiento transparente desde la primera visita hasta la entrega de llaves y escrituración"
  }
];

export const services: Service[] = [
  {
    id: "venta-departamentos-estreno",
    title: "Venta de Departamentos de Estreno & Preventa",
    description: "Portafolio curado de proyectos residenciales de estreno y preventa con precios de lanzamiento y cero impuesto de Alcabala.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
    tag: "DEPARTAMENTOS DE ESTRENO",
    intro: "Comprar un departamento de estreno o en preventa requiere respaldo y visión técnica. En KC Inmobiliaria seleccionamos exclusivamente proyectos con constructoras sólidas, fideicomisos bancarios de garantía y distribuciones arquitectónicas de vanguardia.",
    mainGoal: "Garantizar que tu compra de departamento sea una inversión patrimonial segura, con acabados de primera calidad y alta plusvalía garantizada.",
    process: [
      { step: "01", title: "Definición de Requerimientos", desc: "Analizamos tu perfil, zona deseada (San Isidro, Miraflores, Surco, San Borja), tipología (Flat, Dúplex, Penthouse) y presupuesto." },
      { step: "02", title: "Selección Curada de Proyectos", desc: "Te presentamos departamentos seleccionados por metraje, orientación de luz, calidad constructiva y áreas sociales." },
      { step: "03", title: "Visitas Técnicas & Sala de Ventas", desc: "Recorridos guiados al departamento piloto, revisión minuciosa de planos y memoria descriptiva de acabados." },
      { step: "04", title: "Estructuración de Pago & Separación", desc: "Negociación del plan de pagos con la constructora y asesoría para aplicar a tasas preferenciales con el banco promotor." },
      { step: "05", title: "Minuta, Entrega de Llaves & Postventa", desc: "Revisión legal de la minuta de compraventa, acta de entrega de departamento y seguimiento de garantías postventa." }
    ],
    challenges: [
      {
        challenge: "Incertidumbre respecto a fechas de entrega y solvencia de la constructora.",
        solution: "Filtramos únicamente proyectos respaldados por bancos de primera línea con cartas fianza y cuentas fiduciarias."
      },
      {
        challenge: "Dudas sobre la distribución real de espacios al comprar en planos.",
        solution: "Brindamos análisis arquitectónico de planos, renders a escala y visitas a proyectos previos del desarrollador."
      }
    ]
  },
  {
    id: "asesoria-compra-reventa",
    title: "Compra y Venta de Departamentos Exclusivos",
    description: "Comercialización profesional de departamentos de segundo uso en zonas consolidadas con estudio de títulos en Sunarp.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
    tag: "VENTA RESIDENCIAL",
    intro: "Si buscas vender o adquirir un departamento de segundo uso, nuestro equipo garantiza una operación ágil, segura y al valor justo del mercado.",
    mainGoal: "Cerrar transacciones transparentes con estudio de títulos registrales al 100% y compradores bancariamente calificados.",
    process: [
      { step: "01", title: "Evaluación & Estudio de Mercado", desc: "Tasación comercial y comparativa de departamentos similares vendidos recientemente en la zona." },
      { step: "02", title: "Preparación & Fotografía Profesional", desc: "Producción fotográfica de alta resolución, video y asesoría de presentación para resaltar cada ambiente." },
      { step: "03", title: "Difusión en Canales Premium", desc: "Publicación estratégica en plataformas especializadas y promoción directa en nuestra red de compradores activos." },
      { step: "04", title: "Filtro de Compradores & Visitas", desc: "Verificación de capacidad económica antes de coordinar visitas privadas con cita previa." },
      { step: "05", title: "Cierre Notarial & Firma de Escritura", desc: "Redacción de minuta, verificación de pago de tributos (Alcabala/Predial/Arbitrios) y firma notarial." }
    ],
    challenges: [
      {
        challenge: "Departamentos que tardan meses en venderse por precio desfasado.",
        solution: "Fijamos precios estratégicos basados en métricas reales de cierre y demanda activa en el sector."
      },
      {
        challenge: "Trabas registrales por herencias, hipotecas pendientes o independizaciones incompletas.",
        solution: "Nuestro equipo legal sanea la documentación antes de lanzar la propiedad al mercado."
      }
    ]
  },
  {
    id: "tasacion-departamentos",
    title: "Tasación y Valorización de Departamentos",
    description: "Informes periciales técnicos para determinar el valor comercial real por m² de tu departamento.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
    tag: "VALORIZACIÓN TÉCNICA",
    intro: "Conocer el valor real de un departamento es indispensable para fijar un precio competitivo de venta, solicitar financiamiento o partición patrimonial.",
    mainGoal: "Entregar un informe técnico detallado que refleje el valor comercial, estado de conservación y potencial de revalorización.",
    process: [
      { step: "01", title: "Revisión Documentaria", desc: "Análisis de partida registral (Copia Literal), PU/HR municipal y planos del departamento." },
      { step: "02", title: "Inspección Física In Situ", desc: "Verificación de acabados, estado de instalaciones eléctricas, sanitarias y áreas comunes del edificio." },
      { step: "03", title: "Análisis de Edificio y Entorno", desc: "Evaluación de antigüedad, mantenimiento, ascensores, áreas sociales y cercanía a vías principales." },
      { step: "04", title: "Estudio Comparativo por m²", desc: "Cruce de datos con ofertas y ventas registradas en la misma cuadra o sector urbano." },
      { step: "05", title: "Emisión de Informe Pericial", desc: "Entrega del informe con rango de valor comercial recomendado para una venta efectiva." }
    ],
    challenges: [
      {
        challenge: "Sobreestimar o subvaluar el precio por m² de áreas ocupadas vs techadas.",
        solution: "Aplicamos coeficientes técnicos estandarizados para terrazas, balcones y alícuotas de cocheras y depósitos."
      },
      {
        challenge: "Tasaciones bancarias bajas que truncan el crédito del comprador.",
        solution: "Nuestros informes homologados sustentan el valor real ante los peritos de las principales entidades bancarias."
      }
    ]
  },
  {
    id: "creditos-hipotecarios",
    title: "Asesoría en Créditos Hipotecarios & Finanzas",
    description: "Gestión directa con los principales bancos del país para obtener la mejor tasa de interés y cuota inicial para tu departamento.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop",
    tag: "FINANCIAMIENTO INMOBILIARIO",
    intro: "Facilitamos la aprobación de tu crédito hipotecario conectándote con ejecutivos senior de BCP, BBVA, Interbank y Scotiabank.",
    mainGoal: "Asegurar la mejor estructura financiera, tasa preferencial y agilidad en el desembolso para la compra de tu departamento.",
    process: [
      { step: "01", title: "Evaluación del Perfil Financiero", desc: "Cálculo de capacidad de endeudamiento, cuota mensual máxima e historial crediticio." },
      { step: "02", title: "Presentación Multibanco", desc: "Ingreso simultáneo del expediente en las mejores entidades para comparar ofertas y condiciones." },
      { step: "03", title: "Carta de Aprobación & Elección", desc: "Selección de la entidad con menor TEA, costo financiero total y mejores beneficios de amortización." },
      { step: "04", title: "Tasación Bancaria & Estudio Legal", desc: "Coordinación con el banco para la tasación del departamento y revisión del expediente legal." },
      { step: "05", title: "Firma de Escritura & Desembolso", desc: "Acompañamiento en notaría para la firma del contrato de crédito hipotecario y compraventa." }
    ],
    challenges: [
      {
        challenge: "Demoras bancarias que ponen en riesgo el plazo de arras o separación.",
        solution: "Monitoreo diario del expediente con ejecutivos de banca exclusiva para acelerar aprobaciones en menos de 72 horas."
      },
      {
        challenge: "Dificultad para sustentar ingresos de independientes o empresarios.",
        solution: "Armado especializado de carpetas financieras con estados de cuenta, balances y sustentos tributarios sólidos."
      }
    ]
  }
];

export const agents: Agent[] = [
  {
    id: "agent-1",
    name: "Christian Kruger",
    role: "Director Comercial & Especialista en Departamentos",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    phone: "+51 987 654 321",
    email: "ventas@kcinmobiliaria.pe",
    bio: "Christian Kruger es Director Comercial en KC Inmobiliaria, con más de 12 años liderando la comercialización de departamentos de lujo, preventas y proyectos residenciales en los distritos más cotizados de Lima. Su metodología se basa en la honestidad, el análisis exhaustivo de mercado y la satisfacción total de cada comprador.",
    experience: "Ha gestionado con éxito la venta de más de 300 unidades residenciales entre flats, dúplex y penthouses en San Isidro, Miraflores, Surco y San Borja.",
    skills: [
      {
        title: "Especialización en Departamentos",
        description: "Profundo dominio de tipologías, acabados constructivos y normativas de copropiedad en edificios residenciales."
      },
      {
        title: "Negociación Estratégica",
        description: "Enfoque ganar-ganar para asegurar las mejores condiciones comerciales de compraventa."
      },
      {
        title: "Seguridad Legal y Notarial",
        description: "Acompañamiento integral en revisión de partidas en Sunarp, minutas y trámites notariales."
      },
      {
        title: "Asesoría Financiera Hipotecaria",
        description: "Conexión directa con la banca privada para financiamientos ágiles y competitivos."
      }
    ],
    career: [
      {
        period: "2014 — 2017",
        description: "Inició como asesor inmobiliario especializado en venta de departamentos de estreno en Lima moderna."
      },
      {
        period: "2018 — 2021",
        description: "Lideró equipos comerciales para proyectos inmobiliarios boutique en Miraflores y San Isidro."
      },
      {
        period: "2022 — 2024",
        description: "Consolidó alianzas estratégicas con las principales constructoras y notarías de Lima."
      },
      {
        period: "2025 — Presente",
        description: "Director Comercial en KC Inmobiliaria, posicionando la marca como referente en venta de departamentos."
      }
    ]
  },
  {
    id: "agent-2",
    name: "Karina Cisneros",
    role: "Asesora Senior de Departamentos Residenciales",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    phone: "+51 981 234 567",
    email: "kcisneros@kcinmobiliaria.pe",
    bio: "Karina Cisneros es Asesora Senior en KC Inmobiliaria, especializada en departamentos familiares, flats frente a parque y unidades de estreno en Lima Top. Con un enfoque altamente empático y detallista, orienta a cada cliente para encontrar la propiedad que mejor se adapte a su estilo de vida.",
    experience: "Más de 9 años asesorando a familias y profesionales en la selección de su primer o nuevo departamento con los mejores estándares de habitabilidad.",
    skills: [
      {
        title: "Asesoría Familiar Personalizada",
        description: "Identificación precisa de necesidades de espacio, iluminación y servicios cercanos para cada familia."
      },
      {
        title: "Evaluación de Acabados & Calidad",
        description: "Revisión técnica de griferías, porcelanatos, tableros y sistemas termoacústicos."
      },
      {
        title: "Gestión Notarial y Registral",
        description: "Seguimiento riguroso de cada etapa del proceso de escrituración e inscripción en Sunarp."
      },
      {
        title: "Atención Postventa",
        description: "Soporte integral durante la recepción del departamento y coordinación de garantías con la constructora."
      }
    ],
    career: [
      {
        period: "2016 — 2019",
        description: "Asesora comercial en proyectos residenciales en Surco y San Borja."
      },
      {
        period: "2020 — 2022",
        description: "Especialista en comercialización de departamentos frente a parque y de estreno."
      },
      {
        period: "2023 — 2024",
        description: "Reconocida por récord de ventas y satisfacción al cliente en Lima Top."
      },
      {
        period: "2025 — Presente",
        description: "Asesora Senior en KC Inmobiliaria, liderando la atención a compradores de departamentos residenciales."
      }
    ]
  },
  {
    id: "agent-3",
    name: "Diego Cárdenas",
    role: "Especialista en Departamentos & Inversión",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    phone: "+51 993 456 789",
    email: "dcardenas@kcinmobiliaria.pe",
    bio: "Diego Cárdenas es especialista en departamentos para inversión, preventas y análisis financiero de plusvalía en KC Inmobiliaria. Asesora a inversionistas en la selección de unidades de alta rentabilidad por alquiler tradicional y temporal en distritos estratégicos.",
    experience: "Ha asesorado en la colocación de más de 120 departamentos para renta e inversión con excelentes tasas de retorno anual.",
    skills: [
      {
        title: "Cálculo de Rentabilidad (Cap Rate)",
        description: "Modelado financiero de ingresos por alquiler, gastos de mantenimiento e impuestos."
      },
      {
        title: "Oportunidades en Preventa",
        description: "Acceso temprano a precios preferenciales en etapas de planos y excavación."
      },
      {
        title: "Análisis de Demanda de Alquiler",
        description: "Selección de tipologías y ubicaciones con menor tasa de desocupación en el mercado limeño."
      },
      {
        title: "Estructuración de Salida",
        description: "Estrategias de reventa en punto óptimo de plusvalía antes o durante la entrega del proyecto."
      }
    ],
    career: [
      {
        period: "2017 — 2020",
        description: "Analista de mercado inmobiliario residencial enfocado en proyectos multifamiliares."
      },
      {
        period: "2021 — 2023",
        description: "Especialista en comercialización de departamentos tipo estudio y 1-2 dormitorios en Barranco y Miraflores."
      },
      {
        period: "2024",
        description: "Asesor de fondos patrimoniales en compra por volumen de departamentos en preventa."
      },
      {
        period: "2025 — Presente",
        description: "Especialista de Inversiones en KC Inmobiliaria, asesorando compras estratégicas de departamentos."
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "test-1",
    name: "Gonzalo & Mariana Villalobos",
    role: "Compradores en San Isidro",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Comprar nuestro penthouse con KC Inmobiliaria fue una experiencia impecable. Nos guiaron en cada paso, desde la visita hasta la firma en notaría con total transparencia."
  },
  {
    id: "test-2",
    name: "Patricia De La Borda",
    role: "Propietaria en Miraflores",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Buscaba un departamento con vista al mar y acabados de primera. El equipo de KC Inmobiliaria entendió exactamente lo que necesitaba y negoció el mejor precio."
  },
  {
    id: "test-3",
    name: "Renzo Valdivia",
    role: "Inversionista Inmobiliario - Surco",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "He comprado 2 departamentos en preventa con la asesoría de Diego Cárdenas. La rentabilidad y la plusvalía han superado mis expectativas. 100% recomendados."
  },
  {
    id: "test-4",
    name: "Carla Montesinos",
    role: "Compradora en San Borja",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "Encontramos el departamento frente a parque perfecto para nuestros hijos. Nos ayudaron a gestionar el crédito hipotecario con una tasa preferencial muy rápido."
  },
  {
    id: "test-5",
    name: "Mauricio Benza",
    role: "Empresario - Lima",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "KC Inmobiliaria destaca por su seriedad, conocimiento del mercado de departamentos y trato cordial. Da gusto trabajar con profesionales de este nivel."
  },
  {
    id: "test-6",
    name: "Lucía Arámbulo",
    role: "Diseñadora de Interiores - Barranco",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    comment: "El departamento boutique que adquirí en Barranco tiene una arquitectura fantástica. El proceso de entrega fue puntual y con todos los detalles acordados."
  }
];

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Cómo programar una visita a un departamento de su portafolio?",
    answer: "Puedes agendar una visita guiada escribiéndonos directamente a nuestro WhatsApp oficial (+51 987 654 321) o completando el formulario de contacto de la propiedad. Coordinamos visitas privadas los 7 días de la semana."
  },
  {
    id: "faq-2",
    question: "¿Qué beneficios tiene comprar un departamento de estreno versus uno de segundo uso?",
    answer: "Los departamentos de estreno no pagan el impuesto de Alcabala (ahorro directo del 3% sobre el valor del inmueble), cuentan con acabados nuevos bajo garantía de la constructora y tienen mayor vida útil con menores costos de mantenimiento inicial."
  },
  {
    id: "faq-3",
    question: "¿Brindan asesoría para calificar y tramitar mi crédito hipotecario?",
    answer: "Sí, trabajamos directamente con ejecutivos hipotecarios de BCP, BBVA, Interbank y Scotiabank para ayudarte a conseguir la aprobación de tu crédito con tasas competitivas y la estructura de pago que más te convenga."
  },
  {
    id: "faq-4",
    question: "¿Qué documentos revisan para garantizar la seguridad legal del departamento?",
    answer: "Efectuamos un estudio de títulos completo en Sunarp (Copia Literal, CRI - Certificado Registral Inmobiliario), verificamos que no existan gravámenes, embargos o hipotecas pendientes, y revisamos que los pagos de impuesto predial y arbitrios estén al día en el municipio correspondiente."
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Guía Completa para Comprar tu Primer Departamento en Lima",
    category: "GUÍA DE COMPRA",
    date: "12 DE MAYO, 2026",
    readingTime: "5 Minutos",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    summary: "Aprende los factores fundamentales para elegir tu departamento: ubicación, orientación solar, presupuesto real, evaluación del edificio y seguridad jurídica.",
    author: {
      name: "Christian Kruger",
      role: "Director Comercial & Especialista en Departamentos",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop",
      quote: "Comprar un departamento es una decisión trascendental. La clave está en asesorarse con información clara y transparente."
    },
    middleImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    section1: {
      title: "Define tus Necesidades de Espacio y Ubicación",
      paragraphs: [
        "Antes de comenzar las visitas, establece con claridad tus prioridades: número de dormitorios, necesidad de cochera, cercanía a tu centro de trabajo y acceso a parques o áreas comerciales.",
        "En distritos como San Isidro, Miraflores, Surco o San Borja, la cercanía a vías principales y la tranquilidad de calles secundarias ofrecen un equilibrio ideal de plusvalía y confort de vida."
      ]
    },
    section2: {
      title: "Calcula el Presupuesto Total y Costos de Cierre",
      paragraphs: [
        "Además del precio del departamento, debes considerar la cuota inicial (usualmente entre 10% y 20%), los gastos notariales, los derechos de inscripción en Sunarp y, si es reventa, el impuesto de Alcabala (los departamentos de estreno están inafectos).",
        "Tener una carta de aprobación o precalificación bancaria te dará poder de negociación frente al vendedor o constructora."
      ]
    },
    section3: {
      title: "Evalúa las Áreas Comunes y el Mantenimiento del Edificio",
      paragraphs: [
        "Revisa los servicios que ofrece el edificio: ascensor, recepción 24/7, sistema de cámaras, áreas comunes como terraza o coworking, y consulta el costo estimado del mantenimiento mensual.",
        "Un edificio bien administrado con junta de propietarios organizada protege y eleva el valor de tu departamento a lo largo del tiempo."
      ]
    },
    section4: {
      title: "Checklist Indispensable antes de Firmar",
      intro: "Aspectos clave que en KC Inmobiliaria verificamos antes de cualquier compra:",
      items: [
        "Estudio de títulos en Sunarp (verificación de cargas y gravámenes).",
        "Constancia de no adeudo de arbitrios y predial en la municipalidad.",
        "Revisión minuciosa de la memoria descriptiva de acabados.",
        "Comprobación de cocheras y depósitos independizados en partida registral.",
        "Acompañamiento legal en la redacción y firma de la minuta en notaría."
      ]
    }
  },
  {
    id: "blog-2",
    title: "Flat vs Dúplex vs Penthouse: ¿Cuál es el Departamento Ideal para Ti?",
    category: "CONSEJOS RESIDENCIALES",
    date: "24 DE ABRIL, 2026",
    readingTime: "4 Minutos",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    summary: "Conoce las ventajas de cada tipología de departamento y descubre cuál se adapta mejor a la dinámica de tu familia o a tu plan de inversión.",
    author: {
      name: "Karina Cisneros",
      role: "Asesora Senior de Departamentos Residenciales",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
      quote: "Cada tipología responde a un estilo de vida diferente; elegir la correcta asegura confort y bienestar diario."
    },
    middleImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop",
    section1: {
      title: "Departamento Flat: Comodidad y Accesibilidad en un Solo Nivel",
      paragraphs: [
        "Los flats son la opción más versátil y demandada del mercado. Al tener todos los ambientes en una sola planta, facilitan la convivencia diaria, la limpieza y son ideales para familias con niños pequeños o adultos mayores."
      ]
    },
    section2: {
      title: "Departamento Dúplex: Privacidad y Separación de Ambientes",
      paragraphs: [
        "El dúplex permite independizar claramente el área social (sala, comedor, cocina, terraza) en un piso del área privada de descanso (dormitorios, family room) en otro nivel, brindando sensación de casa independiente."
      ]
    },
    section3: {
      title: "Penthouse: Exclusividad, Terrazas y Vistas Panorámicas",
      paragraphs: [
        "Ubicados en los pisos más altos del edificio, los penthouses ofrecen amplitud excepcional, terrazas privadas con zona BBQ o jacuzzi y las mejores vistas panorámicas de la ciudad."
      ]
    },
    section4: {
      title: "Comparativa Rápida para tu Elección",
      intro: "Claves para decidir la mejor opción:",
      items: [
        "Flat: Máxima practicidad, menor costo de mantenimiento, alta demanda de alquiler.",
        "Dúplex: Mayor sensación de amplitud y privacidad entre ambientes.",
        "Penthouse: Exclusividad, terrazas al aire libre y máxima revalorización.",
        "En KC Inmobiliaria contamos con opciones de las tres tipologías en las mejores zonas."
      ]
    }
  },
  {
    id: "blog-3",
    title: "Por Qué Invertir en Departamentos en Preventa es una Gran Estrategia",
    category: "INVERSIÓN PATRIMONIAL",
    date: "10 DE MARZO, 2026",
    readingTime: "6 Minutos",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1200&auto=format&fit=crop",
    summary: "Descubre cómo generar una plusvalía de entre 12% y 20% comprando departamentos en planos o en fases tempranas de construcción.",
    author: {
      name: "Diego Cárdenas",
      role: "Especialista en Departamentos & Inversión",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop",
      quote: "La preventa inmobiliaria permite capturar la plusvalía constructiva con esquemas de pago flexibles y seguros."
    },
    middleImage: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=1000&auto=format&fit=crop",
    section1: {
      title: "Ganancia de Capital por Plusvalía de Obra",
      paragraphs: [
        "El precio del metro cuadrado en preventa es significativamente menor al precio de entrega final. A medida que avanza la construcción, el valor del inmueble se incrementa automáticamente generando una ganancia de capital sólida."
      ]
    },
    section2: {
      title: "Flexibilidad en el Pago de la Cuota Inicial",
      paragraphs: [
        "Comprar en preventa te permite fraccionar el pago de la cuota inicial en cuotas mensuales durante los 12 a 24 meses que dura la obra, sin necesidad de desembolsar todo el capital de inmediato."
      ]
    },
    section3: {
      title: "Personalización y Elección de los Mejores Departamentos",
      paragraphs: [
        "Al entrar en fases iniciales, puedes elegir el piso de tu preferencia, la orientación hacia parque o calle, la cochera mejor ubicada e incluso solicitar pequeñas personalizaciones en los acabados."
      ]
    },
    section4: {
      title: "Recomendaciones de Seguridad para Comprar en Preventa",
      intro: "Garantías que siempre verificamos en KC Inmobiliaria:",
      items: [
        "Proyecto respaldado por banco con cuenta fiduciaria.",
        "Licencia de edificación municipal aprobada.",
        "Contrato con cronograma de obra y cláusula de penalidades por demora.",
        "Asesoría técnica para seleccionar las tipologías con mayor demanda de alquiler posterior."
      ]
    }
  }
];
