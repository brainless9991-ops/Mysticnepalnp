const express = require("express");
const router = express.Router();
const db = require("../config/db");


// =======================
// GET ALL
// =======================

router.get("/", (req, res) => {

    db.query(
        "SELECT * FROM package_detail_page",
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            res.json(result);

        });

});


// =======================
// GET ONE
// =======================

router.get("/:id", (req, res) => {

    db.query(
        "SELECT * FROM package_detail_page WHERE id=?",
        [req.params.id],
        (err, result) => {

            if (err)
                return res.status(500).json(err);

            res.json(result);

        });

});


// =======================
// CREATE
// =======================

router.post("/", (req, res) => {

const {

page_title,

hero,

gallery,

package_info,

overview,

included,

itinerary,

things_to_know,

tags,

navigation,

booking_card,

reviews,

related_packages,

categories,

newsletter,

footer

} = req.body;

const sql = `

INSERT INTO package_detail_page(

page_title,

hero,

gallery,

package_info,

overview,

included,

itinerary,

things_to_know,

tags,

navigation,

booking_card,

reviews,

related_packages,

categories,

newsletter,

footer

)

VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)

`;

db.query(sql,[

page_title,

JSON.stringify(hero),

JSON.stringify(gallery),

JSON.stringify(package_info),

JSON.stringify(overview),

JSON.stringify(included),

JSON.stringify(itinerary),

JSON.stringify(things_to_know),

JSON.stringify(tags),

JSON.stringify(navigation),

JSON.stringify(booking_card),

JSON.stringify(reviews),

JSON.stringify(related_packages),

JSON.stringify(categories),

JSON.stringify(newsletter),

JSON.stringify(footer)

],(err,result)=>{

if(err)
return res.status(500).json(err);

res.json({

success:true,

id:result.insertId,

message:"Package Detail Created"

});

});

});


// =======================
// UPDATE
// =======================

router.put("/:id",(req,res)=>{

const {

page_title,

hero,

gallery,

package_info,

overview,

included,

itinerary,

things_to_know,

tags,

navigation,

booking_card,

reviews,

related_packages,

categories,

newsletter,

footer

}=req.body;

const sql=`

UPDATE package_detail_page

SET

page_title=?,

hero=?,

gallery=?,

package_info=?,

overview=?,

included=?,

itinerary=?,

things_to_know=?,

tags=?,

navigation=?,

booking_card=?,

reviews=?,

related_packages=?,

categories=?,

newsletter=?,

footer=?

WHERE id=?

`;

db.query(sql,[

page_title,

JSON.stringify(hero),

JSON.stringify(gallery),

JSON.stringify(package_info),

JSON.stringify(overview),

JSON.stringify(included),

JSON.stringify(itinerary),

JSON.stringify(things_to_know),

JSON.stringify(tags),

JSON.stringify(navigation),

JSON.stringify(booking_card),

JSON.stringify(reviews),

JSON.stringify(related_packages),

JSON.stringify(categories),

JSON.stringify(newsletter),

JSON.stringify(footer),

req.params.id

],(err)=>{

if(err)
return res.status(500).json(err);

res.json({

success:true,

message:"Updated Successfully"

});

});

});


// =======================
// DELETE
// =======================

router.delete("/:id",(req,res)=>{

db.query(

"DELETE FROM package_detail_page WHERE id=?",

[req.params.id],

(err)=>{

if(err)
return res.status(500).json(err);

res.json({

success:true,

message:"Deleted Successfully"

});

});

});

module.exports = router;