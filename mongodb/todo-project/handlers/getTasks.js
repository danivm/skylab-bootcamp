function getTasks(db, req, res) {
	const { skip, limit, projection } = req
	db.collection("tasks")
		.find( { done: false } , projection )
		.toArray()
		.then( data => res.json(data) )
		.catch( err => console.log(err) )
}

module.exports = getTasks;