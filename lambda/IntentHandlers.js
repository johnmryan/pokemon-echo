var WelcomeIntent = require("./intents/Welcome");
var PlayerCountIntent = require("./intents/PlayerCount");

var registerIntentHandlers = function (intentHandlers) {
    intentHandlers.WelcomeIntent = WelcomeIntent;
    intentHandlers.PlayerCountIntent = PlayerCountIntent;
};

module.exports.register = registerIntentHandlers;
