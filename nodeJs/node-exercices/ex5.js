var fs = require('fs');
var file = process.argv[2]
var text = process.argv[3]

fs.writeFile(file, text, function(err){
	if (err) {
		console.log(err)
	} else {
		console.log("The file was saved!")
		console.log(fs.readFileSync(file,'utf-8'))
	}
})