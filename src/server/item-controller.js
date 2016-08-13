var aiController = require("./ai-controller.js");
aiController.makeMove();

//var firebase = require("firebase");
//firebase.initializeApp({
//      serviceAccount: "path/to/serviceAccountCredentials.json",
//      databaseURL: process.env.FIREBASE_URL
//});

module.exports.useItem = function(req, res) {
    console.log(process.env.FIREBASE_URL);
    res.send({"success":process.env.FIREBASE_URL});
}
