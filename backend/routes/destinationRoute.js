const express = require("express");
const router = express.Router();

const db = require("../config/db");


// ===============================
// GET ALL DESTINATION PAGES
// ===============================
router.get("/", (req, res) => {

    const sql = "SELECT * FROM destination_page";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        res.status(200).json({
            success: true,
            data: result
        });

    });

});


// ===============================
// GET SINGLE DESTINATION PAGE
// ===============================
router.get("/:id", (req, res) => {

    const sql = "SELECT * FROM destination_page WHERE id = ?";

    db.query(sql, [req.params.id], (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            });
        }

        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Page not found"
            });
        }

        res.status(200).json({
            success: true,
            data: result[0]
        });

    });

});


// ===============================
// CREATE DESTINATION PAGE
// ===============================
router.post("/", (req, res) => {

    const {

        page_title,

        topbar,

        navbar,

        hero,

        search_bar,

        popular_destinations,

        packages,

        cta_banner,

        statistics,

        special_packages,

        traveller_gallery,

        discount_banner,

        recent_posts,

        testimonials,

        bottom_cta,

        footer

    } = req.body;

    const sql = `

    INSERT INTO destination_page(

        page_title,

        topbar,

        navbar,

        hero,

        search_bar,

        popular_destinations,

        packages,

        cta_banner,

        statistics,

        special_packages,

        traveller_gallery,

        discount_banner,

        recent_posts,

        testimonials,

        bottom_cta,

        footer

    )

    VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)

    `;

    db.query(sql, [

        page_title,

        JSON.stringify(topbar),

        JSON.stringify(navbar),

        JSON.stringify(hero),

        JSON.stringify(search_bar),

        JSON.stringify(popular_destinations),

        JSON.stringify(packages),

        JSON.stringify(cta_banner),

        JSON.stringify(statistics),

        JSON.stringify(special_packages),

        JSON.stringify(traveller_gallery),

        JSON.stringify(discount_banner),

        JSON.stringify(recent_posts),

        JSON.stringify(testimonials),

        JSON.stringify(bottom_cta),

        JSON.stringify(footer)

    ], (err, result) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

        res.status(201).json({
            success: true,
            message: "Destination page created successfully.",
            id: result.insertId
        });

    });

});


// ===============================
// UPDATE DESTINATION PAGE
// ===============================
router.put("/:id", (req, res) => {

    const {

        page_title,

        topbar,

        navbar,

        hero,

        search_bar,

        popular_destinations,

        packages,

        cta_banner,

        statistics,

        special_packages,

        traveller_gallery,

        discount_banner,

        recent_posts,

        testimonials,

        bottom_cta,

        footer

    } = req.body;

    const sql = `

    UPDATE destination_page

    SET

        page_title=?,

        topbar=?,

        navbar=?,

        hero=?,

        search_bar=?,

        popular_destinations=?,

        packages=?,

        cta_banner=?,

        statistics=?,

        special_packages=?,

        traveller_gallery=?,

        discount_banner=?,

        recent_posts=?,

        testimonials=?,

        bottom_cta=?,

        footer=?

    WHERE id=?

    `;

    db.query(sql, [

        page_title,

        JSON.stringify(topbar),

        JSON.stringify(navbar),

        JSON.stringify(hero),

        JSON.stringify(search_bar),

        JSON.stringify(popular_destinations),

        JSON.stringify(packages),

        JSON.stringify(cta_banner),

        JSON.stringify(statistics),

        JSON.stringify(special_packages),

        JSON.stringify(traveller_gallery),

        JSON.stringify(discount_banner),

        JSON.stringify(recent_posts),

        JSON.stringify(testimonials),

        JSON.stringify(bottom_cta),

        JSON.stringify(footer),

        req.params.id

    ], (err, result) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Page not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Destination page updated successfully."
        });

    });

});


// ===============================
// DELETE DESTINATION PAGE
// ===============================
router.delete("/:id", (req, res) => {

    const sql = "DELETE FROM destination_page WHERE id=?";

    db.query(sql, [req.params.id], (err, result) => {

        if (err) {

            return res.status(500).json({
                success: false,
                message: err.message
            });

        }

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Page not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Destination page deleted successfully."
        });

    });

});

module.exports = router;