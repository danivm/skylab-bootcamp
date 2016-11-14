var MongoClient = require('mongodb').MongoClient;
var firstName = process.argv[2]
var lastName = process.argv[3]

var doc = { firstName, lastName }

// Connection URL
var url = 'mongodb://localhost:27017/learnyoumongo';
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
	if (err) throw("There were problems connecting to the DB server...");

	db.collection('docs')
		.insert(doc, function(err, data) {
			console.log(JSON.stringify(doc))
			db.close()
    	})

});