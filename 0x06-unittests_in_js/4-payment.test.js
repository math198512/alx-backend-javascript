const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    const bigBrother = sinon.spy(console);
    const myFunctionStub = sinon.stub(Utils, 'calculateNumber');
    myFunctionStub.returns(10);
    sendPaymentRequestToApi(100, 20);

    expect(myFunctionStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(myFunctionStub.callCount).to.be.equal(1);
    expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
    expect(bigBrother.log.callCount).to.be.equal(1);
    myFunctionStub.restore();
    bigBrother.log.restore();
  });
});