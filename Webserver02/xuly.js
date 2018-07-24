var fs = require("fs");
var http =  require("http")
var obj={
	Ho : 	"Pham",
	ten:	"Khoa",
	NamSinh : 1987
}

http.createServer(function(req, res){
	res.writeHead(404, {"Content-Type":"text/plain"});
	/*fs.createReadStream(__dirname+"/index.html","utf-8").pipe(res);*/
	//res.end(JSON.stringify(obj));
	res.end("Page not Found");
}).listen(7000);