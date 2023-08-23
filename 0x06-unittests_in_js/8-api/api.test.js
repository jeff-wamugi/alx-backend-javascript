const expect = require('chai').expect;
const request = require('request');

describe('API test from `api.js`', function() {
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
