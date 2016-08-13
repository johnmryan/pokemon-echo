var firebase = require("firebase");
firebase.initializeApp({
    serviceAccount: "src/server/PokemonEcho-d7dcb427bbf1.json",
    databaseURL: "https://pokemonecho-2ab05.firebaseio.com/"
});
module.exports = firebase
