# Guía y Flujo de Trabajo para Propuestas de Branding Inmobiliario

Este documento resume las reglas y el procedimiento estandarizado para generar propuestas de marca rápidas, limpias y efectivas para los clientes sobre la plantilla inmobiliaria.

---

## 📋 Pasos para cada nueva propuesta

```bash
# 1. Siempre iniciar desde la rama principal
git checkout main
git pull origin main

# 2. Crear la rama dedicada para la inmobiliaria
git checkout -b propuesta/<nombre-inmobiliaria>
```

### 1. Activos de Marca
- **Logo SVG**: Crear el componente en `src/components/Logo.tsx` vectorizando el logo con soporte para `variant="light"` y `variant="dark"`.
- **Favicon SVG**: Recrear el favicon en `public/favicon.svg`.
- **Meta Tags**: Actualizar `<title>`, `<meta description>` y favicon en `index.html`.

### 2. Datos y Copy (`src/data/realEstateData.ts`)
- Adaptar las métricas de la inmobiliaria (años de experiencia, inmuebles/lotes, clientes).
- Adaptar las propiedades/terrenos con la ubicación real (ej. Trujillo, Lima, Puerto Malabrigo).
- Configurar emails corporativos y enlaces de WhatsApp con mensajes personalizados.

### 3. Reglas de Diseño y Estructura
- **Fidelidad a la Plantilla**: Mantener las jerarquías tipográficas originales (`font-normal` en titulares, `font-light` en subtítulos) aplicando los colores del cliente.
- **Hero Section**:
  - `min-h-[100dvh] min-h-screen` para cubrir el 100% de la pantalla en móvil.
  - La info complementaria en desktop se ubica más abajo (`items-end`, `pb-2`) con escala sutil para no competir con el titular principal.
  - Sin marcos ni cajas encerradas pesadas; diseño abierto y fluido.
- **Sección de Ofertas (`FeaturedDealsSection.tsx`)**:
  - **FONDO CLARO SIEMPRE** (`#F8FAFC`, `#FAF8F5`, `#FFFFFF`).
- **Imágenes**: Fotografías de alta calidad de propiedades/paisajes, nunca capturas de piezas gráficas.

### 4. Compilación y Publicación
```bash
npm run build
git add .
git commit -m "feat: propuesta de branding para <Nombre Inmobiliaria>"
git push origin propuesta/<nombre-inmobiliaria>
```
