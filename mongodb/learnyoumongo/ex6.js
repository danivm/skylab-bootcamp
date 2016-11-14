var MongoClient = require('mongodb').MongoClient;
var dbName = process.argv[2]

// Connection URL
var url = 'mongodb://localhost:27017/'+dbName;
// Use connect method to connect to the Server
MongoClient.connect(url, (err, db) => {
	if (err) throw("There were problems connecting to the DB server...");

	db.collection('users')
		.update({
      		"name": "Tina",
      		"age": 30,
      		"username": "tinatime"
    	}, {
      		$set: {
        		age: 40
      		}
    	}, ()=> db.close())

});

