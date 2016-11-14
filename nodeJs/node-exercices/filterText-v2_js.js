var fs = require('fs')
var through = require('through2');

var myReadFileStream = fs.createReadStream( 'test.txt','utf-8')
var myWriteFileStream = fs.createWriteStream('output.txt')

var myTransformStreamToUpper = through(function( chunk, _ , next) {
  this.push( chunk.toString().toUpperCase() );
  next();
})

var myTransformStreamCensorship = through(function( chunk, _ , next) {
	var pieceText = chunk.toString();
	censoredPieceText = pieceText.replace(/(fuck|bitch|shit)/g, '********');
  this.push( censoredPieceText );
  next();
})

myReadFileStream
		.pipe(myTransformStreamCensorship)
    .pipe(myTransformStreamToUpper)
    .pipe(myWriteFileStream)

myWriteFileStream.on("finish", function() {
	console.log("Write File Completed!")
})