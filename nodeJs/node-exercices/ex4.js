var fs = require('fs');

listFiles = fs.readdirSync('.')



function logArrayElements(element, index, array) {
	if (fs.lstatSync(element).isDirectory()){
		console.log('DIR: '+element)
	} else {
		console.log('FILE: '+element)
	}
}
listFiles.forEach(logArrayElements);

