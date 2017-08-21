const chai = require('chai');
const assert = chai.assert;

const growingKeys = require('../growingKeys');

describe('growingKeys', function(){
  it('should return an object with growing keys',function(){
    assert.deepEqual(growingKeys('f',2),{f: true, ff:true});
  });
  it('should return -1 if val is not a string',function(){
    assert.deepEqual(growingKeys([],1),-1);
  });
  it('should return -1 if num is not a number',function(){
    assert.deepEqual(growingKeys('r','p'),-1);
  });

});
