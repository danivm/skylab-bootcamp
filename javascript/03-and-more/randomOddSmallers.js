function randomOddSmallers(){
	var result=[];
	var num=Math.round(Math.random()*100);
	if(num>=40){
		for (var i = 40; i <= num; i++) {
			if((i%2)==0){
				result.push(i);
			}
		}
	} else {
		for (var i = 40; i >= num; i--) {
			result.push(i);
		}
	}
	return result
}