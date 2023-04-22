
const express = require('express')
const mysql = require('mysql');
const ejs = require('ejs')
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/',require('./routes/routesLogin'))






// app.post('/', (req, res) => {
    
// console.log(req.body);
// });

app.listen(process.env.PORT|| 3000, () => {
    console.log(' listening on port 3000!')
});
