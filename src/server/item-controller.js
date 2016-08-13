var aiController = require("./ai-controller.js");
aiController.makeMove();

var firebase = require("./db.js");
var db = firebase.database();
var ref = db.ref("gamestate1");
var player1ref = ref.child("player1");

module.exports.useItem = function(req, res) {
    
}
