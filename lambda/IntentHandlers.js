var PlayerCountIntent = require("./intents/PlayerCount");
var SelectPokemonIntent = require("./intents/SelectPokemon");
var AttackIntent = require("./intents/Attack");

var registerIntentHandlers = function (intentHandlers) {
    intentHandlers.PlayerCountIntent = PlayerCountIntent;
    intentHandlers.SelectPokemonIntent = SelectPokemonIntent;
    intentHandlers.AttackIntent = AttackIntent;
};

module.exports.register = registerIntentHandlers;
