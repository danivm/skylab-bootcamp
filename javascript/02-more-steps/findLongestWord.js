function findLongestWord(list) {
	var result='';
	for (var i = 0; i < list.length; i++) {
		if (list[i].length > result.length) {
			result=list[i];
		}
	}
	return result
}