var http = require('http');
console.log("http server http://localhost:8080")


//create
http.createServer(function (req, res) {
  res.write('Hello World!'); 
  res.end(); 
}).listen(8080);