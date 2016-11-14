function multiply(){
	result=1;
	for (var i = 0; i < arguments.length; i++) {
		result*=arguments[i];
	}
	return result;
}