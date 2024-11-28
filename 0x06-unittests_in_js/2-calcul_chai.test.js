const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const expect = chai.expect;

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return the sum of two rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
      expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
      expect(calculateNumber('SUM', 2.5, 2.5)).to.equal(6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return the difference of two rounded numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
      expect(calculateNumber('SUBTRACT', 3.7, 1.2)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 2.5, 2.5)).to.equal(0);
    });
  });

  describe('DIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      expect(calculateNumber('DIVIDE', 4.5, 1.4)).to.equal(5);
      expect(calculateNumber('DIVIDE', 3.7, 1.2)).to.equal(4);
      expect(calculateNumber('DIVIDE', 2.5, 2.5)).to.equal(1);
    });

    it('should return "Error" when dividing by zero', () => {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 2.5, 0)).to.equal('Error');
    });
  });
});