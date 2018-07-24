var express = require("express");
var app = express();
var server = require("http").createServer(app);
server.listen(8000);

app.get("/",function(req, res){
	res.send("Hello word");
}); 

app.get("/gioithieu.html",function(req, res){
	res.sendFile(__dirname + "/gioithieu.html");
})

