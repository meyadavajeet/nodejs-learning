const express = require('express');
const app = express();
app.get('/',function(req,res) {
    res.send("Hello Universe Welcome to world of Express js")
});
app.get('/about',function(req,res) {
    res.send("about us")
});
app.get('/contact',function(req,res) {
    res.send("contact us")
});
app.post('/login',function(req,res) {
    res.send("checking for post request of login")
});
app.put('/register',function(req,res) {
    res.send("register put request")
});
app.delete('/about',function(req,res) {
    res.send("about us delete")
});
app.listen(4500);