var MongoClient = require('mongodb').MongoClient;
var age = +process.argv[2]
// Connection URL
var url = 'mongodb://localhost:27017/learnyoumongo';
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
	if (err) throw("There were problems connecting to the DB server...");

	db.collection('parrots')
		.find( { "age": { $gt : age } })
		.toArray()
		.then( console.log )
		.then( () => db.close() )
});