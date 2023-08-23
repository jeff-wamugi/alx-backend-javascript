const expect = require('chai').expect;
const request = require('request');

describe('API test for route GET / in `api.js`', function() {
  it('Give correct status code', function(done) {
    request({
      url: 'http://localhost:7865/',
      method: 'GET'
    }, (err, res, body) => {
      if (err) {
        console.log(err);
      }

      expect(res.statusCode).to.equal(200);
      done();
    });
  });

    it('Give correct output for get', function(done) {
    request({
      url: 'http://localhost:7865/',
      method: 'GET'
    }, (err, res, body) => {
      if (err) {
        console.log(err);
      }

      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('API test with number param passed to GET /cart', function () {
  it('gives correct status code when number passed', function(done) {
    request({
      url: 'http://localhost:7865/cart/12',
      method: 'GET'
    }, (err, res, body) => {
      if (err) {
        console.log(err);
      }

      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('gives correct response when number passed', function(done) {
    request({
      url: 'http://localhost:7865/cart/12',
      method: 'GET'
    }, (err, res, body) => {
      if (err) {
        console.log(err);
      }

      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('gives correct statusCode when a number is not passed', function(done) {
    request({
      url: 'http://localhost:7865/cart/hello',
      method: 'GET'
    }, (err, res, body) => {
      if (err) {
        console.log(err);
      }

      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
