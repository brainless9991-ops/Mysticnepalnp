const express = require("express");
const router = express.Router();
const db = require("../config/db");

// ---------- DEFAULT DATA (your provided JSON) ----------
const defaultData = {
  hero_title: "Beautiful Place To Visit",
  hero_description: "Travel around the world with us.",
  hero_button1: "Learn More",
  hero_button2: "Book Now",
  hero_image: "/uploads/hero.jpg",
  search_section: { placeholder: "Search Destination" },
  destinations: [
    { title: "Santorini", image: "https://image.com/1.jpg", rating: 5 },
    { title: "Nepal", image: "https://image.com/2.jpg", rating: 4 }
  ],
  packages: [
    { title: "Beach Holiday", price: 710, days: 5 }
  ],
  special_packages: [
    { title: "Paris Tour", discount: "30%" }
  ],
  gallery: [
    { image: "gallery1.jpg" },
    { image: "gallery2.jpg" }
  ],
  posts: [
    { title: "Best Journey", date: "2025-06-01" }
  ],
  testimonials: [
    { name: "John", message: "Amazing trip!", rating: 5 }
  ],
  statistics: {
    customers: 55000,
    members: 22,
    destinations: 125,
    guides: 39
  },
  footer: {
    company: "Horizon Travel",
    email: "info@horizontravel.com",
    phone: "+1 (800) 345678",
    address: "New York, USA"
  }
};

// ---------- SEED ROUTE (inserts default data) ----------
router.post("/seed", (req, res) => {
  const {
    hero_title,
    hero_description,
    hero_button1,
    hero_button2,
    hero_image,
    search_section,
    destinations,
    packages,
    special_packages,
    gallery,
    posts,
    testimonials,
    statistics,
    footer
  } = defaultData;

  const sql = `
    INSERT INTO home_page (
      hero_title, hero_description, hero_button1, hero_button2, hero_image,
      search_section, destinations, packages, special_packages,
      gallery, posts, testimonials, statistics, footer
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      hero_title = VALUES(hero_title),
      hero_description = VALUES(hero_description),
      hero_button1 = VALUES(hero_button1),
      hero_button2 = VALUES(hero_button2),
      hero_image = VALUES(hero_image),
      search_section = VALUES(search_section),
      destinations = VALUES(destinations),
      packages = VALUES(packages),
      special_packages = VALUES(special_packages),
      gallery = VALUES(gallery),
      posts = VALUES(posts),
      testimonials = VALUES(testimonials),
      statistics = VALUES(statistics),
      footer = VALUES(footer)
  `;

  db.query(sql, [
    hero_title,
    hero_description,
    hero_button1,
    hero_button2,
    hero_image,
    JSON.stringify(search_section),
    JSON.stringify(destinations),
    JSON.stringify(packages),
    JSON.stringify(special_packages),
    JSON.stringify(gallery),
    JSON.stringify(posts),
    JSON.stringify(testimonials),
    JSON.stringify(statistics),
    JSON.stringify(footer)
  ], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      success: true,
      message: "Default data saved successfully",
      affectedRows: result.affectedRows,
      insertId: result.insertId
    });
  });
});

// ---------- CRUD ROUTES (unchanged) ----------
// GET ALL
router.get("/", (req, res) => {
  const sql = "SELECT * FROM home_page";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// GET ONE
router.get("/:id", (req, res) => {
  const sql = "SELECT * FROM home_page WHERE id = ?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// CREATE (manual POST)
router.post("/", (req, res) => {
  const {
    hero_title,
    hero_description,
    hero_button1,
    hero_button2,
    hero_image,
    search_section,
    destinations,
    packages,
    special_packages,
    gallery,
    posts,
    testimonials,
    statistics,
    footer
  } = req.body;

  const sql = `
    INSERT INTO home_page (
      hero_title, hero_description, hero_button1, hero_button2, hero_image,
      search_section, destinations, packages, special_packages,
      gallery, posts, testimonials, statistics, footer
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [
    hero_title,
    hero_description,
    hero_button1,
    hero_button2,
    hero_image,
    JSON.stringify(search_section),
    JSON.stringify(destinations),
    JSON.stringify(packages),
    JSON.stringify(special_packages),
    JSON.stringify(gallery),
    JSON.stringify(posts),
    JSON.stringify(testimonials),
    JSON.stringify(statistics),
    JSON.stringify(footer)
  ], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ success: true, message: "Page Created", id: result.insertId });
  });
});

// UPDATE
router.put("/:id", (req, res) => {
  const {
    hero_title,
    hero_description,
    hero_button1,
    hero_button2,
    hero_image,
    search_section,
    destinations,
    packages,
    special_packages,
    gallery,
    posts,
    testimonials,
    statistics,
    footer
  } = req.body;

  const sql = `
    UPDATE home_page SET
      hero_title = ?,
      hero_description = ?,
      hero_button1 = ?,
      hero_button2 = ?,
      hero_image = ?,
      search_section = ?,
      destinations = ?,
      packages = ?,
      special_packages = ?,
      gallery = ?,
      posts = ?,
      testimonials = ?,
      statistics = ?,
      footer = ?
    WHERE id = ?
  `;

  db.query(sql, [
    hero_title,
    hero_description,
    hero_button1,
    hero_button2,
    hero_image,
    JSON.stringify(search_section),
    JSON.stringify(destinations),
    JSON.stringify(packages),
    JSON.stringify(special_packages),
    JSON.stringify(gallery),
    JSON.stringify(posts),
    JSON.stringify(testimonials),
    JSON.stringify(statistics),
    JSON.stringify(footer),
    req.params.id
  ], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ success: true, message: "Updated Successfully" });
  });
});

// DELETE
router.delete("/:id", (req, res) => {
  const sql = "DELETE FROM home_page WHERE id = ?";
  db.query(sql, [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ success: true, message: "Deleted Successfully" });
  });
});

module.exports = router;