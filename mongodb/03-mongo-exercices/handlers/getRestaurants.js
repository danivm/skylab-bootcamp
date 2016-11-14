function getRestaurants(db, req, res) {

	const { skip, limit, projection } = req
	db.collection("restaurants")
		.find( { } , projection )
		.limit( limit )
		.skip( skip )
		.toArray()
		.then( data => res.json(data) )
		.catch( err => console.log(err) )

}

module.exports = getRestaurants;