CREATE TABLE package_page (

id INT AUTO_INCREMENT PRIMARY KEY,

page_title VARCHAR(255),

topbar JSON,

navbar JSON,

hero JSON,

search_bar JSON,

popular_destinations JSON,

packages JSON,

cta_banner JSON,

stats JSON,

special_packages JSON,

gallery JSON,

discount_banner JSON,

recent_posts JSON,

testimonials JSON,

bottom_cta JSON,

footer JSON

);