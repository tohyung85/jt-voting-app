'use strict';

var VoteHandler = require('../controllers/voteHandler.server.js');

module.exports = function(app) {

	var voteHandler = new VoteHandler();

	app.route('/')
		.get(voteHandler.incrementVote);

	app.route('/results')
		.get(voteHandler.getVotes);

}