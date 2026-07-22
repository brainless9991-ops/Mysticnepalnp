CREATE TABLE home_page(

id INT AUTO_INCREMENT PRIMARY KEY,

hero_title VARCHAR(255),

hero_description TEXT,

hero_button1 VARCHAR(100),

hero_button2 VARCHAR(100),

hero_image VARCHAR(500),

search_section JSON,

destinations JSON,

packages JSON,

special_packages JSON,

gallery JSON,

posts JSON,

testimonials JSON,

statistics JSON,

footer JSON,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
ON UPDATE CURRENT_TIMESTAMP

);