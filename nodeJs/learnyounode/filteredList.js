var fs = require('fs');
var path = require('path');

var route = process.argv[2]
var ext = '.'+process.argv[3]

fs.readdir(route, function (err, list) {
  	if (err) {
  		console.log('ERROR: '+err) ;
  	} else {
  		for (var i = 0; i < list.length; i++) {
  			if (path.extname(list[i]) == ext) {
  				// filteredList.push(list[i])
  				console.log(list[i])
  			}
  		}
  		// console.log(filteredList);
 	}
});

// JUANMA:


// var fs = require('fs')
// var path = require('path')
// var dirName = process.argv[2];
// var fileExtension = "." + process.argv[3];

// fs.readdir(dirName, function(err, listFiles) {
//   if (err) return err;
//   listFiles.forEach( function(fileName){
//     if ( path.extname(fileName) === fileExtension ) {
//       console.log(fileName);
//     }
//   })
// })

// OFICIAL:

//      var fs = require('fs')  
//      var path = require('path')  
       
//      var folder = process.argv[2]  
//      var ext = '.' + process.argv[3]  
       
//      fs.readdir(folder, function (err, files) {  
//        if (err) return console.error(err)  
//        files.forEach(function (file) {  
//          if (path.extname(file) === ext) {  
//            console.log(file)  
//          }  
//        })  
//      }) 