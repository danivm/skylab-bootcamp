function multTable(){
	var txt='';
	for (var x = 1; x <= 10; x++) {
		txt+='\n'
		for (var y = 1; y <= 10; y++) {
			txt+=(x*y)+'\t'
			if(y==10){
				txt+='\n';
			}
		}
	}
	return(txt);
}