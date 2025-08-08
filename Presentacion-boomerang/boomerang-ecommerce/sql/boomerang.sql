-- Crear base de datos
CREATE DATABASE IF NOT EXISTS boomerang;
USE boomerang;

-- Tabla de usuarios
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    rol ENUM('usuario', 'admin') DEFAULT 'usuario',
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla de productos
CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    categoria VARCHAR(50),
    precio DECIMAL(10,2) NOT NULL,
    imagen VARCHAR(255),
    stock INT DEFAULT 0,
    fecha_agregado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Productos de ejemplo
INSERT INTO productos (nombre, descripcion, categoria, precio, imagen, stock) VALUES
('Smartphone X10', 'Teléfono inteligente de última generación', 'Tecnología', 1299.99, 'img/smartphone.jpg', 10),
('Camisa Casual Hombre', 'Camisa de algodón fresca', 'Ropa', 89.90, 'img/camisa.jpg', 25),
('Muñeca Princesa', 'Muñeca con vestido brillante', 'Juguetes', 45.00, 'img/muneca.jpg', 30),
('Set de Maquillaje Pro', 'Set completo de belleza para profesionales', 'Belleza', 150.00, 'img/maquillaje.jpg', 15);
