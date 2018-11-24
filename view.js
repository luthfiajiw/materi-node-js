const http = require('http');
const url = require('url');
const routes = require('routes')();
const view = require('swig');

routes.addRoute('/', function(req, res) {
  // Menampilkan viewIndex.html menggunakan view
  let html = view.compileFile("./template/viewIndex.html")({
    title : "Ini Halaman Index"
  });
  res.writeHead(200, {"Content-Type" : "text/html"});
  res.end(html);
});

routes.addRoute('/contact', function(req, res) {
  let html = view.compileFile("./template/viewContact.html")({
    title: "Ini Halaman Contact"
  });
  res.writeHead(200, {"Content-Type" : "text/html"});
  res.end(html);
})

http.createServer(function(req, res) {
  let pathname = url.parse(req.url).pathname;
  let match = routes.match(pathname);

  if (match) {
    match.fn(req, res);
  }else {
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end("Page Not Found ...");
  }
}).listen(4000);

console.log("Server is running");
