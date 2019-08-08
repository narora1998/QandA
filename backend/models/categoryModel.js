var mongoose = require("mongoose");

var categorySchema = new mongoose.Schema({
  cName: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Categories", categorySchema);
