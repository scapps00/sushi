var express = require("express");
var exphbs = require("express-handlebars");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var path = require("path");
var routes = require("./controllers/sushi_controllers.js");



var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, '/public')));
app.use(methodOverride("_method"));

app.use("/", routes);

app.listen(port);