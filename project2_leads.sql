-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Мар 15 2019 г., 11:11
-- Версия сервера: 10.1.38-MariaDB
-- Версия PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `project2_leads`
--
CREATE DATABASE IF NOT EXISTS `project2_leads` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `project2_leads`;

-- --------------------------------------------------------

--
-- Структура таблицы `leads`
--

CREATE TABLE IF NOT EXISTS `leads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `leads`
--

INSERT INTO `leads` (`id`, `name`, `email`, `message`) VALUES
(1, 'Alex', '123@test.ru', ''),
(2, 'Alex2', '123@test.ru', ''),
(3, 'Alex3', '123@test.ru', ''),
(4, 'Alex4', '123@test.ru', ''),
(5, 'Alex5', '123@test.ru', ''),
(6, 'Alex6', '123@test.ru', ''),
(7, 'Alex7', '123@test.ru', ''),
(8, 'Alex8', '123@test.ru', 'Nothing'),
(9, 'Alex9', '123@test.ru', 'Yep'),
(10, 'Alex10', '123@test.ru', 'Yo'),
(11, 'Alex11', '123@test.ru', 'qwe'),
(12, 'Alex12', '123@test.ru', 'asd'),
(13, 'Alex13', '123@test.ru', 'zxc'),
(14, '', '', ''),
(15, '', '', ''),
(16, '', '', ''),
(17, '', '', ''),
(18, 'Alex13', '123@test.ru', ''),
(19, 'Alex', '123@test.ru', ''),
(20, 'Alex', '123@test.ru', ''),
(21, 'Alex5', '123@test.ru', ''),
(22, 'Alex6', '123@test.ru', ''),
(23, 'Alex5', '123@test.ru', '123'),
(24, 'Alex', '123@test.ru', ''),
(25, 'Alex2', '123@test.ru', '12345'),
(26, '     фыв', '123@test.ru', ''),
(27, '     фыв', '123@test.ru', ''),
(28, 'Вася', '123@test.ru', ''),
(29, 'Иван', '123@test.ru', 'петя'),
(30, 'вася', '123@test.ru', ''),
(31, 'петя', '123@test.ru', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
