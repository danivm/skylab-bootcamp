const express = require('express');
const PORT = process.argv[2];
const ENVIROMENT = process.env.ENVIROMENT;

let app = express();

app.get('/about', (request,response) => {
	console.log("request received!")
	if (ENVIROMENT=='development') {
		response.send("You're in about (development)")
	} else {
		response.send("You're in about (production)")
	}
});
app.get('/home', (request,response) => {
	console.log("request received!")
	if (ENVIROMENT=='development') {
		response.send("You're in home (development)")
	} else {
		response.send("You're in home (production)")
	}
});
app.get('/contact', (request,response) => {
	console.log("request received!")
	if (ENVIROMENT=='development') {
		response.send("You're in contact (development)")
	} else {
		response.send("You're in contact (production)")
	}
	
});

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}...`)
})