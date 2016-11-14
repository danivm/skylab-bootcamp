function randomOdd() {
	var result=[];
	var num=Math.round(Math.random()*100);
    for (var i = 40; i <= num; i++) {
    	if((i%2)==0){
    		result.push(i);
    	}
    }
    return result;
}