CREATE DATABASE IF NOT EXISTS shopdb;

USE shopdb;

CREATE TABLE productos (
  id INT(11) NOT NULL AUTO_INCREMENT,
  marca VARCHAR(255) NOT NULL,
  modelo VARCHAR(255) NOT NULL,
  tipo ENUM('portatil','casa') NOT NULL,
  precio DECIMAL(10,2) NOT NULL,
  fecha DATETIME NOT NULL DEFAULT NOW(),
  disponibilidad BOOLEAN NOT NULL,
  PRIMARY KEY (id)
);

DESCRIBE productos;

INSERT INTO productos (marca, modelo, tipo, precio, disponibilidad) VALUES
  ('Logitech', 'G203 Prodigy', 'portatil', 100.00, True),
  ('Asus', 'TUF Gaming VG24VQ', 'casa', 200.00, True),
  ('Kingston', 'HyperX Fury RGB 8GB', 'portatil', 50.00, False);