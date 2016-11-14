const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')


const app = express();

app.use( express.static('../public')  )
app.use( bodyParser.urlencoded({ extended: false }) )

let tasks = [
	{
		"name": "Ir al super",
		"done": "false"
	},
	{
		"name": "Entregable La Salle",
		"done": "false"
	},  
]

app.get('/data', (req,res) => {
	res.json( tasks )
})

app.post('/data', (req,res) => {

	const newTask = req.body;
	tasks.push(newTask);
	console.log(newTask)
	console.log(tasks)
	res.sendStatus(200)
})


app.listen(3000, () =>  console.log("Listening on port 3000...."))