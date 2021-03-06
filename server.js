const express = require("express"); //used for routing and middleware definitions
const exphbs = require("express-handlebars"); //templating engine for express
const mongoose = require("mongoose"); //used for interactive with mongodb
const bodyParser = require("body-parser"); //not sure if actually needed but i was troubleshooting

//set port
const PORT = process.env.PORT || 3000;

//initiate express app
const app = express();

//Defining middleware

app.use(express.static("public")); //set public directory for static files
app.use(bodyParser.urlencoded({ extended: true})); //again, don't know if needed

//Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

//connect to mongodb
mongoose.connect(MONGODB_URI);

//Routes
require("./controllers/scraperController")(app);
require("./controllers/commentController")(app);

//Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});