var request = require('request');
var fs = require('fs');


fs.readFile('link.txt', 'utf-8',function (err, link) {
	if (err) {
		console.log(err) ;
	} else {
		request(link, function (error, response, body) {
			if (!error && response.statusCode == 200) {
   				console.log(body) // Show the HTML for the Google homepage.
   			}
   		})
	}
});


