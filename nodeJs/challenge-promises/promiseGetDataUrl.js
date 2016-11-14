const fs = require('fs')
const request = require('request');
const outFile = 'output.txt';
// 1st step - get array of links
const getLinks = ( fileName ) => {
	return new Promise( (resolve, reject) => {
		fs.readFile(fileName, 'utf-8',(err, links) => {
			"strict mode"
			if (err) {
				reject(err)
			} else {
				const linksArray = links.split('\n')
				resolve(linksArray)
			}
		})
	})
}
// 2nd step - get array of promises
const doRequestUrls = (links) => {

	const arrayPromisesRequest = links.map((link)=>{
		return new Promise( (resolve, reject)=>{
			request(link, function (error, response, body) {
				resolve(body.length+' - '+link);
			})
		})

	})

	return Promise.all(arrayPromisesRequest)
}
// 3th step - write file
const writeResults = (results) => {
	const text = results.join('\n');
	return new Promise((resolve, reject)=>{
		fs.writeFile(outFile, text, function(err){
			if (err) {
				console.log(err)
			} else {
				resolve("The file was saved!")
			}
		})
	})
}


// 4th step - call promise
getLinks('./urls.txt')
	.then(doRequestUrls)
	.then(writeResults)
	.then(console.log)

