var fs = require("fs");
var noidung = fs.readFileSync(__dirname + "/Hello.txt");
console.log(noidung);
console.log(noidung.toString());

var buffer = new Buffer(noidung);
console.log(buffer);
console.log(buffer.toJSON());
