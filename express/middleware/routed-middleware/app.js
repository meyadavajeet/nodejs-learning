const express = require('express');
const app = express();
const router = express.Router();

const urlCheck = require('./middleware');

app.get('/',function(req,res){
    // res.send("This is home page");
    res.sendFile(__dirname+"/home.html");
});
//use router-middleware on specific url
router.get('/about',urlCheck,function (req,res) {
    // res.send("this is about page");
    res.sendFile(__dirname+"/services.html")
});
router.get('/contact',urlCheck,function (req,res) {
    // res.send("this is contact page");
    res.sendFile(__dirname+"/contact.html")
});
router.get('/services',function (req,res) {
    // res.send("this is services page");
    res.sendFile(__dirname+"/services.html")
});
app.use('/',router);
app.listen(4500);