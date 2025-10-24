
const { add, subtract, multiply, divide } = require('./calculator');

test('add: 3 + 3 = 6', () => 
    {

  expect(add(3, 3)).toBe(6);

});


test('subtract: 5 - 3 = 2', () =>
     {
  expect(subtract(5, 3)).toBe(2);

});


test('multiply: 4 * 4 = 16', () =>
     {
  expect(multiply(4, 4)).toBe(16);


});


test('divide: 10 / 5 = 2', () =>
    
    {
  expect(divide(10, 5)).toBe(2);

});

test('divide: division by zero throws', () => 
    {
  expect(() => divide(7, 0)).toThrow('Divide by zero');

});

