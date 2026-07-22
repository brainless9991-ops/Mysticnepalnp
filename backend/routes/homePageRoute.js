const express=require("express");

const router=express.Router();

const db=require("../config/db");


// GET ALL

router.get("/",(req,res)=>{

const sql="SELECT * FROM home_page";

db.query(sql,(err,result)=>{

if(err){

return res.status(500).json(err);

}

res.json(result);

});

});


// GET ONE

router.get("/:id",(req,res)=>{

const sql="SELECT * FROM home_page WHERE id=?";

db.query(sql,[req.params.id],(err,result)=>{

if(err){

return res.status(500).json(err);

}

res.json(result);

});

});


// CREATE

router.post("/",(req,res)=>{

const{

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

}=req.body;

const sql=`
INSERT INTO home_page(

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

)

VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)

`;

db.query(sql,[

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

],(err,result)=>{

if(err){

return res.status(500).json(err);

}

res.json({

success:true,

message:"Page Created",

id:result.insertId

});

});

});


// UPDATE

router.put("/:id",(req,res)=>{

const{

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

}=req.body;

const sql=`

UPDATE home_page

SET

hero_title=?,

hero_description=?,

hero_button1=?,

hero_button2=?,

hero_image=?,

search_section=?,

destinations=?,

packages=?,

special_packages=?,

gallery=?,

posts=?,

testimonials=?,

statistics=?,

footer=?

WHERE id=?

`;

db.query(sql,[

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

],(err)=>{

if(err){

return res.status(500).json(err);

}

res.json({

success:true,

message:"Updated Successfully"

});

});

});


// DELETE

router.delete("/:id",(req,res)=>{

const sql="DELETE FROM home_page WHERE id=?";

db.query(sql,[req.params.id],(err)=>{

if(err){

return res.status(500).json(err);

}

res.json({

success:true,

message:"Deleted Successfully"

});

});

});

module.exports=router;