// Hexadecimal enhanced

function getRGB(color) {
	var txt='';
	var txtColor=''

	var red=color.substr(1,2);
	var green=color.substr(3,2);
	var blue=color.substr(5,2);

	red=red.toString();
	red=parseInt(red,16);
	green=green.toString();
	green=parseInt(green,16);
	blue=blue.toString();
	blue=parseInt(blue,16);

	switch(color){
		case '#000000':
			txtColor='black';
			break;
		case ('#FFFFFF' || '#ffffff'):
		    txtColor='white';
		    break;
		case ('#FF0000' || '#ff0000'):
		    txtColor='red';
		    break;
		case ('#00FF00' || '#00ff00'):
		    txtColor='green';
		    break;
		case ('#0000FF' || '#0000ff'):
		    txtColor='white';
		    break; 
	}	

	txt='rgb('+red+','+green+','+blue+')'+' '+txtColor;
	return(txt);
}