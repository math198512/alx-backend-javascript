const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    const calculateNumberSpy = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberSpy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(calculateNumberSpy.calculateNumber.callCount).to.be.equal(1);
    calculateNumberSpy.calculateNumber.restore();
  });
});