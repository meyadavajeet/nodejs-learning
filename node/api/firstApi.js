var http = require("http");
var data = [
    {name:"Ajeet",age:"23",email:"ajeet@gmail.com"},
    {name:"Dayan",age:"23",email:"ajeet@gmail.com"},
    {name:"maya",age:"20",email:"maya@gmail.com"},
    {name:"jp",age:"40",email:"jp@gmail.com"},
]
http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(900);