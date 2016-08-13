var AlexaAssets = require("./AlexaAssets");

var registerEventHandlers = function (eventHandlers) {

	eventHandlers.onSessionStarted = function (sessionStartedReqeust, session) {
		// session started logic
	};

	eventHandlers.onLaunch = function (launchRequest, session, response) {
        response.ask(
            AlexaAssets.Welcome.speechOutput+" "+AlexaAssets.PlayerCount.speechOutput,
            AlexaAssets.PlayerCount.repromptOutput
        );
	};

	eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
		// session ended cleanup
	};
};

module.exports.register = registerEventHandlers;
