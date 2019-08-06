var express = require("express");
var router = express.Router();
var Categories = require("../models/categoryModel");

//create new category
router.post("/categories", function(req, res) {
  var category = new Categories({
    cName: req.body.cName
  });

  category.save(function(err, category) {
    if (err) res.send(err);
    else {
      res.json({ message: "category added", data: category });
    }
  });
});

//view all categories
router.get("/categories/view", function(req, res) {
  Categories.find({}, function(err, categories) {
    if (err) res.send(err);
    else {
      res.json({ message: "Categoires Displayed", data: categories });
    }
  });
});

//update a category
router.put("/categories/:id", function(req, res) {
  Categories.findByIdAndUpdate(
    req.params.id,
    { cName: req.body.cName },
    function(err, category) {
      if (err) res.send(err);
      else {
        res.send({ message: "Category Updated" });
      }
    }
  );
});

//delete a category
router.delete("/categories/:id", function(req, res) {
  Categories.findOneAndDelete({ _id: req.params._id }, function(err, category) {
    if (err) res.send(err);
    else {
      res.json({ message: "Category Deleted" });
    }
  });
});

module.exports = router;
