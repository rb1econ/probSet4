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
		// console.log('i =: ', splitd[i].length);
		// console.log('i-1 =: ', splitd[i-1].length);
		if (splitd[i].length > highest.length){
			highest=splitd[i];
			console.log('splitd iiiiii', splitd[i])
		}
		// else if(splitd[i-1].length>splitd[i].length){
		// 	highest = splitd[i-1];
		// }
	}
	console.log(highest);
	// var word = 'parameterrrrr';
	// console.log(word.length);
};

longestWord('that a single parameterrrrr and searches for all the numbers in the string');