'use strict';

var express = require('express');
var mongoose = require('mongoose');

var routes = require('./app/routes/index.js');

var app = express();
var port = process.env.PORT || 5000;
var mongoURI = process.env.MONGOLAB_URI;

mongoose.connect(mongoURI);

routes(app);

app.route('/')
	.get(function(req, res){
		res.send('hello world');
	});

app.listen(port, function(err){
	console.log("listening to port " + port + '...');
});