var fs = require('fs');
var filename = process.argv[2];
var file = fs.readFile(filename, 
		function(err,data){
		if(!err){
		console.log(data.toString().split("\n").length-1);
		}
		});
