// filterLongWords()

function filterLongWords(list,len){
	var result=[];
	for (var i = 0; i < list.length; i++) {
		if (list[i].length > len) {
			result.push(list[i]);
		}
	}
	return result
}