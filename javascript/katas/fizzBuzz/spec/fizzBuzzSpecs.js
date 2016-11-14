describe("function fizzBuzz", function() {
    
  it("should exist", function(){
    expect( fizzBuzz ).toBeDefined();             
  });
  it("should return an array", function(){
    expect(typeof fizzBuzz() ).toBe("object");             
  });
  it("should return an array of 100", function(){
    expect(fizzBuzz().length).toBe(100);             
  });

  /*it("should return an array of 100", function(){
    expect(fizzBuzz(hacen faltan los parentesis  porque 
    length hace refencia al resultado de la funcion).length).toBe(100);             
  });*/
  it("should return 1 in first position", function(){
    expect(fizzBuzz()[0]).toBe(1);             
  });
  it("should return 'fizzBuzz' if i multiple of three & five", function(){
    expect(fizzBuzz()[14]).toBe('FizzBuzz');             
  });
  it("should return 'fizzBuzz' if i multiple of three", function(){
    expect(fizzBuzz()[2]).toBe('Fizz');             
  });
  it("should return 'fizzBuzz' if i multiple of five", function(){
    expect(fizzBuzz()[4]).toBe('Buzz');             
  });


});