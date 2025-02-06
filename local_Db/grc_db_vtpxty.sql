-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2024 at 11:41 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `grc_db_vtpxty`
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
(1, 'User', 'created', 'App\\Models\\User', 'created', 1, NULL, NULL, '{\"attributes\":{\"name\":\"Admin\",\"email\":\"admin@grc.com\",\"user_contact_no\":null,\"designation_id\":null,\"department_id\":null,\"user_profile_pic\":null,\"user_remark\":null,\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(2, 'organization', 'created', 'App\\Models\\Organization', 'created', 1, NULL, NULL, '{\"attributes\":{\"name\":\"Schultz and Sons\",\"legal_name\":\"Medhurst Group\",\"url\":\"http:\\/\\/www.ondricka.biz\\/dolor-ut-minima-et-quia-quam.html\",\"securityOfficer.name\":null,\"address\":\"31651 Wunsch Flat\\nRunolfsdottirmouth, UT 11679-8201\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/0066cc?text=est\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(3, 'Entity', 'created', 'App\\Models\\Entity', 'created', 1, NULL, NULL, '{\"attributes\":{\"name\":\"Daniel-Rutherford\",\"legal_name\":\"Anderson-Bogan\",\"url\":\"http:\\/\\/satterfield.com\\/quasi-natus-voluptas-reprehenderit-qui-deserunt-nobis\",\"securityOfficer.name\":null,\"address\":\"64792 Emilie Radial Suite 161\\nSouth Enrique, WY 43433-1593\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/00dd55?text=amet\",\"organizations.name\":\"Schultz and Sons\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(4, 'Entity', 'created', 'App\\Models\\Entity', 'created', 2, NULL, NULL, '{\"attributes\":{\"name\":\"Bradtke and Sons\",\"legal_name\":\"Williamson-Russel\",\"url\":\"https:\\/\\/www.haley.com\\/saepe-qui-cum-et-cumque-minima-ut-nisi-autem\",\"securityOfficer.name\":null,\"address\":\"9785 Phyllis Pike Suite 418\\nSouth Vada, SC 38172\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/0055cc?text=deserunt\",\"organizations.name\":\"Schultz and Sons\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(5, 'organization', 'created', 'App\\Models\\Organization', 'created', 2, NULL, NULL, '{\"attributes\":{\"name\":\"Gerhold-Rolfson\",\"legal_name\":\"Stamm LLC\",\"url\":\"https:\\/\\/www.terry.org\\/officiis-deserunt-eos-harum-dignissimos-tempora-fugiat-est\",\"securityOfficer.name\":null,\"address\":\"356 Sipes Views Suite 289\\nHeidenreichberg, ME 32591-6895\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/00aa11?text=rerum\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(6, 'Entity', 'created', 'App\\Models\\Entity', 'created', 3, NULL, NULL, '{\"attributes\":{\"name\":\"Streich Inc\",\"legal_name\":\"Gulgowski PLC\",\"url\":\"http:\\/\\/simonis.com\\/\",\"securityOfficer.name\":null,\"address\":\"859 Jean Run\\nDonnellyville, WY 53419\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/007766?text=repudiandae\",\"organizations.name\":\"Gerhold-Rolfson\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(7, 'Entity', 'created', 'App\\Models\\Entity', 'created', 4, NULL, NULL, '{\"attributes\":{\"name\":\"Nitzsche, Champlin and Bosco\",\"legal_name\":\"Ernser LLC\",\"url\":\"http:\\/\\/www.dietrich.com\\/\",\"securityOfficer.name\":null,\"address\":\"411 Schneider Harbors Suite 467\\nSouth Shemarchester, MD 48226\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/0044dd?text=doloremque\",\"organizations.name\":\"Gerhold-Rolfson\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(8, 'organization', 'created', 'App\\Models\\Organization', 'created', 3, NULL, NULL, '{\"attributes\":{\"name\":\"Shields, Marquardt and Welch\",\"legal_name\":\"Rosenbaum, Miller and Kertzmann\",\"url\":\"http:\\/\\/larson.com\\/aut-nisi-voluptatum-non-iusto-hic\",\"securityOfficer.name\":null,\"address\":\"2013 Streich Dale Suite 508\\nEast Shaina, MT 15371-5725\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/00eedd?text=quos\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(9, 'Entity', 'created', 'App\\Models\\Entity', 'created', 5, NULL, NULL, '{\"attributes\":{\"name\":\"Ritchie, Paucek and Strosin\",\"legal_name\":\"Jones, West and Langosh\",\"url\":\"https:\\/\\/www.bosco.com\\/illum-est-commodi-dignissimos-officia\",\"securityOfficer.name\":null,\"address\":\"47859 Spinka Station\\nNorth Marianne, DE 33811-5805\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/0033bb?text=aliquid\",\"organizations.name\":\"Shields, Marquardt and Welch\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(10, 'Entity', 'created', 'App\\Models\\Entity', 'created', 6, NULL, NULL, '{\"attributes\":{\"name\":\"O\'Hara LLC\",\"legal_name\":\"Feest, Kozey and Franecki\",\"url\":\"http:\\/\\/prohaska.com\\/est-est-ducimus-officia-voluptatem-exercitationem-quo-reprehenderit\",\"securityOfficer.name\":null,\"address\":\"41713 Cole Trail\\nNorth Natasha, WI 07133-3101\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/003355?text=sit\",\"organizations.name\":\"Shields, Marquardt and Welch\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(11, 'organization', 'created', 'App\\Models\\Organization', 'created', 4, NULL, NULL, '{\"attributes\":{\"name\":\"Kilback, Ullrich and Hettinger\",\"legal_name\":\"Crona, Mosciski and Renner\",\"url\":\"https:\\/\\/kuphal.org\\/reiciendis-ad-deleniti-sequi-occaecati.html\",\"securityOfficer.name\":null,\"address\":\"9103 Wuckert Field\\nNew Delores, ME 63313-7362\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/0033dd?text=reprehenderit\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(12, 'Entity', 'created', 'App\\Models\\Entity', 'created', 7, NULL, NULL, '{\"attributes\":{\"name\":\"Bashirian-Steuber\",\"legal_name\":\"Stamm-Kunze\",\"url\":\"http:\\/\\/cronin.net\\/laborum-ut-deserunt-nostrum-hic-vitae-et-voluptatem-numquam.html\",\"securityOfficer.name\":null,\"address\":\"5496 Margot Rapid Suite 802\\nKihnstad, KY 88510-0826\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/005566?text=ea\",\"organizations.name\":\"Kilback, Ullrich and Hettinger\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(13, 'Entity', 'created', 'App\\Models\\Entity', 'created', 8, NULL, NULL, '{\"attributes\":{\"name\":\"Russel Ltd\",\"legal_name\":\"Rempel-O\'Conner\",\"url\":\"http:\\/\\/rowe.info\\/et-delectus-ducimus-qui\",\"securityOfficer.name\":null,\"address\":\"48878 Kassulke Estate\\nBillland, VA 46158\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/00bb55?text=temporibus\",\"organizations.name\":\"Kilback, Ullrich and Hettinger\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(14, 'organization', 'created', 'App\\Models\\Organization', 'created', 5, NULL, NULL, '{\"attributes\":{\"name\":\"Hintz Ltd\",\"legal_name\":\"Schuster, Schmidt and Brown\",\"url\":\"http:\\/\\/zulauf.com\\/deleniti-recusandae-et-fuga-culpa-quasi-voluptatem-nesciunt-doloremque\",\"securityOfficer.name\":null,\"address\":\"27068 Lexie Forge Suite 023\\nWindlerborough, TX 02978-4004\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/0022bb?text=totam\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(15, 'Entity', 'created', 'App\\Models\\Entity', 'created', 9, NULL, NULL, '{\"attributes\":{\"name\":\"Gerlach, Dicki and Kling\",\"legal_name\":\"Mosciski-Hudson\",\"url\":\"https:\\/\\/lang.com\\/recusandae-sit-sequi-iste-dolor.html\",\"securityOfficer.name\":null,\"address\":\"8941 Nader Springs Suite 747\\nWest Andreaneville, NC 07224\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/0011cc?text=qui\",\"organizations.name\":\"Hintz Ltd\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(16, 'Entity', 'created', 'App\\Models\\Entity', 'created', 10, NULL, NULL, '{\"attributes\":{\"name\":\"Nolan-Lubowitz\",\"legal_name\":\"Donnelly, Lindgren and Batz\",\"url\":\"http:\\/\\/hessel.com\\/rerum-ea-a-inventore-dignissimos-deleniti-sunt-explicabo\",\"securityOfficer.name\":null,\"address\":\"73424 Nannie Pike\\nLemkeburgh, MN 30617-1318\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/003377?text=ratione\",\"organizations.name\":\"Hintz Ltd\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(17, 'organization', 'created', 'App\\Models\\Organization', 'created', 6, NULL, NULL, '{\"attributes\":{\"name\":\"Kunde-McClure\",\"legal_name\":\"Bergstrom, Homenick and Jacobson\",\"url\":\"http:\\/\\/www.mcclure.com\\/libero-voluptatem-et-rerum-ipsa-qui\",\"securityOfficer.name\":null,\"address\":\"576 Jast Place Apt. 471\\nPort Julianaburgh, IL 35363\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/00ccbb?text=deleniti\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(18, 'Entity', 'created', 'App\\Models\\Entity', 'created', 11, NULL, NULL, '{\"attributes\":{\"name\":\"Block-Heaney\",\"legal_name\":\"Harvey, Vandervort and Wintheiser\",\"url\":\"http:\\/\\/dubuque.com\\/\",\"securityOfficer.name\":null,\"address\":\"4552 Vincent Parkway\\nPort Robynview, CA 59323\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/002244?text=rerum\",\"organizations.name\":\"Kunde-McClure\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(19, 'Entity', 'created', 'App\\Models\\Entity', 'created', 12, NULL, NULL, '{\"attributes\":{\"name\":\"Kuhic-Murray\",\"legal_name\":\"Hintz, Kulas and Frami\",\"url\":\"https:\\/\\/www.robel.com\\/blanditiis-reprehenderit-in-voluptatem\",\"securityOfficer.name\":null,\"address\":\"70977 Humberto Rapid\\nLake Daleside, IA 05892\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/007788?text=saepe\",\"organizations.name\":\"Kunde-McClure\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(20, 'organization', 'created', 'App\\Models\\Organization', 'created', 7, NULL, NULL, '{\"attributes\":{\"name\":\"McKenzie, Miller and Kihn\",\"legal_name\":\"Quigley-Will\",\"url\":\"http:\\/\\/www.jerde.com\\/doloremque-distinctio-voluptates-molestiae\",\"securityOfficer.name\":null,\"address\":\"58401 Berta Brooks\\nWest Sonny, NJ 06492\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/0033bb?text=ut\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(21, 'Entity', 'created', 'App\\Models\\Entity', 'created', 13, NULL, NULL, '{\"attributes\":{\"name\":\"Johnson Ltd\",\"legal_name\":\"Eichmann Inc\",\"url\":\"https:\\/\\/www.schaden.com\\/iure-fugit-et-doloremque-odio-similique-quibusdam-et-necessitatibus\",\"securityOfficer.name\":null,\"address\":\"685 Borer Brook\\nWest Lester, KY 59198-7023\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/00eeee?text=consequatur\",\"organizations.name\":\"McKenzie, Miller and Kihn\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(22, 'Entity', 'created', 'App\\Models\\Entity', 'created', 14, NULL, NULL, '{\"attributes\":{\"name\":\"Bins-Stroman\",\"legal_name\":\"Rath-Cartwright\",\"url\":\"http:\\/\\/strosin.com\\/deleniti-velit-odio-magni-rem-voluptatem-similique\",\"securityOfficer.name\":null,\"address\":\"999 Prohaska Junctions\\nMervinbury, MN 31629\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/002288?text=ut\",\"organizations.name\":\"McKenzie, Miller and Kihn\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(23, 'organization', 'created', 'App\\Models\\Organization', 'created', 8, NULL, NULL, '{\"attributes\":{\"name\":\"Kunze PLC\",\"legal_name\":\"Lubowitz Group\",\"url\":\"http:\\/\\/pfeffer.org\\/ipsum-dolor-similique-aut-in-aliquam-fugiat-molestiae\",\"securityOfficer.name\":null,\"address\":\"875 Leopold Ramp\\nWest Edgardo, ME 32482\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/00ccaa?text=architecto\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(24, 'Entity', 'created', 'App\\Models\\Entity', 'created', 15, NULL, NULL, '{\"attributes\":{\"name\":\"Friesen-Bogan\",\"legal_name\":\"Hahn, Hansen and Kirlin\",\"url\":\"https:\\/\\/mayert.biz\\/aut-modi-sed-perferendis-harum-expedita.html\",\"securityOfficer.name\":null,\"address\":\"909 Leuschke Prairie Suite 676\\nO\'Connellfurt, LA 60126\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/001144?text=nulla\",\"organizations.name\":\"Kunze PLC\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(25, 'Entity', 'created', 'App\\Models\\Entity', 'created', 16, NULL, NULL, '{\"attributes\":{\"name\":\"Grant and Sons\",\"legal_name\":\"Ullrich Group\",\"url\":\"http:\\/\\/stamm.com\\/\",\"securityOfficer.name\":null,\"address\":\"3853 Reilly Mills\\nSouth Reagan, NY 19278\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/0011cc?text=at\",\"organizations.name\":\"Kunze PLC\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(26, 'organization', 'created', 'App\\Models\\Organization', 'created', 9, NULL, NULL, '{\"attributes\":{\"name\":\"Aufderhar Group\",\"legal_name\":\"Emmerich, Herzog and Grady\",\"url\":\"http:\\/\\/howe.biz\\/rerum-numquam-dolorem-quos-a-rerum-ab-corrupti.html\",\"securityOfficer.name\":null,\"address\":\"8069 Gleichner Mountain Suite 224\\nWest Rasheedfort, NH 39959\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/008844?text=ut\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(27, 'Entity', 'created', 'App\\Models\\Entity', 'created', 17, NULL, NULL, '{\"attributes\":{\"name\":\"Kris-Watsica\",\"legal_name\":\"Zulauf PLC\",\"url\":\"http:\\/\\/www.hartmann.com\\/sequi-mollitia-qui-itaque-incidunt-sint-et.html\",\"securityOfficer.name\":null,\"address\":\"26671 Hudson Village\\nYazminview, WV 04116\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/004499?text=deserunt\",\"organizations.name\":\"Aufderhar Group\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(28, 'Entity', 'created', 'App\\Models\\Entity', 'created', 18, NULL, NULL, '{\"attributes\":{\"name\":\"Davis Ltd\",\"legal_name\":\"Waters, Abbott and Crist\",\"url\":\"http:\\/\\/lehner.net\\/\",\"securityOfficer.name\":null,\"address\":\"553 Vallie Shores Suite 383\\nWest Karellebury, ND 62682-9328\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/0000ff?text=modi\",\"organizations.name\":\"Aufderhar Group\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(29, 'organization', 'created', 'App\\Models\\Organization', 'created', 10, NULL, NULL, '{\"attributes\":{\"name\":\"Stanton, Langworth and Breitenberg\",\"legal_name\":\"Koss-Brown\",\"url\":\"http:\\/\\/raynor.com\\/a-exercitationem-autem-qui-dolor-officia.html\",\"securityOfficer.name\":null,\"address\":\"1900 Turner Mountains Suite 289\\nNorth Ernesthaven, CO 47990\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/009966?text=sequi\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(30, 'Entity', 'created', 'App\\Models\\Entity', 'created', 19, NULL, NULL, '{\"attributes\":{\"name\":\"Nikolaus, Batz and Medhurst\",\"legal_name\":\"Goodwin-Schmeler\",\"url\":\"http:\\/\\/www.schulist.com\\/rerum-rerum-ex-sed-repellendus-praesentium-voluptatem-laboriosam-quia\",\"securityOfficer.name\":null,\"address\":\"433 Dooley Forest Suite 715\\nPort Nelsview, MD 61068\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/004433?text=dolores\",\"organizations.name\":\"Stanton, Langworth and Breitenberg\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(31, 'Entity', 'created', 'App\\Models\\Entity', 'created', 20, NULL, NULL, '{\"attributes\":{\"name\":\"Wilderman Ltd\",\"legal_name\":\"Larson, Block and Turner\",\"url\":\"http:\\/\\/homenick.biz\\/\",\"securityOfficer.name\":null,\"address\":\"72008 Stiedemann Run Suite 856\\nSouth Rico, FL 47549-7224\",\"logo_path\":\"https:\\/\\/via.placeholder.com\\/640x480.png\\/000077?text=quis\",\"organizations.name\":\"Stanton, Langworth and Breitenberg\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(32, 'Designation', 'created', 'App\\Models\\Designation', 'created', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Web Developre\",\"description\":null,\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:55:02', '2024-06-12 06:55:02'),
(33, 'Designation', 'created', 'App\\Models\\Designation', 'created', 2, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Accountant\",\"description\":null,\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:55:11', '2024-06-12 06:55:11'),
(34, 'Designation', 'created', 'App\\Models\\Designation', 'created', 3, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Engineer\",\"description\":null,\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 06:55:37', '2024-06-12 06:55:37'),
(35, 'Department', 'created', 'App\\Models\\Department', 'created', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Account\",\"description\":null,\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:02:21', '2024-06-12 07:02:21'),
(36, 'Department', 'created', 'App\\Models\\Department', 'created', 2, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Development\",\"description\":null,\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:02:29', '2024-06-12 07:02:29'),
(37, 'Department', 'created', 'App\\Models\\Department', 'created', 3, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"IT\",\"description\":null,\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:02:34', '2024-06-12 07:02:34'),
(38, 'Policy', 'created', 'App\\Models\\Policy', 'created', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Third Party\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:03:04', '2024-06-12 07:03:04'),
(39, 'Policy', 'created', 'App\\Models\\Policy', 'created', 2, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"N-able Sample\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:03:15', '2024-06-12 07:03:15'),
(40, 'Policy', 'created', 'App\\Models\\Policy', 'created', 3, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Limited Data Set Policy\\/Data Minimization Policy\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:03:25', '2024-06-12 07:03:25'),
(41, 'Policy', 'created', 'App\\Models\\Policy', 'created', 4, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Anonymization and Pseudonymization Policy\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:03:37', '2024-06-12 07:03:37'),
(42, 'Policy', 'created', 'App\\Models\\Policy', 'created', 5, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"ROPA (Record of Processing Activities) Guidance Note\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:03:47', '2024-06-12 07:03:47'),
(43, 'Evidence', 'created', 'App\\Models\\Evidence', 'created', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"CCTV report\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:04:03', '2024-06-12 07:04:03'),
(44, 'Evidence', 'created', 'App\\Models\\Evidence', 'created', 2, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Joint PII Controller agreement\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:04:14', '2024-06-12 07:04:14'),
(45, 'Evidence', 'created', 'App\\Models\\Evidence', 'created', 3, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Register containing disclosure of PII logs\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:04:27', '2024-06-12 07:04:27'),
(46, 'Evidence', 'created', 'App\\Models\\Evidence', 'created', 4, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Population HP13 - Individual Access to PHI\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:04:35', '2024-06-12 07:04:35'),
(47, 'Evidence', 'created', 'App\\Models\\Evidence', 'created', 5, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"List of Data Subject Requests\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:04:50', '2024-06-12 07:04:50'),
(48, 'Control Domain', 'created', 'App\\Models\\ControlDomain', 'created', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Technology Development And Acquitisition\",\"description\":\"Technology Development And Acquitisition\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:05:43', '2024-06-12 07:05:43'),
(49, 'Control Domain', 'created', 'App\\Models\\ControlDomain', 'created', 2, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Vulnerability And Patch Management\",\"description\":\"Vulnerability And Patch Management\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:05:54', '2024-06-12 07:05:54'),
(50, 'Control Domain', 'created', 'App\\Models\\ControlDomain', 'created', 3, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Third-Party Management\",\"description\":\"Third-Party Management\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:06:03', '2024-06-12 07:06:03'),
(51, 'Control Domain', 'created', 'App\\Models\\ControlDomain', 'created', 4, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Security Awareness  And Training\",\"description\":\"Security Awareness  And Training\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:06:23', '2024-06-12 07:06:23'),
(52, 'Control Domain', 'created', 'App\\Models\\ControlDomain', 'created', 5, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Privacy\",\"description\":\"Privacy\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:06:33', '2024-06-12 07:06:33'),
(53, 'Functional Group', 'created', 'App\\Models\\FunctionalGroup', 'created', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Protect\",\"status\":\"Active\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:09:20', '2024-06-12 07:09:20'),
(54, 'Functional Group', 'created', 'App\\Models\\FunctionalGroup', 'created', 2, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Identify\",\"status\":\"Active\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:09:31', '2024-06-12 07:09:31'),
(55, 'Functional Group', 'created', 'App\\Models\\FunctionalGroup', 'created', 3, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Detect\",\"status\":\"Active\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:09:51', '2024-06-12 07:09:51'),
(56, 'Functional Group', 'created', 'App\\Models\\FunctionalGroup', 'created', 4, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Respond\",\"status\":\"Active\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:10:06', '2024-06-12 07:10:06'),
(57, 'Functional Group', 'created', 'App\\Models\\FunctionalGroup', 'created', 5, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Recover\",\"status\":\"Active\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:10:29', '2024-06-12 07:10:29'),
(58, 'Framework', 'created', 'App\\Models\\Framework', 'created', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"GDPR\",\"description\":\"gdpr\",\"status\":\"1\",\"isdeleted\":null,\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:11:20', '2024-06-12 07:11:20'),
(59, 'Framework', 'created', 'App\\Models\\Framework', 'created', 2, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"SOC 2\",\"description\":\"soc2\",\"status\":\"1\",\"isdeleted\":null,\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:11:39', '2024-06-12 07:11:39'),
(60, 'Provision', 'created', 'App\\Models\\Provision', 'created', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"provisions\":\"ART1.1 : This Regulation lays down rules relating to the protection of natural persons with regard to the processing of personal data and rules relating to the free movement of personal data.\",\"status\":\"1\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:12:25', '2024-06-12 07:12:25'),
(61, 'Provision', 'created', 'App\\Models\\Provision', 'created', 2, 'App\\Models\\User', 1, '{\"attributes\":{\"provisions\":\"ART1.2 : This Regulation protects fundamental rights and freedoms of natural persons and in particular their right to the protection of personal data.\",\"status\":\"1\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:12:38', '2024-06-12 07:12:38'),
(62, 'Provision', 'created', 'App\\Models\\Provision', 'created', 3, 'App\\Models\\User', 1, '{\"attributes\":{\"provisions\":\"ART1.2 : This Regulation protects fundamental rights and freedoms of natural persons and in particular their right to the protection of personal data.\",\"status\":\"1\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:12:48', '2024-06-12 07:12:48'),
(63, 'Provision', 'created', 'App\\Models\\Provision', 'created', 4, 'App\\Models\\User', 1, '{\"attributes\":{\"provisions\":\"ART2.1 : This Regulation applies to the processing of personal data wholly or partly by automated means and to the processing other than by automated means of personal data which form part of a filing system or are intended to form part of a filing system.\",\"status\":\"1\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:13:02', '2024-06-12 07:13:02'),
(64, 'Provision', 'created', 'App\\Models\\Provision', 'created', 5, 'App\\Models\\User', 1, '{\"attributes\":{\"provisions\":\"ART2.2.a : This Regulation does not apply to the processing of personal data in the course of an activity which falls outside the scope of Union law;\",\"status\":\"1\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:13:13', '2024-06-12 07:13:13'),
(65, 'Provision', 'created', 'App\\Models\\Provision', 'created', 6, 'App\\Models\\User', 1, '{\"attributes\":{\"provisions\":\"4.1 Understanding the organization and its context\",\"status\":\"1\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:13:33', '2024-06-12 07:13:33'),
(66, 'Provision', 'created', 'App\\Models\\Provision', 'created', 7, 'App\\Models\\User', 1, '{\"attributes\":{\"provisions\":\"4.2 Understanding the needs and expectations of interested parties\",\"status\":\"1\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:13:43', '2024-06-12 07:13:43'),
(67, 'Provision', 'created', 'App\\Models\\Provision', 'created', 8, 'App\\Models\\User', 1, '{\"attributes\":{\"provisions\":\"4.3 Determining the scope of the information security management system\",\"status\":\"1\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:13:52', '2024-06-12 07:13:52'),
(68, 'Provision', 'created', 'App\\Models\\Provision', 'created', 9, 'App\\Models\\User', 1, '{\"attributes\":{\"provisions\":\"4.4 Information security management system\",\"status\":\"1\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:14:00', '2024-06-12 07:14:00'),
(69, 'Provision', 'created', 'App\\Models\\Provision', 'created', 10, 'App\\Models\\User', 1, '{\"attributes\":{\"provisions\":\"5.1 Leadership and commitment\",\"status\":\"1\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:14:08', '2024-06-12 07:14:08'),
(70, 'Control Code', 'created', 'App\\Models\\ControlCode', 'created', 1, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Defining Business Context & Mission\",\"code\":\"GOV-08\",\"description\":\"Mechanisms exist to define the context of its business model and document the mission of the organization.\",\"control_weight\":4,\"controlDomain.name\":\"Security Awareness  And Training\",\"functionalGroup.name\":\"Identify\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:16:59', '2024-06-12 07:16:59'),
(71, 'Control Code', 'created', 'App\\Models\\ControlCode', 'created', 2, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Developer Threat Analysis & Flaw Remediation\",\"code\":\"TDA-15\",\"description\":\"Developer Threat Analysis & Flaw Remediation\",\"control_weight\":10,\"controlDomain.name\":\"Technology Development And Acquitisition\",\"functionalGroup.name\":\"Protect\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:18:09', '2024-06-12 07:18:09'),
(72, 'Control Code', 'created', 'App\\Models\\ControlCode', 'created', 3, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Secure Migration Practices\",\"code\":\"TDA-08.1\",\"description\":\"Mechanisms exist to ensure secure migration practices purge systems, applications and services of test\\/development\\/staging data and accounts before it is migrated into a production environment.\",\"control_weight\":7,\"controlDomain.name\":\"Technology Development And Acquitisition\",\"functionalGroup.name\":\"Protect\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:19:01', '2024-06-12 07:19:01'),
(73, 'Control Code', 'created', 'App\\Models\\ControlCode', 'created', 4, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"User Awareness\",\"code\":\"HRS-03.1\",\"description\":\"Mechanisms exist to communicate with users about their roles and responsibilities to maintain a safe and secure working environment.\",\"control_weight\":8,\"controlDomain.name\":\"Privacy\",\"functionalGroup.name\":\"Identify\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:20:28', '2024-06-12 07:20:28'),
(74, 'Control Code', 'created', 'App\\Models\\ControlCode', 'created', 5, 'App\\Models\\User', 1, '{\"attributes\":{\"name\":\"Performance Monitoring\",\"code\":\"CAP-04\",\"description\":\"Automated mechanisms exist to centrally-monitor and alert on the operating state and health status of critical systems, applications and services.\",\"control_weight\":6,\"controlDomain.name\":\"Third-Party Management\",\"functionalGroup.name\":\"Identify\",\"createdBy.name\":\"Admin\",\"updatedBy.name\":\"Admin\"}}', NULL, '2024-06-12 07:22:06', '2024-06-12 07:22:06');

-- --------------------------------------------------------

--
-- Table structure for table `control_codes`
--

CREATE TABLE `control_codes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `control_weight` int(11) NOT NULL,
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
(1, 'Defining Business Context & Mission', 'GOV-08', 4, 4, 2, 'Mechanisms exist to define the context of its business model and document the mission of the organization.', 1, 1, '2024-06-12 07:16:59', '2024-06-12 07:16:59'),
(2, 'Developer Threat Analysis & Flaw Remediation', 'TDA-15', 10, 1, 1, 'Developer Threat Analysis & Flaw Remediation', 1, 1, '2024-06-12 07:18:09', '2024-06-12 07:18:09'),
(3, 'Secure Migration Practices', 'TDA-08.1', 7, 1, 1, 'Mechanisms exist to ensure secure migration practices purge systems, applications and services of test/development/staging data and accounts before it is migrated into a production environment.', 1, 1, '2024-06-12 07:19:01', '2024-06-12 07:19:01'),
(4, 'User Awareness', 'HRS-03.1', 8, 5, 2, 'Mechanisms exist to communicate with users about their roles and responsibilities to maintain a safe and secure working environment.', 1, 1, '2024-06-12 07:20:28', '2024-06-12 07:20:28'),
(5, 'Performance Monitoring', 'CAP-04', 6, 3, 2, 'Automated mechanisms exist to centrally-monitor and alert on the operating state and health status of critical systems, applications and services.', 1, 1, '2024-06-12 07:22:06', '2024-06-12 07:22:06');

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
(1, 5, 1, NULL, NULL),
(2, 1, 5, NULL, NULL),
(3, 1, 5, NULL, NULL),
(4, 3, 3, NULL, NULL),
(5, 2, 4, NULL, NULL);

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
(1, 1, 2, NULL, NULL),
(2, 3, 3, NULL, NULL),
(3, 3, 1, NULL, NULL),
(4, 2, 5, NULL, NULL);

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
(1, 'Technology Development And Acquitisition', 'Technology Development And Acquitisition', 1, 1, '2024-06-12 07:05:43', '2024-06-12 07:05:43'),
(2, 'Vulnerability And Patch Management', 'Vulnerability And Patch Management', 1, 1, '2024-06-12 07:05:54', '2024-06-12 07:05:54'),
(3, 'Third-Party Management', 'Third-Party Management', 1, 1, '2024-06-12 07:06:03', '2024-06-12 07:06:03'),
(4, 'Security Awareness  And Training', 'Security Awareness  And Training', 1, 1, '2024-06-12 07:06:22', '2024-06-12 07:06:22'),
(5, 'Privacy', 'Privacy', 1, 1, '2024-06-12 07:06:33', '2024-06-12 07:06:33');

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
(1, 'Account', NULL, 1, 1, '2024-06-12 07:02:21', '2024-06-12 07:02:21'),
(2, 'Development', NULL, 1, 1, '2024-06-12 07:02:29', '2024-06-12 07:02:29'),
(3, 'IT', NULL, 1, 1, '2024-06-12 07:02:34', '2024-06-12 07:02:34');

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
(1, 'Web Developre', NULL, 1, 1, '2024-06-12 06:55:02', '2024-06-12 06:55:02'),
(2, 'Accountant', NULL, 1, 1, '2024-06-12 06:55:11', '2024-06-12 06:55:11'),
(3, 'Engineer', NULL, 1, 1, '2024-06-12 06:55:37', '2024-06-12 06:55:37');

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
(1, 'Daniel-Rutherford', 'Anderson-Bogan', 'http://satterfield.com/quasi-natus-voluptas-reprehenderit-qui-deserunt-nobis', 'Dustin Hamill', '64792 Emilie Radial Suite 161\nSouth Enrique, WY 43433-1593', 'https://via.placeholder.com/640x480.png/00dd55?text=amet', 1, 1, 1, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(2, 'Bradtke and Sons', 'Williamson-Russel', 'https://www.haley.com/saepe-qui-cum-et-cumque-minima-ut-nisi-autem', 'David Hamill MD', '9785 Phyllis Pike Suite 418\nSouth Vada, SC 38172', 'https://via.placeholder.com/640x480.png/0055cc?text=deserunt', 1, 1, 1, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(3, 'Streich Inc', 'Gulgowski PLC', 'http://simonis.com/', 'Sally Stroman I', '859 Jean Run\nDonnellyville, WY 53419', 'https://via.placeholder.com/640x480.png/007766?text=repudiandae', 1, 1, 2, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(4, 'Nitzsche, Champlin and Bosco', 'Ernser LLC', 'http://www.dietrich.com/', 'Madeline Gutkowski V', '411 Schneider Harbors Suite 467\nSouth Shemarchester, MD 48226', 'https://via.placeholder.com/640x480.png/0044dd?text=doloremque', 1, 1, 2, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(5, 'Ritchie, Paucek and Strosin', 'Jones, West and Langosh', 'https://www.bosco.com/illum-est-commodi-dignissimos-officia', 'Nicolette Davis', '47859 Spinka Station\nNorth Marianne, DE 33811-5805', 'https://via.placeholder.com/640x480.png/0033bb?text=aliquid', 1, 1, 3, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(6, 'O\'Hara LLC', 'Feest, Kozey and Franecki', 'http://prohaska.com/est-est-ducimus-officia-voluptatem-exercitationem-quo-reprehenderit', 'Sister Fritsch', '41713 Cole Trail\nNorth Natasha, WI 07133-3101', 'https://via.placeholder.com/640x480.png/003355?text=sit', 1, 1, 3, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(7, 'Bashirian-Steuber', 'Stamm-Kunze', 'http://cronin.net/laborum-ut-deserunt-nostrum-hic-vitae-et-voluptatem-numquam.html', 'Telly Bernhard', '5496 Margot Rapid Suite 802\nKihnstad, KY 88510-0826', 'https://via.placeholder.com/640x480.png/005566?text=ea', 1, 1, 4, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(8, 'Russel Ltd', 'Rempel-O\'Conner', 'http://rowe.info/et-delectus-ducimus-qui', 'Florence Steuber', '48878 Kassulke Estate\nBillland, VA 46158', 'https://via.placeholder.com/640x480.png/00bb55?text=temporibus', 1, 1, 4, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(9, 'Gerlach, Dicki and Kling', 'Mosciski-Hudson', 'https://lang.com/recusandae-sit-sequi-iste-dolor.html', 'Ike Morar PhD', '8941 Nader Springs Suite 747\nWest Andreaneville, NC 07224', 'https://via.placeholder.com/640x480.png/0011cc?text=qui', 1, 1, 5, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(10, 'Nolan-Lubowitz', 'Donnelly, Lindgren and Batz', 'http://hessel.com/rerum-ea-a-inventore-dignissimos-deleniti-sunt-explicabo', 'Chasity Bartoletti', '73424 Nannie Pike\nLemkeburgh, MN 30617-1318', 'https://via.placeholder.com/640x480.png/003377?text=ratione', 1, 1, 5, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(11, 'Block-Heaney', 'Harvey, Vandervort and Wintheiser', 'http://dubuque.com/', 'Elise Wiza', '4552 Vincent Parkway\nPort Robynview, CA 59323', 'https://via.placeholder.com/640x480.png/002244?text=rerum', 1, 1, 6, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(12, 'Kuhic-Murray', 'Hintz, Kulas and Frami', 'https://www.robel.com/blanditiis-reprehenderit-in-voluptatem', 'Miss Verona Waters', '70977 Humberto Rapid\nLake Daleside, IA 05892', 'https://via.placeholder.com/640x480.png/007788?text=saepe', 1, 1, 6, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(13, 'Johnson Ltd', 'Eichmann Inc', 'https://www.schaden.com/iure-fugit-et-doloremque-odio-similique-quibusdam-et-necessitatibus', 'Adrianna West', '685 Borer Brook\nWest Lester, KY 59198-7023', 'https://via.placeholder.com/640x480.png/00eeee?text=consequatur', 1, 1, 7, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(14, 'Bins-Stroman', 'Rath-Cartwright', 'http://strosin.com/deleniti-velit-odio-magni-rem-voluptatem-similique', 'Destinee Farrell', '999 Prohaska Junctions\nMervinbury, MN 31629', 'https://via.placeholder.com/640x480.png/002288?text=ut', 1, 1, 7, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(15, 'Friesen-Bogan', 'Hahn, Hansen and Kirlin', 'https://mayert.biz/aut-modi-sed-perferendis-harum-expedita.html', 'Isai Mohr', '909 Leuschke Prairie Suite 676\nO\'Connellfurt, LA 60126', 'https://via.placeholder.com/640x480.png/001144?text=nulla', 1, 1, 8, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(16, 'Grant and Sons', 'Ullrich Group', 'http://stamm.com/', 'Jordan Kunde', '3853 Reilly Mills\nSouth Reagan, NY 19278', 'https://via.placeholder.com/640x480.png/0011cc?text=at', 1, 1, 8, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(17, 'Kris-Watsica', 'Zulauf PLC', 'http://www.hartmann.com/sequi-mollitia-qui-itaque-incidunt-sint-et.html', 'Clement Huel', '26671 Hudson Village\nYazminview, WV 04116', 'https://via.placeholder.com/640x480.png/004499?text=deserunt', 1, 1, 9, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(18, 'Davis Ltd', 'Waters, Abbott and Crist', 'http://lehner.net/', 'Judy Casper', '553 Vallie Shores Suite 383\nWest Karellebury, ND 62682-9328', 'https://via.placeholder.com/640x480.png/0000ff?text=modi', 1, 1, 9, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(19, 'Nikolaus, Batz and Medhurst', 'Goodwin-Schmeler', 'http://www.schulist.com/rerum-rerum-ex-sed-repellendus-praesentium-voluptatem-laboriosam-quia', 'Dr. Domenick Hoppe', '433 Dooley Forest Suite 715\nPort Nelsview, MD 61068', 'https://via.placeholder.com/640x480.png/004433?text=dolores', 1, 1, 10, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(20, 'Wilderman Ltd', 'Larson, Block and Turner', 'http://homenick.biz/', 'Valentina Simonis', '72008 Stiedemann Run Suite 856\nSouth Rico, FL 47549-7224', 'https://via.placeholder.com/640x480.png/000077?text=quis', 1, 1, 10, '2024-06-12 06:53:01', '2024-06-12 06:53:01');

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
(1, 'CCTV report', 1, 1, '2024-06-12 07:04:03', '2024-06-12 07:04:03'),
(2, 'Joint PII Controller agreement', 1, 1, '2024-06-12 07:04:14', '2024-06-12 07:04:14'),
(3, 'Register containing disclosure of PII logs', 1, 1, '2024-06-12 07:04:26', '2024-06-12 07:04:26'),
(4, 'Population HP13 - Individual Access to PHI', 1, 1, '2024-06-12 07:04:35', '2024-06-12 07:04:35'),
(5, 'List of Data Subject Requests', 1, 1, '2024-06-12 07:04:50', '2024-06-12 07:04:50');

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
(1, 'GDPR', 'gdpr', '1', 1, 1, '2024-06-12 07:11:20', '2024-06-12 07:11:20'),
(2, 'SOC 2', 'soc2', '1', 1, 1, '2024-06-12 07:11:39', '2024-06-12 07:11:39');

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
(1, 1, 1, NULL, NULL),
(2, 1, 2, NULL, NULL),
(3, 1, 3, NULL, NULL),
(4, 1, 4, NULL, NULL),
(5, 1, 5, NULL, NULL),
(6, 2, 6, NULL, NULL),
(7, 2, 7, NULL, NULL),
(8, 2, 8, NULL, NULL),
(9, 2, 9, NULL, NULL),
(10, 2, 10, NULL, NULL),
(11, 2, 1, NULL, NULL);

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
(1, 'Protect', 'Active', 1, 1, '2024-06-12 07:09:20', '2024-06-12 07:09:20'),
(2, 'Identify', 'Active', 1, 1, '2024-06-12 07:09:31', '2024-06-12 07:09:31'),
(3, 'Detect', 'Active', 1, 1, '2024-06-12 07:09:51', '2024-06-12 07:09:51'),
(4, 'Respond', 'Active', 1, 1, '2024-06-12 07:10:06', '2024-06-12 07:10:06'),
(5, 'Recover', 'Active', 1, 1, '2024-06-12 07:10:29', '2024-06-12 07:10:29');

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
(18, '2024_05_31_045431_create_provisions_table', 1),
(19, '2024_05_31_072930_create_framework_provisions_table', 1),
(20, '2024_06_03_131008_create_policies_table', 1),
(21, '2024_06_06_105204_create_evidence_table', 1),
(22, '2024_06_12_013421_create_controlcodes_table', 1),
(23, '2024_06_12_111019_create_provision_control_code_table', 1),
(24, '2024_06_12_114324_create_control_code_policies_table', 1),
(25, '2024_06_12_114335_create_control_code_evidence_table', 1);

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

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `order_id`, `customer_name`, `product`, `order_date`, `amount`, `payment_method`, `delivery_status`, `created_at`, `updated_at`) VALUES
(1, '40288', 'Mrs. Emie Aufderhar', 'et', NULL, 542, 'Mastercard', 'Pending', '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(2, '79061', 'Andres Towne', 'aut', NULL, 340, 'Visa', 'Pickups', '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(3, '72808', 'Werner Fay', 'voluptate', NULL, 719, 'COD', 'Inprogress', '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(4, '31094', 'Jamaal Pfannerstill', 'hic', NULL, 513, 'Visa', 'Pending', '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(5, '85097', 'Gene Corkery', 'aliquam', NULL, 284, 'Paypal', 'Pickups', '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(6, '18487', 'Buddy Cartwright', 'natus', NULL, 626, 'Visa', 'Cancelled', '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(7, '10520', 'Prof. Elmira Schroeder', 'nihil', NULL, 117, 'Paypal', 'Inprogress', '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(8, '14907', 'Charlotte Kuhn', 'vel', NULL, 903, 'Visa', 'Delivered', '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(9, '68354', 'Alan Douglas', 'culpa', NULL, 819, 'Mastercard', 'Returns', '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(10, '42524', 'Chelsey Green III', 'pariatur', NULL, 403, 'Mastercard', 'Pending', '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(11, '78228', 'Dr. Brennan King', 'non', NULL, 616, 'Mastercard', 'Delivered', '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(12, '39906', 'Antonina Greenfelder DDS', 'assumenda', NULL, 963, 'Visa', 'Pickups', '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(13, '30334', 'Dr. Hiram Cronin', 'rem', NULL, 933, 'Mastercard', 'Pending', '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(14, '31124', 'Leonie Walker', 'et', NULL, 153, 'Paypal', 'Delivered', '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(15, '37252', 'Andrew Miller Jr.', 'incidunt', NULL, 296, 'Paypal', 'Inprogress', '2024-06-12 06:53:01', '2024-06-12 06:53:01');

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
(1, 'Schultz and Sons', 'Medhurst Group', 'http://www.ondricka.biz/dolor-ut-minima-et-quia-quam.html', 'Raegan DuBuque', '31651 Wunsch Flat\nRunolfsdottirmouth, UT 11679-8201', 'https://via.placeholder.com/640x480.png/0066cc?text=est', 1, 1, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(2, 'Gerhold-Rolfson', 'Stamm LLC', 'https://www.terry.org/officiis-deserunt-eos-harum-dignissimos-tempora-fugiat-est', 'Frederik Swaniawski', '356 Sipes Views Suite 289\nHeidenreichberg, ME 32591-6895', 'https://via.placeholder.com/640x480.png/00aa11?text=rerum', 1, 1, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(3, 'Shields, Marquardt and Welch', 'Rosenbaum, Miller and Kertzmann', 'http://larson.com/aut-nisi-voluptatum-non-iusto-hic', 'Gardner Grimes', '2013 Streich Dale Suite 508\nEast Shaina, MT 15371-5725', 'https://via.placeholder.com/640x480.png/00eedd?text=quos', 1, 1, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(4, 'Kilback, Ullrich and Hettinger', 'Crona, Mosciski and Renner', 'https://kuphal.org/reiciendis-ad-deleniti-sequi-occaecati.html', 'Sandra Reichel', '9103 Wuckert Field\nNew Delores, ME 63313-7362', 'https://via.placeholder.com/640x480.png/0033dd?text=reprehenderit', 1, 1, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(5, 'Hintz Ltd', 'Schuster, Schmidt and Brown', 'http://zulauf.com/deleniti-recusandae-et-fuga-culpa-quasi-voluptatem-nesciunt-doloremque', 'Terence Hermann', '27068 Lexie Forge Suite 023\nWindlerborough, TX 02978-4004', 'https://via.placeholder.com/640x480.png/0022bb?text=totam', 1, 1, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(6, 'Kunde-McClure', 'Bergstrom, Homenick and Jacobson', 'http://www.mcclure.com/libero-voluptatem-et-rerum-ipsa-qui', 'Dorian West', '576 Jast Place Apt. 471\nPort Julianaburgh, IL 35363', 'https://via.placeholder.com/640x480.png/00ccbb?text=deleniti', 1, 1, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(7, 'McKenzie, Miller and Kihn', 'Quigley-Will', 'http://www.jerde.com/doloremque-distinctio-voluptates-molestiae', 'Hilda Lakin', '58401 Berta Brooks\nWest Sonny, NJ 06492', 'https://via.placeholder.com/640x480.png/0033bb?text=ut', 1, 1, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(8, 'Kunze PLC', 'Lubowitz Group', 'http://pfeffer.org/ipsum-dolor-similique-aut-in-aliquam-fugiat-molestiae', 'Dr. Omer Beer IV', '875 Leopold Ramp\nWest Edgardo, ME 32482', 'https://via.placeholder.com/640x480.png/00ccaa?text=architecto', 1, 1, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(9, 'Aufderhar Group', 'Emmerich, Herzog and Grady', 'http://howe.biz/rerum-numquam-dolorem-quos-a-rerum-ab-corrupti.html', 'Petra Heidenreich', '8069 Gleichner Mountain Suite 224\nWest Rasheedfort, NH 39959', 'https://via.placeholder.com/640x480.png/008844?text=ut', 1, 1, '2024-06-12 06:53:01', '2024-06-12 06:53:01'),
(10, 'Stanton, Langworth and Breitenberg', 'Koss-Brown', 'http://raynor.com/a-exercitationem-autem-qui-dolor-officia.html', 'Christophe Quigley', '1900 Turner Mountains Suite 289\nNorth Ernesthaven, CO 47990', 'https://via.placeholder.com/640x480.png/009966?text=sequi', 1, 1, '2024-06-12 06:53:01', '2024-06-12 06:53:01');

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
(1, 'user-create', 'web', '2024-06-12 06:53:59', '2024-06-12 06:53:59'),
(2, 'user-delete', 'web', '2024-06-12 06:54:10', '2024-06-12 06:54:10'),
(3, 'user-read', 'web', '2024-06-12 06:54:19', '2024-06-12 06:54:19'),
(4, 'user-update', 'web', '2024-06-12 06:54:28', '2024-06-12 06:54:28');

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
(1, 'Third Party', 1, 1, '2024-06-12 07:03:04', '2024-06-12 07:03:04'),
(2, 'N-able Sample', 1, 1, '2024-06-12 07:03:15', '2024-06-12 07:03:15'),
(3, 'Limited Data Set Policy/Data Minimization Policy', 1, 1, '2024-06-12 07:03:25', '2024-06-12 07:03:25'),
(4, 'Anonymization and Pseudonymization Policy', 1, 1, '2024-06-12 07:03:37', '2024-06-12 07:03:37'),
(5, 'ROPA (Record of Processing Activities) Guidance Note', 1, 1, '2024-06-12 07:03:47', '2024-06-12 07:03:47');

-- --------------------------------------------------------

--
-- Table structure for table `provisions`
--

CREATE TABLE `provisions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `provisions` text NOT NULL,
  `status` enum('0','1') NOT NULL,
  `created_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `provisions`
--

INSERT INTO `provisions` (`id`, `provisions`, `status`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(1, 'ART1.1 : This Regulation lays down rules relating to the protection of natural persons with regard to the processing of personal data and rules relating to the free movement of personal data.', '1', 1, 1, '2024-06-12 07:12:25', '2024-06-12 07:12:25'),
(2, 'ART1.2 : This Regulation protects fundamental rights and freedoms of natural persons and in particular their right to the protection of personal data.', '1', 1, 1, '2024-06-12 07:12:38', '2024-06-12 07:12:38'),
(3, 'ART1.2 : This Regulation protects fundamental rights and freedoms of natural persons and in particular their right to the protection of personal data.', '1', 1, 1, '2024-06-12 07:12:48', '2024-06-12 07:12:48'),
(4, 'ART2.1 : This Regulation applies to the processing of personal data wholly or partly by automated means and to the processing other than by automated means of personal data which form part of a filing system or are intended to form part of a filing system.', '1', 1, 1, '2024-06-12 07:13:02', '2024-06-12 07:13:02'),
(5, 'ART2.2.a : This Regulation does not apply to the processing of personal data in the course of an activity which falls outside the scope of Union law;', '1', 1, 1, '2024-06-12 07:13:13', '2024-06-12 07:13:13'),
(6, '4.1 Understanding the organization and its context', '1', 1, 1, '2024-06-12 07:13:33', '2024-06-12 07:13:33'),
(7, '4.2 Understanding the needs and expectations of interested parties', '1', 1, 1, '2024-06-12 07:13:43', '2024-06-12 07:13:43'),
(8, '4.3 Determining the scope of the information security management system', '1', 1, 1, '2024-06-12 07:13:52', '2024-06-12 07:13:52'),
(9, '4.4 Information security management system', '1', 1, 1, '2024-06-12 07:14:00', '2024-06-12 07:14:00'),
(10, '5.1 Leadership and commitment', '1', 1, 1, '2024-06-12 07:14:08', '2024-06-12 07:14:08');

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
(1, 1, 1, NULL, NULL),
(2, 1, 2, NULL, NULL),
(3, 2, 1, NULL, NULL),
(4, 2, 3, NULL, NULL),
(5, 3, 2, NULL, NULL),
(6, 4, 5, NULL, NULL),
(7, 5, 2, NULL, NULL),
(8, 6, 5, NULL, NULL),
(9, 7, 3, NULL, NULL),
(10, 7, 3, NULL, NULL),
(11, 8, 5, NULL, NULL),
(12, 8, 2, NULL, NULL),
(13, 9, 2, NULL, NULL),
(14, 9, 2, NULL, NULL),
(15, 10, 3, NULL, NULL);

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
(1, 'Admin', 'web', '2024-06-12 06:54:45', '2024-06-12 06:54:45');

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
(1, 1),
(2, 1),
(3, 1),
(4, 1);

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
  `added_by` bigint(20) UNSIGNED NOT NULL,
  `updated_by` bigint(20) UNSIGNED NOT NULL,
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
(1, 'Admin', 'admin@grc.com', '2024-06-12 06:53:01', '$2y$12$QgZ35vap3wOkekA3doxm2.mdVHRVaVJk2hOozxRXXHCFKBuqTBucm', 1, 1, NULL, NULL, NULL, NULL, '2024-06-12 06:53:01', '2024-06-12 06:53:01', NULL, NULL);

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
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

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
-- Indexes for table `provisions`
--
ALTER TABLE `provisions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `provisions_created_by_foreign` (`created_by`),
  ADD KEY `provisions_updated_by_foreign` (`updated_by`);

--
-- Indexes for table `provision_control_code`
--
ALTER TABLE `provision_control_code`
  ADD PRIMARY KEY (`id`),
  ADD KEY `provision_control_code_provision_id_foreign` (`provision_id`),
  ADD KEY `provision_control_code_control_code_id_foreign` (`control_code_id`);

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_log`
--
ALTER TABLE `activity_log`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT for table `control_codes`
--
ALTER TABLE `control_codes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `control_code_evidence`
--
ALTER TABLE `control_code_evidence`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `control_code_policies`
--
ALTER TABLE `control_code_policies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `control_domains`
--
ALTER TABLE `control_domains`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `designations`
--
ALTER TABLE `designations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `entities`
--
ALTER TABLE `entities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `evidence`
--
ALTER TABLE `evidence`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `frameworks`
--
ALTER TABLE `frameworks`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `framework_provisions`
--
ALTER TABLE `framework_provisions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `functional_groups`
--
ALTER TABLE `functional_groups`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `organizations`
--
ALTER TABLE `organizations`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `policies`
--
ALTER TABLE `policies`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `provisions`
--
ALTER TABLE `provisions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `provision_control_code`
--
ALTER TABLE `provision_control_code`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

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
-- Constraints for table `frameworks`
--
ALTER TABLE `frameworks`
  ADD CONSTRAINT `frameworks_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `frameworks_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `framework_provisions`
--
ALTER TABLE `framework_provisions`
  ADD CONSTRAINT `framework_provisions_framework_id_foreign` FOREIGN KEY (`framework_id`) REFERENCES `frameworks` (`id`),
  ADD CONSTRAINT `framework_provisions_provision_id_foreign` FOREIGN KEY (`provision_id`) REFERENCES `provisions` (`id`);

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
-- Constraints for table `policies`
--
ALTER TABLE `policies`
  ADD CONSTRAINT `policies_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `policies_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `provisions`
--
ALTER TABLE `provisions`
  ADD CONSTRAINT `provisions_created_by_foreign` FOREIGN KEY (`created_by`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `provisions_updated_by_foreign` FOREIGN KEY (`updated_by`) REFERENCES `users` (`id`);

--
-- Constraints for table `provision_control_code`
--
ALTER TABLE `provision_control_code`
  ADD CONSTRAINT `provision_control_code_control_code_id_foreign` FOREIGN KEY (`control_code_id`) REFERENCES `control_codes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `provision_control_code_provision_id_foreign` FOREIGN KEY (`provision_id`) REFERENCES `provisions` (`id`) ON DELETE CASCADE;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
