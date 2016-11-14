function fizzBuzz(){
	var result = [];
	for (var i = 1; i <= 100; i++) {
		if((i%3==0)&&(i%5==0)){
			result.push('FizzBuzz')
		} else if(i%3==0) {
			result.push('Fizz')
		} else if(i%5==0){
			result.push('Buzz')
		} else {
			result.push(i);
		}		
	}
	return result;

}

/*

var fizzbuzz = function(){}

fizzBuzz = 

fizzBuzz(){
	var result = [];
	for (var i = 1; i <= 100; i++) {
		result.push(i);
	}
	return result;

}

fizzbuzz() = result

*/