const express =require(`express`)
const con = require('../DB/dbconnect')
const route = express.Router();

route.get('/home', (req, res) => {
    res.render('index');
  });
route.get('/about', (req, res) => {
    res.render('about');
  });
route.get('/gallery', (req, res) => {
    res.render('gallery');
  });
route.get('/', (req, res) => {
  res.render('index');
  });
  
module.exports=route;