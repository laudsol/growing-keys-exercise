const chai = require('chai');
const assert = chai.assert;

const growingKeys = require('../growingKeys');

describe('growingKeys', function(){
  it('should return properly',function(){
    assert.equal(growingKeys('f',2),{ f: true, ff: true });
  });
});
