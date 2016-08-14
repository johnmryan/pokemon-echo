var AlexaAssets = require("../AlexaAssets");
var apiPost = require("./apiPost");

function handleAttackRequest (intent, session, response) {

    var pokemonName=null, move=null;
    if (intent.slots.PokemonName && intent.slots.PokemonName.value) {
        pokemonName = intent.slots.PokemonName.value;
    }
    if (intent.slots.Move && intent.slots.Move.value) {
        move = intent.slots.Move.value;
    }

    console.log(intent.slots);
    console.log(pokemonName);
    console.log(move);
    if (pokemonName && move) {
        var body = {
            "pokemon": pokemonName,
            "attack": move
        };
        apiPost("attack",body,function(){
            response.ask(
                AlexaAssets.AttackUsed.speechOutput(pokemonName,move),
                AlexaAssets.SelectAttack.repromptOutput(session.attributes.currPlayer+1)
            );
            session.attributes.currPlayer = (session.attributes.currPlayer+1)%session.attributes.playerCount;
        });

    } else if (move) {
        response.ask(
            AlexaAssets.AttackSass.speechOutput(move),
            AlexaAssets.SelectAttack.repromptOutput
        );
    } else {
        response.ask(
            AlexaAssets.AttackError.speechOutput,
            AlexaAssets.AttackError.repromptOutput
        );
    }

}

module.exports = handleAttackRequest;
