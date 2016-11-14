function rockPaperScissors(mov1,mov2){
	if (mov2==undefined){
			var random=Math.random()
			if(random>=0.33){
				mov2="PAPER"
			} else if (random>=0.66){
				mov2="SCISSORS"
			} else {
				mov2="ROCK"
			}			
		}		
		if(mov1==mov2){return (mov1+" VS "+mov2+" ==> tie!")};
		if((mov1=="PAPER")||(mov2=="PAPER")){
			if((mov1=="ROCK")||(mov2=="ROCK")){				
				if(mov1=="PAPER"){this.player1++}else{this.player2++}
				return (mov1+" VS "+mov2+" ==> PAPER wins!")
			} else {				
				if(mov1=="SCISSORS"){this.player1++}else{this.player2++}
				return (mov1+" VS "+mov2+" ==> SCISSORS wins!")
			}
		} else {			
			if(mov1=="ROCK"){this.player1++}else{this.player2++}
			return (mov1+" VS "+mov2+" ==> ROCK wins!")
		}
};
var game = {
	player1: 0,
	player2: 0,
	rockPaperScissors: rockPaperScissors,
	winner: function(){
		if(this.player1==this.player2){return "tie!"};
		if(this.player1>this.player2){return "player 1 is winning!"};
		if(this.player1<this.player2){return "player 2 is winning!"};
	}
}