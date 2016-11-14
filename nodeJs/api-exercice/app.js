var express = require('express')
var fs = require('fs')
var app = express();
var students;

app.use(express.static('public'));

app.get('/data', (req, res) => {
	var nameStudent = req.query.name
	console.log(nameStudent)
	fs.readFile( 'students.json', function(error, data){
		if(error) return res.sendStatus(500)
		try {
			students = JSON.parse(data);
		}
		catch(e) {
			res.sendStatus(500);
		}
		students = students.filter((student)=> student.name.includes(nameStudent))
		res.json(students)
	})
});
// app.get('/filter', (req,res) => {
// 	console.log(params)
// 	res.json(req.params.name)
// })

app.listen(3000)