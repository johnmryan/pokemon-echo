var AlexaAssets = require("./AlexaAssets");

var registerEventHandlers = function (eventHandlers) {

	eventHandlers.onSessionStarted = function (sessionStartedReqeust, session) {
		// session started logic
	};

	eventHandlers.onLaunch = function (launchRequest, session, response) {
		response.tell(AlexaAssets.Welcome.speechOutput);
	};

	eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
		// session ended cleanup
	};
};

module.exports.register = registerEventHandlers;
