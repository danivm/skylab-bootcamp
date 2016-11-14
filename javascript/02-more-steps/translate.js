// translate()

function translate(text){
	var a='';
	var textTra='';
	var vowels=['aeiou'];
	for (var i = 0; i < text.length; i++) {
		a=text[i];
		if((vowels.indexOf(a.toLowerCase())!==-1)||(a==' ')) {
			textTra+=a;
		} else {
			textTra+=a+'o'+a;
		}
	}
	return(textTra);
}