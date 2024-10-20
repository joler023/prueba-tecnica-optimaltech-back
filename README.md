# **Prueba Técnica Optimal Tech API**

Esta API, desarrollada con el framework **NestJS**, proporciona un conjunto de operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar una colección de libros. Es parte de un sistema completo que incluye un frontend y backend que trabajan en conjunto para ofrecer una plataforma de administración de libros.

## **Requisitos previos**

Antes de empezar, asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- **Node.js** (versión mínima recomendada: 20.x o superior)

## **Instalación**

1. Clona el repositorio del proyecto.
   ```bash
   git clone https://github.com/joler023/prueba-tecnica-optimaltech-back
   ```

2. Navega al directorio del proyecto.
   ```bash
   cd prueba-tecnica-optimaltech-back
   ```

3. Instala las dependencias usando `npm`:
   ```bash
   npm install
   ```

## **Estructura del proyecto**

El proyecto está organizado de la siguiente manera:

- **src/**: Contiene el código fuente de la API. El proyecto se divide en los siguientes apartados
  - **controllers**: Son archivos donde se definen los endpoints que manejan las solicitudes HTTP.
  - **services**: Estos archivos contiene la lógica de negocio de la aplicación.
  - **modules**: Orquestan la interacción entre servicios, controladores y otros modulos vecinos.
  - **dto/**: Incluye los objetos de transferencia de datos para validar y transformar las solicitudes.
  
## **Ejecutar la aplicación**

### Entorno de desarrollo:

1. Para iniciar el servidor en modo de desarrollo (con recarga en caliente):
   ```bash
   npm run start:dev
   ```
   - La API estará disponible en `http://localhost:3000`.

### Producción:

1. Para crear una compilación optimizada para producción:
   ```bash
   npm run build
   ```

2. Luego, ejecuta el servidor en modo de producción:
   ```bash
   npm run start:prod
   ```

   - La aplicación estará disponible en el puerto configurado, por defecto `http://localhost:3000`.
   - De la misma manera, su documentacion interna en OpenAPI Swagger estara en la url `http://localhost:3000/api`

## **EndPoints disponibles**

### 1. **Obtener todos los libros**  
   **GET** `/book/all`  
   Retorna una lista de todos los libros almacenados.

### 2. **Crear un libro**  
   **POST** `/book/create`  
   Crea un nuevo libro con el siguiente cuerpo en JSON:
   ```json
   {
     "title": "Título del libro"
   }
   ```

### 3. **Actualizar un libro**  
   **PATCH** `/book/update/:id`  
   Actualiza un libro existente basado en su `id`, proporcionando un título actualizado en el cuerpo de la solicitud:
   ```json
   {
     "title": "Nuevo título"
   }
   ```

### 4. **Eliminar un libro**  
   **DELETE** `/book/remove/:id`  
   Elimina un libro basado en su `id`.


## **Deploy en producción**

Una vez que el build esté listo, puedes desplegar esta API en cualquier servicio compatible con Node.js (como **Heroku**, **AWS**, **DigitalOcean**, **Vercel**, etc.).

1. Construir el proyecto:
   ```bash
   npm run build
   ```

2. Ejecutar el proyecto en producción:
   ```bash
   npm run start:prod
   ```

## **Consideraciones de seguridad**

- Asegúrate de que las variables de entorno (como credenciales de bases de datos) estén correctamente configuradas en archivos `.env` o en el sistema de producción que utilices.
- Si la API estará expuesta al público, asegúrate de implementar mecanismos de autenticación y autorización.