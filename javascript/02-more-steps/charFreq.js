// charFreq()

function charFreq(text){
	var result={};
	var char=''
	// Ini
	for (var x = 0; x < text.length; x++) {
		char=text[x];
		result[char]=0;
	}
	// Sum
	for (var x = 0; x < text.length; x++) {
		char=text[x];
		result[char]++;
	}
	return(result);
}