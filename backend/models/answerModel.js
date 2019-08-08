var mongoose = require("mongoose");

var answerSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: true
  },
  userId: {
    type: String
  },
  questionId: {
    type: String
  }
});

module.exports = mongoose.model("answers", answerSchema);
