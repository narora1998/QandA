var express = require("express");
var router = express.Router();
var QuestionsAnswers = require("../models/qaModel.js");

//crate a QA
router.post("/question", function(req, res) {
  var qA = new questionsAnswers({
    question: req.body.question,
    answer: req.body.answer,
    cName: req.body.cName
  });

  qA.save(function(err, qa) {
    if (err) res.send(err);
    else {
      res.json({ message: "QA Created" });
    }
  });
});

//view questions-answers
router.get("/question-answers/view", function(req, res) {
  QuestionsAnswers.find({}, function(err, qas) {
    if (err) res.send(err);
    else {
      res.json({ message: "Viewed all question answers" });
    }
  });
});

//update a question-answer
router.put("/question-answers/:id", function(req, res) {
  QuestionsAnswers.findByIdAndUpdate(
    req.params.id,
    {
      question: req.body.question,
      answer: req.body.answer,
      cName: req.body.cName
    },
    function(err, qa) {
      if (err) res.send(err);
      else {
        res.json({ message: "QA Updated" });
      }
    }
  );
});

//delete a question-answer
router.delete("/question-answers/:id", function(req, res) {
  QuestionsAnswers.findOneAndDelete({ _id: req.params._id }, function(err, qa) {
    if (err) res.send(err);
    else {
      res.json({ message: "QA Deleted" });
    }
  });
});

module.exports = router;
