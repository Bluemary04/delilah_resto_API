-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-08-2020 a las 02:44:24
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `delilah-resto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `order_state` int(11) NOT NULL,
  `payment` tinyint(1) DEFAULT NULL,
  `date_time` datetime NOT NULL,
  `id_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `orders`
--

INSERT INTO `orders` (`order_id`, `order_state`, `payment`, `date_time`, `id_user`) VALUES
(6, 1, 1, '2020-08-04 18:40:07', 11),
(7, 2, 0, '2020-08-04 23:59:37', 11),
(8, 2, 0, '2020-08-05 00:01:34', 11),
(9, 2, 0, '2020-08-05 20:43:42', 11),
(10, 2, 0, '2020-08-05 20:46:41', 11),
(11, 3, 0, '2020-08-07 19:55:40', 20),
(12, 1, 1, '2020-08-09 21:16:23', 20),
(13, 1, 1, '2020-08-17 11:33:13', 20),
(14, 1, 1, '2020-08-17 11:35:15', 20),
(15, 1, 1, '2020-08-17 11:39:46', 20),
(16, 1, 1, '2020-08-17 11:41:29', 20),
(17, 1, 1, '2020-08-17 11:44:32', 20),
(18, 1, 1, '2020-08-17 11:50:28', 20),
(19, 1, 1, '2020-08-17 11:55:42', 20),
(20, 1, 1, '2020-08-17 12:08:26', 20),
(21, 1, 1, '2020-08-17 12:14:26', 20),
(22, 1, 1, '2020-08-17 12:15:55', 20),
(23, 1, 0, '2020-08-17 12:18:04', 20),
(24, 1, 0, '2020-08-17 12:18:34', 20),
(25, 1, 1, '2020-08-17 12:20:26', 20),
(26, 1, 1, '2020-08-17 12:26:50', 20),
(27, 1, 1, '2020-08-17 12:45:45', 20),
(28, 1, 1, '2020-08-17 12:46:57', 20),
(29, 1, 1, '2020-08-17 12:52:17', 20),
(30, 1, 1, '2020-08-17 12:53:13', 20),
(31, 1, 1, '2020-08-17 12:57:00', 20),
(32, 1, 1, '2020-08-17 12:58:48', 20),
(33, 1, 1, '2020-08-17 13:00:31', 20),
(34, 1, 1, '2020-08-17 13:02:13', 20),
(35, 1, 1, '2020-08-17 13:03:17', 20),
(37, 1, 1, '2020-08-17 15:00:13', 20),
(38, 2, 0, '2020-08-17 15:08:34', 20),
(39, 2, 0, '2020-08-17 15:15:17', 20),
(40, 2, 0, '2020-08-17 15:17:16', 20),
(41, 2, 0, '2020-08-17 15:21:50', 20),
(49, 2, 0, '2020-08-17 16:15:31', 20),
(50, 2, 0, '2020-08-17 16:51:17', 20),
(51, 3, 0, '2020-08-17 21:07:40', 20);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_detail`
--

CREATE TABLE `order_detail` (
  `id_order` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `order_detail`
--

INSERT INTO `order_detail` (`id_order`, `id_product`, `quantity`) VALUES
(23, 3, 2),
(24, 3, 2),
(37, 4, 2),
(38, 4, 4),
(39, 4, 4),
(40, 5, 4),
(41, 4, 4),
(49, 3, 4),
(49, 4, 4),
(49, 5, 4),
(50, 3, 4),
(51, 3, 2),
(51, 4, 2),
(51, 9, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `product_name` varchar(200) NOT NULL DEFAULT 'maria',
  `price` float NOT NULL DEFAULT 14.99,
  `photo` varchar(500) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `price`, `photo`, `description`) VALUES
(3, 'Sandwich', 149, 'http://cheeseBurger.com', 'Mouthwatering perfection starts with two 100% pure beef patties and sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion and American cheese.'),
(4, 'hamburger', 14.99, 'dfdlink', 'amvorguesa'),
(5, 'tortilla', 199, 'sdfgsdfgdfsfgs', 'dfbdsfdsfdbdsf'),
(6, 'hamburguer', 189.99, 'myphoto', 'mydescription'),
(9, 'torta', 350, 'una torta', 'dfbdsfdsfdbdsf');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `mail` varchar(50) NOT NULL,
  `phone` int(25) NOT NULL,
  `address` text NOT NULL,
  `pass` varchar(100) NOT NULL,
  `admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`user_id`, `user_name`, `lastname`, `mail`, `phone`, `address`, `pass`, `admin`) VALUES
(11, 'Adam', 'Acosta', 'AdamA@gmail.com', 555555555, 'st street', '$2b$10$IkcRffJ3hcfbd8.LJ2EmBu9X67dULICUu6oqPLclrFGbblVAKzfB2', 0),
(15, 'Peter', 'Parker', 'testmail@gmail.com', 55555555, 'myadress', '$2b$10$qH3K1dd/PMS4ZHM0MvgQuOK8GpXg7g2i53vqaieKtJ5C0qQDonnbq', 0),
(18, 'Anabelle', 'Diaz', 'diaz_ana@gmail.com', 555555, 'st street', '$2b$10$mVEdqGWLh8Q0a1QhHyxJAuZs29oYKklpGU9c46Oe70M6Jpr80B4UG', 1),
(19, 'July', 'Acosta', 'july@gmail.com', 555555, 'st street', '$2b$10$ubPiNNmdP9cB/GUf7gRJkezxag5xxddCPy5DE9KAOFOl/8FFrD0n.', 1),
(20, 'Andy', 'Acosta', 'andres@gmail.com', 555555, 'st street', '$2b$10$dvTdKZtQGHLUbZPErfTirurewq7.Fwvci9vMjOtE8kLn6ZNfXhqK2', 0),
(22, 'July', 'Acosta', 'july@gmail.com', 555555, 'st street', '$2b$10$7bj.U5kzOFegciAYEIa1fuSariWpTiCgj7u1a3llSb9gAbhRYx6Ly', 1),
(23, 'July', 'Acosta', 'july@gmail.com', 555555, 'st street', '$2b$10$Q7eSZmwrz/yuCfalqnJrc.ed95gQXNbLHs9PVzdlVYyfwj4S9vEb2', 1),
(24, 'July', 'Acosta', 'july@gmail.com', 555555, 'st street', '$2b$10$LyMNVQU7GZM/tUyXkx7GkuaE1SKCgPthGGnFQVgQuH7drViq1.AO6', 1),
(25, 'Andres', 'Diaz', 'Andy@gmail.com', 555555, 'st street', '$2b$10$/dxudE4y4fs9M/I0RImizedCc3J1/1csDv8S05ApmMFNQ52sYyNMG', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `order_detail`
--
ALTER TABLE `order_detail`
  ADD KEY `id_product` (`id_product`),
  ADD KEY `id_order` (`id_order`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`user_id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`id_order`) REFERENCES `orders` (`order_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
