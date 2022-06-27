let mysql = require('mysql2');

let mysql_connection = mysql.createPool({
  connectionLimit : 100,
  waitForConnections : true,
  queueLimit :0,
  host: process.env.MYSQL_SERVICE,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  debug    :  true,
  wait_timeout : 28800,
  connect_timeout :10
});

if(process.env.NODE_ENV === "production"){
  mysql_connection.getConnection(function (err) {
    if(err){
      console.log(err);
    } else {
      console.log("You have connected to the database successfully.");
    }
  });
}

//mysql_connection.end();

module.exports = mysql_connection;



