DROP DATABASE IF EXISTS store_center_db;
CREATE DATABASE store_center_db;

USE store_center_db;


CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  phone VARCHAR(30) NOT NULL,
  password VARCHAR(20)
);

INSERT INTO users (phone, password) VALUES ('87759766409', 'qwerty');


CREATE TABLE store_center (
  id INT AUTO_INCREMENT PRIMARY KEY,
  address VARCHAR(30) NOT NULL,
  owner VARCHAR(20),
  floors INT NOT NULL,
  rowCount INT NOT NULL,
  shopsCountInRow INT NOT NULL,
  electricityUsage INT NOT NULL
);

CREATE TABLE shop (
  id INT AUTO_INCREMENT PRIMARY KEY,
  number VARCHAR(30) NOT NULL,
  owner VARCHAR(20),
  square INT,
  electricityUsage INT
);

CREATE TABLE alarm (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(30) NOT NULL,
  number VARCHAR(20) NOT NULL,
  time DATE,
);

INSERT INTO shop (number, electricityUsage) VALUES 
(1, 700),
(2, 900),
(3, 900),
(4, 1000),
(4, 1000),
(5, 1000),
(6, 300),
(7, 1400),
(8, 1000),
(9, 1000),
(10, 400),
(11, 300),
(12, 1000),
(13, 500),
(14, 500),
(15, 800),
(16, 200),
(17, 1300),
(18, 1200),
(19, 200),
(20, 700),
(21, 800),
(22, 1300),
(23, 100),
(24, 1100);
