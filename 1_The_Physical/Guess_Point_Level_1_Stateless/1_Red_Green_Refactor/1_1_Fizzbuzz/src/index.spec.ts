import fizzbuzz from './fizzbuzz';
describe("fizzbuzz", () => {

  it("returns a string", () => {
    expect(typeof fizzbuzz(5)).toBe('string');
  });

  it("returns the number as a string", () => {
    expect(fizzbuzz(1)).toBe('1');
  });

  it("returns Fizz for multiples of 3 and not multiples of 5", () => {
    for(let i = 3; i < 100; i += 3) {
      if(i % 5 === 0) continue;
      expect(fizzbuzz(i)).toBe('Fizz');
    }
  });

  it("returns Buzz for multiples of 5 and not multiples of 3", () => {
    for(let i = 5; i < 100; i += 5) {
      if(i % 3 === 0) continue;
      expect(fizzbuzz(i)).toBe('Buzz');
    }
  });
  
});
