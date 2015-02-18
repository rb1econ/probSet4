$(document).on('ready', function() {
  
});

var addNumbers = function(str){
	var splitd = str.split('');
	var spliFilterd = splitd.filter(function(e){
		if(!isNaN(e) && e!=' '){return true}
	});
	var totald = 0;
	for(var i = 0; i<spliFilterd.length; i++){
		totald+=parseInt(spliFilterd[i]);
	}
	console.log(totald);
};

addNumbers('88Hello99 3Wo666rld!');

var longestWord = function(str){
	var splitd = str.split(' ');
	var highest = '';
	console.log(splitd.length)
	for(var i=0; i<splitd.length; i++){
		if (splitd[i].length > highest.length){
			highest=splitd[i];
			console.log('splitd iiiiii', splitd[i])
		}
	}
	console.log(highest);
	
};

longestWord('parameterrrrr that a single and searches for all the numbers in the string');