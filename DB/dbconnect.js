const mysql = require('mysql');
const dotenv=require('dotenv').config();
const con = mysql.createConnection(process.env.DATABASE_URL,);


con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

  module.exports =con;
  