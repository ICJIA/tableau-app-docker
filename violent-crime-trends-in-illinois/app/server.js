var http = require("http");
var fs = require("fs");

http
  .createServer(function(request, response) {
    fs.readFile("./index.html", function(error, content) {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.end(content, "utf-8");
    });
  })
  .listen(3838);
console.log("Server running at port 3838");
