function randomSum() {
	var num=0;
	var result=0;
	while (num<1000 || num>9999) {
		num=Math.round(Math.random()*10000);
	}
	console.log(num);
	for (var i = 0; i < num.toString().length; i++) {
		result+=parseInt(num.toString()[i],10)
	}
	return result;
}