var aiController = require("./ai-controller.js");
aiController.makeMove();

var db = require("./db.js");

module.exports.useItem = function(req, res) {
    console.log(process.env.FIREBASE_URL);
    res.send({"success":process.env.FIREBASE_URL});
}
