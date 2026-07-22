CREATE TABLE contact_page (
    id INT AUTO_INCREMENT PRIMARY KEY,
    page_title VARCHAR(255),

    topbar JSON,
    navbar JSON,

    hero JSON,
    intro JSON,
    core_values JSON,

    partners JSON,
    cta_banner JSON,
    testimonials JSON,

    footer JSON,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);