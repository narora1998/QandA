var bodyparser = require("body-parser");
var cors = require("cors");
var express = require("express");
var app = express();
var methodOverride = require("method-override");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/qa", { useNewUrlParser: true });

var userRoutes = require("./routes/userRoutes");
var categoryRoutes = require("./routes/categoryRoutes");
var questionRoutes = require("./routes/questionRoutes");
var answerRoutes = require("./routes/answerRoutes");
var port = process.env.PORT || 8000;

app.use(cors());
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);
app.use(bodyparser.json());
app.use(methodOverride("_method"));

app.use("/", userRoutes);
app.use("/", categoryRoutes);
app.use("/", questionRoutes);
app.use("/", answerRoutes);

app.listen(port, () => {
  console.log("Running on PORT 8000");
});
