var express = require("express");
var router = express.Router();
var Questions = require("../models/questionModel.js");

//crate a question
router.post("/question", function(req, res) {
  var q = new Questions({
    question: req.body.question,
    cName: req.body.cName
  });

  q.save(function(err, ques) {
    if (err) res.send(err);
    else {
      res.json({ message: "Question Created" });
    }
  });
});

//view questions-answers
router.get("/question/view", function(req, res) {
  Questions.find({}, function(err, q) {
    if (err) res.send(err);
    else {
      res.json({ message: "Viewed all question answers", data: q });
    }
  });
});

//view question by id
router.get("/question/:id", function(req, res) {
  console.log("this is:", req.params.id);
  Questions.findById(req.params.id, function(err, ques) {
    if (err) res.send(err);
    else {
      res.json({ message: "Question Viewed", data: ques });
    }
  });
});

//answer a question  YAHA CHANGES KRNE HAI
// router.post("/question/answer/:id", function(req, res) {
//   Questions.findById(req.params.id, function(err, obj) {
//     if (err) res.send(err);
//     else {
//       obj.answer.push(req.body.answer);
//       obj.save();
//       res.json({ message: "Answer Added", data: obj });
//     }
//   });
// });

//update a question-answer
// router.put("/question-answers/:id", function(req, res) {
//   QuestionsAnswers.findByIdAndUpdate(
//     req.params.id,
//     {
//       question: req.body.question,
//       answer: req.body.answer,
//       cName: req.body.cName
//     },
//     function(err, qa) {
//       if (err) res.send(err);
//       else {
//         res.json({ message: "QA Updated" });
//       }
//     }
//   );
// });

//delete a question-answer
// router.delete("/question-answers/:id", function(req, res) {
//   QuestionsAnswers.findOneAndDelete({ _id: req.params._id }, function(err, qa) {
//     if (err) res.send(err);
//     else {
//       res.json({ message: "QA Deleted" });
//     }
//   });
// });

module.exports = router;
