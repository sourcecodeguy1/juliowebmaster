const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('./mysql.conf');
const bodyParser = require('body-parser');

app.use(cors());

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
    // Get dummy data for testing
    mysql.query("SELECT * FROM users", (error, rows) => {
        if(error){
            res.send(error)
        } else {
            if(rows.length > 0){
                res.json(rows);
            }else{
                res.json({result: "Nothing here!"});
            }
        }
    });
});

app.listen('3001', () => {
    console.log('Listening on port 3001');
});