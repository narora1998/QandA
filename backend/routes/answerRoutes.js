var express = require("express");
var router = express.Router();
var Answers = require("../models/answerModel.js");

//answer a question
router.post("/answers", function(req, res) {
  var a = new Answers({
    answer: req.body.answer,
    userId: req.body.userId,
    questionId: req.body.qId
  });

  a.save(function(err, ans) {
    if (err) res.send(err);
    else {
      res.json({ message: "Answer Added", data: ans });
    }
  });
});

router.get("/answers/view", function(req, res) {
  Answers.find({}, function(err, answers) {
    if (err) res.send(err);
    else {
      res.json({ message: "All Answers Displayed", data: answers });
    }
  });
});

module.exports = router;
