-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 22, 2020 at 07:41 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `u254792697_mydaytoday`
--
CREATE DATABASE IF NOT EXISTS `u254792697_mydaytoday` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `u254792697_mydaytoday`;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `date` text COLLATE utf8_unicode_ci NOT NULL,
  `id` int(100) NOT NULL,
  `userID` int(100) NOT NULL,
  `tittle` text COLLATE utf8_unicode_ci NOT NULL,
  `subject` text COLLATE utf8_unicode_ci NOT NULL,
  `comment` text COLLATE utf8_unicode_ci NOT NULL,
  `hasReply` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`date`, `id`, `userID`, `tittle`, `subject`, `comment`, `hasReply`) VALUES
('2020-05-08 12:46:04', 0, 1, 'Test Tittle (Odio Deberes Grupales)', 'School', 'Test History (Aun que haga muy bien los trabajos, si son grupales mi nota depende de otro, y esos otros son muy vagos.)', '3'),
('2020-05-08 12:47:42', 1, 1, 'Test Tittle (Hoy casi me despiden)', 'Work', 'Test History (Casi tiro una torre de ordenador de mi jefe en el trabajo....)', '4'),
('2020-05-08 14:28:21', 2, 0, 'Prueba de Tittle 01', 'Politics', 'Prueba de History 01 ElColmenero', '4'),
('2020-05-08 14:34:31', 3, 2, 'Test Tittle [Peruanito]', 'Friends', 'Test History [Peruanito]', '1');

-- --------------------------------------------------------

--
-- Table structure for table `replies`
--

CREATE TABLE `replies` (
  `date` text COLLATE utf8_unicode_ci NOT NULL,
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `reply` text COLLATE utf8_unicode_ci NOT NULL,
  `whichIN` text COLLATE utf8_unicode_ci NOT NULL,
  `hasReply` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `replies`
--

INSERT INTO `replies` (`date`, `id`, `userID`, `reply`, `whichIN`, `hasReply`) VALUES
('2020-05-08 12:49:41', 0, 1, 'Test Reply[0] (Me pasó lo mismo hace 23 años)', '1', '0'),
('2020-05-08 12:56:43', 1, 1, 'Test Reply[0] (Lo siento, ten mas cuiadado la proxima vez.)', '1', '0'),
('2020-05-08 12:59:29', 2, 1, 'Test Reply[0] (Me pasó.)', '1', '0'),
('2020-05-08 13:03:47', 3, 1, 'Test Reply[0] (Yo tb, mis compañeros son alto vagos, saludos desde Perú.)', '0', '1'),
('2020-05-08 13:04:10', 4, 1, 'Test Reply[1] (Ja, Peruano loco.)', '0-3', '0'),
('2020-05-08 14:25:19', 5, 1, 'Test Reply[0] (Vale.)', '0', '0'),
('2020-05-08 14:26:58', 6, 0, 'Estoy de acuerdo', '1', '0'),
('2020-05-08 14:28:43', 7, 1, 'Creo que tb me paso', '2', '0'),
('2020-05-08 14:30:15', 8, 0, 'Yo tb, no merece la pena. ', '0', '0'),
('2020-05-08 14:31:19', 9, 1, 'No lo he entendido', '2', '0'),
('2020-05-08 14:35:17', 10, 2, 'Test Reply[0] 03', '2', '0'),
('2020-05-08 14:35:41', 11, 0, 'Test Reply[0] 04', '3', '0'),
('2020-05-08 19:55:56', 12, 2, 'Vale. Vale. ', '2', '0');

-- --------------------------------------------------------

--
-- Table structure for table `usertable`
--

CREATE TABLE `usertable` (
  `idUser` int(11) NOT NULL,
  `username` text COLLATE utf8_unicode_ci NOT NULL,
  `password` text COLLATE utf8_unicode_ci NOT NULL,
  `email` text COLLATE utf8_unicode_ci NOT NULL,
  `notification` text COLLATE utf8_unicode_ci NOT NULL,
  `whichNoti` text COLLATE utf8_unicode_ci NOT NULL,
  `date` text COLLATE utf8_unicode_ci NOT NULL,
  `replied` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `usertable`
--

INSERT INTO `usertable` (`idUser`, `username`, `password`, `email`, `notification`, `whichNoti`, `date`, `replied`) VALUES
(0, 'ElColmenero', 'ElColmenero1', 'acolmeneromoreno@gmail.com', '0', '0', '2020-05-08 12:31:49', '1-0-3-'),
(1, 'Galletademazapan', 'Galletademazapan1', 'Galletademazapan@gmail.com', '0', '0', '2020-05-08 12:33:25', '2-'),
(2, 'Peruanito', 'Peruanito1', 'Peruanito@gmail.com', '0', '0', '2020-05-08 14:33:51', '2-');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `replies`
--
ALTER TABLE `replies`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usertable`
--
ALTER TABLE `usertable`
  ADD PRIMARY KEY (`idUser`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
