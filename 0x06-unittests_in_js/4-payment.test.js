const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function () {
  it ('check for argument passed in function', function() {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.returns(10);

    const consoleSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);

    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    stub.restore();
    consoleSpy.restore();
  });
});
