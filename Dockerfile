# Etapa de construcción
# Se utiliza una imagen de Node.js como base, idealmente especifica la misma versión que usas localmente
FROM node:20.14.0-alpine3.20 as builder

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de definición de paquetes al directorio de trabajo
COPY package*.json ./

# Instalar dependencias, incluidas las de 'devDependencies' necesarias para la compilación
RUN npm install

# Copiar el resto de los archivos del código fuente al directorio de trabajo
COPY . .

# Generar el cliente de prisma para producción
RUN npx prisma generate

# Compilar la aplicación
RUN npm run build

# Etapa de ejecución
FROM node:20.14.0-alpine3.20

WORKDIR /app

# Copiar los archivos de definición de paquetes al directorio de trabajo
COPY package*.json ./

# Instalar solo las dependencias de producción
RUN npm install --omit=dev

# Copiar los archivos de build y prisma desde la etapa de construcción
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

# Generar el cliente de prisma para producción
RUN npx prisma generate

# Exponer el puerto que tu aplicación utiliza
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:prod"]
