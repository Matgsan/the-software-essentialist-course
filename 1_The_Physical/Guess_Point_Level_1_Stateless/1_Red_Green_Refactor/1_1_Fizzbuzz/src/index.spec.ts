import fizzbuzz from './fizzbuzz';
describe("fizzbuzz", () => {

  it("returns a string", () => {
    expect(typeof fizzbuzz(5)).toBe('string');
  });

  it("returns the number as a string", () => {
    expect(fizzbuzz(5)).toBe('5');
  });
  
});
