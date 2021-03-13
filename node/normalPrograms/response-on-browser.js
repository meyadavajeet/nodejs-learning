var http = require("http");
http.createServer(function(req, res){
    res.write("Hello From Node js to Browser\n");
    res.write("Hello and welcome to Node js")
    res.end();
}).listen(500);