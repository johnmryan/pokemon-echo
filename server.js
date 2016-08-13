var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.set('port', (process.env.PORT || 5000));

// serves the files under src/client/ so that they are accessible (i.e. available to index.html)
// app.use('/src/client', express.static(__dirname + '/src/client'));
app.use(express.static(__dirname + '/src/client'));

// create controllers to be used for API calls
var attackController = require("./src/server/attack-controller.js");
var itemController = require("./src/server/item-controller.js");
var pokeController = require("./src/server/pokemon-controller.js");

app.post('/api/attack', attackController.attack);
app.post('/api/useItem', itemController.useItem);
app.post('/api/choosePokemon', pokeController.choosePokemon);

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/src/client/app/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

module.exports = app
