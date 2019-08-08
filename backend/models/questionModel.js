var mongoose = require("mongoose");

var questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  cName: {
    type: String,
    required: true
  }
  // answer: {
  //   type: []
  // }
});

module.exports = mongoose.model("questions", questionSchema);
