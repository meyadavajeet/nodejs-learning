const express = require('express');
const app = express();
app.get('/',function(req,res) {
    res.send("Hello Universe Welcome to world of Express js")
}).listen(4500);