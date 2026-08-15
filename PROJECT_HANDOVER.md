# 🏡 VivaHome Inmobiliaria — Project Handover & Context Guide

> **Documento de transferencia para la siguiente sesión de desarrollo.**  
> Este archivo resume la arquitectura, decisiones de diseño, rutas activas, estado actual del código y lineamientos del proyecto para continuar sin fricción.

---

## 📌 1. Identidad de Marca y Diseño
- **Nombre de Marca**: **VivaHome** (o *VivaHome Inmobiliaria S.A.C.*).
- **Paleta de Colores (Esmeralda Residencial & Modo Claro Sofisticado)**:
  - **Fondos Oscuros / Primario**: Verde Esmeralda Pizarra / Carbón (`#0B1E17` / `#0F241D` / `#081611`).
  - **Acento / CTAs / Badges**: Verde Esmeralda Vivo (`#059669` / `#10B981`) con hover en `#047857`.
  - **Tarjetas Oscuras Glassmorphic**: `bg-[#18181B]` con borde translúcido `border-white/10` (sin bordes verdes estridentes).
  - **Fondos Claros**: Blanco marfil y gris ultra limpio (`#FFFFFF` / `#F8FAFC`).
  - **Tipografía**: *Plus Jakarta Sans* (Google Fonts) en `index.html`.
- **Localización**: Textos y terminología adaptados al mercado inmobiliario de Perú (Lima Top: San Isidro, Miraflores, Surco, balnearios de Asia, registro notarial en Sunarp, impuesto de Alcabala, precios duales en USD y Soles PEN).
- **Crédito de Autor en Footer**: Pie de página al final con *"Desarrollado por [Kacti Labs](https://kactilabs.vercel.app/)"*.

---

## 🛠️ 2. Stack Tecnológico
- **Framework**: React 19 + TypeScript + Vite 8.
- **Estilos**: Tailwind CSS v4 (`@tailwindcss/vite`).
- **Enrutamiento**: `react-router-dom` v7 con componente [`ScrollToTop.tsx`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/src/components/ScrollToTop.tsx) (con soporte para hash anchors `#agents`, `#deals`, etc.).
- **Animaciones**: `framer-motion` (transiciones de página, reveals en scroll `whileInView`, acordeón con `AnimatePresence` y micro-hovers).
- **Íconos**: `lucide-react`.

---

## 🗺️ 3. Rutas y Páginas Implementadas

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | [`HomePage.tsx`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/src/pages/HomePage.tsx) | Página principal con Hero typewriter, Oportunidades oscuras, Nosotros, Servicios, Equipo, Testimonios, FAQ con AnimatePresence, Blog y CTA banner. |
| `/nosotros` | [`AboutPage.tsx`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/src/pages/AboutPage.tsx) | Hero panorámico, manifiesto editorial, grid de 4 métricas y bloques zig-zag de excelencia y futuro. |
| `/servicios` | [`ServicesPage.tsx`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/src/pages/ServicesPage.tsx) | Catálogo 3x2 con tarjetas de fotografía e icono verde flotante en esquina inferior derecha. |
| `/servicios/:id` | [`ServiceDetailPage.tsx`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/src/pages/ServiceDetailPage.tsx) | Vista individual: Columna izquierda con foto y botón WhatsApp; Columna derecha con Intro, Main Goal, Proceso numerado (1-5), Retos y Soluciones. |
| `/equipo` | [`TeamPage.tsx`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/src/pages/TeamPage.tsx) | Catálogo completo de brokers y asesores con testimonios y enlaces a perfiles. |
| `/equipo/:id` | [`AgentDetailPage.tsx`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/src/pages/AgentDetailPage.tsx) | Perfil del broker: Columna izquierda foto vertical HD; Columna derecha bio, My Experience, My Skills (2x2), My Career (2x2 timeline) y botones de contacto (WhatsApp, Correo, Teléfono, LinkedIn). |
| `/contacto` | [`ContactPage.tsx`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/src/pages/ContactPage.tsx) | Subpágina con tarjeta corporativa de sede central en San Isidro y formulario inmobiliario completo en 2 columnas con confirmación. |
| `/blog/:id` | [`BlogPostPage.tsx`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/src/pages/BlogPostPage.tsx) | Lectura editorial de artículo: Sidebar izquierdo con metadatos (fecha, tag, tiempo de lectura) y tarjeta del autor; Columna derecha con secciones, foto intermedia y lista numerada. |
| `/propiedades/:id` | [`PropertyDetailPage.tsx`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/src/pages/PropertyDetailPage.tsx) | Ficha de inmueble: galería de fotos, specs (m², dorms, baños), mapa, planos, sidebar sticky con WhatsApp directo y formulario de visita. |

---

## 🗄️ 4. Base de Datos Centralizada
Toda la información se consume de manera tipada y reactiva desde:  
👉 [`src/data/realEstateData.ts`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/src/data/realEstateData.ts)

- `featuredProperties`: Inmuebles destacados en Lima y playas con precios en USD y PEN.
- `services`: 6 servicios con intro, proceso paso a paso, retos y soluciones.
- `agents`: 3 perfiles de brokers con biografías, habilidades (*My Skills*) y trayectoria (*My Career*).
- `testimonials`: Reseñas de compradores e inversionistas reales.
- `faqs`: Preguntas notariales, legales y financieras de compraventa en Perú.
- `blogPosts`: Artículos completos con estructura editorial y tiempo de lectura.

---

## 📱 5. Optimizaciones Responsivas y Animaciones Aplicadas
1. **Responsive Proportions**:
   - Imágenes de tarjetas y banners usan escalas adaptables (`aspect-[16/11]`, `h-[240px] sm:h-[360px] lg:h-[480px]`).
   - Paddings reducidos en móvil (`p-4` / `p-5`) para evitar tarjetas gigantes o scroll excesivo.
   - En [`TestimonialsSection.tsx`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/src/components/TestimonialsSection.tsx) se muestran 3 testimonios por defecto en móvil con botón desplegable *"Ver más testimonios"*.
   - En [`FaqSection.tsx`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/src/components/FaqSection.tsx) se ocultó el banner fotográfico secundario en móvil para priorizar el acordeón.
2. **Capa Framer Motion**:
   - Transiciones de entrada de página (`initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}`).
   - Animaciones escalonadas (*staggered*) en Hero Banners (breadcrumbs primero, titular después).
   - Acordeón de FAQ con `AnimatePresence` y altura interpolada (`height: 'auto'`).
   - Micro-interacciones táctiles `whileTap={{ scale: 0.98 }}` y `whileHover={{ scale: 1.02 }}`.

---

## 🚦 6. Estado del Entorno & Comandos
- **Compilación de Producción**: Probada con `npm run build` (0 errores de TypeScript, tiempo ~410ms).
- **Servidor Local**: `npm run dev` en `http://localhost:5173`.
- **Estructura de Carpetas**:
  - `src/components/`: Componentes modulares y reutilizables.
  - `src/pages/`: Vistas completas asociadas a las rutas.
  - `src/data/`: Tipos y datos maestros.

---

## ☁️ 7. Guía de Despliegue y Hosting (Vercel & Cloudflare Pages)

El proyecto está 100% preconfigurado para subirse a las dos plataformas principales sin errores de rutas (*404 al recargar páginas internas*):

1. **Vercel** (Ideal para demos, propuestas y pruebas rápidas):
   - **Configuración activa**: [`vercel.json`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/vercel.json) con regla de `rewrites` hacia `/index.html`.
   - **Framework Preset**: Vite.
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

2. **Cloudflare Pages** (Recomendado para webs finales de clientes en producción):
   - **Configuración activa**: [`public/_redirects`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/public/_redirects) (`/* /index.html 200`).
   - **Framework Preset**: Vite.
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
   - **Ventajas**: Ancho de banda ilimitado, menor latencia en Perú/Sudamérica y 100% compatible con uso comercial gratuito.

