function randomLargest() {
	var num1=Math.round(Math.random()*100);
	var num2=Math.round(Math.random()*100);
	var num3=Math.round(Math.random()*100);
	console.log(num1+'-'+num2+'-'+num3);
    if ((num1>=num2)&&(num1>=num3)){
    	return num1
    } else if (num2>=num3) {
    	return num2
    } else {
    	return num3
    }
}