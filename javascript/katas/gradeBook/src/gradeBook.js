function gradeBook(){		
	var total = arguments.reduce( function(acc,elem){
		acc+=elem
	},0);
	var avg = total/arguments.length
	if (avg>=90) return "A"
	if (avg>=80) return "B"
	if (avg>=70) return "C"	
	if (avg>=60) return "D"
	return "F"
}