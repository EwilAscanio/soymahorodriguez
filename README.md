# Soy Maho Rodríguez

Sitio web personal de **Maho Rodríguez** (Fe, Propósito y Transformación): una landing por secciones, un **blog público** y un **panel de administración** para gestionar artículos, categorías y métricas.

## Características

- **Landing por secciones**: inicio, novela, recursos gratuitos, libros, sobre mí y contacto, con navegación por anclas.
- **Blog público**: listado con categorías y paginación, y vista de detalle por artículo (contenido enriquecido).
- **Tracking de vistas**: cada visita a un artículo registra una vista anónima.
- **Panel de administración**: CRUD de artículos y categorías, editor de contenido enriquecido (TipTap) y métricas con gráficas.
- **Autenticación**: inicio de sesión con credenciales y rutas de panel protegidas.
- **Contacto**: formulario vía EmailJS y botón flotante de WhatsApp.

## Stack

- **Next.js 16.4** (App Router, Turbopack)
- **React 19.3**
- **Tailwind CSS v4** y `next/font` (DM Sans, DM Serif Display, Caveat)
- **PostgreSQL** con `pg`
- **NextAuth v5** (credenciales, sesión JWT)
- **TipTap** (editor de contenido enriquecido)
- **Recharts** (gráficas del panel)
- **EmailJS** (formulario de contacto)
- **Lucide** (iconos)

## Requisitos

- Node.js (LTS, 20 o superior) y npm
- Una base de datos PostgreSQL

## Instalación y puesta en marcha

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Crear el archivo de entorno copiando `.env.example` a `.env.local` y completar los valores (ver [Variables de entorno](#variables-de-entorno)).

3. Inicializar la base de datos (crea las tablas y el usuario administrador):

   ```bash
   node scripts/init-blog-db.cjs
   ```

4. (Opcional) Cargar contenido de ejemplo:

   ```bash
   node scripts/seed-blog-content.cjs
   ```

5. Levantar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Abrir [http://localhost:3000](http://localhost:3000).

### Credenciales del administrador

El script `scripts/init-blog-db.cjs` crea un administrador por defecto:

- **Email:** `admin@gmail.com`
- **Contraseña:** `123456`

> **Advertencia:** son credenciales de desarrollo. Cambialas antes de desplegar en producción.

## Variables de entorno

Definidas en `.env.local` (partiendo de `.env.example`):

| Variable | Descripción | Requerida |
| --- | --- | --- |
| `AUTH_SECRET` | Secreto usado por NextAuth para firmar sesiones. | Sí |
| `AUTH_URL` | URL base de la app. En local debe ser `http://localhost:3000`. | Sí |
| `DATABASE_URL` | Cadena de conexión a PostgreSQL (incluye `sslmode=require` en producción). | Sí |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Service ID de EmailJS para el formulario de contacto. | Sí* |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Template ID de EmailJS. | Sí* |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Public Key de EmailJS. | Sí* |
| `PGHOST`, `PGDATABASE`, `PGUSER`, `PGPASSWORD` | Parámetros de PostgreSQL alternativos. | No |

\* Requeridas para que el formulario de contacto funcione. Sin ellas, el resto del sitio sigue operativo.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo (Turbopack). |
| `npm run build` | Compila la aplicación para producción. |
| `npm run start` | Inicia el servidor de producción (tras `build`). |
| `npm run lint` | Ejecuta ESLint. |

Scripts auxiliares en `scripts/`:

| Script | Descripción |
| --- | --- |
| `node scripts/init-blog-db.cjs` | Crea el esquema del blog y el usuario administrador por defecto. |
| `node scripts/seed-blog-content.cjs` | Inserta categorías y artículos de ejemplo. |

## Notas de desarrollo

- Los cambios en `app/globals.css` pueden no recargarse automáticamente por el watcher de Turbopack. Si no ves los estilos aplicados, reiniciá el servidor borrando las carpetas `.next/dev` y `.next/cache` y volvé a ejecutar `npm run dev`.
- Las animaciones de entrada respetan `prefers-reduced-motion`, por lo que se desactivan si el sistema tiene activado "reducir movimiento".
