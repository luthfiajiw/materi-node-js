const http = require('http');
const fs = require('fs');
const url = require('url');
const qString = require('querystring');

// http.createServer(function(req, res) {
//   if (req.url !== "/favicon.ico") {
//     res.writeHead(200, {"Content-Type" : "text/plain"});
//     res.write("Hello from me here :)");
//     res.end();
//   }
//   console.log(req.url);
//
// }).listen(5000);
//
// console.log("Server is running");

// =================================== //

// MENGAMBIL QUERY STRING DARI REQUEST GATE

// 1. mem parse access untuk routing menggunakan pathname

// http.createServer(function(req, res) {
//   if (req.url !== "/favicon.ico") {
//     let access = url.parse(req.url);
//     console.log(access);
//     let file = "";
//
//     if (access.pathname === "/") {
//       file = "./template/index.html"
//     } else if (access.pathname === "/contact") {
//       file = "./template/contact.html"
//     } else {
//       file = "./template/404.html"
//     }
//
//
//     res.writeHead(200, {"Content-Type" : "text/html"});
//     fs.createReadStream(file).pipe(res);
//   }
//
// }).listen(5000);
//
// console.log("Server is running");



// 2. memparse query yang ada pada access dan menkonvertnya
// kedalam bentuk json

http.createServer(function(req,res) {
  if (req.url !== "/favicon.ico") {
    // parse url terlebih dulu untuk bisa mendapatkan pathname
    let access = url.parse(req.url);
    if (access.pathname === "/") {
      // parse query untuk memvalidasi query stringnya
      let data = qString.parse(access.query);

      res.writeHead(200, {"Content-Type" : "text/plain"});
      res.end(JSON.stringify(data));
    }else if (access.pathname === "/form") {
      if (req.method.toUpperCase() === "POST") {
        // res.writeHead(200, {"Content-Type" : "text/html"});
        // res.end("Request POST");

        let data_post = "";
        req.on("data", function(chunck) {
          data_post += chunck;
        })

        req.on("end", function() {
          data_post = qString.parse(data_post);
          res.writeHead(200, {"Content-Type" : "text/plain"});
          res.end(JSON.stringify(data_post));
        })

      }else { //GET
        res.writeHead(200, {"Content-Type" : "text/html"});
        fs.createReadStream("./template/form.html").pipe(res);
      }
    }else {
      res.writeHead(404, {"Content-Type" : "text/plain"});
      res.end("Page Not Found!");
    }

    // console.log(data);
    // untuk bisa mengakses isi data bisa menggunakan data.nama, dsb
  }

}).listen(5000);

console.log("Server is running");
