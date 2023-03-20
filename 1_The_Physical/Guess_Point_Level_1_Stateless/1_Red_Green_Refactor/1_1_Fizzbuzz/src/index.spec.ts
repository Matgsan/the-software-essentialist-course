import fizzbuzz from './fizzbuzz';
describe("fizzbuzz", () => {

  it("returns a string", () => {
    expect(typeof fizzbuzz(5)).toBe('string');
  });

  it("returns the number as a string", () => {
    expect(fizzbuzz(5)).toBe('5');
  });

  it("returns Fizz for multiples of 3 and not multiples of 5", () => {
    for(let i = 3; i < 100; i += 3) {
      if(i % 5 === 0) continue;
      expect(fizzbuzz(i)).toBe('Fizz');
    }
  });
  
});
