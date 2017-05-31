var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var bcrypt = require("bcrypt-nodejs");
var hbs = require("hbs");
var path = require("path");
var session = require("express-session");

var app = express();


app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "app/views"));

app.use("/static", path.join(__dirname, "app/client"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({

    extended: true
    
}));


