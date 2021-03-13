var http = require("http");
http.createServer(function(req, res){
    res.write("Hello From Node js to Browser\n");
    res.write("Hello and welcome to Node js Now you are doing good")
    res.end();
}).listen(5000);


//note command used to install and run server
//  npm i -y
// npm i --save-dev nodemon
// node index.js