function wrap_ssml (speechOutput) {
    return {
        speech: "<speak>"+speechOutput+"</speak>",
        type: "SSML"
    };
}

var AlexaAssets = {

    Welcome: {
        speechOutput: wrap_ssml("Welcome to <phoneme alphabet='ipa' ph='p'okimɑːn'>Pokemon</phoneme> Battle!")
    },

    PlayerCount: {
        speechOutput: "How many players are there?",
        repromptOutput: "How many players?"
    },

    PokemonSelect: {
        speechOutput: function (playerNumber) {
            var str = "";
            if (playerNumber===1) { str = "Okay, "; }
            return wrap_ssml(str+"Player "+playerNumber+" choose your <phoneme alphabet='ipa' ph='p'okimɑːn'>Pokemon</phoneme>.");
        },
        repromptOutput: function (playerNumber) {
            return wrap_ssml("Player "+playerNumber+". Choose your <phoneme alphabet='ipa' ph='p'okimɑːn'>Pokemon</phoneme>!");
        }
    },

    PlayerCountError: {
        speechOutput: function (min,max) {
            return "Sorry, you must have between "+min+" and "+max+" players. How many players are there?";
        },
        repromptOutput: "How many players?"
    },

};

module.exports = AlexaAssets;
