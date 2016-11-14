var fs = require('fs')
var path = require('path')
var getFilteredListDir = require("./getFilteredListDir.js")

var folder = process.argv[2]
var ext = process.argv[3]

getFilteredListDir(folder, ext, logItems)

function logItems(err, items) {
  items.forEach( function(item) {
    console.log(item)
  })
}