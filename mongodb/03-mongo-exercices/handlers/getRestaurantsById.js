const ObjectID = require('mongodb').ObjectID
function getRestaurantsById(db, req, res) {

	const { skip, limit, projection } = req
	const id = req.params.id

	db.collection("restaurants")
		.find( { _id: ObjectID(id) } , projection )
		.toArray()
		.then( data => res.json(data) )
		.catch( err => console.log(err) )
}

module.exports = getRestaurantsById;