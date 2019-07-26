// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// bring in the models
var db = require("./models");

var app = express();
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// listen on port 3000
var PORT = process.env.PORT || 3000;
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening on port:", PORT);
  });
});

