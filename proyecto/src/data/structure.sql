DROP DATABASE IF EXISTS hard4gamers;
CREATE DATABASE hard4gamers;
USE hard4gamers;
CREATE TABLE users(
  id INT(10) AUTO_INCREMENT NOT NULL,
  user_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(60) NOT NULL,
  category VARCHAR(50) NOT NULL DEFAULT "client",
  PRIMARY KEY(id)
);
CREATE TABLE types(
  id INT(10) AUTO_INCREMENT NOT NULL,
  name VARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE products(
  id INT(10) AUTO_INCREMENT NOT NULL,
  title VARCHAR(50) NOT NULL,
  type INT(10) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL NOT NULL,
  image VARCHAR(100) NOT NULL,
  deleted TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY(id),
  FOREIGN KEY (type) REFERENCES types (id)
);
CREATE TABLE carts(
  id INT(10) AUTO_INCREMENT NOT NULL,
  user_id INT(10) NOT NULL,
  product_id INT(10) NOT NULL,
  cuantity SMALLINT NOT NULL,
  total_price DECIMAL NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (product_id) REFERENCES products (id),
  FOREIGN KEY (user_id) REFERENCES users (id)
);
CREATE TABLE records(
id INT(10) AUTO_INCREMENT NOT NULL,
user_id INT(10) NOT NULL,
product_id INT(10) NOT NULL,
cuantity SMALLINT NOT NULL,
createdAt DATE,
updatedAt DATE,
PRIMARY KEY(id),
FOREIGN KEY (product_id) REFERENCES products (id),
FOREIGN KEY (user_id) REFERENCES users (id)
);
INSERT INTO users
VALUES(DEFAULT,"Toto Fabrizio","tomas.fabrizio02@gmail.com","$2a$10$Dg4juHqOZihiPlDd6aUlQuH.LLuQCFYYvMZJQ0sqJmCEzWDcc9cVu","admin"),
(DEFAULT,"Juan Bordignon","juanibordil@gmail.com","$2a$10$otJjZB4dcgnt6.G0EAEXeuZJqoMuTlMXUFeRuJnV.wvM3vAyL22bm","admin");
INSERT INTO types
VALUES(DEFAULT, "mother board"),
(DEFAULT, "processor"),
(DEFAULT, "ram"),
(DEFAULT, "SSD"),
(DEFAULT, "HDD"),
(DEFAULT, "grafic card"),
(DEFAULT, "ram"),
(DEFAULT, "keyboard"),
(DEFAULT, "mouse"),
(DEFAULT, "monitor"),
(DEFAULT, "headset");
INSERT INTO products
VALUES(DEFAULT,"Ryzen 5 3600",2,"Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles. AMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más.",37999,"/images/Ryzen5-3600.jpg",0),
(DEFAULT,"MSI GeForce RTX 3060 Ti",6,"Nvidia es el fabricante líder de placas de video; su calidad asegura una experiencia positiva en el desarrollo del motor gráfico de tu computadora. Además, sus procesadores usan tecnología de punta para que puedas disfrutar de un producto veloz y duradero. Velocidad en cada lectura, cuenta con 4864 núcleos, por lo que la interfaz de la placa será algo sorprendente. Este tipo de estructura es apropiado para el procesamiento de tecnologías más complejas y modernas caracterizadas por grandes volúmenes de datos. Calidad de imagen, criterio fundamental a la hora de elegir una placa de video, su resolución de 7680x4320 no te defraudará. La decodificación de los píxeles en tu pantalla te harán ver hasta los detalles más ínfimos en cada ilustración.",204000,"/images/MSI-Ventus-GeForce-RTX-3060-Ti.jpg",0),
(DEFAULT,"Samsung F24T35",10,"Este monitor led de 24 pulgadas te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 5 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.",25999,"/images/Samsung-F24T35-led-24.jpg",0),
(DEFAULT,"Redragon Kumara K552",8,"La gran calidad del Redragon Kumara K552, y su precio económico lo vuelven un atractivo ideal para que te diviertas frente a la pantalla. Su ergonomía, su base antidelizante y su rápido tiempo de respuesta permite que tus juegos favoritos se sientan más cerca que nunca, al alcance de tus manos.",6439,"/images/Redragon-Kumara-K552.jpg",0);