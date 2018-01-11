const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const api = require("./api.js");

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get("/", (req, res) => {
  res.sendFile("public/index.html");
});

app.use("/api", api);

module.exports = app;
