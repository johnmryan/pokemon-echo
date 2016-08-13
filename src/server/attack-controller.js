var firebase = require("./db.js");
var db = firebase.database();
var ref = db.ref("gamestate1");

module.exports.attack = function(req, res) {
    //add event for given attack
    var pokeAttack = req.body.attack;
    var pokeName = req.body.pokemon;
    var eventRef = ref.child("events");
    eventRef.push(pokeName + " used " + pokeAttack + "!");
    
    //decrease health of opposing pokemon by corresponding amount
    ref.on("value", function(snapshot) {
        var gs = snapshot.val();
        var currentPlayer = gs.currentPlayer;
        var attackSnap = snapshot.child("player" + currentPlayer).child("pokemon").child(pokeName).child("attacks").child(pokeAttack).val();
        var damage = parseInt(attackSnap.power);
        damage *= 0.2;
        var opposingPlayer = 3 - parseInt(currentPlayer);
        var opposingPoke = snapshot.child("player" + opposingPlayer).val().currentPokemon;
        var opposing_health = snapshot.child("player" + opposingPlayer).child("pokemon").child(opposingPoke).val().current_health;
        var opposingRef = ref.child("player" + opposingPlayer).child("pokemon").child(opposingPoke);
        opposingRef.update({
            current_health: opposing_health - damage
        });
        ref.update({
            currentPlayer : {
                opposingPlayer : opposingPlayer
            }
        });
        res.json({"success":"true"});
    });
}
