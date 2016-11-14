describe("function drinkAbout", function() {
    
  it("should exist", function(){
    expect( drinkAbout ).toBeDefined();             
  });

  it("should be defined w/  one argument", function(){
    expect( drinkAbout.length ).toBe(1);             
  });

  it("should return a string", function(){
    expect( typeof drinkAbout() ).toBe("string");
  });

  it("peopleWithAgeDrink(13) === drink toddy", function(){
    expect( drinkAbout(13) ).toBe("drink toddy");
  });

  it("peopleWithAgeDrink(17) === drink coke", function(){
    expect( drinkAbout(17) ).toBe("drink coke");
  });

  it("peopleWithAgeDrink(18) === drink beer", function(){
    expect( drinkAbout(18) ).toBe("drink beer");
  });

  it("peopleWithAgeDrink(20) === drink beer", function(){
    expect( drinkAbout(20) ).toBe("drink beer");
  });

  it("peopleWithAgeDrink(30) === drink whisky", function(){
    expect( drinkAbout(30) ).toBe("drink whisky");
  });

});