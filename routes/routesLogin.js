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

module.exports = route;