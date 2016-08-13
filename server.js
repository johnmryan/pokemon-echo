var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// serves the files under src/client/ so that they are accessible (i.e. available to index.html)
// app.use('/src/client', express.static(__dirname + '/src/client'));
app.use(express.static(__dirname + '/src/client'));

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/src/client/app/index.html');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
