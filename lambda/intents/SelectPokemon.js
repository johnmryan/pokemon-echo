var AlexaAssets = require("../AlexaAssets");

function handleSelectPokemonRequest (intent, session, response) {

    playerCount = session.attributes.playerCount;

    var pokemonName = null;
    if (intent.slots.PokemonName && intent.slots.PokemonName.value) {
        pokemonName = intent.slots.PokemonName.value;
    }

    if (pokemonName) {
        // increment currPlayer
        allPlayersHaveSelected = (playerCount==session.attributes.currPlayer++);
        if (allPlayersHaveSelected) {
            response.tell(
                AlexaAssets.PokemonSelected.speechOutput(session.attributes.currPlayer-1,pokemonName)+" "+AlexaAssets.ReadyToBattle.speechOutput
            );
        } else {
            response.ask(
                AlexaAssets.PokemonSelected.speechOutput(session.attributes.currPlayer-1,pokemonName)+" "+AlexaAssets.SelectPokemon.speechOutput(session.attributes.currPlayer),
                AlexaAssets.SelectPokemon.repromptOutput(session.attributes.currPlayer)
            );
//POSTTEST
var request = require('request');

// Set the headers
var headers = {
    'User-Agent':       'Super Agent/0.0.1',
    'Content-Type':     'application/json'
}

// Configure the request
var options = {
    url: 'http://pokemon-echo.herokuapp.com/api/choosePokemon',
    method: 'POST',
    headers: headers,
    form: {'pokemon': pokemonName, 'player': session.attributes.currPlayer}
}

// Start the request
request(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        // Print out the response body
        console.log(body)
    }
})
//POSTTEST
        }

    } else {
        // currPlayer stays the same
        response.ask(
            AlexaAssets.SelectPokemonError.speechOutput,
            AlexaAssets.SelectPokemonError.repromptOutput
        );
    }
}

module.exports = handleSelectPokemonRequest;
