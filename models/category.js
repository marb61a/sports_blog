var mongoose = require('mongoose');

// Category Schema
var categorySchema = mongoose.schema({
	title: {
		type: String
	},
	description: {
		type: String
	},
	created_at: {
		type: Date,
		default: Date.now
	}
});

var Category = module.exports = mongoose.model('Category', categorySchema);