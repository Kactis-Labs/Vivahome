# Flujo de Trabajo para Creación de Propuestas de Branding Inmobiliario

Esta guía define el protocolo estandarizado para generar propuestas de marca sobre la plantilla inmobiliaria premium.

---

## 1. Reglas de Git & Ramas
1. **Siempre partir desde `main`**:
   ```bash
   git checkout main
   git checkout -b propuesta/<nombre-inmobiliaria>
   ```
2. Al finalizar la propuesta, compilar (`npm run build`), comitear y pushear la rama a GitHub:
   ```bash
   git add .
   git commit -m "feat: propuesta de branding para <Nombre Inmobiliaria>"
   git push origin propuesta/<nombre-inmobiliaria>
   ```

---

## 2. Identidad Visual & Activos
- **Logotipo Vectorial**: Recrear el logotipo del cliente en SVG en [`src/components/Logo.tsx`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/src/components/Logo.tsx) con soporte para variantes (`light` y `dark`).
- **Favicon**: Crear siempre un favicon vectorial SVG en [`public/favicon.svg`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/public/favicon.svg).
- **Metadatos**: Actualizar `<title>`, `<meta description>` y el favicon en [`index.html`](file:///c:/Users/USUARIO/Desktop/Plantilla%20Inmobiliaria/index.html).
- **Imágenes**: Usar siempre fotografías de alta calidad de propiedades (departamentos, casas, condominios, vistas costeras), nunca capturas de piezas publicitarias como fotos de producto.

---

## 3. Jerarquía Tipográfica & Diseño
- **Fidelidad a la Plantilla**: Mantener los pesos tipográficos originales (`font-normal` en titulares principales y `font-light` en subtítulos). No exagerar con `font-black` o `font-extrabold` salvo en elementos específicos que lo requieran.
- **Hero Section**:
  - **Altura en Móvil**: Debe cubrir el **100% de la pantalla** (`min-h-[100dvh] min-h-screen`).
  - **Lado Derecho en Desktop**: La información complementaria en el lado derecho debe estar posicionada de manera sutil (alineada hacia abajo con `items-end` / `pb-2`) y con una escala moderada para **no robar protagonismo al titular principal de la izquierda**.
  - **Sin Marcos Bounded**: Evitar cajas oscuras pesadas o tarjetas cuadradas encerradas en el hero; mantener una composición abierta, fluida y limpia.
- **Sección de Ofertas / Propiedades (`FeaturedDealsSection.tsx`)**:
  - ⚠️ **REGLA OBLIGATORIA: Fondo siempre claro/luminoso** (`#F8FAFC`, `#FAF8F5` o `#FFFFFF`), **NUNCA fondo oscuro**.
- **Sin Mini Tarjetas Genéricas**: Evitar badges flotantes innecesarios tipo píldora.

---

## 4. Adaptación de Datos (`src/data/realEstateData.ts`)
- Configurar datos según la información del cliente:
  - Nombre oficial, ciudad/zona de operación (ej. Trujillo, Puerto Malabrigo, Lima).
  - Métricas clave (+Años de experiencia, +Proyectos, +Familias/Lotes, 100% Legalidad).
  - Listado de propiedades adaptadas a su mercado.
  - Correos `@inmobiliaria.com` y mensajes de WhatsApp personalizados.

---

## 5. Control de Calidad Pre-Entrega
- Ejecutar `npm run build` y asegurar **0 errores de TypeScript y bundle**.
- Comprobar que el servidor de desarrollo corra limpiamente en `http://localhost:5173`.
- Pushear la rama al repositorio remoto de GitHub (`origin`).
