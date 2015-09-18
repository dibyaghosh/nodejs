var fs = require('fs');
var filename = process.argv[2];
fs.readdir(filename, 
	function(err, files){
		if(!err){
		for(i = 0; i< files.length; i++){
			if(files[i].lastIndexOf("."+process.argv[3])!=-1){
				console.log(files[i]);
			}
		}}
	});
			
