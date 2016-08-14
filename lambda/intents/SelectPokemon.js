var AlexaAssets = require("../AlexaAssets");
var apiPost = require("./apiPost");

function handleSelectPokemonRequest (intent, session, response) {

    playerCount = session.attributes.playerCount;

    var pokemonName = null;
    if (intent.slots.PokemonName && intent.slots.PokemonName.value) {
        pokemonName = intent.slots.PokemonName.value;
    }

    if (pokemonName) {
        var body = {
            "pokemon": pokemonName,
            "player": ""+session.attributes.currPlayer
        };
        // increment currPlayer
        allPlayersHaveSelected = (playerCount==session.attributes.currPlayer++);
        // Post to Pokemon endpoint
        apiPost("choosePokemon",body,function(){

            if (allPlayersHaveSelected) {
                // reset to first player
                session.attributes.currPlayer = 1;
                response.ask(
                    AlexaAssets.PokemonSelected.speechOutput(playerCount,pokemonName)
                    +" "+AlexaAssets.ReadyToBattle.speechOutput
                    +" "+AlexaAssets.SelectAttack.speechOutput(session.attributes.currPlayer),
                    AlexaAssets.SelectAttack.repromptOutput(session.attributes.currPlayer)
                );

            } else {
                response.ask(
                    AlexaAssets.PokemonSelected.speechOutput(session.attributes.currPlayer-1,pokemonName)+" "+AlexaAssets.SelectPokemon.speechOutput(session.attributes.currPlayer),
                    AlexaAssets.SelectPokemon.repromptOutput(session.attributes.currPlayer)
                );
            }
        });

    } else {
        // currPlayer stays the same
        response.ask(
            AlexaAssets.SelectPokemonError.speechOutput,
            AlexaAssets.SelectPokemonError.repromptOutput
        );
    }
}

module.exports = handleSelectPokemonRequest;
