describe("function rockPaperScissors", function() {
    
  it("should exist", function(){
    expect( game.rockPaperScissors ).toBeDefined();             
  });
  it("should return a string", function(){
    expect( typeof game.ockPaperScissors("PAPER","PAPER") ).toBe("string");
  });
  it("should return a tie", function(){
    expect( game.rockPaperScissors("PAPER","PAPER") ).toBe("tie!");
  });
  it("should return PAPER win", function(){
    expect( game.rockPaperScissors("PAPER","ROCK") ).toBe("PAPER wins!");
  });
  it("should return SCISSORS win", function(){
    expect( game.rockPaperScissors("PAPER","SCISSORS") ).toBe("SCISSORS wins!");
  });
  it("should return ROCKS win", function(){
    expect( game.rockPaperScissors("ROCK","SCISSORS") ).toBe("ROCK wins!");
  });
  it("should works with only one argument", function(){
    expect( typeof game.rockPaperScissors("ROCK") ).toBe("string");
  });
  it("should return PAPER win", function(){
    expect( game.rockPaperScissors("ROCK","PAPER") ).toBe("ROCK VS PAPER ==> PAPER wins!");
  });
  it("should sum player2", function(){
    expect( game.player2).toBe(1);
  });
  it("should win player2", function(){
    expect( game.winner()).toBe("player 2 is winning!");
  });
  
});