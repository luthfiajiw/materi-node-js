const http = require('http');
const url = require('url');
const routes = require('routes') ();
// Atau sama dengan
// routes = routes();


// Menambahkan route dengan fungsi addRoute
routes.addRoute('/', function(req, res) {
  res.writeHead(200, {"Content-Type" : "text/plain"});
  res.end("Index Page");
});

routes.addRoute('/contact', function(req, res) {
  res.writeHead(200, {"Content-Type" : "text/plain"});
  res.end("Contact Page");
})

// Jika ingin menambahkan query pada route
routes.addRoute('/profile/:nama/:alamat', function(req, res) {
  res.writeHead(200, {"Content-Type" : "text/plain"});
  res.end("Profile Page milik "+this.params.nama+" dari "+this.params.alamat);
})


http.createServer(function(req, res) {
  // Mengambil pathname dari url yang sudah diparse
  let pathname = url.parse(req.url).pathname;
  // Mencocokkan pathname dengan route yang sudah dibuat di atas
  let match = routes.match(pathname);

  if (match) {
    // Jika true maka halaman route akan terbuka
    match.fn(req, res);
  }else {
    res.writeHead(404, {"Content-Type" : "text/plain"});
    res.end("Page Not Found");
  }
}).listen(4000);

console.log("Server is running");
