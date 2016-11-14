function getRestaurantsByCuisine(db, req, res) {

	const { skip, limit, projection } = req
	const cuisine = req.params.cuisine;

	db.collection("restaurants")
		.find( { cuisine } , projection )
		.limit( limit )
		.skip( skip )
		.toArray()
		.then( data => res.json(data) )
		.catch( err => console.log(err) )
}

module.exports = getRestaurantsByCuisine;