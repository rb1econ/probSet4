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

// var numberCheck = function(str){
// 	console.log(isNaN(str));
// };

// numberCheck('e');