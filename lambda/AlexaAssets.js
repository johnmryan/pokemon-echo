var AlexaAssets = {

    Welcome: {
        speechOutput: "Welcome to <phoneme alphabet='ipa' ph='p'okimɑːn'>Pokemon</phoneme> Battle!"
    },

    PlayerCount: {
        speechOutput: "How many players are there?",
        repromptOutput: "How many players?"
    },

    PlayerCountSelected: {
        speechOutput: function (count) {
            return "There are "+count+" Pokemon Trainers.";
        },
        repromptOutput: "How many players?"
    },

    SelectPokemon: {
        speechOutput: function (playerNumber) {
            return "Player "+playerNumber+" choose your <phoneme alphabet='ipa' ph='p'okimɑːn'>Pokemon</phoneme>.";
        },
        repromptOutput: function (playerNumber) {
            return "Player "+playerNumber+". Choose your <phoneme alphabet='ipa' ph='p'okimɑːn'>pokemon</phoneme>!";
        }
    },

    SelectPokemonError: {
        speechOutput: "Please choose a better <phoneme alphabet='ipa' ph='p'okimɑːn'>pokemon</phoneme>.",
        repromptOutput: "Please choose a <phoneme alphabet='ipa' ph='p'okimɑːn'>pokemon</phoneme>."
    },

    PokemonSelected: {
        speechOutput: function (playerNumber,pokemon) {
            return "Player "+playerNumber+" chose "+pokemon+".";
        }
    },

    PlayerCountError: {
        speechOutput: function (min,max) {
            return "Sorry, you must have between "+min+" and "+max+" players. How many players are there?";
        },
        repromptOutput: "How many players?"
    },

    ReadyToBattle: {
        speechOutput: "Ready to battle!"
    }

};

module.exports = AlexaAssets;
