'use strict';

var Results = require('../models/results.js');

function VoteHandler() {

	this.incrementVote = function(req, res) {

		var newResult = new Results();
		newResult.test = 0;

		newResult.save(function(err){
			if (err) {throw err;}

			res.send("saved");

		});
	}

	this.getVotes = function (req, res) {
		Results
			.find({}, {'_id': false})
			.exec(function(err, result){
				if(err) {throw err};

				if (result) {
					res.json(result);
				} else {
					res.send('No results');
				}

			});
	}

}

module.exports = VoteHandler;