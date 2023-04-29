const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 4000;


app.get('/login', (req, res) => {
    res.json({
        message: 'Hello World login'
    });
});




app.post('/register', (req, res) => {
    console.log('resgitor ');
    res.json({
        statuscode: 201,
        message: 'Hello World register'
    });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
