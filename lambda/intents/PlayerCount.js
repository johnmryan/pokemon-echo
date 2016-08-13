var AlexaAssets = require("../AlexaAssets");

function handlePlayerCountRequest (intent, session, response) {
    var minPlayerCount = 1, maxPlayerCount = 2;
    var count = 0;
    if (intent.slots.Count && intent.slots.Count.value) {
        count = intent.slots.Count.value;
    }

    if (count>=minPlayerCount && count<=maxPlayerCount) {

        session.attributes.playerCount = count;
        session.attributes.currPlayer = 1;

        response.ask(
            AlexaAssets.PlayerCountSelected.speechOutput(count)+" "+AlexaAssets.SelectPokemon.speechOutput(session.attributes.currPlayer),
            AlexaAssets.SelectPokemon.repromptOutput(session.attributes.currPlayer)
        );

    } else {
        response.ask(
            AlexaAssets.PlayerCountError.speechOutput(minPlayerCount,maxPlayerCount),
            AlexaAssets.PlayerCountError.repromptOutput
        );
    }
}

module.exports = handlePlayerCountRequest;
