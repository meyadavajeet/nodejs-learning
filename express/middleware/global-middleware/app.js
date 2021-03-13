const express = require('express');
const app = express();
//function as middleware
const checkUrl = function(req,res,next) {
    console.log("current url is ",req.originalUrl)
    next();
}

//to use middleware
app.use(checkUrl);
app.get('/',function(req,res) {
    res.send("Hello Universe Welcome to world of Express js")
});
app.get('/about',function(req,res) {
    res.send("about us")
});
app.get('/contact',function(req,res) {
    res.send("contact us")
});

app.listen(4500);