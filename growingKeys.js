function growingKeys(val, num){

  var counter = 1;
  var tempKey = '';
  var obj = {};
  var reg = /^\d+$/;

  if(typeof val !== 'string'){
    return 'val must be a string'
  }
  if(reg.test(num) === false){
    return 'num must be a number'
  }
  while(counter <= num){
    counter += 1;
    tempKey+=val;
    obj[tempKey] = true;
  }
  return obj;
}

module.exports = growingKeys;
