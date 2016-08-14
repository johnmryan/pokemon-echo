var Pokemon = require("./Pokemon");

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the Pokemon skill.
    var pokemon = new Pokemon();
    pokemon.execute(event, context);
};
