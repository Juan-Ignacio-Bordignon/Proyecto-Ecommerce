DROP DATABASE IF EXISTS `hard4gamers`;
CREATE DATABASE `hard4gamers`;
USE `hard4gamers`;
CREATE TABLE `users`(
  `id` INT(10) AUTO_INCREMENT NOT NULL,
  `user_name` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL UNIQUE,
  `password` VARCHAR(60) NOT NULL,
  `category` VARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE `types`(
  id INT(10) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
);
CREATE TABLE `products`(
  id INT(10) AUTO_INCREMENT NOT NULL,
  title VARCHAR(50) NOT NULL,
  `type` INT(10) NOT NULL,
  `description` TEXT NOT NULL,
  price DECIMAL NOT NULL,
  `image` VARCHAR(100) NOT NULL,
  deleted TINYINT(1) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (`type`) REFERENCES `types` (`id`)
);
CREATE TABLE `carts`(
  id INT(10) AUTO_INCREMENT NOT NULL,
  user_id INT(10) NOT NULL,
  product_id INT(10) NOT NULL,
  cuantity SMALLINT NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (product_id) REFERENCES `products` (`id`),
  FOREIGN KEY (user_id) REFERENCES `user` (`id`)
);