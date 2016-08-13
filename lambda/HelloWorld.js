var AlexaAssets = require("AlexaAssets");

/**
 * App ID for the skill
 */
var APP_ID = "amzn1.ask.skill.448c9d95-9faa-4e4e-a017-44f39965b1e0"; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * HelloWorld inherits from AlexaSkill.
 */
var HelloWorld = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
HelloWorld.prototype = Object.create(AlexaSkill.prototype);
HelloWorld.prototype.constructor = HelloWorld;

HelloWorld.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("HelloWorld onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

HelloWorld.prototype.intentHandlers["SelectPokemonIntent"] = function(request, session, response) {
    console.log(AlexaAssets);
    response.tell(AlexaAssets.Welcome.speechOutput);
}
