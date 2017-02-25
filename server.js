var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Star Wars reservations (DATA)
// =============================================================
// var reservations = [{
//   routeName: "yoda",
//   name: "Yoda",
//   role: "Jedi Master",
//   age: 900,
//   forcePoints: 2000
// }, {
//   routeName: "darthmaul",
//   name: "Darth Maul",
//   role: "Sith Lord",
//   age: 200,
//   forcePoints: 1200
// }, {
//   routeName: "obiwankenobi",
//   name: "Obi Wan Kenobi",
//   role: "Jedi Master",
//   age: 55,
//   forcePoints: 1350
// }];

// Routes
// =============================================================
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);



// Basic route that sends the user first to the AJAX Page



// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
