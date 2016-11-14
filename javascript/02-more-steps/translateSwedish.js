function translate(text){
	var dict=[["merry","god"],["christmas","jul"],["and","och"],["happy","gott"],["new","nytt"],["year","år"]]
	var result=[];
	var text=text.split(" ");
	var word=''
	for (var x = 0; x < text.length; x++) {
		word=text[x].toLowerCase();
		for (var y = 0; y < dict.length; y++) {
			if(dict[y][0]==word){
				result.push(dict[y][1]);
			}
		}
	}
	return result.join(" ")
}