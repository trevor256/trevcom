//http server
var http = require('http');
console.log("http server http://localhost:8080")


http.createServer(function (req, res) {
  res.write('Hello World!');
  res.end();
}).listen(8080);



//mysql connection
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "pass"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
