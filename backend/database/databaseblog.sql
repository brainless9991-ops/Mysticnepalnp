CREATE TABLE blog_page (

    id INT AUTO_INCREMENT PRIMARY KEY,

    page_title VARCHAR(255),

    hero JSON,

    posts JSON,

    pagination JSON,

    author JSON,

    recent_posts JSON,

    categories JSON,

    tags JSON,

    newsletter JSON,

    footer JSON,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP

);