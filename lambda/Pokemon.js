var AlexaSkill = require("./AlexaSkill");
var eventHandlers = require("./EventHandlers");
var intentHandlers = require("./IntentHandlers");

/**
 * App ID for the skill
 */
var APP_ID = "amzn1.ask.skill.448c9d95-9faa-4e4e-a017-44f39965b1e0";

/*
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * HelloWorld inherits from AlexaSkill.
 */
var Pokemon = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Pokemon.prototype = Object.create(AlexaSkill.prototype);
Pokemon.prototype.constructor = Pokemon;

// Register Event Handlers
eventHandlers.register(Pokemon.prototype.eventHandlers);

// Register Intent Handlers
intentHandlers.register(Pokemon.prototype.intentHandlers);


module.exports = Pokemon;
