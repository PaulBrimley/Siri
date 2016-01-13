var express = require('express');
var app = express();

var port = 8887;
app.listen(port, function() {
	console.log('Listening on port ' + port);
});

var messages = ["Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that.", "What is that on your face?", "How would you like some peanut butter with that?"];

function getRandomMessage(messageArray) {
	var randomNum = Math.floor((Math.random() * messageArray.length));
	var returnedMessage = messageArray[randomNum];
	return returnedMessage;
}


app.get('/', function(req, res, next) {
	res
	.status(200).set({
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		'X-XSS-Protection': '1; mode=block',
		'X-Frame-Options': 'SAMEORIGIN',
		'Content-Security-Policy': "default-src 'self' devmountain.github.io"
	})
	.send(JSON.stringify({
		message: getRandomMessage(messages)	
	}));
});