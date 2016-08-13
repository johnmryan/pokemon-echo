var AlexaAssets = require("../AlexaAssets");

function handleWelcomeRequest (intent, session, response) {
    response.ask(
        AlexaAssets.Welcome.speechOutput,
        AlexaAssets.Welcome.repromptOutput
    );
}

module.exports = handleWelcomeRequest;
