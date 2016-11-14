function getRestaurantsByBorough(db, req, res) {

	const { skip, limit, projection } = req
	const borough = req.params.borough;

	db.collection("restaurants")
		.find( { borough } , projection )
		.limit( limit )
		.skip( skip )
		.toArray()
		.then( data => res.json(data) )
		.catch( err => console.log(err) )
}

module.exports = getRestaurantsByBorough;