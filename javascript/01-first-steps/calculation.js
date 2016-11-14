// Calculation

function calculation(){
	var x=0;
	var sum=0;
	var list=[];
	var txt='';
	while(x<500){
		sum+=x;
		list.push(x);
		x+=23;
	}
	txt+='Elements : '+list.join(" ")+'\n';
	txt+='Sum : '+sum;
	return(txt);
}
