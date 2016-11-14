const express = require('express')
const bodyparser = require('body-parser')
var moment = require('moment');
const app = express()
const PORT = 3000;

let tasks = [
	{
		id: 0,
		desc: 'Flight tickets to Canada',
		done: false,
		newDate: moment().format()
	},
	{
		id: 1,
		desc: 'Buy gold',
		done: false,
		newDate: moment().format()
	}
]
let counter = 2;

app.set('view engine', 'pug')
app.use( express.static('public') )
app.use( bodyparser.urlencoded({ extended: false }) )

app.get('/', (req,res) => {
	const title = "TODO Tasks"
	const pending = tasks.filter( task => task.done === false );
	res.render('index', { title, pending } )
})

app.get('/completed', (req,res) => {
	const title = "COMPLETED Tasks"
	const completed = tasks.filter( task => task.done === true );
	res.render('completed', { title, completed } )
})

app.get('/tasks', (req,res) => {
	res.json(tasks)
})

// curl --request POST 'http://localhost:3000/task' --data 'desc=My new task'
app.post('/task', (req,res) => {
	var newTask = req.body;
	newTask.done = false;
	newTask.id = counter++;
	newTask.newDate =  moment().format();
	tasks.push(newTask);
	res.redirect('/');
})

// curl --request DELETE 'http://localhost:3000/task/2'
app.delete('/task/:id', (req,res) => {
	const id = +req.params.id;
	tasks = tasks.filter( task => task.id != id );
	res.sendStatus(200)
})

// curl -X PUT http://localhost:3000/task/2 --data done=true
app.put('/task/:id', (req,res) => {
	const id = +req.params.id;

	const isDone = (req.body.done === "true") ? true : false;

	tasks = tasks.map( task => {
		if ( task.id === id ) {
			task.done = isDone
		}
		return task;
	});

	res.sendStatus(200)
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}...`) )