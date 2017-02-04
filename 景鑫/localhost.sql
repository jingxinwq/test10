-- phpMyAdmin SQL Dump
-- version 4.0.4
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 02 月 04 日 01:44
-- 服务器版本: 5.6.12-log
-- PHP 版本: 5.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;

-- --------------------------------------------------------

--
-- 表的结构 `userinfo`
--

CREATE TABLE IF NOT EXISTS `userinfo` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8 NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone` (`password`),
  UNIQUE KEY `phone_2` (`password`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=151 ;

--
-- 转存表中的数据 `userinfo`
--

INSERT INTO `userinfo` (`id`, `name`, `password`) VALUES
(24, 'qqqqqqqq', '111111'),
(27, 'q111111', 'q111111'),
(34, 'we2345', '12345678'),
(36, 'ert3121', '222222'),
(37, 'wo12345', '1234567'),
(38, 'wert2333', '123456'),
(112, 'ewe222', '123456789'),
(128, 'ewe223412', '333333'),
(129, 'uu12345', '444444'),
(130, 'uu1234567', '4444445'),
(132, 'uu12345678', '44444456'),
(134, 'uu123456789', '444444568'),
(135, 'uu123456789q', '444444568w'),
(137, '', ''),
(139, 'ertd211', '11111'),
(142, 'ww22345', '2222'),
(144, 'ww2234545', '2345'),
(146, 'ww22345458', '33333'),
(147, 'qw2345', '1111'),
(150, 'ewe222', ' 123456789');
--
-- 数据库: `数据存放`
--
CREATE DATABASE IF NOT EXISTS `数据存放` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `数据存放`;

-- --------------------------------------------------------

--
-- 表的结构 `登录`
--

CREATE TABLE IF NOT EXISTS `登录` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `e-mail` varchar(100) CHARACTER SET utf32 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
