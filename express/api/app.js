// get data from the mongodb
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const userModel = require('./models/User');
mongoose.connect("mongodb+srv://nodeuser:nodeuser@123@cluster0.znxrx.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get('/users', (req, res) => {
    userModel.find().then((data) => {
        res.status(200).json(data);
    }).catch((error) => console.warn(error));;
    // userModel.find().select('name').then((data)=>{
    //     res.status(200).json(data);
    // });
});

//end of get data from mongodb

//post data to mongo db using postman
//post api using express
app.post('/user', jsonParser, (req, res) => {
    const data = new userModel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password
    })
    data.save().then((result) => res.status(201).json(result))
        .catch((error) => console.warn(error));
})
//end of post api

//delete api
app.delete('/user/:id', (req, res) => {
    userModel.deleteOne({_id: req.params.id })
        .then((result) => res.status(200).json(result))
        .catch((error) => console.log(error));
})
//end of delete api

app.listen(4000);