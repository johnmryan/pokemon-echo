var AlexaSkill = require("./AlexaSkill");
var eventHandlers = require("./EventHandlers");
var intentHandlers = require("./IntentHandlers");

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

// Register Event Handlers
eventHandlers.register(HelloWorld.prototype.eventHandlers);

// Register Intent Handlers
intentHandlers.register(HelloWorld.prototype.intentHandlers);


module.exports = HelloWorld;
