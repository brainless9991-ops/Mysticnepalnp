const express = require("express");
const router = express.Router();
const db = require("../config/db");

// JSON fields
const jsonFields = [
    "topbar",
    "navbar",
    "hero",
    "search",
    "stats",
    "services",
    "about",
    "destinations",
    "packages",
    "process",
    "appointment",
    "testimonials",
    "contact",
    "blogs",
    "newsletter",
    "footer"
];

// Convert object/string safely to JSON string
function toJSONString(value) {
    if (value === null || value === undefined) return "{}";
    if (typeof value === "string") return value;
    return JSON.stringify(value);
}

// ==============================
// GET Homepage
// ==============================
router.get("/", (req, res) => {

    db.query("SELECT * FROM index_page LIMIT 1", (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        if (!result.length) {
            return res.json([]);
        }

        const row = { ...result[0] };

        jsonFields.forEach(field => {

            const value = row[field];

            if (value === null || value === undefined || value === "") {
                row[field] = {};
                return;
            }

            // Already parsed by MySQL driver
            if (typeof value === "object") {
                return;
            }

            // Parse JSON strings
            if (typeof value === "string") {
                try {
                    row[field] = JSON.parse(value);
                } catch (err) {
                    console.error(`Invalid JSON in ${field}`);
                    console.error(value);
                    row[field] = {};
                }
            }
        });

        res.json([row]);

    });

});

// ==============================
// POST (Create / Update)
// ==============================
router.post("/", (req, res) => {

    const {
        page_title,
        topbar,
        navbar,
        hero,
        search,
        stats,
        services,
        about,
        destinations,
        packages,
        process,
        appointment,
        testimonials,
        contact,
        blogs,
        newsletter,
        footer
    } = req.body;

    const checkSql = "SELECT id FROM index_page LIMIT 1";

    db.query(checkSql, (err, rows) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                success: false,
                message: "Database Error"
            });
        }

        const values = [
            page_title,
            toJSONString(topbar),
            toJSONString(navbar),
            toJSONString(hero),
            toJSONString(search),
            toJSONString(stats),
            toJSONString(services),
            toJSONString(about),
            toJSONString(destinations),
            toJSONString(packages),
            toJSONString(process),
            toJSONString(appointment),
            toJSONString(testimonials),
            toJSONString(contact),
            toJSONString(blogs),
            toJSONString(newsletter),
            toJSONString(footer)
        ];

        if (!rows.length) {

            const insertSql = `
            INSERT INTO index_page (
                page_title,
                topbar,
                navbar,
                hero,
                search,
                stats,
                services,
                about,
                destinations,
                packages,
                process,
                appointment,
                testimonials,
                contact,
                blogs,
                newsletter,
                footer
            )
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
            `;

            db.query(insertSql, values, (err) => {

                if (err) {
                    console.error(err);
                    return res.status(500).json({
                        success: false,
                        message: "Insert Failed"
                    });
                }

                res.json({
                    success: true,
                    message: "Homepage Created"
                });

            });

        } else {

            const updateSql = `
            UPDATE index_page SET
                page_title=?,
                topbar=?,
                navbar=?,
                hero=?,
                search=?,
                stats=?,
                services=?,
                about=?,
                destinations=?,
                packages=?,
                process=?,
                appointment=?,
                testimonials=?,
                contact=?,
                blogs=?,
                newsletter=?,
                footer=?
            WHERE id=?
            `;

            db.query(
                updateSql,
                [...values, rows[0].id],
                (err) => {

                    if (err) {
                        console.error(err);
                        return res.status(500).json({
                            success: false,
                            message: "Update Failed"
                        });
                    }

                    res.json({
                        success: true,
                        message: "Homepage Updated"
                    });

                }
            );

        }

    });

});

// ==============================
// PUT (Update)
// ==============================
router.put("/:id", (req, res) => {

    const {
        page_title,
        topbar,
        navbar,
        hero,
        search,
        stats,
        services,
        about,
        destinations,
        packages,
        process,
        appointment,
        testimonials,
        contact,
        blogs,
        newsletter,
        footer
    } = req.body;

    const values = [
        page_title,
        toJSONString(topbar),
        toJSONString(navbar),
        toJSONString(hero),
        toJSONString(search),
        toJSONString(stats),
        toJSONString(services),
        toJSONString(about),
        toJSONString(destinations),
        toJSONString(packages),
        toJSONString(process),
        toJSONString(appointment),
        toJSONString(testimonials),
        toJSONString(contact),
        toJSONString(blogs),
        toJSONString(newsletter),
        toJSONString(footer),
        req.params.id
    ];

    const sql = `
        UPDATE index_page SET
            page_title=?,
            topbar=?,
            navbar=?,
            hero=?,
            search=?,
            stats=?,
            services=?,
            about=?,
            destinations=?,
            packages=?,
            process=?,
            appointment=?,
            testimonials=?,
            contact=?,
            blogs=?,
            newsletter=?,
            footer=?
        WHERE id=?
    `;

    db.query(sql, values, (err, result) => {

        if (err) {
            console.error(err);
            return res.status(500).json({
                success: false,
                message: "Update Failed"
            });
        }

        res.json({
            success: true,
            message: "Homepage Updated",
            affectedRows: result.affectedRows
        });

    });

});

// ==============================
// DELETE
// ==============================
router.delete("/:id", (req, res) => {

    db.query(
        "DELETE FROM index_page WHERE id=?",
        [req.params.id],
        (err) => {

            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: false,
                    message: "Delete Failed"
                });
            }

            res.json({
                success: true,
                message: "Deleted Successfully"
            });

        }
    );

});

module.exports = router;