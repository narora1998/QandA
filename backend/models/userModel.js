var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

//var bcrypt = require("bcrypt");
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  mobile: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    required: true
  },
  qAnswered: {
    type: [],
    required: false
  }
});

userSchema.plugin(passportLocalMongoose);

// userSchema.statics.hashPassword = function hashPassword(password) {
//   return bcrypt.hashSync(password, 10);
// };

// userSchema.methods.isValid = function(hashedpassword) {
//   return bcrypt.compareSync(hashedpassword, this.password);
// };

module.exports = mongoose.model("User", userSchema);
