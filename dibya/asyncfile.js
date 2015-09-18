var fs = require 'fs'
var filename = process.argv[2]
var file = fs.readFileSync(filename)
var text = file.toString()
console.log(text.split("\n").length-1)

