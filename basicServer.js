let http = require('http');

http.createServer(function(req, res) {
  if (req.url !== "/favicon.ico") {
    console.log(req.url);

    res.writeHead(200,{"Content-Type" : "text/plain"});
    res.write('Halo dari server node js.\n');
    res.write('You request '+req.url);
    res.end();
  }

}).listen(4000);

console.log("Server sedang berjalan ...");
