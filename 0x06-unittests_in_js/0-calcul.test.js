const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when inputs are 1 and 3', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 when inputs are 1.4 and 3.6', () => {
    assert.strictEqual(calculateNumber(1.4, 3.6), 5);
  });

  it('should return 6 when inputs are 2.5 and 3.5', () => {
    assert.strictEqual(calculateNumber(2.5, 3.5), 7);
  });

  it('should return 0 when inputs are 0.1 and 0.3', () => {
    assert.strictEqual(calculateNumber(0.1, 0.3), 0);
  });

  it('should return -4 when inputs are -1.4 and -2.6', () => {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  });

  it('should return -5 when inputs are -1.5 and -3.5', () => {
    assert.strictEqual(calculateNumber(-1.5, -3.5), -4);
  });
});