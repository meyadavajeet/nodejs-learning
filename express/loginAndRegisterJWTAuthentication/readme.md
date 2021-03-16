## Login And Register using jwt authentication

packages required and process of creating project from scratch
$ touch app.js
$ npm init -y

#install nodemon
$ npm i nodemon

#install express
$ npm i express

#install mongoose
$ npm i mongoose

#install nodemon mongoose express
$ npm i nodemon mongoose express

# connect to database atlas cloud 
//for connection
 const express = require('express');
 const app = express();
 const mongoose = require("mongoose");
 mongoose.connect("mongodb+srv://nodeuser:nodeuser@123@cluster0.znxrx.mongodb.net/test?retryWrites=true&w=majority", {
     useNewUrlParser: true,
     useUnifiedTopology: true
 }).then(() => console.warn("Database Test Connected with mongoDb"))
     .catch((error) => console.warn(error));
//end of connection

