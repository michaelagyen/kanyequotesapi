//jshint esversion6
const express = require("express");
const bodyParser = require("body-parser");
var request = require("request");
let ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  request("https://api.kanye.rest", (error, response, body) => {
    if (error) {
      return console.log(error);
    }

    let data = JSON.parse(body);
    let content = data.quote;

    res.render("home.ejs", { content: content });
  });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
