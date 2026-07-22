DROP TABLE IF EXISTS index_page;

CREATE TABLE index_page (
    id INT AUTO_INCREMENT PRIMARY KEY,

    page_title VARCHAR(255),

    topbar JSON,
    navbar JSON,
    hero JSON,
    search JSON,
    stats JSON,

    services JSON,
    about JSON,
    destinations JSON,
    packages JSON,

    process JSON,
    appointment JSON,
    testimonials JSON,

    contact JSON,
    blogs JSON,
    newsletter JSON,
    footer JSON,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);