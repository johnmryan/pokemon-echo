var firebase = require("./db.js");
var db = firebase.database();
var ref = db.ref("gamestate1");

module.exports.attack = function(req, res) {
    console.log(req.body);
    //add event for given attack
    var pokeAttack = req.body.attack;
    var pokeName = req.body.pokemon;
    var eventRef = ref.child("events");
    eventRef.push(pokeName + " used " + pokeAttack + "!");
    
    //decrease health of opposing pokemon by corresponding amount
    ref.once("value", function(snapshot) {
        var gs = snapshot.val();
        var currentPlayer = gs.currentPlayer;
        var attackSnap = snapshot.child("player" + currentPlayer).child("pokemon").child(pokeName).child("attacks").child(pokeAttack).val();
        var damage = parseInt(attackSnap.power);
        damage *= 0.2;
        var attack_type = attackSnap.type;
        var opposingPlayer = 3 - parseInt(currentPlayer);
        var opposingPoke = snapshot.child("player" + opposingPlayer).val().currentPokemon;
        var opposing_health = snapshot.child("player" + opposingPlayer).child("pokemon").child(opposingPoke).val().current_health;
        var opposing_type = snapshot.child("player" + opposingPlayer).child("pokemon").child(opposingPoke).val().type;
        if (attack_type === "fire" && opposing_type === "water") {
            //not very effective
            eventRef.push("It's not very effective...");
            damage /= 2.0;
        } else if (attack_type === "lightning" && opposing_type === "water") {
            eventRef.push("It's super effective!");
            damage *= 2.0;
        } else if (attack_type === "water" && opposing_type === "fire") {
            eventRef.push("It's super effective!");
            damage *= 2.0;
        } 
        var new_opposing_health = opposing_health - damage;
        if (new_opposing_health <= 0) {
            eventRef.push(opposingPoke + " has fainted!");
            new_opposing_health = 0;
        }
        var opposingRef = ref.child("player" + opposingPlayer).child("pokemon").child(opposingPoke);
        opposingRef.update({
            current_health: new_opposing_health
        });
        ref.update({
            currentPlayer : opposingPlayer
        });
        res.json({"success":"true"});
    });
}
