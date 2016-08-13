function wrap_ssml (speechOutput) {
    return {
        speech: "<speak>"+speechOutput+"</speak>",
        type: "SSML"
    };
}

var AlexaAssets = {

    Welcome: {
        speechOutput: wrap_ssml("Welcome to <phoneme alphabet='ipa' ph='p'okimɑːn'>Pokemon</phoneme> Battle! How many players are there?")
        repromptOutput: "How many players?"
    },

    PlayerCount: {
        speechOutput: function (count) {
            return "There are "+count+" players.";
        }
    }

};

module.exports = AlexaAssets;
