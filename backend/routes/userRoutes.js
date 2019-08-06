var express = require("express");
var router = express.Router();
var Users = require("../models/userModel.js");
let jwt = require("jsonwebtoken");
const secret="hbfvshbv647826472@#%$#%&$ggbbhbnec8087382363662970237";
var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
 host: 'smtp.gmail.com',
 auth: {
        type:'login',
        user: 'nikhilleadmanagement@gmail.com',
        pass: 'nikhil@123$'
    }
});

//create new user
router.post("/users", function(req, res) {
  var user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    mobile: req.body.mobile,
    qAnswered: req.body.qAnswered
  });
   var uEmail = req.body.email;
  user.save(function(err, user) {
    if (err) res.send(err);
    else {
      res.json({ message: "User Added", data: user });
    }
  });

  const mailOptions = {
  from: 'nikhilleadmanagement@gmail.com', // sender address
  to: uEmail, // list of receivers
  subject: 'QandA Registration', // Subject line
  text: "Thanks for registering with QandA."// plain text body

};

transporter.sendMail(mailOptions, function (err, info) {
   if(err)
     console.log(err)
   else
     console.log("Success");
});


});

//login user
router.post("/users/login",function(req,res){
  Users.findOne({
    $and: [{email:req.body.email},{password:req.body.password}]
  }).then(user => {
    let token = jwt.sign(user.toJSON(),secret);
    res.send({token});
  }).catch(err =>{
    res.send(err);
  });
});





//view all users
router.get("/users/view", function(req, res) {
  Users.find({}, function(err, users) {
    if (err) res.send(err);
    else {
      res.json({ message: "Users Displayed", data: users });
    }
  });
});

//update a user
router.put("/users/:id", function(req, res) {
  Users.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      mobile: req.body.mobile,
      qAnswered: req.body.qAnswered
    },
    function(err, user) {
      if (err) res.send(err);
      else {
        user.save();
        res.json({ message: "User Updated" });
      }
    }
  );
});

//delete a user
router.delete("/users/:id", function(req, res) {
  Users.findOneAndDelete({ _id: req.params._id }, function(res, err) {
    if (err) res.send(err);
    else {
      res.json({ message: "User Deleted" });
    }
  });
});

module.exports = router;
