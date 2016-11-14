function showTasks() {
	$.ajax({
		url: '/data',
		method: 'GET'
	})
	.done(function(aTasks ) {
		var aNameTasks = aTasks.map( task => `<li>${task.name}</li>` )
		$("#tasks").html( aNameTasks.join('') )
	})
}
showTasks();

$("#tasks_form").on('submit', (event) => {

	event.preventDefault();

	var name = $("#task_name").val();

	$.ajax({
		url: "/data",
		method: 'POST',
		data: { name, done:false }
	})
	.done(function( ) {
		console.log('task added...')
		showTasks();
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});

});




