var firebase = require("./db.js");
var db = firebase.database();
var ref = db.ref("gamestate1");

module.exports.choosePokemon = function(req, res) {
    console.log(req.body);
    var player = req.body.player;
    var pokemon = req.body.pokemon;
    var playerRef = ref.child("player" + player);
    playerRef.update({
        currentPokemon: pokemon
    });
    res.send({"success":"true"});
}
