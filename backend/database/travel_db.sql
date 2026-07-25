-- MySQL dump 10.13  Distrib 8.0.46, for Win64 (x86_64)
--
-- Host: localhost    Database: travel_db
-- ------------------------------------------------------
-- Server version	8.0.46

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog_page`
--

DROP TABLE IF EXISTS `blog_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blog_page` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page_title` varchar(255) DEFAULT NULL,
  `hero` json DEFAULT NULL,
  `posts` json DEFAULT NULL,
  `pagination` json DEFAULT NULL,
  `author` json DEFAULT NULL,
  `recent_posts` json DEFAULT NULL,
  `categories` json DEFAULT NULL,
  `tags` json DEFAULT NULL,
  `newsletter` json DEFAULT NULL,
  `footer` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_page`
--

LOCK TABLES `blog_page` WRITE;
/*!40000 ALTER TABLE `blog_page` DISABLE KEYS */;
/*!40000 ALTER TABLE `blog_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_page`
--

DROP TABLE IF EXISTS `contact_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_page` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page_title` varchar(255) DEFAULT NULL,
  `topbar` json DEFAULT NULL,
  `navbar` json DEFAULT NULL,
  `hero` json DEFAULT NULL,
  `intro` json DEFAULT NULL,
  `core_values` json DEFAULT NULL,
  `partners` json DEFAULT NULL,
  `cta_banner` json DEFAULT NULL,
  `testimonials` json DEFAULT NULL,
  `footer` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_page`
--

LOCK TABLES `contact_page` WRITE;
/*!40000 ALTER TABLE `contact_page` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `destination_page`
--

DROP TABLE IF EXISTS `destination_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `destination_page` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page_title` varchar(255) DEFAULT NULL,
  `topbar` json DEFAULT NULL,
  `navbar` json DEFAULT NULL,
  `hero` json DEFAULT NULL,
  `search_bar` json DEFAULT NULL,
  `popular_destinations` json DEFAULT NULL,
  `packages` json DEFAULT NULL,
  `cta_banner` json DEFAULT NULL,
  `statistics` json DEFAULT NULL,
  `special_packages` json DEFAULT NULL,
  `traveller_gallery` json DEFAULT NULL,
  `discount_banner` json DEFAULT NULL,
  `recent_posts` json DEFAULT NULL,
  `testimonials` json DEFAULT NULL,
  `bottom_cta` json DEFAULT NULL,
  `footer` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `destination_page`
--

LOCK TABLES `destination_page` WRITE;
/*!40000 ALTER TABLE `destination_page` DISABLE KEYS */;
/*!40000 ALTER TABLE `destination_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_page`
--

DROP TABLE IF EXISTS `home_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_page` (
  `id` int NOT NULL AUTO_INCREMENT,
  `hero_title` varchar(255) DEFAULT NULL,
  `hero_description` text,
  `hero_button1` varchar(100) DEFAULT NULL,
  `hero_button2` varchar(100) DEFAULT NULL,
  `hero_image` varchar(500) DEFAULT NULL,
  `search_section` json DEFAULT NULL,
  `destinations` json DEFAULT NULL,
  `packages` json DEFAULT NULL,
  `special_packages` json DEFAULT NULL,
  `gallery` json DEFAULT NULL,
  `posts` json DEFAULT NULL,
  `testimonials` json DEFAULT NULL,
  `statistics` json DEFAULT NULL,
  `footer` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_page`
--

LOCK TABLES `home_page` WRITE;
/*!40000 ALTER TABLE `home_page` DISABLE KEYS */;
/*!40000 ALTER TABLE `home_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `index_page`
--

DROP TABLE IF EXISTS `index_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `index_page` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page_title` varchar(255) DEFAULT NULL,
  `topbar` json DEFAULT NULL,
  `navbar` json DEFAULT NULL,
  `hero` json DEFAULT NULL,
  `search` json DEFAULT NULL,
  `stats` json DEFAULT NULL,
  `services` json DEFAULT NULL,
  `about` json DEFAULT NULL,
  `destinations` json DEFAULT NULL,
  `packages` json DEFAULT NULL,
  `process` json DEFAULT NULL,
  `appointment` json DEFAULT NULL,
  `testimonials` json DEFAULT NULL,
  `contact` json DEFAULT NULL,
  `blogs` json DEFAULT NULL,
  `newsletter` json DEFAULT NULL,
  `footer` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `index_page`
--

LOCK TABLES `index_page` WRITE;
/*!40000 ALTER TABLE `index_page` DISABLE KEYS */;
INSERT INTO `index_page` VALUES (1,'Horizon Travel – Fly Beyond Bordersxxx','{\"email\": \"DTTNNepal@gmail.com\", \"phone\": \"+977 98608078238\", \"socials\": {\"twitter\": \"#\", \"youtube\": \"#\", \"facebook\": \"#\", \"instagram\": \"#\"}, \"location\": \"kathmandu, Nepal\"}','{\"links\": [{\"href\": \"#\", \"label\": \"Home\"}, {\"href\": \"/frontend/about/about.html\", \"label\": \"About\"}, {\"href\": \"/frontend/blog/blog.html\", \"label\": \"Blog\"}, {\"href\": \"/frontend/destinations/destinations.html\", \"label\": \"Destinations\"}, {\"href\": \"/frontend/pack/pack.html\", \"label\": \"Packages\"}, {\"href\": \"/frontend/contact/contact.html\", \"label\": \"Contact\"}], \"ctaHref\": \"/frontend/pack/pack.html\", \"ctaLabel\": \"Book Now\", \"logoIcon\": \"✈️\", \"logoText\": \"Horizonnnnn\", \"logoAccent\": \"Travelllllllllllllllllllllll\"}','{\"eyebrow\": \"Explore the Worldhhhhh\", \"heading\": \"Fly Beyond Borders,\", \"subtext\": \"We craft unforgettable journeys to destinations across all 7 continents. Expert guides, curated itineraries, and memories that last a lifetime — this is travel, reimagined.ccc\", \"btn1Href\": \"/frontend/pack/pack.html\", \"btn2Href\": \"/frontend/about/about.html\", \"btn1Label\": \"✈ Explore Packagesbbbbb\", \"btn2Label\": \"▶ Our Storyttt\", \"headingAccent\": \"Discover New Horizonsddddddddd\"}','{\"searchTabs\": [\"Flights\", \"Hotels\", \"Tours\"], \"searchCardTitle\": \"🔍 Find Your Perfect Tripppp\"}','[{\"label\": \"Happy Travelersmmmmmm\", \"number\": \"15oK+\"}, {\"label\": \"Destinationsppp\", \"number\": \"120++\"}, {\"label\": \"Years Experienceuuuuuuu\", \"number\": \"180\"}, {\"label\": \"Satisfaction Rateooooooooo\", \"number\": \"98%&\"}]','{\"items\": [{\"icon\": \"✈️\", \"title\": \"Flight Bookingsbbbbbb\", \"description\": \"We search hundreds of airlines to find the best fares and most convenient routes for your journey, with 24/7 support from our flight specialists.bbbbbbbbb\"}, {\"icon\": \"🏨\", \"title\": \"Hotel & Staysbbbbbbbb\", \"description\": \"Handpicked accommodations from budget-friendly guesthouses to 5-star resorts, all vetted by our travel experts for quality and location.bbbbbbbbbbb\"}, {\"icon\": \"🗺️\", \"title\": \"Guided Toursbbbbbbbbb\", \"description\": \"Immersive cultural experiences led by knowledgeable local guides who bring each destination\'s history and hidden gems to life.bbbbbbbbbbb\"}, {\"icon\": \"🌟\", \"title\": \"New Service\", \"description\": \"Description here.\"}], \"eyebrow\": \"What We Offerbbbbbbbbbbb\", \"heading\": \"Our Travelvvvvv\", \"description\": \"From dream-planning to touchdown, we handle every detail so you can focus on the experience.bbbbbbbbbbbb\", \"headingAccent\": \"Servicesbbbbbbbbbbb\"}','{\"para1\": \"We believe travel is the best education you can give yourself. Since 2006, Horizon Travel has been connecting adventurers with transformative journeys — whether it\'s a family beach holiday, a solo backpacking epic, or a bespoke luxury escape.\", \"para2\": \"Our team of 40+ destination specialists has collectively visited over 160 countries. We don\'t just sell tickets; we craft experiences rooted in genuine local knowledge and a deep love for exploration.ccccccccccccccccccccccc\", \"quote\": \"\\\"Travel far enough and you meet yourself.\\\"mmmmm\", \"eyebrow\": \"About Our Companycccccccccccccccccccc\", \"heading\": \"A Small butmmmmmmmmmm\", \"yearsLabel\": \"Years of Travel Excellencemm\", \"missionText\": \"To make the world more connected by making meaningful travel accessible, sustainable, and deeply personal for every traveler we serve.mmmmmmmmmmm\", \"quoteAuthor\": \"Marcus Chen, CEO & Founderccccccccccccccccccccccccccc\", \"yearsNumber\": \"182\", \"missionTitle\": \"Our Missionxmmmmmm\", \"headingAccent\": \"Passionatemmmmmmmmm\", \"headingSuffix\": \"Team of Travel Expertsmmmmmmmmmmm\"}','{\"items\": [{\"bg\": \"linear-gradient(135deg, #1565C0, #0D47A1)\", \"icon\": \"🗽\", \"info\": \"12 curated itineraries · From $899\", \"name\": \"New York & Beyondvvvvvvvv\", \"region\": \"🏙️ North Americavvvvv\"}, {\"bg\": \"linear-gradient(135deg, #2E7D32, #1B5E20)vvvvvvvv\", \"icon\": \"🌿\", \"info\": \"8 tours · From $2,400vv\", \"name\": \"Safari Kenyavvvvvv\", \"region\": \"🌳 Africavvv\"}, {\"bg\": \"linear-gradient(135deg, #E65100, #BF360C)vvvvvvv\", \"icon\": \"🏯\", \"info\": \"15 tours · From $1,650vvvvvvvvv\", \"name\": \"Japan & Koreavvvvvvv\", \"region\": \"⛩️ Asiavvvv\"}, {\"bg\": \"linear-gradient(135deg, #4A148C, #311B92)vvvvvvvvvv\", \"icon\": \"🏟️\", \"info\": \"20 tours · From $1,200vvvvvvvv\", \"name\": \"Mediterraneanvvvvvvvv\", \"region\": \"🏛️ Europevvvv\"}, {\"bg\": \"linear-gradient(135deg, #006064, #004D40)vvvvvvv\", \"icon\": \"🌊ccc\", \"info\": \"6 tours · From $3,100vvvvvvvv\", \"name\": \"Maldivesvvvvvvvvv\", \"region\": \"🌴 Pacificvvvvv\"}], \"eyebrow\": \"Working Areasvvv\", \"heading\": \"Coveredvvvvvv\", \"description\": \"We operate across every continent, bringing you closer to the world\'s most remarkable places.vvvvv\", \"headingAccent\": \"Destinationsvvvvvvvvv\"}','{\"items\": [{\"bg\": \"linear-gradient(135deg, #006064, #00838F)\", \"icon\": \"🌏\", \"type\": \"Group Tour\", \"badge\": \"Best Seller\", \"price\": \"$1,840\", \"title\": \"Southeast Asia Explorer — Thailand, Vietnam & Cambodia\", \"rating\": \"4.9\", \"duration\": \"10 Days\", \"priceNote\": \"/ person\", \"description\": \"Ancient temples, floating markets, and pristine beaches across three iconic Southeast Asian nations.\"}, {\"bg\": \"linear-gradient(135deg, #1565C0, #1976D2)\", \"icon\": \"🏔️\", \"type\": \"Private Tour\", \"badge\": \"Adventure\", \"price\": \"$2,990\", \"title\": \"Himalayan Trek — Nepal Base Camp Expedition\", \"rating\": \"4.8\", \"duration\": \"14 Days\", \"priceNote\": \"/ person\", \"description\": \"Guided trekking to Everest Base Camp with experienced Sherpa guides, stunning mountain lodges, and life-changing views.\"}, {\"bg\": \"linear-gradient(135deg, #E65100, #F4511E)\", \"icon\": \"🌅\", \"type\": \"Couples\", \"badge\": \"Luxury\", \"price\": \"$4,6000\", \"title\": \"Maldives Luxury Retreat — Overwater Villa Escape\", \"rating\": \"5.0\", \"duration\": \"7 Days\", \"priceNote\": \"/ person\", \"description\": \"Crystal lagoons, private overwater villas with glass floors, sunset cruises, and world-class diving in paradise.\"}, {\"bg\": \"linear-gradient(135deg, #455A64, #37474F)\", \"icon\": \"🌟\", \"type\": \"Group Tour\", \"badge\": \"New\", \"price\": \"$999\", \"title\": \"New Package\", \"rating\": \"4.5\", \"duration\": \"7 Days\", \"priceNote\": \"/ person\", \"description\": \"Package description.\"}], \"eyebrow\": \"Recently Completed Works\", \"heading\": \"Popular Travel\", \"headingAccent\": \"Packages\"}','{\"steps\": [{\"num\": \"016\", \"icon\": \"💡\", \"title\": \"Idea & Designnn\", \"description\": \"Share your travel dreams with our specialists. We listen, explore possibilities, and begin crafting a journey that fits your vision and budget.nnnnn\"}, {\"num\": \"02nn\", \"icon\": \"📋\", \"title\": \"Specificationnn\", \"description\": \"We build your full itinerary with flights, accommodations, guides, and activities — every detail confirmed and tailored to your preferences.nn\"}, {\"num\": \"03nn\", \"icon\": \"🌍\", \"title\": \"Executionnn\", \"description\": \"You travel. We handle everything behind the scenes — with 24/7 support, real-time assistance, and local contacts at every destination.nn\"}], \"eyebrow\": \"To Do Good Designnnnnnn\", \"heading\": \"Our Workingnnnnnnn\", \"headingAccent\": \"Processnnnnnnnn\"}','{\"btnHref\": \"/frontend/about/about.html\", \"heading\": \"✈ Want to Work With Our Professional Team?\", \"subtext\": \"Make an appointment today — our travel consultants are available 7 days a week.\", \"btnLabel\": \"Make An Appointment →\"}','{\"items\": [{\"name\": \"Lauren Porter\", \"text\": \"The Southeast Asia trip was everything we hoped for and more. Our guide was brilliant, the hotels were perfect.\", \"rating\": 5, \"initial\": \"L\", \"location\": \"California\"}, {\"name\": \"Nadia & James Amet\", \"text\": \"Horizon planned our honeymoon in the Maldives, and it was absolute perfection. Every tiny detail was attended to.\", \"rating\": 5, \"initial\": \"N\", \"location\": \"Los Angeles\"}, {\"name\": \"Dalor Ipsum\", \"text\": \"The Nepal trekking expedition was challenging and absolutely worth every step. The Sherpa guides were exceptional.\", \"rating\": 5, \"initial\": \"D\", \"location\": \"Denver & City\"}], \"eyebrow\": \"Testimonials\", \"heading\": \"Our Customer\", \"headingAccent\": \"Words\"}','{\"eyebrow\": \"Contact Lines\", \"heading\": \"How Can We\", \"formTitle\": \"Make Appointment\", \"interests\": [\"Flight Booking\", \"Hotel & Stays\", \"Guided Tour\", \"Custom Package\"], \"formSubtext\": \"Fill in the form below and we\'ll get back to you within 24 hours. Don\'t hesitate to ask!\", \"headingAccent\": \"Help You?\"}','{\"items\": [{\"bg\": \"linear-gradient(135deg, #0277BD, #01579B)\", \"day\": \"25\", \"icon\": \"🏖️\", \"month\": \"May\", \"title\": \"Low Cost Interior Designing Ideas for Your Next Hotel Stay\", \"description\": \"Discover how to pick accommodations that feel luxurious without breaking the bank.\"}, {\"bg\": \"linear-gradient(135deg, #2E7D32, #388E3C)\", \"day\": \"28\", \"icon\": \"🌆\", \"month\": \"May\", \"title\": \"Commercial Design for Project — Sustainable Travel Spaces\", \"description\": \"How eco-conscious architecture is reshaping travel hubs and airports around the world.\"}, {\"bg\": \"linear-gradient(135deg, #6A1B9A, #7B1FA2)\", \"day\": \"27\", \"icon\": \"🌸\", \"month\": \"May\", \"title\": \"Our Interior Design Prediction 2018 — Japan Off-Season Guide\", \"description\": \"The best time to visit Japan without the crowds: cherry blossom season alternatives.\"}], \"eyebrow\": \"News & Updates\", \"heading\": \"Latest From\", \"headingAccent\": \"Blog\"}','{\"heading\": \"✈ Subscribe for Newsletter\", \"subtext\": \"Manage your business with our travel insights — deals, destination guides, and more.\", \"btnLabel\": \"Subscribe Now\"}','{\"about\": \"We are a passionate team of travel designers dedicated to crafting beautiful, meaningful journeys.\", \"email\": \"info@horizontravel.com\", \"phone\": \"+1 (800) 345 678 89\", \"address\": \"1420 Park Ave Road, Flatbush, Bronx, New York 10457, USA\", \"logoText\": \"Horizonzzzzzzzzzzzz\", \"copyright\": \"© 2025 Horizon Travel. All Rights Reserved.\", \"logoAccent\": \"Travelbbbbbbbbbbbbbbbbbbbb\", \"quickLinks\": [{\"href\": \"#\", \"label\": \"Concept Design\"}, {\"href\": \"#\", \"label\": \"Project Designs\"}, {\"href\": \"#\", \"label\": \"Make Overs\"}, {\"href\": \"#\", \"label\": \"About Company\"}, {\"href\": \"#\", \"label\": \"Space Planning\"}], \"recentNews\": [{\"bg\": \"linear-gradient(135deg, #0277BD, #01579B)\", \"date\": \"June 1, 2018\", \"icon\": \"✈\", \"title\": \"Creating charm and feeling what I know now\"}, {\"bg\": \"linear-gradient(135deg, #2E7D32, #388E3C)\", \"date\": \"June 8, 2018\", \"icon\": \"🏔\", \"title\": \"Enjoy maximum comfort of furniture now\"}, {\"bg\": \"linear-gradient(135deg, #6A1B9A, #7B1FA2)\", \"date\": \"June 16, 2017ooo\", \"icon\": \"🌅\", \"title\": \"Wandering exterior design is growing\"}], \"newsletterText\": \"Get in your inbox the latest News and Offers from Horizon Travel.\"}','2026-06-28 15:30:15','2026-07-04 14:50:25');
/*!40000 ALTER TABLE `index_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_detail_page`
--

DROP TABLE IF EXISTS `package_detail_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `package_detail_page` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page_title` varchar(255) DEFAULT NULL,
  `hero` json DEFAULT NULL,
  `gallery` json DEFAULT NULL,
  `package_info` json DEFAULT NULL,
  `overview` json DEFAULT NULL,
  `included` json DEFAULT NULL,
  `itinerary` json DEFAULT NULL,
  `things_to_know` json DEFAULT NULL,
  `tags` json DEFAULT NULL,
  `navigation` json DEFAULT NULL,
  `booking_card` json DEFAULT NULL,
  `reviews` json DEFAULT NULL,
  `related_packages` json DEFAULT NULL,
  `categories` json DEFAULT NULL,
  `newsletter` json DEFAULT NULL,
  `footer` json DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_detail_page`
--

LOCK TABLES `package_detail_page` WRITE;
/*!40000 ALTER TABLE `package_detail_page` DISABLE KEYS */;
/*!40000 ALTER TABLE `package_detail_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `package_page`
--

DROP TABLE IF EXISTS `package_page`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `package_page` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page_title` varchar(255) DEFAULT NULL,
  `topbar` json DEFAULT NULL,
  `navbar` json DEFAULT NULL,
  `hero` json DEFAULT NULL,
  `search_bar` json DEFAULT NULL,
  `popular_destinations` json DEFAULT NULL,
  `packages` json DEFAULT NULL,
  `cta_banner` json DEFAULT NULL,
  `stats` json DEFAULT NULL,
  `special_packages` json DEFAULT NULL,
  `gallery` json DEFAULT NULL,
  `discount_banner` json DEFAULT NULL,
  `recent_posts` json DEFAULT NULL,
  `testimonials` json DEFAULT NULL,
  `bottom_cta` json DEFAULT NULL,
  `footer` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `package_page`
--

LOCK TABLES `package_page` WRITE;
/*!40000 ALTER TABLE `package_page` DISABLE KEYS */;
/*!40000 ALTER TABLE `package_page` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int DEFAULT NULL,
  `product_name` varchar(100) DEFAULT NULL,
  `price` decimal(4,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'biscuit',NULL),(NULL,NULL,20.00),(2,'gues',50.80),(3,'difest',50.80),(4,'cibus',50.80),(5,'givel',50.80);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-07-24 14:06:52
