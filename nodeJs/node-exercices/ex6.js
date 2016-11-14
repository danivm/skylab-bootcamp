var fs = require('fs')
var concat = require('concat-stream')
 
var readStream = fs.createReadStream('test.txt')
var concatStream = concat(gotArray)
 
readStream.on('error', handleError)
readStream.pipe(concatStream)
 
function gotArray(textBuffer) {
  // imageBuffer is all of `c at.png` as a node.js Buffer
}
 
function handleError(err) {
  // handle your error appropriately here, e.g.: 
  console.error(err) // print the error to STDERR 
  process.exit(1) // exit program with non-zero exit code 
}