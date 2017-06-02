var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var bcrypt = require("bcrypt-nodejs");
var hbs = require("hbs");
var path = require("path");
var session = require("express-session");
var routes = require("./app/routes/routes");

var app = express();


app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "app/views"));

routes(app);
app.use("/static", path.join(__dirname, "app/client"));

app.use(session({

    secret:"itsASecret",
    resave:true,
    saveUninitialized:true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({

    extended: true
    
}));

app.listen(function(){

    console.log("Listening on port 8080");
});
