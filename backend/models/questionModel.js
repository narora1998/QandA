var mongoose = require("mongoose");

var questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  cName: {
    type: String,
    required: true
  },
  answerId: {
    type: []
  }
});

module.exports = mongoose.model("questions", questionSchema);
