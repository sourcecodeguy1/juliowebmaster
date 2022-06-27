const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql_connection = require("./mysql.conf");

app.use(cors());

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
    res.send("Hello from the back-end server!!!");
    // Get dummy data for testing
    mysql_connection.query("SELECT * FROM test", (error, rows) => {
        if(error){
            res.send(error)
        } else {
            if(rows.length > 0){
                res.send(rows);
            }else{
                res.send("Nothing here!");
            }
        }
    });
});

app.listen('3001', () => {
    console.log('Listening on port 3001');
});