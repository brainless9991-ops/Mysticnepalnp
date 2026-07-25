/*const mysql = require("mysql2");

const connection = mysql.createConnection({

host:process.env.DB_HOST,

user:process.env.DB_USER,

password:process.env.DB_PASSWORD,

database:process.env.DB_NAME

});

connection.connect((err)=>{

if(err){

console.log(err);

}
else{

console.log("MySQL Connected");

}

});

module.exports = connection;
*/

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  ssl: {
    minVersion: "TLSv1.2",
    rejectUnauthorized: true,
  },
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
  } else {
    console.log("TiDB Connected");
  }
});

module.exports = connection;