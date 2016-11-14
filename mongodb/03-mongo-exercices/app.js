const express = require('express')
const MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017/test"
const PORT = 3000;
const app = express();

const prepareParams = require('./middleware/prepareParams')
const getRestaurants = require('./handlers/getRestaurants')
const getRestaurantsByBorough = require('./handlers/getRestaurantsByBorough')
const getRestaurantsByCuisine = require('./handlers/getRestaurantsByCuisine')
const getRestaurantsByNotCuisine = require('./handlers/getRestaurantsByNotCuisine')
const getRestaurantsById = require('./handlers/getRestaurantsById')

MongoClient.connect(url, (err, db) => {

	if (err) throw err;
	console.log("connected to DB...")

	app.use( prepareParams )
	app.get('/restaurants', getRestaurants.bind(null, db) )
	app.get('/restaurants/borough/:borough', getRestaurantsByBorough.bind(null, db) )
	app.get('/restaurants/cuisine/:cuisine', getRestaurantsByCuisine.bind(null, db) )
	app.get('/restaurants/cuisine/not/:cuisine', getRestaurantsByNotCuisine.bind(null, db) )
	app.get('/restaurants/:id', getRestaurantsById.bind(null, db) )

	// app.get('/movies/countries/:country', getMoviesByCountry.bind(null, db))

})

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) ) 