var http = require("http");
var page =
    `<h1>First Html Page using node js</h1><br><br>
    <input type="text" /><br><br>
    <input type="text" /><br><br>
    <input type="text" /><br><br>
    <input type="text" /><br><br>
    `;
http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(page);
    res.end();
}).listen(9000);