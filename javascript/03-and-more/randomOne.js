function randomOne(){
	var randomNum=0;
	var result=0;
	var aux=0;
	while (randomNum<1000 || randomNum>9999) {
		randomNum=Math.round(Math.random()*10000);
	}
	randomNum=randomNum.toString();
	console.log(randomNum);
	for (var i = 0; i < randomNum.length; i++) {
		aux+=parseInt(randomNum[i],10)
		if(aux<10){
			result=aux
		} else {
			break
		}
	}
	return result;
}