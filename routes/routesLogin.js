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
    res.render('login');
  });
  route.post('/', (req, res)=>{
    var username = req.body.username;
    var password = req.body.password;
    var sql = "select * from users where user_name=? and password=?"
    con.query(sql, [username, password], (error, results, fields) => {
      if(error)  throw error;
      if(results.length > 0){
        res.redirect('/home');
      } else {
        res.redirect('/login');
      }
    })
  });
  
  route.get('/register', (req, res) => {
    res.render('register');
  });
  route.post("/register", (req, res) => {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;
    var sql = "insert into users values ?";
    var values = [
      [username, email, password]
    ];
    con.query(sql, [values], (error, results, fields) => {
      if(error) throw error;
      res.redirect('/home');
    })
  })
module.exports=route;