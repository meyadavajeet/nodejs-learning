//for connection
// const express = require('express');
// const app = express();
// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://nodeuser:nodeuser@123@cluster0.znxrx.mongodb.net/test?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => console.warn("Database Test Connected with mongoDb"))
//     .catch((error) => console.warn(error));
//end of connection


// get data from the mongodb
// const express = require('express');
// const app = express();
// const mongoose = require("mongoose");
// const userModel = require('./models/users');
// mongoose.connect("mongodb+srv://nodeuser:nodeuser@123@cluster0.znxrx.mongodb.net/test?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// userModel.find({},(err,user)=>{
//     if(err) console.warn(err);
//     console.warn(user);
// });

//end of get data from mongodb


//save data to mongo db
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const userModel = require('./models/users');
mongoose.connect("mongodb+srv://nodeuser:nodeuser@123@cluster0.znxrx.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const data = new userModel({
    _id: new mongoose.Types.ObjectId(),
    name: "bruce",
    email: "banner@gmail.com",
    address: "USA"
});

data.save().then((result) => console.warn(result)).catch((error) => console.log(error));
// end of save data to mongodb