const express = require("express");
const router = express.Router();
const db = require("../config/db");


// ======================
// GET ALL
// ======================

router.get("/", (req, res) => {

    db.query("SELECT * FROM package_page", (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

});


// ======================
// GET ONE
// ======================

router.get("/:id", (req, res) => {

    db.query(

        "SELECT * FROM package_page WHERE id=?",

        [req.params.id],

        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(result);

        }

    );

});


// ======================
// CREATE
// ======================

router.post("/", (req, res) => {

const{

page_title,

topbar,

navbar,

hero,

search_bar,

popular_destinations,

packages,

cta_banner,

stats,

special_packages,

gallery,

discount_banner,

recent_posts,

testimonials,

bottom_cta,

footer

}=req.body;


const sql=`

INSERT INTO package_page(

page_title,

topbar,

navbar,

hero,

search_bar,

popular_destinations,

packages,

cta_banner,

stats,

special_packages,

gallery,

discount_banner,

recent_posts,

testimonials,

bottom_cta,

footer

)

VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)

`;

db.query(sql,[

page_title,

JSON.stringify(topbar),

JSON.stringify(navbar),

JSON.stringify(hero),

JSON.stringify(search_bar),

JSON.stringify(popular_destinations),

JSON.stringify(packages),

JSON.stringify(cta_banner),

JSON.stringify(stats),

JSON.stringify(special_packages),

JSON.stringify(gallery),

JSON.stringify(discount_banner),

JSON.stringify(recent_posts),

JSON.stringify(testimonials),

JSON.stringify(bottom_cta),

JSON.stringify(footer)

],(err,result)=>{

if(err){

return res.status(500).json(err);

}

res.json({

success:true,

id:result.insertId

});

});

});


// ======================
// UPDATE
// ======================

router.put("/:id",(req,res)=>{

const{

page_title,

topbar,

navbar,

hero,

search_bar,

popular_destinations,

packages,

cta_banner,

stats,

special_packages,

gallery,

discount_banner,

recent_posts,

testimonials,

bottom_cta,

footer

}=req.body;


const sql=`

UPDATE package_page

SET

page_title=?,

topbar=?,

navbar=?,

hero=?,

search_bar=?,

popular_destinations=?,

packages=?,

cta_banner=?,

stats=?,

special_packages=?,

gallery=?,

discount_banner=?,

recent_posts=?,

testimonials=?,

bottom_cta=?,

footer=?

WHERE id=?

`;

db.query(sql,[

page_title,

JSON.stringify(topbar),

JSON.stringify(navbar),

JSON.stringify(hero),

JSON.stringify(search_bar),

JSON.stringify(popular_destinations),

JSON.stringify(packages),

JSON.stringify(cta_banner),

JSON.stringify(stats),

JSON.stringify(special_packages),

JSON.stringify(gallery),

JSON.stringify(discount_banner),

JSON.stringify(recent_posts),

JSON.stringify(testimonials),

JSON.stringify(bottom_cta),

JSON.stringify(footer),

req.params.id

],(err)=>{

if(err){

return res.status(500).json(err);

}

res.json({

success:true,

message:"Updated"

});

});

});


// ======================
// DELETE
// ======================

router.delete("/:id",(req,res)=>{

db.query(

"DELETE FROM package_page WHERE id=?",

[req.params.id],

(err)=>{

if(err){

return res.status(500).json(err);

}

res.json({

success:true,

message:"Deleted"

});

});

});


module.exports = router;