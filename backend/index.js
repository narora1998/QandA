var cors = require("cors");
var express = require("express");
var app = express();
var mongoose = require("mongoose");
var passport = require("passport");
var bodyparser = require("body-parser");
var methodOverride = require("method-override");
var User = require("./models/userModel.js");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/qa", { useNewUrlParser: true });

var userRoutes = require("./routes/userRoutes");
//var categoryRoutes = require("./routes/categoryRoutes");
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
app.use(
  require("express-session")({
    secret: "I am Nikhil Arora",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", userRoutes);
app.use("/", questionRoutes);
app.use("/", answerRoutes);

app.listen(port, () => {
  console.log("Running on PORT 8000");
});
