const chai = require('chai');
const calculateNumber = require('./1-calcul');

const expect = chai.expect;

describe('calculateNumber', () => {
  it('should return the sum of two rounded numbers', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 1.2, 3.8)).to.equal(5);
    expect(calculateNumber('SUM', 2.5, 2.5)).to.equal(6);
  });

  it('should return the difference of two rounded numbers', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 3.2, 1.8)).to.equal(1);
    expect(calculateNumber('SUBTRACT', 2.5, 2.5)).to.equal(0);
  });

  it('should return the division of two rounded numbers', () => {
    expect(calculateNumber('DIVIDE', 4.4, 2.2)).to.equal(2);
    expect(calculateNumber('DIVIDE', 5.5, 2.5)).to.equal(2);
    expect(calculateNumber('DIVIDE', 9.8, 2.1)).to.equal(5);
  });

  it('should return "Error" when dividing by zero', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 2.5, 0)).to.equal('Error');
  });

  it('should return 0 for unknown type', () => {
    expect(calculateNumber('MULTIPLY', 1.4, 4.5)).to.equal(0);
    expect(calculateNumber('UNKNOWN', 2.5, 2.5)).to.equal(0);
  });
});