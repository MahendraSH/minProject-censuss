const express = require(`express`)
const route = express.Router();

route.get('/', (req, res) => {
  res.render('index');
});
route.get('/about', (req, res) => {
  res.render('about');
});
route.get('/gallery', (req, res) => {
  res.render('gallery');
});

route.get('/2011', (req,res) =>{
  res.render('2011');
})

route.get('/prediction', ( req,res)=>{
  res.render('prediction')
})

module.exports = route;