const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestApi function', function() {
  // hooks are functions that can be called before
  // execute one or all tests in a suite.
  let consoleSpy;

  beforeEach('Setup function spy', function() {
    consoleSpy = sinon.spy(console, 'log');
  })

  afterEach('end of function', function() {
    consoleSpy.restore()
  });

  it('check for correct output with 100 and 20', function() {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('check for correct output with 10 and 10', function() {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
