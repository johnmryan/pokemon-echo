var AlexaAssets = {

    Welcome: {
        speechOutput: "Welcome to <phoneme alphabet='ipa' ph='pokimɑːn'>Pokemon</phoneme> Battle!"
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
            return "Player "+playerNumber+" choose your <phoneme alphabet='ipa' ph='pokimɑːn'>Pokemon</phoneme>.";
        },
        repromptOutput: function (playerNumber) {
            return "Player "+playerNumber+". Choose your <phoneme alphabet='ipa' ph='pokimɑːn'>pokemon</phoneme>!";
        }
    },

    SelectPokemonError: {
        speechOutput: "Please choose a better <phoneme alphabet='ipa' ph='pokimɑːn'>pokemon</phoneme>.",
        repromptOutput: "Please choose a <phoneme alphabet='ipa' ph='pokimɑːn'>pokemon</phoneme>."
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

    SelectAttack: {
        speechOutput: function (playerNum) {
            return "Player "+playerNum+", select your move!";
        },
        repromptOutput: function (playerNum) {
            return "Player "+playerNum+", select your move!";
        }
    },

    AttackUsed: {
        speechOutput: function (pokemon,move) {
            return pokemon+" used "+move+"!";
        }
    },

    AttackSass: {
        speechOutput: function (move) {
            return "Don't tell me to use "+move+". Tell your <phoneme alphabet='ipa' ph='pokimɑːn'>pokemon</phoneme>!";
        }
    },

    AttackError: {
        speechOutput: "Your attack failed. Please select a new move.",
        repromptOutput: "Please select a new move."
    },

    ReadyToBattle: {
        speechOutput: "Ready to battle!"
    }

};

module.exports = AlexaAssets;
