var firebase = require("firebase");
firebase.initializeApp({
    serviceAccount: {
        projectId: "PokemonEcho",
        clientEmail: process.env.FIREBASE_EMAIL,
        privateKey: "-----BEGIN PRIVATE KEY-----\n" + process.env.FIREBASE_KEY + "\n-----END PRIVATE KEY-----\n"
    },  
    databaseURL: process.env.FIREBASE_URL
});
module.exports = firebase
