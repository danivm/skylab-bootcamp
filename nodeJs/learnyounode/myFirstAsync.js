var fs = require('fs');
var route = process.argv[2]


fs.readFile(route, 'utf-8',function (err, data) {
  if (err) {
  	console.log('ERROR: '+err) ;
  } else {
  	var count = data.split('\n').length - 1
	console.log(count);
  }
});