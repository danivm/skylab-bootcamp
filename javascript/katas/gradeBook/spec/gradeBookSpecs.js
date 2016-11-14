describe("function gradeBook", function() {
    
  it("should exist", function(){
    expect( gradeBook ).toBeDefined();             
  });
  it("should return a string", function(){
    expect( typeof gradeBook() ).toBe("string");
  });
  it("should result a char", function(){
    expect( gradeBook().length ).toBe(1);             
  });
  it("gradeBook(90,90,90) ==> A", function(){
    expect( gradeBook(90,90,90) ).toBe("A");
  });
  it("gradeBook(80,80,80) ==> B", function(){
    expect( gradeBook(80,80,80) ).toBe("B");
  });
  it("gradeBook(70,70,70) ==> C", function(){
    expect( gradeBook(70,70,70) ).toBe("C");
  });
  it("gradeBook(60,60,60) ==> D", function(){
    expect( gradeBook(60,60,60) ).toBe("D");
  });
  it("gradeBook(50,50,50) ==> F", function(){
    expect( gradeBook(50,50,50) ).toBe("F");
  });
  it("should work with more arguments", function(){
    expect( gradeBook(70,70,70,70,70) ).toBe("C");
  });
  
});