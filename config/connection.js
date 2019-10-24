require('dotenv').config();

var keys = require("./keys.js");
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {  
  connection = mysql.createConnection({
    host: keys.mysql.host,
    user: keys.mysql.user,
    port: keys.mysql.port,
    database: keys.mysql.database,
    password: keys.mysql.password,
  });
}

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;