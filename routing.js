const http = require('http');
const url = require('url');

http.createServer(function(req, res) {
  res.writeHead(200, {"Content-Type" : "text/plain"});
  res.end("HELLOO...")
}).listen(4000);

console.log("Server is running");
