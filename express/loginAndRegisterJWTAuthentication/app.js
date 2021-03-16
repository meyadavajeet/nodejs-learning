//for connection
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const userModel = require('./models/Users');
mongoose.connect("mongodb+srv://nodeuser:nodeuser@123@cluster0.znxrx.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.warn("Database Test Connected with mongoDb"))
    .catch((error) => console.warn(error));
//end of connection