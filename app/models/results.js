'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Result = new Schema (
	{
		test: Number,
	},
	{versionKey: false}
);

module.exports = mongoose.model('Result', Result);