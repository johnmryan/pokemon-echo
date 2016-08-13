var PlayerCountIntent = require("./intents/PlayerCount");
var SelectPokemonIntent = require("./intents/SelectPokemon");

var registerIntentHandlers = function (intentHandlers) {
    intentHandlers.PlayerCountIntent = PlayerCountIntent;
    intentHandlers.SelectPokemonIntent = SelectPokemonIntent;
};

module.exports.register = registerIntentHandlers;
