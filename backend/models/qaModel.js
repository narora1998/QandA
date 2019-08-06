var mongoose = require("mongoose");

var qaSchema = mongoose.Schema({
	question:{
		type:String,
		required:true
	},
	cName:{
		type:String,
		required:true
	},
	answer:{
		type:[]
	}
});

module.exports = mongoose.model("QuestionAnswers",qaSchema);
