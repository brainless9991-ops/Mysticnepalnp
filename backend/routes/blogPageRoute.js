const express=require("express");

const router=express.Router();

const db=require("../config/db");


// GET ALL

router.get("/",(req,res)=>{

    db.query("SELECT * FROM blog_page",(err,result)=>{

        if(err){

            return res.status(500).json(err);

        }

        res.json(result);

    });

});


// GET ONE

router.get("/:id",(req,res)=>{

    db.query(

        "SELECT * FROM blog_page WHERE id=?",

        [req.params.id],

        (err,result)=>{

            if(err){

                return res.status(500).json(err);

            }

            res.json(result);

        }

    );

});


// CREATE

router.post("/",(req,res)=>{

const{

page_title,

hero,

posts,

pagination,

author,

recent_posts,

categories,

tags,

newsletter,

footer

}=req.body;

const sql=`

INSERT INTO blog_page(

page_title,

hero,

posts,

pagination,

author,

recent_posts,

categories,

tags,

newsletter,

footer

)

VALUES(?,?,?,?,?,?,?,?,?,?)

`;

db.query(sql,[

page_title,

JSON.stringify(hero),

JSON.stringify(posts),

JSON.stringify(pagination),

JSON.stringify(author),

JSON.stringify(recent_posts),

JSON.stringify(categories),

JSON.stringify(tags),

JSON.stringify(newsletter),

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




// UPDATE

router.put("/:id",(req,res)=>{

const{

page_title,

hero,

posts,

pagination,

author,

recent_posts,

categories,

tags,

newsletter,

footer

}=req.body;

const sql=`

UPDATE blog_page

SET

page_title=?,

hero=?,

posts=?,

pagination=?,

author=?,

recent_posts=?,

categories=?,

tags=?,

newsletter=?,

footer=?

WHERE id=?

`;

db.query(sql,[

page_title,

JSON.stringify(hero),

JSON.stringify(posts),

JSON.stringify(pagination),

JSON.stringify(author),

JSON.stringify(recent_posts),

JSON.stringify(categories),

JSON.stringify(tags),

JSON.stringify(newsletter),

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




// DELETE

router.delete("/:id",(req,res)=>{

db.query(

"DELETE FROM blog_page WHERE id=?",

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

module.exports=router;