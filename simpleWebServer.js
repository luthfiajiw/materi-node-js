let http = require('http');
// file stream
let fs = require('fs');

http.createServer(function(req, res) {
    console.log(req.url);

    let kode = 0;
    let file = ""
    if (req.url === "/") {
      //index
      kode = 200;
      file = "index.html";
    }else if (req.url === "/contact") {
      //contact
      kode = 200;
      file = "contact.html";
    } else {
      //404
      kode = 404;
      file = "404.html"
    }
    res.writeHead(kode,{"Content-Type" : "text/html"});
    // Mengirim objek res ke createReadStream meggunakan pipe
    fs.createReadStream('./template/'+file).pipe(res);

}).listen(4000);

console.log("Server sedang berjalan ...");
