-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 15, 2024 at 12:11 PM
-- Server version: 11.3.2-MariaDB
-- PHP Version: 8.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grc_db_local`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_log`
--

CREATE TABLE `activity_log` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `log_name` varchar(255) DEFAULT NULL,
  `description` text NOT NULL,
  `subject_type` varchar(255) DEFAULT NULL,
  `event` varchar(255) DEFAULT NULL,
  `subject_id` bigint(20) UNSIGNED DEFAULT NULL,
  `causer_type` varchar(255) DEFAULT NULL,
  `causer_id` bigint(20) UNSIGNED DEFAULT NULL,
  `properties` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`properties`)),
  `batch_uuid` char(36) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activity_log`
--

INSERT INTO `activity_log` (`id`, `log_name`, `description`, `subject_type`, `event`, `subject_id`, `causer_type`, `causer_id`, `properties`, `batch_uuid`, `created_at`, `updated_at`) VALUES
(1, 'User', 'created', 'App\\Models\\User', 'created', 1, NULL, NULL, '{\"attributes\":{\"name\":\"Admin\",\"email\":\"admin@grc.com\",\"user_contact_no\":null,\"designation_id\":null,\"department_id\":null,\"user_profile_pic\":null,\"user_remark\":null,\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(2, 'Designation', 'created', 'App\\Models\\Designation', 'created', 1, NULL, NULL, '{\"attributes\":{\"name\":\"Web Developer\",\"description\":\"fullstack developer\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(3, 'Department', 'created', 'App\\Models\\Department', 'created', 1, NULL, NULL, '{\"attributes\":{\"name\":\"IT DEPT\",\"description\":\"it department\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(4, 'organization', 'created', 'App\\Models\\Organization', 'created', 1, NULL, NULL, '{\"attributes\":{\"name\":\"Toy, Rohan and Lang\",\"legal_name\":\"Jaskolski-Oberbrunner\",\"url\":\"https:\\/\\/www.rutherford.biz\\/qui-ipsum-quia-exercitationem-nihil-aut-consectetur-et-ea\",\"securityOfficer.name\":null,\"address\":\"3272 Roberts Manors\\nOliverport, FL 31410-0863\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/00cc55?text=consequuntur\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(5, 'Entity', 'created', 'App\\Models\\Entity', 'created', 1, NULL, NULL, '{\"attributes\":{\"name\":\"Kreiger-Gislason\",\"legal_name\":\"Adams, Kub and Armstrong\",\"url\":\"http:\\/\\/www.vandervort.net\\/\",\"securityOfficer.name\":null,\"address\":\"8702 June Bypass Suite 092\\nEast Shyanne, CO 72974-3331\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/0033dd?text=eveniet\",\"organizations.name\":\"Toy, Rohan and Lang\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(6, 'Entity', 'created', 'App\\Models\\Entity', 'created', 2, NULL, NULL, '{\"attributes\":{\"name\":\"Prohaska Group\",\"legal_name\":\"Satterfield Ltd\",\"url\":\"http:\\/\\/abbott.net\\/maiores-eum-quis-asperiores-impedit.html\",\"securityOfficer.name\":null,\"address\":\"965 Russel Haven Suite 973\\nNorth Carolineport, VA 57400-5943\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/0088dd?text=nihil\",\"organizations.name\":\"Toy, Rohan and Lang\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(7, 'organization', 'created', 'App\\Models\\Organization', 'created', 2, NULL, NULL, '{\"attributes\":{\"name\":\"Emmerich Inc\",\"legal_name\":\"Zboncak, Bahringer and Hartmann\",\"url\":\"http:\\/\\/gottlieb.com\\/ipsa-molestiae-architecto-incidunt-sed-non-animi.html\",\"securityOfficer.name\":null,\"address\":\"5161 Malinda Underpass\\nBrandystad, UT 65035-1357\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/0099aa?text=in\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(8, 'Entity', 'created', 'App\\Models\\Entity', 'created', 3, NULL, NULL, '{\"attributes\":{\"name\":\"Marvin-Langosh\",\"legal_name\":\"Rowe-Osinski\",\"url\":\"http:\\/\\/maggio.com\\/sit-voluptates-facilis-et-doloremque-debitis\",\"securityOfficer.name\":null,\"address\":\"4177 Eugene Coves Suite 241\\nCummingsview, TX 51002\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/006633?text=qui\",\"organizations.name\":\"Emmerich Inc\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(9, 'Entity', 'created', 'App\\Models\\Entity', 'created', 4, NULL, NULL, '{\"attributes\":{\"name\":\"Koepp-Gibson\",\"legal_name\":\"Halvorson and Sons\",\"url\":\"http:\\/\\/www.johnston.info\\/accusantium-possimus-dolore-nobis-sequi-quo\",\"securityOfficer.name\":null,\"address\":\"671 Marcus Drives\\nNorth Adrielborough, OR 06762\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/009911?text=nihil\",\"organizations.name\":\"Emmerich Inc\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(10, 'organization', 'created', 'App\\Models\\Organization', 'created', 3, NULL, NULL, '{\"attributes\":{\"name\":\"Cassin and Sons\",\"legal_name\":\"Flatley, Barton and Schneider\",\"url\":\"http:\\/\\/www.barton.com\\/pariatur-sint-exercitationem-velit-a\",\"securityOfficer.name\":null,\"address\":\"2648 Murphy Freeway\\nLynchhaven, PA 62675\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/00bbbb?text=expedita\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(11, 'Entity', 'created', 'App\\Models\\Entity', 'created', 5, NULL, NULL, '{\"attributes\":{\"name\":\"Hayes-Ratke\",\"legal_name\":\"Hansen Ltd\",\"url\":\"http:\\/\\/www.dickinson.com\\/quae-ipsam-voluptate-doloremque-in-qui-nemo-quia.html\",\"securityOfficer.name\":null,\"address\":\"21125 Moore Rapid\\nEast Korybury, OK 95461\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/00ddbb?text=esse\",\"organizations.name\":\"Cassin and Sons\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(12, 'Entity', 'created', 'App\\Models\\Entity', 'created', 6, NULL, NULL, '{\"attributes\":{\"name\":\"Hodkiewicz, Gulgowski and Boyle\",\"legal_name\":\"Ullrich, Olson and Krajcik\",\"url\":\"http:\\/\\/leuschke.biz\\/temporibus-hic-sit-molestiae-ea-sequi\",\"securityOfficer.name\":null,\"address\":\"6377 Marta Walks\\nNorth Bo, NJ 26508-6330\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/008899?text=nostrum\",\"organizations.name\":\"Cassin and Sons\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(13, 'organization', 'created', 'App\\Models\\Organization', 'created', 4, NULL, NULL, '{\"attributes\":{\"name\":\"Wehner-Hammes\",\"legal_name\":\"Effertz-Rice\",\"url\":\"http:\\/\\/davis.info\\/\",\"securityOfficer.name\":null,\"address\":\"54209 Yazmin Roads Apt. 870\\nEast Daphneestad, DC 05946\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/00ccaa?text=omnis\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(14, 'Entity', 'created', 'App\\Models\\Entity', 'created', 7, NULL, NULL, '{\"attributes\":{\"name\":\"Ondricka-Kuhlman\",\"legal_name\":\"Simonis-VonRueden\",\"url\":\"http:\\/\\/www.zieme.com\\/\",\"securityOfficer.name\":null,\"address\":\"7659 Murazik Lodge Suite 943\\nWest Alecchester, CO 34122-2826\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/0088dd?text=quisquam\",\"organizations.name\":\"Wehner-Hammes\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(15, 'Entity', 'created', 'App\\Models\\Entity', 'created', 8, NULL, NULL, '{\"attributes\":{\"name\":\"Reinger-Botsford\",\"legal_name\":\"Kreiger, Cummings and Greenholt\",\"url\":\"http:\\/\\/www.pacocha.biz\\/\",\"securityOfficer.name\":null,\"address\":\"866 Boyer Meadows\\nObiehaven, NC 60153\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/002299?text=perspiciatis\",\"organizations.name\":\"Wehner-Hammes\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(16, 'organization', 'created', 'App\\Models\\Organization', 'created', 5, NULL, NULL, '{\"attributes\":{\"name\":\"Fritsch PLC\",\"legal_name\":\"Armstrong-Nienow\",\"url\":\"http:\\/\\/zulauf.com\\/\",\"securityOfficer.name\":null,\"address\":\"72552 Gerhold Crossing Suite 925\\nWest Deangelo, UT 00784-0195\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/0077ee?text=modi\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(17, 'Entity', 'created', 'App\\Models\\Entity', 'created', 9, NULL, NULL, '{\"attributes\":{\"name\":\"Reichel, West and Rau\",\"legal_name\":\"Greenfelder-Swift\",\"url\":\"http:\\/\\/www.sauer.biz\\/est-ex-tempore-omnis-omnis-autem-in\",\"securityOfficer.name\":null,\"address\":\"2110 Krista Fields\\nNorth Christina, TX 51561-4077\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/0000ff?text=odio\",\"organizations.name\":\"Fritsch PLC\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(18, 'Entity', 'created', 'App\\Models\\Entity', 'created', 10, NULL, NULL, '{\"attributes\":{\"name\":\"Wuckert, Fadel and Tillman\",\"legal_name\":\"Cronin, Wisoky and Russel\",\"url\":\"http:\\/\\/hessel.com\\/quis-veritatis-aut-incidunt-repellat-quam-cumque-voluptatem\",\"securityOfficer.name\":null,\"address\":\"66489 Miller Canyon\\nPort Josiahchester, RI 53769-3430\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/00cc66?text=aut\",\"organizations.name\":\"Fritsch PLC\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(19, 'Control Domain', 'deleted', 'App\\Models\\ControlDomain', 'deleted', 8, 'App\\Models\\User', 1, '{\"old\":{\"name\":\"Control-Domain\",\"description\":\"Control-Domain\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-27 09:26:00', '2024-06-27 09:26:00'),
(20, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Understanding the organization and its context\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 09:49:34', '2024-06-27 09:49:34'),
(21, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 2, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Understanding the needs and expectations of interested parties\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 09:49:37', '2024-06-27 09:49:37'),
(22, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 3, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Determining the scope of the information security management system\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:22:54', '2024-06-27 10:22:54'),
(23, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 4, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information security management system\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:22:55', '2024-06-27 10:22:55'),
(24, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 5, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Leadership and commitment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:22:56', '2024-06-27 10:22:56'),
(25, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 6, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information Security Policy\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:22:57', '2024-06-27 10:22:57'),
(26, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 7, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Organizational roles, responsibilities and authorities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:22:58', '2024-06-27 10:22:58'),
(27, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 8, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Actions to address risks and opportunities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:22:59', '2024-06-27 10:22:59'),
(28, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 9, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"When planning for the information security management system, the organization shall consider the issues and determine the risks and opportunities that need to be addressed to : 6.1.1(a),6.1.1(b),6.1.1(c),6.1.1(d).6.1.1(e)\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:23:01', '2024-06-27 10:23:01'),
(29, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 10, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information security risk assessment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:23:02', '2024-06-27 10:23:02'),
(30, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 11, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information security risk treatment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:23:03', '2024-06-27 10:23:03'),
(31, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 12, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information security objectives and planning to achieve them\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:23:04', '2024-06-27 10:23:04'),
(32, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 13, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Planning of changes\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:23:06', '2024-06-27 10:23:06'),
(33, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 14, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Resources - The organization shall determine and provide the resources needed for the establishment, implementation, maintenance and continual improvement of the information security management system.\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:23:07', '2024-06-27 10:23:07'),
(34, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 15, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Competence\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:23:08', '2024-06-27 10:23:08'),
(35, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 16, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Awareness\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:23:09', '2024-06-27 10:23:09'),
(36, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 17, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Communication\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:23:10', '2024-06-27 10:23:10'),
(37, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 18, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Documented information\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:23:11', '2024-06-27 10:23:11'),
(38, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 19, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"The organization\\u2019s information security management system shall include documented information and documented information necessrary for the effectiveness of the information security management system.\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:23:12', '2024-06-27 10:23:12'),
(39, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 20, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Creating and updating - creating and updating documented information to ensure 7.5.2(a),7.5.2(b),7.5.2(c)\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:23:13', '2024-06-27 10:23:13'),
(40, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 21, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Understanding the organization and its context\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:05', '2024-06-27 10:48:05'),
(41, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 22, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Understanding the needs and expectations of interested parties\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:05', '2024-06-27 10:48:05'),
(42, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 23, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Organizational roles, responsibilities and authorities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:14', '2024-06-27 10:48:14'),
(43, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 24, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Actions to address risks and opportunities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:14', '2024-06-27 10:48:14'),
(44, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 25, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Test information\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:20', '2024-06-27 10:48:20'),
(45, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 26, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Protection of information systems during audit testing\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:20', '2024-06-27 10:48:20'),
(46, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 27, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Separation of development, test and production environments\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:27', '2024-06-27 10:48:27'),
(47, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 28, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Change management\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:29', '2024-06-27 10:48:29'),
(48, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 29, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Outsourced development\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:31', '2024-06-27 10:48:31'),
(49, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 30, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Security testing in development and acceptance\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:32', '2024-06-27 10:48:32'),
(50, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 31, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Secure coding\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:38', '2024-06-27 10:48:38'),
(51, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 32, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Secure system architecture and engineering principles\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:38', '2024-06-27 10:48:38'),
(52, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 33, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Application security requirements\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:39', '2024-06-27 10:48:39'),
(53, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 34, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Secure development life cycle\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:40', '2024-06-27 10:48:40'),
(54, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 35, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Use of cryptography\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:44', '2024-06-27 10:48:44'),
(55, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 36, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Web filtering\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:44', '2024-06-27 10:48:44'),
(56, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 37, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Security of network services\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:45', '2024-06-27 10:48:45'),
(57, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 38, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Installation of software on operational systems\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:46', '2024-06-27 10:48:46'),
(58, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 39, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Use of privileged utility programs\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:47', '2024-06-27 10:48:47'),
(59, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 40, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Clock synchronization\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:47', '2024-06-27 10:48:47'),
(60, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 41, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Networks security\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:50', '2024-06-27 10:48:50'),
(61, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 42, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Segregation of networks\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:48:54', '2024-06-27 10:48:54'),
(62, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 43, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Logging\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:49:11', '2024-06-27 10:49:11'),
(63, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 44, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Monitoring activities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:49:12', '2024-06-27 10:49:12'),
(64, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 45, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Redundancy of information processing facilities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:49:13', '2024-06-27 10:49:13'),
(65, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 46, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Management of technical vulnerabilities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:49:15', '2024-06-27 10:49:15'),
(66, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 47, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Capacity management\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:49:16', '2024-06-27 10:49:16'),
(67, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 48, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Secure authentication\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:49:16', '2024-06-27 10:49:16'),
(68, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 49, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Access to source code\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:49:17', '2024-06-27 10:49:17'),
(69, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 50, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information access restriction\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:49:17', '2024-06-27 10:49:17'),
(70, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 51, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"User end point devices\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:49:18', '2024-06-27 10:49:18'),
(71, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 52, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Secure disposal or re-use of equipment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:49:19', '2024-06-27 10:49:19'),
(72, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 53, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Determining the scope of the information security management system\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:12', '2024-06-27 10:51:12'),
(73, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 54, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Leadership and commitment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:16', '2024-06-27 10:51:16'),
(74, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 55, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information security management system\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:16', '2024-06-27 10:51:16'),
(75, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 56, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information Security Policy\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:16', '2024-06-27 10:51:16'),
(76, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 57, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"When planning for the information security management system, the organization shall consider the issues and determine the risks and opportunities that need to be addressed to : 6.1.1(a),6.1.1(b),6.1.1(c),6.1.1(d).6.1.1(e)\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:21', '2024-06-27 10:51:21'),
(77, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 58, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information security risk treatment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:24', '2024-06-27 10:51:24'),
(78, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 59, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information security risk assessment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:24', '2024-06-27 10:51:24'),
(79, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 60, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Planning of changes\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:24', '2024-06-27 10:51:24'),
(80, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 61, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information security objectives and planning to achieve them\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:24', '2024-06-27 10:51:24'),
(81, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 62, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Resources - The organization shall determine and provide the resources needed for the establishment, implementation, maintenance and continual improvement of the information security management system.\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:25', '2024-06-27 10:51:25'),
(82, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 63, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Competence\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:26', '2024-06-27 10:51:26'),
(83, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 64, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Awareness\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:26', '2024-06-27 10:51:26'),
(84, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 65, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Communication\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:27', '2024-06-27 10:51:27'),
(85, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 66, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Documented information\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:27', '2024-06-27 10:51:27'),
(86, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 67, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"The organization\\u2019s information security management system shall include documented information and documented information necessrary for the effectiveness of the information security management system.\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:33', '2024-06-27 10:51:33'),
(87, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 68, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Creating and updating - creating and updating documented information to ensure 7.5.2(a),7.5.2(b),7.5.2(c)\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:36', '2024-06-27 10:51:36'),
(88, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 69, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Control of documented information\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:42', '2024-06-27 10:51:42'),
(89, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 70, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Operational planning and control\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:42', '2024-06-27 10:51:42'),
(90, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 71, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information security risk assessment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:43', '2024-06-27 10:51:43'),
(91, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 72, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Monitoring, measurement, analysis and evaluation\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:44', '2024-06-27 10:51:44'),
(92, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 73, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Internal audit\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:45', '2024-06-27 10:51:45'),
(93, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 74, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Internal audit programme\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:46', '2024-06-27 10:51:46'),
(94, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 75, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"The organization shall conduct internal audits at planned intervals\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:47', '2024-06-27 10:51:47'),
(95, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 76, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Top management shall review the organization\'s information security management system at planned intervals to ensure its continuing suitability, adequacy and effectiveness.\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:49', '2024-06-27 10:51:49'),
(96, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 77, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information security risk treatment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:53', '2024-06-27 10:51:53'),
(97, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 78, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Management review inputs\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:54', '2024-06-27 10:51:54'),
(98, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 79, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Management review results\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:55', '2024-06-27 10:51:55'),
(99, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 80, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Continual improvement\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:55', '2024-06-27 10:51:55'),
(100, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 81, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Nonconformity and corrective actio\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:51:59', '2024-06-27 10:51:59'),
(101, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 82, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Policies for information security - Information security policy and topic-specific policies shall be defined, approved by management, published, communicated to and acknowledged by relevant personnel and relevant interested parties, and reviewed at planned intervals and if significant changes occur.\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:52:00', '2024-06-27 10:52:00'),
(102, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 83, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information security roles and responsibilities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:52:00', '2024-06-27 10:52:00'),
(103, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 84, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Management responsibilities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:52:01', '2024-06-27 10:52:01'),
(104, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 85, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Segregation of duties\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:52:03', '2024-06-27 10:52:03'),
(105, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 86, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Contact with authorities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:52:03', '2024-06-27 10:52:03'),
(106, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 87, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Contact with special interest groups\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:52:03', '2024-06-27 10:52:03'),
(107, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 88, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Threat intelligence\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:52:03', '2024-06-27 10:52:03'),
(108, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 89, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information security in project management\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:52:04', '2024-06-27 10:52:04'),
(109, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 90, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Inventory of information and other associated assets\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:52:05', '2024-06-27 10:52:05'),
(110, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 91, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Return of assets\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:27', '2024-06-27 10:53:27'),
(111, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 92, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Classification of information\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:27', '2024-06-27 10:53:27'),
(112, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 93, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information transfer\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:29', '2024-06-27 10:53:29'),
(113, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 94, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Access control\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:30', '2024-06-27 10:53:30'),
(114, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 95, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Identity management\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:31', '2024-06-27 10:53:31'),
(115, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 96, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Labelling of information\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:32', '2024-06-27 10:53:32'),
(116, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 97, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Authentication information\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:34', '2024-06-27 10:53:34'),
(117, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 98, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Access rights\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:34', '2024-06-27 10:53:34'),
(118, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 99, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Addressing information security within supplier agreements\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:35', '2024-06-27 10:53:35'),
(119, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 100, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Managing information security in the information and communication technology (ICT) supply chain\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:36', '2024-06-27 10:53:36'),
(120, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 101, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Monitoring, review and change management of supplier services\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:37', '2024-06-27 10:53:37'),
(121, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 102, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information security in supplier relationships\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:39', '2024-06-27 10:53:39'),
(122, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 103, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information security for use of cloud services\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:39', '2024-06-27 10:53:39'),
(123, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 104, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information security incident management planning and preparation\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:42', '2024-06-27 10:53:42'),
(124, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 105, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"A.5.25 Assessment and decision on information security events\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:43', '2024-06-27 10:53:43'),
(125, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 106, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Learning from information security incidents\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:44', '2024-06-27 10:53:44'),
(126, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 107, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Collection of evidence\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:44', '2024-06-27 10:53:44'),
(127, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 108, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information security during disruption\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:45', '2024-06-27 10:53:45'),
(128, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 109, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"ICT readiness for business continuity\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:46', '2024-06-27 10:53:46'),
(129, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 110, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Legal, statutory, regulatory and contractual requirements\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:47', '2024-06-27 10:53:47'),
(130, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 111, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Intellectual property rights\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:47', '2024-06-27 10:53:47'),
(131, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 112, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Protection of records\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:48', '2024-06-27 10:53:48'),
(132, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 113, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Privacy and protection of personal identifiable information (PII)\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:53:48', '2024-06-27 10:53:48'),
(133, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 114, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Cabling security\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:54:06', '2024-06-27 10:54:06'),
(134, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 115, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Equipment maintenance\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:54:07', '2024-06-27 10:54:07'),
(135, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 116, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Supporting utilities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:54:07', '2024-06-27 10:54:07'),
(136, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 117, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Security of assets off-premises\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:54:08', '2024-06-27 10:54:08');
INSERT INTO `activity_log` (`id`, `log_name`, `description`, `subject_type`, `event`, `subject_id`, `causer_type`, `causer_id`, `properties`, `batch_uuid`, `created_at`, `updated_at`) VALUES
(137, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 118, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Working in secure areas\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:54:09', '2024-06-27 10:54:09'),
(138, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 119, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Privileged access rights\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:56:50', '2024-06-27 10:56:50'),
(139, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 120, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Storage media\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:56:51', '2024-06-27 10:56:51'),
(140, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 121, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Equipment siting and protection\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:56:52', '2024-06-27 10:56:52'),
(141, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 122, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Clear desk and clear screen\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:56:52', '2024-06-27 10:56:52'),
(142, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 123, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Terms and conditions of employment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:57:23', '2024-06-27 10:57:23'),
(143, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 124, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Screening\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:57:23', '2024-06-27 10:57:23'),
(144, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 125, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Documented operating procedures\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:57:23', '2024-06-27 10:57:23'),
(145, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 126, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Disciplinary process\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:57:24', '2024-06-27 10:57:24'),
(146, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 127, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information security awareness, education and training\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:57:25', '2024-06-27 10:57:25'),
(147, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 128, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Responsibilities after termination or change of employment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:57:26', '2024-06-27 10:57:26'),
(148, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 129, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Confidentiality or non-disclosure agreements\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:57:27', '2024-06-27 10:57:27'),
(149, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 130, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Remote working\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:57:28', '2024-06-27 10:57:28'),
(150, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 131, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"GDPR\",\"provisions.provisions\":\"Information security event reporting\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-06-27 10:57:28', '2024-06-27 10:57:28'),
(151, 'User', 'created', 'App\\Models\\User', 'created', 2, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Organization\",\"email\":\"org@grc.com\",\"user_contact_no\":\"123456789\",\"designation_id\":1,\"department_id\":1,\"user_profile_pic\":null,\"user_remark\":null,\"updatedBy.name\":\"Admin\"}}', NULL, '2024-07-03 13:40:22', '2024-07-03 13:40:22'),
(152, 'User', 'created', 'App\\Models\\User', 'created', 3, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Alok\",\"email\":\"alok@upskillfinder\",\"user_contact_no\":\"123456789\",\"designation_id\":1,\"department_id\":1,\"user_profile_pic\":null,\"user_remark\":null,\"updatedBy.name\":\"Admin\"}}', NULL, '2024-07-03 13:46:24', '2024-07-03 13:46:24'),
(153, 'organization', 'created', 'App\\Models\\Organization', 'created', 6, 'App\\Models\\User', 2, '{\"attributes\":{\"name\":\"upskillfinder\",\"legal_name\":\"upskill\",\"url\":\"https:\\/\\/upskillfinder.com\",\"securityOfficer.name\":\"Alok\",\"address\":\"delhi\",\"logo_path\":null,\"createdBy.name\":\"Organization\",\"updatedBy.name\":\"Organization\"}}', NULL, '2024-07-03 13:46:59', '2024-07-03 13:46:59'),
(154, 'User', 'created', 'App\\Models\\User', 'created', 4, NULL, NULL, '{\"attributes\":{\"name\":\"Kaylee Koch IV\",\"email\":\"scummerata@example.net\",\"user_contact_no\":null,\"designation_id\":null,\"department_id\":null,\"user_profile_pic\":null,\"user_remark\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 06:45:07', '2024-07-15 06:45:07'),
(155, 'User', 'created', 'App\\Models\\User', 'created', 5, NULL, NULL, '{\"attributes\":{\"name\":\"Dr. Leopoldo Harber\",\"email\":\"lenna73@example.org\",\"user_contact_no\":null,\"designation_id\":null,\"department_id\":null,\"user_profile_pic\":null,\"user_remark\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 06:45:07', '2024-07-15 06:45:07'),
(156, 'User', 'created', 'App\\Models\\User', 'created', 6, NULL, NULL, '{\"attributes\":{\"name\":\"Malinda Sawayn Jr.\",\"email\":\"marc99@example.net\",\"user_contact_no\":null,\"designation_id\":null,\"department_id\":null,\"user_profile_pic\":null,\"user_remark\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 06:45:07', '2024-07-15 06:45:07'),
(157, 'User', 'created', 'App\\Models\\User', 'created', 7, NULL, NULL, '{\"attributes\":{\"name\":\"Dr. Damion Barton Sr.\",\"email\":\"ewell20@example.net\",\"user_contact_no\":null,\"designation_id\":null,\"department_id\":null,\"user_profile_pic\":null,\"user_remark\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 06:45:07', '2024-07-15 06:45:07'),
(158, 'User', 'created', 'App\\Models\\User', 'created', 8, NULL, NULL, '{\"attributes\":{\"name\":\"Colby Ernser\",\"email\":\"eldred44@example.net\",\"user_contact_no\":null,\"designation_id\":null,\"department_id\":null,\"user_profile_pic\":null,\"user_remark\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 06:45:07', '2024-07-15 06:45:07'),
(159, 'User', 'created', 'App\\Models\\User', 'created', 9, NULL, NULL, '{\"attributes\":{\"name\":\"Tavares Will\",\"email\":\"ygottlieb@example.org\",\"user_contact_no\":null,\"designation_id\":null,\"department_id\":null,\"user_profile_pic\":null,\"user_remark\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 06:45:31', '2024-07-15 06:45:31'),
(160, 'User', 'created', 'App\\Models\\User', 'created', 10, NULL, NULL, '{\"attributes\":{\"name\":\"Dagmar Kulas MD\",\"email\":\"green.ali@example.com\",\"user_contact_no\":null,\"designation_id\":null,\"department_id\":null,\"user_profile_pic\":null,\"user_remark\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 06:45:31', '2024-07-15 06:45:31'),
(161, 'User', 'created', 'App\\Models\\User', 'created', 11, NULL, NULL, '{\"attributes\":{\"name\":\"Prof. Rowena Bruen\",\"email\":\"vkuhic@example.org\",\"user_contact_no\":null,\"designation_id\":null,\"department_id\":null,\"user_profile_pic\":null,\"user_remark\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 06:45:31', '2024-07-15 06:45:31'),
(162, 'User', 'created', 'App\\Models\\User', 'created', 12, NULL, NULL, '{\"attributes\":{\"name\":\"Evert Upton\",\"email\":\"bert75@example.org\",\"user_contact_no\":null,\"designation_id\":null,\"department_id\":null,\"user_profile_pic\":null,\"user_remark\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 06:45:31', '2024-07-15 06:45:31'),
(163, 'User', 'created', 'App\\Models\\User', 'created', 13, NULL, NULL, '{\"attributes\":{\"name\":\"Zechariah McClure\",\"email\":\"mossie89@example.net\",\"user_contact_no\":null,\"designation_id\":null,\"department_id\":null,\"user_profile_pic\":null,\"user_remark\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 06:45:31', '2024-07-15 06:45:31'),
(164, 'Evidence', 'created', 'App\\Models\\Evidence', 'created', 328, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Requirements for Shared Hosting Providers\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-07-15 07:09:45', '2024-07-15 07:09:45'),
(165, 'Evidence', 'created', 'App\\Models\\Evidence', 'created', 329, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Evidence to validate Monitoring and Controlling Access to Data\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-07-15 07:16:15', '2024-07-15 07:16:15'),
(166, 'Evidence', 'created', 'App\\Models\\Evidence', 'created', 330, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Evidence to validate the Responsibilities for Documentation of Security Incident Response Procedures\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-07-15 07:16:57', '2024-07-15 07:16:57'),
(167, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 132, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Control of documented information\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 07:39:11', '2024-07-15 07:39:11'),
(168, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 133, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Operational planning and control\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 07:40:57', '2024-07-15 07:40:57'),
(169, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 134, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information security risk assessment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 07:42:10', '2024-07-15 07:42:10'),
(170, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 135, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information security risk treatment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 07:43:04', '2024-07-15 07:43:04'),
(171, 'Framework-Provision', 'deleted', 'App\\Models\\FrameworkProvision', 'deleted', 135, 'App\\Models\\User', 1, '{\"old\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information security risk treatment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 07:43:05', '2024-07-15 07:43:05'),
(172, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 136, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information security risk treatment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 07:43:08', '2024-07-15 07:43:08'),
(173, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 137, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Monitoring, measurement, analysis and evaluation\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 07:44:22', '2024-07-15 07:44:22'),
(174, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 138, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Internal audit\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 07:50:33', '2024-07-15 07:50:33'),
(175, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 139, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"The organization shall conduct internal audits at planned intervals\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 07:52:03', '2024-07-15 07:52:03'),
(176, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 140, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Internal audit programme\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 07:52:56', '2024-07-15 07:52:56'),
(177, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 141, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Top management shall review the organization\'s information security management system at planned intervals to ensure its continuing suitability, adequacy and effectiveness.\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 07:53:39', '2024-07-15 07:53:39'),
(178, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 142, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Management review inputs\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 07:54:20', '2024-07-15 07:54:20'),
(179, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 143, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Management review results\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 07:54:58', '2024-07-15 07:54:58'),
(180, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 144, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Continual improvement\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 07:55:54', '2024-07-15 07:55:54'),
(181, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 145, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Nonconformity and corrective actio\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 07:57:54', '2024-07-15 07:57:54'),
(182, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 146, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Policies for information security - Information security policy and topic-specific policies shall be defined, approved by management, published, communicated to and acknowledged by relevant personnel and relevant interested parties, and reviewed at planned intervals and if significant changes occur.\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:03:08', '2024-07-15 08:03:08'),
(183, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 147, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information security roles and responsibilities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:03:52', '2024-07-15 08:03:52'),
(184, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 148, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Segregation of duties\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:04:19', '2024-07-15 08:04:19'),
(185, 'Provision', 'updated', 'App\\Models\\Provision', 'updated', 33, 'App\\Models\\User', 1, '{\"attributes\":{\"provisions\":\"Nonconformity and corrective action\"},\"old\":{\"provisions\":\"Nonconformity and corrective actio\"}}', NULL, '2024-07-15 08:05:02', '2024-07-15 08:05:02'),
(186, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 149, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Management responsibilities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:05:22', '2024-07-15 08:05:22'),
(187, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 150, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Contact with authorities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:06:19', '2024-07-15 08:06:19'),
(188, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 151, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Contact with special interest groups\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:06:54', '2024-07-15 08:06:54'),
(189, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 152, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Threat intelligence\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:07:00', '2024-07-15 08:07:00'),
(190, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 153, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information security in project management\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:07:24', '2024-07-15 08:07:24'),
(191, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 154, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Inventory of information and other associated assets\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:07:28', '2024-07-15 08:07:28'),
(192, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 155, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Acceptable use of information and other associated assets\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:08:45', '2024-07-15 08:08:45'),
(193, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 156, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Return of assets\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:08:46', '2024-07-15 08:08:46'),
(194, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 157, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Classification of information\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:10:04', '2024-07-15 08:10:04'),
(195, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 158, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Labelling of information\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:10:05', '2024-07-15 08:10:05'),
(196, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 159, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information transfer\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:16:12', '2024-07-15 08:16:12'),
(197, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 160, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Access control\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:16:14', '2024-07-15 08:16:14'),
(198, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 161, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Identity management\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:19:34', '2024-07-15 08:19:34'),
(199, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 162, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Authentication information\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:19:36', '2024-07-15 08:19:36'),
(200, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 163, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Access rights\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:19:42', '2024-07-15 08:19:42'),
(201, 'Framework', 'updated', 'App\\Models\\Framework', 'updated', 5, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":\"0\"},\"old\":{\"status\":\"1\"}}', NULL, '2024-07-15 08:28:00', '2024-07-15 08:28:00'),
(202, 'Framework', 'updated', 'App\\Models\\Framework', 'updated', 4, 'App\\Models\\User', 1, '{\"attributes\":{\"status\":\"0\"},\"old\":{\"status\":\"1\"}}', NULL, '2024-07-15 08:28:11', '2024-07-15 08:28:11'),
(203, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 164, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information security in supplier relationships\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:31:14', '2024-07-15 08:31:14'),
(204, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 165, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Addressing information security within supplier agreements\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:31:16', '2024-07-15 08:31:16'),
(205, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 166, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Managing information security in the information and communication technology (ICT) supply chain\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:31:18', '2024-07-15 08:31:18'),
(206, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 167, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Monitoring, review and change management of supplier services\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:32:48', '2024-07-15 08:32:48'),
(207, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 168, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information security for use of cloud services\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:32:49', '2024-07-15 08:32:49'),
(208, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 169, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information security incident management planning and preparation\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:32:56', '2024-07-15 08:32:56'),
(209, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 170, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"A.5.25 Assessment and decision on information security events\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:34:07', '2024-07-15 08:34:07'),
(210, 'Framework-Provision', 'deleted', 'App\\Models\\FrameworkProvision', 'deleted', 170, 'App\\Models\\User', 1, '{\"old\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"A.5.25 Assessment and decision on information security events\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:34:08', '2024-07-15 08:34:08'),
(211, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 171, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"A.5.25 Assessment and decision on information security events\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:34:10', '2024-07-15 08:34:10'),
(212, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 172, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Response to information security incidents\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:34:12', '2024-07-15 08:34:12'),
(213, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 173, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Learning from information security incidents\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:34:13', '2024-07-15 08:34:13'),
(214, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 174, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Collection of evidence\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:39:42', '2024-07-15 08:39:42'),
(215, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 175, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information security during disruption\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:39:43', '2024-07-15 08:39:43'),
(216, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 176, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"ICT readiness for business continuity\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:39:44', '2024-07-15 08:39:44'),
(217, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 177, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Legal, statutory, regulatory and contractual requirements\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:42:54', '2024-07-15 08:42:54'),
(218, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 178, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Intellectual property rights\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:42:54', '2024-07-15 08:42:54'),
(219, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 179, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Protection of records\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:42:55', '2024-07-15 08:42:55'),
(220, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 180, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Privacy and protection of personal identifiable information (PII)\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:45:29', '2024-07-15 08:45:29'),
(221, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 181, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Independent review of information security\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:45:29', '2024-07-15 08:45:29'),
(222, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 182, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Compliance with policies, rules and standards for information security\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:45:30', '2024-07-15 08:45:30'),
(223, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 183, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Documented operating procedures\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:47:21', '2024-07-15 08:47:21'),
(224, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 184, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Screening\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:47:22', '2024-07-15 08:47:22'),
(225, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 185, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Terms and conditions of employment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:47:22', '2024-07-15 08:47:22'),
(226, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 186, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information security awareness, education and training\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:49:13', '2024-07-15 08:49:13'),
(227, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 187, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Disciplinary process\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:49:16', '2024-07-15 08:49:16'),
(228, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 188, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Responsibilities after termination or change of employment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:49:18', '2024-07-15 08:49:18'),
(229, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 189, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Confidentiality or non-disclosure agreements\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:51:17', '2024-07-15 08:51:17'),
(230, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 190, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Remote working\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:51:18', '2024-07-15 08:51:18'),
(231, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 191, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information security event reporting\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:51:18', '2024-07-15 08:51:18'),
(232, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 192, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Physical security perimeters\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:54:00', '2024-07-15 08:54:00'),
(233, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 193, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Physical entry\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:54:01', '2024-07-15 08:54:01'),
(234, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 194, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Securing offices, rooms and facilities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:54:03', '2024-07-15 08:54:03'),
(235, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 195, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Physical security monitoring\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:56:01', '2024-07-15 08:56:01'),
(236, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 196, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Protecting against physical and environmental threat\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:56:03', '2024-07-15 08:56:03'),
(237, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 197, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Working in secure areas\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:56:05', '2024-07-15 08:56:05'),
(238, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 198, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Clear desk and clear screen\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:58:03', '2024-07-15 08:58:03'),
(239, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 199, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Equipment siting and protection\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:58:03', '2024-07-15 08:58:03'),
(240, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 200, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Security of assets off-premises\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:58:04', '2024-07-15 08:58:04'),
(241, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 201, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Storage media\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:59:40', '2024-07-15 08:59:40'),
(242, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 202, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Supporting utilities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:59:40', '2024-07-15 08:59:40'),
(243, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 203, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Cabling security\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 08:59:42', '2024-07-15 08:59:42'),
(244, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 204, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Equipment maintenance\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 09:02:19', '2024-07-15 09:02:19'),
(245, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 205, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Secure disposal or re-use of equipment\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 09:02:20', '2024-07-15 09:02:20'),
(246, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 206, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"User end point devices\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 09:02:21', '2024-07-15 09:02:21'),
(247, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 207, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Privileged access rights\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 09:16:24', '2024-07-15 09:16:24'),
(248, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 208, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information access restriction\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 09:16:25', '2024-07-15 09:16:25'),
(249, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 209, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Access to source code\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 09:16:25', '2024-07-15 09:16:25'),
(250, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 210, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Secure authentication\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 09:17:35', '2024-07-15 09:17:35'),
(251, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 211, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Capacity management\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 09:17:36', '2024-07-15 09:17:36'),
(252, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 212, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Protection against malwar\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 09:17:37', '2024-07-15 09:17:37'),
(253, 'Control Code', 'created', 'App\\Models\\ControlCode', 'created', 395, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Malicious Code Protection (Anti-Malware)\",\"code\":\"END-04\",\"description\":\"Mechanisms exist to utilize antimalware technologies to detect and eradicate malicious code.\",\"control_weight\":null,\"controlDomain.name\":\"Endpoint Security\",\"functionalGroup.name\":\"Detect\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-07-15 10:54:56', '2024-07-15 10:54:56'),
(254, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 213, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Management of technical vulnerabilities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:00:06', '2024-07-15 11:00:06'),
(255, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 214, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Configuration management\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:00:07', '2024-07-15 11:00:07'),
(256, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 215, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information deletion\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:00:08', '2024-07-15 11:00:08'),
(257, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 216, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Data masking\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:02:04', '2024-07-15 11:02:04'),
(258, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 217, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Data leakage prevention\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:02:05', '2024-07-15 11:02:05'),
(259, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 218, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Information backup\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:02:08', '2024-07-15 11:02:08'),
(260, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 219, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Redundancy of information processing facilities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:02:58', '2024-07-15 11:02:58'),
(261, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 220, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Logging\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:03:00', '2024-07-15 11:03:00'),
(262, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 221, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Monitoring activities\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:03:00', '2024-07-15 11:03:00'),
(263, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 222, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Clock synchronization\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:05:43', '2024-07-15 11:05:43'),
(264, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 223, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Use of privileged utility programs\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:05:44', '2024-07-15 11:05:44'),
(265, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 224, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Installation of software on operational systems\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:05:45', '2024-07-15 11:05:45'),
(266, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 225, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Networks security\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:05:45', '2024-07-15 11:05:45'),
(267, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 226, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Security of network services\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:05:46', '2024-07-15 11:05:46'),
(268, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 227, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Web filtering\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:12:06', '2024-07-15 11:12:06'),
(269, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 228, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Segregation of networks\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:12:07', '2024-07-15 11:12:07'),
(270, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 229, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Use of cryptography\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:12:07', '2024-07-15 11:12:07'),
(271, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 230, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Segregation of networks\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:12:07', '2024-07-15 11:12:07'),
(272, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 231, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Application security requirements\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:12:07', '2024-07-15 11:12:07'),
(273, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 232, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Segregation of networks\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:12:07', '2024-07-15 11:12:07'),
(274, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 233, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Segregation of networks\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:12:07', '2024-07-15 11:12:07'),
(275, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 234, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Web filtering\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:12:07', '2024-07-15 11:12:07'),
(276, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 235, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Secure development life cycle\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:12:39', '2024-07-15 11:12:39'),
(277, 'Framework-Provision', 'created', 'App\\Models\\FrameworkProvision', 'created', 236, 'App\\Models\\User', 1, '{\"attributes\":{\"frameworks.name\":\"ISO 2022\",\"provisions.provisions\":\"Secure development life cycle\",\"createdBy.name\":null,\"updatedBy.name\":null}}', NULL, '2024-07-15 11:12:40', '2024-07-15 11:12:40');

-- --------------------------------------------------------

--
-- Table structure for table `assetcategories`
--

CREATE TABLE `assetcategories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `assetcriticalities`
--

CREATE TABLE `assetcriticalities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `assetlocations`
--

CREATE TABLE `assetlocations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `assetmanagements`
--

CREATE TABLE `assetmanagements` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `catgory_id` bigint(20) UNSIGNED NOT NULL,
  `subcategory_id` bigint(20) UNSIGNED NOT NULL,
  `description` mediumtext NOT NULL,
  `department` bigint(20) UNSIGNED NOT NULL,
  `owner` varchar(255) NOT NULL,
  `location` bigint(20) UNSIGNED NOT NULL,
  `value` decimal(4,2) NOT NULL,
  `currentvalue` decimal(4,2) NOT NULL,
  `purchasedate` date NOT NULL,
  `criticalilty` bigint(20) UNSIGNED NOT NULL,
  `vendor_id` bigint(20) UNSIGNED NOT NULL,
  `serialnumber` varchar(255) NOT NULL,
  `warranty_information` mediumtext NOT NULL,
  `warranty_history` mediumtext NOT NULL,
  `notes` mediumtext NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `assetsubcategories`
--

CREATE TABLE `assetsubcategories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `asset_categoryid` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `assetvendors`
--

CREATE TABLE `assetvendors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `contactno` varchar(255) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `business_name` varchar(255) NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `control_codes`
--

CREATE TABLE `control_codes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `control_weight` int(11) DEFAULT NULL,
  `control_domain_id` bigint(20) UNSIGNED DEFAULT NULL,
  `functional_group_id` bigint(20) UNSIGNED DEFAULT NULL,
  `description` mediumtext DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `control_codes`
--

INSERT INTO `control_codes` (`id`, `name`, `code`, `control_weight`, `control_domain_id`, `functional_group_id`, `description`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'Developer Threat Analysis & Flaw Remediation', 'TDA-15', 9, 27, 1, 'Developer Threat Analysis & Flaw Remediation', 1, 1, NULL, NULL),
(2, 'Secure Migration Practices', 'TDA-08.1', 8, 27, 1, 'Mechanisms exist to ensure secure migration practices purge systems, applications and services of test/development/staging data and accounts before it is migrated into a production environment.', 1, 1, NULL, NULL),
(3, 'Independent Penetration Agent or Team', 'VPM-07.1', 6, 30, 2, 'Mechanisms exist to utilize an independent assessor or penetration team to perform penetration testing.', 1, 1, NULL, NULL),
(4, 'Acquisition Strategies, Tools & Methods', 'TPM-03.1', 9, 28, 3, 'DescriptionMechanisms exist to utilize tailored acquisition strategies, contract tools and procurement methods for the purchase of unique systems, system components or services.', 1, 1, NULL, NULL),
(5, 'Third-Party Processing, Storage and Service Locations', 'TPM-04.4', 10, 28, 3, 'Mechanisms exist to restrict the location of information processing/storage based on business requirements.', 1, 1, NULL, NULL),
(6, 'Third-Party Criticality Assessments', 'TPM-02', 9, 28, 3, 'Mechanisms exist to identify, prioritize and assess suppliers and partners of critical systems, components and services using a supply chain risk assessment process relative to their importance in supporting the delivery of high-value services.', 1, 1, NULL, NULL),
(7, 'Application Penetration Testing', 'TDA-09.5', 9, 27, 2, 'Mechanisms exist to perform application-level penetration testing of custom-made applications and services.', 1, 1, NULL, NULL),
(8, 'Dynamic Code Analysis', 'TDA-09.3', 9, 27, 2, 'Mechanisms exist to require the developers of systems, system components or services to employ dynamic code analysis tools to identify and remediate common flaws and document the results of the analysis.', 1, 1, NULL, NULL),
(9, 'Privileged Users', 'SAT-03.5', 9, 25, 1, 'Mechanisms exist to provide specific training for privileged users to ensure privileged users understand their unique roles and responsibilities', 1, 1, NULL, NULL),
(10, 'Notification of Disclosure Request To Data Subject', 'PRI-14.2', 5, 20, 3, 'Mechanisms exist to notify data subjects of applicable legal requests to disclose Personal Data (PD).', 1, 1, NULL, NULL),
(11, 'Suspicious Communication & Anomalous System Behaviour', 'SAT-03.2', 9, 25, 1, 'Mechanisms exist to provide training to personnel on organization-defined indicators of malware to recognize suspicious communications and anomalous behavior.', 1, 1, NULL, NULL),
(12, 'Data Subject Communications', 'PRI-17', 6, 20, 1, 'Mechanisms exist to restrict the location of information processing/storage based on business requirements.', 1, 1, NULL, NULL),
(13, 'Criticality Analysis', 'TDA-06.1', 9, 27, 1, 'Mechanisms exist to require the developer of the system, system component or service to perform a criticality analysis at organization-defined decision points in the Secure Development Life Cycle (SDLC).', 1, 1, NULL, NULL),
(14, 'Accounting of Disclosures', 'PRI-14.1', 8, 20, 3, 'Mechanisms exist to develop and maintain an accounting of disclosures of Personal Data (PD) held by the organization and make the accounting of disclosures available to the person named in the record, upon request.', 1, 1, NULL, NULL),
(15, 'Security & Privacy Requirements Definition', 'PRM-05', 8, 21, 3, 'Mechanisms exist to develop and maintain an accounting of disclosures of Personal Data (PD) held by the organization and make the accounting of disclosures available to the person named in the record, upon request.', 1, 1, NULL, NULL),
(16, 'Updating Personal Data (PD)', 'PRI-12', 9, 20, 3, 'Mechanisms exist to develop processes to identify and record the method under which Personal Data (PD) is updated and the frequency that such updates occur.', 1, 1, NULL, NULL),
(17, 'Cyber Threat Environment', 'SAT-03.6', 8, 25, 3, 'Mechanisms exist to provide role-based cybersecurity and privacy awareness training that is specific to the cyber threats that the user might encounter the user\'s specific day-to-day business operations.', 1, 1, NULL, NULL),
(18, 'Social Engineering & Mining', 'SAT-02.2', 5, 25, 1, 'Mechanisms exist to include awareness training on recognizing and reporting potential and actual instances of social engineering and social mining.', 1, 1, NULL, NULL),
(19, 'Right to Erasure', 'PRI-06.5', 5, 20, 4, 'Mechanisms exist to erase personal data of an individual, without delay.', 1, 1, NULL, NULL),
(20, 'Reject Unauthorized Disclosure Requests', 'PRI-07.4', 5, 20, 3, 'Mechanisms exist to reject unauthorized disclosure requests.', 1, 1, NULL, NULL),
(21, 'Personal Data Lineage', 'PRI-09', 5, 20, 3, 'Mechanisms exist to utilize a record of processing activities to maintain a record of Personal Data (PD) that is stored, transmitted and/or processed under the organization\'s responsibility.', 1, 1, NULL, NULL),
(22, 'Personal Data Exportability', 'PRI-06.7', 5, 20, 3, 'Mechanisms exist to digitally export Personal Data (PD) in a secure manner upon request by the data subject.', 1, 1, NULL, NULL),
(23, 'Notice of Correction or Processing Change', 'PRI-06.2', 4, 20, 4, 'Mechanisms exist to notify affected individuals if their Personal Data (PD) has been corrected or amended.', 1, 1, NULL, NULL),
(24, 'Joint Processing of Personal Data', 'PRI-07.2', 5, 20, 3, 'Mechanisms exist to clearly define and communicate the organization\'s role in processing Personal Data (PD) in the data processing ecosystem.', 1, 1, NULL, NULL),
(25, 'Obligation To Inform Third-Parties', 'PRI-07.3', 5, 20, 3, 'Mechanisms exist to inform applicable third-parties to any modification, deletion or other change that affects shared Personal Data (PD).', 1, 1, NULL, NULL),
(26, 'Correcting Inaccurate Personal Data', 'PRI-06.1', 5, 20, 4, 'Mechanisms exist to establish and implement a process for: ▪ Individuals to have inaccurate Personal Data (PD) maintained by the organization corrected or amended; and ▪ Disseminating corrections or amendments of PD to other authorized users of the PD.', 1, 1, NULL, NULL),
(27, 'Data Quality Management', 'PRI-10', 5, 20, 3, 'Mechanisms exist to issue guidelines ensuring and maximizing the quality, utility, objectivity, integrity, impact determination and de-identification of Personal Data (PD) across the information lifecycle.', 1, 1, NULL, NULL),
(28, 'Data Subject Access', 'PRI-06', 6, 20, 3, 'Mechanisms exist to provide individuals the ability to access their Personal Data (PD) maintained in organizational systems of records.', 1, 1, NULL, NULL),
(29, 'Active Participation By Data Subjects', 'PRI-03.7', 3, 20, 1, 'Mechanisms exist to compel data subjects to select the level of consent deemed appropriate by the data subject for the relevant business purpose (e.g., opt-in, opt-out, accept all cookies, etc.).', 1, 1, NULL, NULL),
(30, 'Personal Data Accuracy & Integrity', 'PRI-05.2', 5, 20, 3, 'Mechanisms exist to confirm the accuracy and relevance of Personal Data (PD) throughout the information lifecycle', 1, 1, NULL, NULL),
(31, 'Purpose Specification', 'PRI-02.1', 7, 20, 3, 'Mechanisms exist to identify and document the purpose(s) for which Personal Data (PD) is collected, used, maintained and shared in its privacy notices.', 1, 1, NULL, NULL),
(32, 'Tailored Consent', 'PRI-03.1', 1, 20, 3, 'Mechanisms exist to allow data subjects to modify the use permissions to selected attributes of their Personal Data (PD).', 1, 1, NULL, NULL),
(33, 'Just-In-Time Notice & Updated Consent', 'PRI-03.2', 1, 20, 3, 'Mechanisms exist to present authorizations to process Personal Data (PD) in conjunction with the data action, when:\r\n▪ The original circumstances under which an individual gave consent have changed; or\r\n▪ A significant amount of time has passed since an individual gave consent.\r', 1, 1, NULL, NULL),
(34, 'Authority To Collect, Use, Maintain & Share Personal Data (PD)', 'PRI-04.1', 7, 20, 3, 'Mechanisms exist to determine and document the legal authority that permits the collection, use, maintenance and sharing of Personal Data (PD), either generally or in support of a specific program or system need.', 1, 1, NULL, NULL),
(35, 'Automated Data Management Processes', 'PRI-02.2', 1, 20, 3, 'Automated mechanisms exist to adjust data that is able to be collected, created, used, disseminated, maintained, retained and/or disclosed, based on updated data subject authorization(s).', 1, 1, NULL, NULL),
(36, 'Privacy Notice', 'PRI-02', 7, 20, 3, 'Mechanisms exist to:\r\n▪ Make privacy notice(s) available to individuals upon first interacting with an organization and subsequently as necessary;\r\n▪ Ensure that privacy notices are clear and easy-to-understand, expressing information about Personal Data (PD) processing in plain language that meet all legal obligations; and\r\n▪ Define the scope of PD processing activities, including the geographic locations and third-party recipients that process the PD within the scope of the privacy notice', 1, 1, NULL, NULL),
(37, 'De-Identify Dataset Upon Collection', 'DCH-23.1', 8, 11, 1, 'Mechanisms exist to de-identify the dataset upon collection by not collecting Personal Data (PD).', 1, 1, NULL, NULL),
(38, 'End-User Messaging Technologies', 'NET-12.2', 9, 18, 1, 'Mechanisms exist to prohibit the transmission of unprotected sensitive/regulated data by end-user messaging technologies.', 1, 1, NULL, NULL),
(39, 'De-Identification (Anonymization)', 'NET-08', 8, 11, 1, 'Mechanisms exist to anonymize data by removing Personal Data (PD) from datasets', 1, 1, NULL, NULL),
(40, 'Network Intrusion Detection / Prevention Systems (NIDS / NIPS)', 'NET-08', 9, 18, 1, 'Mechanisms exist to employ Network Intrusion Detection / Prevention Systems (NIDS/NIPS) to detect and/or prevent intrusions into the network.', 1, 1, NULL, NULL),
(41, 'Limit Network Connections', 'NET-03.1', 9, 18, 1, 'Mechanisms exist to limit the number of concurrent external network connections to its systems.', 1, 1, NULL, NULL),
(42, 'Dissemination of Privacy Program Information', 'PRI-01.3', 5, 20, 3, 'Ensure that the public has access to information about organizational privacy activities and can communicate with its Chief Privacy Officer (CPO) or similar role; ▪ Ensure that organizational privacy practices are publicly available through organizational websites or otherwise; and ▪ Utilize publicly facing email addresses and/or phone lines to enable the public to provide feedback and/or direct questions to privacy offices regarding privacy practices.', 1, 1, NULL, NULL),
(43, 'Regulatory & Law Enforcement Contacts', 'IRO-14', 9, 15, 3, 'Mechanisms exist to maintain incident response contacts with applicable regulatory and law enforcement agencies.', 1, 1, NULL, NULL),
(44, 'Removal, Masking, Encryption, Hashing or Replacement of Direct Identifiers', 'DCH-23.4', 8, 11, 1, 'Mechanisms exist to remove, mask, encrypt, hash or replace direct identifiers in a dataset.', 1, 1, NULL, NULL),
(45, 'Temporary Files Containing Personal Data (PD)', 'DCH-18.3', 5, 11, 1, 'Mechanisms exist to perform periodic checks of temporary files for the existence of Personal Data (PD).', 1, 1, NULL, NULL),
(46, 'Analyze Traffic for Covert Exfiltration', 'MON-11.1', 5, 9, 2, 'Automated mechanisms exist to analyze network traffic to detect covert data exfiltration.', 1, 1, NULL, NULL),
(47, 'Limit Personal Data (PD) Elements In Testing, Training & Research', 'DCH-18.1', 8, 11, 1, 'Mechanisms exist to limit Personal Data (PD) being processed in the information lifecycle to elements identified in the Data Protection Impact Assessment (DPIA).', 1, 1, NULL, NULL),
(48, 'Minimize Personal Data (PD)', 'DCH-18.2', 8, 11, 1, 'Mechanisms exist to minimize the use of Personal Data (PD) for research, testing, or training, in accordance with the Data Protection Impact Assessment (DPIA)', 1, 1, NULL, NULL),
(49, 'Sanitization of Personal Data (PD)', 'DCH-09.3', 9, 11, 1, 'Mechanisms exist to facilitate the sanitization of Personal Data (PD).', 1, 1, NULL, NULL),
(50, 'Geographic Location of Data', 'DCH-19', 9, 11, 3, 'Mechanisms exist to inventory, document and maintain data flows for data that is resident (permanently or temporarily) within a service\'s geographically distributed applications (physical and virtual), infrastructure, systems components and/or shared with other third-parties.', 1, 1, NULL, NULL),
(51, 'Access by Subset of Privileged Users', 'MON-08.2', 8, 9, 2, 'Mechanisms exist to restrict access to the management of event logs to privileged users with a specific business need.', 1, 1, NULL, NULL),
(52, 'Updating & Correcting Personal Data (PD)', 'DCH-22.1', 6, 11, 1, 'Mechanisms exist to utilize technical controls to correct Personal Data (PD) that is inaccurate or outdated, incorrectly determined regarding impact, or incorrectly de-identified.', 1, 1, NULL, NULL),
(53, 'Audit Trails', 'MON-03.2', 10, 9, 2, 'Mechanisms exist to link system access to individual users or service accounts.', 1, 1, NULL, NULL),
(54, 'Synchronization With Authoritative Time Source', 'MON-07.1', 8, 9, 2, 'Mechanisms exist to synchronize internal system clocks with an authoritative time source.', 1, 1, NULL, NULL),
(55, 'Monitoring Reporting', 'MON-06', 7, 9, 2, 'Mechanisms exist to provide an event log report generation capability to aid in detecting and assessing anomalous activities', 1, 1, NULL, NULL),
(56, 'Event Log Backup on Separate Physical Systems / Components', 'MON-08.1', 5, 9, 2, 'Mechanisms exist to back up event logs onto a physically different system or system component than the Security Incident Event Manager (SIEM) or similar automated tool.', 1, 1, NULL, NULL),
(57, 'Response To Event Log Processing Failures', 'MON-05', 8, 9, 2, 'Mechanisms exist to alert appropriate personnel in the event of a log processing failure and take actions to remedy the disruption.', 1, 1, NULL, NULL),
(58, 'Automated Response to Suspicious Events', 'MON-01.11', 5, 9, 2, 'Mechanisms exist to automatically implement pre-determined corrective actions in response to detected events that have security incident implications.', 1, 1, NULL, NULL),
(59, 'Correlate Monitoring Information', 'MON-02.1', 9, 9, 2, 'Automated mechanisms exist to correlate both technical and non-technical information from across the enterprise by a Security Incident Event Manager (SIEM) or similar automated tool, to enhance organization-wide situational awareness.', 1, 1, NULL, NULL),
(60, 'Host-Based Devices', 'MON-01.6', 8, 9, 2, 'Mechanisms exist to utilize Host-based Intrusion Detection / Prevention Systems (HIDS / HIPS) to actively alert on or block unwanted activities and send logs to a Security Incident Event Manager (SIEM), or similar automated tool, to maintain situational awareness.', 1, 1, NULL, NULL),
(61, 'Intrusion Detection & Prevention Systems (IDS & IPS)', 'MON-01.1', 9, 9, 2, 'Mechanisms exist to implement Intrusion Detection / Prevention Systems (IDS / IPS) technologies on critical systems, key network segments and network choke points.', 1, 1, NULL, NULL),
(62, 'Geolocation Requirements for Processing, Storage and service location', 'CLD-09', 10, 5, 1, 'Mechanisms exist to control the location of cloud processing/storage based on business requirements that includes statutory, regulatory and contractual obligations.', 1, 1, NULL, NULL),
(63, 'Automated Central Management & Verification', 'CFG-02.2', 7, 7, 2, 'Automated mechanisms exist to govern and report on baseline configurations of the systems.', 1, 1, NULL, NULL),
(64, 'Inbound & Outbound Communications Traffic', 'MON-01.3', 9, 9, 2, 'Mechanisms exist to continuously monitor inbound and outbound communications traffic for unusual or unauthorized activities or conditions.', 1, 1, NULL, NULL),
(65, 'Sensitive / Regulated Data Actions', 'CFG-08.1', 7, 7, 1, 'Automated mechanisms exist to generate event logs whenever sensitive/regulated data is collected, created, updated, deleted and/or archived.', 1, 1, NULL, NULL),
(66, 'Wireless Intrusion Detection System (WIDS)', 'MON-01.5', 5, 9, 2, 'Mechanisms exist to utilize Wireless Intrusion Detection / Protection Systems (WIDS / WIPS) to identify rogue wireless devices and to detect attack attempts via wireless networks.\r\nEntities', 1, 1, NULL, NULL),
(67, 'Reviews & Updates', 'CFG-02.1', 8, 7, 2, 'Mechanisms exist to review and update baseline configurations:\r\n▪ At least annually;\r\n▪ When required due to so; or\r\n▪ As part of system component installations and upgrades.', 1, 1, NULL, NULL),
(68, 'User-Installed Software', 'CFG-05', 10, 7, 1, 'Mechanisms exist to review and update baseline configurations:\r\n▪ At least annually;\r\n▪ When required due to so; or\r\n▪ As part of system component installations and upgrades.', 1, 1, NULL, NULL),
(69, 'Contingency Plan Root Cause Analysis (RCA) & Learned', 'BCD-05', 9, 2, 2, 'Mechanisms exist to keep contingency plans current with business needs, technology changes and feedback from contingency plan testing activities.', 1, 1, NULL, NULL),
(70, 'Resume Essential Missions & Business Functions', 'BCD-02.3', 8, 2, 5, 'Does the organization resume essential missions and business functions within an organization-defined time period of contingency plan activation?\r\n', 1, 1, NULL, NULL),
(71, 'Telecommunications Priority of Service Provisions', 'BCD-10.1', 6, 2, 5, 'Mechanisms exist to formalize primary and alternate telecommunications service agreements contain priority-of-service provisions that support availability requirements, including Recovery Time Objectives (RTOs).', 1, 1, NULL, NULL),
(72, 'Continue Essential Mission & Business Functions', 'BCD-02.2', 6, 2, 5, 'Mechanisms exist to formalize primary and alternate telecommunications service agreements contain priority-of-service provisions that support availability requirements, including Recovery Time Objectives (RTOs).', 1, 1, NULL, NULL),
(73, 'Simulated Events', 'BCD-03.1', 3, 2, 5, 'Mechanisms exist to establish and maintain an authoritative source and repository to provide a trusted source and accountability for approved and implemented system components that prevents assets from being duplicated in other asset inventories.', 1, 1, NULL, NULL),
(74, 'Multi-Tenant Forensics Capabilities', 'CLD-06.3', 8, 5, 3, 'Mechanisms exist to identify and document the critical systems, applications and services that support essential missions and business functions.', 1, 1, NULL, NULL),
(75, 'Alternate Site Priority of Service', 'BCD-09.3', 6, 2, 5, 'Mechanisms exist to formalize primary and alternate telecommunications service agreements contain priority-of-service provisions that support availability requirements, including Recovery Time Objectives (RTOs).', 1, 1, NULL, NULL),
(76, 'Contingency Planning & Updates', 'BCD-06', 8, 2, 5, 'Mechanisms exist to keep contingency plans current with business needs, technology changes and feedback from contingency plan testing activities.', 1, 1, NULL, NULL),
(77, 'Resume All Missions & Business Functions', 'BCD-02.1', 8, 2, 5, 'Mechanisms exist to resume essential missions and business functions within an organization-defined time period of contingency plan activation.', 1, 1, NULL, NULL),
(78, 'Component Duplication Avoidance', 'AST-02.3', 2, 1, 3, 'Mechanisms exist to establish and maintain an authoritative source and repository to provide a trusted source and accountability for approved and implemented system components that prevents assets from being duplicated in other asset inventories.', 1, 1, NULL, NULL),
(79, 'Identify Critical Assets', 'BCD-02', 9, 2, 5, 'Mechanisms exist to identify and document the critical systems, applications and services that support essential missions and business functions.', 1, 1, NULL, NULL),
(80, 'Accountability Information', 'AST-03.1', 5, 1, 3, 'Mechanisms exist to include capturing the name, position and/or role of individuals responsible/accountable for administering assets as part of the technology asset inventory process.', 1, 1, NULL, NULL),
(81, 'Management Approval For External Media Transfer', 'AST-05.1', 8, 1, 3, 'Mechanisms exist to include capturing the name, position and/or role of individuals responsible/accountable for administering assets as part of the technology asset inventory process.', 1, 1, NULL, NULL),
(82, 'Stakeholder Identification & Involvement', 'AST-01.2', 5, 1, 3, 'Mechanisms exist to obtain management approval for any sensitive / regulated media that is transferred outside of the organization\'s facilities.', 1, 1, NULL, NULL),
(83, 'Updates During Installations / Removals', 'AST-02.1', 7, 1, 3, 'Mechanisms exist to identify and involve pertinent stakeholders of critical systems, applications and services to support the ongoing secure management of those assets.', 1, 1, NULL, NULL),
(84, 'Compliance-Specific Asset Identification', 'AST-04.3', 6, 1, 3, 'Mechanisms exist to update asset inventories as part of component installations, removals and asset upgrades.', 1, 1, NULL, NULL),
(85, 'Define Control Objectives', 'GOV-09', 5, 24, 3, 'Mechanisms exist to establish control objectives as the basis for the selection, implementation and management of the organization’s internal control system.', 1, 1, NULL, NULL),
(86, 'Web Application Firewall (WAF)', 'WEB-03', 8, 31, 1, 'Mechanisms exist to establish control objectives as the basis for the selection, implementation and management of the organization’s internal control system.', 1, 1, NULL, NULL),
(87, 'Penetration Testing', 'VPM-07', 9, 30, 2, 'Mechanisms exist to conduct penetration testing on systems and web applications.', 1, 1, NULL, NULL),
(88, 'Use of Demilitarized Zones (DMZ)', 'WEB-02', 9, 31, 1, 'Mechanisms exist to utilize a Demilitarized Zone (DMZ) to restrict inbound traffic to authorized devices on certain services, protocols and ports.', 1, 1, NULL, NULL),
(89, 'Client-Facing Web Services', 'WEB-04', 10, 31, 1, 'Mechanisms exist to deploy reasonably-expected security controls to protect the confidentiality and availability of client data that is stored, transmitted or processed by the Internet-based service.', 1, 1, NULL, NULL),
(90, 'Web Security', 'WEB-01', 8, 31, 1, 'Mechanisms exist to facilitate the implementation of an enterprise-wide web management policy, as well as associated standards, controls and procedures.', 1, 1, NULL, NULL),
(91, 'Vulnerability & Patch Management Program (VPMP)', 'VPM-01', 9, 30, 1, 'Mechanisms exist to facilitate the implementation and monitoring of vulnerability management controls.', 1, 1, NULL, NULL),
(92, 'Threat Intelligence Feeds', 'THR-03', 8, 29, 3, 'Mechanisms exist to maintain situational awareness of evolving threats by leveraging the knowledge of attacker tactics, techniques and procedures to facilitate the implementation of preventative and compensating controls.', 1, 1, NULL, NULL),
(93, 'Vulnerability Remediation Process', 'VPM-02', 10, 30, 1, 'Mechanisms exist to ensure that vulnerabilities are properly identified, tracked and remediated.', 1, 1, NULL, NULL),
(94, 'Continuous Vulnerability Remediation Activities', 'VPM-04', 8, 30, 1, 'Mechanisms exist to address new threats and vulnerabilities on an ongoing basis and ensure assets are protected against known attacks.', 1, 1, NULL, NULL),
(95, 'Internal Vulnerability Assessment Scans', 'VPM-06.7', 9, 30, 2, 'Mechanisms exist to perform quarterly internal vulnerability scans, that includes all segments of the organization\'s internal network, as well as rescans until passing results are obtained or all “high” vulnerabilities are resolved, as defined by the Common Vulnerability Scoring System (CVSS).', 1, 1, NULL, NULL),
(96, 'Software & Firmware Patching', 'VPM-05', 10, 30, 1, 'Mechanisms exist to conduct software patching for all deployed operating systems, applications and firmware.', 1, 1, NULL, NULL),
(97, 'Attack Surface Scope', 'VPM-01.1', 5, 30, 1, 'Mechanisms exist to define and manage the scope for its attack surface management activities.', 1, 1, NULL, NULL),
(98, 'Centralized Management of Flaw Remediation Processes', 'VPM-05.1', 9, 30, 1, 'Mechanisms exist to centrally-manage the flaw remediation process.', 1, 1, NULL, NULL),
(99, 'External Vulnerability Assessment Scans', 'VPM-06.6', 9, 30, 2, 'Mechanisms exist to perform quarterly external vulnerability scans (outside the organization\'s network looking inward) via a reputable vulnerability service provider, which include rescans until passing results are obtained or all “high” vulnerabilities are resolved, as defined by the Common Vulnerability Scoring System (CVSS).', 1, 1, NULL, NULL),
(100, 'Third-Party Inventories', 'TPM-01.1', 8, 28, 3, 'Mechanisms exist to maintain a current, accurate and complete list of Third-Party Service Providers (TSP) that can potentially impact the Confidentiality, Integrity, Availability and/or Safety (CIAS) of the organization\'s systems, applications, services and data.', 1, 1, NULL, NULL),
(101, 'Threat Intelligence Program', 'THR-01', 8, 29, 3, 'Mechanisms exist to implement a threat intelligence program that includes a cross-organization information-sharing capability that can influence the development of the system and security architectures, selection of security solutions, monitoring, threat hunting, response and recovery activities.', 1, 1, NULL, NULL),
(102, 'Managing Changes To Third-Party Services', 'TPM-10', 8, 28, 3, 'Mechanisms exist to control changes to services by suppliers, taking into account the criticality of business information, systems and processes that are in scope by the third-party.', 1, 1, NULL, NULL),
(103, 'Third-Party Risk Assessments & Approvals', 'TPM-04.1', 9, 28, 3, 'Mechanisms exist to conduct a risk assessment prior to the acquisition or outsourcing of technology-related services.', 1, 1, NULL, NULL),
(104, 'Third-Party Contract Requirements', 'TPM-05', 10, 28, 3, 'Mechanisms exist to identify, regularly review and document third-party confidentiality, Non-Disclosure Agreements (NDAs) and other contracts that reflect the organization’s needs to protect systems and data.', 1, 1, NULL, NULL),
(105, 'Review of Third-Party Services', 'TPM-08', 9, 28, 3, 'Mechanisms exist to monitor, regularly review and audit Third-Party Service Providers (TSP) for compliance with established contractual requirements for cybersecurity and privacy controls.', 1, 1, NULL, NULL),
(106, 'Third-Party Services', 'TPM-04', 10, 28, 3, 'Mechanisms exist to mitigate the risks associated with third-party access to the organization’s systems and data.', 1, 1, NULL, NULL),
(107, 'Third-Party Management', 'TPM-01', 10, 28, 3, 'Mechanisms exist to facilitate the implementation of third-party management controls.', 1, 1, NULL, NULL),
(108, 'Supply Chain Protection', 'TPM-03', 9, 28, 3, 'Mechanisms exist to evaluate security risks associated with the services and product supply chain.', 1, 1, NULL, NULL),
(109, 'Secure Coding', 'TDA-06', 10, 27, 1, 'Mechanisms exist to develop applications based on secure coding principles.', 1, 1, NULL, NULL),
(110, 'Developer Configuration Management', 'TDA-14', 9, 27, 1, 'Mechanisms exist to require system developers and integrators to perform configuration management during system design, development, implementation and operation.', 1, 1, NULL, NULL),
(111, 'Use of Live Data', 'TDA-10', 9, 27, 1, 'Mechanisms exist to approve, document and control the use of live data in development and test environments.', 1, 1, NULL, NULL),
(112, 'Static Code Analysis', 'TDA-09.2', 9, 27, 2, 'Mechanisms exist to require the developers of systems, system components or services to employ static code analysis tools to identify and remediate common flaws and document the results of the analysis.', 1, 1, NULL, NULL),
(113, 'Secure Development Environments', 'TDA-07', 9, 27, 1, 'Mechanisms exist to maintain a segmented development network to ensure a secure development environment.', 1, 1, NULL, NULL),
(114, 'Pre-Established Security Configurations', 'TDA-02.4', 8, 27, 1, 'Mechanisms exist to ensure software vendors / manufacturers:\r\n▪ Deliver the system, component, or service with pre-established security configurations implemented; and\r\n▪ Use the pre-established security configurations as the default for any subsequent system, component, or service reinstallation or upgrade.', 1, 1, NULL, NULL),
(115, 'Security & Privacy Testing Throughout Development', 'TDA-09', 9, 27, 1, 'Mechanisms exist to require system developers/integrators consult with cybersecurity and privacy personnel to:\r\n▪ Create and implement a Security Test and Evaluation (ST&E) plan;\r\n▪ Implement a verifiable flaw remediation process to correct weaknesses and deficiencies identified during the security testing and evaluation process; and\r\n▪ Document the results of the security testing/evaluation and flaw remediation processes.\r', 1, 1, NULL, NULL),
(116, 'Access to Program Source Code', 'TDA-20', 9, 27, 1, 'Does the organization limit privileges to change software resident within software libraries?', 1, 1, NULL, NULL),
(117, 'Separation of Development, Testing and Operational Environments', 'TDA-08', 10, 27, 1, 'Mechanisms exist to manage separate development, testing and operational environments to reduce the risks of unauthorized access or changes to the operational environment and to ensure no impact to production systems.', 1, 1, NULL, NULL),
(118, 'Role-Based Security & Privacy Training', 'SAT-03', 8, 25, 1, 'Mechanisms exist to provide role-based security-related training:\r\n▪ Before authorizing access to the system or performing assigned duties;\r\n▪ When required by system changes; and\r\n▪ Annually thereafter.', 1, 1, NULL, NULL),
(119, 'Development Methods, Techniques & Processes', 'TDA-02.3', 5, 27, 3, 'Mechanisms exist to require software vendors / manufacturers to demonstrate that their software development processes employ industry-recognized secure practices for secure programming, engineering methods, quality control processes and validation techniques to minimize flawed or malformed software.', 1, 1, NULL, NULL),
(120, 'Security & Privacy Training Records', 'SAT-04', 9, 25, 1, 'Mechanisms exist to require software vendors / manufacturers to demonstrate that their software development processes employ industry-recognized secure practices for secure programming, engineering methods, quality control processes and validation techniques to minimize flawed or malformed software.', 1, 1, NULL, NULL),
(121, 'Minimum Viable Product (MVP) Security Requirements', 'TDA-02', 9, 27, 1, 'Mechanisms exist to document, retain and monitor individual training activities, including basic security awareness training, ongoing awareness training and specific-system training.', 1, 1, NULL, NULL),
(122, 'Security & Privacy Awareness', 'SAT-02', 8, 25, 1, 'Mechanisms exist to ensure risk-based technical and functional specifications are established to define a Minimum Viable Product (MVP).', 1, 1, NULL, NULL),
(123, 'Security & Privacy-Minded Workforce', 'SAT-01', 8, 25, 1, 'Mechanisms exist to provide all employees and contractors appropriate awareness education and training that is relevant for their job function.', 1, 1, NULL, NULL),
(124, 'Sensitive Information Storage, Handling & Processing', 'SAT-03.3', 9, 25, 1, 'Mechanisms exist to ensure that every user accessing a system processing, storing or transmitting sensitive information is formally trained in data handling requirements.', 1, 1, NULL, NULL),
(125, 'Technology Development & Acquisition', 'TDA-01', 10, 27, 1, 'Mechanisms exist to facilitate the implementation of security workforce development and awareness controls.', 1, 1, NULL, NULL),
(126, 'Security Concept Of Operations (CONOPS)', 'OPS-02', 9, 26, 1, 'Mechanisms exist to develop a security Concept of Operations (CONOPS), or a similarly-defined plan for achieving cybersecurity objectives, that documents management, operational and technical measures implemented to apply defense-in-depth techniques that is communicated to all appropriate stakeholders.', 1, 1, NULL, NULL),
(127, 'Secure Engineering Principles', 'SEA-01', 10, 23, 1, 'Mechanisms exist to facilitate the implementation of industry-recognized cybersecurity and privacy practices in the specification, design, development, implementation and modification of systems and services.', 1, 1, NULL, NULL),
(128, 'Operations Security', 'OPS-01', 8, 26, 1, 'Mechanisms exist to facilitate the implementation of operational security controls.', 1, 1, NULL, NULL),
(129, 'Security Function Isolation', 'SEA-04.1', 7, 23, 1, 'Mechanisms exist to isolate security functions from non-security functions.', 1, 1, NULL, NULL),
(130, 'Application Partitioning', 'SEA-03.2', 8, 23, 1, 'Mechanisms exist to separate user functionality from system management functionality.', 1, 1, NULL, NULL),
(131, 'Data Protection Impact Assessment (DPIA)', 'RSK-10', 9, 22, 3, 'Mechanisms exist to conduct a Data Protection Impact Assessment (DPIA) on systems, applications and services that store, process and/or transmit Personal Data (PD) to identify and remediate reasonably-expected risks.', 1, 1, NULL, NULL),
(132, 'Defense-In-Depth (DiD) Architecture', 'SEA-03', 10, 23, 1, 'Mechanisms exist to implement security functions as a layered structure minimizing interactions between layers of the design and avoiding any dependence by lower layers on the functionality or correctness of higher layers.', 1, 1, NULL, NULL),
(133, 'Clock Synchronization', 'SEA-20', 9, 23, 1, 'Mechanisms exist to utilize time-synchronization technology to synchronize all critical system clocks.', 1, 1, NULL, NULL),
(134, 'Standardized Operating Procedures (SOP)', 'OPS-01.1', 9, 26, 1, 'Mechanisms exist to identify and document Standardized Operating Procedures (SOP), or similar documentation, to enable the proper execution of day-to-day / assigned tasks.', 1, 1, NULL, NULL),
(135, 'Supply Chain Risk Assessment', 'RSK-09.1', 9, 22, 3, 'Mechanisms exist to periodically assess supply chain risks associated with systems, system components and services.', 1, 1, NULL, NULL),
(136, 'Secure Log-On Procedures', 'SEA-17', 8, 23, 1, 'Mechanisms exist to utilize a trusted communications path between the user and the security functions of the system.', 1, 1, NULL, NULL),
(137, 'Risk Register', 'RSK-04.1', 10, 22, 3, 'Mechanisms exist to maintain a risk register that facilitates monitoring and reporting of risks.', 1, 1, NULL, NULL),
(138, 'Risk Management Program', 'RSK-01', 10, 22, 3, 'Mechanisms exist to facilitate the implementation of risk management controls.', 1, 1, NULL, NULL),
(139, 'Business Impact Analysis (BIA)', 'RSK-08', 8, 22, 3, 'Mechanisms exist to conduct a Business Impact Analysis (BIA) to identify and assess cybersecurity and data protection risks.', 1, 1, NULL, NULL),
(140, 'Risk Identification', 'RSK-03', 9, 22, 3, 'Mechanisms exist to identify and document risks, both internal and external.', 1, 1, NULL, NULL),
(141, 'Risk-Based Security Categorization', 'RSK-02', 9, 22, 3, 'Mechanisms exist to categorizes systems and data in accordance with applicable local, state and Federal laws that:\r\n▪ Document the security categorization results (including supporting rationale) in the security plan for systems; and\r\n▪ Ensure the security categorization decision is reviewed and approved by the asset owner.', 1, 1, NULL, NULL),
(142, 'Risk Assessment', 'RSK-04', 10, 22, 3, 'Mechanisms exist to conduct recurring assessments of risk that includes the likelihood and magnitude of harm, from unauthorized access, use, disclosure, disruption, modification or destruction of the organization\'s systems and data.', 1, 1, NULL, NULL),
(143, 'Risk Ranking', 'RSK-05', 9, 22, 3, 'Mechanisms exist to identify and assign a risk ranking to newly discovered security vulnerabilities that is based on industry-recognized practices.', 1, 1, NULL, NULL),
(144, 'Risk Response', 'RSK-06.1', 9, 22, 3, 'Mechanisms exist to respond to findings from cybersecurity and privacy assessments, incidents and audits to ensure proper remediation has been performed.', 1, 1, NULL, NULL),
(145, 'Risk Remediation', 'RSK-06', 10, 22, 3, 'Mechanisms exist to remediate risks to an acceptable level.', 1, 1, NULL, NULL),
(146, 'Secure Development Life Cycle (SDLC) Management', 'PRM-07', 10, 21, 1, 'Mechanisms exist to ensure changes to systems within the Secure Development Life Cycle (SDLC) are controlled through formal change control procedures.', 1, 1, NULL, NULL),
(147, 'Privacy Requirements for Contractors & Service Provider', 'PRI-07.1', 10, 20, 3, 'Mechanisms exist to includes privacy requirements in contracts and other acquisition-related documents that establish privacy roles and responsibilities for contractors and service providers.', 1, 1, NULL, NULL),
(148, 'Usage Restrictions of Sensitive Personal Data', 'PRI-05.4', 8, 20, 3, 'Mechanisms exist to restrict the use of Personal Data (PD) to only the authorized purpose(s) consistent with applicable laws, regulations and in privacy notices.', 1, 1, NULL, NULL),
(149, 'Security Portfolio Management', 'PRM-01', 8, 21, 3, 'Mechanisms exist to facilitate the implementation of cybersecurity and privacy-related resource planning controls that define a viable plan for achieving cybersecurity & privacy objectives.', 1, 1, NULL, NULL),
(150, 'Internal Use of Personal Data For Testing, Training and Research', 'PRI-05.1', 8, 20, 3, 'Mechanisms exist to address the use of Personal Data (PD) for internal testing, training and research that:\r\n▪ Takes measures to limit or minimize the amount of PD used for internal testing, training and research purposes; and\r\n▪ Authorizes the use of PD when such information is required for internal testing, training and research.', 1, 1, NULL, NULL),
(151, 'Information Sharing With Third Parties', 'PRI-07', 9, 20, 3, 'Mechanisms exist to discloses Personal Data (PD) to third-parties only for the purposes identified in the privacy notice and with the implicit or explicit consent of the data subject.', 1, 1, NULL, NULL),
(152, 'Allocation of Resources', 'PRM-03', 8, 21, 3, 'Mechanisms exist to identify and allocate resources for management, operational, technical and privacy requirements within business process planning for projects / initiatives.', 1, 1, NULL, NULL),
(153, 'Testing, Training & Monitoring', 'PRI-08', 8, 20, 3, 'Mechanisms exist to conduct cybersecurity and privacy testing, training and monitoring activities', 1, 1, NULL, NULL),
(154, 'Strategic Plan & Objectives', 'PRM-01.1', 5, 21, 3, 'Mechanisms exist to establish a strategic cybersecurity and privacy-specific business plan and set of objectives to achieve that plan.', 1, 1, NULL, NULL),
(155, 'Security & Privacy Resource Management', 'PRM-02', 8, 21, 3, 'Mechanisms exist to address all capital planning and investment requests, including the resources needed to implement the security & privacy programs and documents all exceptions to this requirement.', 1, 1, NULL, NULL),
(156, 'Security & Privacy In Project Management', 'PRM-04', 10, 21, 3, 'Mechanisms exist to assess cybersecurity and privacy controls in system project development to determine the extent to which the controls are implemented correctly, operating as intended and producing the desired outcome with respect to meeting the requirements.', 1, 1, NULL, NULL),
(157, 'Restrict Collection To Identified Purpose', 'PRI-04', 7, 20, 3, 'Mechanisms exist to collect Personal Data (PD) only for the purposes identified in the privacy notice and includes protections against collecting PD from minors without appropriate parental, or legal guardian, consent.', 1, 1, NULL, NULL),
(158, 'Delivery & Removal', 'PES-10', 8, 19, 1, 'Physical security mechanisms exist to isolate information processing facilities from points such as delivery and loading areas and other points to avoid unauthorized access.', 1, 1, NULL, NULL),
(159, 'Access Control for Output Devices', 'PES-12.2', 8, 19, 1, 'Does the organization restrict access to printers and other system output devices to prevent unauthorized individuals from obtaining the output?', 1, 1, NULL, NULL),
(160, 'Choice & Consent', 'PRI-03', 7, 20, 3, 'Mechanisms exist to authorize the processing of their Personal Data (PD) prior to its collection that:\r\n▪ Uses plain language and provide examples to illustrate the potential privacy risks of the authorization; and\r\n▪ Provides a means for users to decline the authorization.\r', 1, 1, NULL, NULL),
(161, 'Personal Data Retention & Disposal', 'PRI-05', 8, 20, 3, 'Mechanisms exist to:\r\n▪ Retain Personal Data (PD), including metadata, for an organization-defined time period to fulfill the purpose(s) identified in the notice or as required by law;\r\n▪ Dispose of, destroys, erases, and/or anonymizes the PD, regardless of the method of storage; and\r\n▪ Use organization-defined techniques or methods to ensure secure deletion or destruction of PD (including originals, copies and archived records).', 1, 1, NULL, NULL),
(162, 'Equipment Siting & Protection', 'PES-12', 9, 19, 1, 'Physical security mechanisms exist to locate system components within the facility to minimize potential damage from physical and environmental hazards and to minimize the opportunity for unauthorized access.', 1, 1, NULL, NULL),
(163, 'Transmission Medium Security', 'PES-12.1', 9, 19, 1, 'Physical security mechanisms exist to protect power and telecommunications cabling carrying data or supporting information services from interception, interference or damage.', 1, 1, NULL, NULL),
(164, 'Privacy Program', 'PRI-01', 10, 20, 3, 'Mechanisms exist to facilitate the implementation and operation of privacy controls.', 1, 1, NULL, NULL),
(165, 'Automatic Voltage Controls', 'PES-07.1', 8, 19, 1, 'Facility security mechanisms exist to utilize automatic voltage controls for critical system components.', 1, 1, NULL, NULL),
(166, 'Emergency Lighting', 'PES-07.4', 7, 19, 1, 'Facility security mechanisms exist to utilize and maintain automatic emergency lighting that activates in the event of a power outage or disruption and that covers emergency exits and evacuation routes within the facility.', 1, 1, NULL, NULL),
(167, 'Fire Detection Devices', 'PES-08.1', 9, 19, 2, 'Facility security mechanisms exist to utilize and maintain fire detection devices/systems that activate automatically and notify organizational personnel and emergency responders in the event of a fire.', 1, 1, NULL, NULL),
(168, 'Temperature & Humidity Controls', 'PES-09', 9, 19, 1, 'Facility security mechanisms exist to maintain and monitor temperature and humidity levels within the facility.', 1, 1, NULL, NULL),
(169, 'Fire Protection', 'PES-08', 7, 19, 1, 'Facility security mechanisms exist to utilize and maintain fire suppression and detection devices/systems for the system that are supported by an independent energy source.', 1, 1, NULL, NULL),
(170, 'Supporting Utilities', 'PES-07', 9, 19, 1, 'Facility security mechanisms exist to protect power equipment and power cabling for the system from damage and destruction.', 1, 1, NULL, NULL),
(171, 'Emergency Power', 'PES-07.3', 8, 19, 1, 'Facility security mechanisms exist to supply alternate power, capable of maintaining minimally-required operational capability, in the event of an extended loss of the primary power source.', 1, 1, NULL, NULL),
(172, 'Emergency Shutoff', 'PES-07.2', 8, 19, 1, 'Facility security mechanisms exist to shut off power in emergency situations by:\r\n▪ Placing emergency shutoff switches or devices in close proximity to systems or system components to facilitate safe and easy access for personnel; and\r\n▪ Protecting emergency power shutoff capability from unauthorized activation.', 1, 1, NULL, NULL),
(173, 'Working in Secure Areas', 'PES-04.1', 10, 19, 1, 'Physical security mechanisms exist to allow only authorized personnel access to secure areas.', 1, 1, NULL, NULL),
(174, 'Physical Access Control', 'PES-03', 10, 19, 1, 'Physical access control mechanisms exist to enforce physical access authorizations for all physical access points (including designated entry/exit points) to facilities (excluding those areas within the facility officially designated as publicly accessibl', 1, 1, NULL, NULL),
(175, 'Monitoring Physical Access To Information Systems', 'PES-05.2', 5, 19, 2, 'Facility security mechanisms exist to monitor physical access to critical information systems or sensitive/regulated data, in addition to the physical access monitoring of the facility.', 1, 1, NULL, NULL),
(176, 'Access To Information Systems', 'PES-03.4', 5, 19, 1, 'Physical access control mechanisms exist to enforce physical access to critical information systems or sensitive/regulated data, in addition to the physical access controls for the facility.', 1, 1, NULL, NULL),
(177, 'Identification Requirement', 'PES-06.2', 8, 19, 1, 'Physical access control mechanisms exist to requires at least one (1) form of government-issued photo identification to authenticate individuals before they can gain access to the facility.', 1, 1, NULL, NULL),
(178, 'Visitor Control', 'PES-06', 9, 19, 1, 'Physical access control mechanisms exist to identify, authorize and monitor visitors before allowing access to the facility (other than areas designated as publicly accessible).', 1, 1, NULL, NULL),
(179, 'Physical Access Logs', 'PES-03.3', 6, 19, 1, 'Description\r\nPhysical access control mechanisms exist to generate a log entry for each access through controlled ingress and egress points', 1, 1, NULL, NULL),
(180, 'Physical Security of Offices, Rooms & Facilities', 'PES-04', 10, 19, 1, 'Mechanisms exist to identify systems, equipment and respective operating environments that require limited physical access so that appropriate physical access controls are designed and implemented for offices, rooms and facilities.', 1, 1, NULL, NULL),
(181, 'Controlled Ingress & Egress Points', 'PES-03.1', 9, 19, 1, 'Physical access control mechanisms exist to limit and monitor physical access through controlled ingress and egress points.', 1, 1, NULL, NULL),
(182, 'Monitoring Physical Access', 'PES-05', 7, 19, 2, 'Physical access control mechanisms exist to monitor for, detect and respond to physical security incidents.', 1, 1, NULL, NULL),
(183, 'Authentication & Encryption', 'NET-15.1', 9, 18, 1, 'Physical access control mechanisms exist to monitor for, detect and respond to physical security incidents.', 1, 1, NULL, NULL),
(184, 'Physical & Environmental Protections', 'PES-01', 9, 19, 1, 'Mechanisms exist to facilitate the operation of physical and environmental protection controls.', 1, 1, NULL, NULL),
(185, 'Third-Party Remote Access Governance', 'NET-14.6', 8, 18, 1, 'Mechanisms exist to proactively control and monitor third-party accounts used to access, support, or maintain system components via remote access.', 1, 1, NULL, NULL),
(186, 'Wireless Networking', 'NET-15', 9, 18, 1, 'Mechanisms exist to control authorized wireless usage and monitor for unauthorized wireless access.', 1, 1, NULL, NULL),
(187, 'Remote Access', 'NET-14', 10, 18, 1, 'Mechanisms exist to define, control and review organization-approved, secure remote access methods.', 1, 1, NULL, NULL),
(188, 'Physical Access Authorizations', 'PES-02', 7, 19, 1, 'Physical access control mechanisms exist to maintain a current list of personnel with authorized access to organizational facilities (except for those areas within the facility officially designated as publicly accessible).', 1, 1, NULL, NULL),
(189, 'Electronic Messaging', 'NET-13', 10, 18, 1, 'Mechanisms exist to protect the confidentiality, integrity and availability of electronic messaging communications.', 1, 1, NULL, NULL),
(190, 'Rogue Wireless Detection', 'NET-15.5', 8, 18, 2, 'Mechanisms exist to test for the presence of Wireless Access Points (WAPs) and identify all authorized and unauthorized WAPs within the facility(ies).', 1, 1, NULL, NULL),
(191, 'Data Loss Prevention (DLP)', 'NET-17', 8, 18, 1, 'Automated mechanisms exist to implement Data Loss Prevention (DLP) to protect sensitive information as it is stored, transmitted and processed.', 1, 1, NULL, NULL),
(192, 'Work From Anywhere (WFA) - Telecommuting Security', 'NET-14.5', 10, 18, 1, 'Mechanisms exist to define secure telecommuting practices and govern remote access to systems and data for remote workers.', 1, 1, NULL, NULL),
(193, 'Data Flow Enforcement – Access Control Lists (ACLs)', 'NET-04', 10, 18, 1, 'Mechanisms exist to design, implement and review firewall and router configurations to restrict connections between untrusted networks and internal systems.', 1, 1, NULL, NULL),
(194, 'Safeguarding Data Over Open Networks', 'NET-12', 8, 18, 1, 'Cryptographic mechanisms exist to implement strong cryptography and security protocols to safeguard sensitive/regulated data during transmission over open, public networks.', 1, 1, NULL, NULL),
(195, 'Deny Traffic by Default & Allow Traffic by Exception', 'NET-04.1', 10, 18, 1, 'Mechanisms exist to configure firewall and router configurations to deny network traffic by default and allow network traffic by exception (e.g., deny all, permit by exception).', 1, 1, NULL, NULL),
(196, 'Network Segmentation', 'NET-06', 10, 18, 1, 'Mechanisms exist to ensure network architecture utilizes network segmentation to isolate systems, applications and services that protections from other network resources.', 1, 1, NULL, NULL),
(197, 'Wireless Link Protection', 'NET-12.1', 8, 18, 1, 'Mechanisms exist to protect external and internal wireless links from signal parameter attacks through monitoring for unauthorized wireless connections, including scanning for unauthorized wireless access points and taking appropriate action, if an unauthorized connection is discovered.', 1, 1, NULL, NULL),
(198, 'Remote Session Termination', 'NET-07', 8, 18, 1, 'Mechanisms exist to terminate remote sessions at the end of the session or after an organization-defined time period of inactivity.', 1, 1, NULL, NULL);
INSERT INTO `control_codes` (`id`, `name`, `code`, `control_weight`, `control_domain_id`, `functional_group_id`, `description`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(199, 'DMZ Networks', 'NET-08.1', 8, 18, 1, 'Mechanisms exist to require De-Militarized Zone (DMZ) network segments to separate untrusted networks from trusted networks.', 1, 1, NULL, NULL),
(200, 'Human Reviews', 'NET-04.6', 9, 18, 2, 'Mechanisms exist to enforce the use of human reviews for Access Control Lists (ACLs) and similar rulesets on a routine basis.', 1, 1, NULL, NULL),
(201, 'External System Connections', 'NET-05.1', 8, 18, 1, 'Mechanisms exist to prohibit the direct connection of a sensitive system to an external network without the use of an organization-defined boundary protection device.', 1, 1, NULL, NULL),
(202, 'Network Security Controls (NSC)', 'NET-01', 10, 18, 1, 'Mechanisms exist to develop, govern & update procedures to facilitate the implementation of Network Security Controls (NSC).', 1, 1, NULL, NULL),
(203, 'Root Cause Analysis (RCA) & Lessons Learned', 'IRO-13', 8, 15, 4, 'Mechanisms exist to incorporate lessons learned from analyzing and resolving cybersecurity and privacy incidents to reduce the likelihood or impact of future incidents.', 1, 1, NULL, NULL),
(204, 'Centralized Management Of Mobile Devices', 'MDM-01', 10, 17, 1, 'Mechanisms exist to develop, govern & update procedures to facilitate the implementation of mobile device management controls.', 1, 1, NULL, NULL),
(205, 'Controlled Maintenance', 'MNT-02', 10, 16, 1, 'Mechanisms exist to conduct controlled maintenance activities throughout the lifecycle of the system, application or service.', 1, 1, NULL, NULL),
(206, 'Prevent Discovery of Internal Information', 'NET-03.3', 7, 18, 1, 'Mechanisms exist to prevent the public disclosure of internal network information.', 1, 1, NULL, NULL),
(207, 'Maintenance Operations', 'MNT-01', 9, 16, 1, 'Mechanisms exist to develop, disseminate, review & update procedures to facilitate the implementation of maintenance controls across the enterprise.', 1, 1, NULL, NULL),
(208, 'Remote Maintenance Cryptographic Protection', 'MNT-05.3', 9, 16, 1, 'Cryptographic mechanisms exist to protect the integrity and confidentiality of remote, non-local maintenance and diagnostic communications.', 1, 1, NULL, NULL),
(209, 'Boundary Protection', 'NET-03', 10, 18, 1, 'Mechanisms exist to monitor and control communications at the external network boundary and at key internal boundaries within the network.', 1, 1, NULL, NULL),
(210, 'Layered Network Defenses', 'NET-02', 9, 18, 1, 'Mechanisms exist to implement security functions as a layered structure that minimizes interactions between layers of the design and avoiding any dependence by lower layers on the functionality or correctness of higher layers.', 1, 1, NULL, NULL),
(211, 'Access Control For Mobile Devices', 'MDM-02', 9, 17, 1, 'Mechanism exists to enforce access control requirements for mobile devices connecting to organizational systems, requiring re-authentication after periods of inactivity and upon application launch. The application identifies new network connections, implementing appropriate authentication measures for secure transactions.', 1, 1, NULL, NULL),
(212, 'Guest Networks', 'NET-02.2', 6, 18, 1, 'Mechanisms exist to implement and manage a secure guest network.', 1, 1, NULL, NULL),
(213, 'Incident Response Plan (IRP)', 'IRO-04', 9, 15, 4, 'Mechanisms exist to maintain and make available a current and viable Incident Response Plan (IRP) to all stakeholders.', 1, 1, NULL, NULL),
(214, 'Incident Response Operations', 'IRO-01', 9, 15, 1, 'Mechanisms exist to implement and govern processes and documentation to facilitate an organization-wide response capability for cybersecurity and privacy-related incidents.', 1, 1, NULL, NULL),
(215, 'Data Breach', 'IRO-04.1', 8, 15, 4, 'Mechanisms exist to address data breaches, or other incidents involving the unauthorized disclosure of sensitive or regulated data, according to applicable laws, regulations and contractual obligations.', 1, 1, NULL, NULL),
(216, 'Incident Response Testing', 'IRO-06', 9, 15, 4, 'Mechanisms exist to formally test incident response capabilities through realistic exercises to determine the operational effectiveness of those capabilities.', 1, 1, NULL, NULL),
(217, 'Chain of Custody & Forensics', 'IRO-08', 9, 15, 4, 'Mechanisms exist to perform digital forensics and maintain the integrity of the chain of custody, in accordance with applicable laws, regulations and industry-recognized secure practices.', 1, 1, NULL, NULL),
(218, 'Incident Handling', 'IRO-02', 10, 15, 4, 'Mechanisms exist to report sensitive/regulated data incidents in a timely manner.', 1, 1, NULL, NULL),
(219, 'Cyber Incident Reporting for Sensitive Data', 'IRO-10.2', 9, 15, 2, 'Mechanisms exist to document, monitor and report the status of cybersecurity and privacy incidents to internal stakeholders all the way through the resolution of the incident.', 1, 1, NULL, NULL),
(220, 'Situational Awareness For Incidents', 'IRO-09', 8, 15, 2, 'Mechanisms exist to document, monitor and report the status of cybersecurity and privacy incidents to internal stakeholders all the way through the resolution of the incident.', 1, 1, NULL, NULL),
(221, 'Incident Stakeholder Reporting', 'IRO-10', 9, 15, 4, 'Mechanisms exist to timely-report incidents to applicable:\r\n▪ Internal stakeholders;\r\n▪ Affected clients & third-parties; and\r\n▪ Regulatory authorities.', 1, 1, NULL, NULL),
(222, 'Integrated Security Incident Response Team (ISIRT)', 'IRO-07', 9, 15, 4, 'Mechanisms exist to establish an integrated team of cybersecurity, IT and business function representatives that are capable of addressing cybersecurity and privacy incident response operations.', 1, 1, NULL, NULL),
(223, 'Incident Response Training', 'IRO-05', 9, 15, 4, 'Mechanisms exist to train personnel in their incident response roles and responsibilities.', 1, 1, NULL, NULL),
(224, 'Access Enforcement', 'IAC-20', 10, 15, 1, 'Mechanisms exist to enforce Logical Access Control (LAC) permissions that conform to the principle of \"least privilege.\"', 1, 1, NULL, NULL),
(225, 'User Responsibilities for Account Management', 'IAC-18', 10, 15, 1, 'Mechanisms exist to compel users to follow accepted practices in the use of authentication mechanisms (e.g., passwords, passphrases, physical or logical security tokens, smart cards, certificates, etc.).', 1, 1, NULL, NULL),
(226, 'Credential Sharing', 'IAC-19', 10, 15, 1, 'Mechanisms exist to prevent the sharing of generic IDs, passwords or other generic authentication methods.', 1, 1, NULL, NULL),
(227, 'Use of Privileged Utility Programs', 'IAC-20.3', 9, 15, 1, 'Mechanisms exist to restrict and tightly control utility programs that are capable of overriding system and application controls.', 1, 1, NULL, NULL),
(228, 'Session Termination', 'IAC-25', 9, 15, 1, 'Automated mechanisms exist to log out users, both locally on the network and for remote sessions, at the end of the session or after an organization-defined period of inactivity.\r\n\r\n\r\n', 1, 1, NULL, NULL),
(229, 'Least Privilege', 'IAC-21', 10, 15, 1, 'Mechanisms exist to utilize the concept of least privilege, allowing only authorized access to processes necessary to accomplish assigned tasks in accordance with organizational business functions.', 1, 1, NULL, NULL),
(230, 'Privileged Accounts', 'IAC-21.3', 10, 15, 1, 'Mechanisms exist to restrict the assignment of privileged accounts to organization-defined personnel or roles without management approval.', 1, 1, NULL, NULL),
(231, 'Revocation of Access Authorizations', 'IAC-20.6', 9, 15, 1, 'Mechanisms exist to revoke logical and physical access authorizations.', 1, 1, NULL, NULL),
(232, 'Auditing Use of Privileged Functions', 'IAC-21.4', 9, 15, 2, 'Mechanisms exist to audit the execution of privileged functions.', 1, 1, NULL, NULL),
(233, 'Account Lockout', 'IAC-22', 9, 15, 1, 'Mechanisms exist to enforce a limit for consecutive invalid login attempts by a user during an organization-defined time period and automatically locks the account when the maximum number of unsuccessful attempts is exceeded.', 1, 1, NULL, NULL),
(234, 'Access To Sensitive Data', 'IAC-20.1', 10, 15, 1, 'Mechanisms exist to limit access to sensitive/regulated data to only those individuals whose job requires such access.', 1, 1, NULL, NULL),
(235, 'Restrictions on Shared Groups / Accounts', 'IAC-15.5', 10, 15, 1, 'Mechanisms exist to authorize the use of shared/group accounts only under certain organization-defined conditions.', 1, 1, NULL, NULL),
(236, 'Account Management', 'IAC-15', 10, 15, 1, 'Mechanisms exist to proactively govern account management of individual, group, system, service, application, guest and temporary accounts.', 1, 1, NULL, NULL),
(237, 'Authenticator Management', 'IAC-10', 10, 15, 1, 'Mechanisms exist to securely manage authenticators for users and devices.', 1, 1, NULL, NULL),
(238, 'Vendor-Supplied Defaults', 'IAC-10.8', 10, 15, 1, 'Mechanisms exist to ensure vendor-supplied defaults are changed as part of the installation process.', 1, 1, NULL, NULL),
(239, 'Privileged Account Management (PAM)', 'IAC-16', 10, 15, 1, 'Mechanisms exist to restrict and control privileged access rights for users and services.', 1, 1, NULL, NULL),
(240, 'Periodic Review of Account Privileges', 'IAC-17', 10, 15, 2, 'Mechanisms exist to periodically-review the privileges assigned to individuals and service accounts to validate the need for such privileges and reassign or remove unnecessary privileges, as necessary.', 1, 1, NULL, NULL),
(241, 'Cryptographic Module Authentication', 'IAC-12', 8, 14, 1, 'Mechanisms exist to ensure cryptographic modules adhere to applicable statutory, regulatory and contractual requirements for security strength.', 1, 1, NULL, NULL),
(242, 'Password-Based Authentication', 'IAC-10.1', 9, 14, 1, 'Mechanisms exist to enforce complexity, length and lifespan considerations to ensure strong criteria for password-based authentication.', 1, 1, NULL, NULL),
(243, 'Disable Inactive Accounts', 'IAC-15.3', 10, 14, 1, 'Automated mechanisms exist to disable inactive accounts after an organization-defined time period.', 1, 1, NULL, NULL),
(244, 'Re-Authentication', 'IAC-14', 8, 14, 1, 'Mechanisms exist to force users and devices to re-authenticate according to organization-defined circumstances that necessitate re-authentication.', 1, 1, NULL, NULL),
(245, 'Protection of Authenticators', 'IAC-10.5', 10, 14, 1, 'Mechanisms exist to protect authenticators commensurate with the sensitivity of the information to which use of the authenticator permits access.', 1, 1, NULL, NULL),
(246, 'Identification & Authentication for Devices', 'IAC-04', 9, 14, 1, 'Mechanisms exist to uniquely identify and centrally Authenticate, Authorize and Audit (AAA) devices before establishing a connection using bidirectional authentication that is cryptographically- based and replay resistant.', 1, 1, NULL, NULL),
(247, 'Role-Based Access Control (RBAC)', 'IAC-08', 9, 14, 1, 'Mechanisms exist to enforce a Role-Based Access Control (RBAC) policy over users and resources that applies need-to-know and fine-grained access control for sensitive/regulated data access.', 1, 1, NULL, NULL),
(248, 'Termination of Employment', 'IAC-07.2', 10, 14, 1, 'Mechanisms exist to revoke user access rights in a timely manner, upon termination of employment or contract.', 1, 1, NULL, NULL),
(249, 'Network Access to Privileged Accounts', 'IAC-06.1', 9, 14, 1, 'Mechanisms exist to utilize Multi-Factor Authentication (MFA) to authenticate network access for privileged accounts.', 1, 1, NULL, NULL),
(250, 'Multi-Factor Authentication (MFA)', 'IAC-06', 9, 14, 1, 'Automated mechanisms exist to enforce Multi-Factor Authentication (MFA) for:\r\n▪ Remote network access;\r\n▪ Third-party systems, applications and/or services; and/ or\r\n▪ Non-console access to critical systems or systems that store, transmit and/or process sensitive/regulated data.', 1, 1, NULL, NULL),
(251, 'User Provisioning & De-Provisioning', 'IAC-07', 10, 14, 1, 'Mechanisms exist to utilize a formal user registration and de-registration process that governs the assignment of access rights.', 1, 1, NULL, NULL),
(252, 'User Identity (ID) Management', 'IAC-09.1', 9, 14, 1, 'Mechanisms exist to ensure proper user identification management for non-consumer users and administrators.', 1, 1, NULL, NULL),
(253, 'Identification & Authentication for Organizational Users', 'IAC-02', 9, 14, 1, 'Mechanisms exist to uniquely identify and centrally Authenticate, Authorize and Audit (AAA) organizational users and processes acting on behalf of organizational users.', 1, 1, NULL, NULL),
(254, 'Change of Roles & Duties', 'IAC-07.1', 10, 14, 1, 'Mechanisms exist to revoke user access rights following changes in personnel roles and duties, if no longer necessary or permitted.', 1, 1, NULL, NULL),
(255, 'Separation of Duties (SoD)', 'HRS-11', 7, 13, 1, 'Mechanisms exist to implement and maintain Separation of Duties (SoD) to prevent potential inappropriate activity without collusion.', 1, 1, NULL, NULL),
(256, 'Use of Mobile Devices', 'HRS-05.5', 9, 13, 3, 'Mechanisms exist to manage business risks associated with permitting mobile device access to organizational resources.', 1, 1, NULL, NULL),
(257, 'Personnel Sanctions', 'HRS-07', 9, 13, 4, 'Mechanisms exist to sanction personnel failing to comply with established security policies, standards and procedures.', 1, 1, NULL, NULL),
(258, 'Access Agreements', 'HRS-06', 10, 13, 3, 'Mechanisms exist to require internal and third-party users to sign appropriate access agreements prior to being granted access.', 1, 1, NULL, NULL),
(259, 'Personnel Transfer', 'HRS-08', 9, 13, 3, 'Mechanisms exist to adjust logical and physical access authorizations to systems and facilities upon personnel reassignment or transfer, in a timely manner.', 1, 1, NULL, NULL),
(260, 'Identity & Access Management (IAM)', 'IAC-01', 10, 14, 1, 'Mechanisms exist to facilitate the implementation of identification and access management controls.', 1, 1, NULL, NULL),
(261, 'Confidentiality Agreements', 'HRS-06.1', 10, 13, 3, 'Mechanisms exist to require Non-Disclosure Agreements (NDAs) or similar confidentiality agreements that reflect the needs to protect data and operational details, or both employees and third-parties.', 1, 1, NULL, NULL),
(262, 'Personnel Termination', 'HRS-09', 9, 13, 1, 'Mechanisms exist to govern the termination of individual employment.', 1, 1, NULL, NULL),
(263, 'User Awareness', 'HRS-03.1', 9, 13, 3, 'Mechanisms exist to communicate with users about their roles and responsibilities to maintain a safe and secure working environment.', 1, 1, NULL, NULL),
(264, 'Terms of Employment', 'HRS-05', 10, 13, 3, 'Mechanisms exist to require all employees and contractors to apply cybersecurity and privacy principles in their daily work.', 1, 1, NULL, NULL),
(265, 'Rules of Behavior', 'HRS-05.1', 10, 13, 3, 'Mechanisms exist to define acceptable and unacceptable rules of behavior for the use of technologies, including consequences for unacceptable behavior.', 1, 1, NULL, NULL),
(266, 'Social Media & Social Networking Restrictions', 'HRS-05.2', 9, 13, 3, 'Mechanisms exist to define rules of behavior that contain explicit restrictions on the use of social media and networking sites, posting information on commercial websites and sharing account information.', 1, 1, NULL, NULL),
(267, 'Use of Communications Technology', 'HRS-05.3', 10, 13, 3, 'Mechanisms exist to establish usage restrictions and implementation guidance for communications technologies based on the potential to cause damage to systems, if used maliciously.', 1, 1, NULL, NULL),
(268, 'Personnel Screening', 'HRS-04', 10, 13, 3, 'Mechanisms exist to manage personnel security risk by screening individuals prior to authorizing access.', 1, 1, NULL, NULL),
(269, 'Roles & Responsibilities', 'HRS-03', 10, 13, 3, 'Mechanisms exist to define cybersecurity responsibilities for all personnel.', 1, 1, NULL, NULL),
(270, 'Use of Critical Technologies', 'HRS-05.4', 9, 13, 3, 'Mechanisms exist to govern usage policies for critical technologies.', 1, 1, NULL, NULL),
(271, 'Competency Requirements for Security-Related Positions', 'HRS-03.2', 9, 13, 3, 'Mechanisms exist to ensure that all security-related positions are staffed by qualified individuals who have the necessary skill set.', 1, 1, NULL, NULL),
(272, 'Automatic Antimalware Signature Updates', 'END-04.1', 9, 12, 1, 'Mechanisms exist to automatically update antimalware technologies, including signature definitions.', 1, 1, NULL, NULL),
(273, 'Evolving Malware Threats', 'END-04.6', 3, 12, 2, 'Mechanisms exist to perform periodic evaluations evolving malware threats to assess systems that are generally not considered to be commonly affected by malicious software.', 1, 1, NULL, NULL),
(274, 'Position Categorization', 'HRS-02', 8, 13, 3, 'Mechanisms exist to manage personnel security risk by assigning a risk designation to all positions and establishing screening criteria for individuals filling those positions.', 1, 1, NULL, NULL),
(275, 'Governing Access Restriction for Change', 'END-03.2', 8, 12, 1, 'Mechanisms exist to define, document, approve and enforce access restrictions associated with changes to systems.', 1, 1, NULL, NULL),
(276, 'Endpoint File Integrity Monitoring (FIM)', 'END-06', 8, 12, 1, 'Mechanisms exist to utilize File Integrity Monitor (FIM) technology to detect and report unauthorized changes to system files and configurations.', 1, 1, NULL, NULL),
(277, 'Software Firewall', 'END-05', 9, 12, 1, 'Mechanisms exist to utilize host-based firewall software, or a similar technology, on all information systems, where technically feasible.', 1, 1, NULL, NULL),
(278, 'Human Resources Security Management', 'HRS-01', 10, 13, 1, 'Mechanisms exist to facilitate the implementation of personnel security controls.', 1, 1, NULL, NULL),
(279, 'Restrict Access To Security Functions', 'END-16', 7, 12, 1, 'Mechanisms exist to ensure security functions are restricted to authorized individuals and enforce least privilege control requirements for necessary job functions.', 1, 1, NULL, NULL),
(280, 'Endpoint Protection Measures', 'END-02', 9, 12, 1, 'Mechanisms exist to protect the confidentiality, integrity, availability and safety of endpoint devices.', 1, 1, NULL, NULL),
(281, 'Information Sharing', 'DCH-14', 9, 11, 1, 'Mechanisms exist to utilize a process to assist users in making information sharing decisions to ensure data is appropriately protected.', 1, 1, NULL, NULL),
(282, 'Media & Data Retention', 'DCH-18', 8, 11, 1, 'Mechanisms exist to retain media and data in accordance with applicable statutory, regulatory and contractual obligations.', 1, 1, NULL, NULL),
(283, 'Prohibit Installation Without Privileged Status', 'END-03', 9, 12, 1, 'Automated mechanisms exist to prohibit software installations without explicitly assigned privileged status.\r\n', 1, 1, NULL, NULL),
(284, 'Endpoint Security', 'END-01', 10, 12, 1, 'Mechanisms exist to facilitate the implementation of endpoint security controls.', 1, 1, NULL, NULL),
(285, 'Information Disposal', 'DCH-21', 10, 11, 1, 'Mechanisms exist to securely dispose of, destroy or erase information.', 1, 1, NULL, NULL),
(286, 'Portable Storage Devices', 'DCH-13.2', 9, 11, 1, 'Mechanisms exist to restrict or prohibit the use of portable storage devices by users on external systems.', 1, 1, NULL, NULL),
(287, 'Physical Media Disposal', 'DCH-08', 10, 11, 1, 'Mechanisms exist to securely dispose of media when it is no longer required, using formal procedures.', 1, 1, NULL, NULL),
(288, 'Storing Authentication Data', 'DCH-06.5', 5, 11, 1, 'Mechanisms exist to prohibit the storage of sensitive transaction authentication data after authorization.', 1, 1, NULL, NULL),
(289, 'Custodians', 'DCH-07.1', 9, 11, 1, 'Mechanisms exist to identify custodians throughout the transport of digital or non-digital media.', 1, 1, NULL, NULL),
(290, 'Removable Media Security', 'DCH-12', 10, 11, 1, 'Mechanisms exist to restrict removable media in accordance with data handling and acceptable usage parameters.', 1, 1, NULL, NULL),
(291, 'Digital Media Sanitization', 'DCH-09', 10, 11, 1, 'Mechanisms exist to sanitize digital media with the strength and integrity commensurate with the classification or sensitivity of the information prior to disposal, release out of organizational control or release for reuse.', 1, 1, NULL, NULL),
(292, 'Media Use', 'DCH-10', 8, 11, 1, 'Mechanisms exist to restrict the use of types of digital media on systems or system components.', 1, 1, NULL, NULL),
(293, 'Media Transportation', 'DCH-07', 9, 11, 1, 'Mechanisms exist to protect and control digital and non-digital media during transport outside of controlled areas using appropriate security measures.', 1, 1, NULL, NULL),
(294, 'Media Sanitization Documentation', 'DCH-09.1', 7, 11, 1, 'Mechanisms exist to supervise, track, document and verify media sanitization and disposal actions.', 1, 1, NULL, NULL),
(295, 'Making Sensitive Data Unreadable In Storage', 'DCH-06.4', 9, 11, 1, 'Mechanisms exist to ensure sensitive/regulated data is rendered human unreadable anywhere sensitive/regulated data is stored.', 1, 1, NULL, NULL),
(296, 'Media Access', 'DCH-03', 8, 11, 1, 'Mechanisms exist to control and restrict access to digital and non-digital media to authorized individuals.', 1, 1, NULL, NULL),
(297, 'Media Marking', 'DCH-04', 7, 11, 1, 'Mechanisms exist to mark media in accordance with data protection requirements so that personnel are alerted to distribution limitations, handling caveats and applicable security requirements.', 1, 1, NULL, NULL),
(298, 'Media Storage', 'DCH-06', 8, 11, 1, 'Mechanisms exist to:\r\n▪ Physically control and securely store digital and non-digital media within controlled areas using organization-defined security measures; and\r\n▪ Protect system media until the media are destroyed or sanitized using approved equipment, techniques and procedures.', 1, 1, NULL, NULL),
(299, 'Physically Secure All Media', 'DCH-06.1', 9, 11, 1, 'Mechanisms exist to physically secure all media that contains sensitive information.', 1, 1, NULL, NULL),
(300, 'Data & Asset Classification', 'DCH-02', 10, 11, 3, 'Mechanisms exist to ensure data and assets are categorized in accordance with applicable statutory, regulatory and contractual requirements.', 1, 1, NULL, NULL),
(301, 'Sensitive Data Inventories', 'DCH-06.2', 9, 11, 2, 'Mechanisms exist to maintain inventory logs of all sensitive media and conduct sensitive media inventories at least annually.', 1, 1, NULL, NULL),
(302, 'Disclosure of Information', 'DCH-03.1', 10, 11, 1, 'Mechanisms exist to restrict the disclosure of sensitive / regulated data to authorized parties with a need to know.', 1, 1, NULL, NULL),
(303, 'Cryptographic Key Management', 'CRY-09', 10, 11, 1, 'Mechanisms exist to facilitate cryptographic key management controls to protect the confidentiality, integrity and availability of keys.', 1, 1, NULL, NULL),
(304, 'Control & Distribution of Cryptographic Keys', 'CRY-09.4', 9, 10, 1, 'Mechanisms exist to facilitate the secure distribution of symmetric and asymmetric cryptographic keys using industry recognized key management technology and processes.', 1, 1, NULL, NULL),
(305, 'Certificate Authorities', 'CRY-11', 8, 10, 1, 'Automated mechanisms exist to enable the use of organization-defined Certificate Authorities (CAs) to facilitate the establishment of protected sessions.', 1, 1, NULL, NULL),
(306, 'Wireless Access Authentication & Encryption', 'CRY-07', 9, 10, 1, 'Mechanisms exist to protect wireless access via secure authentication and encryption.', 1, 1, NULL, NULL),
(307, 'Availability', 'CRY-08.1', 9, 10, 5, 'Resiliency mechanisms exist to ensure the availability of data in the event of the loss of cryptographic keys.', 1, 1, NULL, NULL),
(308, 'Data Protection', 'DCH-01', 10, 11, 1, 'Mechanisms exist to facilitate the implementation of data protection controls.', 1, 1, NULL, NULL),
(309, 'Cryptographic Key Loss or Change', 'CRY-09.3', 8, 10, 1, 'Mechanisms exist to ensure the availability of information in the event of the loss of cryptographic keys by individual users.', 1, 1, NULL, NULL),
(310, 'Use of Cryptographic Controls', 'CRY-01', 10, 10, 1, 'Mechanisms exist to facilitate the implementation of cryptographic protections controls using known public standards and trusted cryptographic technologies.', 1, 1, NULL, NULL),
(311, 'Database Encryption', 'CRY-05.3', 8, 10, 1, 'Mechanisms exist to ensure that database servers utilize encryption to protect the confidentiality of the data within the databases.', 1, 1, NULL, NULL),
(312, 'Database Encryption', 'CRY-05.3', 8, 10, 1, 'Mechanisms exist to ensure that database servers utilize encryption to protect the confidentiality of the data within the databases.', 1, 1, NULL, NULL),
(313, 'Cryptographic Module Authentication', 'CRY-02', 8, 10, 1, 'Automated mechanisms exist to enable systems to authenticate to a cryptographic module.', 1, 1, NULL, NULL),
(314, 'Transmission Confidentiality', 'CRY-03', 10, 10, 1, 'Cryptographic mechanisms exist to protect the confidentiality of data being transmitted.', 1, 1, NULL, NULL),
(315, 'Anomalous Behavior', 'MON-16', 10, 9, 2, 'Mechanisms exist to detect and respond to anomalous behavior that could indicate account compromise or other malicious activities.', 1, 1, NULL, NULL),
(316, 'Export-Controlled Technology', 'CRY-01.2', 5, 10, 1, 'Mechanisms exist to address the exporting of cryptographic technologies in compliance with relevant statutory and regulatory requirements.', 1, 1, NULL, NULL),
(317, 'Transmission Integrity', 'CRY-04', 10, 10, 1, 'Cryptographic mechanisms exist to protect the integrity of data being transmitted.', 1, 1, NULL, NULL),
(318, 'Encrypting Data At Rest', 'CRY-05', 10, 10, 1, 'Cryptographic mechanisms exist to prevent unauthorized disclosure of data at rest.', 1, 1, NULL, NULL),
(319, 'Privileged Functions Logging', 'MON-03.3', 8, 9, 2, 'Mechanisms exist to log and review the actions of users and/or services with elevated privileges.', 1, 1, NULL, NULL),
(320, 'Reviews & Updates', 'MON-01.8', 10, 9, 2, 'Mechanisms exist to review event logs on an ongoing basis and escalate incidents in accordance with established timelines and procedures.', 1, 1, NULL, NULL),
(321, 'Centralized Collection of Security Event Logs', 'MON-02', 10, 7, 2, 'Mechanisms exist to utilize a Security Incident Event Manager (SIEM) or similar automated tool, to support the centralized collection of security-related event logs.', 1, 1, NULL, NULL),
(322, 'Content of Audit Records', 'MON-03', 10, 7, 2, 'Mechanisms exist to configure systems to produce audit records that contain sufficient information to, at a minimum:\r\n▪ Establish what type of event occurred;\r\n▪ When (date and time) the event occurred;\r\n▪ Where the event occurred;\r\n▪ The source of the event;\r\n▪ The outcome (success or failure) of the event; and\r\n▪ The identity of any user/subject associated with the event.', 1, 1, NULL, NULL),
(323, 'Central Review & Analysis', 'MON-02.2', 5, 7, 2, 'Automated mechanisms exist to centrally collect, review and analyze audit records from multiple sources.', 1, 1, NULL, NULL),
(324, 'Time Stamps', 'MON-07', 10, 7, 2, 'Mechanisms exist to configure systems to use an authoritative time source to generate time stamps for event logs.', 1, 1, NULL, NULL),
(325, 'Protection of Event Logs', 'MON-08', 10, 7, 2, 'Mechanisms exist to protect event logs and audit tools from unauthorized access, modification and deletion.', 1, 1, NULL, NULL),
(326, 'Event Log Retention', 'MON-10', 10, 7, 2, 'Mechanisms exist to retain event logs for a time period consistent with records retention requirements to provide support for after-the-fact investigations of security incidents and to meet statutory, regulatory and contractual retention requirements.', 1, 1, NULL, NULL),
(327, 'Database Logging', 'MON-03.7', 8, 7, 2, 'Mechanisms exist to ensure databases produce audit records that contain sufficient information to monitor database activities.', 1, 1, NULL, NULL),
(328, 'File Integrity Monitoring (FIM)', 'MON-01.7', 9, 7, 2, 'Mechanisms exist to utilize a File Integrity Monitor (FIM), or similar change-detection technology, on critical assets to generate alerts for unauthorized modifications.', 1, 1, NULL, NULL),
(329, 'Automated Tools for Real-Time Analysis', 'MON-01.2', 9, 7, 2, 'Mechanisms exist to utilize a Security Incident Event Manager (SIEM), or similar automated tool, to support near real-time analysis and incident escalation.', 1, 1, NULL, NULL),
(330, 'Continuous Monitoring', 'MON-01', 10, 7, 2, 'Mechanisms exist to facilitate the implementation of enterprise-wide monitoring controls.', 1, 1, NULL, NULL),
(331, 'Least Functionality', 'CFG-03', 10, 7, 1, 'Mechanisms exist to configure systems to provide only essential capabilities by specifically prohibiting or restricting the use of ports, protocols, and/or services.', 1, 1, NULL, NULL),
(332, 'System Generated Alerts', 'MON-01.4', 7, 7, 2, 'Mechanisms exist to monitor, correlate and respond to alerts from physical, cybersecurity, privacy and supply chain activities to achieve integrated situational awareness.', 1, 1, NULL, NULL),
(333, 'Periodic Review', 'CFG-03.1', 8, 7, 2, 'Mechanisms exist to periodically review system configurations to identify and disable unnecessary and/or non-secure functions, ports, protocols and services.', 1, 1, NULL, NULL),
(334, 'Unauthorized or Authorized Software (Blacklisting or Whitelisting)', 'CFG-03.3', 5, 7, 1, 'Mechanisms exist to whitelist or blacklist applications in an order to limit what is authorized to execute on systems.', 1, 1, NULL, NULL),
(335, 'Network Device Configuration File Synchronization', 'CFG-02.6', 7, 7, 1, 'Mechanisms exist to configure network devices to synchronize startup and running configuration files.', 1, 1, NULL, NULL),
(336, 'System Hardening Through Baseline Configurations', 'CFG-02', 10, 7, 1, 'Mechanisms exist to develop, document and maintain secure baseline configurations for technology platform that are consistent with industry-accepted system hardening standards.', 1, 1, NULL, NULL),
(337, 'Security Assessments', 'CPL-03', 10, 7, 2, 'Mechanisms exist to ensure managers regularly review the processes and documented procedures within their area of responsibility to adhere to appropriate security policies, standards and other applicable requirements.', 1, 1, NULL, NULL),
(338, 'Functional Review Of Security Controls', 'CPL-03.2', 8, 6, 2, 'Mechanisms exist to regularly review technology assets for adherence to the organization’s cybersecurity and privacy policies and standards.', 1, 1, NULL, NULL),
(339, 'Independent Assessors', 'CPL-03.1', 6, 6, 2, 'Mechanisms exist to utilize independent assessors to evaluate security & privacy controls at planned intervals or when the system, service or project undergoes significant changes.', 1, 1, NULL, NULL),
(340, 'Audit Activities', 'CPL-04', 5, 6, 3, 'Mechanisms exist to thoughtfully plan audits by including input from operational risk and compliance partners to minimize the impact of audit-related activities on business operations.', 1, 1, NULL, NULL),
(341, 'Development & Test Environment Configurations', 'CFG-02.4', 5, 7, 1, 'Mechanisms exist to manage baseline configurations for development and test environments separately from operational baseline configurations to minimize the risk of unintentional changes.', 1, 1, NULL, NULL),
(342, 'Internal Audit Function', 'CPL-02.1', 5, 6, 2, 'Mechanisms exist to implement an internal audit function that is capable of providing senior organization management with insights into the appropriateness of the organization\'s technology and information governance processes.', 1, 1, NULL, NULL),
(343, 'Security & Privacy Controls Oversight', 'CPL-02', 10, 6, 2, 'Mechanisms exist to provide a security & privacy controls oversight function that reports to the organization\'s executive leadership.', 1, 1, NULL, NULL),
(344, 'Configuration Management Program', 'CFG-01', 9, 7, 1, 'Mechanisms exist to facilitate the implementation of configuration management controls.', 1, 1, NULL, NULL),
(345, 'Cryptographic Management', 'CHG-02.5', 5, 4, 1, 'Mechanisms exist to govern assets involved in providing cryptographic protections according to the organization\'s configuration management processes.', 1, 1, NULL, NULL),
(346, 'Test, Validate & Document Changes', 'CHG-02.2', 9, 4, 1, 'Mechanisms exist to appropriately test and document proposed changes in a non-production environment before changes are implemented in a production environment.', 1, 1, NULL, NULL),
(347, 'Stakeholder Notification of Changes', 'CHG-05', 9, 4, 1, 'Mechanisms exist to ensure stakeholders are made aware of and understand the impact of proposed changes.', 1, 1, NULL, NULL),
(348, 'Statutory, Regulatory & Contractual Compliance', 'CPL-01', 10, 6, 3, 'Mechanisms exist to facilitate the identification and implementation of relevant statutory, regulatory and contractual controls.', 1, 1, NULL, NULL),
(349, 'Compliance Scope', 'CPL-01.2', 10, 6, 3, 'Mechanisms exist to document and validate the scope of cybersecurity and privacy controls that are determined to meet statutory, regulatory and/or contractual compliance obligations.', 1, 1, NULL, NULL),
(350, 'Non-Compliance Oversight', 'CPL-01.1', 9, 6, 4, 'Mechanisms exist to document and review instances of non-compliance with statutory, regulatory and/or contractual obligations to develop appropriate risk mitigation actions.', 1, 1, NULL, NULL),
(351, 'Customer Responsibility Matrix (CRM)', 'CLD-06.1', 8, 5, 3, 'Mechanisms exist to formally document a Customer Responsibility Matrix (CRM), delineating assigned responsibilities for controls between the Cloud Service Provider (CSP) and its customers.', 1, 1, NULL, NULL),
(352, 'Cloud Services', 'CLD-06.1', 10, 5, 1, 'Mechanisms exist to facilitate the implementation of cloud management controls to ensure cloud instances are secure and in-line with industry practices.', 1, 1, NULL, NULL),
(353, 'Security Impact Analysis for Changes', 'CHG-03', 9, 4, 1, 'Mechanisms exist to analyze proposed changes for potential security impacts, prior to the implementation of the change.', 1, 1, NULL, NULL),
(354, 'Data Backups', 'BCD-11', 10, 2, 1, 'Mechanisms exist to create recurring backups of data, software and/or system images, as well as verify the integrity of these backups, to ensure the availability of the data to satisfying Recovery Time Objectives (RTOs) and Recovery Point Objectives (RPOs).', 1, 1, NULL, NULL),
(355, 'Configuration Change Control', 'CHG-02', 8, 4, 1, 'Mechanisms exist to govern the technical configuration change control processes.', 1, 1, NULL, NULL),
(356, 'Redundant Secondary System', 'BCD-11.7', 5, 2, 1, 'Mechanisms exist to maintain a failover system, that is not collocated with the primary system, application and/or service, which can be activated with little-to-no loss of information or disruption to operations.', 1, 1, NULL, NULL),
(357, 'Capacity & Performance Management', 'CAP-01', 8, 3, 1, 'Mechanisms exist to facilitate the implementation of capacity management controls to ensure optimal system performance to meet expected and anticipated future capacity requirements.', 1, 1, NULL, NULL),
(358, 'Capacity Planning', 'CAP-03', 8, 3, 1, 'Mechanisms exist to conduct capacity planning so that necessary capacity for information processing, telecommunications and environmental support will exist during contingency operations.', 1, 1, NULL, NULL),
(359, 'Separate Storage for Critical Information', 'BCD-11.2', 8, 2, 1, 'Mechanisms exist to store backup copies of critical software and other security-related information in a separate facility or in a fire-rated container that is not collocated with the system being backed up.', 1, 1, NULL, NULL),
(360, 'Testing for Reliability & Integrity', 'BCD-11.1', 9, 2, 5, 'Mechanisms exist to routinely test backups that verifies the reliability of the backup process, as well as the integrity and availability of the data.', 1, 1, NULL, NULL),
(361, 'Performance Monitoring', 'CAP-04', 7, 3, 2, 'Automated mechanisms exist to centrally-monitor and alert on the operating state and health status of critical systems, applications and services.', 1, 1, NULL, NULL),
(362, 'Change Management Program', 'CHG-01', 10, 4, 1, 'Mechanisms exist to facilitate the implementation of a change management program.', 1, 1, NULL, NULL),
(363, 'Inspection of Systems, Components & Devices', 'AST-15.1', 6, 1, 2, 'Mechanisms exist to physically and logically inspect critical technology assets to detect evidence of tampering.', 1, 1, NULL, NULL),
(364, 'Alternate Processing Site', 'BCD-09', 9, 2, 1, 'Mechanisms exist to establish an alternate processing site that provides security measures equivalent to that of the primary site.', 1, 1, NULL, NULL),
(365, 'Bring Your Own Device (BYOD) Usage', 'AST-16', 10, 1, 3, 'Mechanisms exist to implement and govern a Bring Your Own Device (BYOD) program to reduce risk associated with personally-owned devices in the workplace.', 1, 1, NULL, NULL),
(366, 'Alternative Security Measures', 'BCD-07', 9, 2, 1, 'Mechanisms exist to implement alternative or compensating controls to satisfy security functions when the primary means of implementing the security function is unavailable or compromised.', 1, 1, NULL, NULL),
(367, 'Alternate Storage Site', 'BCD-08', 9, 2, 1, 'Mechanisms exist to establish an alternate storage site that includes both the assets and necessary agreements to permit the storage and recovery of system backup information.', 1, 1, NULL, NULL),
(368, 'Business Continuity Management System (BCMS)', 'BCD-01', 10, 2, 5, 'Mechanisms exist to facilitate the implementation of contingency planning controls to help ensure resilient assets and services.', 1, 1, NULL, NULL),
(369, 'Contingency Plan Testing & Exercises', 'BCD-04', 6, 2, 5, 'Mechanisms exist to conduct tests and/or exercises to evaluate the contingency plan\'s effectiveness and the organization’s readiness to execute the plan.', 1, 1, NULL, NULL),
(370, 'Tamper Protection', 'AST-15', 6, 1, 1, 'Mechanisms exist to verify logical configuration settings and the physical integrity of critical technology assets throughout their lifecycle.', 1, 1, NULL, NULL),
(371, 'Return of Assets', 'AST-10', 8, 1, 1, 'Does the organization authorize, control and track technology assets entering and exiting organizational facilities?', 1, 1, NULL, NULL),
(372, 'Network Diagrams & Data Flow Diagrams (DFDs)', 'AST-04', 10, 1, 3, 'Mechanisms exist to maintain network architecture diagrams that:\r\n▪ Contain sufficient detail to assess the security of the network\'s architecture;\r\n▪ Reflect the current architecture of the network environment; and\r\n▪ Document all sensitive/regulated data flows.', 1, 1, NULL, NULL),
(373, 'Secure Disposal, Destruction or Re-Use of Equipment', 'AST-09', 10, 1, 3, 'Mechanisms exist to securely dispose of, destroy or repurpose system components using organization-defined techniques and methods to prevent information being recovered from these components.', 1, 1, NULL, NULL),
(374, 'Removal of Assets', 'AST-11', 8, 1, 1, 'Mechanisms exist to authorize, control and track technology assets entering and exiting organizational facilities.\r\n\r\n', 1, 1, NULL, NULL),
(375, 'Tamper Detection', 'AST-08', 9, 1, 2, 'Mechanisms exist to periodically inspect systems and system components for Indicators of Compromise (IoC).', 1, 1, NULL, NULL),
(376, 'Asset Ownership Assignment', 'AST-03', 8, 1, 3, 'Mechanisms exist to ensure asset ownership responsibilities are assigned, tracked and managed at a team, individual, or responsible organization level to establish a common understanding of requirements for asset protection.', 1, 1, NULL, NULL),
(377, 'Security of Assets & Media', 'AST-05', 8, 1, 3, 'Mechanisms exist to maintain strict control over the internal or external distribution of any kind of sensitive/regulated media.', 1, 1, NULL, NULL),
(378, 'Kiosks & Point of Interaction (PoI) Devices', 'AST-07', 8, 1, 1, 'Mechanisms exist to appropriately protect devices that capture sensitive/regulated data via direct physical interaction from tampering and substitution.', 1, 1, NULL, NULL),
(379, 'Unattended End-User Equipment', 'AST-06', 9, 1, 1, 'Mechanisms exist to implement enhanced protection measures for unattended systems to protect against tampering and unauthorized access.', 1, 1, NULL, NULL),
(380, 'Forced Technology Transfer (FTT)', 'GOV-12', 10, 24, 1, 'Mechanisms exist to avoid and/or constrain the forced exfiltration of sensitive / regulated information (e.g., Intellectual Property (IP)) to the host government for purposes of market access or market management practices.', 1, 1, NULL, NULL),
(381, 'Select Controls', 'GOV-15.1', 8, 24, 1, 'Mechanisms exist to compel data and/or process owners to select required cybersecurity and privacy controls for each system, application and/or service under their control.', 1, 1, NULL, NULL),
(382, 'Defining Business Context & Mission', 'GOV-08', 5, 24, 3, 'Mechanisms exist to define the context of its business model and document the mission of the organization.', 1, 1, NULL, NULL),
(383, 'Contacts With Groups & Associations', 'GOV-07', 7, 24, 3, 'Mechanisms exist to establish contact with selected groups and associations within the cybersecurity & privacy communities to:\r\n▪ Facilitate ongoing cybersecurity and privacy education and training for organizational personnel;\r\n▪ Maintain currency with recommended cybersecurity and privacy practices, techniques and technologies; and\r\n▪ Share current security-related information including threats, vulnerabilities and incidents.', 1, 1, NULL, NULL),
(384, 'Network Access Control (NAC)', 'AST-02.5', 4, 1, 1, 'Automated mechanisms exist to employ Network Access Control (NAC), or a similar technology, that is capable of detecting unauthorized devices and disable network access to those unauthorized devices.', 1, 1, NULL, NULL),
(385, 'Software Licensing Restrictions', 'AST-02.7', 8, 1, 3, 'Mechanisms exist to protect Intellectual Property (IP) rights with software licensing restrictions.', 1, 1, NULL, NULL),
(386, 'Asset Governance', 'AST-01', 10, 1, 3, 'Mechanisms exist to facilitate an IT Asset Management (ITAM) program to implement and manage asset management controls.', 1, 1, NULL, NULL),
(387, 'Asset Inventories', 'AST-02', 10, 1, 3, 'Mechanisms exist to perform inventories of technology assets that:\r\n▪ Accurately reflects the current systems, applications and services in use;\r\n▪ Identifies authorized software products, including business justification details;\r\n▪ Is at the level of granularity deemed necessary for tracking and reporting;\r\n▪ Includes organization-defined information deemed necessary to achieve effective property accountability; and\r\n▪ Is available for review and audit by designated organizational personnel.\r\n', 1, 1, NULL, NULL),
(388, 'Steering Committee', 'GOV-01.1', 7, 24, 3, 'Mechanisms exist to coordinate cybersecurity, privacy and business alignment through a steering committee or advisory board, comprising of key cybersecurity, privacy and business executives, which meets formally and on a regular basis.', 1, 1, NULL, NULL),
(389, 'Assigned Security & Privacy Responsibilities', 'GOV-04', 10, 24, 3, 'Mechanisms exist to assign a qualified individual with the mission and resources to centrally-manage, coordinate, develop, implement and maintain an enterprise-wide cybersecurity and privacy program.', 1, 1, NULL, NULL),
(390, 'Measures of Performance', 'GOV-05', 6, 24, 1, 'Mechanisms exist to develop, report and monitor cybersecurity and privacy program measures of performance.', 1, 1, NULL, NULL),
(391, 'Contacts With Authorities', 'GOV-06', 5, 24, 3, 'Mechanisms exist to identify and document appropriate contacts with relevant law enforcement and regulatory bodies.', 1, 1, NULL, NULL),
(392, 'Periodic Review & Update of Security & Privacy Program', 'GOV-03', 7, 24, 3, 'Mechanisms exist to review the cybersecurity and privacy program, including policies, standards and procedures, at planned intervals or if significant changes occur to ensure their continuing suitability, adequacy and effectiveness.', 1, 1, NULL, NULL),
(393, 'Publishing Security & Privacy Documentation', 'GOV-02', 10, 24, 3, 'Mechanisms exist to establish, maintain and disseminate cybersecurity and privacy policies, standards and procedures.', 1, 1, NULL, NULL),
(394, 'Security & Privacy Governance Program', 'GOV-01', 10, 24, 3, 'Mechanisms exist to facilitate the implementation of cybersecurity and privacy governance controls.', 1, 1, NULL, NULL),
(395, 'Malicious Code Protection (Anti-Malware)', 'END-04', NULL, 12, 2, 'Mechanisms exist to utilize antimalware technologies to detect and eradicate malicious code.', 1, 1, '2024-07-15 10:54:56', '2024-07-15 10:54:56');

-- --------------------------------------------------------

--
-- Table structure for table `control_code_evidence`
--

CREATE TABLE `control_code_evidence` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `control_code_id` bigint(20) UNSIGNED NOT NULL,
  `evidence_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `control_code_evidence`
--

INSERT INTO `control_code_evidence` (`id`, `control_code_id`, `evidence_id`, `created_at`, `updated_at`) VALUES
(1, 382, 26, NULL, NULL),
(2, 382, 29, NULL, NULL),
(3, 382, 23, NULL, NULL),
(4, 349, 248, NULL, NULL),
(5, 394, 258, NULL, NULL),
(6, 394, 23, NULL, NULL),
(7, 394, 250, NULL, NULL),
(8, 394, 243, NULL, NULL),
(9, 394, 79, NULL, NULL),
(10, 392, 273, NULL, NULL),
(11, 392, 111, NULL, NULL),
(12, 388, 258, NULL, NULL),
(13, 388, 23, NULL, NULL),
(14, 388, 250, NULL, NULL),
(15, 388, 243, NULL, NULL),
(16, 388, 79, NULL, NULL),
(17, 393, 123, NULL, NULL),
(18, 393, 153, NULL, NULL),
(19, 393, 242, NULL, NULL),
(20, 393, 194, NULL, NULL),
(21, 393, 328, NULL, NULL),
(22, 393, 25, NULL, NULL),
(23, 393, 151, NULL, NULL),
(24, 393, 111, NULL, NULL),
(25, 393, 82, NULL, NULL),
(26, 393, 143, NULL, NULL),
(27, 393, 119, NULL, NULL),
(28, 393, 58, NULL, NULL),
(29, 393, 279, NULL, NULL),
(30, 393, 138, NULL, NULL),
(31, 389, 291, NULL, NULL),
(32, 389, 30, NULL, NULL),
(33, 389, 150, NULL, NULL),
(34, 389, 291, NULL, NULL),
(35, 389, 30, NULL, NULL),
(36, 389, 150, NULL, NULL),
(37, 389, 329, NULL, NULL),
(38, 389, 291, NULL, NULL),
(39, 389, 30, NULL, NULL),
(40, 389, 150, NULL, NULL),
(41, 389, 329, NULL, NULL),
(42, 389, 330, NULL, NULL),
(43, 389, 287, NULL, NULL),
(44, 389, 202, NULL, NULL),
(45, 389, 93, NULL, NULL),
(46, 138, 220, NULL, NULL),
(47, 362, 200, NULL, NULL),
(48, 362, 259, NULL, NULL),
(49, 362, 17, NULL, NULL),
(50, 362, 15, NULL, NULL),
(51, 362, 239, NULL, NULL),
(52, 362, 72, NULL, NULL),
(53, 152, 46, NULL, NULL),
(54, 269, 30, NULL, NULL),
(55, 269, 150, NULL, NULL),
(56, 269, 82, NULL, NULL),
(57, 269, 252, NULL, NULL),
(58, 269, 255, NULL, NULL),
(59, 269, 46, NULL, NULL),
(60, 269, 213, NULL, NULL),
(61, 269, 21, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `control_code_policies`
--

CREATE TABLE `control_code_policies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `control_code_id` bigint(20) UNSIGNED NOT NULL,
  `policy_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `control_code_policies`
--

INSERT INTO `control_code_policies` (`id`, `control_code_id`, `policy_id`, `created_at`, `updated_at`) VALUES
(2, 382, 68, NULL, NULL),
(3, 382, 49, NULL, NULL),
(4, 382, 28, NULL, NULL),
(5, 382, 50, NULL, NULL),
(6, 381, 44, NULL, NULL),
(7, 349, 50, NULL, NULL),
(8, 394, 52, NULL, NULL),
(9, 394, 37, NULL, NULL),
(10, 394, 9, NULL, NULL),
(11, 394, 68, NULL, NULL),
(12, 394, 42, NULL, NULL),
(13, 392, 10, NULL, NULL),
(14, 392, 68, NULL, NULL),
(15, 392, 28, NULL, NULL),
(16, 392, 43, NULL, NULL),
(17, 392, 22, NULL, NULL),
(18, 390, 9, NULL, NULL),
(19, 390, 68, NULL, NULL),
(20, 390, 7, NULL, NULL),
(21, 390, 28, NULL, NULL),
(22, 388, 52, NULL, NULL),
(23, 388, 37, NULL, NULL),
(24, 388, 9, NULL, NULL),
(25, 388, 68, NULL, NULL),
(26, 388, 42, NULL, NULL),
(27, 393, 53, NULL, NULL),
(28, 393, 10, NULL, NULL),
(29, 393, 68, NULL, NULL),
(30, 393, 28, NULL, NULL),
(31, 393, 22, NULL, NULL),
(32, 389, 28, NULL, NULL),
(33, 389, 42, NULL, NULL),
(34, 138, 68, NULL, NULL),
(35, 138, 28, NULL, NULL),
(36, 138, 55, NULL, NULL),
(37, 144, 55, NULL, NULL),
(38, 145, 55, NULL, NULL),
(39, 362, 60, NULL, NULL),
(40, 362, 28, NULL, NULL),
(41, 152, 68, NULL, NULL),
(42, 269, 42, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `control_domains`
--

CREATE TABLE `control_domains` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `control_domains`
--

INSERT INTO `control_domains` (`id`, `name`, `description`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'Asset Management', 'Asset Management', 1, 1, NULL, NULL),
(2, 'Business Continuity And Disaster Recovery', 'Business Continuity And Disaster Recovery', 1, 1, NULL, NULL),
(3, 'Capacity And Performance Planning', 'Capacity And Performance Planning', 1, 1, NULL, NULL),
(4, 'Change Management', 'Change Management', 1, 1, NULL, NULL),
(5, 'Cloud Security', 'Cloud Security', 1, 1, NULL, NULL),
(6, 'Compliance', 'Compliance', 1, 1, NULL, NULL),
(7, 'Configuration Management', 'Configuration Management', 1, 1, NULL, NULL),
(9, 'Continuous Monitoring', 'Continuous Monitoring', 1, 1, NULL, NULL),
(10, 'Cryptographic Protections', 'Cryptographic Protections', 1, 1, NULL, NULL),
(11, 'Data Classification And Handling', 'Data Classification And Handling', 1, 1, NULL, NULL),
(12, 'Endpoint Security', 'Endpoint Security', 1, 1, NULL, NULL),
(13, 'Human Resources Security', 'Human Resources Security', 1, 1, NULL, NULL),
(14, 'Identification And Authentication', 'Identification And Authentication', 1, 1, NULL, NULL),
(15, 'Incident Response', 'Incident Response', 1, 1, NULL, NULL),
(16, 'Maintenance', 'Maintenance', 1, 1, NULL, NULL),
(17, 'Mobile Device Management', 'Mobile Device Management', 1, 1, NULL, NULL),
(18, 'Network Security', 'Network Security', 1, 1, NULL, NULL),
(19, 'Physical And Environmental Security', 'Physical And Environmental Security', 1, 1, NULL, NULL),
(20, 'Privacy', 'Privacy', 1, 1, NULL, NULL),
(21, 'Project And Resource Management', 'Project And Resource Management', 1, 1, NULL, NULL),
(22, 'Risk Management', 'Risk Management', 1, 1, NULL, NULL),
(23, 'Secure Engineering And Architecture', 'Secure Engineering And Architecture', 1, 1, NULL, NULL),
(24, 'Security And Privacy Governance', 'Security And Privacy Governance', 1, 1, NULL, NULL),
(25, 'Security Awareness And Training', 'Security Awareness And Training', 1, 1, NULL, NULL),
(26, 'Security Operations', 'Security Operations', 1, 1, NULL, NULL),
(27, 'Technology Development And Acquisition', 'Technology Development And Acquisition', 1, 1, NULL, NULL),
(28, 'Third-Party Management', 'Third-Party Management', 1, 1, NULL, NULL),
(29, 'Threat Management', 'Threat Management', 1, 1, NULL, NULL),
(30, 'Vulnerability And Patch Management', 'Vulnerability And Patch Management', 1, 1, NULL, NULL),
(31, 'Web Security', 'Web Security', 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `corrective_actions`
--

CREATE TABLE `corrective_actions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `non_conformity_name` varchar(255) NOT NULL,
  `non_conformity_description` varchar(255) DEFAULT NULL,
  `weakness_identification` varchar(255) NOT NULL,
  `detection_date` date NOT NULL,
  `assignee_id` bigint(20) UNSIGNED DEFAULT NULL,
  `due_date` date NOT NULL,
  `criticality_rating` enum('low','medium','high') NOT NULL,
  `audit_note` varchar(255) NOT NULL,
  `attachment_path` varchar(255) DEFAULT NULL,
  `source_type` varchar(255) DEFAULT NULL,
  `source_name` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `name`, `description`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'IT DEPT', 'it department', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14');

-- --------------------------------------------------------

--
-- Table structure for table `designations`
--

CREATE TABLE `designations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `designations`
--

INSERT INTO `designations` (`id`, `name`, `description`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'Web Developer', 'fullstack developer', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14');

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `documentable_type` varchar(255) NOT NULL,
  `documentable_id` bigint(20) UNSIGNED NOT NULL,
  `document_path` varchar(255) NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `documentable_type`, `documentable_id`, `document_path`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\OrganizationPolicy', 1, 'path/to/document.pdf', 5, 5, '2024-07-15 07:04:22', '2024-07-15 07:04:22'),
(2, 'App\\Models\\OrganizationPolicy', 2, 'path/to/document.pdf', 6, 6, '2024-07-15 07:04:22', '2024-07-15 07:04:22'),
(3, 'App\\Models\\OrganizationPolicy', 3, 'path/to/document.pdf', 4, 4, '2024-07-15 07:04:22', '2024-07-15 07:04:22'),
(4, 'App\\Models\\OrganizationPolicy', 4, 'path/to/document.pdf', 7, 7, '2024-07-15 07:04:22', '2024-07-15 07:04:22'),
(5, 'App\\Models\\OrganizationEvidence', 1, 'path/to/document.pdf', 5, 5, '2024-07-15 07:04:22', '2024-07-15 07:04:22'),
(6, 'App\\Models\\OrganizationEvidence', 2, 'path/to/document.pdf', 5, 5, '2024-07-15 07:04:22', '2024-07-15 07:04:22'),
(7, 'App\\Models\\OrganizationEvidence', 3, 'path/to/document.pdf', 7, 7, '2024-07-15 07:04:22', '2024-07-15 07:04:22'),
(8, 'App\\Models\\OrganizationEvidence', 4, 'path/to/document.pdf', 7, 7, '2024-07-15 07:04:22', '2024-07-15 07:04:22'),
(9, 'App\\Models\\OrganizationPolicy', 5, 'attachments/5WRXNH4pbOXhxtj7/A4NAIIJ6FIym5raeUTqKzzHrA7ysBIjkfQeZu39c.pdf', 2, 2, '2024-07-15 07:57:34', '2024-07-15 07:57:34'),
(10, 'App\\Models\\OrganizationEvidence', 5, 'attachments/7E3GFhmXzxkLy4x6/VavnD1PvBIIWIRhsNWh7B0T3FATXsWFFifLv8p1q.pdf', 2, 2, '2024-07-15 08:06:08', '2024-07-15 08:06:08');

-- --------------------------------------------------------

--
-- Table structure for table `entities`
--

CREATE TABLE `entities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `legal_name` varchar(255) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `security_officer` varchar(255) NOT NULL,
  `address` longtext DEFAULT NULL,
  `logo_path` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `organization_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `entities`
--

INSERT INTO `entities` (`id`, `name`, `legal_name`, `url`, `security_officer`, `address`, `logo_path`, `created_by`, `updated_by`, `organization_id`, `created_at`, `updated_at`) VALUES
(1, 'Kreiger-Gislason', 'Adams, Kub and Armstrong', 'http://www.vandervort.net/', 'Bryana Schroeder', '8702 June Bypass Suite 092\nEast Shyanne, CO 72974-3331', 'https://via.placeholder.com/640x480.png/0033dd?text=eveniet', 1, 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(2, 'Prohaska Group', 'Satterfield Ltd', 'http://abbott.net/maiores-eum-quis-asperiores-impedit.html', 'Mohammed Treutel', '965 Russel Haven Suite 973\nNorth Carolineport, VA 57400-5943', 'https://via.placeholder.com/640x480.png/0088dd?text=nihil', 1, 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(3, 'Marvin-Langosh', 'Rowe-Osinski', 'http://maggio.com/sit-voluptates-facilis-et-doloremque-debitis', 'Katarina Gislason', '4177 Eugene Coves Suite 241\nCummingsview, TX 51002', 'https://via.placeholder.com/640x480.png/006633?text=qui', 1, 1, 2, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(4, 'Koepp-Gibson', 'Halvorson and Sons', 'http://www.johnston.info/accusantium-possimus-dolore-nobis-sequi-quo', 'Princess Jerde', '671 Marcus Drives\nNorth Adrielborough, OR 06762', 'https://via.placeholder.com/640x480.png/009911?text=nihil', 1, 1, 2, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(5, 'Hayes-Ratke', 'Hansen Ltd', 'http://www.dickinson.com/quae-ipsam-voluptate-doloremque-in-qui-nemo-quia.html', 'Cristobal Cartwright Jr.', '21125 Moore Rapid\nEast Korybury, OK 95461', 'https://via.placeholder.com/640x480.png/00ddbb?text=esse', 1, 1, 3, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(6, 'Hodkiewicz, Gulgowski and Boyle', 'Ullrich, Olson and Krajcik', 'http://leuschke.biz/temporibus-hic-sit-molestiae-ea-sequi', 'Janiya Barrows', '6377 Marta Walks\nNorth Bo, NJ 26508-6330', 'https://via.placeholder.com/640x480.png/008899?text=nostrum', 1, 1, 3, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(7, 'Ondricka-Kuhlman', 'Simonis-VonRueden', 'http://www.zieme.com/', 'Mariam McGlynn', '7659 Murazik Lodge Suite 943\nWest Alecchester, CO 34122-2826', 'https://via.placeholder.com/640x480.png/0088dd?text=quisquam', 1, 1, 4, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(8, 'Reinger-Botsford', 'Kreiger, Cummings and Greenholt', 'http://www.pacocha.biz/', 'Daphnee Brown II', '866 Boyer Meadows\nObiehaven, NC 60153', 'https://via.placeholder.com/640x480.png/002299?text=perspiciatis', 1, 1, 4, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(9, 'Reichel, West and Rau', 'Greenfelder-Swift', 'http://www.sauer.biz/est-ex-tempore-omnis-omnis-autem-in', 'Dr. Enola Luettgen V', '2110 Krista Fields\nNorth Christina, TX 51561-4077', 'https://via.placeholder.com/640x480.png/0000ff?text=odio', 1, 1, 5, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(10, 'Wuckert, Fadel and Tillman', 'Cronin, Wisoky and Russel', 'http://hessel.com/quis-veritatis-aut-incidunt-repellat-quam-cumque-voluptatem', 'Conor Leannon', '66489 Miller Canyon\nPort Josiahchester, RI 53769-3430', 'https://via.placeholder.com/640x480.png/00cc66?text=aut', 1, 1, 5, '2024-06-27 09:21:15', '2024-06-27 09:21:15');

-- --------------------------------------------------------

--
-- Table structure for table `evidence`
--

CREATE TABLE `evidence` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `evidence`
--

INSERT INTO `evidence` (`id`, `name`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'CCTV report', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(2, 'Joint PII Controller agreement', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(3, 'Register containing disclosure of PII logs', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(4, 'Population HP13 - Individual Access to PHI', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(5, 'List of Data Subject Requests', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(6, 'Request for the Right of Data Portability', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(7, 'Removal of Test Data and Accounts before the System goes to Production', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(8, 'Records of Processing Activities', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(9, 'Request from Data Subjects', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(10, 'Processor Contract(DPA)', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(11, 'Acceptable Network Locations', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(12, 'Removal of Test Accounts from Live Application', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(13, 'IDS/IPS Configuration Settings', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(14, 'Consent for Marketing and Advertising use', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(15, 'Code repository server to determine that software code is maintained', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(16, 'Records of disclosures of PII to third parties', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(17, 'Code Requirements, Design Docs, Test plans/result, Approval, Release Notes', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(18, 'HR Procedure for Recruitment, Training and Exit.', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(19, 'Approved Software list maintained by the IT', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(20, 'Capacity Monitoring reports', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(21, 'SLA/Client Contracts/SOW with Sampled Customer', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(22, 'Quality Manuals/SOPs', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(23, 'MoM of Monthly departmental meeting minutes.', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(24, 'New Hire Induction Training Presentation', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(25, 'Intranet - IT security policies available to internal users.', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(26, 'Monthly internal reporting / MIS for major departments', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(27, 'Objectives and their achievement results or records', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(28, 'Restricted use of unencrypted portable storage media and devices', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(29, 'Mission/ vision statement of the company', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(30, 'JD to show CISO role & responsibilities', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(31, 'SOD (Segregation of Duties) Matrix', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(32, 'UAT (User Acceptance Testing) Report', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(33, 'Competence Matrix', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(34, 'Procedure for Cloud Computing Administrative Operations', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(35, 'Fire Drill Report', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(36, 'Restriction of the creation of hardcopy material', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(37, 'Security Desk /Reception', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(38, 'Visitor Management System', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(39, 'Agreement with the cloud service provider', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(40, 'Fire Extinguisher with Signage', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(41, 'Fire Extinguisher Maintenance Contract', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(42, 'Screenshot of Camera Interface Dashboard', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(43, 'Photo of Cameras installed in office', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(44, 'Physical access review', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(45, 'List of persons allowed inside DC/IT Server room', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(46, 'Manpower Planning/Hiring plan -', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(47, 'Biometric (Electronic) Based Access Device or Access Card System', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(48, 'UPS Maintenance record/Contract', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(49, 'Generator Maintenance record/contract', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(50, 'Client IDs deactivation (incase access to client environment)', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(51, 'Building provider Agreement and NDA - Housekeeping Staff/Organization or Contractors', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(52, 'Offboarding - Exit Checklist', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(53, 'Offboarding - Date of Exit - Evidence can be from HRMS screenshot (Tool/Email)', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(54, 'Change of Roles & Duties - Access Revocation', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(55, 'Onboarding - [Privacy] - Consent from new joiner PII', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(56, 'IT Asset Handover', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(57, 'Offboarding - Logical Access & Physical Access Revocation', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(58, 'Onboarding - Acceptance of Information Security and HR Policies', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(59, 'Onboarding - Date of Joining/Date of Hire - Evidence can be from HRMS screenshot(Tool/Email)', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(60, 'Onboarding - Employement Agreement signed copy (pdf)', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(61, 'Onboarding - LAN ID Creation/Email ID - Notification', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(62, 'Onboarding - Offer letter signed copy and acceptance (pdf)', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(63, 'Mechanisms exist to remotely purge selected information from mobile devices/Endpoints', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(64, 'Automated Central Management & Verification', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(65, 'Geolocation Requirements for Processing, Storage and Service Locations.', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(66, 'Agreement on Information Transfer', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(67, 'Evidence of Fire alarms in place / Smoke detectors', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(68, 'Preventive Maintenance checks for all supporting utilities', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(69, 'Record of Physical access control system logs Review being performed', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(70, 'Encryption key change control', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(71, 'Return of assets', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(72, 'Separation of Development, Test and Production Environment', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(73, 'Removable media are disabled for servers, Laptops  and desktop', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(74, 'Screen lockout time should be enforced', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(75, 'Evidence showing power cables are segregated from  communication cables', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(76, 'CCTV: Preventive check / routine checks details/NTP server configuration details CCTV Camera  Monitoring  logs', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(77, 'List of users having access to source code', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(78, 'VAPT (Vulnerability Assessment & Penetration Testing) reports', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(79, 'Legal Lawyer agreement/Legal Register', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(80, 'Records of requests raised for access to (Physical tools, etc)', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(81, 'Records for HR Exit Forms for all terminated users (employees and sub-contr.actors) with employee getting the signature on the clearance', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(82, 'Roles and responsibilities of the all the teams', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(83, 'Record of Physical access control system', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(84, 'List of Third Party Vendors/Contractors', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(85, 'AMCs with vendors, physical security, AC, power supply, Pest Control', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(86, 'Evidence to show that cloud PII processor provides means to the cloud service customer to fulfill obligations', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(87, 'Delete temporary files regularly', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(88, 'Removal of Cloud service customer Assets', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(89, 'Contract between the public cloud PII processor and the cloud service customer', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(90, 'Provide evidence of Password manager/password policy across systems', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(91, 'Evidence showing that information sent over public networks using internet facing application are protected', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(92, 'Video clips (360o) / pictures of all the critical areas; i.e. Server Room, DG Area', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(93, 'Security and Privacy Officer', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(94, 'Password Management', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(95, 'Security Updates', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(96, 'Workstation Security Configuration', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(97, 'Patch Management Records', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(98, 'Records of Consent to Retain Information', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(99, 'Confidential Communication Requests', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(100, 'Removable Media Process', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(101, 'Request to Restriction/Objection on Processing', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(102, 'Records of Data Breach Notification to Supervisory Authority', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(103, 'Business Impact Analysis Report', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(104, 'Request to Erase Personal Information', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(105, 'List of Processors', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(106, 'Evidence of organization stakeholder being part of special interest groups (securit groups,forums)', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(107, 'Records of Data Breach Notification to Data Subjects', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(108, 'Wireless Configuration Settings - Vendor Defaults', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(109, 'Consent Withdrawal', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(110, 'Consent on Collection and Processing', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(111, 'Data Subject Rights Evidence', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(112, 'Data Privacy Impact Assessment Report', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(113, 'Vendor Supplied Defaults', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(114, 'Transmission of PAN by End-user Messaging Technologies', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(115, 'Wireless Access Points Inventory', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(116, 'User Credentials Modification', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(117, 'Wireless Access Points Test', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(118, 'Roles with Access to Full PANs', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(119, 'Transfer Restriction of Cardholder Data', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(120, 'Service Provider Commitments', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(121, 'Sensitive Authentication Data (SAD)', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(122, 'System/Session Time Out', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(123, 'Security Compliance Reviews for Service Providers', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(124, 'Removal of Unnecessary Functionality', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(125, 'Restricted Physical Access to network, IoT, endpoint devices', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(126, 'Review and Test of the Incident Response Plan', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(127, 'Render PAN Unreadable', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(128, 'Evidence to show Protection of Applications from Insecure cryptographic storage', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(129, 'Reference Time Clock Synchronization', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(130, 'Evidence to show Protection of Applications from Insecure communication', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(131, 'Remote Access Time Out', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(132, 'Production Data not for Testing', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(133, 'Evidence to show Protection of Applications from Inproper error handling', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(134, 'Evidence to show Protection of Applications from Coding injection flaws', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(135, 'Evidence to show Protection of Applications from Improper access control', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(136, 'Evidence to show Protection of Applications from Cross-site scripting', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(137, 'Evidence to show Protection of Applications from Cross-site request forgery', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(138, 'Evidence to validate Restricted Access to Cardholder data', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(139, 'Evidence to show Protectection of Applications from buffer overflows', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(140, 'Evidence to validate Key Replacement', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(141, 'Evidence to validate Key Changes after Cryptoperiod', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(142, 'Evidence to show Protection of Applications from Broken authentication and session', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(143, 'Evidence to show Protection of Stored Cardholder Data', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(144, 'Personal Identification Number (PIN)', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(145, 'Periodic Device Inspection', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(146, 'Physical Access Logs', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(147, 'PCI DSS Requirements to Significant Changes', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(148, 'Physical Access Monitoring', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(149, 'Policies and Configuration Standards on Personal Firewalls', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(150, 'Information Security Responsibilities', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(151, 'PCI DSS Compliance Status of Service Provider', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(152, 'Log Review', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(153, 'PCI DSS Requirement Managed by Service Provider', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(154, 'List of Devices and Personnel with Access', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(155, 'List of Enabled Services, Protocols and Ports', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(156, 'Identifying Cardholder Data', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(157, 'Availability of Incident Response Team', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(158, 'List of Service Providers and Service Description', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(159, 'Forensic Investigation', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(160, 'Full Content of Track Data', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(161, 'Follow up on Reviews Performed', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(162, 'Firewall between Demilitarized Zone (DMZ) and Internal network', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(163, 'Prohibition of Generic IDs', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(164, 'Firewall and Router Configuration - Outbound Traffic', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(165, 'Firewall and Router Configuration - Wireless Network', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(166, 'Firewall and Router Configuration - Established Connection', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(167, 'Firewall and Router Configuration - No Direct Access', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(168, 'Firewall and Router Configuration - System Components', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(169, 'Firewall and Router Configuration - Inbound Traffic', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(170, 'Encrypted Wireless Network for Authentication and  transmisson', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(171, 'Enabled Multi-Factor Authentication', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(172, 'Firewall and Router Configuration - Anti-spoofing measure', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(173, 'Evaluation of Malware Threats', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(174, 'Dual Control Process for Key Management', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(175, 'Firewall and Router Configuration - DMZ Implementation', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(176, 'Device Protection Training', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(177, 'Data Flow Diagram', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(178, 'Disk Encryption', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(179, 'Data Encryption at Rest', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(180, 'Detection of Unauthorized Wireless Access Points', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(181, 'Documented Back-out/Roll-back Procedures', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(182, 'Detection and Reporting of Failures', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(183, 'Configuration of Masking PANs', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(184, 'Coding Vulnerabilities in Software-development Processes', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(185, 'Configuration Standards for System Components', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(186, 'Cryptographic Architecture', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(187, 'Database Access - Need to know basis', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(188, 'Defaullt Setting - \"Deny all\"', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(189, 'Change Detection Process', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(190, 'Change Control Process for System Components', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(191, 'Card Verification Code or Value (CVC or CVV)', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(192, 'Change Detection Mechanism', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(193, 'Change Impact Documentation', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(194, 'Cardholder Data Protection Policies and Procedures', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(195, 'Business Justification on Sensitive Authentication Data (SAD) Storage', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(196, 'Cryptography and Security Protocols', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(197, 'Audit Trail', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(198, 'Configuration Standards ', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(199, 'Automated Logs for Audit Trail', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(200, 'Custom Code Review Prior Release', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(201, 'Authentication for Technology Use', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(202, 'Assignment of PCI DSS Compliance Responsibility', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(203, 'Audit Log of CHD Environment', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(204, 'Audit Log Retention', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(205, 'Audit Trail Security', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(206, 'Audit Trail Configuration', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(207, 'Approval for Authorized Usage', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(208, 'Access to Wireless Points', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(209, 'Anti-virus Updates', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(210, 'Acknowledgement of Responsibilities by Cryptographic key custodian', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(211, 'Additional Authentication Mechanism', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(212, 'User Access Approval list to Application, Infrastructure and services', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(213, 'Third-Party Vendor Signed Security and Confidentiality commitment', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(214, 'Workstation Passwords Configuration', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(215, 'Access Based on Job Function', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(216, 'Workstation Firewall Settings', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(217, 'Workstation and Infrastructure Anti-malware Settings', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(218, 'Workstation Disk Encryption Settings', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(219, 'Reviewed and Approved Code of Conduct and Ethics', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(220, 'Risk Assessment Report', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(221, 'Reviewed and Approved Network Diagram', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(222, 'System Availability Logging', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(223, 'System Event Logging and Monitoring', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(224, 'Security & Privacy Awareness Training Report', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(225, 'Review of Vendor Audit Reports', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(226, 'Reports of User Access Reviews', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(227, 'Report of Vulnerability Scan and Remediation Status', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(228, 'Report of Backup Restoration Testing', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(229, 'Reports of Background and Reference Checks', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(230, 'Reports of Control Monitoring and Review', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(231, 'Registration and De-registration Process Document', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(232, 'Report of Penetration Test and Remediation Status', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(233, 'Record of Employee Performance Evaluation', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(234, 'Records of Data Breach Notification', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(235, 'Production Data in Testing and Development', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(236, 'Provide Evidence of Users that have Access to Logs', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(237, 'List of Security Incidents', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(238, 'Access Control Matrix', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(239, 'List of Infrastructure and Application Changes', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(240, 'Personal Information Disposal', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(241, 'List of In-scope Systems and Permissions', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(242, 'Privacy Policy Acknowledged', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(243, 'Management review meeting minutes', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(244, 'Incident Notification and Resolution Status', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(245, 'List of Users to Authorize and Promote Changes to Production', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(246, 'Access Control on all System Components', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(247, 'Access Control to Anti-virus Management', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(248, 'Organization Security, Confidentiality and Privacy Commitments to Customers', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(249, 'Implementation of Multi-Availability Zones', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(250, 'Formally Acknowledged Responsibilities by Board of Directors', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(251, 'Encryption Configuration Settings for Data in Tran...', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(252, 'Documented Organizational Chart with Reporting Lines', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(253, 'Firewall Configurations Settings', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(254, 'Firewall Rule Review', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(255, 'Documented Job Description', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(256, 'Business Continuity Plan and Disaster recovery plan testing results', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(257, 'Documented Asset Inventory and Review Dates', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(258, 'Documentation of Forecast Process and Review', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(259, 'Code Review Results', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(260, 'Configuration for Application Password', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(261, 'Administrative Access Accounts\' Authorizations', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(262, 'Automatic Capacity and Performance Monitoring Configuration', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(263, 'Evidence of media transferred securely', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(264, 'Technical Compliance Review/Internal Audit Report', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(265, 'Access to Encryption Keys', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(266, 'Electronic Messaging', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(267, 'Baseline Configurations Standard/Hardening procedure', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(268, 'Threat Intelligence for Information Security Threats', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(269, 'Visitors Access', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(270, 'Visitors Identification', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(271, 'Visitors Authorization', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(272, 'Project Management Guideline', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(273, 'Quarterly Security Compliance Review', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(274, 'Visitor Badge', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(275, 'List of Critical Technologies', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(276, 'Third Party Access', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(277, 'Vendor Remote Access Management', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(278, 'User Identification Process', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(279, 'Evidence to validate Monitoring Network Access', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(280, 'Synchronize Router Configuration Files', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(281, 'Media Inventory', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(282, 'Role Based Access Needs', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(283, 'Physical Security of Media', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(284, 'Media Transportation', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(285, 'System Configuration', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(286, 'Restricted access to entity\'s environment', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(287, 'Evidence to validate User Access management', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(288, 'Evidence to validate the Responsibilities for Docu...', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(289, 'Evidence to validate Monitoring and Controlling Acess to data', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(290, 'Media Distribution Approval', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(291, 'Evidence to validate Monitoring and Analyzing Security alerts', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(292, 'Entity\'s Unique ID', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(293, 'Incident Response Plan', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(294, 'Incident Response Training', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(295, 'Media Backup', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(296, 'Inactive Users', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(297, 'Identification and Authorization Visitors', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(298, 'Server room temperature', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(299, 'ISP redundancy', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(300, 'Firewall in HA mode', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(301, 'Vendor Contracts', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(302, 'Enabled Services for System Components', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(303, 'Physical access setup by HR', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(304, 'VPN Connection', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(305, 'Firewall admin access', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(306, 'Application logs', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(307, 'Content Filtering', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(308, 'DLP Software', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(309, 'Alerts from firewall for suspicious activity', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(310, 'Account sharing prohibited', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(311, 'Media Disposal', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(312, 'Restriction for Local admin access', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(313, 'Whitelisted IPs', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(314, 'Active Directory (or MDM tools equivalent to Active directory)', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(315, 'Regular updates of Antivirus definitions', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(316, 'Printer access restriction', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(317, 'Internal Audit Calendar', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(318, 'Communication of system changes', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(319, 'Reporting of incidents to external users', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(320, 'Customer SLA monitoring', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(321, 'Awareness of Complaint Process', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(322, 'Refresher Training on ISMS', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(323, 'Client Escalation Matrix', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(324, 'Downtime Banners', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(325, 'Training Calendar', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(326, 'Security certifications', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(327, 'Audit Committee', 1, 1, '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(328, 'Requirements for Shared Hosting Providers', 1, 1, '2024-07-15 07:09:45', '2024-07-15 07:09:45'),
(329, 'Evidence to validate Monitoring and Controlling Access to Data', 1, 1, '2024-07-15 07:16:15', '2024-07-15 07:16:15'),
(330, 'Evidence to validate the Responsibilities for Documentation of Security Incident Response Procedures', 1, 1, '2024-07-15 07:16:57', '2024-07-15 07:16:57');

-- --------------------------------------------------------

--
-- Table structure for table `evidence_scopes`
--

CREATE TABLE `evidence_scopes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `organization_framework_id` bigint(20) UNSIGNED NOT NULL,
  `provision_id` bigint(20) UNSIGNED NOT NULL,
  `control_id` bigint(20) UNSIGNED NOT NULL,
  `evidence_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `frameworks`
--

CREATE TABLE `frameworks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` mediumtext NOT NULL,
  `status` enum('0','1','2') NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `frameworks`
--

INSERT INTO `frameworks` (`id`, `name`, `description`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'GDPR', 'GDPR', '1', 1, 1, NULL, NULL),
(2, 'ISO 2022', 'ISO 2022', '1', 1, 1, NULL, NULL),
(3, 'SOC 2', 'SOC 2', '1', 1, 1, NULL, NULL),
(4, 'RBI CSF', 'RBI CSF', '0', 1, 1, NULL, '2024-07-15 08:28:11'),
(5, 'PCI DSS', 'PCI DSS', '0', 1, 1, NULL, '2024-07-15 08:28:00');

-- --------------------------------------------------------

--
-- Table structure for table `framework_provisions`
--

CREATE TABLE `framework_provisions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `framework_id` bigint(20) UNSIGNED NOT NULL,
  `provision_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `framework_provisions`
--

INSERT INTO `framework_provisions` (`id`, `framework_id`, `provision_id`, `created_at`, `updated_at`) VALUES
(1, 2, 1, '2024-06-27 09:49:34', '2024-06-27 09:49:34'),
(2, 2, 2, '2024-06-27 09:49:37', '2024-06-27 09:49:37'),
(3, 2, 3, '2024-06-27 10:22:54', '2024-06-27 10:22:54'),
(4, 2, 4, '2024-06-27 10:22:55', '2024-06-27 10:22:55'),
(5, 2, 5, '2024-06-27 10:22:56', '2024-06-27 10:22:56'),
(6, 2, 6, '2024-06-27 10:22:57', '2024-06-27 10:22:57'),
(7, 2, 7, '2024-06-27 10:22:58', '2024-06-27 10:22:58'),
(8, 2, 8, '2024-06-27 10:22:59', '2024-06-27 10:22:59'),
(9, 2, 9, '2024-06-27 10:23:01', '2024-06-27 10:23:01'),
(10, 2, 10, '2024-06-27 10:23:02', '2024-06-27 10:23:02'),
(11, 2, 11, '2024-06-27 10:23:03', '2024-06-27 10:23:03'),
(12, 2, 12, '2024-06-27 10:23:04', '2024-06-27 10:23:04'),
(13, 2, 13, '2024-06-27 10:23:06', '2024-06-27 10:23:06'),
(14, 2, 14, '2024-06-27 10:23:07', '2024-06-27 10:23:07'),
(15, 2, 15, '2024-06-27 10:23:08', '2024-06-27 10:23:08'),
(16, 2, 16, '2024-06-27 10:23:09', '2024-06-27 10:23:09'),
(17, 2, 17, '2024-06-27 10:23:10', '2024-06-27 10:23:10'),
(18, 2, 18, '2024-06-27 10:23:11', '2024-06-27 10:23:11'),
(19, 2, 19, '2024-06-27 10:23:12', '2024-06-27 10:23:12'),
(20, 2, 20, '2024-06-27 10:23:13', '2024-06-27 10:23:13'),
(21, 1, 1, '2024-06-27 10:48:05', '2024-06-27 10:48:05'),
(22, 1, 2, '2024-06-27 10:48:05', '2024-06-27 10:48:05'),
(23, 1, 7, '2024-06-27 10:48:14', '2024-06-27 10:48:14'),
(24, 1, 8, '2024-06-27 10:48:14', '2024-06-27 10:48:14'),
(25, 1, 125, '2024-06-27 10:48:20', '2024-06-27 10:48:20'),
(26, 1, 126, '2024-06-27 10:48:20', '2024-06-27 10:48:20'),
(27, 1, 123, '2024-06-27 10:48:27', '2024-06-27 10:48:27'),
(28, 1, 124, '2024-06-27 10:48:29', '2024-06-27 10:48:29'),
(29, 1, 122, '2024-06-27 10:48:31', '2024-06-27 10:48:31'),
(30, 1, 121, '2024-06-27 10:48:32', '2024-06-27 10:48:32'),
(31, 1, 120, '2024-06-27 10:48:38', '2024-06-27 10:48:38'),
(32, 1, 119, '2024-06-27 10:48:38', '2024-06-27 10:48:38'),
(33, 1, 118, '2024-06-27 10:48:39', '2024-06-27 10:48:39'),
(34, 1, 117, '2024-06-27 10:48:40', '2024-06-27 10:48:40'),
(35, 1, 116, '2024-06-27 10:48:44', '2024-06-27 10:48:44'),
(36, 1, 115, '2024-06-27 10:48:44', '2024-06-27 10:48:44'),
(37, 1, 113, '2024-06-27 10:48:45', '2024-06-27 10:48:45'),
(38, 1, 111, '2024-06-27 10:48:46', '2024-06-27 10:48:46'),
(39, 1, 110, '2024-06-27 10:48:47', '2024-06-27 10:48:47'),
(40, 1, 109, '2024-06-27 10:48:47', '2024-06-27 10:48:47'),
(41, 1, 112, '2024-06-27 10:48:50', '2024-06-27 10:48:50'),
(42, 1, 114, '2024-06-27 10:48:54', '2024-06-27 10:48:54'),
(43, 1, 107, '2024-06-27 10:49:11', '2024-06-27 10:49:11'),
(44, 1, 108, '2024-06-27 10:49:12', '2024-06-27 10:49:12'),
(45, 1, 106, '2024-06-27 10:49:13', '2024-06-27 10:49:13'),
(46, 1, 100, '2024-06-27 10:49:15', '2024-06-27 10:49:15'),
(47, 1, 98, '2024-06-27 10:49:16', '2024-06-27 10:49:16'),
(48, 1, 97, '2024-06-27 10:49:16', '2024-06-27 10:49:16'),
(49, 1, 96, '2024-06-27 10:49:17', '2024-06-27 10:49:17'),
(50, 1, 95, '2024-06-27 10:49:17', '2024-06-27 10:49:17'),
(51, 1, 93, '2024-06-27 10:49:18', '2024-06-27 10:49:18'),
(52, 1, 92, '2024-06-27 10:49:19', '2024-06-27 10:49:19'),
(53, 1, 3, '2024-06-27 10:51:12', '2024-06-27 10:51:12'),
(54, 1, 5, '2024-06-27 10:51:16', '2024-06-27 10:51:16'),
(55, 1, 4, '2024-06-27 10:51:16', '2024-06-27 10:51:16'),
(56, 1, 6, '2024-06-27 10:51:16', '2024-06-27 10:51:16'),
(57, 1, 9, '2024-06-27 10:51:21', '2024-06-27 10:51:21'),
(58, 1, 11, '2024-06-27 10:51:24', '2024-06-27 10:51:24'),
(59, 1, 10, '2024-06-27 10:51:24', '2024-06-27 10:51:24'),
(60, 1, 13, '2024-06-27 10:51:24', '2024-06-27 10:51:24'),
(61, 1, 12, '2024-06-27 10:51:24', '2024-06-27 10:51:24'),
(62, 1, 14, '2024-06-27 10:51:25', '2024-06-27 10:51:25'),
(63, 1, 15, '2024-06-27 10:51:26', '2024-06-27 10:51:26'),
(64, 1, 16, '2024-06-27 10:51:26', '2024-06-27 10:51:26'),
(65, 1, 17, '2024-06-27 10:51:27', '2024-06-27 10:51:27'),
(66, 1, 18, '2024-06-27 10:51:27', '2024-06-27 10:51:27'),
(67, 1, 19, '2024-06-27 10:51:33', '2024-06-27 10:51:33'),
(68, 1, 20, '2024-06-27 10:51:36', '2024-06-27 10:51:36'),
(69, 1, 21, '2024-06-27 10:51:42', '2024-06-27 10:51:42'),
(70, 1, 22, '2024-06-27 10:51:42', '2024-06-27 10:51:42'),
(71, 1, 23, '2024-06-27 10:51:43', '2024-06-27 10:51:43'),
(72, 1, 25, '2024-06-27 10:51:44', '2024-06-27 10:51:44'),
(73, 1, 26, '2024-06-27 10:51:45', '2024-06-27 10:51:45'),
(74, 1, 28, '2024-06-27 10:51:46', '2024-06-27 10:51:46'),
(75, 1, 27, '2024-06-27 10:51:47', '2024-06-27 10:51:47'),
(76, 1, 29, '2024-06-27 10:51:49', '2024-06-27 10:51:49'),
(77, 1, 24, '2024-06-27 10:51:53', '2024-06-27 10:51:53'),
(78, 1, 30, '2024-06-27 10:51:54', '2024-06-27 10:51:54'),
(79, 1, 31, '2024-06-27 10:51:55', '2024-06-27 10:51:55'),
(80, 1, 32, '2024-06-27 10:51:55', '2024-06-27 10:51:55'),
(81, 1, 33, '2024-06-27 10:51:59', '2024-06-27 10:51:59'),
(82, 1, 34, '2024-06-27 10:52:00', '2024-06-27 10:52:00'),
(83, 1, 35, '2024-06-27 10:52:00', '2024-06-27 10:52:00'),
(84, 1, 37, '2024-06-27 10:52:01', '2024-06-27 10:52:01'),
(85, 1, 36, '2024-06-27 10:52:03', '2024-06-27 10:52:03'),
(86, 1, 38, '2024-06-27 10:52:03', '2024-06-27 10:52:03'),
(87, 1, 39, '2024-06-27 10:52:03', '2024-06-27 10:52:03'),
(88, 1, 40, '2024-06-27 10:52:03', '2024-06-27 10:52:03'),
(89, 1, 41, '2024-06-27 10:52:04', '2024-06-27 10:52:04'),
(90, 1, 42, '2024-06-27 10:52:05', '2024-06-27 10:52:05'),
(91, 1, 44, '2024-06-27 10:53:27', '2024-06-27 10:53:27'),
(92, 1, 45, '2024-06-27 10:53:27', '2024-06-27 10:53:27'),
(93, 1, 47, '2024-06-27 10:53:29', '2024-06-27 10:53:29'),
(94, 1, 48, '2024-06-27 10:53:30', '2024-06-27 10:53:30'),
(95, 1, 49, '2024-06-27 10:53:31', '2024-06-27 10:53:31'),
(96, 1, 46, '2024-06-27 10:53:32', '2024-06-27 10:53:32'),
(97, 1, 50, '2024-06-27 10:53:34', '2024-06-27 10:53:34'),
(98, 1, 51, '2024-06-27 10:53:34', '2024-06-27 10:53:34'),
(99, 1, 53, '2024-06-27 10:53:35', '2024-06-27 10:53:35'),
(100, 1, 54, '2024-06-27 10:53:36', '2024-06-27 10:53:36'),
(101, 1, 55, '2024-06-27 10:53:37', '2024-06-27 10:53:37'),
(102, 1, 52, '2024-06-27 10:53:38', '2024-06-27 10:53:38'),
(103, 1, 56, '2024-06-27 10:53:39', '2024-06-27 10:53:39'),
(104, 1, 57, '2024-06-27 10:53:42', '2024-06-27 10:53:42'),
(105, 1, 58, '2024-06-27 10:53:43', '2024-06-27 10:53:43'),
(106, 1, 60, '2024-06-27 10:53:44', '2024-06-27 10:53:44'),
(107, 1, 61, '2024-06-27 10:53:44', '2024-06-27 10:53:44'),
(108, 1, 62, '2024-06-27 10:53:45', '2024-06-27 10:53:45'),
(109, 1, 63, '2024-06-27 10:53:46', '2024-06-27 10:53:46'),
(110, 1, 64, '2024-06-27 10:53:47', '2024-06-27 10:53:47'),
(111, 1, 65, '2024-06-27 10:53:47', '2024-06-27 10:53:47'),
(112, 1, 66, '2024-06-27 10:53:48', '2024-06-27 10:53:48'),
(113, 1, 67, '2024-06-27 10:53:48', '2024-06-27 10:53:48'),
(114, 1, 90, '2024-06-27 10:54:06', '2024-06-27 10:54:06'),
(115, 1, 91, '2024-06-27 10:54:07', '2024-06-27 10:54:07'),
(116, 1, 89, '2024-06-27 10:54:07', '2024-06-27 10:54:07'),
(117, 1, 87, '2024-06-27 10:54:08', '2024-06-27 10:54:08'),
(118, 1, 84, '2024-06-27 10:54:09', '2024-06-27 10:54:09'),
(119, 1, 94, '2024-06-27 10:56:50', '2024-06-27 10:56:50'),
(120, 1, 88, '2024-06-27 10:56:51', '2024-06-27 10:56:51'),
(121, 1, 86, '2024-06-27 10:56:52', '2024-06-27 10:56:52'),
(122, 1, 85, '2024-06-27 10:56:52', '2024-06-27 10:56:52'),
(123, 1, 72, '2024-06-27 10:57:23', '2024-06-27 10:57:23'),
(124, 1, 71, '2024-06-27 10:57:23', '2024-06-27 10:57:23'),
(125, 1, 70, '2024-06-27 10:57:23', '2024-06-27 10:57:23'),
(126, 1, 74, '2024-06-27 10:57:24', '2024-06-27 10:57:24'),
(127, 1, 73, '2024-06-27 10:57:25', '2024-06-27 10:57:25'),
(128, 1, 75, '2024-06-27 10:57:26', '2024-06-27 10:57:26'),
(129, 1, 76, '2024-06-27 10:57:27', '2024-06-27 10:57:27'),
(130, 1, 77, '2024-06-27 10:57:28', '2024-06-27 10:57:28'),
(131, 1, 78, '2024-06-27 10:57:28', '2024-06-27 10:57:28'),
(132, 2, 21, '2024-07-15 07:39:11', '2024-07-15 07:39:11'),
(133, 2, 22, '2024-07-15 07:40:57', '2024-07-15 07:40:57'),
(134, 2, 23, '2024-07-15 07:42:10', '2024-07-15 07:42:10'),
(136, 2, 24, '2024-07-15 07:43:08', '2024-07-15 07:43:08'),
(137, 2, 25, '2024-07-15 07:44:22', '2024-07-15 07:44:22'),
(138, 2, 26, '2024-07-15 07:50:33', '2024-07-15 07:50:33'),
(139, 2, 27, '2024-07-15 07:52:02', '2024-07-15 07:52:02'),
(140, 2, 28, '2024-07-15 07:52:56', '2024-07-15 07:52:56'),
(141, 2, 29, '2024-07-15 07:53:39', '2024-07-15 07:53:39'),
(142, 2, 30, '2024-07-15 07:54:20', '2024-07-15 07:54:20'),
(143, 2, 31, '2024-07-15 07:54:58', '2024-07-15 07:54:58'),
(144, 2, 32, '2024-07-15 07:55:54', '2024-07-15 07:55:54'),
(145, 2, 33, '2024-07-15 07:57:54', '2024-07-15 07:57:54'),
(146, 2, 34, '2024-07-15 08:03:08', '2024-07-15 08:03:08'),
(147, 2, 35, '2024-07-15 08:03:52', '2024-07-15 08:03:52'),
(148, 2, 36, '2024-07-15 08:04:19', '2024-07-15 08:04:19'),
(149, 2, 37, '2024-07-15 08:05:22', '2024-07-15 08:05:22'),
(150, 2, 38, '2024-07-15 08:06:19', '2024-07-15 08:06:19'),
(151, 2, 39, '2024-07-15 08:06:54', '2024-07-15 08:06:54'),
(152, 2, 40, '2024-07-15 08:07:00', '2024-07-15 08:07:00'),
(153, 2, 41, '2024-07-15 08:07:24', '2024-07-15 08:07:24'),
(154, 2, 42, '2024-07-15 08:07:28', '2024-07-15 08:07:28'),
(155, 2, 43, '2024-07-15 08:08:45', '2024-07-15 08:08:45'),
(156, 2, 44, '2024-07-15 08:08:46', '2024-07-15 08:08:46'),
(157, 2, 45, '2024-07-15 08:10:04', '2024-07-15 08:10:04'),
(158, 2, 46, '2024-07-15 08:10:05', '2024-07-15 08:10:05'),
(159, 2, 47, '2024-07-15 08:16:12', '2024-07-15 08:16:12'),
(160, 2, 48, '2024-07-15 08:16:14', '2024-07-15 08:16:14'),
(161, 2, 49, '2024-07-15 08:19:34', '2024-07-15 08:19:34'),
(162, 2, 50, '2024-07-15 08:19:36', '2024-07-15 08:19:36'),
(163, 2, 51, '2024-07-15 08:19:42', '2024-07-15 08:19:42'),
(164, 2, 52, '2024-07-15 08:31:14', '2024-07-15 08:31:14'),
(165, 2, 53, '2024-07-15 08:31:16', '2024-07-15 08:31:16'),
(166, 2, 54, '2024-07-15 08:31:18', '2024-07-15 08:31:18'),
(167, 2, 55, '2024-07-15 08:32:48', '2024-07-15 08:32:48'),
(168, 2, 56, '2024-07-15 08:32:49', '2024-07-15 08:32:49'),
(169, 2, 57, '2024-07-15 08:32:56', '2024-07-15 08:32:56'),
(171, 2, 58, '2024-07-15 08:34:10', '2024-07-15 08:34:10'),
(172, 2, 59, '2024-07-15 08:34:12', '2024-07-15 08:34:12'),
(173, 2, 60, '2024-07-15 08:34:13', '2024-07-15 08:34:13'),
(174, 2, 61, '2024-07-15 08:39:42', '2024-07-15 08:39:42'),
(175, 2, 62, '2024-07-15 08:39:43', '2024-07-15 08:39:43'),
(176, 2, 63, '2024-07-15 08:39:44', '2024-07-15 08:39:44'),
(177, 2, 64, '2024-07-15 08:42:54', '2024-07-15 08:42:54'),
(178, 2, 65, '2024-07-15 08:42:54', '2024-07-15 08:42:54'),
(179, 2, 66, '2024-07-15 08:42:55', '2024-07-15 08:42:55'),
(180, 2, 67, '2024-07-15 08:45:29', '2024-07-15 08:45:29'),
(181, 2, 68, '2024-07-15 08:45:29', '2024-07-15 08:45:29'),
(182, 2, 69, '2024-07-15 08:45:30', '2024-07-15 08:45:30'),
(183, 2, 70, '2024-07-15 08:47:21', '2024-07-15 08:47:21'),
(184, 2, 71, '2024-07-15 08:47:22', '2024-07-15 08:47:22'),
(185, 2, 72, '2024-07-15 08:47:22', '2024-07-15 08:47:22'),
(186, 2, 73, '2024-07-15 08:49:13', '2024-07-15 08:49:13'),
(187, 2, 74, '2024-07-15 08:49:16', '2024-07-15 08:49:16'),
(188, 2, 75, '2024-07-15 08:49:18', '2024-07-15 08:49:18'),
(189, 2, 76, '2024-07-15 08:51:17', '2024-07-15 08:51:17'),
(190, 2, 77, '2024-07-15 08:51:18', '2024-07-15 08:51:18'),
(191, 2, 78, '2024-07-15 08:51:18', '2024-07-15 08:51:18'),
(192, 2, 79, '2024-07-15 08:54:00', '2024-07-15 08:54:00'),
(193, 2, 80, '2024-07-15 08:54:01', '2024-07-15 08:54:01'),
(194, 2, 81, '2024-07-15 08:54:03', '2024-07-15 08:54:03'),
(195, 2, 82, '2024-07-15 08:56:01', '2024-07-15 08:56:01'),
(196, 2, 83, '2024-07-15 08:56:03', '2024-07-15 08:56:03'),
(197, 2, 84, '2024-07-15 08:56:05', '2024-07-15 08:56:05'),
(198, 2, 85, '2024-07-15 08:58:03', '2024-07-15 08:58:03'),
(199, 2, 86, '2024-07-15 08:58:03', '2024-07-15 08:58:03'),
(200, 2, 87, '2024-07-15 08:58:04', '2024-07-15 08:58:04'),
(201, 2, 88, '2024-07-15 08:59:40', '2024-07-15 08:59:40'),
(202, 2, 89, '2024-07-15 08:59:40', '2024-07-15 08:59:40'),
(203, 2, 90, '2024-07-15 08:59:42', '2024-07-15 08:59:42'),
(204, 2, 91, '2024-07-15 09:02:19', '2024-07-15 09:02:19'),
(205, 2, 92, '2024-07-15 09:02:20', '2024-07-15 09:02:20'),
(206, 2, 93, '2024-07-15 09:02:21', '2024-07-15 09:02:21'),
(207, 2, 94, '2024-07-15 09:16:24', '2024-07-15 09:16:24'),
(208, 2, 95, '2024-07-15 09:16:25', '2024-07-15 09:16:25'),
(209, 2, 96, '2024-07-15 09:16:25', '2024-07-15 09:16:25'),
(210, 2, 97, '2024-07-15 09:17:35', '2024-07-15 09:17:35'),
(211, 2, 98, '2024-07-15 09:17:36', '2024-07-15 09:17:36'),
(212, 2, 99, '2024-07-15 09:17:37', '2024-07-15 09:17:37'),
(213, 2, 100, '2024-07-15 11:00:06', '2024-07-15 11:00:06'),
(214, 2, 101, '2024-07-15 11:00:07', '2024-07-15 11:00:07'),
(215, 2, 102, '2024-07-15 11:00:08', '2024-07-15 11:00:08'),
(216, 2, 103, '2024-07-15 11:02:04', '2024-07-15 11:02:04'),
(217, 2, 104, '2024-07-15 11:02:05', '2024-07-15 11:02:05'),
(218, 2, 105, '2024-07-15 11:02:07', '2024-07-15 11:02:07'),
(219, 2, 106, '2024-07-15 11:02:58', '2024-07-15 11:02:58'),
(220, 2, 107, '2024-07-15 11:03:00', '2024-07-15 11:03:00'),
(221, 2, 108, '2024-07-15 11:03:00', '2024-07-15 11:03:00'),
(222, 2, 109, '2024-07-15 11:05:43', '2024-07-15 11:05:43'),
(223, 2, 110, '2024-07-15 11:05:44', '2024-07-15 11:05:44'),
(224, 2, 111, '2024-07-15 11:05:45', '2024-07-15 11:05:45'),
(225, 2, 112, '2024-07-15 11:05:45', '2024-07-15 11:05:45'),
(226, 2, 113, '2024-07-15 11:05:46', '2024-07-15 11:05:46'),
(227, 2, 115, '2024-07-15 11:12:06', '2024-07-15 11:12:06'),
(228, 2, 114, '2024-07-15 11:12:06', '2024-07-15 11:12:06'),
(229, 2, 116, '2024-07-15 11:12:07', '2024-07-15 11:12:07'),
(230, 2, 114, '2024-07-15 11:12:07', '2024-07-15 11:12:07'),
(231, 2, 118, '2024-07-15 11:12:07', '2024-07-15 11:12:07'),
(232, 2, 114, '2024-07-15 11:12:07', '2024-07-15 11:12:07'),
(233, 2, 114, '2024-07-15 11:12:07', '2024-07-15 11:12:07'),
(234, 2, 115, '2024-07-15 11:12:07', '2024-07-15 11:12:07'),
(235, 2, 117, '2024-07-15 11:12:39', '2024-07-15 11:12:39'),
(236, 2, 117, '2024-07-15 11:12:40', '2024-07-15 11:12:40');

-- --------------------------------------------------------

--
-- Table structure for table `functional_groups`
--

CREATE TABLE `functional_groups` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` enum('Active','Deactive') NOT NULL DEFAULT 'Active',
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `functional_groups`
--

INSERT INTO `functional_groups` (`id`, `name`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'Protect', 'Active', 1, 1, NULL, NULL),
(2, 'Detect', 'Active', 1, 1, NULL, NULL),
(3, 'Identify', 'Active', 1, 1, NULL, NULL),
(4, 'Respond', 'Active', 1, 1, NULL, NULL),
(5, 'Recover', 'Active', 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_06_10_145554_create_activity_log_table', 1),
(6, '2023_06_10_145555_add_event_column_to_activity_log_table', 1),
(7, '2023_06_10_145556_add_batch_uuid_column_to_activity_log_table', 1),
(8, '2023_10_30_093640_create_orders_table', 1),
(9, '2024_05_21_095139_create_permission_tables', 1),
(10, '2024_05_23_150823_create_organizations_table', 1),
(11, '2024_05_23_151023_create_entities_table', 1),
(12, '2024_05_28_080829_create_designations_table', 1),
(13, '2024_05_28_082029_create_departments_table', 1),
(14, '2024_05_29_124520_add_designation_id_and_department_id_to_users_table', 1),
(15, '2024_05_30_092144_create_controldomains_table', 1),
(16, '2024_05_30_110543_create_functional_groups_table', 1),
(17, '2024_05_31_005031_create_framworks_table', 1),
(18, '2024_05_31_023706_create_provision_categories_table', 1),
(19, '2024_05_31_045431_create_provisions_table', 1),
(20, '2024_05_31_072930_create_framework_provisions_table', 1),
(21, '2024_06_03_131008_create_policies_table', 1),
(22, '2024_06_06_105204_create_evidence_table', 1),
(23, '2024_06_12_013421_create_controlcodes_table', 1),
(24, '2024_06_12_111019_create_provision_control_code_table', 1),
(25, '2024_06_12_114324_create_control_code_policies_table', 1),
(26, '2024_06_12_114335_create_control_code_evidence_table', 1),
(27, '2024_06_13_141007_create_user_policies_table', 1),
(28, '2024_06_16_115701_create_user_evidence_table', 1),
(29, '2024_06_19_114608_create_assetcategories_table', 2),
(30, '2024_06_19_114743_create_assetsubcategories_table', 2),
(31, '2024_06_19_115337_create_assetlocations_table', 2),
(32, '2024_06_19_115454_create_assetcriticalities_table', 2),
(33, '2024_06_19_115826_create_assetvendors_table', 2),
(34, '2024_06_21_112104_create_assetmanagements_table', 2),
(35, '2024_06_25_084232_create_people_table', 3),
(36, '2024_07_01_075906_create_corrective_actions_table', 4),
(37, '2024_07_01_131329_create_organization_frameworks_table', 4),
(38, '2024_07_03_051946_create_provision_scopes_table', 4),
(39, '2024_07_05_075911_create_policy_scopes_table', 5),
(40, '2024_07_08_045456_create_evidence_scopes_table', 5),
(41, '2024_07_09_072258_create_organization_policies_table', 5),
(42, '2024_07_11_090837_create_organization_evidence_table', 5),
(43, '2024_07_12_055934_create_documents_table', 5);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 1),
(2, 'App\\Models\\User', 2),
(3, 'App\\Models\\User', 3),
(4, 'App\\Models\\User', 4),
(4, 'App\\Models\\User', 5),
(4, 'App\\Models\\User', 6),
(4, 'App\\Models\\User', 7),
(4, 'App\\Models\\User', 8),
(4, 'App\\Models\\User', 9),
(4, 'App\\Models\\User', 10),
(4, 'App\\Models\\User', 11),
(4, 'App\\Models\\User', 12),
(4, 'App\\Models\\User', 13);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `order_id` varchar(250) DEFAULT NULL,
  `customer_name` varchar(250) DEFAULT NULL,
  `product` varchar(250) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `delivery_status` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `organizations`
--

CREATE TABLE `organizations` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `legal_name` varchar(255) NOT NULL,
  `url` varchar(255) DEFAULT NULL,
  `security_officer` varchar(255) NOT NULL,
  `address` longtext DEFAULT NULL,
  `logo_path` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `organizations`
--

INSERT INTO `organizations` (`id`, `name`, `legal_name`, `url`, `security_officer`, `address`, `logo_path`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'Toy, Rohan and Lang', 'Jaskolski-Oberbrunner', 'https://www.rutherford.biz/qui-ipsum-quia-exercitationem-nihil-aut-consectetur-et-ea', 'Estefania Bogisich IV', '3272 Roberts Manors\nOliverport, FL 31410-0863', 'https://via.placeholder.com/640x480.png/00cc55?text=consequuntur', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(2, 'Emmerich Inc', 'Zboncak, Bahringer and Hartmann', 'http://gottlieb.com/ipsa-molestiae-architecto-incidunt-sed-non-animi.html', 'Waldo Adams DVM', '5161 Malinda Underpass\nBrandystad, UT 65035-1357', 'https://via.placeholder.com/640x480.png/0099aa?text=in', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(3, 'Cassin and Sons', 'Flatley, Barton and Schneider', 'http://www.barton.com/pariatur-sint-exercitationem-velit-a', 'Mr. Antone Ondricka V', '2648 Murphy Freeway\nLynchhaven, PA 62675', 'https://via.placeholder.com/640x480.png/00bbbb?text=expedita', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(4, 'Wehner-Hammes', 'Effertz-Rice', 'http://davis.info/', 'Junior Schneider', '54209 Yazmin Roads Apt. 870\nEast Daphneestad, DC 05946', 'https://via.placeholder.com/640x480.png/00ccaa?text=omnis', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(5, 'Fritsch PLC', 'Armstrong-Nienow', 'http://zulauf.com/', 'Rico McClure', '72552 Gerhold Crossing Suite 925\nWest Deangelo, UT 00784-0195', 'https://via.placeholder.com/640x480.png/0077ee?text=modi', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(6, 'upskillfinder', 'upskill', 'https://upskillfinder.com', '3', 'delhi', NULL, 2, 2, '2024-07-03 13:46:59', '2024-07-03 13:46:59');

-- --------------------------------------------------------

--
-- Table structure for table `organization_evidence`
--

CREATE TABLE `organization_evidence` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `organization_id` bigint(20) UNSIGNED NOT NULL,
  `evidence_id` bigint(20) UNSIGNED NOT NULL,
  `assignee_id` bigint(20) UNSIGNED NOT NULL,
  `assignee_status` enum('pending','complete') DEFAULT NULL,
  `assignee_due_date` date DEFAULT NULL,
  `assignee_completion_data` date DEFAULT NULL,
  `assignee_remark` varchar(255) DEFAULT NULL,
  `approver_id` bigint(20) UNSIGNED DEFAULT NULL,
  `approver_status` enum('pending','deny','approved') DEFAULT NULL,
  `approver_completion_data` date DEFAULT NULL,
  `approver_remark` varchar(255) DEFAULT NULL,
  `internal_auditor_id` bigint(20) UNSIGNED DEFAULT NULL,
  `internal_auditor_status` enum('pending','deny','approved') DEFAULT NULL,
  `internal_auditor_completion_data` date DEFAULT NULL,
  `internal_auditor_remark` varchar(255) DEFAULT NULL,
  `external_auditor_id` bigint(20) UNSIGNED DEFAULT NULL,
  `external_auditor_status` enum('pending','deny','approved') DEFAULT NULL,
  `external_auditor_completion_data` date DEFAULT NULL,
  `external_auditor_remark` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `organization_evidence`
--

INSERT INTO `organization_evidence` (`id`, `organization_id`, `evidence_id`, `assignee_id`, `assignee_status`, `assignee_due_date`, `assignee_completion_data`, `assignee_remark`, `approver_id`, `approver_status`, `approver_completion_data`, `approver_remark`, `internal_auditor_id`, `internal_auditor_status`, `internal_auditor_completion_data`, `internal_auditor_remark`, `external_auditor_id`, `external_auditor_status`, `external_auditor_completion_data`, `external_auditor_remark`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 6, 26, 5, 'complete', '2024-07-11', NULL, NULL, 9, 'pending', '2024-07-18', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 2, '2024-07-15 06:46:56', '2024-07-15 06:46:56'),
(2, 6, 29, 5, 'complete', '2024-07-17', NULL, NULL, 10, 'pending', '2024-07-25', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 2, '2024-07-15 06:47:09', '2024-07-15 06:47:09'),
(3, 6, 23, 7, 'complete', '2024-07-18', NULL, NULL, 10, 'pending', '2024-07-25', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 2, '2024-07-15 07:02:08', '2024-07-15 07:02:08'),
(4, 6, 248, 7, 'complete', '2024-07-17', NULL, NULL, 9, 'pending', '2024-07-18', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 2, '2024-07-15 07:02:46', '2024-07-15 07:02:46'),
(5, 6, 258, 6, 'complete', '2024-07-10', NULL, NULL, 11, 'pending', '2024-08-01', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 2, '2024-07-15 08:05:41', '2024-07-15 08:06:08');

-- --------------------------------------------------------

--
-- Table structure for table `organization_frameworks`
--

CREATE TABLE `organization_frameworks` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `isblocked` enum('0','1') NOT NULL DEFAULT '1',
  `organization_id` bigint(20) UNSIGNED NOT NULL,
  `framework_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `audit_date` date DEFAULT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `organization_frameworks`
--

INSERT INTO `organization_frameworks` (`id`, `isblocked`, `organization_id`, `framework_id`, `user_id`, `audit_date`, `updated_by`, `created_at`, `updated_at`) VALUES
(2, '1', 6, 2, 2, NULL, 2, '2024-07-15 06:35:05', '2024-07-15 06:35:05');

-- --------------------------------------------------------

--
-- Table structure for table `organization_policies`
--

CREATE TABLE `organization_policies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `organization_id` bigint(20) UNSIGNED NOT NULL,
  `policy_id` bigint(20) UNSIGNED NOT NULL,
  `assignee_id` bigint(20) UNSIGNED NOT NULL,
  `assignee_status` enum('pending','complete') DEFAULT NULL,
  `assignee_due_date` date DEFAULT NULL,
  `assignee_completion_data` date DEFAULT NULL,
  `assignee_remark` varchar(255) DEFAULT NULL,
  `approver_id` bigint(20) UNSIGNED DEFAULT NULL,
  `approver_status` enum('pending','deny','approved') DEFAULT NULL,
  `approver_completion_data` date DEFAULT NULL,
  `approver_remark` varchar(255) DEFAULT NULL,
  `internal_auditor_id` bigint(20) UNSIGNED DEFAULT NULL,
  `internal_auditor_status` enum('pending','deny','approved') DEFAULT NULL,
  `internal_auditor_completion_data` date DEFAULT NULL,
  `internal_auditor_remark` varchar(255) DEFAULT NULL,
  `external_auditor_id` bigint(20) UNSIGNED DEFAULT NULL,
  `external_auditor_status` enum('pending','deny','approved') DEFAULT NULL,
  `external_auditor_completion_data` date DEFAULT NULL,
  `external_auditor_remark` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `organization_policies`
--

INSERT INTO `organization_policies` (`id`, `organization_id`, `policy_id`, `assignee_id`, `assignee_status`, `assignee_due_date`, `assignee_completion_data`, `assignee_remark`, `approver_id`, `approver_status`, `approver_completion_data`, `approver_remark`, `internal_auditor_id`, `internal_auditor_status`, `internal_auditor_completion_data`, `internal_auditor_remark`, `external_auditor_id`, `external_auditor_status`, `external_auditor_completion_data`, `external_auditor_remark`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 6, 50, 5, 'complete', '2024-07-16', NULL, NULL, 11, 'pending', '2024-07-16', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 2, '2024-07-15 06:46:23', '2024-07-15 06:46:23'),
(2, 6, 68, 6, 'complete', '2024-07-16', NULL, NULL, 9, 'pending', '2024-07-16', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 2, '2024-07-15 06:46:35', '2024-07-15 06:46:35'),
(3, 6, 49, 4, 'complete', '2024-07-17', NULL, NULL, 11, 'pending', '2024-07-24', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 2, '2024-07-15 07:01:37', '2024-07-15 07:01:37'),
(4, 6, 28, 7, 'complete', '2024-07-11', NULL, NULL, 12, 'pending', '2024-07-17', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 2, '2024-07-15 07:01:55', '2024-07-15 07:01:55'),
(5, 6, 44, 6, 'complete', '2024-07-17', NULL, NULL, 11, 'pending', '2024-07-18', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 2, 2, '2024-07-15 07:53:20', '2024-07-15 07:57:34');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `people`
--

CREATE TABLE `people` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pepole_status` enum('Training Incomplete','Training Completed','Offbording Needed','Offboarding Completed','Non Personnel') NOT NULL,
  `installed_agents` enum('None','Instagrc Agent') NOT NULL,
  `installed_antivirus` enum('yes','no') NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'user-create', 'web', NULL, NULL),
(2, 'user-read', 'web', NULL, NULL),
(3, 'user-update', 'web', NULL, NULL),
(4, 'user-delete', 'web', NULL, NULL),
(5, 'activity-create', 'web', NULL, NULL),
(6, 'activity-read', 'web', NULL, NULL),
(7, 'activity-update', 'web', NULL, NULL),
(8, 'activity-delete', 'web', NULL, NULL),
(9, 'control-code-create', 'web', NULL, NULL),
(10, 'control-code-read', 'web', NULL, NULL),
(11, 'control-code-update', 'web', NULL, NULL),
(12, 'control-code-delete', 'web', NULL, NULL),
(13, 'control-code-evidence-create', 'web', NULL, NULL),
(14, 'control-code-evidence-read', 'web', NULL, NULL),
(15, 'control-code-evidence-update', 'web', NULL, NULL),
(16, 'control-code-evidence-delete', 'web', NULL, NULL),
(17, 'control-code-policy-create', 'web', NULL, NULL),
(18, 'control-code-policy-read', 'web', NULL, NULL),
(19, 'control-code-policy-update', 'web', NULL, NULL),
(20, 'control-code-policy-delete', 'web', NULL, NULL),
(21, 'control-domain-create', 'web', NULL, NULL),
(22, 'control-domain-read', 'web', NULL, NULL),
(23, 'control-domain-update', 'web', NULL, NULL),
(24, 'control-domain-delete', 'web', NULL, NULL),
(25, 'department-create', 'web', NULL, NULL),
(26, 'department-read', 'web', NULL, NULL),
(27, 'department-update', 'web', NULL, NULL),
(28, 'department-delete', 'web', NULL, NULL),
(29, 'designation-create', 'web', NULL, NULL),
(30, 'designation-read', 'web', NULL, NULL),
(31, 'designation-update', 'web', NULL, NULL),
(32, 'designation-delete', 'web', NULL, NULL),
(33, 'entity-create', 'web', NULL, NULL),
(34, 'entity-read', 'web', NULL, NULL),
(35, 'entity-update', 'web', NULL, NULL),
(36, 'entity-delete', 'web', NULL, NULL),
(37, 'evidence-create', 'web', NULL, NULL),
(38, 'evidence-read', 'web', NULL, NULL),
(39, 'evidence-update', 'web', NULL, NULL),
(40, 'evidence-delete', 'web', NULL, NULL),
(41, 'framework-create', 'web', NULL, NULL),
(42, 'framework-read', 'web', NULL, NULL),
(43, 'framework-update', 'web', NULL, NULL),
(44, 'framework-delete', 'web', NULL, NULL),
(45, 'framework-provision-create', 'web', NULL, NULL),
(46, 'framework-provision-read', 'web', NULL, NULL),
(47, 'framework-provision-update', 'web', NULL, NULL),
(48, 'framework-provision-delete', 'web', NULL, NULL),
(49, 'functional-group-create', 'web', NULL, NULL),
(50, 'functional-group-read', 'web', NULL, NULL),
(51, 'functional-group-update', 'web', NULL, NULL),
(52, 'functional-group-delete', 'web', NULL, NULL),
(53, 'organization-create', 'web', NULL, NULL),
(54, 'organization-read', 'web', NULL, NULL),
(55, 'organization-update', 'web', NULL, NULL),
(56, 'organization-delete', 'web', NULL, NULL),
(57, 'permissions-create', 'web', NULL, NULL),
(58, 'permissions-read', 'web', NULL, NULL),
(59, 'permissions-update', 'web', NULL, NULL),
(60, 'permissions-delete', 'web', NULL, NULL),
(61, 'policy-create', 'web', NULL, NULL),
(62, 'policy-read', 'web', NULL, NULL),
(63, 'policy-update', 'web', NULL, NULL),
(64, 'policy-delete', 'web', NULL, NULL),
(65, 'profile-create', 'web', NULL, NULL),
(66, 'profile-read', 'web', NULL, NULL),
(67, 'profile-update', 'web', NULL, NULL),
(68, 'profile-delete', 'web', NULL, NULL),
(69, 'provision-control-code-create', 'web', NULL, NULL),
(70, 'provision-control-code-read', 'web', NULL, NULL),
(71, 'provision-control-code-update', 'web', NULL, NULL),
(72, 'provision-control-code-delete', 'web', NULL, NULL),
(73, 'provision-create', 'web', NULL, NULL),
(74, 'provision-read', 'web', NULL, NULL),
(75, 'provision-update', 'web', NULL, NULL),
(76, 'provision-delete', 'web', NULL, NULL),
(77, 'role-create', 'web', NULL, NULL),
(78, 'role-read', 'web', NULL, NULL),
(79, 'role-update', 'web', NULL, NULL),
(80, 'role-delete', 'web', NULL, NULL),
(81, 'user-evidence-create', 'web', NULL, NULL),
(82, 'user-evidence-read', 'web', NULL, NULL),
(83, 'user-evidence-update', 'web', NULL, NULL),
(84, 'user-evidence-delete', 'web', NULL, NULL),
(85, 'user-policy-create', 'web', NULL, NULL),
(86, 'user-policy-read', 'web', NULL, NULL),
(87, 'user-policy-update', 'web', NULL, NULL),
(88, 'user-policy-delete', 'web', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `policies`
--

CREATE TABLE `policies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `policies`
--

INSERT INTO `policies` (`id`, `name`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'Third Party', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(2, 'N-able Sample', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(3, 'Limited Data Set Policy/Data Minimization Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(4, 'Anonymization and Pseudonymization Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(5, 'ROPA (Record of Processing Activities) Guidance Note', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(6, 'Configuration Policy and Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(7, 'Annexures - Monitoring & Measurement matrix', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(8, 'Threat Intelligence Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(9, 'Annexures - Communication Matrix', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(10, 'Information Security Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(11, 'Data Deletion Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(12, 'Code of Conduct Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(13, 'Employee Handbook', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(14, 'Key Management Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(15, 'Personal Data Protection Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(16, 'Log Review Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(17, 'POSH Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(18, 'BYOD (Bring Your Own Device) Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(19, 'Employee Privacy Statement', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(20, 'Data Retention and Deletion Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(21, 'Data Subject Requests Manual', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(22, 'Global GDPR Manual', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(23, 'Personnel Security', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(24, 'Whistleblower Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(25, 'Cookie Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(26, 'System, OS, Database Hardening Policy & Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(27, 'Clear Desk & Screen Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(28, 'ISMS Policy Statement', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(29, 'DPIA Guidance Note', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(30, 'Data Privacy Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(31, 'Data Breach Management Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(32, 'Patch & Vulnerability Management Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(33, 'Mobile devices and teleworking Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(34, 'Information transfer policies and procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(35, 'Cryptography Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(36, 'Media handling and Disposal Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(37, 'Communication Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(38, 'Business Continuity and Disaster Recovery Policy/Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(39, 'HR Disciplinary Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(40, 'Backup Policy/Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(41, 'Supplier Management Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(42, 'Information Security Roles and Responsibilities', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(43, 'Continual Improvement Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(44, 'Statement of Applicability', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(45, 'Procedures to control the installation of software on operational systems', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(46, 'Non Conformity and Corrective Action Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(47, 'Internal Audit Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(48, 'System Acquisition Development and Maintenance Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(49, 'Annexure - Internal and External Issues, Interested Parties and their requirements', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(50, 'Compliance Obligation - Scope Document', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(51, 'Software Development Lifecycle Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(52, 'Management Review Meeting Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(53, 'Document Control Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(54, 'Asset Management Policy/Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(55, 'Risk Management Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(56, 'Physical and Environmental Security Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(57, 'Network Security Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(58, 'Legal And Regulatory Compliance Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(59, 'Information Classification Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(60, 'Change Management Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(61, 'Information Security Incident Management Policy and Procedure', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(62, 'Anti-Malware Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(63, 'Password Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(64, 'Data and Record Retention Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(65, 'Logging and Monitoring Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(66, 'Human Resource Security Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(67, 'Acceptable Usage Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(68, 'Information Security Management System Manual', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15'),
(69, 'Access Control Policy', 1, 1, '2024-06-27 09:21:15', '2024-06-27 09:21:15');

-- --------------------------------------------------------

--
-- Table structure for table `policy_scopes`
--

CREATE TABLE `policy_scopes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `organization_framework_id` bigint(20) UNSIGNED NOT NULL,
  `provision_id` bigint(20) UNSIGNED NOT NULL,
  `control_id` bigint(20) UNSIGNED NOT NULL,
  `policy_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `provisions`
--

CREATE TABLE `provisions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` varchar(255) NOT NULL,
  `provisions` text NOT NULL,
  `category_id` bigint(20) UNSIGNED DEFAULT NULL,
  `status` enum('0','1') NOT NULL,
  `framework_name` varchar(255) DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `provisions`
--

INSERT INTO `provisions` (`id`, `code`, `provisions`, `category_id`, `status`, `framework_name`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, '4.1', 'Understanding the organization and its context', 1, '1', 'ISO 2022', 1, 1, NULL, NULL),
(2, '4.2', 'Understanding the needs and expectations of interested parties', 1, '1', 'ISO 2022', 1, 1, NULL, NULL),
(3, '4.3', 'Determining the scope of the information security management system', 1, '1', 'ISO 2022', 1, 1, NULL, NULL),
(4, '4.4', 'Information security management system', 1, '1', 'ISO 2022', 1, 1, NULL, NULL),
(5, '5.1', 'Leadership and commitment', 2, '1', 'ISO 2022', 1, 1, NULL, NULL),
(6, '5.2', 'Information Security Policy', 2, '1', 'ISO 2022', 1, 1, NULL, NULL),
(7, '5.3', 'Organizational roles, responsibilities and authorities', 2, '1', 'ISO 2022', 1, 1, NULL, NULL),
(8, '6.1 6.1', 'Actions to address risks and opportunities', 3, '1', 'ISO 2022', 1, 1, NULL, NULL),
(9, '6.1.1', 'When planning for the information security management system, the organization shall consider the issues and determine the risks and opportunities that need to be addressed to : 6.1.1(a),6.1.1(b),6.1.1(c),6.1.1(d).6.1.1(e)', 3, '1', 'ISO 2022', 1, 1, NULL, NULL),
(10, '6.1.2', 'Information security risk assessment', 3, '1', 'ISO 2022', 1, 1, NULL, NULL),
(11, '6.1.3', 'Information security risk treatment', 3, '1', 'ISO 2022', 1, 1, NULL, NULL),
(12, '6.2', 'Information security objectives and planning to achieve them', 3, '1', 'ISO 2022', 1, 1, NULL, NULL),
(13, '6.3', 'Planning of changes', 3, '1', 'ISO 2022', 1, 1, NULL, NULL),
(14, '7.1', 'Resources - The organization shall determine and provide the resources needed for the establishment, implementation, maintenance and continual improvement of the information security management system.', 4, '1', 'ISO 2022', 1, 1, NULL, NULL),
(15, '7.2', 'Competence', 4, '1', 'ISO 2022', 1, 1, NULL, NULL),
(16, '7.4', 'Awareness', 4, '1', 'ISO 2022', 1, 1, NULL, NULL),
(17, '7.4.1', 'Communication', 4, '1', 'ISO 2022', 1, 1, NULL, NULL),
(18, '7.5', 'Documented information', 4, '1', 'ISO 2022', 1, 1, NULL, NULL),
(19, '7.5.1', 'The organization’s information security management system shall include documented information and documented information necessrary for the effectiveness of the information security management system.', 4, '1', 'ISO 2022', 1, 1, NULL, NULL),
(20, '7.5.2', 'Creating and updating - creating and updating documented information to ensure 7.5.2(a),7.5.2(b),7.5.2(c)', 4, '1', 'ISO 2022', 1, 1, NULL, NULL),
(21, '7.5.3', 'Control of documented information', 4, '1', 'ISO 2022', 1, 1, NULL, NULL),
(22, '8.1', 'Operational planning and control', 5, '1', 'ISO 2022', 1, 1, NULL, NULL),
(23, '8.2', 'Information security risk assessment', 5, '1', 'ISO 2022', 1, 1, NULL, NULL),
(24, '8.3', 'Information security risk treatment', 5, '1', 'ISO 2022', 1, 1, NULL, NULL),
(25, '9.1', 'Monitoring, measurement, analysis and evaluation', 6, '1', 'ISO 2022', 1, 1, NULL, NULL),
(26, '9.2', 'Internal audit', 6, '1', 'ISO 2022', 1, 1, NULL, NULL),
(27, '9.2.1', 'The organization shall conduct internal audits at planned intervals', 6, '1', 'ISO 2022', 1, 1, NULL, NULL),
(28, '9.2.2', 'Internal audit programme', 6, '1', 'ISO 2022', 1, 1, NULL, NULL),
(29, '9.3.1', 'Top management shall review the organization\'s information security management system at planned intervals to ensure its continuing suitability, adequacy and effectiveness.', 6, '1', 'ISO 2022', 1, 1, NULL, NULL),
(30, '9.3.2', 'Management review inputs', 6, '1', 'ISO 2022', 1, 1, NULL, NULL),
(31, '9.3.3', 'Management review results', 6, '1', 'ISO 2022', 1, 1, NULL, NULL),
(32, '10.1', 'Continual improvement', 7, '1', 'ISO 2022', 1, 1, NULL, NULL),
(33, '10.2', 'Nonconformity and corrective action', 7, '1', 'ISO 2022', 1, 1, NULL, '2024-07-15 08:05:02'),
(34, 'A.5.1', 'Policies for information security - Information security policy and topic-specific policies shall be defined, approved by management, published, communicated to and acknowledged by relevant personnel and relevant interested parties, and reviewed at planned intervals and if significant changes occur.', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(35, 'A.5.2', 'Information security roles and responsibilities', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(36, 'A.5.3', 'Segregation of duties', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(37, 'A.5.4', 'Management responsibilities', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(38, 'A.5.5', 'Contact with authorities', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(39, 'A.5.6', 'Contact with special interest groups', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(40, 'A.5.7', 'Threat intelligence', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(41, 'A.5.8', 'Information security in project management', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(42, 'A.5.9', 'Inventory of information and other associated assets', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(43, 'A.5.10', 'Acceptable use of information and other associated assets', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(44, 'A.5.11', 'Return of assets', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(45, 'A.5.12', 'Classification of information', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(46, 'A.5.13', 'Labelling of information', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(47, 'A.5.14', 'Information transfer', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(48, 'A.5.15', 'Access control', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(49, 'A.5.16', 'Identity management', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(50, 'A.5.17', 'Authentication information', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(51, 'A.5.18', 'Access rights', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(52, 'A.5.19', 'Information security in supplier relationships', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(53, 'A.5.20', 'Addressing information security within supplier agreements', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(54, 'A.5.21', 'Managing information security in the information and communication technology (ICT) supply chain', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(55, 'A.5.22', 'Monitoring, review and change management of supplier services', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(56, 'A.5.23', 'Information security for use of cloud services', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(57, 'A.5.24', 'Information security incident management planning and preparation', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(58, 'A.5.25', 'A.5.25 Assessment and decision on information security events', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(59, 'A.5.26', 'Response to information security incidents', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(60, 'A.5.27', 'Learning from information security incidents', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(61, 'A.5.28', 'Collection of evidence', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(62, 'A.5.29', 'Information security during disruption', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(63, 'A.5.30', 'ICT readiness for business continuity', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(64, 'A.5.31', 'Legal, statutory, regulatory and contractual requirements', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(65, 'A.5.32', 'Intellectual property rights', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(66, 'A.5.33', 'Protection of records', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(67, 'A.5.34', 'Privacy and protection of personal identifiable information (PII)', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(68, 'A.5.35', 'Independent review of information security', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(69, 'A.5.36', 'Compliance with policies, rules and standards for information security', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(70, 'A.5.37', 'Documented operating procedures', 8, '1', 'ISO 2022', 1, 1, NULL, NULL),
(71, 'A.6.1', 'Screening', 9, '1', 'ISO 2022', 1, 1, NULL, NULL),
(72, 'A.6.2', 'Terms and conditions of employment', 9, '1', 'ISO 2022', 1, 1, NULL, NULL),
(73, 'A.6.3', 'Information security awareness, education and training', 9, '1', 'ISO 2022', 1, 1, NULL, NULL),
(74, 'A.6.4', 'Disciplinary process', 9, '1', 'ISO 2022', 1, 1, NULL, NULL),
(75, 'A.6.5', 'Responsibilities after termination or change of employment', 9, '1', 'ISO 2022', 1, 1, NULL, NULL),
(76, 'A.6.6', 'Confidentiality or non-disclosure agreements', 9, '1', 'ISO 2022', 1, 1, NULL, NULL),
(77, 'A.6.7', 'Remote working', 9, '1', 'ISO 2022', 1, 1, NULL, NULL),
(78, 'A.6.8', 'Information security event reporting', 9, '1', 'ISO 2022', 1, 1, NULL, NULL),
(79, 'A.7.1', 'Physical security perimeters', 10, '1', 'ISO 2022', 1, 1, NULL, NULL),
(80, 'A.7.2', 'Physical entry', 10, '1', 'ISO 2022', 1, 1, NULL, NULL),
(81, 'A.7.3', 'Securing offices, rooms and facilities', 10, '1', 'ISO 2022', 1, 1, NULL, NULL),
(82, 'A.7.4', 'Physical security monitoring', 10, '1', 'ISO 2022', 1, 1, NULL, NULL),
(83, 'A.7.5', 'Protecting against physical and environmental threat', 10, '1', 'ISO 2022', 1, 1, NULL, NULL),
(84, 'A.7.6', 'Working in secure areas', 10, '1', 'ISO 2022', 1, 1, NULL, NULL),
(85, 'A.7.7', 'Clear desk and clear screen', 10, '1', 'ISO 2022', 1, 1, NULL, NULL),
(86, 'A.7.8', 'Equipment siting and protection', 10, '1', 'ISO 2022', 1, 1, NULL, NULL),
(87, 'A.7.9', 'Security of assets off-premises', 10, '1', 'ISO 2022', 1, 1, NULL, NULL),
(88, 'A.7.10', 'Storage media', 10, '1', 'ISO 2022', 1, 1, NULL, NULL),
(89, 'A.7.11', 'Supporting utilities', 10, '1', 'ISO 2022', 1, 1, NULL, NULL),
(90, 'A.7.12', 'Cabling security', 10, '1', 'ISO 2022', 1, 1, NULL, NULL),
(91, 'A.7.13', 'Equipment maintenance', 10, '1', 'ISO 2022', 1, 1, NULL, NULL),
(92, 'A.7.14', 'Secure disposal or re-use of equipment', 10, '1', 'ISO 2022', 1, 1, NULL, NULL),
(93, 'A.8.1', 'User end point devices', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(94, 'A.8.2', 'Privileged access rights', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(95, 'A.8.3', 'Information access restriction', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(96, 'A.8.4', 'Access to source code', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(97, 'A.8.5', 'Secure authentication', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(98, 'A.8.6', 'Capacity management', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(99, 'A.8.7', 'Protection against malwar', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(100, 'A.8.8', 'Management of technical vulnerabilities', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(101, 'A.8.9', 'Configuration management', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(102, 'A.8.10', 'Information deletion', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(103, 'A.8.11', 'Data masking', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(104, 'A.8.12', 'Data leakage prevention', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(105, 'A.8.13', 'Information backup', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(106, 'A.8.14', 'Redundancy of information processing facilities', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(107, 'A.8.15', 'Logging', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(108, 'A.8.16', 'Monitoring activities', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(109, 'A.8.17', 'Clock synchronization', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(110, 'A.8.18', 'Use of privileged utility programs', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(111, 'A.8.19', 'Installation of software on operational systems', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(112, 'A.8.20', 'Networks security', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(113, 'A.8.21', 'Security of network services', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(114, 'A.8.22', 'Segregation of networks', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(115, 'A.8.23', 'Web filtering', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(116, 'A.8.24', 'Use of cryptography', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(117, 'A.8.25', 'Secure development life cycle', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(118, 'A.8.26', 'Application security requirements', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(119, 'A.8.27', 'Secure system architecture and engineering principles', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(120, 'A.8.28', 'Secure coding', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(121, 'A.8.29', 'Security testing in development and acceptance', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(122, 'A.8.30', 'Outsourced development', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(123, 'A.8.31', 'Separation of development, test and production environments', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(124, 'A.8.32', 'Change management', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(125, 'A.8.33', 'Test information', 11, '1', 'ISO 2022', 1, 1, NULL, NULL),
(126, 'A.8.34', 'Protection of information systems during audit testing', 11, '1', 'ISO 2022', 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `provision_categories`
--

CREATE TABLE `provision_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_number` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `provision_categories`
--

INSERT INTO `provision_categories` (`id`, `category_number`, `name`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, '4', 'Context of the organization', 1, 1, NULL, NULL),
(2, '5', 'Leadership', 1, 1, NULL, NULL),
(3, '6', 'Planning', 1, 1, NULL, NULL),
(4, '7', 'Support', 1, 1, NULL, NULL),
(5, '8', 'Operation', 1, 1, NULL, NULL),
(6, '9', 'Performance Evaluation', 1, 1, NULL, NULL),
(7, '10', 'Improvement', 1, 1, NULL, NULL),
(8, 'A.5', 'Organization Controls', 1, 1, NULL, NULL),
(9, 'A.6', 'People Controls', 1, 1, NULL, NULL),
(10, 'A.7', 'Physical Controls', 1, 1, NULL, NULL),
(11, 'A.8', 'Technological Controls', 1, 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `provision_control_code`
--

CREATE TABLE `provision_control_code` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `provision_id` bigint(20) UNSIGNED NOT NULL,
  `control_code_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `provision_control_code`
--

INSERT INTO `provision_control_code` (`id`, `provision_id`, `control_code_id`, `created_at`, `updated_at`) VALUES
(1, 1, 382, NULL, NULL),
(2, 2, 382, NULL, NULL),
(3, 4, 394, NULL, NULL),
(4, 4, 392, NULL, NULL),
(5, 4, 390, NULL, NULL),
(6, 3, 381, NULL, NULL),
(7, 3, 349, NULL, NULL),
(8, 5, 388, NULL, NULL),
(9, 6, 393, NULL, NULL),
(10, 7, 389, NULL, NULL),
(11, 8, 388, NULL, NULL),
(12, 9, 394, NULL, NULL),
(13, 10, 138, NULL, NULL),
(14, 11, 144, NULL, NULL),
(15, 11, 145, NULL, NULL),
(16, 12, 388, NULL, NULL),
(17, 13, 362, NULL, NULL),
(18, 14, 152, NULL, NULL),
(19, 15, 269, NULL, NULL),
(20, 16, 388, NULL, NULL),
(21, 17, 388, NULL, NULL),
(22, 18, 393, NULL, NULL),
(23, 19, 393, NULL, NULL),
(24, 20, 393, NULL, NULL),
(25, 21, 343, NULL, NULL),
(26, 22, 128, NULL, NULL),
(27, 22, 126, NULL, NULL),
(28, 23, 142, NULL, NULL),
(29, 24, 137, NULL, NULL),
(30, 24, 143, NULL, NULL),
(31, 24, 145, NULL, NULL),
(32, 24, 144, NULL, NULL),
(33, 25, 392, NULL, NULL),
(34, 25, 390, NULL, NULL),
(35, 26, 337, NULL, NULL),
(36, 26, 339, NULL, NULL),
(37, 26, 340, NULL, NULL),
(38, 27, 348, NULL, NULL),
(39, 27, 342, NULL, NULL),
(40, 28, 348, NULL, NULL),
(41, 28, 342, NULL, NULL),
(42, 29, 388, NULL, NULL),
(43, 29, 343, NULL, NULL),
(44, 30, 388, NULL, NULL),
(45, 30, 343, NULL, NULL),
(46, 31, 388, NULL, NULL),
(47, 31, 343, NULL, NULL),
(48, 32, 350, NULL, NULL),
(50, 33, 388, NULL, NULL),
(51, 33, 343, NULL, NULL),
(52, 33, 337, NULL, NULL),
(53, 33, 94, NULL, NULL),
(54, 34, 394, NULL, NULL),
(55, 34, 393, NULL, NULL),
(56, 34, 392, NULL, NULL),
(57, 35, 269, NULL, NULL),
(58, 36, 255, NULL, NULL),
(59, 37, 264, NULL, NULL),
(60, 37, 265, NULL, NULL),
(61, 37, 118, NULL, NULL),
(62, 38, 3, NULL, NULL),
(63, 40, 101, NULL, NULL),
(64, 41, 336, NULL, NULL),
(65, 41, 149, NULL, NULL),
(66, 41, 156, NULL, NULL),
(67, 42, 387, NULL, NULL),
(68, 42, 376, NULL, NULL),
(69, 43, 300, NULL, NULL),
(70, 43, 289, NULL, NULL),
(71, 43, 265, NULL, NULL),
(72, 43, 266, NULL, NULL),
(73, 43, 267, NULL, NULL),
(74, 43, 270, NULL, NULL),
(75, 43, 256, NULL, NULL),
(76, 44, 371, NULL, NULL),
(77, 45, 300, NULL, NULL),
(78, 46, 297, NULL, NULL),
(79, 47, 314, NULL, NULL),
(80, 47, 281, NULL, NULL),
(81, 47, 264, NULL, NULL),
(82, 47, 265, NULL, NULL),
(83, 47, 258, NULL, NULL),
(84, 47, 195, NULL, NULL),
(85, 47, 189, NULL, NULL),
(86, 48, 393, NULL, NULL),
(87, 48, 247, NULL, NULL),
(88, 48, 229, NULL, NULL),
(89, 49, 251, NULL, NULL),
(90, 49, 252, NULL, NULL),
(91, 49, 243, NULL, NULL),
(92, 50, 237, NULL, NULL),
(93, 50, 242, NULL, NULL),
(94, 50, 245, NULL, NULL),
(95, 50, 238, NULL, NULL),
(96, 50, 225, NULL, NULL),
(97, 51, 333, NULL, NULL),
(98, 51, 251, NULL, NULL),
(99, 51, 254, NULL, NULL),
(100, 51, 248, NULL, NULL),
(101, 51, 236, NULL, NULL),
(102, 51, 239, NULL, NULL),
(103, 51, 240, NULL, NULL),
(104, 51, 224, NULL, NULL),
(105, 51, 227, NULL, NULL),
(106, 51, 229, NULL, NULL),
(107, 52, 107, NULL, NULL),
(108, 52, 106, NULL, NULL),
(109, 53, 104, NULL, NULL),
(110, 54, 108, NULL, NULL),
(111, 55, 105, NULL, NULL),
(112, 55, 102, NULL, NULL),
(113, 57, 214, NULL, NULL),
(114, 57, 223, NULL, NULL),
(115, 58, 218, NULL, NULL),
(116, 58, 222, NULL, NULL),
(117, 59, 222, NULL, NULL),
(118, 59, 218, NULL, NULL),
(119, 60, 203, NULL, NULL),
(120, 61, 217, NULL, NULL),
(121, 62, 368, NULL, NULL),
(122, 62, 369, NULL, NULL),
(123, 63, 369, NULL, NULL),
(124, 63, 368, NULL, NULL),
(125, 63, 139, NULL, NULL),
(126, 64, 345, NULL, NULL),
(127, 64, 310, NULL, NULL),
(128, 64, 316, NULL, NULL),
(129, 64, 303, NULL, NULL),
(130, 64, 305, NULL, NULL),
(131, 65, 380, NULL, NULL),
(132, 65, 385, NULL, NULL),
(133, 66, 308, NULL, NULL),
(134, 66, 296, NULL, NULL),
(135, 66, 302, NULL, NULL),
(136, 66, 282, NULL, NULL),
(137, 67, 308, NULL, NULL),
(138, 67, 296, NULL, NULL),
(139, 67, 302, NULL, NULL),
(140, 67, 282, NULL, NULL),
(141, 68, 337, NULL, NULL),
(142, 68, 339, NULL, NULL),
(143, 69, 337, NULL, NULL),
(144, 69, 338, NULL, NULL),
(145, 70, 128, NULL, NULL),
(146, 70, 134, NULL, NULL),
(147, 71, 268, NULL, NULL),
(148, 72, 264, NULL, NULL),
(149, 73, 123, NULL, NULL),
(150, 73, 122, NULL, NULL),
(151, 73, 118, NULL, NULL),
(152, 74, 257, NULL, NULL),
(153, 75, 257, NULL, NULL),
(154, 75, 259, NULL, NULL),
(155, 76, 261, NULL, NULL),
(156, 76, 104, NULL, NULL),
(157, 77, 187, NULL, NULL),
(158, 77, 186, NULL, NULL),
(159, 78, 218, NULL, NULL),
(160, 78, 220, NULL, NULL),
(161, 78, 221, NULL, NULL),
(162, 78, 219, NULL, NULL),
(163, 79, 184, NULL, NULL),
(164, 79, 188, NULL, NULL),
(165, 79, 174, NULL, NULL),
(166, 79, 180, NULL, NULL),
(167, 80, 179, NULL, NULL),
(168, 80, 173, NULL, NULL),
(169, 80, 178, NULL, NULL),
(170, 80, 158, NULL, NULL),
(171, 81, 180, NULL, NULL),
(172, 81, 173, NULL, NULL),
(173, 81, 162, NULL, NULL),
(174, 82, 174, NULL, NULL),
(175, 83, 184, NULL, NULL),
(176, 83, 162, NULL, NULL),
(177, 83, 138, NULL, NULL),
(178, 83, 142, NULL, NULL),
(179, 84, 184, NULL, NULL),
(180, 84, 162, NULL, NULL),
(181, 84, 138, NULL, NULL),
(182, 84, 142, NULL, NULL),
(183, 85, 284, NULL, NULL),
(184, 85, 263, NULL, NULL),
(185, 86, 162, NULL, NULL),
(186, 87, 386, NULL, NULL),
(187, 87, 377, NULL, NULL),
(188, 87, 375, NULL, NULL),
(189, 87, 370, NULL, NULL),
(190, 88, 374, NULL, NULL),
(191, 88, 293, NULL, NULL),
(192, 88, 287, NULL, NULL),
(193, 88, 292, NULL, NULL),
(194, 88, 290, NULL, NULL),
(195, 89, 170, NULL, NULL),
(196, 89, 165, NULL, NULL),
(197, 89, 172, NULL, NULL),
(198, 89, 171, NULL, NULL),
(199, 89, 166, NULL, NULL),
(200, 90, 170, NULL, NULL),
(201, 90, 162, NULL, NULL),
(202, 90, 163, NULL, NULL),
(203, 91, 207, NULL, NULL),
(204, 91, 205, NULL, NULL),
(205, 92, 373, NULL, NULL),
(206, 93, 379, NULL, NULL),
(207, 93, 233, NULL, NULL),
(208, 93, 204, NULL, NULL),
(209, 93, 211, NULL, NULL),
(210, 94, 239, NULL, NULL),
(211, 95, 384, NULL, NULL),
(212, 95, 331, NULL, NULL),
(213, 95, 247, NULL, NULL),
(214, 96, 116, NULL, NULL),
(215, 97, 136, NULL, NULL),
(216, 98, 357, NULL, NULL),
(217, 98, 358, NULL, NULL),
(218, 99, 395, NULL, NULL),
(219, 99, 272, NULL, NULL),
(220, 100, 338, NULL, NULL),
(221, 100, 91, NULL, NULL),
(222, 100, 97, NULL, NULL),
(223, 100, 93, NULL, NULL),
(224, 100, 96, NULL, NULL),
(225, 101, 344, NULL, NULL),
(226, 101, 336, NULL, NULL),
(227, 101, 331, NULL, NULL),
(228, 101, 114, NULL, NULL),
(229, 102, 373, NULL, NULL),
(230, 102, 285, NULL, NULL),
(231, 102, 161, NULL, NULL),
(232, 105, 354, NULL, NULL),
(233, 105, 360, NULL, NULL),
(234, 105, 359, NULL, NULL),
(235, 106, 367, NULL, NULL),
(236, 106, 364, NULL, NULL),
(237, 106, 356, NULL, NULL),
(238, 107, 332, NULL, NULL),
(239, 107, 321, NULL, NULL),
(240, 107, 323, NULL, NULL),
(241, 107, 322, NULL, NULL),
(242, 107, 319, NULL, NULL),
(243, 107, 327, NULL, NULL),
(244, 107, 325, NULL, NULL),
(245, 107, 326, NULL, NULL),
(246, 108, 330, NULL, NULL),
(247, 108, 323, NULL, NULL),
(248, 109, 133, NULL, NULL),
(249, 110, 224, NULL, NULL),
(250, 111, 283, NULL, NULL),
(251, 111, 275, NULL, NULL),
(252, 112, 202, NULL, NULL),
(253, 112, 210, NULL, NULL),
(254, 112, 209, NULL, NULL),
(255, 112, 193, NULL, NULL),
(256, 112, 195, NULL, NULL),
(257, 113, 202, NULL, NULL),
(258, 113, 209, NULL, NULL),
(259, 113, 104, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `provision_scopes`
--

CREATE TABLE `provision_scopes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `organization_framework_id` bigint(20) UNSIGNED NOT NULL,
  `provision_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'Super-Admin', 'web', '2024-06-27 09:21:14', '2024-06-27 09:21:14'),
(2, 'Admin', 'web', '2024-07-03 13:39:05', '2024-07-03 13:39:05'),
(3, 'Security Officer', 'web', '2024-07-03 13:45:51', '2024-07-03 13:45:51'),
(4, 'Assignee', 'web', '2024-07-15 06:37:50', '2024-07-15 06:37:50');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(10, 2),
(14, 2),
(18, 2),
(22, 2),
(26, 2),
(30, 2),
(34, 2),
(38, 2),
(42, 2),
(46, 2),
(53, 2),
(54, 2),
(55, 2),
(62, 2),
(66, 2),
(70, 2),
(74, 2),
(2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `added_by` bigint(20) UNSIGNED DEFAULT NULL,
  `updated_by` bigint(20) UNSIGNED DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `user_contact_no` varchar(255) DEFAULT NULL,
  `user_profile_pic` varchar(255) DEFAULT NULL,
  `user_remark` mediumtext DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `designation_id` bigint(20) UNSIGNED DEFAULT NULL,
  `department_id` bigint(20) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `added_by`, `updated_by`, `remember_token`, `user_contact_no`, `user_profile_pic`, `user_remark`, `created_at`, `updated_at`, `designation_id`, `department_id`) VALUES
(1, 'Admin', 'admin@grc.com', '2024-06-27 09:21:14', '$2y$12$nS9o9vsfBbxEAKeJqhJBBO7DwQM1zAh0djLhZpOQzUmP0jdqR9Wk6', 1, 1, 'zNHPd5wD9EpOoFqrLz2nHSEiGcCnzAWuHxt27ap3iKFxHvpeq70P042vSIR0', NULL, NULL, NULL, '2024-06-27 09:21:14', '2024-06-27 09:21:14', NULL, NULL),
(2, 'Organization', 'org@grc.com', NULL, '$2y$12$bHVuGswm7v0XZrG9JmvpruWxEo.dM0dwzcC/hDyFF87Vo1h0bYwwW', 1, 1, NULL, '123456789', NULL, NULL, '2024-07-03 13:40:22', '2024-07-03 13:40:22', 1, 1),
(3, 'Alok', 'alok@upskillfinder', NULL, '$2y$12$MqWWQI4aLMYbUJe7pn15DOOgjxLh6HXB6jYSUy46LZ6u7B1.cb5P6', 1, 1, NULL, '123456789', NULL, NULL, '2024-07-03 13:46:24', '2024-07-03 13:46:24', 1, 1),
(4, 'Kaylee Koch IV', 'scummerata@example.net', '2024-07-15 06:45:07', '$2y$12$eEKWLrtGqQ966RV7YrFRP.sWEefiE1jR5RgJbUp2wdxd6ZPWp4cgi', NULL, NULL, '68rWCL9hWp', NULL, NULL, NULL, '2024-07-15 06:45:07', '2024-07-15 06:45:07', NULL, NULL),
(5, 'Dr. Leopoldo Harber', 'lenna73@example.org', '2024-07-15 06:45:07', '$2y$12$eEKWLrtGqQ966RV7YrFRP.sWEefiE1jR5RgJbUp2wdxd6ZPWp4cgi', NULL, NULL, 'uRgSMsA6VT', NULL, NULL, NULL, '2024-07-15 06:45:07', '2024-07-15 06:45:07', NULL, NULL),
(6, 'Malinda Sawayn Jr.', 'marc99@example.net', '2024-07-15 06:45:07', '$2y$12$eEKWLrtGqQ966RV7YrFRP.sWEefiE1jR5RgJbUp2wdxd6ZPWp4cgi', NULL, NULL, 'G9Rza5u1QH', NULL, NULL, NULL, '2024-07-15 06:45:07', '2024-07-15 06:45:07', NULL, NULL),
(7, 'Dr. Damion Barton Sr.', 'ewell20@example.net', '2024-07-15 06:45:07', '$2y$12$eEKWLrtGqQ966RV7YrFRP.sWEefiE1jR5RgJbUp2wdxd6ZPWp4cgi', NULL, NULL, 'bdph1GcLsK', NULL, NULL, NULL, '2024-07-15 06:45:07', '2024-07-15 06:45:07', NULL, NULL),
(8, 'Colby Ernser', 'eldred44@example.net', '2024-07-15 06:45:07', '$2y$12$eEKWLrtGqQ966RV7YrFRP.sWEefiE1jR5RgJbUp2wdxd6ZPWp4cgi', NULL, NULL, 'Dth3Pr3Ic2', NULL, NULL, NULL, '2024-07-15 06:45:07', '2024-07-15 06:45:07', NULL, NULL),
(9, 'Tavares Will', 'ygottlieb@example.org', '2024-07-15 06:45:31', '$2y$12$teoPPiTedGf7ah9A/RD/fu3skIybF/0FrGizamXFjevoDQ6ti9jnW', NULL, NULL, 'BajXn7Bg5X', NULL, NULL, NULL, '2024-07-15 06:45:31', '2024-07-15 06:45:31', NULL, NULL),
(10, 'Dagmar Kulas MD', 'green.ali@example.com', '2024-07-15 06:45:31', '$2y$12$teoPPiTedGf7ah9A/RD/fu3skIybF/0FrGizamXFjevoDQ6ti9jnW', NULL, NULL, 'aOkec5i2IN', NULL, NULL, NULL, '2024-07-15 06:45:31', '2024-07-15 06:45:31', NULL, NULL),
(11, 'Prof. Rowena Bruen', 'vkuhic@example.org', '2024-07-15 06:45:31', '$2y$12$teoPPiTedGf7ah9A/RD/fu3skIybF/0FrGizamXFjevoDQ6ti9jnW', NULL, NULL, '49ExsU2qYK', NULL, NULL, NULL, '2024-07-15 06:45:31', '2024-07-15 06:45:31', NULL, NULL),
(12, 'Evert Upton', 'bert75@example.org', '2024-07-15 06:45:31', '$2y$12$teoPPiTedGf7ah9A/RD/fu3skIybF/0FrGizamXFjevoDQ6ti9jnW', NULL, NULL, 'ypuHuqugFm', NULL, NULL, NULL, '2024-07-15 06:45:31', '2024-07-15 06:45:31', NULL, NULL),
(13, 'Zechariah McClure', 'mossie89@example.net', '2024-07-15 06:45:31', '$2y$12$teoPPiTedGf7ah9A/RD/fu3skIybF/0FrGizamXFjevoDQ6ti9jnW', NULL, NULL, 'JsLXjzz7So', NULL, NULL, NULL, '2024-07-15 06:45:31', '2024-07-15 06:45:31', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_evidence`
--

CREATE TABLE `user_evidence` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `evidence_id` bigint(20) UNSIGNED NOT NULL,
  `entity_id` bigint(20) UNSIGNED NOT NULL,
  `status` enum('not_uploaded','approved','draft') NOT NULL,
  `assignee_id` bigint(20) UNSIGNED DEFAULT NULL,
  `recurrence` enum('Annually','Bi-Annually','Quarterly','Monthly','Never') DEFAULT NULL,
  `review_date` date DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `approver_id` bigint(20) UNSIGNED DEFAULT NULL,
  `department_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_policies`
--

CREATE TABLE `user_policies` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `policy_id` bigint(20) UNSIGNED NOT NULL,
  `entity_id` bigint(20) UNSIGNED NOT NULL,
  `status` enum('not_uploaded','approved','draft') NOT NULL,
  `assignee_id` bigint(20) UNSIGNED DEFAULT NULL,
  `recurrence` enum('Annually','Bi-Annually','Quarterly','Monthly','Never') DEFAULT NULL,
  `review_date` date DEFAULT NULL,
  `file_path` varchar(255) DEFAULT NULL,
  `approver_id` bigint(20) UNSIGNED DEFAULT NULL,
  `department_id` bigint(20) UNSIGNED DEFAULT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_log`
--
ALTER TABLE `activity_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subject` (`subject_type`,`subject_id`),
  ADD KEY `causer` (`causer_type`,`causer_id`),
  ADD KEY `activity_log_log_name_index` (`log_name`);

--
-- Indexes for table `assetcategories`
--
ALTER TABLE `assetcategories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `assetcategories_created_by_foreign` (`created_by`),
  ADD KEY `assetcategories_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `assetcriticalities`
--
ALTER TABLE `assetcriticalities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `assetcriticalities_created_by_foreign` (`created_by`),
  ADD KEY `assetcriticalities_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `assetlocations`
--
ALTER TABLE `assetlocations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `assetlocations_created_by_foreign` (`created_by`),
  ADD KEY `assetlocations_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `assetmanagements`
--
ALTER TABLE `assetmanagements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `assetmanagements_catgory_id_foreign` (`catgory_id`),
  ADD KEY `assetmanagements_subcategory_id_foreign` (`subcategory_id`),
  ADD KEY `assetmanagements_department_foreign` (`department`),
  ADD KEY `assetmanagements_location_foreign` (`location`),
  ADD KEY `assetmanagements_criticalilty_foreign` (`criticalilty`),
  ADD KEY `assetmanagements_vendor_id_foreign` (`vendor_id`),
  ADD KEY `assetmanagements_created_by_foreign` (`created_by`),
  ADD KEY `assetmanagements_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `assetsubcategories`
--
ALTER TABLE `assetsubcategories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `assetsubcategories_asset_categoryid_foreign` (`asset_categoryid`),
  ADD KEY `assetsubcategories_created_by_foreign` (`created_by`),
  ADD KEY `assetsubcategories_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `assetvendors`
--
ALTER TABLE `assetvendors`
  ADD PRIMARY KEY (`id`),
  ADD KEY `assetvendors_created_by_foreign` (`created_by`),
  ADD KEY `assetvendors_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `control_codes`
--
ALTER TABLE `control_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `control_codes_control_domain_id_foreign` (`control_domain_id`),
  ADD KEY `control_codes_functional_group_id_foreign` (`functional_group_id`),
  ADD KEY `control_codes_created_by_foreign` (`created_by`),
  ADD KEY `control_codes_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `control_code_evidence`
--
ALTER TABLE `control_code_evidence`
  ADD PRIMARY KEY (`id`),
  ADD KEY `control_code_evidence_control_code_id_foreign` (`control_code_id`),
  ADD KEY `control_code_evidence_evidence_id_foreign` (`evidence_id`);

--
-- Indexes for table `control_code_policies`
--
ALTER TABLE `control_code_policies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `control_code_policies_control_code_id_foreign` (`control_code_id`),
  ADD KEY `control_code_policies_policy_id_foreign` (`policy_id`);

--
-- Indexes for table `control_domains`
--
ALTER TABLE `control_domains`
  ADD PRIMARY KEY (`id`),
  ADD KEY `control_domains_created_by_foreign` (`created_by`),
  ADD KEY `control_domains_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `corrective_actions`
--
ALTER TABLE `corrective_actions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `corrective_actions_assignee_id_foreign` (`assignee_id`),
  ADD KEY `corrective_actions_created_by_foreign` (`created_by`),
  ADD KEY `corrective_actions_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `departments_created_by_foreign` (`created_by`),
  ADD KEY `departments_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `designations`
--
ALTER TABLE `designations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `designations_created_by_foreign` (`created_by`),
  ADD KEY `designations_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `documents_documentable_type_documentable_id_index` (`documentable_type`,`documentable_id`),
  ADD KEY `documents_created_by_foreign` (`created_by`),
  ADD KEY `documents_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `entities`
--
ALTER TABLE `entities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `entities_created_by_foreign` (`created_by`),
  ADD KEY `entities_updated_by_foreign` (`updated_by`),
  ADD KEY `entities_organization_id_foreign` (`organization_id`);

--
-- Indexes for table `evidence`
--
ALTER TABLE `evidence`
  ADD PRIMARY KEY (`id`),
  ADD KEY `evidence_created_by_foreign` (`created_by`),
  ADD KEY `evidence_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `evidence_scopes`
--
ALTER TABLE `evidence_scopes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `evidence_scopes_organization_framework_id_foreign` (`organization_framework_id`),
  ADD KEY `evidence_scopes_provision_id_foreign` (`provision_id`),
  ADD KEY `evidence_scopes_control_id_foreign` (`control_id`),
  ADD KEY `evidence_scopes_evidence_id_foreign` (`evidence_id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `frameworks`
--
ALTER TABLE `frameworks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `frameworks_created_by_foreign` (`created_by`),
  ADD KEY `frameworks_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `framework_provisions`
--
ALTER TABLE `framework_provisions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `framework_provisions_framework_id_foreign` (`framework_id`),
  ADD KEY `framework_provisions_provision_id_foreign` (`provision_id`);

--
-- Indexes for table `functional_groups`
--
ALTER TABLE `functional_groups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `functional_groups_created_by_foreign` (`created_by`),
  ADD KEY `functional_groups_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `organizations`
--
ALTER TABLE `organizations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `organizations_created_by_foreign` (`created_by`),
  ADD KEY `organizations_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `organization_evidence`
--
ALTER TABLE `organization_evidence`
  ADD PRIMARY KEY (`id`),
  ADD KEY `organization_evidence_organization_id_foreign` (`organization_id`),
  ADD KEY `organization_evidence_evidence_id_foreign` (`evidence_id`),
  ADD KEY `organization_evidence_assignee_id_foreign` (`assignee_id`),
  ADD KEY `organization_evidence_approver_id_foreign` (`approver_id`),
  ADD KEY `organization_evidence_internal_auditor_id_foreign` (`internal_auditor_id`),
  ADD KEY `organization_evidence_external_auditor_id_foreign` (`external_auditor_id`),
  ADD KEY `organization_evidence_created_by_foreign` (`created_by`),
  ADD KEY `organization_evidence_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `organization_frameworks`
--
ALTER TABLE `organization_frameworks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `organization_frameworks_organization_id_foreign` (`organization_id`),
  ADD KEY `organization_frameworks_framework_id_foreign` (`framework_id`),
  ADD KEY `organization_frameworks_user_id_foreign` (`user_id`),
  ADD KEY `organization_frameworks_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `organization_policies`
--
ALTER TABLE `organization_policies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `organization_policies_organization_id_foreign` (`organization_id`),
  ADD KEY `organization_policies_policy_id_foreign` (`policy_id`),
  ADD KEY `organization_policies_assignee_id_foreign` (`assignee_id`),
  ADD KEY `organization_policies_approver_id_foreign` (`approver_id`),
  ADD KEY `organization_policies_internal_auditor_id_foreign` (`internal_auditor_id`),
  ADD KEY `organization_policies_external_auditor_id_foreign` (`external_auditor_id`),
  ADD KEY `organization_policies_created_by_foreign` (`created_by`),
  ADD KEY `organization_policies_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `people`
--
ALTER TABLE `people`
  ADD PRIMARY KEY (`id`),
  ADD KEY `people_created_by_foreign` (`created_by`),
  ADD KEY `people_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `policies`
--
ALTER TABLE `policies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `policies_created_by_foreign` (`created_by`),
  ADD KEY `policies_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `policy_scopes`
--
ALTER TABLE `policy_scopes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `policy_scopes_organization_framework_id_foreign` (`organization_framework_id`),
  ADD KEY `policy_scopes_provision_id_foreign` (`provision_id`),
  ADD KEY `policy_scopes_control_id_foreign` (`control_id`),
  ADD KEY `policy_scopes_policy_id_foreign` (`policy_id`);

--
-- Indexes for table `provisions`
--
ALTER TABLE `provisions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `provisions_category_id_foreign` (`category_id`),
  ADD KEY `provisions_created_by_foreign` (`created_by`),
  ADD KEY `provisions_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `provision_categories`
--
ALTER TABLE `provision_categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `provision_categories_created_by_foreign` (`created_by`),
  ADD KEY `provision_categories_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `provision_control_code`
--
ALTER TABLE `provision_control_code`
  ADD PRIMARY KEY (`id`),
  ADD KEY `provision_control_code_provision_id_foreign` (`provision_id`),
  ADD KEY `provision_control_code_control_code_id_foreign` (`control_code_id`);

--
-- Indexes for table `provision_scopes`
--
ALTER TABLE `provision_scopes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `provision_scopes_organization_framework_id_foreign` (`organization_framework_id`),
  ADD KEY `provision_scopes_provision_id_foreign` (`provision_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_added_by_foreign` (`added_by`),
  ADD KEY `users_updated_by_foreign` (`updated_by`),
  ADD KEY `users_designation_id_foreign` (`designation_id`),
  ADD KEY `users_department_id_foreign` (`department_id`);

--
-- Indexes for table `user_evidence`
--
ALTER TABLE `user_evidence`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_evidence_evidence_id_foreign` (`evidence_id`),
  ADD KEY `user_evidence_entity_id_foreign` (`entity_id`),
  ADD KEY `user_evidence_assignee_id_foreign` (`assignee_id`),
  ADD KEY `user_evidence_approver_id_foreign` (`approver_id`),
  ADD KEY `user_evidence_department_id_foreign` (`department_id`),
  ADD KEY `user_evidence_created_by_foreign` (`created_by`),
  ADD KEY `user_evidence_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `user_policies`
--
ALTER TABLE `user_policies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_policies_policy_id_foreign` (`policy_id`),
  ADD KEY `user_policies_entity_id_foreign` (`entity_id`),
  ADD KEY `user_policies_assignee_id_foreign` (`assignee_id`),
  ADD KEY `user_policies_approver_id_foreign` (`approver_id`),
  ADD KEY `user_policies_department_id_foreign` (`department_id`),
  ADD KEY `user_policies_created_by_foreign` (`created_by`),
  ADD KEY `user_policies_updated_by_foreign` (`updated_by`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_log`
--
ALTER TABLE `activity_log`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=278;

--
-- AUTO_INCREMENT for table `assetcategories`
--
ALTER TABLE `assetcategories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `assetcriticalities`
--
ALTER TABLE `assetcriticalities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `assetlocations`
--
ALTER TABLE `assetlocations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `assetmanagements`
--
ALTER TABLE `assetmanagements`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `assetsubcategories`
--
ALTER TABLE `assetsubcategories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `assetvendors`
--
ALTER TABLE `assetvendors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `control_codes`
--
ALTER TABLE `control_codes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=396;

--
-- AUTO_INCREMENT for table `control_code_evidence`
--
ALTER TABLE `control_code_evidence`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT for table `control_code_policies`
--
ALTER TABLE `control_code_policies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `control_domains`
--
ALTER TABLE `control_domains`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `corrective_actions`
--
ALTER TABLE `corrective_actions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `designations`
--
ALTER TABLE `designations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `entities`
--
ALTER TABLE `entities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `evidence`
--
ALTER TABLE `evidence`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=331;

--
-- AUTO_INCREMENT for table `evidence_scopes`
--
ALTER TABLE `evidence_scopes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `frameworks`
--
ALTER TABLE `frameworks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `framework_provisions`
--
ALTER TABLE `framework_provisions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=237;

--
-- AUTO_INCREMENT for table `functional_groups`
--
ALTER TABLE `functional_groups`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `organizations`
--
ALTER TABLE `organizations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `organization_evidence`
--
ALTER TABLE `organization_evidence`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `organization_frameworks`
--
ALTER TABLE `organization_frameworks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `organization_policies`
--
ALTER TABLE `organization_policies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `people`
--
ALTER TABLE `people`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `policies`
--
ALTER TABLE `policies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT for table `policy_scopes`
--
ALTER TABLE `policy_scopes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `provisions`
--
ALTER TABLE `provisions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=127;

--
-- AUTO_INCREMENT for table `provision_categories`
--
ALTER TABLE `provision_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `provision_control_code`
--
ALTER TABLE `provision_control_code`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=260;

--
-- AUTO_INCREMENT for table `provision_scopes`
--
ALTER TABLE `provision_scopes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `user_evidence`
--
ALTER TABLE `user_evidence`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_policies`
--
ALTER TABLE `user_policies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `assetcategories`
--
ALTER TABLE `assetcategories`
  ADD CONSTRAINT `assetcategories_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `assetcategories_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `assetcriticalities`
--
ALTER TABLE `assetcriticalities`
  ADD CONSTRAINT `assetcriticalities_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `assetcriticalities_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `assetlocations`
--
ALTER TABLE `assetlocations`
  ADD CONSTRAINT `assetlocations_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `assetlocations_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `assetmanagements`
--
ALTER TABLE `assetmanagements`
  ADD CONSTRAINT `assetmanagements_catgory_id_foreign` FOREIGN KEY (`catgory_id`) REFERENCES `assetcategories` (`id`),
  ADD CONSTRAINT `assetmanagements_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `assetmanagements_criticalilty_foreign` FOREIGN KEY (`criticalilty`) REFERENCES `assetcriticalities` (`id`),
  ADD CONSTRAINT `assetmanagements_department_foreign` FOREIGN KEY (`department`) REFERENCES `departments` (`id`),
  ADD CONSTRAINT `assetmanagements_location_foreign` FOREIGN KEY (`location`) REFERENCES `assetlocations` (`id`),
  ADD CONSTRAINT `assetmanagements_subcategory_id_foreign` FOREIGN KEY (`subcategory_id`) REFERENCES `assetsubcategories` (`id`),
  ADD CONSTRAINT `assetmanagements_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `assetmanagements_vendor_id_foreign` FOREIGN KEY (`vendor_id`) REFERENCES `assetvendors` (`id`);

--
-- Constraints for table `assetsubcategories`
--
ALTER TABLE `assetsubcategories`
  ADD CONSTRAINT `assetsubcategories_asset_categoryid_foreign` FOREIGN KEY (`asset_categoryid`) REFERENCES `assetcategories` (`id`),
  ADD CONSTRAINT `assetsubcategories_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `assetsubcategories_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `assetvendors`
--
ALTER TABLE `assetvendors`
  ADD CONSTRAINT `assetvendors_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `assetvendors_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `control_codes`
--
ALTER TABLE `control_codes`
  ADD CONSTRAINT `control_codes_control_domain_id_foreign` FOREIGN KEY (`control_domain_id`) REFERENCES `control_domains` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `control_codes_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `control_codes_functional_group_id_foreign` FOREIGN KEY (`functional_group_id`) REFERENCES `functional_groups` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `control_codes_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `control_code_evidence`
--
ALTER TABLE `control_code_evidence`
  ADD CONSTRAINT `control_code_evidence_control_code_id_foreign` FOREIGN KEY (`control_code_id`) REFERENCES `control_codes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `control_code_evidence_evidence_id_foreign` FOREIGN KEY (`evidence_id`) REFERENCES `evidence` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `control_code_policies`
--
ALTER TABLE `control_code_policies`
  ADD CONSTRAINT `control_code_policies_control_code_id_foreign` FOREIGN KEY (`control_code_id`) REFERENCES `control_codes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `control_code_policies_policy_id_foreign` FOREIGN KEY (`policy_id`) REFERENCES `policies` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `control_domains`
--
ALTER TABLE `control_domains`
  ADD CONSTRAINT `control_domains_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `control_domains_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `corrective_actions`
--
ALTER TABLE `corrective_actions`
  ADD CONSTRAINT `corrective_actions_assignee_id_foreign` FOREIGN KEY (`assignee_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `corrective_actions_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `corrective_actions_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `departments`
--
ALTER TABLE `departments`
  ADD CONSTRAINT `departments_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `departments_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `designations`
--
ALTER TABLE `designations`
  ADD CONSTRAINT `designations_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `designations_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `documents`
--
ALTER TABLE `documents`
  ADD CONSTRAINT `documents_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `documents_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `entities`
--
ALTER TABLE `entities`
  ADD CONSTRAINT `entities_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `entities_organization_id_foreign` FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`),
  ADD CONSTRAINT `entities_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `evidence`
--
ALTER TABLE `evidence`
  ADD CONSTRAINT `evidence_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `evidence_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `evidence_scopes`
--
ALTER TABLE `evidence_scopes`
  ADD CONSTRAINT `evidence_scopes_control_id_foreign` FOREIGN KEY (`control_id`) REFERENCES `control_codes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `evidence_scopes_evidence_id_foreign` FOREIGN KEY (`evidence_id`) REFERENCES `evidence` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `evidence_scopes_organization_framework_id_foreign` FOREIGN KEY (`organization_framework_id`) REFERENCES `organization_frameworks` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `evidence_scopes_provision_id_foreign` FOREIGN KEY (`provision_id`) REFERENCES `provisions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `frameworks`
--
ALTER TABLE `frameworks`
  ADD CONSTRAINT `frameworks_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `frameworks_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `framework_provisions`
--
ALTER TABLE `framework_provisions`
  ADD CONSTRAINT `framework_provisions_framework_id_foreign` FOREIGN KEY (`framework_id`) REFERENCES `frameworks` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `framework_provisions_provision_id_foreign` FOREIGN KEY (`provision_id`) REFERENCES `provisions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `functional_groups`
--
ALTER TABLE `functional_groups`
  ADD CONSTRAINT `functional_groups_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `functional_groups_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `organizations`
--
ALTER TABLE `organizations`
  ADD CONSTRAINT `organizations_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `organizations_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `organization_evidence`
--
ALTER TABLE `organization_evidence`
  ADD CONSTRAINT `organization_evidence_approver_id_foreign` FOREIGN KEY (`approver_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `organization_evidence_assignee_id_foreign` FOREIGN KEY (`assignee_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `organization_evidence_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `organization_evidence_evidence_id_foreign` FOREIGN KEY (`evidence_id`) REFERENCES `evidence` (`id`),
  ADD CONSTRAINT `organization_evidence_external_auditor_id_foreign` FOREIGN KEY (`external_auditor_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `organization_evidence_internal_auditor_id_foreign` FOREIGN KEY (`internal_auditor_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `organization_evidence_organization_id_foreign` FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`),
  ADD CONSTRAINT `organization_evidence_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `organization_frameworks`
--
ALTER TABLE `organization_frameworks`
  ADD CONSTRAINT `organization_frameworks_framework_id_foreign` FOREIGN KEY (`framework_id`) REFERENCES `frameworks` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `organization_frameworks_organization_id_foreign` FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `organization_frameworks_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `organization_frameworks_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `organization_policies`
--
ALTER TABLE `organization_policies`
  ADD CONSTRAINT `organization_policies_approver_id_foreign` FOREIGN KEY (`approver_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `organization_policies_assignee_id_foreign` FOREIGN KEY (`assignee_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `organization_policies_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `organization_policies_external_auditor_id_foreign` FOREIGN KEY (`external_auditor_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `organization_policies_internal_auditor_id_foreign` FOREIGN KEY (`internal_auditor_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `organization_policies_organization_id_foreign` FOREIGN KEY (`organization_id`) REFERENCES `organizations` (`id`),
  ADD CONSTRAINT `organization_policies_policy_id_foreign` FOREIGN KEY (`policy_id`) REFERENCES `policies` (`id`),
  ADD CONSTRAINT `organization_policies_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `people`
--
ALTER TABLE `people`
  ADD CONSTRAINT `people_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `people_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `policies`
--
ALTER TABLE `policies`
  ADD CONSTRAINT `policies_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `policies_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `policy_scopes`
--
ALTER TABLE `policy_scopes`
  ADD CONSTRAINT `policy_scopes_control_id_foreign` FOREIGN KEY (`control_id`) REFERENCES `control_codes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `policy_scopes_organization_framework_id_foreign` FOREIGN KEY (`organization_framework_id`) REFERENCES `organization_frameworks` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `policy_scopes_policy_id_foreign` FOREIGN KEY (`policy_id`) REFERENCES `policies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `policy_scopes_provision_id_foreign` FOREIGN KEY (`provision_id`) REFERENCES `provisions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `provisions`
--
ALTER TABLE `provisions`
  ADD CONSTRAINT `provisions_category_id_foreign` FOREIGN KEY (`category_id`) REFERENCES `provision_categories` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `provisions_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `provisions_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `provision_categories`
--
ALTER TABLE `provision_categories`
  ADD CONSTRAINT `provision_categories_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `provision_categories_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `provision_control_code`
--
ALTER TABLE `provision_control_code`
  ADD CONSTRAINT `provision_control_code_control_code_id_foreign` FOREIGN KEY (`control_code_id`) REFERENCES `control_codes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `provision_control_code_provision_id_foreign` FOREIGN KEY (`provision_id`) REFERENCES `provisions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `provision_scopes`
--
ALTER TABLE `provision_scopes`
  ADD CONSTRAINT `provision_scopes_organization_framework_id_foreign` FOREIGN KEY (`organization_framework_id`) REFERENCES `organization_frameworks` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `provision_scopes_provision_id_foreign` FOREIGN KEY (`provision_id`) REFERENCES `provisions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_added_by_foreign` FOREIGN KEY (`added_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `users_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `users_designation_id_foreign` FOREIGN KEY (`designation_id`) REFERENCES `designations` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `users_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `user_evidence`
--
ALTER TABLE `user_evidence`
  ADD CONSTRAINT `user_evidence_approver_id_foreign` FOREIGN KEY (`approver_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `user_evidence_assignee_id_foreign` FOREIGN KEY (`assignee_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `user_evidence_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_evidence_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `user_evidence_entity_id_foreign` FOREIGN KEY (`entity_id`) REFERENCES `entities` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_evidence_evidence_id_foreign` FOREIGN KEY (`evidence_id`) REFERENCES `evidence` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_evidence_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `user_policies`
--
ALTER TABLE `user_policies`
  ADD CONSTRAINT `user_policies_approver_id_foreign` FOREIGN KEY (`approver_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `user_policies_assignee_id_foreign` FOREIGN KEY (`assignee_id`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `user_policies_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `user_policies_department_id_foreign` FOREIGN KEY (`department_id`) REFERENCES `departments` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `user_policies_entity_id_foreign` FOREIGN KEY (`entity_id`) REFERENCES `entities` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_policies_policy_id_foreign` FOREIGN KEY (`policy_id`) REFERENCES `policies` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_policies_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
