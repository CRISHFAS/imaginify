<h3 align="center">Una plataforma SaaS de IA</h3>

## 📋 <a name="table">Tabla de contenido</a>

1. 🤖 [Introducción](#introducción)
2. ⚙️ [Pila Tecnológica](#pila-tecnológica)
3. 🔋 [Características](#características)
4. 🤸 [Inicio Rápido](#inicio-rápido)

## <a name="introducción">🤖 Introducción</a>

Crea una plataforma SaaS impulsada por IA especializada en procesamiento avanzado de imágenes. Integra un sistema de pagos seguro, funcionalidades sólidas de búsqueda de imágenes y una amplia gama de herramientas basadas en inteligencia artificial, como restauración de imágenes, recoloreo, eliminación de objetos, relleno generativo y eliminación de fondos. Este proyecto puede servir tanto como una guía práctica para desarrollar tu próxima herramienta de imágenes con IA, como una valiosa incorporación a tu portafolio profesional. 

## <a name="pila-tecnológica">⚙️ Pila Tecnológica</a>

- Next.js
- TypeScript
- MongoDB
- Clerk
- Cloudinary
- Stripe
- Shadcn
- TailwindCSS

## <a name="características">🔋 Características</a>

👉 **Autenticación y Autorización**  
Asegura el acceso de los usuarios mediante registro, inicio de sesión y protección de rutas.

👉 **Galería de Imágenes de la Comunidad**  
Explora transformaciones hechas por otros usuarios con una navegación sencilla y paginación.

👉 **Búsqueda Avanzada de Imágenes**  
Encuentra imágenes rápidamente por contenido u objetos presentes en ellas.

👉 **Restauración de Imágenes**  
Recupera imágenes antiguas o dañadas sin esfuerzo.

👉 **Recoloreo de Imágenes**  
Personaliza imágenes cambiando los colores de los objetos fácilmente.

👉 **Relleno Generativo**  
Rellena áreas faltantes en las imágenes de forma natural.

👉 **Eliminación de Objetos**  
Limpia imágenes eliminando objetos no deseados con precisión.

👉 **Eliminación de Fondos**  
Extrae objetos del fondo de manera rápida y sencilla.

👉 **Descarga de Imágenes Transformadas**  
Guarda y comparte imágenes modificadas por IA con comodidad.

👉 **Detalles de Transformaciones**  
Consulta información detallada sobre cada imagen transformada.

👉 **Gestión de Transformaciones**  
Control total para eliminar o actualizar transformaciones.

👉 **Sistema de Créditos**  
Gana o compra créditos para realizar transformaciones de imágenes.

👉 **Página de Perfil**  
Accede a tus imágenes transformadas y consulta tu saldo de créditos.

👉 **Compra de Créditos**  
Compra créditos de forma segura a través de Stripe para uso continuo.

👉 **UI/UX Responsiva**  
Interfaz intuitiva y adaptable para una experiencia fluida en todos los dispositivos.

💡 *Y mucho más, incluyendo arquitectura del código y reutilización eficiente de componentes.*


## <a name="inicio-rápido">🤸 Inicio Rápido</a>

Sigue estos pasos para poner en marcha el proyecto en tu entorno local.

### ✅ Prerrequisitos

Asegúrate de tener instalados los siguientes elementos en tu máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Clonar el Repositorio**

```bash
git clone git@github.com:CRISHFAS/imaginify.git
cd imaginify
```

**Instalación**

Instala las dependencias del proyecto utilizando `npm`:

```bash
npm install
```

⚙️ **Configuración de Variables de Entorno**

Crea un nuevo archivo llamado `.env.local` en la raíz del proyecto y agrega el siguiente contenido:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Reemplaza los valores de ejemplo con tus credenciales reales correspondientes. Puedes obtener estas credenciales creando una cuenta en los siguientes servicios:
 [Clerk](https://clerk.com/), [MongoDB](https://www.mongodb.com/), [Cloudinary](https://cloudinary.com/) y [Stripe](https://stripe.com)

🚀 **Ejecutar el Proyecto**

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para ver el proyecto en ejecución.