/*var http = require("http");
var express = require('express');
var app = express();
var server=http.createServer(function(req,res)
{
res.writeHead(200,{'Content-Type':'text/plain'});
res.end('Hello');
});

server.listen(3002,'127.0.0.1');
console.log("Running at Port 3002");
*/
var express    = require("express");
var morgan     = require("morgan");
var app        = express();

var port = process.env.PORT || 3003;

app.use(morgan("dev"));
app.use(express.static("./"));

app.get("./", function(req, res) {
    res.sendFile(__dirname + './index.html');
});

// Start Server
app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});