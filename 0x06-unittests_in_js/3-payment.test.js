const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');
const sinon = require('sinon');

describe('sendPaymentRequestToApi', function () {
  it('should have SUM as first argument', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(10, 18);

    expect(spy.firstCall.args[0]).to.equal('SUM');
    sinon.restore()
  });

  it('should have correct second argument', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(10, 18);

    expect(spy.firstCall.args[1]).to.equal(10);
    sinon.restore()
  });

  it('should have correct third argument', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(20, -18);

    expect(spy.firstCall.args[2]).to.equal(-18);
    sinon.restore()
  });

  it('should have correct answer', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(10, 18);

    expect(spy.returnValues[0]).to.equal(28);
    sinon.restore()
  });

  it('correct answer when negative rounded numbers are passed', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(-10.3, -18.3);

    expect(spy.returnValues[0]).to.equal(-28);
    sinon.restore()
  });

  it('should have correct answer when one negative passed', function() {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(10, -18);

    expect(spy.returnValues[0]).to.equal(-8);
    sinon.restore()
  });
});
