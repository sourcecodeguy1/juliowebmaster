const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql_connection = require("./mysql.conf");
const nodemailer = require('nodemailer');
require('dotenv').config();

app.use(cors());

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/select', (req, res) => {
    // Get dummy data for testing
    mysql_connection.query("SELECT * FROM users", (error, rows) => {
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

app.get('/test', (req, res) => {
    res.send("This is a test.");
});

app.post('/send-email', (req, res) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: process.env.PORT,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });

   const {firstName, email, message} = req.body;

    const mailData = {
        from: email,  // sender address
        to: process.env.MAIL_TO,   // list of receivers
        subject: 'juliowebmaster.com - Contact Us',
        html: '<b>From '+ firstName +'</b><br /><br />' +
            '<p>'+ message +'</p>'
    };

    transporter.sendMail(mailData, function (err, info) {
        if(err)
            res.json({error: "An Error has occurred."});
        else
            res.json({success: "OK"});
    });
});

app.listen('3001', () => {
    //console.log('Listening on port 3001');
});