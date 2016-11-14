function listNum(x1,x2){
	if(x2<x1){
		return -1;
	} else {
		var list=[];
		for (var i = x1; i <= x2; i++) {
			list.push(i);
		}
		return list;
	}
}