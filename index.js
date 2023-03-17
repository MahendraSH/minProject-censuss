
const express = require('express')
const ejs = require('ejs')
const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index');
});
app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});


app.post('/', (req, res) => {
    
console.log(req.body);
});

app.listen(3000, () => {
    console.log(' listening on port 3000!')
});
