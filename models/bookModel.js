const mongoose = require('mongoose');

const {Schema} = mongoose; //extract from mongoose

const bookModel = new Schema({
	title: {type: String},
	author: {type: String},
	genre: {type: String},
	read: {type: Boolean, default: false},
	_id: {type: Number}
});

module.exports = mongoose.model('Book', bookModel);
