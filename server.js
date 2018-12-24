const express = require("express"); //used for routing and middleware definitions
const exphbs = require("express-handlebars"); //templating engine for express
const mongoose = require("mongoose"); //used for interactive with mongodb
var bodyParser = require("body-parser");

//set port
const PORT = process.env.PORT || 3000;

const app = express();

//Defining middleware

app.use(express.static("public")); //set public directory for static files
app.use(bodyParser.urlencoded({ extended: true}));

//Set Handlebars
app.engine("handlebars", exphbs({ defaulyLayout: "main" }));
app.set("view engine", "handlebars");

//Require all models
var db = require("./models");

//Connect mongoose to mongodb
mongoose.connect("mongodb://localhost/Headliner", { useNewUrlParser: true } );

//Routes
require("./controllers/scraperController")(app);

//Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});