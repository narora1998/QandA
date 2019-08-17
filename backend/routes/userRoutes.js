var express = require("express");
var router = express.Router();
var User = require("../models/userModel.js");
var passport = require("passport");
// var nodemailer = require("nodemailer");

// var transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   auth: {
//     type: "login",
//     user: "nikhilleadmanagement@gmail.com",
//     pass: "nikhil@123$"
//   }
// });

//create new user
router.post("/users", function(req, res) {
  // var user = new Users({
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: Users.hashPassword(req.body.password),
  //   mobile: req.body.mobile,
  //   dateCreated: Date.now()
  // });
  User.register(
    new User({
      name: req.body.name,
      username: req.body.username,
      mobile: req.body.mobile,
      dateCreated: Date.now()
    }),
    req.body.password,
    function(err, user) {
      if (err) {
        console.log(err);
        res.send(err);
      }
      // passport.authenticate("local")(req, res, function() {
      //   res.send("Logged In");
      // });
      // user.dateCreated = Date.now();
      // user.save();
      res.json({ message: "Successfully Created Account", data: user });
    }
  );

  // var uEmail = req.body.email;
  // user.save(function(err, user) {
  //   if (err) res.send(err);
  //   else {
  //     res.json({ message: "User Added", data: user });
  //   }
  // });

  // const mailOptions = {
  //   from: "nikhilleadmanagement@gmail.com", // sender address
  //   to: uEmail, // list of receivers
  //   subject: "QandA Registration", // Subject line
  //   text: "Thanks for registering with QandA." // plain text body
  // };

  // transporter.sendMail(mailOptions, function(err, info) {
  //   if (err) console.log(err);
  //   else console.log("Success");
  // });
});

//login user
// router.post("/users/login", function(req, res) {
//   passport.authenticate("local", function(err, user, info) {
//     if (err) {
//       return res.status(501).json(err);
//     }
//     if (!user) {
//       return res.status(501).json(info);
//     }
//     req.logIn(user, function(err) {
//       if (err) {
//         return res.status(501).json(err);
//       }
//       return res.status(200).json({ message: "Login Successful" });
//     });
//   })(req, res, next);
// });

//update a user
// router.put("/users/:id", function(req, res) {
//   Users.findByIdAndUpdate(
//     req.params.id,
//     {
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       mobile: req.body.mobile,
//       qAnswered: req.body.qAnswered
//     },
//     function(err, user) {
//       if (err) res.send(err);
//       else {
//         user.save();
//         res.json({ message: "User Updated" });
//       }
//     }
//   );
// });

//delete a user
// router.delete("/users/:id", function(req, res) {
//   Users.findOneAndDelete({ _id: req.params._id }, function(res, err) {
//     if (err) res.send(err);
//     else {
//       res.json({ message: "User Deleted" });
//     }
//   });
// });

router.post(
  "/users/login",
  passport.authenticate("local", {
    //successRedirect: "/questions",
    //failureRedirect: "/users/login"
  }),
  function(req, res) {
    console.log("success");
    res.json({ status: true });
  }
);

// router.post(
//   "/users/login",
//   passport.authenticate("local", {
//     successRedirect: "/questions",
//     failureRedirect: "/users/login",
//     failureFlash: true
//   })
// );

//view all users
// router.get("/users/view", function(req, res) {
//   Users.find({}, function(err, users) {
//     if (err) res.send(err);
//     else {
//       res.json({
//         message: "Users Displayed",
//         data: users,
//         currentUser: req.user
//       });
//     }
//   });
// });

module.exports = router;
