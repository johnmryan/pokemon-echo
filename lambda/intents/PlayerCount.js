var AlexaAssets = require("../AlexaAssets");

function handlePlayerCountRequest (intent, session, response) {
    // TODO error check for >2 players and <1
    var count = intent.slots.Count.value;
    response.tell(
        AlexaAssets.PlayerCount.speechOutput(count)
    );
}

module.exports = handlePlayerCountRequest;
