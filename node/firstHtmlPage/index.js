var http = require("http");
const fs = require("node:fs");
var page = `<h1>First Html Page using node js</h1><br><br>
    <input type="text" /><br><br>
    <input type="text" /><br><br>
    <input type="text" /><br><br>
    <input type="text" /><br><br>
    `;
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    // const html = fs.readFileSync("./index.html", "utf-8");
    // // res.write(page);
    // res.write(html);
    // res.end();

    //do same with the help of stream
    // fs.createReadStream("./index.html").pipe(res);

    // dynamic value
    let html = fs.readFileSync("./index.html", "utf-8");
    html = html.replace("{{name}}", "Ajeet");
    res.end(html);
  })
  .listen(9000, () => console.log("server listen on 9000"));
