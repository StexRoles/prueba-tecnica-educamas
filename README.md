# Evidencias visuales
https://github.com/user-attachments/assets/c87e6143-ffa9-4517-9a8b-f12d6f85e083



# Parte teorica
1. ¿Qué es una API REST y su estructura?
Una API REST es una forma de conectar aplicaciones usando peticiones HTTP. Su estructura sigue el modelo CRUD para interactuar con datos, y generalmente responde en formato JSON. Por ejemplo, una ruta como /api/users puede usarse para listar o crear usuarios dependiendo del método HTTP que se use.

2. JWT vs Cookies
JWT y cookies son métodos para manejar autenticación. JWT guarda el token en el navegador (por ejemplo en localStorage) y se envía con cada petición, mientras que las cookies se envían automáticamente. Las cookies pueden tener más control desde el servidor (como expiración y seguridad con HttpOnly), pero los JWT son más comunes en APIs modernas por su independencia del backend.

3. ¿Cómo aplicarías seguridad básica?
Aplicaría seguridad validando los datos que llegan del usuario, encriptando las contraseñas, usando JWT para autenticar, y configurando CORS para evitar accesos no autorizados. También protegería rutas con middleware y evitaría exponer información sensible como claves o errores internos.

4. Ventajas del uso de ORM
Un ORM facilita trabajar con bases de datos usando código en lugar de SQL directo. Hace que sea más fácil manejar tablas, relaciones y datos sin preocuparse por inyecciones SQL o errores de sintaxis, además permite cambiar de base de datos con menos ajustes en el código.

5. ¿Qué retos tuviste integrando frontend y backend?
Uno de los retos fue manejar correctamente los errores entre frontend y backend, como validar bien los formularios o mostrar mensajes claros. También me encontré con problemas de CORS y diferencias en el formato de datos, lo que requiere buena comunicación entre ambas partes del proyecto.

# Proyecto de Autenticación de Usuarios

Este proyecto es una aplicación de autenticación de usuarios que incluye un backend desarrollado con Node.js y un frontend con React. A continuación, se describen los pasos para configurar y ejecutar el proyecto.

---

## Configuración de la Base de Datos

1. Asegúrate de tener PostgreSQL instalado en tu sistema.
2. Usa el archivo `database.sql` para crear la tabla necesaria en tu base de datos. 

Configura las credenciales de tu base de datos en el archivo .env dentro de src . Ejemplo:

```bash
   DB_USER=postgres
DB_HOST=localhost
DB_NAME=autenticacion_usuarios
DB_PASSWORD=password
DB_PORT=5432
JWT_SECRET=mi_clave_secreta_super_segura
   ```
## 🚀 Ejecución del Proyecto

### Backend

1. Navega a la carpeta del backend:
   ```bash
   cd backend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor:
   ```bash
   npm test
   ```

### Frontend

1. Navega a la carpeta del frontend:
   ```bash
   cd frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## 📂 Estructura de Carpetas del Backend

```plaintext
backend/
├── node_modules/         # Dependencias del proyecto
├── public/               # Archivos públicos
├── src/                  # Código fuente del backend
│   ├── config/           # Configuración del proyecto
│   │   └── db.js         # Configuración de la conexión a la base de datos
│   ├── controllers/      # Controladores de las rutas
│   │   └── authController.js # Lógica para registro e inicio de sesión
│   ├── routers/          # Definición de rutas
│   │   ├── auth.js       # Rutas relacionadas con autenticación
│   │   └── app.js        # Configuración principal del servidor
├── .env                  # Variables de entorno
├── package.json          # Configuración del proyecto y dependencias
├── package-lock.json     # Archivo de bloqueo de dependencias
└── [README.md]  
```

## Endpoints del backend
Base URL: http://localhost:3005/api
1. Registro de Usuario
URL: /auth/register
Método: POST
Descripción: Registra un nuevo usuario en la base de datos.

2. Inicio de Sesión
URL: /auth/login
Método: POST
Descripción: Autentica a un usuario y devuelve un token JWT.

## flujo de datos
1. Frontend

El usuario interactúa con el formulario de registro o inicio de sesión.
Los datos se envían al backend mediante solicitudes HTTP (POST).

2. Backend

Rutas (routers/auth.js): Reciben las solicitudes del frontend.
Controladores (controllers/authController.js): Procesan la lógica de negocio, como verificar usuarios, encriptar contraseñas y generar tokens JWT.
Base de Datos (config/db.js): Se conecta a PostgreSQL para almacenar o recuperar datos.

3. Base de datos

La tabla users almacena los datos de los usuarios, como name, email y password.
Respuesta:

El backend responde al frontend con un mensaje de éxito, error o un token JWT.
