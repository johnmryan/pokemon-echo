var AlexaAssets = {

    Welcome: {
        speechOutput: "Welcome to Pokemon Battle! How many players are there?",
        repromptOutput: "How many players?"
    },

    PlayerCount: {
        speechOutput: function (count) {
	    return "There are "+count+" players.";
	}
    }

};

module.exports = AlexaAssets;
