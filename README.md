# FinanTech - Showcase de Productos Financieros

Este proyecto es una aplicación web desarrollada con Next.js para mostrar diferentes productos financieros (cuentas, tarjetas, fondos, seguros) de una manera clara y organizada. Permite a los usuarios ver detalles de los productos y filtrarlos por categoría.

## Tecnologías Utilizadas

*   **Framework:** [Next.js](https://nextjs.org/) (v15+) con App Router
*   **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
*   **Estilos:**
    *   [Tailwind CSS](https://tailwindcss.com/) (v4) para layout general, utilidades y diseño responsive.
    *   [Styled Components](https://styled-components.com/) para componentes específicos y encapsulados (ej. Button, FilterTabs).
*   **UI:** Componentes React funcionales (`.tsx`).
*   **Visualización de Datos:** [Recharts](https://recharts.org/) (para gráficos de rendimiento).
*   **Fuente:** Roboto (integrada con `next/font/google`).
*   **Linting/Formatting:** ESLint (configuración de Next.js).

## Empezando

1.  **Clonar el repositorio (si aplica):**
    ```bash
    git clone <url-del-repositorio>
    cd test-bprosys
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    # o yarn install o pnpm install
    ```
3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    # o yarn dev o pnpm dev
    ```
    Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

4.  **Construir para producción:**
    ```bash
    npm run build
    ```
5.  **Iniciar en modo producción:**
    ```bash
    npm run start
    ```

## Decisiones de Diseño y Arquitectura

A continuación se responden algunas preguntas clave sobre el diseño y la arquitectura de este proyecto:

### ¿Qué criterios seguiste para diseñar la UI de productos financieros?

El diseño de la interfaz de usuario (UI) se centró en los siguientes criterios, buscando crear una experiencia adecuada para productos financieros:

1.  **Claridad y Legibilidad:** Uso de tipografía limpia (Roboto) y suficiente espacio en blanco para que la información sea fácil de leer y comprender. Jerarquía visual clara para destacar nombres de productos, tasas y categorías.
2.  **Consistencia:** Mantener un diseño coherente en todos los componentes (botones, tarjetas, filtros) para que la interfaz sea predecible y fácil de navegar. Uso de un sistema de diseño implícito a través de Tailwind y componentes reutilizables.
3.  **Confianza y Profesionalismo:** Paleta de colores sobria pero con acentos distintivos (chips de categoría) para transmitir seriedad y confianza, aspectos cruciales en el sector financiero. Diseño limpio y moderno.
4.  **Accesibilidad:** Aunque no implementado exhaustivamente, se consideraron aspectos básicos como contraste de color (ej. ajuste en los chips) y uso de etiquetas `aria-label` para mejorar la accesibilidad. En un proyecto real, se seguirían las pautas WCAG.
5.  **Escaneabilidad:** Diseño basado en tarjetas (`ProductCard`) que permite a los usuarios escanear rápidamente los productos disponibles y obtener información clave (categoría, tipo, tasa/riesgo) antes de profundizar.
6.  **Feedback Visual:** Uso de transiciones y estados `:hover` y `:focus` en elementos interactivos (botones, enlaces, tabs) para indicar claramente la interactividad.

### ¿Cómo decidiste cuándo usar Tailwind y cuándo Styled Components?

La elección entre Tailwind CSS y Styled Components se basó en aprovechar las fortalezas de cada uno para diferentes propósitos:

*   **Tailwind CSS:** Se utilizó principalmente para:
    *   **Layout General y Estructura:** Definir la disposición de la página (contenedores, grids), márgenes, paddings.
    *   **Estilos Utilitarios Rápidos:** Aplicar estilos comunes directamente en el JSX (colores de texto, fondos, bordes, sombras, tipografía base) agilizando el desarrollo inicial.
    *   **Diseño Responsivo:** Utilizar las utilidades responsive de Tailwind (`md:`, `lg:`) para adaptar la interfaz a diferentes tamaños de pantalla de forma declarativa.
    *   **Consistencia Global:** Mantener una base de estilos coherente definida en `tailwind.config.ts`.

*   **Styled Components:** Se reservó para:
    *   **Componentes Reutilizables Complejos:** Crear componentes como `Button` y `FilterTabs` donde la lógica de estilos es más compleja, depende de props (variantes, tamaño, estado activo) o requiere encapsulación fuerte.
    *   **Estilos Dinámicos Basados en Props:** Facilitar la aplicación de estilos condicionales basados en el estado o las propiedades del componente (ej. el estado `$isActive` en `TabButton`).
    *   **Tematización (Potencial):** Aunque no se implementó un tema complejo, Styled Components facilita la creación de sistemas de temas que pueden ser útiles en aplicaciones más grandes.
    *   **Evitar Conflictos de Clases:** El scoping automático de Styled Components previene colisiones de nombres de clases CSS.

Esta estrategia híbrida busca combinar la velocidad de desarrollo de Tailwind con la potencia y encapsulación de CSS-in-JS para componentes específicos.

### ¿Qué harías para escalar este proyecto en una aplicación real de banca digital?

Para escalar este prototipo a una aplicación de banca digital real, se necesitarían varias mejoras y adiciones significativas:

1.  **Backend Robusto y Seguro:**
    *   Desarrollar APIs seguras (RESTful o GraphQL) para manejar datos de usuarios, cuentas, transacciones, etc.
    *   Implementar bases de datos escalables y seguras (ej. PostgreSQL, MongoDB Atlas).
    *   Asegurar la comunicación con cifrado (HTTPS/TLS).
2.  **Autenticación y Autorización:**
    *   Implementar un sistema de autenticación seguro (ej. OAuth 2.0, OpenID Connect, JWT) con Multi-Factor Authentication (MFA).
    *   Gestionar roles y permisos de usuario de forma granular.
3.  **Gestión de Estado Avanzada:**
    *   Utilizar una librería de gestión de estado global como Redux Toolkit, Zustand o Jotai para manejar datos complejos de la aplicación y el estado del usuario de forma eficiente.
4.  **Seguridad:**
    *   Implementar medidas contra ataques comunes (XSS, CSRF, SQL Injection).
    *   Cumplir con regulaciones financieras (ej. PCI DSS, GDPR, normativas locales).
    *   Realizar auditorías de seguridad periódicas.
    *   Encriptación de datos sensibles en reposo y en tránsito.
5.  **Pruebas Exhaustivas:**
    *   Implementar pruebas unitarias (Jest, React Testing Library), de integración y End-to-End (Cypress, Playwright).
    *   Establecer pipelines de Integración Continua y Despliegue Continuo (CI/CD) con GitHub Actions, GitLab CI, Jenkins.
6.  **Arquitectura Escalable:**
    *   Considerar arquitecturas como microservicios o micro-frontends si la aplicación crece mucho en complejidad.
    *   Optimizar el rendimiento del frontend (code splitting, lazy loading, optimización de imágenes con Next/Image).
7.  **Accesibilidad (WCAG):**
    *   Asegurar el cumplimiento de los estándares de accesibilidad web (WCAG 2.1 AA o AAA).
8.  **Internacionalización (i18n) y Localización (l10n):**
    *   Preparar la aplicación para múltiples idiomas y formatos regionales.
9.  **Manejo de Errores y Logging:**
    *   Implementar un sistema robusto de manejo de errores y logging centralizado.

### ¿Qué herramientas usarías para mejorar el rendimiento y monitoreo en producción?

Para asegurar un buen rendimiento y poder monitorear la aplicación en un entorno de producción, utilizaría una combinación de las siguientes herramientas:

1.  **Análisis de Rendimiento Frontend:**
    *   **Lighthouse / Google PageSpeed Insights:** Para auditorías periódicas del rendimiento, accesibilidad, PWA y SEO.
    *   **Next.js Analytics:** Si se despliega en Vercel, proporciona métricas de rendimiento del mundo real (Core Web Vitals).
    *   **Webpack Bundle Analyzer (`@next/bundle-analyzer`):** Para visualizar el tamaño de los bundles de JavaScript e identificar oportunidades de optimización (code splitting).
    *   **React DevTools Profiler:** Para identificar cuellos de botella en el renderizado de componentes React.
2.  **Monitoreo de Errores y Aplicaciones (APM):**
    *   **Sentry:** Excelente para el seguimiento de errores en tiempo real tanto en el frontend como en el backend, con contexto detallado.
    *   **Datadog / New Relic:** Soluciones APM más completas que ofrecen seguimiento de errores, monitoreo de rendimiento, logs y métricas de infraestructura.
3.  **Logging:**
    *   **Pino / Winston:** Librerías de logging eficientes para el backend (Node.js).
    *   **Servicios de Logging Centralizado:** Como Datadog Logs, Logtail (Better Stack), o el stack ELK (Elasticsearch, Logstash, Kibana) para agregar y analizar logs de toda la aplicación.
4.  **Monitoreo de Infraestructura (si aplica):**
    *   Herramientas del proveedor cloud (AWS CloudWatch, Google Cloud Monitoring, Azure Monitor).
    *   Datadog, Prometheus + Grafana para monitorear métricas del servidor, base de datos, etc.
5.  **Real User Monitoring (RUM):**
    *   Herramientas como Sentry, Datadog RUM, o LogRocket pueden capturar datos de rendimiento y errores directamente desde las sesiones de los usuarios reales, ofreciendo una visión más precisa de la experiencia del usuario.
6.  **Optimización de Imágenes:**
    *   Utilizar el componente `next/image` de forma consistente para la optimización automática de imágenes (tamaño, formato, lazy loading).
7.  **Caching:**
    *   Aprovechar las capacidades de caching de Next.js (ISR, SSG, caching de datos) y configurar adecuadamente las cabeceras HTTP Cache-Control. Usar un CDN (como el de Vercel o Cloudflare).

La elección específica de herramientas dependerá del presupuesto, la infraestructura existente y las necesidades concretas del equipo y la aplicación.
