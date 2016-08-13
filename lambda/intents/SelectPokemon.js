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
        if (allPlayersHaveSelected) {
            response.tell(
                AlexaAssets.PokemonSelected.speechOutput(pokemonName)+" "+AlexaAssets.ReadyToBattle.speechOutput
            );
        } else {
            response.ask(
                AlexaAssets.PokemonSelected.speechOutput(pokemonName)+" "+AlexaAssets.SelectPokemon.speechOutput(session.attributes.currPlayer),
                AlexaAssets.SelectPokemon.repromptOutput(session.attributes.currPlayer)
            );
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
