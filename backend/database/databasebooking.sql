CREATE TABLE package_detail_page (

    id INT AUTO_INCREMENT PRIMARY KEY,

    page_title VARCHAR(255),

    hero JSON,

    gallery JSON,

    package_info JSON,

    overview JSON,

    included JSON,

    itinerary JSON,

    things_to_know JSON,

    tags JSON,

    navigation JSON,

    booking_card JSON,

    reviews JSON,

    related_packages JSON,

    categories JSON,

    newsletter JSON,

    footer JSON,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP

);