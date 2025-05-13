-- 1. Crear la base de datos (solo una vez)
CREATE DATABASE autenticacion_usuarios;

-- 2. Crear la tabla de usuarios
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password TEXT NOT NULL
);