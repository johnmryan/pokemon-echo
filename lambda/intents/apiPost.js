var request = require('request');

function handlePostRequest (endpoint, body, callback) {

    // Set the headers
    var headers = {
        'Content-Type': 'application/json'
    }

    // Configure the request
    var options = {
        url:     'http://pokemon-echo.herokuapp.com/api/'+endpoint,
        method:  'POST',
        headers: headers,
        json:    body
    }

    // DUBUG
    console.log(options)

    // Start the request
    console.log("Posting Request...");
    request(options, function (error, response, body) {

        if (!error && response.statusCode == 200) {
            console.log(body);
            callback();

        } else {
            console.log("POST Error:");
            console.log(error);
            console.log(response.statusCode);
        }
    });
 
}

module.exports = handlePostRequest;
