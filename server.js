const express = require("express"); //used for routing and middleware definitions
const exphbs = require("express-handlebars"); //templating engine for express
const mongoose = require("mongoose"); //used for interactive with mongodb
const bodyParser = require("body-parser");

//set port
const PORT = process.env.PORT || 3000;

const app = express();

//Defining middleware

app.use(express.static("public")); //set public directory for static files
app.use(bodyParser.urlencoded({ extended: true}));

//Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//Connect mongoose to mongodb
mongoose.connect("mongodb://localhost/Headliner", { useNewUrlParser: true } );

//Routes
require("./controllers/scraperController")(app);

//Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});