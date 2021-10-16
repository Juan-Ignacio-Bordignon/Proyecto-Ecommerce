CREATE DATABASE `hard4gamers`;
USE `hard4gamers`;
CREATE TABLE `users`(
  `id` SMALLINT(6) AUTO_INCREMENT NOT NULL,
  `user_name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL UNIQUE,
  `password` VARCHAR(60) NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE `cart_user`(
  id SMALLINT(6) AUTO_INCREMENT NOT NULL,
  user_id SMALLINT(6) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (user_id) REFERENCES `users` (`id`)
);
CREATE TABLE `types`(
  id SMALLINT(6) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE `products`(
  id SMALLINT(6) AUTO_INCREMENT NOT NULL,
  title VARCHAR(50) NOT NULL,
  `type` SMALLINT(6) NOT NULL,
  `description` TEXT NOT NULL,
  price DECIMAL NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  deleted TINYINT(1) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (`type`) REFERENCES `types` (`id`)
);
CREATE TABLE `carts`(
  id SMALLINT(6) AUTO_INCREMENT NOT NULL,
  cart_id SMALLINT(6) NOT NULL,
  product_id SMALLINT(6) NOT NULL,
  cuantity SMALLINT NOT NULL,
  total_price DECIMAL NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (product_id) REFERENCES `products` (`id`),
  FOREIGN KEY (cart_id) REFERENCES `cart_user` (`id`)
);