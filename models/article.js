var mongoose = require('mongoose');

// Article Schema
var articleSchema = mongoose.Schema({
    title: {
		type: String
	},
	subtitle: {
		type: String
	},
	category: {
		type: String
	},
	body: {
		type: String
	},
	author: {
		type: String
	},
	created_at: {
		type: Date,
		default: Date.now
	},
	comments: [{
		comment_subject:{
			type: String
		},
		comment_body:{
			type: String
		},
		comment_author:{
			type: String
		},
		comment_email:{
			type: String
		},
		comment_date:{
			type: String
		}
	}]
});