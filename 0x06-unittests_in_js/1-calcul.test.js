const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 1.2, 3.8), 5);
    assert.strictEqual(calculateNumber('SUM', 2.5, 2.5), 6);
  });

  it('should return the difference of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 3.2, 1.8), 1);
    assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 2.5), 0);
  });

  it('should return the division of two rounded numbers', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 4.2, 2.1), 2);
    assert.strictEqual(calculateNumber('DIVIDE', 2.5, 2.5), 1);
  });

  it('should return "Error" when dividing by zero', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 4.2, 0.1), 'Error');
  });

  it('should return 0 for unknown type', () => {
    assert.strictEqual(calculateNumber('MULTIPLY', 1.4, 4.5), 0);
  });
});