var AlexaAssets = require("../AlexaAssets");

function handleSelectPokemonRequest (intent, session, response) {

    playerCount = session.attributes.playerCount;

    var pokemonName = null;
    if (intent.slots.PokemonName && intent.slots.PokemonName.value) {
        pokemonName = intent.slots.PokemonName.value;
    }

    if (pokemonName) {
        // increment currPlayer
        allPlayersHaveSelected = (playerCount===session.attributes.currPlayer++);
        response.ask(
            AlexaAssets.SelectPokemon.speechOutput(pokemonName),
            AlexaAssets.SelectPokemon.repromptOutput(),
        );

    } else {
        // currPlayer stays the same
        response.ask(
            AlexaAssets.SelectPokemonError.speechOutput,
            AlexaAssets.SelectPokemonError.repromptOutput
        );
    }
}

module.exports = handleSelectPokemonRequest;
