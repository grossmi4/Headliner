const express = require("express"); //used for routing and middleware definitions
const exphbs = require("express-handlebars"); //templating engine for express
const mongoose = require("mongoose"); //used for interactive with mongodb
const axios = require("axios"); //used to make get requests for scraping
const cheerio = require("cheerio"); //used to parse html from scraping requests

//set port
const PORT = process.env.PORT || 3000;

const app = express();

//Defining middleware

app.use(express.static("public")); //set public directory for static files

//Set Handlebars
app.engine("handlebars", exphbs({ defaulyLayout: "main" }));
app.set("view engine", "handlebars");

//Require all models
const db = require("./models");

//Connect mongoose to mongodb
mongoose.connect("mongodb://localhost/Headliner", { useNewUrlParser: true } );


