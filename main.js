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
	return totald;
};

console.log(addNumbers('88Hello99 3Wo666rld!'));

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

var avgStrNum =function(str){
	var totald = addNumbers(str);
	var splitd = str.split('');
	var spliFilterd = splitd.filter(function(e){
		if(isNaN(e) && e!=' ' && e!='!' && e!='.' && e!=',' && e!='-' && e !=';'){return true}
	});
	console.log(spliFilterd);
	var numLetters = spliFilterd.length;
	return totald/numLetters
};

console.log(avgStrNum('Hello6 9World 2, Nic8e D7ay!'));