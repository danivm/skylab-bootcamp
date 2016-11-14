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

	var censoredPieceText = pieceText.split(' ')
		.map(function(word) {
			return word === "fuck" ? "*******" : word;
		})
		.map(function(word) {
			return word === "bitch" ? "*******" : word;
		})
		.map(function(word) {
			return word === "shit" ? "*******" : word;
		})

  this.push( censoredPieceText.join(' ') );
  next();
})

myReadFileStream
		.pipe(myTransformStreamCensorship)
    .pipe(myTransformStreamToUpper)
    .pipe(myWriteFileStream)